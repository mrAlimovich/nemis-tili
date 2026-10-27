// ==========================================
// GERMAN MASTER AI — CLIENT CONTROLLER
// ==========================================

const STATE = {
  token: localStorage.getItem('gm_token') || null,
  user: null,
  activeView: 'lessons',
  authMode: 'login', // 'login' or 'register'
  lessons: [],
  currentLesson: null,
  vocabulary: [],
  activeScenario: 'free',
  chatMessages: [],
  isRecording: false,
  speechRecognition: null,
  networkInfo: null
};

// ----------------- INITIALIZATION -----------------
document.addEventListener('DOMContentLoaded', async () => {
  initIcons();
  setupSpeechRecognition();
  await fetchNetworkInfo();

  if (STATE.token) {
    await fetchCurrentUser();
  } else {
    showAuthView();
  }
});

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ----------------- API HELPER -----------------
async function api(endpoint, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  if (STATE.token) {
    headers['Authorization'] = `Bearer ${STATE.token}`;
  }

  try {
    const res = await fetch(endpoint, { ...options, headers });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Server xatosi');
    }
    return data;
  } catch (err) {
    console.error(`API Error on ${endpoint}:`, err);
    throw err;
  }
}

async function fetchNetworkInfo() {
  try {
    const info = await api('/api/info');
    STATE.networkInfo = info;
    const urlSpan = document.getElementById('sync-network-url');
    if (urlSpan) urlSpan.innerText = info.networkUrl;
  } catch (e) {
    console.log('Network info fetch error:', e);
  }
}

// ----------------- AUTHENTICATION -----------------
function toggleAuthMode(mode) {
  STATE.authMode = mode;
  const nameGroup = document.getElementById('auth-name-group');
  const goalGroup = document.getElementById('auth-goal-group');
  const submitBtn = document.getElementById('auth-submit-btn');
  const tabLogin = document.getElementById('auth-tab-login');
  const tabReg = document.getElementById('auth-tab-register');
  const alertEl = document.getElementById('auth-alert');
  if (alertEl) alertEl.classList.add('hidden');

  if (mode === 'register') {
    nameGroup.classList.remove('hidden');
    goalGroup.classList.remove('hidden');
    submitBtn.innerText = 'Ro‘yxatdan o‘tish (Boshlash)';
    tabReg.className = 'flex-1 py-2 text-sm font-semibold rounded-lg transition bg-white text-blue-600 shadow-sm';
    tabLogin.className = 'flex-1 py-2 text-sm font-semibold rounded-lg transition text-slate-600 hover:text-slate-900';
  } else {
    nameGroup.classList.add('hidden');
    goalGroup.classList.add('hidden');
    submitBtn.innerText = 'Hisobga kirish';
    tabLogin.className = 'flex-1 py-2 text-sm font-semibold rounded-lg transition bg-white text-blue-600 shadow-sm';
    tabReg.className = 'flex-1 py-2 text-sm font-semibold rounded-lg transition text-slate-600 hover:text-slate-900';
  }
}

async function handleAuthSubmit(e) {
  e.preventDefault();
  const alertEl = document.getElementById('auth-alert');
  alertEl.classList.add('hidden');

  const email = document.getElementById('auth-email').value;
  const password = document.getElementById('auth-password').value;
  const name = document.getElementById('auth-name').value;
  const goal = document.getElementById('auth-goal').value;

  try {
    let res;
    if (STATE.authMode === 'register') {
      res = await api('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, name, goal })
      });
    } else {
      res = await api('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
    }

    STATE.token = res.token;
    STATE.user = res.user;
    localStorage.setItem('gm_token', res.token);

    showAppView();
    renderHeaderBadges();
    await loadInitialData();

  } catch (err) {
    alertEl.className = 'mb-4 p-3 rounded-xl text-sm font-medium bg-red-50 text-red-700 border border-red-200';
    alertEl.innerText = err.message;
    alertEl.classList.remove('hidden');
  }
}

function handleLogout() {
  STATE.token = null;
  STATE.user = null;
  localStorage.removeItem('gm_token');
  showAuthView();
}

async function fetchCurrentUser() {
  try {
    const res = await api('/api/me');
    STATE.user = res.user;
    showAppView();
    renderHeaderBadges();
    await loadInitialData();
  } catch (err) {
    handleLogout();
  }
}

function showAuthView() {
  document.getElementById('view-auth').classList.remove('hidden');
  document.getElementById('view-app').classList.add('hidden');
  document.getElementById('mobile-nav').classList.add('hidden');
  document.getElementById('header-user-actions').innerHTML = '';
}

function showAppView() {
  document.getElementById('view-auth').classList.add('hidden');
  document.getElementById('view-app').classList.remove('hidden');
  document.getElementById('mobile-nav').classList.remove('hidden');
  navigate(STATE.activeView || 'lessons');
}

function renderHeaderBadges() {
  const container = document.getElementById('header-user-actions');
  if (!STATE.user) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <!-- Streak -->
    <div class="flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold" title="Kunlik o‘qish uzluksizligi">
      <span>🔥</span>
      <span>${STATE.user.streak || 1} kun</span>
    </div>

    <!-- XP -->
    <div class="flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold">
      <span>⚡</span>
      <span>${STATE.user.xp || 0} XP</span>
    </div>

    <!-- Phone Connect Button -->
    <button onclick="openDeviceSyncModal()" class="hidden sm:flex items-center space-x-1 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-700 transition" title="Telefonda ochish">
      <i data-lucide="smartphone" class="w-3.5 h-3.5"></i>
      <span>Telefon</span>
    </button>

    <!-- User Avatar -->
    <div onclick="navigate('profile')" class="cursor-pointer w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-sm" title="${STATE.user.name}">
      ${(STATE.user.name || 'U').charAt(0).toUpperCase()}
    </div>
  `;
  initIcons();
}

// ----------------- NAVIGATION -----------------
function navigate(viewName) {
  STATE.activeView = viewName;

  // Hide all sections
  document.querySelectorAll('.section-view').forEach(s => s.classList.add('hidden'));

  // Deselect desktop nav items
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.className = 'nav-item flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-50';
  });

  // Highlight active nav item
  const activeBtn = document.getElementById(`nav-btn-${viewName}`);
  if (activeBtn) {
    activeBtn.className = 'nav-item flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition bg-blue-50 text-blue-700 shadow-sm';
  }

  // Update mobile nav highlight
  ['lessons', 'diagnostic', 'ai-tutor', 'vocabulary', 'profile'].forEach(name => {
    const mBtn = document.getElementById(`m-nav-${name}`);
    if (mBtn) {
      if (name === viewName) {
        mBtn.className = 'flex flex-col items-center py-1.5 px-3 rounded-xl text-blue-600 font-bold';
      } else {
        mBtn.className = 'flex flex-col items-center py-1.5 px-3 rounded-xl text-slate-500 hover:text-slate-900';
      }
    }
  });

  // Show selected section
  const targetSection = document.getElementById(`section-${viewName}`);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Route triggers
  if (viewName === 'lessons') loadLessons();
  if (viewName === 'diagnostic') loadDiagnosticView();
  if (viewName === 'ai-tutor') loadAiTutorView();
  if (viewName === 'vocabulary') loadVocabularyView();
  if (viewName === 'profile') loadProfileView();

  initIcons();
}

async function loadInitialData() {
  await loadLessons();
  await loadVocabulary();
}

// ----------------- LESSONS ENGINE -----------------
async function loadLessons() {
  try {
    const res = await api('/api/lessons');
    STATE.lessons = res.lessons;

    const grid = document.getElementById('lessons-grid');
    if (!grid) return;

    const currentLevelBadge = document.getElementById('badge-current-level');
    if (currentLevelBadge && STATE.user) {
      currentLevelBadge.innerText = `${STATE.user.currentLevel || 'A0'} (${STATE.user.targetLevel || 'B1'} gacha)`;
    }

    grid.innerHTML = STATE.lessons.map(lesson => {
      const isDone = lesson.isCompleted;
      return `
        <div onclick="openLesson('${lesson.id}')" class="group bg-white rounded-2xl border ${isDone ? 'border-emerald-200 bg-emerald-50/10' : 'border-slate-200'} hover:border-blue-400 p-5 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="px-2.5 py-1 bg-slate-100 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 rounded-lg text-xs font-black">
                DARS 0${lesson.number} • ${lesson.level}
              </span>
              ${isDone 
                ? '<span class="flex items-center space-x-1 text-emerald-600 text-xs font-bold"><i data-lucide="check-circle-2" class="w-4 h-4"></i><span>Bajarildi</span></span>'
                : '<span class="text-xs font-bold text-blue-600 flex items-center space-x-1"><span>Boshlash</span><i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></span>'
              }
            </div>
            <h3 class="font-extrabold text-slate-900 text-base group-hover:text-blue-600 transition mb-1">${lesson.title}</h3>
            <p class="text-xs text-slate-500 leading-relaxed mb-4">${lesson.goal}</p>
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>⏱ 15-20 daqiqa</span>
            <span>+30 XP</span>
          </div>
        </div>
      `;
    }).join('');

    initIcons();
  } catch (err) {
    console.error('Error loading lessons:', err);
  }
}

async function openLesson(lessonId) {
  try {
    const res = await api(`/api/lessons/${lessonId}`);
    STATE.currentLesson = res.lesson;

    const container = document.getElementById('lesson-detail-container');
    const l = res.lesson;

    container.innerHTML = `
      <!-- Header banner -->
      <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 md:p-8 text-white">
        <div class="flex items-center space-x-2 text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">
          <span>DARS 0${l.number}</span>
          <span>•</span>
          <span>${l.level}</span>
        </div>
        <h2 class="text-2xl md:text-3xl font-black mb-2">${l.title}</h2>
        <p class="text-blue-100 text-sm max-w-2xl">${l.goal}</p>
      </div>

      <div class="p-6 md:p-8 space-y-8">
        
        <!-- STEP 1: THEORY -->
        <div>
          <div class="flex items-center space-x-2 text-blue-600 font-black text-sm uppercase tracking-wider mb-3">
            <i data-lucide="book-marked" class="w-5 h-5"></i>
            <span>1. Grammatika va Mantiq</span>
          </div>
          <p class="text-sm text-slate-700 leading-relaxed mb-4">${l.theory.introUz}</p>

          <!-- Rules list -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            ${l.theory.rules.map(r => `
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="font-bold text-slate-900 text-sm font-mono">${r.pattern}</span>
                  <span class="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">${r.pronunciation}</span>
                </div>
                <div class="text-xs text-slate-600 flex items-center justify-between mt-2">
                  <span class="font-semibold text-slate-800">${r.exampleDe}</span>
                  <button onclick="playGermanAudio('${r.exampleDe.replace(/'/g, "\\'")}')" class="p-1 rounded text-blue-600 hover:bg-blue-100 transition" title="Talaffuzni tinglash">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <span class="text-[11px] text-slate-400 block">${r.exampleUz}</span>
              </div>
            `).join('')}
          </div>

          <!-- Phrases Table -->
          <div class="border border-slate-200 rounded-xl overflow-hidden">
            <div class="bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600 uppercase">Asosiy Iboralar & Misollar</div>
            <div class="divide-y divide-slate-100">
              ${l.theory.table.map(row => `
                <div class="px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition text-sm">
                  <div>
                    <span class="font-bold text-slate-900">${row.de}</span>
                    <span class="text-slate-400 text-xs block md:inline md:ml-3">${row.uz}</span>
                  </div>
                  <button onclick="playGermanAudio('${row.de.replace(/'/g, "\\'")}')" class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Tinglash">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- STEP 2: SPEAKING PROMPT -->
        ${l.speakingPrompt ? `
          <div class="p-5 rounded-2xl bg-amber-50 border border-amber-200">
            <div class="flex items-center space-x-2 text-amber-800 font-bold text-sm mb-2">
              <i data-lucide="mic" class="w-5 h-5 text-amber-600"></i>
              <span>2. Speaking Mashqi (Talaffuz Qiling!)</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-amber-100">
              <div>
                <p class="text-lg font-black text-slate-900">${l.speakingPrompt.textDe}</p>
                <p class="text-xs text-slate-500">${l.speakingPrompt.textUz}</p>
                <p class="text-[11px] text-amber-700 font-medium mt-1">💡 ${l.speakingPrompt.tip}</p>
              </div>
              <button onclick="playGermanAudio('${l.speakingPrompt.textDe.replace(/'/g, "\\'")}')" class="self-start md:self-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-sm">
                <i data-lucide="volume-2" class="w-4 h-4"></i>
                <span>Namunani Tinglash</span>
              </button>
            </div>
          </div>
        ` : ''}

        <!-- STEP 3: INTERACTIVE EXERCISES -->
        <div>
          <div class="flex items-center space-x-2 text-blue-600 font-black text-sm uppercase tracking-wider mb-4">
            <i data-lucide="check-square" class="w-5 h-5"></i>
            <span>3. Interaktiv Mashqlar & Mini Test</span>
          </div>

          <form id="lesson-quiz-form" onsubmit="handleLessonQuizSubmit(event, '${l.id}')" class="space-y-6">
            ${l.exercises.map((ex, idx) => `
              <div class="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm" id="ex-card-${ex.id}">
                <span class="text-xs font-bold text-blue-600 uppercase mb-1 block">Savol ${idx + 1}</span>
                <h4 class="font-bold text-slate-900 text-sm mb-3">${ex.question}</h4>

                ${renderExerciseInput(ex)}

                <div id="ex-feedback-${ex.id}" class="hidden mt-3 p-3 rounded-xl text-xs font-medium"></div>
              </div>
            `).join('')}

            <button type="submit" id="btn-submit-lesson" class="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-extrabold rounded-xl shadow-lg shadow-blue-500/25 transition text-sm">
              Javoblarni Tekshirish va Darsni Yakunlash
            </button>
          </form>
        </div>

      </div>
    `;

    document.querySelectorAll('.section-view').forEach(s => s.classList.add('hidden'));
    document.getElementById('section-lesson-detail').classList.remove('hidden');
    initIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (err) {
    console.error('Error opening lesson:', err);
  }
}

function renderExerciseInput(ex) {
  if (ex.type === 'multiple-choice') {
    return `
      <div class="space-y-2">
        ${ex.options.map((opt, oIdx) => `
          <label class="flex items-center space-x-3 p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 cursor-pointer transition text-sm">
            <input type="radio" name="answer_${ex.id}" value="${oIdx}" class="text-blue-600 focus:ring-blue-500" required>
            <span class="text-slate-800">${opt}</span>
          </label>
        `).join('')}
      </div>
    `;
  }

  if (ex.type === 'fill-blank') {
    return `
      <div>
        <input type="text" name="answer_${ex.id}" placeholder="${ex.placeholder || 'Javobingizni yozing...'}" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required>
        ${ex.hint ? `<span class="text-[11px] text-slate-400 mt-1 block">💡 Yordam: ${ex.hint}</span>` : ''}
      </div>
    `;
  }

  if (ex.type === 'order') {
    return `
      <div>
        <input type="text" name="answer_${ex.id}" placeholder="${ex.correctSentence}" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required>
        <div class="flex flex-wrap gap-2 mt-2">
          ${ex.words.map(w => `
            <span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg select-none">${w}</span>
          `).join('')}
        </div>
      </div>
    `;
  }

  return '';
}

async function handleLessonQuizSubmit(e, lessonId) {
  e.preventDefault();
  const lesson = STATE.currentLesson;
  if (!lesson) return;

  const form = e.target;
  const formData = new FormData(form);
  let correctCount = 0;
  const mistakes = [];

  lesson.exercises.forEach(ex => {
    const val = formData.get(`answer_${ex.id}`);
    const feedbackEl = document.getElementById(`ex-feedback-${ex.id}`);
    let isCorrect = false;

    if (ex.type === 'multiple-choice') {
      if (parseInt(val, 10) === ex.correctIndex) {
        isCorrect = true;
      }
    } else if (ex.type === 'fill-blank') {
      const cleanVal = (val || '').trim().toLowerCase();
      const expected = ex.correctAnswer.toLowerCase();
      const alts = (ex.altAnswers || []).map(a => a.toLowerCase());
      if (cleanVal === expected || alts.includes(cleanVal)) {
        isCorrect = true;
      }
    } else if (ex.type === 'order') {
      const cleanVal = (val || '').trim().replace(/[.,!?]/g, '').toLowerCase();
      const expected = ex.correctSentence.replace(/[.,!?]/g, '').toLowerCase();
      if (cleanVal === expected) {
        isCorrect = true;
      }
    }

    feedbackEl.classList.remove('hidden');
    if (isCorrect) {
      correctCount++;
      feedbackEl.className = 'mt-3 p-3 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200';
      feedbackEl.innerHTML = `✅ To‘g‘ri! ${ex.explanation || ''}`;
    } else {
      feedbackEl.className = 'mt-3 p-3 rounded-xl text-xs font-semibold bg-red-50 text-red-800 border border-red-200';
      feedbackEl.innerHTML = `❌ Noto‘g‘ri. To‘g‘ri javob: <strong>${ex.correctAnswer || ex.correctSentence || ex.options[ex.correctIndex]}</strong>. ${ex.explanation || ''}`;
      mistakes.push({
        type: ex.type,
        question: ex.question,
        userAnswer: val,
        correctAnswer: ex.correctAnswer || ex.correctSentence || ex.options[ex.correctIndex],
        reason: ex.explanation || 'Qoidani qayta ko‘rib chiqing'
      });
    }
  });

  // Submit score to backend
  try {
    const submitBtn = document.getElementById('btn-submit-lesson');
    submitBtn.disabled = true;
    submitBtn.innerText = 'Tekshirilmoqda...';

    const res = await api(`/api/lessons/${lessonId}/submit`, {
      method: 'POST',
      body: JSON.stringify({
        score: correctCount,
        totalQuestions: lesson.exercises.length,
        mistakes
      })
    });

    if (window.confetti && correctCount === lesson.exercises.length) {
      window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    if (STATE.user) {
      STATE.user.xp = res.totalXp;
      STATE.user.streak = res.streak;
      renderHeaderBadges();
    }

    submitBtn.className = 'w-full py-3.5 bg-emerald-600 text-white font-extrabold rounded-xl shadow-lg transition text-sm';
    submitBtn.innerHTML = `🎉 Dars yakunlandi! Natija: ${correctCount}/${lesson.exercises.length} (+${res.earnedXp} XP)`;

  } catch (err) {
    console.error('Error submitting lesson:', err);
  }
}

// ----------------- DIAGNOSTIC PLACEMENT ENGINE -----------------
let diagnosticAnswers = [];
let diagnosticQuestions = [];

async function loadDiagnosticView() {
  const container = document.getElementById('diagnostic-content');
  if (!container) return;

  container.innerHTML = `
    <div class="text-center py-6">
      <div class="w-16 h-16 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 text-2xl font-black">
        🎯
      </div>
      <h3 class="text-xl font-black text-slate-900 mb-2">Nemis Tili Darajangizni Aniqlang</h3>
      <p class="text-sm text-slate-500 max-w-md mx-auto mb-6">
        Test A0 dan C1 gacha bo‘lgan 10 ta saralangan savoldan iborat. Qiyin savollardan qo‘rqmang, bilmaganingizni taxmin qilmang — bu sizga mos darslarni aniqlab beradi.
      </p>

      <button onclick="startDiagnosticTest()" class="py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-lg shadow-blue-500/25 transition text-sm">
        Testni Boshlash (3 daqiqa)
      </button>
    </div>
  `;
}

async function startDiagnosticTest() {
  try {
    const res = await api('/api/diagnostic/questions');
    diagnosticQuestions = res.questions;
    diagnosticAnswers = [];
    renderDiagnosticQuestion(0);
  } catch (err) {
    console.error('Error starting diagnostic:', err);
  }
}

function renderDiagnosticQuestion(index) {
  const q = diagnosticQuestions[index];
  const container = document.getElementById('diagnostic-content');
  if (!q || !container) return;

  container.innerHTML = `
    <div>
      <div class="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
        <span>Savol ${index + 1} / ${diagnosticQuestions.length}</span>
        <span class="text-blue-600">Phase ${q.phase} (${q.level})</span>
      </div>

      <!-- Progress bar -->
      <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-6">
        <div class="bg-blue-600 h-full transition-all duration-300" style="width: ${((index + 1) / diagnosticQuestions.length) * 100}%"></div>
      </div>

      <div class="mb-6">
        <span class="text-xs font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700 uppercase mb-2 inline-block">${q.category}</span>
        <h3 class="text-base font-extrabold text-slate-900">${q.question}</h3>
      </div>

      <div class="space-y-2 mb-6">
        ${q.options.map((opt, oIdx) => `
          <button onclick="handleDiagnosticAnswer(${index}, ${oIdx})" class="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 transition text-sm font-medium text-slate-800">
            ${opt}
          </button>
        `).join('')}
      </div>

      <button onclick="handleDiagnosticAnswer(${index}, -1)" class="text-xs text-slate-400 hover:text-slate-600 transition block mx-auto">
        Bilmayman / O‘tkazib yuborish
      </button>
    </div>
  `;
}

async function handleDiagnosticAnswer(qIndex, selectedIndex) {
  diagnosticAnswers.push({ questionIndex: qIndex, selectedIndex });

  if (qIndex + 1 < diagnosticQuestions.length) {
    renderDiagnosticQuestion(qIndex + 1);
  } else {
    // Finish test
    await submitDiagnosticTest();
  }
}

async function submitDiagnosticTest() {
  const container = document.getElementById('diagnostic-content');
  container.innerHTML = `<div class="text-center py-10"><p class="font-bold text-sm text-slate-600">Diagnostika tahlil qilinmoqda...</p></div>`;

  try {
    const res = await api('/api/diagnostic/submit', {
      method: 'POST',
      body: JSON.stringify({ answers: diagnosticAnswers })
    });

    const r = res.result;
    if (STATE.user) {
      STATE.user.currentLevel = r.level;
      renderHeaderBadges();
    }

    if (window.confetti) window.confetti({ particleCount: 80, spread: 60 });

    container.innerHTML = `
      <div class="space-y-6">
        <div class="text-center">
          <span class="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-1">RASMIY XULOSA</span>
          <h2 class="text-3xl font-black text-slate-900 mb-1">DARAJANGIZ: <span class="text-blue-600">${r.level}</span></h2>
          <p class="text-xs text-slate-500">Umumiy ko‘rsatkich: ${r.totalScorePct}% to‘g‘ri javob</p>
        </div>

        <!-- Metrics Bars -->
        <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
          ${renderMetricBar('Lug‘at (Vocabulary)', r.vocabularyPct)}
          ${renderMetricBar('Grammatika (Grammar)', r.grammarPct)}
          ${renderMetricBar('O‘qib tushunish (Reading)', r.readingPct)}
          ${renderMetricBar('Og‘zaki nutq (Speaking)', r.speakingPct)}
          ${renderMetricBar('Eshitib tushunish (Listening)', r.listeningPct)}
        </div>

        <!-- Areas -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
            <span class="font-bold block mb-1">💪 Kuchli tomonlar:</span>
            ${(r.strongAreas || []).map(a => `<div>• ${a}</div>`).join('') || '—'}
          </div>
          <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
            <span class="font-bold block mb-1">⚠️ E’tibor qaratish kerak:</span>
            ${(r.weakAreas || []).map(a => `<div>• ${a}</div>`).join('') || '—'}
          </div>
        </div>

        <button onclick="navigate('lessons')" class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-lg shadow-blue-500/25 transition text-sm">
          Shaxsiy Darslarga Kirish
        </button>
      </div>
    `;

  } catch (err) {
    container.innerHTML = `<div class="p-4 bg-red-50 text-red-700 rounded-xl text-sm">Xatolik: ${err.message}</div>`;
  }
}

function renderMetricBar(label, pct) {
  return `
    <div>
      <div class="flex justify-between text-xs font-bold text-slate-700 mb-1">
        <span>${label}</span>
        <span>${pct}%</span>
      </div>
      <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div class="bg-blue-600 h-full rounded-full" style="width: ${pct}%"></div>
      </div>
    </div>
  `;
}

// ----------------- AI TUTOR & SPEAKING SIMULATOR -----------------
async function loadAiTutorView() {
  try {
    const resScenarios = await api('/api/chat/scenarios');
    const scenariosList = document.getElementById('scenarios-list');

    scenariosList.innerHTML = Object.entries(resScenarios.scenarios).map(([key, sc]) => {
      const isActive = STATE.activeScenario === key;
      return `
        <button onclick="selectScenario('${key}')" class="w-full text-left p-3 rounded-xl border ${isActive ? 'border-blue-500 bg-blue-50/50 text-blue-800' : 'border-slate-200 hover:bg-slate-50 text-slate-800'} transition flex flex-col">
          <span class="font-bold text-xs">${sc.name}</span>
          <span class="text-[11px] text-slate-400 truncate">${sc.description}</span>
        </button>
      `;
    }).join('');

    await loadChatHistory();

  } catch (err) {
    console.error('Error loading AI Tutor:', err);
  }
}

async function selectScenario(scenarioKey) {
  STATE.activeScenario = scenarioKey;
  const resScenarios = await api('/api/chat/scenarios');
  const sc = resScenarios.scenarios[scenarioKey];
  document.getElementById('active-scenario-title').innerText = sc ? sc.name : 'Erkin Suhbat';
  loadAiTutorView();
}

async function loadChatHistory() {
  const container = document.getElementById('chat-messages');
  if (!container) return;

  try {
    const res = await api('/api/chat/history');
    STATE.chatMessages = res.chats;

    if (STATE.chatMessages.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 text-slate-400">
          <i data-lucide="message-square" class="w-8 h-8 mx-auto mb-2 opacity-40"></i>
          <p class="text-xs">Nemis tilida birinchi xabaringizni yozing yoki mikrofondan gapiring!</p>
          <p class="text-[11px] text-slate-400 mt-1">Masalan: <em>"Hallo, ich heiße..."</em></p>
        </div>
      `;
      initIcons();
      return;
    }

    container.innerHTML = STATE.chatMessages.map(msg => renderChatMessage(msg)).join('');
    container.scrollTop = container.scrollHeight;
    initIcons();

  } catch (err) {
    console.error('Error loading chat history:', err);
  }
}

function renderChatMessage(msg) {
  if (msg.role === 'user') {
    return `
      <div class="flex justify-end">
        <div class="max-w-[85%] bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm text-sm">
          <p>${msg.text}</p>
        </div>
      </div>
    `;
  }

  // Assistant Message
  const hasCorrections = msg.corrections && msg.corrections.length > 0;
  return `
    <div class="flex justify-start">
      <div class="max-w-[90%] bg-slate-100 rounded-2xl rounded-tl-sm p-4 text-slate-900 shadow-sm text-sm space-y-2.5">
        
        <!-- German audio & text -->
        <div class="flex items-start justify-between gap-3">
          <p class="font-bold text-slate-900 text-base leading-snug">${msg.textDe}</p>
          <button onclick="playGermanAudio('${msg.textDe.replace(/'/g, "\\'")}')" class="shrink-0 p-1.5 rounded-lg bg-white hover:bg-slate-200 text-blue-600 transition shadow-sm" title="Ovoz bilan tinglash">
            <i data-lucide="volume-2" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Uzbek translation -->
        <p class="text-xs text-slate-500 italic border-l-2 border-blue-400 pl-2">${msg.textUz}</p>

        <!-- Corrections box if error was made -->
        ${hasCorrections ? `
          <div class="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs space-y-1.5 mt-2">
            <span class="font-black text-amber-900 uppercase tracking-wider block text-[10px]">Tahlil va Xatolarni Tuzatish:</span>
            ${msg.corrections.map(c => `
              <div class="text-slate-800">
                <span class="text-red-600 font-bold">❌ ${c.original}</span> ➔ 
                <span class="text-emerald-700 font-bold">✅ ${c.corrected}</span>
                <p class="text-[11px] text-slate-600 mt-0.5"><em>${c.reason}</em></p>
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${msg.tip ? `
          <div class="text-[11px] text-slate-500 bg-white/70 p-2 rounded-lg">
            💡 ${msg.tip}
          </div>
        ` : ''}

      </div>
    </div>
  `;
}

async function handleSendChatMessage(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;

  input.value = '';
  const container = document.getElementById('chat-messages');

  // Optimistically append user message
  const userHtml = renderChatMessage({ role: 'user', text: message });
  container.insertAdjacentHTML('beforeend', userHtml);
  container.scrollTop = container.scrollHeight;

  try {
    const sendBtn = document.getElementById('btn-chat-send');
    sendBtn.disabled = true;

    const res = await api('/api/chat/message', {
      method: 'POST',
      body: JSON.stringify({ message, scenario: STATE.activeScenario })
    });

    const aiHtml = renderChatMessage(res.message);
    container.insertAdjacentHTML('beforeend', aiHtml);
    container.scrollTop = container.scrollHeight;
    initIcons();

    // Automatically speak AI German reply!
    if (res.message.textDe) {
      playGermanAudio(res.message.textDe);
    }

  } catch (err) {
    console.error('Chat error:', err);
  } finally {
    const sendBtn = document.getElementById('btn-chat-send');
    if (sendBtn) sendBtn.disabled = false;
  }
}

async function clearChat() {
  if (!confirm('Haqiqatdan ham suhbat tarixini tozalashni xohlaysizmi?')) return;
  await api('/api/chat/clear', { method: 'DELETE' });
  await loadChatHistory();
}

// ----------------- WEB SPEECH: SYNTHESIS & RECOGNITION -----------------
function playGermanAudio(text) {
  if (!('speechSynthesis' in window)) {
    alert('Brauzeringiz ovozli o‘qishni qo‘llab-quvvatlamaydi.');
    return;
  }

  window.speechSynthesis.cancel(); // Stop any currently playing audio
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = 0.9; // natural, slightly clear speed for learners

  // Try to find a native German voice
  const voices = window.speechSynthesis.getVoices();
  const deVoice = voices.find(v => v.lang.startsWith('de') || v.lang === 'de-DE');
  if (deVoice) utterance.voice = deVoice;

  window.speechSynthesis.speak(utterance);
}

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  STATE.speechRecognition = new SpeechRecognition();
  STATE.speechRecognition.lang = 'de-DE';
  STATE.speechRecognition.continuous = false;
  STATE.speechRecognition.interimResults = false;

  STATE.speechRecognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById('chat-input');
    if (input) input.value = transcript;
    toggleSpeechRecognition(false);
  };

  STATE.speechRecognition.onerror = (e) => {
    console.log('Speech recognition error:', e);
    toggleSpeechRecognition(false);
  };

  STATE.speechRecognition.onend = () => {
    toggleSpeechRecognition(false);
  };
}

function toggleSpeechRecognition(forceState) {
  if (!STATE.speechRecognition) {
    alert('Brauzeringiz mikrofon orqali nemischa nutqni aniqlashni qo‘llab-quvvatlamaydi (Google Chrome yoki Safari tavsiya etiladi).');
    return;
  }

  const newState = forceState !== undefined ? forceState : !STATE.isRecording;
  STATE.isRecording = newState;

  const btnMic = document.getElementById('btn-mic');
  const micStatus = document.getElementById('mic-status');

  if (STATE.isRecording) {
    STATE.speechRecognition.start();
    if (btnMic) btnMic.className = 'p-2.5 rounded-xl bg-red-500 text-white animate-pulse transition';
    if (micStatus) micStatus.classList.remove('hidden');
  } else {
    try { STATE.speechRecognition.stop(); } catch (e) {}
    if (btnMic) btnMic.className = 'p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition';
    if (micStatus) micStatus.classList.add('hidden');
  }
}

// ----------------- VOCABULARY & FLASHCARDS -----------------
async function loadVocabulary() {
  try {
    const res = await api('/api/vocabulary');
    STATE.vocabulary = res.words;
  } catch (err) {
    console.error('Error loading vocabulary:', err);
  }
}

async function loadVocabularyView() {
  await loadVocabulary();
  const grid = document.getElementById('vocabulary-grid');
  if (!grid) return;

  grid.innerHTML = STATE.vocabulary.map(word => {
    let genderColor = 'border-slate-200';
    let badgeColor = 'bg-slate-100 text-slate-700';

    if (word.article === 'der') {
      genderColor = 'border-blue-300 bg-blue-50/20';
      badgeColor = 'bg-blue-600 text-white';
    } else if (word.article === 'die') {
      genderColor = 'border-red-300 bg-red-50/20';
      badgeColor = 'bg-red-600 text-white';
    } else if (word.article === 'das') {
      genderColor = 'border-emerald-300 bg-emerald-50/20';
      badgeColor = 'bg-emerald-600 text-white';
    }

    return `
      <div class="perspective-1000">
        <div id="card-${word.id}" onclick="flipCard('${word.id}')" class="flashcard-inner bg-white rounded-2xl border ${genderColor} shadow-sm hover:shadow-md transition">
          
          <!-- FRONT -->
          <div class="flashcard-front">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">${word.category}</span>
            <div class="flex items-center space-x-1.5 mb-1">
              ${word.article ? `<span class="px-2 py-0.5 rounded-md text-xs font-black uppercase ${badgeColor}">${word.article}</span>` : ''}
              <span class="text-xl font-black text-slate-900">${word.word}</span>
            </div>
            ${word.plural ? `<span class="text-xs text-slate-400 font-medium">Pl: ${word.plural}</span>` : ''}
            
            <div class="mt-4 flex items-center space-x-2" onclick="event.stopPropagation()">
              <button onclick="playGermanAudio('${word.article ? word.article + ' ' : ''}${word.word}')" class="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-blue-600 transition" title="Tinglash">
                <i data-lucide="volume-2" class="w-4 h-4"></i>
              </button>
              <span class="text-[11px] text-slate-400">(Aylantirish uchun bosing)</span>
            </div>
          </div>

          <!-- BACK -->
          <div class="flashcard-back bg-slate-900 text-white">
            <span class="text-xs text-slate-400 uppercase tracking-wider mb-1">O‘zbekcha ma’nosi:</span>
            <h4 class="text-lg font-bold text-amber-400 mb-2">${word.meaningUz}</h4>
            <p class="text-xs text-slate-200 mb-1"><em>"${word.exampleDe}"</em></p>
            <p class="text-[11px] text-slate-400 mb-4">${word.exampleUz}</p>

            <div class="flex items-center space-x-2" onclick="event.stopPropagation()">
              <button onclick="reviewFlashcard('${word.id}', false)" class="px-3 py-1.5 rounded-lg bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold transition">
                Takrorlayman
              </button>
              <button onclick="reviewFlashcard('${word.id}', true)" class="px-3 py-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-white text-xs font-bold transition">
                Eslab qoldim ✅
              </button>
            </div>
          </div>

        </div>
      </div>
    `;
  }).join('');

  initIcons();
}

function flipCard(cardId) {
  const el = document.getElementById(`card-${cardId}`);
  if (el) el.classList.toggle('is-flipped');
}

async function reviewFlashcard(wordId, isCorrect) {
  try {
    await api(`/api/vocabulary/${wordId}/review`, {
      method: 'POST',
      body: JSON.stringify({ isCorrect })
    });
    // Flip back
    const el = document.getElementById(`card-${wordId}`);
    if (el) el.classList.remove('is-flipped');
    await loadVocabulary();
  } catch (err) {
    console.error('Error reviewing flashcard:', err);
  }
}

// ----------------- PROFILE & MISTAKES -----------------
async function loadProfileView() {
  if (!STATE.user) return;

  document.getElementById('profile-avatar-letter').innerText = (STATE.user.name || 'U').charAt(0).toUpperCase();
  document.getElementById('profile-name').innerText = STATE.user.name;
  document.getElementById('profile-email').innerText = STATE.user.email;
  document.getElementById('profile-current-level').innerText = STATE.user.currentLevel || 'A0';
  document.getElementById('profile-target-goal').innerText = STATE.user.goal || 'Ish / O‘qish';
  document.getElementById('profile-total-xp').innerText = `${STATE.user.xp || 0} XP`;
  document.getElementById('profile-streak').innerText = `🔥 ${STATE.user.streak || 1} kun`;

  try {
    const res = await api('/api/mistakes');
    const mistakes = res.mistakes;

    const countBadge = document.getElementById('mistakes-count-badge');
    if (countBadge) countBadge.innerText = `${mistakes.length} ta xato`;

    const list = document.getElementById('mistakes-list');
    if (mistakes.length === 0) {
      list.innerHTML = `
        <div class="text-center py-8 text-slate-400">
          <i data-lucide="award" class="w-8 h-8 mx-auto mb-2 opacity-40"></i>
          <p class="text-xs">Hozircha xatolar yo‘q! Ajoyib natija.</p>
        </div>
      `;
    } else {
      list.innerHTML = mistakes.map(m => `
        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <div class="flex items-center justify-between mb-1">
            <span class="font-bold text-red-600">${m.category || 'XATO'}</span>
            <span class="text-[10px] text-slate-400">${new Date(m.timestamp || Date.now()).toLocaleDateString()}</span>
          </div>
          <div class="text-slate-800 font-medium">
            <span class="text-red-500">❌ ${m.original || m.userAnswer || ''}</span> ➔ 
            <span class="text-emerald-600 font-bold">✅ ${m.corrected || m.correctAnswer || ''}</span>
          </div>
          <p class="text-[11px] text-slate-500 mt-1">${m.reason || ''}</p>
        </div>
      `).join('');
    }

    initIcons();
  } catch (err) {
    console.error('Error loading profile mistakes:', err);
  }
}

// ----------------- DEVICE SYNC / QR CODE MODAL -----------------
function openDeviceSyncModal() {
  const modal = document.getElementById('modal-device-sync');
  modal.classList.remove('hidden');

  const container = document.getElementById('qrcode-container');
  container.innerHTML = '';

  const targetUrl = STATE.networkInfo ? STATE.networkInfo.networkUrl : window.location.href;

  if (window.QRCode) {
    new window.QRCode(container, {
      text: targetUrl,
      width: 180,
      height: 180,
      colorDark: '#0f172a',
      colorLight: '#f8fafc',
      correctLevel: window.QRCode.CorrectLevel.M
    });
  }
  initIcons();
}

function closeDeviceSyncModal() {
  document.getElementById('modal-device-sync').classList.add('hidden');
}

function copyNetworkUrl() {
  const url = document.getElementById('sync-network-url').innerText;
  navigator.clipboard.writeText(url).then(() => {
    alert(`Manzil nusxalandi: ${url}\n\nTelefoningizdagi brauzerga (Safari / Chrome) qo‘ying!`);
  });
}
