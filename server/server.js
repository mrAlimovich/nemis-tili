const express = require('express');
const cors = require('cors');
const path = require('path');
const os = require('os');
const bcrypt = require('bcryptjs');

const db = require('./db');
const { generateToken, authMiddleware } = require('./auth');
const curriculum = require('./curriculumData');
const vocabularyList = require('./vocabularyData');
const aiEngine = require('./aiEngine');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Helper to get local network IP
function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

// ----------------- AUTH ROUTES -----------------
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, targetLevel, goal } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Barcha maydonlarni to‘ldiring (ism, email, parol)' });
    }

    const existing = db.getUserByEmail(email);
    if (existing) {
      return res.status(400).json({ error: 'Ushbu email bilan foydalanuvchi allaqachon mavjud' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = {
      id: 'usr_' + Date.now() + Math.random().toString(36).substring(2, 6),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      passwordHash,
      targetLevel: targetLevel || 'B1',
      currentLevel: 'A0',
      goal: goal || 'Ish va O‘qish',
      createdAt: new Date().toISOString()
    };

    db.createUser(newUser);
    const token = generateToken(newUser);

    res.status(201).json({
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        targetLevel: newUser.targetLevel,
        currentLevel: newUser.currentLevel,
        goal: newUser.goal
      }
    });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Ro‘yxatdan o‘tishda xatolik yuz berdi' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email va parolni kiriting' });
    }

    const user = db.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Email yoki parol noto‘g‘ri' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ error: 'Email yoki parol noto‘g‘ri' });
    }

    const token = generateToken(user);
    const progress = db.getUserProgress(user.id);

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        targetLevel: user.targetLevel,
        currentLevel: user.currentLevel,
        goal: user.goal,
        xp: progress.xp || 0,
        streak: progress.streak || 1
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Tizimga kirishda xatolik yuz berdi' });
  }
});

app.get('/api/me', authMiddleware, (req, res) => {
  const user = db.getUserById(req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'Foydalanuvchi topilmadi' });
  }
  const progress = db.getUserProgress(user.id);
  res.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      targetLevel: user.targetLevel,
      currentLevel: user.currentLevel,
      goal: user.goal,
      xp: progress.xp || 0,
      streak: progress.streak || 1,
      diagnostic: progress.diagnostic,
      completedLessonsCount: Object.keys(progress.completedLessons || {}).length
    }
  });
});

// ----------------- LANGUAGES ROUTE -----------------
app.get('/api/languages', (req, res) => {
  res.json({ languages: curriculum.languages });
});

// ----------------- LESSONS ROUTES -----------------
app.get('/api/lessons', authMiddleware, (req, res) => {
  const lang = req.query.lang || 'de';
  const progress = db.getUserProgress(req.user.id);
  const userCompleted = progress.completedLessons || {};

  const lessonList = curriculum[lang] || curriculum.de;

  const lessonsWithStatus = lessonList.map(lesson => {
    const isCompleted = !!userCompleted[lesson.id];
    return {
      id: lesson.id,
      lang: lesson.lang,
      level: lesson.level,
      number: lesson.number,
      title: lesson.title,
      goal: lesson.goal,
      isCompleted,
      score: isCompleted ? userCompleted[lesson.id].score : 0
    };
  });

  res.json({ lessons: lessonsWithStatus, lang });
});

app.get('/api/lessons/:id', authMiddleware, (req, res) => {
  let foundLesson = null;
  for (const lang of ['de', 'en', 'ru', 'ko']) {
    const list = curriculum[lang] || [];
    const match = list.find(l => l.id === req.params.id);
    if (match) {
      foundLesson = match;
      break;
    }
  }

  if (!foundLesson) {
    return res.status(404).json({ error: 'Dars topilmadi' });
  }
  const progress = db.getUserProgress(req.user.id);
  const status = progress.completedLessons?.[foundLesson.id] || null;

  res.json({ lesson: foundLesson, status });
});

app.post('/api/lessons/:id/submit', authMiddleware, (req, res) => {
  const { score, totalQuestions, mistakes } = req.body;
  const lessonId = req.params.id;

  const earnedXp = Math.max(10, Math.round((score / (totalQuestions || 1)) * 30));
  const updatedProgress = db.saveLessonProgress(req.user.id, lessonId, Math.round((score / totalQuestions) * 100), earnedXp);

  // Log mistakes if any
  if (mistakes && Array.isArray(mistakes)) {
    mistakes.forEach(m => {
      db.logMistake(req.user.id, m);
    });
  }

  res.json({
    success: true,
    earnedXp,
    totalXp: updatedProgress.xp,
    streak: updatedProgress.streak
  });
});

// ----------------- DIAGNOSTIC ROUTES -----------------
app.get('/api/diagnostic/questions', authMiddleware, (req, res) => {
  const lang = req.query.lang || 'de';
  const questions = curriculum.diagnosticQuestions[lang] || curriculum.diagnosticQuestions.de;
  res.json({ questions, lang });
});

app.post('/api/diagnostic/submit', authMiddleware, (req, res) => {
  const { answers, lang } = req.body;
  const targetLang = lang || 'de';
  const questions = curriculum.diagnosticQuestions[targetLang] || curriculum.diagnosticQuestions.de;

  let correctCount = 0;
  let phaseScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  let phaseTotals = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  answers.forEach(ans => {
    const q = questions[ans.questionIndex];
    if (q) {
      phaseTotals[q.phase] = (phaseTotals[q.phase] || 0) + 1;
      if (ans.selectedIndex === q.correctIndex) {
        correctCount += 1;
        phaseScores[q.phase] = (phaseScores[q.phase] || 0) + 1;
      }
    }
  });

  // Calculate Level
  let calculatedLevel = 'A0';
  const totalScorePct = Math.round((correctCount / questions.length) * 100);

  if (totalScorePct >= 90) calculatedLevel = 'C1';
  else if (totalScorePct >= 75) calculatedLevel = 'B2';
  else if (totalScorePct >= 55) calculatedLevel = 'B1';
  else if (totalScorePct >= 35) calculatedLevel = 'A2';
  else if (totalScorePct >= 15) calculatedLevel = 'A1';
  else calculatedLevel = 'A0';

  // Metrics breakdown
  const vocabularyPct = Math.min(100, Math.round(totalScorePct * 0.95) + 5);
  const grammarPct = totalScorePct;
  const readingPct = Math.min(100, totalScorePct + 10);
  const writingPct = Math.max(0, totalScorePct - 5);
  const speakingPct = Math.max(0, totalScorePct - 10);
  const listeningPct = Math.max(0, totalScorePct - 5);

  const strongAreas = [];
  const weakAreas = [];

  if (vocabularyPct > 50) strongAreas.push('Boshlang‘ich so‘z boyligi');
  else weakAreas.push('Muntazam yangi leksika yodlash');

  const selectedLang = lang || 'de';
  const langNames = {
    de: 'nemis',
    en: 'ingliz',
    ru: 'rus',
    ko: 'koreys'
  };
  const langNameUz = langNames[selectedLang] || 'nemis';

  if (grammarPct > 50) strongAreas.push('Grammatika mantiqini tushunish');
  else weakAreas.push(selectedLang === 'de' ? 'Artikllar (der/die/das) va fe’l o‘rni' : (selectedLang === 'ru' ? 'Rodlar va kelishiklar' : (selectedLang === 'ko' ? 'Qo‘shimchalar va hurmat darajasi' : 'Zamonlar va to be fe’li')));

  if (speakingPct < 40) weakAreas.push('Jonli og‘zaki nutq va talaffuz');
  if (listeningPct < 40) weakAreas.push(`${langNameUz.charAt(0).toUpperCase() + langNameUz.slice(1)}cha nutqni eshitib ilg‘ash`);

  const diagnosticResult = {
    level: calculatedLevel,
    totalScorePct,
    vocabularyPct,
    grammarPct,
    readingPct,
    writingPct,
    speakingPct,
    listeningPct,
    strongAreas,
    weakAreas,
    mainProblems: `${langNameUz.charAt(0).toUpperCase() + langNameUz.slice(1)}cha fikrlash odatini shakllantirish va faol so‘zlarni ko‘paytirish zarur.`
  };

  db.saveDiagnostic(req.user.id, diagnosticResult);

  res.json({ success: true, result: diagnosticResult });
});

// ----------------- VOCABULARY & FLASHCARDS -----------------
app.get('/api/vocabulary', authMiddleware, (req, res) => {
  const lang = req.query.lang || 'de';
  const userCards = db.getUserFlashcards(req.user.id);
  const now = Date.now();

  const wordsList = vocabularyList[lang] || vocabularyList.de || [];

  const words = wordsList.map(w => {
    const card = userCards[w.id] || { box: 1, reviewsCount: 0, nextReview: 0 };
    const isDue = !card.nextReview || card.nextReview <= now;
    return {
      ...w,
      box: card.box,
      reviewsCount: card.reviewsCount,
      isDue
    };
  });

  res.json({ words, lang });
});

app.post('/api/vocabulary/:id/review', authMiddleware, (req, res) => {
  const { isCorrect } = req.body;
  const result = db.updateFlashcard(req.user.id, req.params.id, !!isCorrect);
  res.json({ success: true, flashcard: result });
});

// ----------------- AI CHAT & ROLEPLAY -----------------
app.get('/api/chat/scenarios', authMiddleware, (req, res) => {
  res.json({ scenarios: aiEngine.scenarios });
});

app.get('/api/chat/history', authMiddleware, (req, res) => {
  const chats = db.getUserChats(req.user.id);
  res.json({ chats });
});

app.post('/api/chat/message', authMiddleware, async (req, res) => {
  const { message, scenario, apiKey, geminiKey, groqKey, lang } = req.body;
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Xabar bo‘sh bo‘lishi mumkin emas' });
  }

  const user = db.getUserById(req.user.id);
  const userLevel = user ? user.currentLevel : 'A1';
  const targetLang = lang || 'de';

  // Support both single apiKey or { geminiKey, groqKey }
  const keys = {
    geminiKey: geminiKey || apiKey,
    groqKey: groqKey
  };

  // Generate response via Gemini or instant Failover to Groq/Grok or smart fallback
  const aiResult = await aiEngine.generateAiResponse(message, scenario || 'free', userLevel, keys, targetLang);

  // Save User message
  db.addChatMessage(req.user.id, {
    role: 'user',
    text: message.trim(),
    scenario: scenario || 'free'
  });

  // Save AI message
  const aiMsg = {
    role: 'assistant',
    textDe: aiResult.replyDe,
    textUz: aiResult.replyUz,
    corrections: aiResult.corrections,
    tip: aiResult.tip,
    scenario: scenario || 'free'
  };
  db.addChatMessage(req.user.id, aiMsg);

  // Log mistakes if detected
  if (aiResult.corrections && aiResult.corrections.length > 0) {
    aiResult.corrections.forEach(corr => {
      db.logMistake(req.user.id, corr);
    });
  }

  res.json({ success: true, message: aiMsg });
});

app.delete('/api/chat/clear', authMiddleware, (req, res) => {
  db.clearUserChats(req.user.id);
  res.json({ success: true });
});

// ----------------- LEADERBOARD ROUTE -----------------
app.get('/api/leaderboard', authMiddleware, (req, res) => {
  const leaderboard = db.getLeaderboard();
  res.json({ leaderboard });
});

// ----------------- BLITZ GAME ROUTE -----------------
app.post('/api/blitz/score', authMiddleware, (req, res) => {
  const { correctCount, score } = req.body;
  const earnedXp = Math.max(5, Math.min(50, Math.round(correctCount * 3)));
  const progress = db.getUserProgress(req.user.id);
  progress.xp = (progress.xp || 0) + earnedXp;
  db.writeDb(db.readDb()); // or write progress
  res.json({ success: true, earnedXp, totalXp: progress.xp });
});

// ----------------- MISTAKES ROUTE -----------------
app.get('/api/mistakes', authMiddleware, (req, res) => {
  const progress = db.getUserProgress(req.user.id);
  res.json({ mistakes: progress.mistakes || [] });
});

// ----------------- NETWORK INFO ROUTE -----------------
app.get('/api/info', (req, res) => {
  const localIp = getLocalIp();
  res.json({
    appName: 'OO-Ustozim AI',
    localUrl: `http://localhost:${PORT}`,
    networkUrl: `http://${localIp}:${PORT}`,
    ip: localIp,
    port: PORT
  });
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  const localIp = getLocalIp();
  console.log(`\n======================================================`);
  console.log(`🚀 OO-USTOZIM AI PLATFORMASI ISHGA TUSHDI!`);
  console.log(`💻 Kompyuterda ochish uchun : http://localhost:${PORT}`);
  console.log(`📱 Telefonda ochish uchun   : http://${localIp}:${PORT}`);
  console.log(`   (Telefon va kompyuter bitta Wi-Fi tarmog‘iga ulangan bo‘lishi kerak)`);
  console.log(`======================================================\n`);
});
