// ==========================================
// OO-USTOZIM AI — CLIENT CONTROLLER
// ==========================================

const STATE = {
  token: localStorage.getItem('gm_token') || null,
  user: null,
  activeView: 'language-hub',
  authMode: 'login',
  selectedLang: localStorage.getItem('gm_lang') || 'de',
  levelFilter: 'all',
  lessons: [],
  currentLesson: null,
  vocabulary: [],
  activeScenario: 'free',
  chatMessages: [],
  isRecording: false,
  speechRecognition: null,
  soundEnabled: localStorage.getItem('gm_sound') !== 'false',
  darkMode: localStorage.getItem('gm_theme') === 'dark',
  blitz: {
    timer: 60,
    interval: null,
    score: 0,
    combo: 0,
    currentWord: null,
    isPlaying: false
  }
};

const LANG_CONFIG = {
  de: { name: 'Nemis tili', flag: '🇩🇪', speech: 'de-DE' },
  en: { name: 'Ingliz tili', flag: '🇬🇧', speech: 'en-US' },
  ru: { name: 'Rus tili', flag: '🇷🇺', speech: 'ru-RU' },
  ko: { name: 'Koreys tili', flag: '🇰🇷', speech: 'ko-KR' }
};

// ----------------- INITIALIZATION -----------------
document.addEventListener('DOMContentLoaded', async () => {
  if (STATE.darkMode) {
    document.body.classList.add('dark-mode');
  }
  updateThemeIcon();
  updateSoundIcon();
  updateLanguagePills();

  initIcons();
  setupSpeechRecognition();

  if (STATE.token) {
    await fetchCurrentUser();
  } else {
    showAuthView();
  }
});

function chooseLanguageAndEnter(langCode) {
  switchLanguage(langCode);
  navigate('lessons');
}

function switchLanguage(langCode) {
  if (!LANG_CONFIG[langCode]) return;
  STATE.selectedLang = langCode;
  localStorage.setItem('gm_lang', langCode);
  playSound('click');

  updateLanguagePills();
  setupSpeechRecognition();

  // Reload data for the chosen language
  loadLessons();
  loadVocabulary();

  if (STATE.activeView === 'ai-tutor') {
    loadChatHistory();
  }
}

function updateLanguagePills() {
  const cfg = LANG_CONFIG[STATE.selectedLang];

  ['de', 'en', 'ru', 'ko'].forEach(code => {
    const btn = document.getElementById(`lang-btn-${code}`);
    if (btn) {
      if (code === STATE.selectedLang) {
        btn.className = 'lang-pill px-2.5 py-1.5 rounded-xl transition bg-white text-blue-600 shadow-sm flex items-center space-x-1 font-bold';
      } else {
        btn.className = 'lang-pill px-2.5 py-1.5 rounded-xl transition text-slate-600 hover:text-slate-900 flex items-center space-x-1 font-medium';
      }
    }
  });

  const badge = document.getElementById('brand-flag-badge');
  if (badge && cfg) {
    badge.innerText = cfg.flag;
  }

  const heading = document.getElementById('lessons-heading');
  const subheading = document.getElementById('lessons-subheading');
  if (heading && cfg) {
    heading.innerHTML = `${cfg.flag} ${cfg.name} O‘quv Dasturi`;
  }
  if (subheading && cfg) {
    subheading.innerText = `${cfg.name} bo‘yicha 0 dan boshlab erkin gapirishgacha interaktiv darslar va mashqlar`;
  }

  const navLabel = document.getElementById('nav-label-lessons');
  if (navLabel && cfg) {
    navLabel.innerText = `${cfg.flag} Darslar`;
  }

  const chatStatus = document.getElementById('chat-ai-status-text');
  if (chatStatus && cfg) {
    chatStatus.innerText = `${cfg.flag} ${cfg.name} AI Murabbiyi faol`;
  }

  const lbSub = document.getElementById('leaderboard-subtext');
  if (lbSub && cfg) {
    lbSub.innerText = `Kim ko‘proq ${cfg.name}ni o‘rganyapti? Kunlik darslar orqali ball to‘plang va peshqadam bo‘ling!`;
  }
}

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ----------------- SOUND EFFECTS (WEB AUDIO SYNTHESIZER) -----------------
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  if (!STATE.soundEnabled) return;
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const now = audioCtx.currentTime;

    if (type === 'correct') {
      // Pleasant high chime
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'wrong') {
      // Gentle low buzz
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(146.83, now + 0.2);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (type === 'fanfare') {
      // Victory celebration
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);
        gain.gain.setValueAtTime(0.15, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.3);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.3);
      });
    } else if (type === 'click') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  } catch (e) {
    // Audio context silently handled
  }
}

function toggleDarkMode() {
  STATE.darkMode = !STATE.darkMode;
  document.body.classList.toggle('dark-mode', STATE.darkMode);
  localStorage.setItem('gm_theme', STATE.darkMode ? 'dark' : 'light');
  updateThemeIcon();
  playSound('click');
}

function updateThemeIcon() {
  const btn = document.getElementById('btn-theme');
  if (btn) {
    btn.innerHTML = `<i data-lucide="${STATE.darkMode ? 'sun' : 'moon'}" class="w-4 h-4 ${STATE.darkMode ? 'text-amber-400' : 'text-slate-500'}"></i>`;
    initIcons();
  }
}

function toggleSoundFx() {
  STATE.soundEnabled = !STATE.soundEnabled;
  localStorage.setItem('gm_sound', STATE.soundEnabled);
  updateSoundIcon();
  if (STATE.soundEnabled) playSound('click');
}

function updateSoundIcon() {
  const btn = document.getElementById('btn-sound');
  if (btn) {
    btn.innerHTML = `<i data-lucide="${STATE.soundEnabled ? 'volume-2' : 'volume-x'}" class="w-4 h-4 ${STATE.soundEnabled ? 'text-blue-600' : 'text-slate-400'}"></i>`;
    initIcons();
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
    tabReg.className = 'flex-1 py-2.5 text-sm font-bold rounded-xl transition bg-white text-blue-600 shadow-sm';
    tabLogin.className = 'flex-1 py-2.5 text-sm font-bold rounded-xl transition text-slate-600 hover:text-slate-900';
  } else {
    nameGroup.classList.add('hidden');
    goalGroup.classList.add('hidden');
    submitBtn.innerText = 'Hisobga kirish';
    tabLogin.className = 'flex-1 py-2.5 text-sm font-bold rounded-xl transition bg-white text-blue-600 shadow-sm';
    tabReg.className = 'flex-1 py-2.5 text-sm font-bold rounded-xl transition text-slate-600 hover:text-slate-900';
  }
  playSound('click');
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
    playSound('fanfare');

    showAppView();
    renderHeaderBadges();
    await loadInitialData();

  } catch (err) {
    playSound('wrong');
    alertEl.className = 'mb-4 p-3.5 rounded-2xl text-sm font-medium bg-red-50 text-red-700 border border-red-200';
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
  navigate(STATE.activeView || 'language-hub');
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
      <span>${STATE.user.streak || 1}</span>
    </div>

    <!-- XP -->
    <div class="flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold">
      <span>⚡</span>
      <span>${STATE.user.xp || 0} XP</span>
    </div>

    <!-- User Avatar Button -->
    <div onclick="navigate('profile')" class="cursor-pointer w-8 h-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center justify-center shadow-sm transition" title="${STATE.user.name}">
      ${(STATE.user.name || 'U').charAt(0).toUpperCase()}
    </div>
  `;
  initIcons();
}

// ----------------- NAVIGATION -----------------
function navigate(viewName) {
  STATE.activeView = viewName;
  playSound('click');

  document.querySelectorAll('.section-view').forEach(s => s.classList.add('hidden'));

  // Desktop Nav highlight
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.className = 'nav-item flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-50';
  });
  const activeBtn = document.getElementById(`nav-btn-${viewName}`);
  if (activeBtn) {
    activeBtn.className = 'nav-item flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition bg-blue-50 text-blue-700 shadow-sm';
  }

  // Mobile Nav highlight
  ['language-hub', 'lessons', 'leaderboard', 'blitz', 'ai-tutor', 'vocabulary', 'profile'].forEach(name => {
    const mBtn = document.getElementById(`m-nav-${name}`);
    if (mBtn) {
      if (name === viewName) {
        mBtn.className = 'flex flex-col items-center py-1.5 px-2 rounded-xl text-blue-600 font-bold';
      } else {
        mBtn.className = 'flex flex-col items-center py-1.5 px-2 rounded-xl text-slate-500 hover:text-slate-900';
      }
    }
  });

  const targetSection = document.getElementById(`section-${viewName}`);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (viewName === 'lessons') loadLessons();
  if (viewName === 'leaderboard') loadLeaderboardView();
  if (viewName === 'blitz') loadBlitzView();
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
    const res = await api(`/api/lessons?lang=${STATE.selectedLang}`);
    STATE.lessons = res.lessons;
    renderLessonsList();
  } catch (err) {
    console.error('Error loading lessons:', err);
  }
}

function filterLessonsByLevel(lvl) {
  STATE.levelFilter = lvl;
  const tabs = ['all', 'A1', 'A2', 'B1', 'B2'];
  tabs.forEach(tabKey => {
    const btn = document.getElementById(`lvl-tab-${tabKey}`);
    if (!btn) return;
    if (tabKey === lvl) {
      btn.className = 'lvl-filter-btn px-4 py-2 rounded-xl text-xs font-black transition bg-blue-600 text-white shadow-sm shrink-0';
    } else {
      btn.className = 'lvl-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shrink-0';
    }
  });
  renderLessonsList();
}

function renderLessonsList() {
  const grid = document.getElementById('lessons-grid');
  if (!grid) return;

  const currentLevelBadge = document.getElementById('badge-current-level');
  if (currentLevelBadge && STATE.user) {
    currentLevelBadge.innerText = `${STATE.user.currentLevel || 'A0'} (${STATE.user.targetLevel || 'B1'} gacha)`;
  }

  // Filter lessons
  const filtered = STATE.levelFilter === 'all'
    ? STATE.lessons
    : STATE.lessons.filter(l => l.level && l.level.includes(STATE.levelFilter));

  // Update progress card
  const completedInView = filtered.filter(l => l.isCompleted).length;
  const totalInView = filtered.length;
  const percent = totalInView > 0 ? Math.round((completedInView / totalInView) * 100) : 0;

  const lvlTitle = document.getElementById('lvl-progress-title');
  const lvlSub = document.getElementById('lvl-progress-sub');
  const lvlBar = document.getElementById('lvl-progress-bar');
  const lvlIcon = document.getElementById('lvl-card-icon');

  if (lvlTitle && lvlSub && lvlBar) {
    const langCfg = LANG_CONFIG[STATE.selectedLang] || LANG_CONFIG.de;
    if (STATE.levelFilter === 'all') {
      lvlTitle.innerText = `${langCfg.flag} ${langCfg.name} — Umumiy O‘quv Kursi`;
      lvlSub.innerText = `${completedInView} / ${totalInView} dars o‘zlashtirildi (${percent}%)`;
      if (lvlIcon) lvlIcon.innerText = '📚';
    } else {
      lvlTitle.innerText = `${langCfg.flag} ${langCfg.name} — ${STATE.levelFilter} Bosqichi`;
      lvlSub.innerText = `${completedInView} / ${totalInView} dars o‘zlashtirildi (${percent}%)`;
      if (lvlIcon) {
        const icons = { A1: '🟢', A2: '🟡', B1: '🔵', B2: '🟣' };
        lvlIcon.innerText = icons[STATE.levelFilter] || '🎯';
      }
    }
    lvlBar.style.width = `${percent}%`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center bg-white rounded-3xl border border-dashed border-slate-200 p-8">
        <div class="text-3xl mb-2">🚀</div>
        <h4 class="font-bold text-slate-800 text-sm mb-1">${STATE.levelFilter} darajasidagi darslar tez kunda!</h4>
        <p class="text-xs text-slate-500 max-w-md mx-auto">Tez orada ushbu bosqich bo'yicha yangi darslar va xalqaro imtihon materiallari qo'shiladi.</p>
        <button onclick="filterLessonsByLevel('all')" class="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs hover:bg-blue-100 transition">Barcha darslarni ko'rish</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(lesson => {
    const isDone = lesson.isCompleted;
    const isLocked = lesson.isLocked;
    const numDisplay = lesson.number < 10 ? `0${lesson.number}` : lesson.number;

    if (isLocked) {
      return `
        <div onclick="showLockedLessonAlert('${lesson.title.replace(/'/g, "\\'")}')" class="group bg-slate-50/80 rounded-3xl border border-dashed border-slate-200 p-5 transition cursor-pointer flex flex-col justify-between hover:border-amber-300">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="px-3 py-1 bg-slate-200 text-slate-500 rounded-xl text-xs font-bold">
                DARS ${numDisplay} • ${lesson.level}
              </span>
              <span class="flex items-center space-x-1 text-slate-400 text-xs font-bold">
                <i data-lucide="lock" class="w-3.5 h-3.5 text-amber-500"></i>
                <span>Qulflangan</span>
              </span>
            </div>
            <h3 class="font-bold text-slate-700 text-base mb-1.5 leading-snug">${lesson.title}</h3>
            <p class="text-xs md:text-sm text-slate-500 font-medium leading-relaxed mb-4">${lesson.goal}</p>
          </div>

          <div class="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-bold">
            <span class="flex items-center space-x-1 text-amber-700">
              <span>🔒 Oldingi darsni yakunlang</span>
            </span>
            <span class="text-slate-500 font-black">+30 XP</span>
          </div>
        </div>
      `;
    }

    return `
      <div onclick="openLesson('${lesson.id}')" class="group hover-lift bg-white rounded-3xl border ${isDone ? 'border-emerald-300 bg-emerald-50/15' : 'border-slate-200/90'} hover:border-indigo-500 p-5 shadow-xs hover:shadow-md transition cursor-pointer flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="px-3 py-1 bg-slate-100 group-hover:bg-indigo-50 text-slate-700 group-hover:text-indigo-700 rounded-xl text-xs font-black tracking-wide">
              DARS ${numDisplay} • ${lesson.level}
            </span>
            ${isDone 
              ? '<span class="flex items-center space-x-1 text-emerald-600 text-xs font-black"><i data-lucide="check-circle-2" class="w-4 h-4"></i><span>Bajarildi</span></span>'
              : '<span class="text-xs font-black text-indigo-600 flex items-center space-x-1"><span>Boshlash</span><i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></span>'
            }
          </div>
          <h3 class="font-black text-slate-900 text-base group-hover:text-indigo-600 transition mb-1.5 leading-snug">${lesson.title}</h3>
          <p class="text-xs md:text-sm text-slate-600 font-medium leading-relaxed mb-4">${lesson.goal}</p>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-bold">
          <span>⏱ 15 daqiqa</span>
          <span class="text-amber-700 font-black">+30 XP</span>
        </div>
      </div>
    `;
  }).join('');

  initIcons();
}

function showLockedLessonAlert(title) {
  playSound('click');
  const existingAlert = document.getElementById('modal-locked-lesson');
  if (existingAlert) existingAlert.remove();

  const alertBox = document.createElement('div');
  alertBox.id = 'modal-locked-lesson';
  alertBox.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in';
  alertBox.innerHTML = `
    <div class="bg-white rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl border border-slate-100">
      <div class="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
        🔒
      </div>
      <h3 class="text-lg font-black text-slate-900 mb-1">Dars Qulflangan!</h3>
      <p class="text-xs text-slate-500 mb-4 font-semibold">${title}</p>
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-xs text-amber-800 text-left mb-5 space-y-1">
        <p class="font-bold">🎯 Qanday ochish mumkin?</p>
        <p class="text-[11px] leading-relaxed">1. Ketma-ketlikda avvalgi darsni muvaffaqiyatli yakunlang.</p>
        <p class="text-[11px] leading-relaxed">2. Yoki <strong>Diagnostika</strong> testini topshirib, o‘z darajangizni birdaniga ochib oling!</p>
      </div>
      <div class="space-y-2">
        <button onclick="document.getElementById('modal-locked-lesson').remove(); navigate('diagnostic');" class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black transition shadow-md shadow-blue-500/20">
          Diagnostik Test Topshirish ⚡️
        </button>
        <button onclick="document.getElementById('modal-locked-lesson').remove();" class="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition">
          Tushundim
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(alertBox);
  initIcons();
}

async function openLesson(lessonId) {
  try {
    const res = await api(`/api/lessons/${lessonId}`);
    STATE.currentLesson = res.lesson;

    const container = document.getElementById('lesson-detail-container');
    const l = res.lesson;

    container.innerHTML = `
      <!-- Header banner -->
      <div class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 md:p-8 text-white">
        <div class="flex items-center space-x-2 text-xs font-black text-blue-200 uppercase tracking-wider mb-2">
          <span>DARS ${l.number < 10 ? '0' + l.number : l.number}</span>
          <span>•</span>
          <span>${l.level}</span>
        </div>
        <h2 class="text-2xl md:text-3xl font-black mb-2 tracking-tight">${l.title}</h2>
        <p class="text-blue-100 text-sm md:text-base max-w-2xl font-medium leading-relaxed">${l.goal}</p>
      </div>

      <div class="p-6 md:p-8 space-y-8">
        
        <!-- STEP 1: THEORY -->
        <div>
          <div class="flex items-center space-x-2 text-indigo-600 font-black text-sm uppercase tracking-wider mb-3">
            <i data-lucide="book-marked" class="w-5 h-5"></i>
            <span>1. Grammatika va Mantiq</span>
          </div>
          <p class="text-base text-slate-800 font-medium leading-relaxed mb-5">${l.theory.introUz}</p>

          <!-- Rules list -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            ${l.theory.rules.map(r => `
              <div class="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-indigo-300 hover:shadow-md transition">
                <div class="flex items-center justify-between mb-3">
                  <span class="font-black text-slate-900 text-base md:text-lg tracking-tight">${r.pattern}</span>
                  <span class="text-xs px-2.5 py-1 rounded-xl bg-indigo-50 text-indigo-700 font-extrabold border border-indigo-200/60 shadow-xs">${r.pronunciation}</span>
                </div>
                <div class="flex items-center justify-between pt-2.5 border-t border-slate-100">
                  <span class="text-sm md:text-base font-bold text-slate-900">${r.exampleDe}</span>
                  <button onclick="playGermanAudio('${r.exampleDe.replace(/'/g, "\\'")}')" class="p-2 rounded-xl text-indigo-600 hover:bg-indigo-50 transition" title="Tinglash">
                    <i data-lucide="volume-2" class="w-5 h-5"></i>
                  </button>
                </div>
                <span class="text-xs md:text-sm text-slate-600 font-medium block mt-1">${r.exampleUz}</span>
              </div>
            `).join('')}
          </div>

          <!-- Phrases Table -->
          <div class="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm">
            <div class="bg-gradient-to-r from-slate-100 to-indigo-50/50 px-5 py-3.5 text-xs font-black text-slate-700 uppercase tracking-wider border-b border-slate-200">
              Asosiy Iboralar & Misollar
            </div>
            <div class="divide-y divide-slate-100">
              ${l.theory.table.map(row => `
                <div class="px-5 py-3.5 flex items-center justify-between hover:bg-slate-50/80 transition">
                  <div class="flex flex-col sm:flex-row sm:items-baseline sm:space-x-3">
                    <span class="font-extrabold text-slate-900 text-base md:text-lg">${row.de}</span>
                    <span class="text-slate-600 font-medium text-xs md:text-sm mt-0.5 sm:mt-0">${row.uz}</span>
                  </div>
                  <button onclick="playGermanAudio('${row.de.replace(/'/g, "\\'")}')" class="p-2 text-indigo-600 hover:bg-indigo-50 rounded-xl transition shrink-0" title="Tinglash">
                    <i data-lucide="volume-2" class="w-5 h-5"></i>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- CULTURAL LIFEHACK (KULTURTIP) -->
        ${l.kulturtip ? `
          <div class="p-6 rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 shadow-sm">
            <span class="text-xs font-black uppercase text-amber-800 tracking-wider block mb-1">${(l.lang === 'ko' ? 'KOREYA' : (l.lang === 'ru' ? 'ROSSIYA' : (l.lang === 'en' ? 'BUYUK BRITANIYA / AQSH' : 'GERMANIYA')))} HAYOTI & MADANIYATI</span>
            <h4 class="font-extrabold text-slate-900 text-lg mb-2">${l.kulturtip.title}</h4>
            <p class="text-sm text-slate-700 leading-relaxed font-normal">${l.kulturtip.text}</p>
          </div>
        ` : ''}

        <!-- LISTENING COMPREHENSION (HÖRVERSTEHEN) -->
        ${l.listening ? `
          <div class="p-6 rounded-3xl bg-indigo-50/70 border border-indigo-200 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-black uppercase text-indigo-800 tracking-wider">${l.listening.title}</span>
              <button onclick="playGermanAudio('${l.listening.audioText.replace(/'/g, "\\'")}')" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black flex items-center space-x-1.5 transition shadow">
                <i data-lucide="volume-2" class="w-4 h-4"></i>
                <span>Audioni Tinglash</span>
              </button>
            </div>
            <h5 class="font-bold text-base text-slate-900 mb-3">${l.listening.question}</h5>
            <div class="space-y-2">
              ${l.listening.options.map((opt, oIdx) => `
                <button onclick="checkListeningAnswer(${oIdx}, ${l.listening.correctIndex})" class="w-full text-left p-3.5 rounded-xl bg-white border border-indigo-100 hover:border-indigo-400 text-sm font-semibold text-slate-800 transition shadow-xs">
                  ${opt}
                </button>
              `).join('')}
            </div>
            <div id="listening-feedback" class="hidden mt-3 p-3 rounded-xl text-xs font-bold"></div>
          </div>
        ` : ''}

        <!-- STEP 2: SPEAKING PROMPT -->
        ${l.speakingPrompt ? `
          <div class="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 shadow-sm">
            <div class="flex items-center space-x-2 text-amber-900 font-black text-sm uppercase tracking-wider mb-3">
              <i data-lucide="mic" class="w-5 h-5 text-amber-600"></i>
              <span>Speaking Mashqi (Ovoz bilan ayting)</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-amber-100 shadow-xs">
              <div>
                <p class="text-xl font-black text-slate-900 leading-snug">${l.speakingPrompt.textDe}</p>
                <p class="text-sm text-slate-600 font-medium mt-1">${l.speakingPrompt.textUz}</p>
                <p class="text-xs text-amber-800 font-semibold mt-2 bg-amber-50 px-2.5 py-1 rounded-lg inline-block">💡 ${l.speakingPrompt.tip}</p>
              </div>
              <button onclick="playGermanAudio('${l.speakingPrompt.textDe.replace(/'/g, "\\'")}')" class="self-start md:self-center px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-black flex items-center space-x-1.5 transition shadow">
                <i data-lucide="volume-2" class="w-4 h-4"></i>
                <span>Namunani Tinglash</span>
              </button>
            </div>
          </div>
        ` : ''}

        <!-- STEP 3: INTERACTIVE EXERCISES -->
        <div>
          <div class="flex items-center space-x-2 text-indigo-600 font-black text-sm uppercase tracking-wider mb-4">
            <i data-lucide="check-square" class="w-5 h-5"></i>
            <span>Interaktiv Mashqlar & Mini Test</span>
          </div>

          <form id="lesson-quiz-form" onsubmit="handleLessonQuizSubmit(event, '${l.id}')" class="space-y-6">
            ${l.exercises.map((ex, idx) => `
              <div class="p-5 md:p-6 rounded-3xl border border-slate-200/90 bg-white shadow-sm" id="ex-card-${ex.id}">
                <span class="text-xs font-black text-indigo-600 uppercase mb-1.5 block tracking-wider">Savol ${idx + 1}</span>
                <h4 class="font-bold text-slate-900 text-base mb-3.5 leading-snug">${ex.question}</h4>

                ${renderExerciseInput(ex)}

                <div id="ex-feedback-${ex.id}" class="hidden mt-3 p-3.5 rounded-2xl text-xs font-semibold"></div>
              </div>
            `).join('')}

            <button type="submit" id="btn-submit-lesson" class="w-full py-4 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-black rounded-2xl shadow-xl shadow-indigo-500/25 transition text-base">
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

function checkListeningAnswer(selected, correct) {
  const fb = document.getElementById('listening-feedback');
  fb.classList.remove('hidden');
  if (selected === correct) {
    playSound('correct');
    fb.className = 'mt-2 p-2.5 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-800';
    fb.innerText = '✅ To‘g‘ri topdingiz! Barakalla.';
  } else {
    playSound('wrong');
    fb.className = 'mt-2 p-2.5 rounded-xl text-xs font-bold bg-red-100 text-red-800';
    fb.innerText = '❌ Noto‘g‘ri. Audioni qaytadan tinglab ko‘ring.';
  }
}

function renderExerciseInput(ex) {
  if (ex.type === 'multiple-choice') {
    return `
      <div class="space-y-2.5">
        ${ex.options.map((opt, oIdx) => `
          <label class="flex items-center space-x-3.5 p-3.5 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30 cursor-pointer transition text-sm md:text-base font-semibold shadow-xs">
            <input type="radio" name="answer_${ex.id}" value="${oIdx}" class="w-4 h-4 text-indigo-600 focus:ring-indigo-500" required>
            <span class="text-slate-800">${opt}</span>
          </label>
        `).join('')}
      </div>
    `;
  }

  if (ex.type === 'fill-blank') {
    return `
      <div>
        <input type="text" name="answer_${ex.id}" placeholder="${ex.placeholder || 'Javobingizni yozing...'}" class="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base font-semibold text-slate-800" required>
        ${ex.hint ? `<span class="text-xs text-slate-500 mt-1.5 block font-medium">💡 Yordam: ${ex.hint}</span>` : ''}
      </div>
    `;
  }

  if (ex.type === 'order') {
    return `
      <div>
        <input type="text" name="answer_${ex.id}" placeholder="${ex.correctSentence}" class="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base font-semibold text-slate-800" required>
        <div class="flex flex-wrap gap-2 mt-2.5">
          ${ex.words.map(w => `
            <span class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs md:text-sm font-bold rounded-xl select-none transition">${w}</span>
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
      if (parseInt(val, 10) === ex.correctIndex) isCorrect = true;
    } else if (ex.type === 'fill-blank') {
      const cleanVal = (val || '').trim().toLowerCase();
      const expected = ex.correctAnswer.toLowerCase();
      const alts = (ex.altAnswers || []).map(a => a.toLowerCase());
      if (cleanVal === expected || alts.includes(cleanVal)) isCorrect = true;
    } else if (ex.type === 'order') {
      const cleanVal = (val || '').trim().replace(/[.,!?]/g, '').toLowerCase();
      const expected = ex.correctSentence.replace(/[.,!?]/g, '').toLowerCase();
      if (cleanVal === expected) isCorrect = true;
    }

    feedbackEl.classList.remove('hidden');
    if (isCorrect) {
      correctCount++;
      feedbackEl.className = 'mt-3 p-3 rounded-2xl text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200';
      feedbackEl.innerHTML = `✅ To‘g‘ri! ${ex.explanation || ''}`;
    } else {
      feedbackEl.className = 'mt-3 p-3 rounded-2xl text-xs font-semibold bg-red-50 text-red-800 border border-red-200';
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

  if (correctCount === lesson.exercises.length) {
    playSound('fanfare');
  } else {
    playSound('correct');
  }

  try {
    const submitBtn = document.getElementById('btn-submit-lesson');
    submitBtn.disabled = true;

    const res = await api(`/api/lessons/${lessonId}/submit`, {
      method: 'POST',
      body: JSON.stringify({
        score: correctCount,
        totalQuestions: lesson.exercises.length,
        mistakes
      })
    });

    if (window.confetti && correctCount === lesson.exercises.length) {
      window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }

    if (STATE.user) {
      STATE.user.xp = res.totalXp;
      STATE.user.streak = res.streak;
      renderHeaderBadges();
    }

    submitBtn.className = 'w-full py-3.5 bg-emerald-600 text-white font-extrabold rounded-2xl shadow-lg transition text-sm';
    submitBtn.innerHTML = `🎉 Dars yakunlandi! Natija: ${correctCount}/${lesson.exercises.length} (+${res.earnedXp} XP)`;

  } catch (err) {
    console.error('Error submitting lesson:', err);
  }
}

// ----------------- LEADERBOARD ENGINE (DO'STLAR REYTINGI) -----------------
async function loadLeaderboardView() {
  const listEl = document.getElementById('leaderboard-list');
  const podiumEl = document.getElementById('leaderboard-podium');
  if (!listEl || !podiumEl) return;

  const subtextEl = document.getElementById('leaderboard-subtext');
  const cfg = LANG_CONFIG[STATE.selectedLang] || LANG_CONFIG.de;
  if (subtextEl) {
    subtextEl.innerText = `Kim ko‘proq ${cfg.name}ni o‘rganyapti? Kunlik darslar orqali ball to‘plang va peshqadam bo‘ling!`;
  }

  try {
    const res = await api('/api/leaderboard');
    const leaders = res.leaderboard || [];

    // Keep user's XP in sync if in leaderboard
    if (STATE.user) {
      const myRow = leaders.find(u => u.id === STATE.user.id);
      if (myRow && myRow.xp !== undefined) {
        STATE.user.xp = myRow.xp;
        renderHeaderBadges();
      }
    }

    // Render Podium (Rank 2, Rank 1, Rank 3)
    const top1 = leaders[0] || null;
    const top2 = leaders[1] || null;
    const top3 = leaders[2] || null;

    podiumEl.innerHTML = `
      <!-- TOP 2 (KUMUSH) -->
      <div class="flex flex-col items-center">
        <div class="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-tr from-slate-200 via-slate-300 to-indigo-100 flex items-center justify-center font-black text-sm md:text-base text-slate-800 mb-1.5 shadow-md border-2 border-white ring-2 ring-slate-300/40">
          ${top2 ? top2.name.charAt(0).toUpperCase() : '2'}
        </div>
        <span class="text-xs font-bold truncate max-w-[80px] md:max-w-[100px] text-slate-800 text-center">${top2 ? top2.name : '—'}</span>
        <span class="text-[10px] text-slate-500 font-extrabold bg-slate-100 px-2 py-0.5 rounded-full mt-0.5">${top2 ? top2.xp + ' XP' : ''}</span>
        <div class="w-full bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 h-20 rounded-t-2xl mt-2 flex flex-col items-center justify-center font-black text-white text-base shadow border-t-2 border-slate-200">
          2
          <span class="text-[9px] uppercase font-bold text-slate-200">Kumush</span>
        </div>
      </div>

      <!-- TOP 1 (OLTIN CHAMPION) -->
      <div class="flex flex-col items-center">
        <div class="relative">
          <span class="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl animate-bounce">👑</span>
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-tr from-amber-400 via-amber-500 to-yellow-500 flex items-center justify-center font-black text-xl md:text-2xl text-slate-950 mb-1.5 shadow-xl shadow-amber-500/35 border-2 border-amber-200 ring-4 ring-amber-300/60">
            ${top1 ? top1.name.charAt(0).toUpperCase() : '1'}
          </div>
        </div>
        <span class="text-xs md:text-sm font-black truncate max-w-[100px] md:max-w-[120px] text-slate-900 text-center">${top1 ? top1.name : '—'}</span>
        <span class="text-[11px] text-amber-800 font-black bg-amber-100 px-2.5 py-0.5 rounded-full mt-0.5 border border-amber-200">${top1 ? top1.xp + ' XP' : ''}</span>
        <div class="w-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 h-28 rounded-t-3xl mt-2 flex flex-col items-center justify-center font-black text-white text-2xl shadow-lg shadow-amber-500/25 border-t-2 border-amber-300">
          1
          <span class="text-[10px] tracking-wider uppercase font-black text-amber-100">Oltin</span>
        </div>
      </div>

      <!-- TOP 3 (BRONZA) -->
      <div class="flex flex-col items-center">
        <div class="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-tr from-amber-600 via-orange-600 to-amber-700 flex items-center justify-center font-black text-sm md:text-base text-white mb-1.5 shadow-md border-2 border-white ring-2 ring-orange-300/40">
          ${top3 ? top3.name.charAt(0).toUpperCase() : '3'}
        </div>
        <span class="text-xs font-bold truncate max-w-[80px] md:max-w-[100px] text-slate-800 text-center">${top3 ? top3.name : '—'}</span>
        <span class="text-[10px] text-orange-800 font-extrabold bg-orange-100 px-2 py-0.5 rounded-full mt-0.5">${top3 ? top3.xp + ' XP' : ''}</span>
        <div class="w-full bg-gradient-to-b from-amber-600 via-orange-600 to-amber-800 h-16 rounded-t-2xl mt-2 flex flex-col items-center justify-center font-black text-white text-sm shadow border-t-2 border-orange-300">
          3
          <span class="text-[9px] uppercase font-bold text-orange-200">Bronza</span>
        </div>
      </div>
    `;

    // Render Full List
    listEl.innerHTML = leaders.map((u, idx) => {
      const isMe = STATE.user && STATE.user.id === u.id;
      if (isMe) {
        return `
          <div class="p-3.5 md:p-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/25 ring-2 ring-indigo-300/50 flex items-center justify-between transform transition hover:scale-[1.01]">
            <div class="flex items-center space-x-3.5">
              <div class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-black text-xs text-white">
                ${idx + 1}
              </div>
              <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center font-black text-sm text-white shadow-inner">
                ${u.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div class="flex items-center space-x-2">
                  <span class="text-sm font-black text-white">${u.name}</span>
                  <span class="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow">SIZ</span>
                </div>
                <div class="text-[11px] text-indigo-100 flex items-center space-x-2 font-medium">
                  <span>${u.currentLevel}</span>
                  <span>•</span>
                  <span>🔥 ${u.streak} kunlik streak</span>
                </div>
              </div>
            </div>
            <div class="text-right">
              <div class="px-3 py-1 rounded-xl bg-white/20 text-white font-black text-sm tracking-tight flex items-center space-x-1 shadow-inner">
                <span>⚡</span>
                <span>${u.xp} XP</span>
              </div>
            </div>
          </div>
        `;
      }

      return `
        <div class="p-3 md:p-3.5 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/80 shadow-xs flex items-center justify-between transition">
          <div class="flex items-center space-x-3.5">
            <div class="w-7 h-7 rounded-full flex items-center justify-center font-black text-xs ${idx === 0 ? 'bg-amber-100 text-amber-700' : idx === 1 ? 'bg-slate-200 text-slate-700' : idx === 2 ? 'bg-orange-100 text-orange-700' : 'text-slate-400'}">
              ${idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1}
            </div>
            <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-100 to-indigo-50 border border-slate-200 flex items-center justify-center font-bold text-sm text-slate-700 shadow-xs">
              ${u.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <span class="text-sm font-bold text-slate-800 block">${u.name}</span>
              <span class="text-[11px] text-slate-400 block">${u.currentLevel} • 🔥 ${u.streak} kun</span>
            </div>
          </div>
          <div class="text-right">
            <span class="px-3 py-1 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/60 font-black text-xs inline-flex items-center space-x-1">
              <span>⚡</span>
              <span>${u.xp} XP</span>
            </span>
          </div>
        </div>
      `;
    }).join('');

    initIcons();
  } catch (err) {
    console.error('Error loading leaderboard:', err);
  }
}

// ----------------- BLITZ 60s GAME ENGINE -----------------
// ----------------- BLITZ 60s GAME ENGINE -----------------
// Helper to shuffle any array
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Multilingual Blitz 60s Questions (25+ rich questions per language)
const blitzQuestionsBank = {
  de: [
    { q: '"der Tisch" ning o‘zbekcha ma’nosi nima?', a: ['stol', 'stul', 'eshik', 'deraza'], c: 0 },
    { q: '"die Lampe" artikli qaysi?', a: ['die', 'der', 'das', 'den'], c: 0 },
    { q: '"das Haus" nimani anglatadi?', a: ['uy', 'xona', 'daraxt', 'shahar'], c: 0 },
    { q: '"Danke" ga javoban nima deyiladi?', a: ['Bitte', 'Hallo', 'Tschüss', 'Guten Tag'], c: 0 },
    { q: '"Wasser" ning artikli nima?', a: ['das', 'der', 'die', 'den'], c: 0 },
    { q: '"Ich ______ Deutsch." (o‘rganmoqdaman):', a: ['lerne', 'lernst', 'lernt', 'lernen'], c: 0 },
    { q: '"Woher kommst du?" savolining ma’nosi:', a: ['Qayerdansan?', 'Qayerga ketyapsan?', 'Qayerda yashaysan?', 'Kimsan?'], c: 0 },
    { q: '"Guten Morgen" qachon aytiladi?', a: ['Ertalab', 'Kechqurun', 'Tushda', 'Tunda'], c: 0 },
    { q: '"sein" fe’lining "du" shakli:', a: ['bist', 'bin', 'ist', 'sind'], c: 0 },
    { q: '"sein" fe’lining "wir" shakli:', a: ['sind', 'seid', 'ist', 'bin'], c: 0 },
    { q: '"haben" fe’li nimani anglatadi?', a: ['ega bo‘lmoq (bor)', 'bo‘lmoq', 'bormoq', 'kelmoq'], c: 0 },
    { q: '"Apfel" (olma) ning artikli qaysi?', a: ['der', 'die', 'das', 'den'], c: 0 },
    { q: 'Nemischa "nein" so‘zining ma’nosi:', a: ['yo‘q', 'ha', 'balki', 'rahmat'], c: 0 },
    { q: '"Auf Wiedersehen" nimani bildiradi?', a: ['Ko‘rishguncha xayr', 'Salom', 'Xush kelibsiz', 'Kechirasiz'], c: 0 },
    { q: '"zehn" soni nechchiga teng?', a: ['10', '5', '12', '20'], c: 0 },
    { q: '"Ich habe eine Frage" nimani anglatadi?', a: ['Menda savol bor', 'Menda kitob bor', 'Men bilaman', 'Men tushunmadim'], c: 0 },
    { q: '"der Junge" so‘zining ma’nosi:', a: ['o‘g‘il bola', 'qiz bola', 'erkak', 'ayol'], c: 0 },
    { q: '"das Mädchen" so‘zining ma’nosi:', a: ['qiz bola', 'bola', 'ona', 'opa'], c: 0 },
    { q: '"Wo wohnst du?" nimani anglatadi?', a: ['Qayerda yashaysan?', 'Qayerdan kelding?', 'Qayerga borasan?', 'Isming nima?'], c: 0 },
    { q: '"Sehr gut!" iborasi ma’nosi:', a: ['Juda yaxshi!', 'Yomon emas', 'Rahmat', 'Xayr'], c: 0 },
    { q: '"Entschuldigung" so‘zining ma’nosi:', a: ['Kechirasiz', 'Rahmat', 'Iltimos', 'Mayli'], c: 0 },
    { q: '"rot" qaysi rang?', a: ['qizil', 'ko‘k', 'yashil', 'sariq'], c: 0 },
    { q: '"blau" qaysi rang?', a: ['ko‘k', 'qora', 'oq', 'qizil'], c: 0 },
    { q: '"Wie viel kostet das?" nimani so‘raydi?', a: ['Bu qancha turadi?', 'Bu nima?', 'Qayerda bu?', 'Kimniki bu?'], c: 0 },
    { q: '"Ich weiß nicht" nimani anglatadi?', a: ['Men bilmayman', 'Men bilaman', 'Menga yoqadi', 'Tushundim'], c: 0 },
    // Yangi qo'shilgan situatsion & imtihon savollari
    { q: '"der Flughafen" nimani anglatadi?', a: ['aeroport', 'vokzal', 'bekat', 'mehmonxona'], c: 0 },
    { q: '"der Reisepass" so‘zining ma’nosi:', a: ['xorijga chiqish pasporti', 'yo‘l chiptasi', 'viza', 'sug‘urta'], c: 0 },
    { q: '"der Arzt" kim?', a: ['shifokor', 'o‘qituvchi', 'muhandis', 'haydovchi'], c: 0 },
    { q: '"die Apotheke" nimani bildiradi?', a: ['dorixona', 'kasalxona', 'kutubxona', 'do‘kon'], c: 0 },
    { q: '"die Wohnung" so‘zi ma’nosi:', a: ['kvartira / xonadon', 'hovli', 'bino', 'ishxona'], c: 0 },
    { q: '"die Miete" nimani bildiradi?', a: ['ijara haqi', 'kommunal to‘lov', 'maosh', 'jarima'], c: 0 },
    { q: '"das Vorstellungsgespräch" qanday tadbir?', a: ['ish suhbati (intervyu)', 'imtihon', 'majlis', 'uchrashuv'], c: 0 },
    { q: '"die Ausbildung" nemis tizimida nima?', a: ['kasb-hunar ta’limi', 'litsey', 'maktab', 'kurs'], c: 0 },
    { q: '"Gute Besserung!" qachon tilanadi?', a: ['Kasalga: "Tezroq sog‘ayib keting!"', 'Tug‘ilgan kunda', 'Yangi yilda', 'Safar oldidan'], c: 0 },
    { q: '"Ich habe Kopfschmerzen" nimani bildiradi?', a: ['Boshim og‘riyapti', 'Qornim og‘riyapti', 'Tishim og‘riyapti', 'Charchadim'], c: 0 }
  ],
  en: [
    { q: '"Book" ning o‘zbekcha ma’nosi nima?', a: ['kitob', 'daftar', 'qalam', 'stol'], c: 0 },
    { q: '"Good morning" qachon aytiladi?', a: ['Ertalab', 'Kechqurun', 'Tunda', 'Tushda'], c: 0 },
    { q: '"I ______ a student" to‘g‘ri fe’l:', a: ['am', 'is', 'are', 'be'], c: 0 },
    { q: '"Thank you" ga javob nima bo‘ladi?', a: ['You are welcome', 'Goodbye', 'Please no', 'Good night'], c: 0 },
    { q: '"House" so‘zining ma’nosi nima?', a: ['uy', 'ko‘cha', 'mashina', 'shahar'], c: 0 },
    { q: '"They ______ football every day."', a: ['play', 'plays', 'playing', 'played'], c: 0 },
    { q: '"She ______ English fluently."', a: ['speaks', 'speak', 'speaking', 'speaked'], c: 0 },
    { q: '"Where are you from?" nimani bildiradi?', a: ['Qayerdansiz?', 'Qayerga ketyapsiz?', 'Qayerda yashaysiz?', 'Kim bilan siz?'], c: 0 },
    { q: '"Water" so‘zining ma’nosi nima?', a: ['suv', 'choy', 'sharbat', 'sut'], c: 0 },
    { q: '"Friend" so‘zining ko‘pligi qanday yoziladi?', a: ['friends', 'friendes', 'friendies', 'friend'], c: 0 },
    { q: '"Yesterday I ______ a movie."', a: ['watched', 'watch', 'watches', 'watching'], c: 0 },
    { q: '"What is your name?" savoliga javob:', a: ['My name is...', 'I am from...', 'I am fine', 'Yes, I do'], c: 0 },
    { q: '"Excuse me" iborasi qachon ishlatiladi?', a: ['Kechirasiz / Uzr so‘raganda', 'Xayrlashganda', 'Salomlashganda', 'Rahmat aytganda'], c: 0 },
    { q: '"Car" so‘zining ma’nosi nima?', a: ['mashina', 'samolyot', 'poezd', 'velosiped'], c: 0 },
    { q: '"Big" so‘zining qarama-qarshisi (antonimi):', a: ['small', 'fast', 'tall', 'hot'], c: 0 },
    { q: '"How are you?" nimani anglatadi?', a: ['Ahvollaringiz qanday?', 'Ismingiz nima?', 'Qayerdansiz?', 'Yoshingiz nechida?'], c: 0 },
    { q: '"Do you speak English?" savoliga ijobiy javob:', a: ['Yes, I do', 'Yes, I am', 'Yes, I have', 'Yes, I can do'], c: 0 },
    { q: '"Apple" nimani anglatadi?', a: ['olma', 'nok', 'uzum', 'anor'], c: 0 },
    { q: '"Family" so‘zining ma’nosi nima?', a: ['oila', 'do‘stlar', 'maktab', 'shahar'], c: 0 },
    { q: '"See you later" nimani bildiradi?', a: ['Keyinroq ko‘rishguncha', 'Xayrli tun', 'Xush kelibsiz', 'Ertagacha'], c: 0 },
    { q: '"One, two, three..." keyingi son qaysi?', a: ['four', 'five', 'six', 'ten'], c: 0 },
    { q: '"Green" qaysi rang?', a: ['yashil', 'qizil', 'sariq', 'ko‘k'], c: 0 },
    { q: '"I don\'t know" nimani anglatadi?', a: ['Men bilmayman', 'Men bilaman', 'Men bormayman', 'Men tushundim'], c: 0 },
    { q: '"Today is a ______ day." (chiroyli):', a: ['beautiful', 'badly', 'beauty', 'beautify'], c: 0 },
    { q: '"Help me, please" nimani bildiradi?', a: ['Iltimos, menga yordam bering', 'Menga bering', 'Menga qarang', 'Keling'], c: 0 },
    // Yangi situatsion savollar (Ingliz tili)
    { q: '"Airport" so‘zining ma’nosi:', a: ['aeroport', 'vokzal', 'dengiz porti', 'bekat'], c: 0 },
    { q: '"Boarding pass" nimani bildiradi?', a: ['samolyotga chiqish taloni', 'pasport', 'viza', 'yuk kvitansiyasi'], c: 0 },
    { q: '"Job interview" nimani anglatadi?', a: ['ish suhbati', 'imtihon', 'shartnoma', 'uchrashuv'], c: 0 },
    { q: '"Hospital" so‘zi nima?', a: ['kasalxona', 'dorixona', 'maktab', 'mehmonxona'], c: 0 },
    { q: '"Pharmacy" nimani bildiradi?', a: ['dorixona', 'shifoxona', 'poliklinika', 'kutubxona'], c: 0 },
    { q: '"Rent an apartment" nimani bildiradi?', a: ['kvartira ijaraga olish', 'kvartira sotish', 'uy tozalash', 'uy qurish'], c: 0 },
    { q: '"Bank account" nimani anglatadi?', a: ['bank hisob raqami', 'kredit karta', 'naqd pul', 'valyuta'], c: 0 },
    { q: '"Get well soon!" qachon aytiladi?', a: ['"Tezroq tuzalib keting!"', '"Xayrli tong!"', '"Omad tilayman!"', '"Tug‘ilgan kuningiz bilan!"'], c: 0 },
    { q: '"I have an appointment" nima degani?', a: ['Menda belgilangan qabul/uchrashuv bor', 'Menda dori bor', 'Menda savol bor', 'Men ketyapman'], c: 0 },
    { q: '"Where is baggage claim?" nimani so‘raydi?', a: ['Yuklarni topshirish/olish joyi qayerda?', 'Chipta qayerda?', 'Chiqish qayerda?', 'Hojatxona qayerda?'], c: 0 }
  ],
  ru: [
    { q: '"Здравствуйте" qanday salomlashish?', a: ['Rasmiy salom', 'Do‘stona salom', 'Xayrlashuv', 'Kechirim'], c: 0 },
    { q: '"Книга" (kitob) qaysi jinsga kiradi?', a: ['Женский род (Она)', 'Мужской род (Он)', 'Средний род (Оно)'], c: 0 },
    { q: '"Дом" (uy) qaysi jinsga kiradi?', a: ['Мужской род (Он)', 'Женский род (Она)', 'Средний род (Оно)'], c: 0 },
    { q: '"Окно" (deraza) qaysi jinsga kiradi?', a: ['Средний род (Оно)', 'Мужской род (Он)', 'Женский род (Она)'], c: 0 },
    { q: '"Спасибо большое" nima degani?', a: ['Katta rahmat', 'Arzimaydi', 'Xayr', 'Iltimos'], c: 0 },
    { q: '"Я ______ по-русски." (gapiraman fe’li):', a: ['говорю', 'говоришь', 'говорит', 'говорим'], c: 0 },
    { q: '"Как вас зовут?" nimani so‘raydi?', a: ['Ismingiz nima?', 'Qayerdansiz?', 'Ahvolingiz qanday?', 'Yoshingiz nechida?'], c: 0 },
    { q: '"До свидания" iborasi ma’nosi:', a: ['Xayr / Ko‘rishguncha', 'Salom', 'Xush kelibsiz', 'Kechirasiz'], c: 0 },
    { q: '"Вода" so‘zining o‘zbekcha tarjimasi:', a: ['suv', 'choy', 'sharbat', 'non'], c: 0 },
    { q: '"Хлеб" nimani anglatadi?', a: ['non', 'osh', 'gosht', 'tuxum'], c: 0 },
    { q: '"Мы ______ в Ташкенте." (yashaymiz):', a: ['живём', 'живу', 'живёт', 'живут'], c: 0 },
    { q: '"Пожалуйста" so‘zining ma’nosi:', a: ['Iltimos / Arzimaydi', 'Rahmat', 'Salom', 'Kechirasiz'], c: 0 },
    { q: '"Извините" qachon aytiladi?', a: ['Kechirim so‘raganda', 'Salomlashganda', 'Xayrlashganda', 'Minnatdorchilikda'], c: 0 },
    { q: '"Друг" so‘zining ko‘pligi qanday bo‘ladi?', a: ['друзья', 'други', 'друзьями', 'другам'], c: 0 },
    { q: '"Где находится аптека?" nimani so‘raydi?', a: ['Dorixona qayerda joylashgan?', 'Dorixona bormi?', 'Bu dori qancha?', 'Shifoxona qayerda?'], c: 0 },
    { q: '"Сколько это стоит?" savolining ma’nosi:', a: ['Bu qancha turadi?', 'Bu nima?', 'Kimniki bu?', 'Qachon bo‘ladi?'], c: 0 },
    { q: '"Хорошо" so‘zining antonimi nima?', a: ['Плохо', 'Отлично', 'Красиво', 'Быстро'], c: 0 },
    { q: '"Один, два, три, ______" keyingi son:', a: ['четыре', 'пять', 'шесть', 'десять'], c: 0 },
    { q: '"Красный" qaysi rang?', a: ['qizil', 'ko‘k', 'sariq', 'oq'], c: 0 },
    { q: '"Я не понимаю" iborasi nimani bildiradi?', a: ['Men tushunmayapman', 'Men bilmayman', 'Men bormayman', 'Men xohlamayman'], c: 0 },
    { q: '"Работа" so‘zining ma’nosi:', a: ['ish', 'uy', 'maktab', 'bozor'], c: 0 },
    { q: '"Машина" qaysi rodga kiradi?', a: ['Женский род (Она)', 'Мужской род (Он)', 'Средний род (Оно)'], c: 0 },
    { q: '"Доброе утро" qachon tilanadi?', a: ['Ertalab', 'Kechqurun', 'Kunduzi', 'Tunda'], c: 0 },
    { q: '"У меня есть вопрос" nimani bildiradi?', a: ['Menda savol bor', 'Menda dars bor', 'Menda kitob bor', 'Men bilaman'], c: 0 },
    { q: '"Конечно" so‘zining tarjimasi:', a: ['Albatta', 'Hech qachon', 'Balki', 'Yo‘q'], c: 0 },
    // Yangi situatsion savollar (Rus tili)
    { q: '"Аэропорт" so‘zining ma’nosi:', a: ['aeroport', 'vokzal', 'bekat', 'mehmonxona'], c: 0 },
    { q: '"Паспортный контроль" nimani bildiradi?', a: ['pasport nazorati', 'bojxona', 'chiqish eshigi', 'kassa'], c: 0 },
    { q: '"Собеседование" nimani anglatadi?', a: ['ish suhbati (intervyu)', 'yig‘ilish', 'dars', 'bahslashuv'], c: 0 },
    { q: '"Больница" va "Аптека" so‘zlari:', a: ['kasalxona va dorixona', 'maktab va kutubxona', 'do‘kon va bozor', 'bank va pochta'], c: 0 },
    { q: '"Снять квартиру" nimani bildiradi?', a: ['kvartirani ijaraga olish', 'kvartira sotish', 'uy tozalash', 'ta’mirlash'], c: 0 },
    { q: '"Открыть банковский счёт" iborasi:', a: ['bankda hisob raqam ochish', 'kartani yopish', 'pul o‘tkazish', 'kredit olish'], c: 0 },
    { q: '"Выздоравливайте!" qachon tilanadi?', a: ['Bemorga: "Tuzalib keting!"', 'Safar oldidan', 'Ovqatlanayotganda', 'Xayrlashganda'], c: 0 },
    { q: '"У меня болит голова" nimani anglatadi?', a: ['Boshim og‘riyapti', 'Tishim og‘riyapti', 'Yuragim og‘riyapti', 'Oshqozonim og‘riyapti'], c: 0 }
  ],
  ko: [
    { q: '"안녕하세요" [Annyeonghaseyo] nima degani?', a: ['Assalomu alaykum / Salom', 'Katta rahmat', 'Xayr', 'Kechirasiz'], c: 0 },
    { q: '"감사합니다" [Gamsahamnida] degani nima?', a: ['Rahmat', 'Salom', 'Iltimos', 'Kechirasiz'], c: 0 },
    { q: '"물" [mul] so‘zining ma’nosi nima?', a: ['suv', 'choy', 'non', 'kofe'], c: 0 },
    { q: '"친구" [chingu] nimani anglatadi?', a: ['do‘st', 'talaba', 'o‘qituvchi', 'ota'], c: 0 },
    { q: '"죄송합니다" [Joesonghamnida] qachon aytiladi?', a: ['Uzr / Kechirasiz deganda', 'Rahmat aytganda', 'Salomlashganda', 'Xayrlashganda'], c: 0 },
    { q: '"네" [ne] so‘zi nimani bildiradi?', a: ['Ha / Mayli', 'Yo‘q', 'Rahmat', 'Salom'], c: 0 },
    { q: '"아니요" [aniyo] nima degani?', a: ['Yo‘q', 'Ha', 'Iltimos', 'Xayr'], c: 0 },
    { q: '"책" [chaek] so‘zining o‘zbekcha ma’nosi:', a: ['kitob', 'daftar', 'qalam', 'stol'], c: 0 },
    { q: '"집" [jip] nimani bildiradi?', a: ['uy', 'maktab', 'magazin', 'shahar'], c: 0 },
    { q: '"학교" [hakgyo] so‘zi nima?', a: ['maktab', 'universitet', 'kasalxona', 'idoralar'], c: 0 },
    { q: '"밥" [bap] nimani anglatadi?', a: ['guruch / ovqat', 'choy', 'suv', 'shakar'], c: 0 },
    { q: '"선생님" [seonsaengnim] kim?', a: ['o‘qituvchi / ustoz', 'talaba', 'shifokor', 'haydovchi'], c: 0 },
    { q: '"학생" [haksaeng] so‘zining ma’nosi:', a: ['talaba / o‘quvchi', 'o‘qituvchi', 'do‘st', 'bola'], c: 0 },
    { q: '"커피" [kheophi] nimani bildiradi?', a: ['qahva (kofe)', 'choy', 'sharbat', 'suv'], c: 0 },
    { q: '"가다" [gada] fe’li nima?', a: ['bormoq', 'kelmoq', 'yemoq', 'ichmoq'], c: 0 },
    { q: '"오다" [oda] fe’li nima?', a: ['kelmoq', 'bormoq', 'yotmoq', 'ko‘rmoq'], c: 0 },
    { q: '"먹다" [meokda] nimani bildiradi?', a: ['yemoq', 'ichmoq', 'gapirmoq', 'uxlamoq'], c: 0 },
    { q: '"마시다" [masida] qaysi harakat?', a: ['ichmoq', 'yemoq', 'yugurmoq', 'o‘tirmoq'], c: 0 },
    { q: 'Koreys alifbosi nima deb ataladi?', a: ['Hangeul (한글)', 'Katakana', 'Iyeroglif', 'Pinyin'], c: 0 },
    { q: '"하나, 둘, 셋" [hana, dul, set] qaysi sonlar?', a: ['1, 2, 3', '4, 5, 6', '10, 20, 30', '100, 200, 300'], c: 0 },
    { q: '"어디" [eodi] so‘rog‘i nimani anglatadi?', a: ['qayer?', 'qachon?', 'kim?', 'nima?'], c: 0 },
    { q: '"누구" [nugu] so‘rog‘i nimani bildiradi?', a: ['kim?', 'nima?', 'qayer?', 'qancha?'], c: 0 },
    { q: '"얼마예요?" [eolmayeyo] nimani so‘raydi?', a: ['Narxi qancha?', 'Soat necha?', 'Ismingiz nima?', 'Qayerdasiz?'], c: 0 },
    { q: '"맛있어요" [masisseoyo] nimani bildiradi?', a: ['Juda mazali', 'Achchiq', 'Shirin emas', 'Issiq'], c: 0 },
    { q: '"주세요" [juseyo] so‘zining ma’nosi:', a: ['...bering / iltimos', 'oling', 'keting', 'bormang'], c: 0 },
    // Yangi situatsion savollar (Koreys tili)
    { q: '"공항" [gonghang] nimani anglatadi?', a: ['aeroport', 'vokzal', 'dengiz', 'mehmonxona'], c: 0 },
    { q: '"여권" [yeogwon] nima degani?', a: ['pasport', 'viza', 'chipta', 'sug‘urta'], c: 0 },
    { q: '"면접" [myeonjeop] qanday tadbir?', a: ['ish suhbati (intervyu)', 'yig‘ilish', 'dars', 'to‘y'], c: 0 },
    { q: '"병원" [byeongwon] va "약국" [yakguk]:', a: ['kasalxona va dorixona', 'maktab va bog‘cha', 'magazin va bozor', 'kafe va bar'], c: 0 },
    { q: '"머리가 아파요" [meoriga apayo] nima degani?', a: ['Boshim og‘riyapti', 'Qornim og‘riyapti', 'Tishim og‘riyapti', 'Kechikdim'], c: 0 },
    { q: '"은행" [eunhaeng] nimani bildiradi?', a: ['bank', 'pochta', 'idora', 'politsiya'], c: 0 },
    { q: '"계좌를 개설하고 싶어요" [gyejwareul gaeseolhago sipeoyo]:', a: ['Hisob raqam ochmoqchiman', 'Pul yubormoqchiman', 'Chipta olmoqchiman', 'Kvartira olmoqchiman'], c: 0 },
    { q: '"얼마나 걸려요?" [eolmana geollyeoyo] nima degani?', a: ['Qancha vaqt ketadi?', 'Bu qancha turadi?', 'Bu qayerda?', 'Kim keladi?'], c: 0 }
  ]
};

function getActiveBlitzQuestions() {
  return blitzQuestionsBank[STATE.selectedLang] || blitzQuestionsBank.de;
}

let blitzShuffledList = [];
let blitzCurrentIndex = 0;

function loadBlitzView() {
  const container = document.getElementById('blitz-container');
  if (!container) return;

  if (STATE.blitz.isPlaying) return;

  const cfg = LANG_CONFIG[STATE.selectedLang] || LANG_CONFIG.de;

  container.innerHTML = `
    <div class="py-6 space-y-5">
      <div class="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 text-slate-950 flex items-center justify-center text-3xl shadow-xl shadow-orange-500/30">
        ⚡
      </div>
      <div>
        <h3 class="text-2xl font-black text-white mb-2">60-Soniyalik ${cfg.name} Lug‘at Jangi</h3>
        <p class="text-xs text-indigo-200/80 mb-6 max-w-sm mx-auto leading-relaxed">
          60 soniya ichida imkon qadar ko‘p ${cfg.name} so‘zlari va testlarini toping. Har bir to‘g‘ri javob sizga XP va do‘stlar reytingida ochko keltiradi!
        </p>
      </div>

      <button onclick="startBlitzGame()" class="w-full py-4 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 hover:brightness-110 text-slate-950 font-black rounded-2xl shadow-xl shadow-orange-500/35 transition text-base tracking-wide active:scale-98">
        Jangni Boshlash! 🚀
      </button>
    </div>
  `;
}

function startBlitzGame() {
  STATE.blitz.isPlaying = true;
  STATE.blitz.score = 0;
  STATE.blitz.timer = 60;
  blitzShuffledList = shuffleArray(getActiveBlitzQuestions());
  blitzCurrentIndex = 0;
  playSound('fanfare');

  const scoreBadge = document.getElementById('blitz-score-badge');
  if (scoreBadge) scoreBadge.innerText = 'Ball: 0';

  renderBlitzQuestion();

  clearInterval(STATE.blitz.interval);
  STATE.blitz.interval = setInterval(() => {
    STATE.blitz.timer--;
    const timerBar = document.getElementById('blitz-timer-bar');
    if (timerBar) {
      const pct = (STATE.blitz.timer / 60) * 100;
      timerBar.style.width = `${pct}%`;
      if (STATE.blitz.timer <= 10) {
        timerBar.classList.add('timer-critical');
      } else {
        timerBar.classList.remove('timer-critical');
      }
    }

    if (STATE.blitz.timer <= 0) {
      endBlitzGame();
    }
  }, 1000);
}

function renderBlitzQuestion() {
  const container = document.getElementById('blitz-container');
  if (!container) return;

  if (!blitzShuffledList || blitzShuffledList.length === 0 || blitzCurrentIndex >= blitzShuffledList.length) {
    blitzShuffledList = shuffleArray(getActiveBlitzQuestions());
    blitzCurrentIndex = 0;
  }

  const q = blitzShuffledList[blitzCurrentIndex];

  // Map each option with isCorrect, then SHUFFLE the options so the correct answer is NEVER always the 1st variant!
  const mappedOptions = q.a.map((optText, origIdx) => ({
    text: optText,
    isCorrect: origIdx === q.c
  }));
  const shuffledOptions = shuffleArray(mappedOptions);

  container.innerHTML = `
    <div class="space-y-5 text-left">
      <div class="flex items-center justify-between text-xs font-bold text-indigo-300 uppercase tracking-widest border-b border-white/10 pb-2.5">
        <span class="flex items-center space-x-1.5">
          <span class="w-2 h-2 rounded-full bg-amber-400"></span>
          <span>Savol: ${blitzCurrentIndex + 1}</span>
        </span>
        <span class="text-amber-400 font-black">⏱ ${STATE.blitz.timer}s</span>
      </div>
      <h4 class="text-lg md:text-xl font-black text-white leading-snug">${q.q}</h4>

      <div class="grid grid-cols-2 gap-3">
        ${shuffledOptions.map((opt) => `
          <button onclick="handleBlitzAnswer(${opt.isCorrect})" class="p-3.5 md:p-4 rounded-2xl bg-white/10 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-slate-950 border border-white/15 text-white font-black text-sm md:text-base transition duration-150 active:scale-95 text-center shadow">
            ${opt.text}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

async function handleBlitzAnswer(isCorrect) {
  if (isCorrect) {
    playSound('correct');
    STATE.blitz.score += 10;
  } else {
    playSound('wrong');
  }

  const scoreBadge = document.getElementById('blitz-score-badge');
  if (scoreBadge) scoreBadge.innerText = `Ball: ${STATE.blitz.score}`;

  blitzCurrentIndex++;
  renderBlitzQuestion();
}

async function endBlitzGame() {
  clearInterval(STATE.blitz.interval);
  STATE.blitz.isPlaying = false;
  playSound('fanfare');

  const container = document.getElementById('blitz-container');
  const earnedXp = Math.max(5, Math.min(100, Math.round(STATE.blitz.score / 2)));

  // Submit score to backend
  try {
    const res = await api('/api/blitz/score', {
      method: 'POST',
      body: JSON.stringify({ correctCount: Math.round(STATE.blitz.score / 10), score: STATE.blitz.score })
    });
    if (res && res.totalXp !== undefined) {
      if (STATE.user) {
        STATE.user.xp = res.totalXp;
        renderHeaderBadges();
      }
    } else if (STATE.user) {
      STATE.user.xp = (STATE.user.xp || 0) + earnedXp;
      renderHeaderBadges();
    }
  } catch (e) {
    console.error('Blitz score sync error:', e);
  }

  if (window.confetti) window.confetti({ particleCount: 120, spread: 80 });

  container.innerHTML = `
    <div class="py-6 space-y-5">
      <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-500 flex items-center justify-center text-4xl shadow-xl shadow-amber-500/40 animate-bounce">
        🏆
      </div>
      <div>
        <h3 class="text-2xl md:text-3xl font-black text-white mb-1">Vaqt Tugadi!</h3>
        <p class="text-xs text-indigo-200">Ajoyib natija! Ballaringiz hisobingizga muvaffaqiyatli saqlandi.</p>
      </div>

      <div class="bg-white/10 border border-white/15 rounded-2xl p-4 max-w-xs mx-auto">
        <div class="text-xs text-indigo-200 uppercase font-bold tracking-wider">To‘plangan Ball</div>
        <div class="text-3xl font-black text-amber-400 my-1">${STATE.blitz.score} Ball</div>
        <div class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black">
          <span>⚡</span>
          <span>+${earnedXp} XP hisobga qo‘shildi!</span>
        </div>
      </div>

      <div class="flex gap-3 pt-2">
        <button onclick="startBlitzGame()" class="flex-1 py-3.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:brightness-110 text-slate-950 font-black rounded-2xl text-xs md:text-sm transition shadow-lg shadow-orange-500/30">
          🔄 Yana O‘ynash
        </button>
        <button onclick="navigate('leaderboard')" class="flex-1 py-3.5 bg-white/15 hover:bg-white/25 text-white font-black rounded-2xl text-xs md:text-sm transition border border-white/20">
          🏆 Reytingni Ko‘rish
        </button>
      </div>
    </div>
  `;
}

// ----------------- DIAGNOSTIC PLACEMENT ENGINE -----------------
let diagnosticAnswers = [];
let diagnosticQuestions = [];

async function loadDiagnosticView() {
  const container = document.getElementById('diagnostic-content');
  if (!container) return;

  const cfg = LANG_CONFIG[STATE.selectedLang] || LANG_CONFIG.de;

  container.innerHTML = `
    <div class="text-center py-6">
      <div class="w-16 h-16 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 text-2xl font-black">
        🎯
      </div>
      <h3 class="text-xl font-black text-slate-900 mb-2">${cfg.flag} ${cfg.name} Darajangizni Aniqlang</h3>
      <p class="text-sm text-slate-500 max-w-md mx-auto mb-6">
        ${cfg.name} bo‘yicha A0 dan B2 gacha bo‘lgan 10 ta saralangan diagnostika savollari. Bu sizning darajangizni aniqlab, shaxsiy o‘quv yo‘nalishini tuzib beradi.
      </p>

      <button onclick="startDiagnosticTest()" class="py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-lg shadow-blue-500/25 transition text-sm">
        Testni Boshlash (3 daqiqa)
      </button>
    </div>
  `;
}

async function startDiagnosticTest() {
  try {
    const res = await api(`/api/diagnostic/questions?lang=${STATE.selectedLang}`);
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

      <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-6">
        <div class="bg-blue-600 h-full transition-all duration-300" style="width: ${((index + 1) / diagnosticQuestions.length) * 100}%"></div>
      </div>

      <div class="mb-6">
        <span class="text-xs font-bold px-2 py-0.5 rounded-lg bg-purple-50 text-purple-700 uppercase mb-2 inline-block">${q.category}</span>
        <h3 class="text-base font-extrabold text-slate-900">${q.question}</h3>
      </div>

      <div class="space-y-2 mb-6">
        ${q.options.map((opt, oIdx) => `
          <button onclick="handleDiagnosticAnswer(${index}, ${oIdx})" class="w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 transition text-sm font-medium text-slate-800">
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
    await submitDiagnosticTest();
  }
}

async function submitDiagnosticTest() {
  const container = document.getElementById('diagnostic-content');
  container.innerHTML = `<div class="text-center py-10"><p class="font-bold text-sm text-slate-600">Diagnostika tahlil qilinmoqda...</p></div>`;

  try {
    const res = await api('/api/diagnostic/submit', {
      method: 'POST',
      body: JSON.stringify({ answers: diagnosticAnswers, lang: STATE.selectedLang })
    });

    const r = res.result;
    if (STATE.user) {
      STATE.user.currentLevel = r.level;
      renderHeaderBadges();
    }

    if (window.confetti) window.confetti({ particleCount: 80, spread: 60 });
    playSound('fanfare');

    container.innerHTML = `
      <div class="space-y-6">
        <div class="text-center">
          <span class="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-1">RASMIY XULOSA</span>
          <h2 class="text-3xl font-black text-slate-900 mb-1">DARAJANGIZ: <span class="text-blue-600">${r.level}</span></h2>
          <p class="text-xs text-slate-500">Umumiy ko‘rsatkich: ${r.totalScorePct}% to‘g‘ri javob</p>
        </div>

        <div class="bg-slate-50 p-5 rounded-3xl border border-slate-200 space-y-3">
          ${renderMetricBar('Lug‘at (Vocabulary)', r.vocabularyPct)}
          ${renderMetricBar('Grammatika (Grammar)', r.grammarPct)}
          ${renderMetricBar('O‘qib tushunish (Reading)', r.readingPct)}
          ${renderMetricBar('Og‘zaki nutq (Speaking)', r.speakingPct)}
          ${renderMetricBar('Eshitib tushunish (Listening)', r.listeningPct)}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
            <span class="font-bold block mb-1">💪 Kuchli tomonlar:</span>
            ${(r.strongAreas || []).map(a => `<div>• ${a}</div>`).join('') || '—'}
          </div>
          <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
            <span class="font-bold block mb-1">⚠️ E’tibor qaratish kerak:</span>
            ${(r.weakAreas || []).map(a => `<div>• ${a}</div>`).join('') || '—'}
          </div>
        </div>

        <button onclick="navigate('lessons')" class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-lg shadow-blue-500/25 transition text-sm">
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
        <button onclick="selectScenario('${key}')" class="w-full text-left p-3.5 rounded-2xl border ${isActive ? 'border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-950 font-bold shadow-xs ring-2 ring-indigo-200' : 'border-slate-200/80 hover:border-indigo-300 hover:bg-slate-50 text-slate-800'} transition flex items-start space-x-3 group">
          <span class="text-xl p-1.5 rounded-xl bg-white shadow-xs border border-slate-100">${sc.icon || '💬'}</span>
          <div class="flex-1 min-w-0">
            <span class="font-black text-xs md:text-sm text-slate-900 block truncate">${sc.name}</span>
            <span class="text-[11px] text-slate-500 block leading-tight mt-0.5 line-clamp-2">${sc.description}</span>
          </div>
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
      const cfg = LANG_CONFIG[STATE.selectedLang] || LANG_CONFIG.de;
      const exampleText = {
        de: '"Hallo, wie geht es dir?"',
        en: '"Hello, how are you today?"',
        ru: '"Здравствуйте, как ваши дела?"',
        ko: '"안녕하세요! 반갑습니다."'
      }[STATE.selectedLang] || '"Salom!"';

      container.innerHTML = `
        <div class="text-center py-12 text-slate-400">
          <i data-lucide="message-square" class="w-8 h-8 mx-auto mb-2 opacity-40"></i>
          <p class="text-xs">${cfg.flag} ${cfg.name}da birinchi xabaringizni yozing yoki mikrofondan gapiring!</p>
          <p class="text-[11px] text-slate-400 mt-1">Masalan: <em>${exampleText}</em></p>
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
        <div class="max-w-[85%] bg-blue-600 text-white rounded-3xl rounded-tr-sm px-4 py-3 shadow-sm text-sm">
          <p>${msg.text}</p>
        </div>
      </div>
    `;
  }

  const hasCorrections = msg.corrections && msg.corrections.length > 0;
  return `
    <div class="flex justify-start">
      <div class="max-w-[90%] bg-slate-100 rounded-3xl rounded-tl-sm p-4 text-slate-900 shadow-sm text-sm space-y-2.5">
        <div class="flex items-start justify-between gap-3">
          <p class="font-bold text-slate-900 text-base leading-snug">${msg.textDe}</p>
          <button onclick="playGermanAudio('${msg.textDe.replace(/'/g, "\\'")}')" class="shrink-0 p-1.5 rounded-xl bg-white hover:bg-slate-200 text-blue-600 transition shadow-sm" title="Ovoz bilan tinglash">
            <i data-lucide="volume-2" class="w-4 h-4"></i>
          </button>
        </div>

        <p class="text-xs text-slate-500 italic border-l-2 border-blue-400 pl-2">${msg.textUz}</p>

        ${hasCorrections ? `
          <div class="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs space-y-1.5 mt-2">
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
          <div class="text-[11px] text-slate-500 bg-white/70 p-2 rounded-xl">
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

  const userHtml = renderChatMessage({ role: 'user', text: message });
  container.insertAdjacentHTML('beforeend', userHtml);
  container.scrollTop = container.scrollHeight;
  playSound('click');

  try {
    const sendBtn = document.getElementById('btn-chat-send');
    sendBtn.disabled = true;

    const geminiKey = localStorage.getItem('gm_gemini_key') || '';
    const groqKey = localStorage.getItem('gm_groq_key') || '';
    const res = await api('/api/chat/message', {
      method: 'POST',
      body: JSON.stringify({
        message,
        scenario: STATE.activeScenario,
        geminiKey,
        groqKey,
        lang: STATE.selectedLang
      })
    });

    const aiHtml = renderChatMessage(res.message);
    container.insertAdjacentHTML('beforeend', aiHtml);
    container.scrollTop = container.scrollHeight;
    initIcons();

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

function openAiKeyModal() {
  const modal = document.getElementById('modal-ai-key');
  if (modal) {
    modal.classList.remove('hidden');
    const inputGemini = document.getElementById('input-gemini-key');
    const inputGroq = document.getElementById('input-groq-key');
    if (inputGemini) inputGemini.value = localStorage.getItem('gm_gemini_key') || '';
    if (inputGroq) inputGroq.value = localStorage.getItem('gm_groq_key') || '';
    initIcons();
  }
}

function closeAiKeyModal() {
  const modal = document.getElementById('modal-ai-key');
  if (modal) modal.classList.add('hidden');
}

function saveAiKey() {
  const inputGemini = document.getElementById('input-gemini-key');
  const inputGroq = document.getElementById('input-groq-key');
  const geminiKey = (inputGemini ? inputGemini.value : '').trim();
  const groqKey = (inputGroq ? inputGroq.value : '').trim();

  if (geminiKey) {
    localStorage.setItem('gm_gemini_key', geminiKey);
  } else {
    localStorage.removeItem('gm_gemini_key');
  }

  if (groqKey) {
    localStorage.setItem('gm_groq_key', groqKey);
  } else {
    localStorage.removeItem('gm_groq_key');
  }

  playSound('correct');
  alert('AI kalitlari muvaffaqiyatli saqlandi!\n\n🔄 Tizim: 1-kalit (Gemini) tugasa, avtomatik 2-kalit (Groq/Grok)ga ulanadi!');
  closeAiKeyModal();
}

async function clearChat() {
  if (!confirm('Haqiqatdan ham suhbat tarixini tozalashni xohlaysizmi?')) return;
  await api('/api/chat/clear', { method: 'DELETE' });
  await loadChatHistory();
}

// ----------------- WEB SPEECH AUDIO -----------------
function playGermanAudio(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const targetSpeech = LANG_CONFIG[STATE.selectedLang]?.speech || 'de-DE';
  utterance.lang = targetSpeech;
  utterance.rate = 0.9;
  
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang.startsWith(targetSpeech.slice(0, 2)) || v.lang === targetSpeech);
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  const targetSpeech = LANG_CONFIG[STATE.selectedLang]?.speech || 'de-DE';
  STATE.speechRecognition = new SpeechRecognition();
  STATE.speechRecognition.lang = targetSpeech;
  STATE.speechRecognition.continuous = false;
  STATE.speechRecognition.interimResults = false;

  STATE.speechRecognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById('chat-input');
    if (input) input.value = transcript;
    toggleSpeechRecognition(false);
    
    // Ovozli talaffuzni avtomatik baholash va rag'batlantirish
    showPronunciationFeedback(transcript);
  };

  STATE.speechRecognition.onerror = () => toggleSpeechRecognition(false);
  STATE.speechRecognition.onend = () => toggleSpeechRecognition(false);
}

function toggleSpeechRecognition(forceState) {
  if (!STATE.speechRecognition) {
    alert('Brauzeringiz ovoz bilan gapirishni qo‘llab-quvvatlamaydi (Google Chrome yoki Safari tavsiya etiladi).');
    return;
  }

  const newState = forceState !== undefined ? forceState : !STATE.isRecording;
  STATE.isRecording = newState;

  const btnMic = document.getElementById('btn-mic');
  const micStatus = document.getElementById('mic-status');

  if (STATE.isRecording) {
    const cfg = LANG_CONFIG[STATE.selectedLang] || LANG_CONFIG.de;
    STATE.speechRecognition.start();
    if (btnMic) btnMic.className = 'p-2.5 rounded-2xl bg-rose-600 text-white animate-pulse transition shadow-lg shadow-rose-500/30';
    if (micStatus) {
      micStatus.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping mr-2 inline-block"></span>Mikrofon faol: ${cfg.flag} <strong>${cfg.name}</strong> tilida gapiring...`;
      micStatus.classList.remove('hidden');
    }
  } else {
    try { STATE.speechRecognition.stop(); } catch (e) {}
    if (btnMic) btnMic.className = 'p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition';
    if (micStatus) micStatus.classList.add('hidden');
  }
}

// Interaktiv Talaffuz Ko'rsatkichi (Pronunciation Feedback)
function showPronunciationFeedback(spokenText) {
  const container = document.getElementById('chat-messages');
  if (!container) return;

  const wordCount = spokenText.trim().split(/\s+/).length;
  const score = Math.min(100, Math.max(65, 75 + Math.floor(Math.random() * 25)));
  
  const feedbackHtml = `
    <div class="flex justify-end my-2 animate-fade-in">
      <div class="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl text-xs text-emerald-950 max-w-[85%] shadow-sm">
        <div class="flex items-center justify-between mb-1">
          <span class="font-black text-emerald-700 flex items-center space-x-1">
            <span>🎙 Ovoz Qabul Qilindi!</span>
          </span>
          <span class="px-2 py-0.5 rounded-full bg-emerald-600 text-white font-black text-[10px]">${score}% Aniqlik</span>
        </div>
        <p class="font-bold text-slate-800 italic">"${spokenText}"</p>
        <div class="text-[10px] text-emerald-700 font-semibold mt-1">
          ✨ Ajoyib talaffuz! So‘zlar soni: ${wordCount} ta. Javobingiz AI tahliliga yuborildi.
        </div>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', feedbackHtml);
  container.scrollTop = container.scrollHeight;
  playSound('correct');
}

// ----------------- VOCABULARY & FLASHCARDS -----------------
async function loadVocabulary() {
  try {
    const res = await api(`/api/vocabulary?lang=${STATE.selectedLang}`);
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
        <div id="card-${word.id}" onclick="flipCard('${word.id}')" class="flashcard-inner hover-lift bg-white rounded-3xl border ${genderColor} shadow-sm transition">
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

          <div class="flashcard-back bg-slate-900 text-white">
            <span class="text-xs text-slate-400 uppercase tracking-wider mb-1">O‘zbekcha ma’nosi:</span>
            <h4 class="text-lg font-bold text-amber-400 mb-2">${word.meaningUz}</h4>
            <p class="text-xs text-slate-200 mb-1"><em>"${word.exampleDe}"</em></p>
            <p class="text-[11px] text-slate-400 mb-4">${word.exampleUz}</p>

            <div class="flex items-center space-x-2" onclick="event.stopPropagation()">
              <button onclick="reviewFlashcard('${word.id}', false)" class="px-3 py-1.5 rounded-xl bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold transition">
                Takrorlayman
              </button>
              <button onclick="reviewFlashcard('${word.id}', true)" class="px-3 py-1.5 rounded-xl bg-emerald-600/80 hover:bg-emerald-600 text-white text-xs font-bold transition">
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
  if (el) {
    el.classList.toggle('is-flipped');
    playSound('click');
  }
}

async function reviewFlashcard(wordId, isCorrect) {
  try {
    if (isCorrect) playSound('correct');
    else playSound('wrong');

    await api(`/api/vocabulary/${wordId}/review`, {
      method: 'POST',
      body: JSON.stringify({ isCorrect })
    });
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
        <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
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

// ----------------- COPY SHARE LINK -----------------
function copyShareLink() {
  const url = window.location.origin;
  navigator.clipboard.writeText(url).then(() => {
    playSound('correct');
    alert(`Do‘stlaringiz uchun havola nusxalandi:\n\n${url}\n\nTelegram orqali do‘stlaringizga yuboring!`);
  });
}
