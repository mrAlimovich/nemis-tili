// AI Engine for German Master AI: Conversation, roleplay, error analysis, and feedback

const scenarios = {
  free: {
    name: 'Erkin Suhbat (Freies Gespräch)',
    description: 'Har qanday mavzuda do‘stona va o‘rgatuvchi muloqot',
    initialDe: 'Hallo! Wie geht es dir heute und worüber möchtest du sprechen?',
    initialUz: 'Salom! Bugun ahvoling qanday va qaysi mavzuda suhbatlashmoqchisan?'
  },
  supermarket: {
    name: '🛒 Im Supermarkt (Supermarketda)',
    description: 'Xarid qilish, narx so‘rash va kassada to‘lov qilish',
    initialDe: 'Guten Tag! Willkommen in unserem Supermarkt. Kann ich Ihnen helfen?',
    initialUz: 'Xayrli kun! Supermarketimizga xush kelibsiz. Sizga yordam bera olamanmi?'
  },
  restaurant: {
    name: '☕ Im Restaurant / Café (Restoranda)',
    description: 'Menyu so‘rash, ovqat buyurtma qilish va hisob-kitob',
    initialDe: 'Guten Abend! Haben Sie schon gewählt oder möchten Sie die Speisekarte sehen?',
    initialUz: 'Xayrli kech! Taom tanladingizmi yoki menyuni ko‘rmoqchimisiz?'
  },
  doctor: {
    name: '🏥 Beim Arzt (Shifokor qabulida)',
    description: 'Shikoyatlarni aytish, retsept va maslahat olish',
    initialDe: 'Guten Tag! Nehmen Sie bitte Platz. Was fehlt Ihnen denn? Wo tut es weh?',
    initialUz: 'Xayrli kun! Marhamat, o‘tiring. Sizni nima bezovta qilyapti? Qayeringiz og‘riyapti?'
  },
  station: {
    name: '🚆 Am Bahnhof (Vokzalda chipta olish)',
    description: 'Poyezd jadvali, platforma va chipta sotib olish',
    initialDe: 'Hallo! Wohin möchten Sie fahren und wann soll die Reise beginnen?',
    initialUz: 'Salom! Qayerga bormoqchisiz va safaringiz qachon boshlanishi kerak?'
  },
  interview: {
    name: '💼 Vorstellungsgespräch (Ish suhbati)',
    description: 'O‘zingiz, tajribangiz va motivatsiyangiz haqida gapirish',
    initialDe: 'Guten Tag! Schön, dass Sie da sind. Erzählen Sie uns bitte kurz über sich.',
    initialUz: 'Xayrli kun! Kelganingizdan xursandmiz. O‘zingiz haqingizda qisqacha so‘zlab bersangiz.'
  }
};

// Grammar & Vocabulary Rule Analyzer
function analyzeUserInput(text) {
  const corrections = [];
  const lower = text.trim().toLowerCase();

  // Common Beginner Mistakes
  // 1. "Ich bin gehen" or "Ich bin spielen"
  if (/ich\s+bin\s+(gehen|spielen|lernen|arbeiten|machen|wohnen)/i.test(text)) {
    const match = text.match(/ich\s+bin\s+([a-zA-Zäöüß]+)/i);
    const verb = match ? match[1].toLowerCase() : 'gehen';
    const stem = verb.replace(/en$/, '');
    corrections.push({
      category: 'GRAMMAR',
      original: match[0],
      corrected: `Ich ${stem}e`,
      reason: 'Nemis tilida inglizchadagi "I am going" kabi yordamchi "sein" (bin) ishlatilmaydi. Oddiy hozirgi zamonda to‘g‘ridan-to‘g‘ri fe’l tuslanadi: "Ich gehe".'
    });
  }

  // 2. Akkusativ masculine mistake: "Ich habe ein Tisch/Stuhl/Bruder/Kaffee/Apfel/Computer"
  const mascWords = ['tisch', 'stuhl', 'bruder', 'kaffee', 'apfel', 'computer', 'hund', 'wagen'];
  for (const m of mascWords) {
    const reg = new RegExp(`(habe|brauche|suche|sehe|kaufe)\\s+ein\\s+${m}`, 'i');
    if (reg.test(text)) {
      corrections.push({
        category: 'ARTICLE / CASE',
        original: `ein ${m}`,
        corrected: `einen ${m}`,
        reason: `"${m}" so‘zi erkak jinsida (der). Akkusativda (tushum kelishigida) "ein" emas, "einen" bo‘ladi!`
      });
    }
  }

  // 3. Greeting typos
  if (/gute\s+tag/i.test(text)) {
    corrections.push({
      category: 'SPELLING / GREETING',
      original: 'gute Tag',
      corrected: 'Guten Tag',
      reason: '"Tag" erkak jinsida (der Tag), shuning uchun Akkusativ salomlashishda "Guten Tag" bo‘ladi.'
    });
  }

  // 4. "Wie geht es du?"
  if (/wie\s+geht\s+es\s+du/i.test(text)) {
    corrections.push({
      category: 'CASE',
      original: 'Wie geht es du?',
      corrected: 'Wie geht es dir?',
      reason: '"Wie geht es..." iborasi Dativ (jo‘nalish) kelishigini talab qiladi: "du" o‘rniga "dir" ishlatiladi.'
    });
  }

  // 5. English words leak: "I am", "I have", "my name is"
  if (/\b(i am|my name|i have|hello)\b/i.test(text)) {
    corrections.push({
      category: 'VOCABULARY',
      original: 'Inglizcha so‘zlar',
      corrected: 'Nemischa ifodalar (Ich bin, Mein Name, Ich habe, Hallo)',
      reason: 'Nemischa so‘zlarni qo‘llashga harakat qiling.'
    });
  }

  return corrections;
}

// Generate dynamic AI Tutor response
function generateAiResponse(userMessage, scenarioKey, userLevel) {
  const corrections = analyzeUserInput(userMessage);
  const text = userMessage.trim().toLowerCase();

  let replyDe = '';
  let replyUz = '';
  let tip = '';

  // Check if user is asking for explanation
  if (/tushunmadim|yana tushuntir|oddiyroq|nima uchun|farqi nima|misol ber/i.test(text)) {
    return {
      replyDe: 'Kein Problem! Ich erkläre es dir ganz einfach.',
      replyUz: 'Hechqisi yo‘q! Keling, sodda qilib tushuntiraman: har bir nemischa gapda fe’l (harakat) markazda turadi. Qaysi qismida ikkilanyapsiz?',
      corrections: [],
      tip: 'Istalgan vaqtda so‘rang, birga tahlil qilamiz!'
    };
  }

  // Scenario specific replies
  if (scenarioKey === 'supermarket') {
    if (text.includes('apfel') || text.includes('brot') || text.includes('wasser') || text.includes('milch') || text.includes('kaffee') || text.includes('kaufen') || text.includes('suche')) {
      replyDe: replyDe = 'Sehr gerne! Die Lebensmittel finden Sie im zweiten Gang rechts. Brauchen Sie auch eine Tüte?';
      replyUz = 'Jon deb! Oziq-ovqatlarni o‘ng tomondagi ikkinchi qatordan topasiz. Paket ham kerakmi?';
      tip = '"eine Tüte" (paket) — ayol jinsi (die Tüte).';
    } else if (text.includes('kostet') || text.includes('preis') || text.includes('euro') || text.includes('bezahlen')) {
      replyDe = 'Das kostet zusammen 4 Euro und 50 Cent. Möchten Sie bar oder mit Karte bezahlen?';
      replyUz = 'Jami 4 yevro 50 sent bo‘ldi. Naqd to‘laysizmi yoki karta bilanmi?';
      tip = '"bar" — naqd pul, "mit Karte" — karta orqali to‘lov.';
    } else {
      replyDe = 'Guten Tag! Was möchten Sie heute einkaufen?';
      replyUz = 'Xayrli kun! Bugun nimalar xarid qilmoqchisiz?';
      tip = 'Masalan: "Ich brauche Äpfel und Brot." (Menga olma va non kerak) deb javob bering.';
    }
  } else if (scenarioKey === 'restaurant') {
    if (text.includes('karte') || text.includes('menü') || text.includes('essen')) {
      replyDe = 'Hier ist unsere Speisekarte. Als Tagesgericht empfehle ich die Gemüsesuppe. Was möchten Sie trinken?';
      replyUz = 'Mana bizning taomnoma. Kun taomi sifatida sabzavotli sho‘rvani tavsiya qilaman. Ichishga nima buyurtma qilasiz?';
      tip = '"Ich möchte ein Wasser / einen Tee, bitte." deb ayting.';
    } else if (text.includes('wasser') || text.includes('kaffee') || text.includes('tee') || text.includes('suppe') || text.includes('salat') || text.includes('möchte')) {
      replyDe = 'Ausgezeichnete Wahl! Ich bringe es Ihnen sofort. Möchten Sie später auch einen Nachtisch?';
      replyUz = 'Ajoyib tanlov! Hozir olib kelaman. Keyinroq shirinlik (desert) ham xohlaysizmi?';
      tip = '"Nachtisch" — desert / shirinlik.';
    } else if (text.includes('zahlen') || text.includes('rechnung') || text.includes('kostet')) {
      replyDe = 'Natürlich! Das macht zusammen 18 Euro. Hat es Ihnen geschmeckt?';
      replyUz = 'Albatta! Jami 18 yevro bo‘ldi. Taomlar sizga ma’qul bo‘ldimi?';
      tip = '"Hat es Ihnen geschmeckt?" — Taom yoqdimi? deb so‘rash.';
    } else {
      replyDe = 'Guten Abend! Möchten Sie schon etwas trinken oder direkt bestellen?';
      replyUz = 'Xayrli kech! Biror narsa ichishni xohlaysizmi yoki birdan buyurtma berasizmi?';
      tip = 'Masalan: "Ich möchte einen Kaffee, bitte." (Bitta qahva, iltimos).';
    }
  } else if (scenarioKey === 'doctor') {
    if (text.includes('schmerz') || text.includes('kopf') || text.includes('bauch') || text.includes('fieber') || text.includes('krank') || text.includes('weh')) {
      replyDe = 'Das tut mir leid zu hören. Seit wann haben Sie diese Beschwerden und haben Sie auch Fieber?';
      replyUz = 'Buni eshitganimdan afsusdaman. Bu belgilar qachondan beri bor va isitmangiz bormi?';
      tip = '"Seit zwei Tagen" (Ikki kundan beri) yoki "Ich habe Fieber" (Isitmalayapman).';
    } else {
      replyDe = 'Guten Tag! Nehmen Sie bitte Platz. Was fehlt Ihnen denn?';
      replyUz = 'Xayrli kun! O‘tiring, marhamat. Sizni nima bezovta qilyapti?';
      tip = 'Masalan: "Ich habe Kopfschmerzen." (Boshim og‘riyapti) deb yozing.';
    }
  } else if (scenarioKey === 'station') {
    if (text.includes('berlin') || text.includes('frankfurt') || text.includes('münchen') || text.includes('hamburg') || text.includes('fahren') || text.includes('ticket') || text.includes('fahrkarte')) {
      replyDe = 'Sehr gern! Der nächste Zug fährt um 14:15 Uhr von Gleis 4 ab. Möchten Sie einfach oder hin und zurück?';
      replyUz = 'Jon deb! Keyingi poyezd soat 14:15 da 4-yo‘ldan jo‘naydi. Bir tomongami yoki borish-qaytish chiptasimi?';
      tip = '"Einfach" — bir tomonga chipta, "Hin und zurück" — borish-qaytish.';
    } else {
      replyDe = 'Hallo! Wohin soll Ihre Reise gehen?';
      replyUz = 'Salom! Qaysi shaharga bormoqchisiz?';
      tip = 'Masalan: "Ich möchte nach Berlin fahren." (Men Berlinga bormoqchiman).';
    }
  } else {
    // Free conversation & default smart tutor
    if (text.includes('hallo') || text.includes('guten tag') || text.includes('morgen')) {
      replyDe = 'Hallo! Schön, dass du da bist. Wie heißt du und wie geht es dir heute?';
      replyUz = 'Salom! Darsga xush kelibsan. Isming nima va bugun kayfiyating qanday?';
      tip = 'Javob berish: "Ich heiße [ismingiz] und mir geht es gut."';
    } else if (text.includes('ich heiße') || text.includes('mein name') || text.includes('ich bin')) {
      replyDe = 'Sehr erfreut! Ich bin dein persönlicher Deutsch-Coach. Was ist dein Ziel: Möchtest du in Deutschland studieren oder arbeiten?';
      replyUz = 'Tanishganimdan juda xursandman! Men sening shaxsiy nemis tili murabbiyingman. Maqsading nima: Germaniyada o‘qishmi yoki ishlashmi?';
      tip = '"studieren" — universitetda o‘qish, "arbeiten" — ishlash.';
    } else if (text.includes('deutschland') || text.includes('studieren') || text.includes('arbeiten') || text.includes('lernen')) {
      replyDe = 'Das ist ein fantastisches Ziel! Mit täglicher Übung wirst du sehr schnell Fortschritte machen. Was hast du heute schon gelernt?';
      replyUz = 'Bu ajoyib maqsad! Har kuni shug‘ullanib, juda tez natijaga erishasan. Bugun nimani o‘rganib ulgurding?';
      tip = '"Ich habe neue Wörter gelernt." (Yangi so‘zlar o‘rgandim).';
    } else if (text.includes('danke')) {
      replyDe = 'Sehr gerne! Gibt es noch eine Frage, die wir zusammen üben können?';
      replyUz = 'Arzimaydi! Yana biror savol bormi, birga mashq qilamizmi?';
      tip = '"Gibt es noch..." — Yana biror narsa bormi?';
    } else {
      replyDe = 'Sehr gut formuliert! Erzähle mir mehr darüber. Was machst du heute noch?';
      replyUz = 'Juda yaxshi ifodaladingiz! Bu haqida yana ko‘proq so‘zlab bering. Bugun yana nimalar qilasiz?';
      tip = 'Gap tuzayotganda fe’lni 2-o‘rinda saqlashni unutmang!';
    }
  }

  return {
    replyDe,
    replyUz,
    corrections,
    tip
  };
}

module.exports = {
  scenarios,
  analyzeUserInput,
  generateAiResponse
};
