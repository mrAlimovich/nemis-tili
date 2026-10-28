const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, '..', 'data', 'db.json');

// Ensure data directory exists
if (!fs.existsSync(path.dirname(DB_FILE))) {
  fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
}

// Default initial state
const defaultData = {
  users: [],
  progress: {}, // userId -> { completedLessons: {}, diagnostic: null, xp: 0, streak: 1, lastStudyDate: null, mistakes: [] }
  flashcards: {}, // userId -> { wordId: { box: 1, nextReview: timestamp, reviewsCount: 0 } }
  chats: {} // userId -> [ { role, text, corrections, timestamp } ]
};

function readDb() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2), 'utf-8');
      return defaultData;
    }
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.error('Error reading db:', err);
    return defaultData;
  }
}

function writeDb(data) {
  try {
    const tempFile = DB_FILE + '.tmp';
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf-8');
    fs.renameSync(tempFile, DB_FILE);
  } catch (err) {
    console.error('Error writing db:', err);
  }
}

module.exports = {
  readDb,
  writeDb,

  getUserByEmail(email) {
    const db = readDb();
    const cleanEmail = email.trim().toLowerCase();
    return db.users.find(u => u.email.toLowerCase() === cleanEmail);
  },

  getUserById(id) {
    const db = readDb();
    return db.users.find(u => u.id === id);
  },

  createUser(user) {
    const db = readDb();
    db.users.push(user);
    if (!db.progress[user.id]) {
      db.progress[user.id] = {
        completedLessons: {},
        diagnostic: null,
        xp: 0,
        streak: 1,
        lastStudyDate: new Date().toISOString().split('T')[0],
        mistakes: []
      };
    }
    writeDb(db);
    return user;
  },

  updateUser(id, updates) {
    const db = readDb();
    const index = db.users.findIndex(u => u.id === id);
    if (index !== -1) {
      db.users[index] = { ...db.users[index], ...updates };
      writeDb(db);
      return db.users[index];
    }
    return null;
  },

  getUserProgress(userId) {
    const db = readDb();
    if (!db.progress[userId]) {
      db.progress[userId] = {
        completedLessons: {},
        diagnostic: null,
        xp: 0,
        streak: 1,
        lastStudyDate: new Date().toISOString().split('T')[0],
        mistakes: []
      };
      writeDb(db);
    }
    return db.progress[userId];
  },

  saveLessonProgress(userId, lessonId, score, earnedXp) {
    const db = readDb();
    if (!db.progress[userId]) {
      db.progress[userId] = {
        completedLessons: {},
        diagnostic: null,
        xp: 0,
        streak: 1,
        lastStudyDate: new Date().toISOString().split('T')[0],
        mistakes: []
      };
    }

    const prog = db.progress[userId];
    const today = new Date().toISOString().split('T')[0];

    // Calculate streak
    if (prog.lastStudyDate) {
      const last = new Date(prog.lastStudyDate);
      const curr = new Date(today);
      const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        prog.streak += 1;
      } else if (diffDays > 1) {
        prog.streak = 1;
      }
    }
    prog.lastStudyDate = today;

    prog.completedLessons[lessonId] = {
      score,
      completedAt: new Date().toISOString(),
      attempts: ((prog.completedLessons[lessonId]?.attempts) || 0) + 1
    };

    prog.xp = (prog.xp || 0) + (earnedXp || 20);

    writeDb(db);
    return prog;
  },

  addXp(userId, earnedXp) {
    const db = readDb();
    if (!db.progress[userId]) {
      db.progress[userId] = {
        completedLessons: {},
        diagnostic: null,
        xp: 0,
        streak: 1,
        lastStudyDate: new Date().toISOString().split('T')[0],
        mistakes: []
      };
    }
    const safeAmount = Math.max(0, Number(earnedXp) || 0);
    db.progress[userId].xp = (db.progress[userId].xp || 0) + safeAmount;
    writeDb(db);
    return db.progress[userId].xp;
  },

  saveDiagnostic(userId, diagnosticData) {
    const db = readDb();
    if (!db.progress[userId]) {
      db.progress[userId] = {
        completedLessons: {},
        diagnostic: null,
        xp: 0,
        streak: 1,
        lastStudyDate: new Date().toISOString().split('T')[0],
        mistakes: []
      };
    }

    db.progress[userId].diagnostic = {
      ...diagnosticData,
      completedAt: new Date().toISOString()
    };

    // Update user's current level
    const userIndex = db.users.findIndex(u => u.id === userId);
    if (userIndex !== -1 && diagnosticData.level) {
      db.users[userIndex].currentLevel = diagnosticData.level;
    }

    writeDb(db);
    return db.progress[userId].diagnostic;
  },

  getUserFlashcards(userId) {
    const db = readDb();
    return db.flashcards[userId] || {};
  },

  updateFlashcard(userId, wordId, isCorrect) {
    const db = readDb();
    if (!db.flashcards[userId]) {
      db.flashcards[userId] = {};
    }

    const current = db.flashcards[userId][wordId] || { box: 1, reviewsCount: 0 };
    let newBox = isCorrect ? Math.min(5, current.box + 1) : 1;

    // Spaced intervals (days): Box 1 = 1d, Box 2 = 3d, Box 3 = 7d, Box 4 = 14d, Box 5 = 30d
    const intervals = [0, 1, 3, 7, 14, 30];
    const daysToAdd = intervals[newBox] || 1;
    const nextReview = Date.now() + daysToAdd * 24 * 60 * 60 * 1000;

    db.flashcards[userId][wordId] = {
      box: newBox,
      reviewsCount: current.reviewsCount + 1,
      lastReviewed: Date.now(),
      nextReview
    };

    if (isCorrect) {
      if (!db.progress[userId]) db.progress[userId] = { xp: 0 };
      db.progress[userId].xp = (db.progress[userId].xp || 0) + 5;
    }

    writeDb(db);
    return db.flashcards[userId][wordId];
  },

  logMistake(userId, mistake) {
    const db = readDb();
    if (!db.progress[userId]) {
      db.progress[userId] = { mistakes: [] };
    }
    if (!db.progress[userId].mistakes) {
      db.progress[userId].mistakes = [];
    }

    db.progress[userId].mistakes.unshift({
      id: Date.now().toString(),
      ...mistake,
      timestamp: new Date().toISOString()
    });

    // Keep last 50 mistakes
    if (db.progress[userId].mistakes.length > 50) {
      db.progress[userId].mistakes = db.progress[userId].mistakes.slice(0, 50);
    }

    writeDb(db);
    return db.progress[userId].mistakes;
  },

  getUserChats(userId) {
    const db = readDb();
    return db.chats[userId] || [];
  },

  addChatMessage(userId, message) {
    const db = readDb();
    if (!db.chats[userId]) {
      db.chats[userId] = [];
    }
    db.chats[userId].push({
      id: Date.now().toString(),
      ...message,
      timestamp: new Date().toISOString()
    });
    // Keep last 100 messages
    if (db.chats[userId].length > 100) {
      db.chats[userId] = db.chats[userId].slice(-100);
    }
    writeDb(db);
    return message;
  },

  getLeaderboard() {
    const db = readDb();
    const list = db.users.map(u => {
      const prog = db.progress[u.id] || { xp: 0, streak: 1, completedLessons: {} };
      return {
        id: u.id,
        name: u.name,
        currentLevel: u.currentLevel || 'A0',
        targetLevel: u.targetLevel || 'B1',
        goal: u.goal || 'Ish / O‘qish',
        xp: prog.xp || 0,
        streak: prog.streak || 1,
        completedCount: Object.keys(prog.completedLessons || {}).length
      };
    });
    // Sort descending by XP, then streak
    return list.sort((a, b) => b.xp - a.xp || b.streak - a.streak);
  },

  clearUserChats(userId) {
    const db = readDb();
    db.chats[userId] = [];
    writeDb(db);
    return true;
  }
};
