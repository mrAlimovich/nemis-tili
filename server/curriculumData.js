// Multi-language Curriculum Data (German, English, Russian, Korean)
// Comprehensive CEFR-aligned lessons from A1 to B1
module.exports = {
  // Supported languages config
  languages: [
    { code: 'de', name: 'Nemis tili', flag: '🇩🇪', speechLang: 'de-DE', nativeName: 'Deutsch' },
    { code: 'en', name: 'Ingliz tili', flag: '🇬🇧', speechLang: 'en-US', nativeName: 'English' },
    { code: 'ru', name: 'Rus tili', flag: '🇷🇺', speechLang: 'ru-RU', nativeName: 'Русский' },
    { code: 'ko', name: 'Koreys tili', flag: '🇰🇷', speechLang: 'ko-KR', nativeName: '한국어' }
  ],

  // ------------------------------------------------------------------
  // 🇩🇪 GERMAN (DEUTSCH) LESSONS (Goethe / telc Standarti)
  // ------------------------------------------------------------------
  de: [
    {
      id: 'de_lesson_1',
      lang: 'de',
      level: 'A1',
      number: 1,
      title: 'Talaffuzning 3 siri va Ilk salomlashish',
      goal: 'Nemischa o‘qish qoidalarini anglash, begona va do‘stona salomlashish/xayrlashishni o‘rganish.',
      theory: {
        introUz: 'Nemis tili o‘qilishi bo‘yicha o‘zbek tiliga juda yaqin. 4 ta muhim qoidani bilsangiz, bexato o‘qiysiz:',
        rules: [
          { pattern: 'EI', pronunciation: '«AY»', exampleDe: 'mein [mayn], nein [nayn]', exampleUz: 'mening, yo‘q' },
          { pattern: 'IE', pronunciation: '«cho‘ziq II»', exampleDe: 'sie [zii], wie [vii]', exampleUz: 'u/ular, qanday' },
          { pattern: 'S + unli', pronunciation: '«Z»', exampleDe: 'Sie [zii], Super [zuper]', exampleUz: 'Siz, ajoyib' },
          { pattern: 'W harfi', pronunciation: '«V»', exampleDe: 'Wasser [vasser]', exampleUz: 'suv' }
        ],
        table: [
          { de: 'Hallo', uz: 'Salom (do‘stona)' },
          { de: 'Guten Tag', uz: 'Xayrli kun (rasmiy)' },
          { de: 'Danke', uz: 'Rahmat' },
          { de: 'Bitte', uz: 'Iltimos / Arzimaydi' },
          { de: 'Tschüss', uz: 'Xayr (do‘stona)' },
          { de: 'Auf Wiedersehen', uz: 'Ko‘rishguncha xayr (rasmiy)' }
        ]
      },
      exercises: [
        {
          id: 'de_ex1_1',
          type: 'multiple-choice',
          question: 'Do‘konda rasmiy tarzda "Xayrli kun" demoqchisiz. Qaysi biri to‘g‘ri?',
          options: ['Hallo', 'Guten Tag', 'Gute Nacht', 'Tschüss'],
          correctIndex: 1,
          explanation: '"Guten Tag" — eng universal rasmiy salomlashish ifodasidir.'
        },
        {
          id: 'de_ex1_2',
          type: 'multiple-choice',
          question: '"mein" (mening) so‘zi qanday o‘qiladi?',
          options: ['meyn', 'mayn', 'miin', 'men'],
          correctIndex: 1,
          explanation: 'Nemis tilida "EI" harf birikmasi doimo «AY» deb talaffuz qilinadi.'
        },
        {
          id: 'de_ex1_3',
          type: 'fill-blank',
          question: 'Do‘stingiz bilan xayrlashayotganda: "______, bis morgen!"',
          placeholder: 'So‘zni kiriting...',
          correctAnswer: 'Tschüss',
          hint: 'Chyus deb talaffuz qilinadi'
        }
      ],
      speakingPrompt: {
        textDe: 'Hallo, Guten Tag! Danke schön!',
        textUz: 'Salom, Xayrli kun! Katta rahmat!',
        tip: 'Tugmani bosing va ushbu gapni baland ovozda talaffuz qiling.'
      },
      kulturtip: {
        title: '🇩🇪 Pünktlichkeit (Vaqtga qat’iy rioya)',
        text: 'Germaniyada vaqtga qat’iy rioya qilish — eng oliy hurmat belgisi. Uchrashuvga 5-10 daqiqa oldin borish odat tusiga kirgan.'
      },
      listening: {
        title: '🎧 Tinglab tushunish (Hörverstehen)',
        audioText: 'Hallo! Ich bin Thomas. Guten Tag!',
        question: 'Thomas qanday salomlashdi?',
        options: ['Gute Nacht dedi', 'Guten Tag va Hallo dedi', 'Tschüss dedi'],
        correctIndex: 1
      }
    },
    {
      id: 'de_lesson_2',
      lang: 'de',
      level: 'A1',
      number: 2,
      title: 'O‘zini tanishtirish va "sein" (bo‘lmoq) fe’li',
      goal: 'Ism, mamlakat va yashash joyini aytish. "sein" (to be) fe’lining tuslanishini o‘rganish.',
      theory: {
        introUz: 'O‘zingizni tanishtirish uchun 3 ta asosiy qolipdan foydalanasiz:',
        rules: [
          { pattern: 'Ich bin ...', pronunciation: 'Men [falonchiman]', exampleDe: 'Ich bin Jasur.', exampleUz: 'Men Jasurman.' },
          { pattern: 'Ich heiße ...', pronunciation: 'Mening ismim ...', exampleDe: 'Ich heiße Jasur.', exampleUz: 'Mening ismim Jasur.' },
          { pattern: 'Ich komme aus ...', pronunciation: 'Men ...dan kelganman', exampleDe: 'Ich komme aus Usbekistan.', exampleUz: 'Men O‘zbekistondanman.' },
          { pattern: 'Ich wohne in ...', pronunciation: 'Men ...da yashayman', exampleDe: 'Ich wohne in Taschkent.', exampleUz: 'Men Toshkentda yashayman.' }
        ],
        table: [
          { de: 'ich bin', uz: 'men ...man' },
          { de: 'du bist', uz: 'sen ...san' },
          { de: 'er/sie/es ist', uz: 'u ...dir' },
          { de: 'wir sind', uz: 'biz ...miz' },
          { de: 'ihr seid', uz: 'sizlar ...siz' },
          { de: 'Sie/sie sind', uz: 'Siz/ular ...lar' }
        ]
      },
      exercises: [
        {
          id: 'de_ex2_1',
          type: 'multiple-choice',
          question: '"Men Toshkentda yashayman" qaysi qatorda to‘g‘ri yozilgan?',
          options: ['Ich komme in Taschkent', 'Ich wohne in Taschkent', 'Ich bin Taschkent', 'Ich heiße Taschkent'],
          correctIndex: 1,
          explanation: '"wohnen in" — biror joyda doimiy yashashni bildiradi.'
        },
        {
          id: 'de_ex2_2',
          type: 'fill-blank',
          question: 'Du ______ sehr freundlich. ("sein" fe’lining to‘g‘ri shakli)',
          placeholder: 'fe’lni kiriting...',
          correctAnswer: 'bist',
          hint: 'du bilan bist'
        }
      ],
      speakingPrompt: {
        textDe: 'Ich komme aus Usbekistan und ich lerne Deutsch.',
        textUz: 'Men O‘zbekistondanman va men nemis tilini o‘rganayapman.',
        tip: 'Dona-dona va ishonch bilan ayting.'
      },
      kulturtip: {
        title: '🇩🇪 Siezen vs. Duzen',
        text: 'Kattalarga va notanishlarga "Sie" (Siz), tengdosh va do‘stlarga "Du" (Sen) deb murojaat qilinadi.'
      },
      listening: {
        title: '🎧 Tinglab tushunish',
        audioText: 'Guten Tag, mein Name ist Anna Weber. Ich wohne in Berlin.',
        question: 'Anna qayerda yashaydi?',
        options: ['Toshkentda', 'Berlinda', 'Münchenda'],
        correctIndex: 1
      }
    },
    {
      id: 'de_lesson_3',
      lang: 'de',
      level: 'A1',
      number: 3,
      title: 'W-Fragen: So‘roq so‘zlar va Muloqot',
      goal: 'Nemis tilida savol berish: Wer, Was, Wo, Woher, Wohin, Wie, Warum.',
      theory: {
        introUz: 'Nemis tilida so‘roq gaplarda so‘roq so‘z 1-o‘rinda, fe’l esa DOIMO 2-o‘rinda turadi:',
        rules: [
          { pattern: 'Woher ...?', pronunciation: 'Qayerdan ...?', exampleDe: 'Woher kommst du?', exampleUz: 'Qayerdan kelyapsan?' },
          { pattern: 'Wo ...?', pronunciation: 'Qayerda ...?', exampleDe: 'Wo wohnst du?', exampleUz: 'Qayerda yashaysan?' },
          { pattern: 'Was ...?', pronunciation: 'Nima ...?', exampleDe: 'Was machst du?', exampleUz: 'Nima qilyapsan?' },
          { pattern: 'Wer ...?', pronunciation: 'Kim ...?', exampleDe: 'Wer ist das?', exampleUz: 'Bu kim?' },
          { pattern: 'Wie ...?', pronunciation: 'Qanday ...?', exampleDe: 'Wie heißt du?', exampleUz: 'Isming nima?' }
        ],
        table: [
          { de: 'Woher kommen Sie?', uz: 'Qayerdansiz? (rasmiy)' },
          { de: 'Wo ist der Bahnhof?', uz: 'Vokzal qayerda?' },
          { de: 'Was möchten Sie trinken?', uz: 'Nima ichishni xohlaysiz?' },
          { de: 'Wie viel kostet das?', uz: 'Bu qancha turadi?' }
        ]
      },
      exercises: [
        {
          id: 'de_ex3_1',
          type: 'multiple-choice',
          question: '"Qayerda yashaysan?" nemischa qanday aytiladi?',
          options: ['Wo wohnst du?', 'Woher kommst du?', 'Was machst du?', 'Wer bist du?'],
          correctIndex: 0,
          explanation: '"Wo" — qayerda (yashash joyini so‘rashda).'
        },
        {
          id: 'de_ex3_2',
          type: 'fill-blank',
          question: '______ ist das? — Das ist mein Freund Jasur. (Bu kim?)',
          placeholder: 'So‘roq so‘zini yozing...',
          correctAnswer: 'Wer',
          hint: 'Wer (kim)'
        }
      ],
      speakingPrompt: {
        textDe: 'Entschuldigung, wo ist der Supermarkt?',
        textUz: 'Kechirasiz, supermarket qayerda?',
        tip: 'Entschuldigung so‘zini ravon talaffuz qiling.'
      },
      kulturtip: {
        title: '🇩🇪 Anrede (Murojaat madaniyati)',
        text: 'Nemislar rasmiy uchrashuvda "Herr" (Janob) yoki "Frau" (Xonim) so‘zidan keyin familiyani aytishadi: "Guten Tag, Herr Schmidt".'
      },
      listening: {
        title: '🎧 Tinglab tushunish',
        audioText: 'Hallo! Woher kommst du? — Ich komme aus Usbekistan.',
        question: 'Suhbatdosh qayerdan kelgan?',
        options: ['Germaniyadan', 'O‘zbekistondan', 'Avstriyadan'],
        correctIndex: 1
      }
    },
    {
      id: 'de_lesson_4',
      lang: 'de',
      level: 'A1',
      number: 4,
      title: 'Artikllar (der, die, das) va "haben" (bor bo‘lmoq)',
      goal: 'Nemis tili 3 ta jinsi (maskulin, feminin, neutrum) va narsalarga egalik qilishni ifodalash.',
      theory: {
        introUz: 'Har bir nemischa ot katta harf bilan yoziladi va o‘z artikliga ega:',
        rules: [
          { pattern: 'der (Maskulin)', pronunciation: 'Erkak jinsi', exampleDe: 'der Tisch (stol), der Kaffee (kofe)', exampleUz: 'stol, kofe' },
          { pattern: 'die (Feminin)', pronunciation: 'Ayol jinsi', exampleDe: 'die Lampe (chiroq), die Schule (maktab)', exampleUz: 'chiroq, maktab' },
          { pattern: 'das (Neutrum)', pronunciation: 'O‘rta jins', exampleDe: 'das Haus (uy), das Buch (kitob)', exampleUz: 'uy, kitob' },
          { pattern: 'haben tuslanishi', pronunciation: 'ega bo‘lmoq', exampleDe: 'ich habe (menda bor), du hast, er hat, wir haben', exampleUz: 'menda bor, senda bor...' }
        ],
        table: [
          { de: 'Ich habe ein Buch.', uz: 'Menda kitob bor.' },
          { de: 'Hast du Zeit?', uz: 'Vaqting bormi?' },
          { de: 'Wir haben eine Frage.', uz: 'Bizda savol bor.' },
          { de: 'Er hat ein Auto.', uz: 'Unda mashina bor.' }
        ]
      },
      exercises: [
        {
          id: 'de_ex4_1',
          type: 'multiple-choice',
          question: '"Kitob" (Buch) so‘zining artikli qaysi?',
          options: ['der', 'die', 'das', 'den'],
          correctIndex: 2,
          explanation: '"das Buch" — o‘rta jins (neutrum).'
        },
        {
          id: 'de_ex4_2',
          type: 'fill-blank',
          question: 'Hast du Zeit? — Ja, ich ______ Zeit. (Ha, menda vaqt bor)',
          placeholder: 'fe’lni kiriting...',
          correctAnswer: 'habe',
          hint: 'ich bilan habe'
        }
      ],
      speakingPrompt: {
        textDe: 'Ich habe einen Tisch und eine Lampe in meinem Zimmer.',
        textUz: 'Mening xonamda stol va chiroq bor.',
        tip: 'Zimmer so‘zida "Z" «ts» deb o‘qiladi.'
      },
      kulturtip: {
        title: '🇩🇪 Qo‘shma so‘zlar sehri',
        text: 'Nemis tilida bir nechta so‘z qo‘shilib yangi so‘z yasaladi: das Haus + die Tür = die Haustür (uy eshigi). Oxirgi so‘zning artikli asosiy bo‘ladi.'
      },
      listening: {
        title: '🎧 Tinglab tushunish',
        audioText: 'Ich habe ein neues Auto. Das Auto ist sehr schnell.',
        question: 'Unda nima bor?',
        options: ['Yangi velosiped', 'Yangi mashina', 'Yangi kitob'],
        correctIndex: 1
      }
    },
    {
      id: 'de_lesson_5',
      lang: 'de',
      level: 'A1',
      number: 5,
      title: 'Do‘konda xarid, Raqamlar va Pul (Euro)',
      goal: 'Raqamlar (1-100), narx so‘rash va kafeda buyurtma berish.',
      theory: {
        introUz: 'Xarid qilishda eng ko‘p ishlatiladigan iboralar va sonlar:',
        rules: [
          { pattern: 'Sonlar 20 dan keyin', pronunciation: 'birlik oldin o‘qiladi', exampleDe: 'einundzwanzig (21) = bir va yigirma', exampleUz: '21, 35, 48...' },
          { pattern: 'Wie viel kostet ...?', pronunciation: 'Qancha turadi?', exampleDe: 'Wie viel kostet das Brot?', exampleUz: 'Non qancha turadi?' },
          { pattern: 'Ich möchte ...', pronunciation: 'Men xohlardim (xushmuomala)', exampleDe: 'Ich möchte einen Kaffee, bitte.', exampleUz: 'Men bir chashka kofe xohlardim.' }
        ],
        table: [
          { de: 'eins, zwei, drei, vier, fünf', uz: '1, 2, 3, 4, 5' },
          { de: 'zehn, zwanzig, dreißig, hundert', uz: '10, 20, 30, 100' },
          { de: 'Das macht 5 Euro, bitte.', uz: 'Jami 5 yevro bo‘ldi, marhamat.' },
          { de: 'Zusammen oder getrennt?', uz: 'Birgami yoki alohidami? (to‘lov)' }
        ]
      },
      exercises: [
        {
          id: 'de_ex5_1',
          type: 'multiple-choice',
          question: '"Kafeda hisob-kitob qilishda "Birgami yoki alohida to‘laysizmi?" nemischa:',
          options: ['Zusammen oder getrennt?', 'Wie viel kostet das?', 'Was möchten Sie?', 'Auf Wiedersehen'],
          correctIndex: 0,
          explanation: '"Zusammen oder getrennt?" — Germaniya restoranlarida har doim beriladigan savol.'
        },
        {
          id: 'de_ex5_2',
          type: 'fill-blank',
          question: 'Ich ______ bitte ein Glas Wasser. (xohlayman)',
          placeholder: 'möchte...',
          correctAnswer: 'möchte',
          hint: 'möchte'
        }
      ],
      speakingPrompt: {
        textDe: 'Einen Kaffee und ein Stück Kuchen, bitte!',
        textUz: 'Bir chashka kofe va bir bo‘lak pirojnoe, iltimos!',
        tip: 'Stück so‘zidagi ü ni labni cho‘chaytirib ayting.'
      },
      kulturtip: {
        title: '🇩🇪 Trinkgeld (Choychaqa odobi)',
        text: 'Germaniyada xizmat ko‘rsatish uchun odatda hisobning 5-10 foizi miqdorida choychaqa (Trinkgeld) qoldiriladi.'
      },
      listening: {
        title: '🎧 Tinglab tushunish',
        audioText: 'Das macht zusammen zehn Euro und fünfzig Cent.',
        question: 'Jami to‘lov qancha bo‘ldi?',
        options: ['5 yevro', '10 yevro 50 sent', '20 yevro'],
        correctIndex: 1
      }
    },
    {
      id: 'de_lesson_6',
      lang: 'de',
      level: 'A2',
      number: 6,
      title: 'O‘tgan zamon (Perfekt) va Partizip II',
      goal: 'Og‘zaki nutqda o‘tgan voqealarni aytish (haben/sein + ge-...-t).',
      theory: {
        introUz: 'Nemis tilida og‘zaki o‘tgan zamon "haben" yoki "sein" yordamchi fe’li va asosiy fe’lning Partizip II shaklidan yasaladi:',
        rules: [
          { pattern: 'Muntazam fe’llar', pronunciation: 'ge + asos + t', exampleDe: 'lernen → gelernt, machen → gemacht', exampleUz: 'o‘rgangan, qilgan' },
          { pattern: 'Harakat fe’llari', pronunciation: 'sein bilan ishlatiladi', exampleDe: 'Ich bin nach Berlin gefahren.', exampleUz: 'Men Berlinga borganman.' },
          { pattern: 'Tinch holatdagi fe’llar', pronunciation: 'haben bilan ishlatiladi', exampleDe: 'Ich habe Deutsch gelernt.', exampleUz: 'Men nemis tilini o‘rgandim.' }
        ],
        table: [
          { de: 'Was hast du gestern gemacht?', uz: 'Kecha nima qilding?' },
          { de: 'Ich habe Fußball gespielt.', uz: 'Men futbol o‘ynadim.' },
          { de: 'Ich bin zu Hause geblieben.', uz: 'Men uyda qoldim.' },
          { de: 'Wir haben gut geschlafen.', uz: 'Biz yaxshi uxladik.' }
        ]
      },
      exercises: [
        {
          id: 'de_ex6_1',
          type: 'multiple-choice',
          question: '"Gestern ______ ich meine Freunde getroffen (Kecha do‘stlarim bilan ko‘rishdim).":',
          options: ['habe', 'bin', 'hat', 'ist'],
          correctIndex: 0,
          explanation: '"treffen" (uchrashmoq) fe’li haben bilan o‘tgan zamon yasaydi.'
        },
        {
          id: 'de_ex6_2',
          type: 'fill-blank',
          question: 'Ich bin gestern nach Deutschland ______ (gefahren).',
          placeholder: 'Partizip II shakli...',
          correctAnswer: 'gefahren',
          hint: 'gefahren'
        }
      ],
      speakingPrompt: {
        textDe: 'Gestern habe ich viel Deutsch gelernt und geübt.',
        textUz: 'Kecha men ko‘p nemis tili o‘rgandim va mashq qildim.',
        tip: 'Gelernt und geübt [gelernt unt ge-yupt] deb toza talaffuz qiling.'
      },
      kulturtip: {
        title: '🇩🇪 Feierabend (Ishdan keyingi hordiq)',
        text: 'Nemis madaniyatida ish soati tugagach, ish haqida o‘ylamaslik (Feierabend) va oila davrasida dam olish muqaddas hisoblanadi.'
      },
      listening: {
        title: '🎧 Tinglab tushunish',
        audioText: 'Am Wochenende bin ich ins Kino gegangen und habe einen Film gesehen.',
        question: 'U dam olish kunida nima qildi?',
        options: ['Ishga bordi', 'Kinoga borib film ko‘rdi', 'Uy tozaladi'],
        correctIndex: 1
      }
    },
    {
      id: 'de_lesson_7',
      lang: 'de',
      level: 'A2',
      number: 7,
      title: 'Dativ kelishigi va Shaharda yo‘l so‘rash',
      goal: 'Dativ (kimga/qayerda) kelishigi va harakat predloglari (nach, zu, mit, von).',
      theory: {
        introUz: 'Dativ kelishigida artikllar quyidagicha o‘zgaradi: der → dem, das → dem, die → der, Plural → den (+n):',
        rules: [
          { pattern: 'mit (bilan)', pronunciation: 'Doimo Dativ talab qiladi', exampleDe: 'mit dem Bus (avtobus bilan), mit dem Zug', exampleUz: 'avtobusda, poezdda' },
          { pattern: 'zu (tomon / ga)', pronunciation: 'Doimo Dativ', exampleDe: 'zum Bahnhof (vokzalga), zur Schule', exampleUz: 'vokzalga, maktabga' },
          { pattern: 'nach (shahar / mamlakatga)', pronunciation: 'artiklsiz joylar', exampleDe: 'nach Deutschland, nach Taschkent', exampleUz: 'Germaniyaga, Toshkentga' }
        ],
        table: [
          { de: 'Ich fahre mit dem Auto.', uz: 'Men mashinada ketyapman.' },
          { de: 'Wie komme ich zum Bahnhof?', uz: 'Vokzalga qanday borsam bo‘ladi?' },
          { de: 'Gehen Sie geradeaus, dann links.', uz: 'To‘g‘riga boring, keyin chapga.' },
          { de: 'Ich helfe der Mutter.', uz: 'Men onamga yordam beryapman.' }
        ]
      },
      exercises: [
        {
          id: 'de_ex7_1',
          type: 'multiple-choice',
          question: '"Ich fahre mit ______ Bus (der Bus).":',
          options: ['dem', 'den', 'der', 'das'],
          correctIndex: 0,
          explanation: '"mit" predlogidan keyin "der" artikli Dativda "dem" ga aylanadi.'
        },
        {
          id: 'de_ex7_2',
          type: 'fill-blank',
          question: 'Wie komme ich ______ Bahnhof? (zu + dem)',
          placeholder: 'zum yoki zur...',
          correctAnswer: 'zum',
          hint: 'zum'
        }
      ],
      speakingPrompt: {
        textDe: 'Entschuldigung, wie komme ich am besten zur Universität?',
        textUz: 'Kechirasiz, universitetga eng qulay yo‘l bilan qanday borsa bo‘ladi?',
        tip: 'Universität [uni-ver-zi-tet] deb ravon ayting.'
      },
      kulturtip: {
        title: '🇩🇪 Fahrradkultur (Velosiped madaniyati)',
        text: 'Germaniyada shahar ichida harakatlanish uchun velosiped eng ommabop transport. Maxsus veloyo‘laklarda piyodalar yurishi qat’iyan man etiladi.'
      },
      listening: {
        title: '🎧 Tinglab tushunish',
        audioText: 'Nehmen Sie die U-Bahn Linie 2 und steigen Sie am Alexanderplatz aus.',
        question: 'Qaysi metro liniyasiga o‘tirish kerak?',
        options: ['Liniya 5', 'Liniya 2', 'Liniya 10'],
        correctIndex: 1
      }
    },
    {
      id: 'de_lesson_8',
      lang: 'de',
      level: 'B1',
      number: 8,
      title: 'Bog‘lovchilar (weil, dass, obwohl) va Rasmiy maktub',
      goal: 'Ergashgan gaplar tuzish, sabab va to‘siqsizlikni ifodalash, rasmiy xat yozish.',
      theory: {
        introUz: 'Nemis tilida "weil" (chunki), "dass" (ki), "obwohl" (garchi) bog‘lovchilaridan keyin FE’L GAPNING ENG OXIRIGA sakraydi:',
        rules: [
          { pattern: 'weil (chunki)', pronunciation: 'fe’l gap oxirida', exampleDe: 'Ich lerne Deutsch, weil ich in Berlin studieren möchte.', exampleUz: 'Nemis tilini o‘rganyapman, chunki Berlinda o‘qishni xohlayman.' },
          { pattern: 'obwohl (garchand)', pronunciation: 'to‘siqsizlik', exampleDe: 'Obwohl es regnet, gehe ich spazieren.', exampleUz: 'Yomg‘ir yog‘ayotganiga qaramay, aylanib kelaman.' },
          { pattern: 'Rasmiy murojaat', pronunciation: 'xat yozishda', exampleDe: 'Sehr geehrte Damen und Herren, ...', exampleUz: 'Hurmatli xonimlar va janoblar...' }
        ],
        table: [
          { de: 'Ich weiß, dass du Recht hast.', uz: 'Bilmanki, sen haqlisan.' },
          { de: 'Ich kann nicht kommen, weil ich krank bin.', uz: 'Kela olmayman, chunki kasalman.' },
          { de: 'Mit freundlichen Grüßen', uz: 'Hurmat bilan (xat yakuni)' },
          { de: 'Ich bewerbe mich um diese Stelle.', uz: 'Ushbu bo‘sh ish o‘rniga hujjat topshiryapman.' }
        ]
      },
      exercises: [
        {
          id: 'de_ex8_1',
          type: 'multiple-choice',
          question: '"Ich lerne Deutsch, weil es mir Spaß ______ (menga yoqadi).":',
          options: ['macht', 'machen', 'machte', 'gemacht'],
          correctIndex: 0,
          explanation: '"weil" dan keyin fe’l shaxs-sonda tuslanib, gapning eng oxirida turadi: macht.'
        },
        {
          id: 'de_ex8_2',
          type: 'fill-blank',
          question: 'Sehr ______ Damen und Herren, (Hurmatli)',
          placeholder: 'geehrte...',
          correctAnswer: 'geehrte',
          hint: 'geehrte'
        }
      ],
      speakingPrompt: {
        textDe: 'Ich möchte in Deutschland arbeiten, weil es dort viele Möglichkeiten gibt.',
        textUz: 'Men Germaniyada ishlamoqchiman, chunki u yerda ko‘plab imkoniyatlar bor.',
        tip: 'Möglichkeiten [moek-likh-kay-ten] so‘ziga urg‘u bering.'
      },
      kulturtip: {
        title: '🇩🇪 Bewerbung (Ishga topshirish standarti)',
        text: 'Nemis ish beruvchilariga hujjat topshirganda rezyume (Lebenslauf) rasm bilan xronologik tartibda va motivatsion maktub aniq dalillar bilan yozilishi shart.'
      },
      listening: {
        title: '🎧 Tinglab tushunish',
        audioText: 'Ich rufe an, weil ich mich für die Stelle als Web-Entwickler bewerben möchte.',
        question: 'U nima maqsadda qo‘ng‘iroq qildi?',
        options: ['Mahsulot sotib olish uchun', 'Veb-dasturchi lavozimiga ariza topshirish uchun', 'Kechirim so‘rash uchun'],
        correctIndex: 1
      }
    }
  ],

  // ------------------------------------------------------------------
  // 🇬🇧 ENGLISH LESSONS (Cambridge / IELTS Standarti)
  // ------------------------------------------------------------------
  en: [
    {
      id: 'en_lesson_1',
      lang: 'en',
      level: 'A1',
      number: 1,
      title: 'English Alphabet, Pronunciation & Greetings',
      goal: 'Ingliz tili talaffuz sirlari (TH, SH, CH, PH) va kundalik salomlashishlarni o‘rganish.',
      theory: {
        introUz: 'Ingliz tilida harflar alohida va so‘z ichida turlicha o‘qiladi. Eng muhim qoidalar:',
        rules: [
          { pattern: 'TH', pronunciation: 'Tilsimon «Z» yoki «S»', exampleDe: 'this [zis] (bu), thank you [senk yu] (rahmat)', exampleUz: 'bu, rahmat' },
          { pattern: 'SH', pronunciation: '«SH» deb o‘qiladi', exampleDe: 'she [shi:] (u qiz), shoe [shu:] (poyafzal)', exampleUz: 'u, poyafzal' },
          { pattern: 'CH', pronunciation: '«CH» deb o‘qiladi', exampleDe: 'chair [cher] (stul), check [chek]', exampleUz: 'stul, tekshiruv' },
          { pattern: 'EE / EA', pronunciation: 'Cho‘ziq «II»', exampleDe: 'see [sii] (ko‘rmoq), tea [tii] (choy)', exampleUz: 'ko‘rmoq, choy' }
        ],
        table: [
          { de: 'Hello / Hi', uz: 'Salom' },
          { de: 'Good morning', uz: 'Xayrli tong' },
          { de: 'Good afternoon', uz: 'Xayrli kun' },
          { de: 'Good evening', uz: 'Xayrli kech' },
          { de: 'Thank you very much', uz: 'Katta rahmat' },
          { de: 'You are welcome', uz: 'Arzimaydi' },
          { de: 'Goodbye / Bye', uz: 'Xayr' }
        ]
      },
      exercises: [
        {
          id: 'en_ex1_1',
          type: 'multiple-choice',
          question: 'Kechqurun ko‘rishganda ingliz tilida qanday salom beriladi?',
          options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
          correctIndex: 2,
          explanation: '"Good evening" — xayrli kech. ("Good night" esa faqat uxlashga ketganda xayrlashuvdir).'
        },
        {
          id: 'en_ex1_2',
          type: 'multiple-choice',
          question: '"Thank you" iborasidagi "TH" tovushi qanday talaffuz qilinadi?',
          options: ['Oddiy "T"', 'Tilni tishlar orasiga qo‘yib "S"', 'Oddiy "K"', 'Oddiy "P"'],
          correctIndex: 1,
          explanation: '"TH" ingliz tilida tilsimon tovush hosil qiladi.'
        }
      ],
      speakingPrompt: {
        textDe: 'Hello! Nice to meet you. Have a great day!',
        textUz: 'Salom! Tanishganimdan xursandman. Kunningiz xayrli o‘tsin!',
        tip: 'Tovushni eshiting va baland ovozda takrorlang.'
      },
      kulturtip: {
        title: '🇬🇧 Small Talk (Kichik samimiy suhbat)',
        text: 'Ingliz tilida gaplashganda to‘g‘ridan-to‘g‘ri masalaga o‘tishdan oldin ob-havo ("Lovely weather today, isn\'t it?") yoki hol-ahvol ("How are you doing?") so‘rash odob qoidasi sanaladi.'
      },
      listening: {
        title: '🎧 Listening (Eshitib tushunish)',
        audioText: 'Hi, my name is John. I am from London.',
        question: 'John qayerdan kelgan?',
        options: ['New Yorkdan', 'Londondan', 'Toshkentdan'],
        correctIndex: 1
      }
    },
    {
      id: 'en_lesson_2',
      lang: 'en',
      level: 'A1',
      number: 2,
      title: 'To Be (Am, Is, Are) & Personal Pronouns',
      goal: 'Ingliz tilining asosi bo‘lgan "To Be" fe’li orqali o‘zini va boshqalarni ta’riflash.',
      theory: {
        introUz: '"To be" — bo‘lmoq fe’li hozirgi zamonda 3 xil shaklga ega: am, is, are:',
        rules: [
          { pattern: 'I am (I\'m)', pronunciation: 'Men ...man', exampleDe: 'I am a student.', exampleUz: 'Men talabaman.' },
          { pattern: 'He / She / It is', pronunciation: 'U ...dir', exampleDe: 'He is smart. She is a doctor.', exampleUz: 'U aqlli. U shifokor.' },
          { pattern: 'We / You / They are', pronunciation: 'Biz / Siz / Ular ...miz', exampleDe: 'We are ready. They are happy.', exampleUz: 'Biz tayyormiz. Ular xursand.' }
        ],
        table: [
          { de: 'I am from Uzbekistan.', uz: 'Men O‘zbekistondanman.' },
          { de: 'How old are you?', uz: 'Yoshingiz nechada?' },
          { de: 'I am 20 years old.', uz: 'Men 20 yoshdaman.' },
          { de: 'Are you ready?', uz: 'Siz tayyormisiz?' },
          { de: 'Yes, I am. / No, I am not.', uz: 'Ha, tayyorman. / Yo‘q, tayyor emasman.' }
        ]
      },
      exercises: [
        {
          id: 'en_ex2_1',
          type: 'multiple-choice',
          question: '"She ______ my best friend." Nuqtalar o‘rniga to‘g‘ri fe’lni qo‘ying:',
          options: ['am', 'is', 'are', 'be'],
          correctIndex: 1,
          explanation: '"She" birlikda bo‘lgani uchun "is" ishlatiladi.'
        },
        {
          id: 'en_ex2_2',
          type: 'fill-blank',
          question: 'We ______ very happy today.',
          placeholder: 'am, is yoki are...',
          correctAnswer: 'are',
          hint: 'We (biz) ko‘plik'
        }
      ],
      speakingPrompt: {
        textDe: 'I am excited to learn English every day!',
        textUz: 'Men har kuni ingliz tilini o‘rganishdan xursandman!',
        tip: 'Excited [ik-say-tid] so‘ziga urg‘u bering.'
      },
      kulturtip: {
        title: '🇬🇧 Respectful Pronouns',
        text: 'Ingliz tilida "sen" va "siz" bir xil "You" so‘zi bilan ifodalanadi. Murojaat samimiy bo‘lishi uchun "please", "thank you" va "excuse me" tez-tez ishlatiladi.'
      },
      listening: {
        title: '🎧 Listening (Eshitib tushunish)',
        audioText: 'They are students at Oxford University.',
        question: 'Ular kimlar?',
        options: ['O‘qituvchilar', 'Talabalar (o‘quvchilar)', 'Shifokorlar'],
        correctIndex: 1
      }
    },
    {
      id: 'en_lesson_3',
      lang: 'en',
      level: 'A1',
      number: 3,
      title: 'Daily Routine & Present Simple Tense',
      goal: 'Har kungi odatiy harakatlar haqida gapirish (uyg‘onish, o‘qish, ishlash).',
      theory: {
        introUz: 'Present Simple — har doim takrorlanadigan ish-harakatlar uchun ishlatiladi:',
        rules: [
          { pattern: 'I / You / We / They', pronunciation: 'Fe’l o‘zgarmaydi', exampleDe: 'I work every day. We live in Tashkent.', exampleUz: 'Men har kuni ishlayman. Biz Toshkentda yashaymiz.' },
          { pattern: 'He / She / It', pronunciation: 'Fe’lga -s yoki -es qo‘shiladi', exampleDe: 'He works. She speaks English.', exampleUz: 'U ishlaydi. U inglizcha gapiradi.' },
          { pattern: 'Inkor shakli', pronunciation: 'do not (don\'t) / does not (doesn\'t)', exampleDe: 'I don\'t know. He doesn\'t speak German.', exampleUz: 'Men bilmayman. U nemischa gapirmaydi.' }
        ],
        table: [
          { de: 'I wake up at 7 AM.', uz: 'Men ertalab soat 7 da uyg‘onaman.' },
          { de: 'I drink coffee every morning.', uz: 'Men har tong qahva ichaman.' },
          { de: 'She studies at university.', uz: 'U universitetda o‘qiydi.' },
          { de: 'Do you work here?', uz: 'Siz shu yerda ishlaysizmi?' }
        ]
      },
      exercises: [
        {
          id: 'en_ex3_1',
          type: 'multiple-choice',
          question: '"He ______ English very well." To‘g‘ri shaklni tanlang:',
          options: ['speaks', 'speak', 'speaking', 'speaked'],
          correctIndex: 0,
          explanation: '"He" bilan fe’lga -s qo‘shimchasi qo‘shiladi: speaks.'
        },
        {
          id: 'en_ex3_2',
          type: 'fill-blank',
          question: 'I ______ not speak French. (Men fransuzcha gapirmayman)',
          placeholder: 'do yoki does...',
          correctAnswer: 'do',
          hint: 'I bilan do'
        }
      ],
      speakingPrompt: {
        textDe: 'Every day I learn new English words and practice speaking.',
        textUz: 'Har kuni men yangi inglizcha so‘zlar o‘rganaman va muloqot mashq qilaman.',
        tip: 'Practice speaking deb ravon ayting.'
      },
      kulturtip: {
        title: '🇬🇧 Punctuality & Apologies',
        text: 'Buyuk Britaniyada ozgina kechikilsa ham yoki yo‘lda birovga tegib ketilsa, doimo "Sorry!" yoki "Excuse me!" deb uzr so‘rash odatdir.'
      },
      listening: {
        title: '🎧 Listening (Eshitib tushunish)',
        audioText: 'I work in an office from Monday to Friday. I love my job.',
        question: 'U qachon ishlaydi?',
        options: ['Shanba va yakshanba', 'Dushanbadan jumagacha', 'Faqat tunda'],
        correctIndex: 1
      }
    },
    {
      id: 'en_lesson_4',
      lang: 'en',
      level: 'A1',
      number: 4,
      title: 'Wh-Questions: Savol berish va Muloqot',
      goal: 'What, Where, When, Who, Why, How so‘roq so‘zlari bilan savollar tuzish.',
      theory: {
        introUz: 'Ingliz tilida savol berish uchun maxsus Wh- so‘zlari ishlatiladi:',
        rules: [
          { pattern: 'What ...?', pronunciation: 'Nima ...?', exampleDe: 'What is this? What do you want?', exampleUz: 'Bu nima? Nima xohlaysiz?' },
          { pattern: 'Where ...?', pronunciation: 'Qayerda / Qayerga ...?', exampleDe: 'Where do you live?', exampleUz: 'Qayerda yashaysiz?' },
          { pattern: 'When ...?', pronunciation: 'Qachon ...?', exampleDe: 'When does the class start?', exampleUz: 'Dars qachon boshlanadi?' },
          { pattern: 'Who ...?', pronunciation: 'Kim ...?', exampleDe: 'Who is your teacher?', exampleUz: 'O‘qituvchingiz kim?' },
          { pattern: 'How ...?', pronunciation: 'Qanday ...?', exampleDe: 'How are you today?', exampleUz: 'Bugun ahvolingiz qanday?' }
        ],
        table: [
          { de: 'Where is the nearest bank?', uz: 'Eng yaqin bank qayerda?' },
          { de: 'How much does it cost?', uz: 'Bu qancha turadi?' },
          { de: 'What time is it now?', uz: 'Hozir soat necha?' },
          { de: 'Why are you learning English?', uz: 'Nega ingliz tilini o‘rganayapsiz?' }
        ]
      },
      exercises: [
        {
          id: 'en_ex4_1',
          type: 'multiple-choice',
          question: '"Qayerda yashaysiz?" inglizcha qanday so‘raladi?',
          options: ['Where do you live?', 'What do you live?', 'Who do you live?', 'When do you live?'],
          correctIndex: 0,
          explanation: '"Where" joyni so‘rash uchun ishlatiladi.'
        },
        {
          id: 'en_ex4_2',
          type: 'fill-blank',
          question: '______ much is this coffee? (Bu qahva qancha turadi?)',
          placeholder: 'So‘roq so‘zini yozing...',
          correctAnswer: 'How',
          hint: 'How much'
        }
      ],
      speakingPrompt: {
        textDe: 'Excuse me, where can I find a good restaurant around here?',
        textUz: 'Kechirasiz, bu atrofda yaxshi restoranni qayerdan topsam bo‘ladi?',
        tip: 'Around here ohangini to‘g‘ri chiqaring.'
      },
      kulturtip: {
        title: '🇬🇧 Queuing (Navbatda turish madaniyati)',
        text: 'Britaniyada navbatsiz kirish eng katta qo‘pollik sanaladi. Har doim navbat oxiriga o‘tish va sabr qilish talab etiladi.'
      },
      listening: {
        title: '🎧 Listening (Eshitib tushunish)',
        audioText: 'Excuse me, where is the train station? — Go straight and turn right.',
        question: 'Vokzalga qanday boriladi?',
        options: ['Faqat chapga', 'To‘g‘riga borib, o‘ngga buriling', 'Orqaga qayting'],
        correctIndex: 1
      }
    },
    {
      id: 'en_lesson_5',
      lang: 'en',
      level: 'A1',
      number: 5,
      title: 'At the Restaurant & Ordering Food',
      goal: 'Restoranda taom buyurtma qilish va hisob so‘rash (Can I have, I would like).',
      theory: {
        introUz: 'Kafe va restoranda xushmuomalalik bilan buyurtma berish qoidalari:',
        rules: [
          { pattern: 'I would like ... (I\'d like)', pronunciation: 'Men ...ni xohlardim', exampleDe: 'I\'d like a chicken sandwich, please.', exampleUz: 'Menga tovuqli sendvich bering, iltimos.' },
          { pattern: 'Can I have ...?', pronunciation: '... olsam bo‘ladimi?', exampleDe: 'Can I have a glass of water?', exampleUz: 'Bir stakan suv olsam bo‘ladimi?' },
          { pattern: 'Could we have the bill?', pronunciation: 'Hisobni bersangiz', exampleDe: 'Could we have the bill, please?', exampleUz: 'Hisobni keltirsangiz, iltimos.' }
        ],
        table: [
          { de: 'Are you ready to order?', uz: 'Buyurtma berishga tayyormisiz?' },
          { de: 'What do you recommend?', uz: 'Nimani tavsiya qilasiz?' },
          { de: 'For here or to go?', uz: 'Shu yerdami yoki olib ketishgami?' },
          { de: 'Keep the change.', uz: 'Qaytimi kerak emas (choychaqa).' }
        ]
      },
      exercises: [
        {
          id: 'en_ex5_1',
          type: 'multiple-choice',
          question: '"Hisobni keltirsangiz, iltimos" inglizcha qanday aytiladi?',
          options: ['Could we have the bill, please?', 'Where is the kitchen?', 'I want to eat now.', 'Goodbye!'],
          correctIndex: 0,
          explanation: '"Could we have the bill, please?" — eng xushmuomala hisob so‘rash usuli.'
        },
        {
          id: 'en_ex5_2',
          type: 'fill-blank',
          question: 'I would ______ a cup of coffee, please.',
          placeholder: 'so‘zni yozing...',
          correctAnswer: 'like',
          hint: 'like'
        }
      ],
      speakingPrompt: {
        textDe: 'Can I have the menu and a bottle of sparkling water, please?',
        textUz: 'Menga menyu va bir shisha gazli suv keltira olasizmi, iltimos?',
        tip: 'Sparkling water [spa:kling wo:tə] deb ravon ayting.'
      },
      kulturtip: {
        title: '🇺🇸 Tipping Culture (AQSHda choychaqa)',
        text: 'AQSH restoranlarida ofitsiantga hisobning kamida 15-20 foizi miqdorida "tip" (choychaqa) qoldirish majburiy etiket hisoblanadi.'
      },
      listening: {
        title: '🎧 Listening (Eshitib tushunish)',
        audioText: 'Hi, are you ready to order? — Yes, I would like the grilled salmon with vegetables.',
        question: 'U qanday taom buyurtma qildi?',
        options: ['Gamburger va fri', 'Sabzavotlar bilan qovurilgan losos balig‘i', 'Pitsa'],
        correctIndex: 1
      }
    },
    {
      id: 'en_lesson_6',
      lang: 'en',
      level: 'A2',
      number: 6,
      title: 'Past Simple Tense (O‘tgan zamon)',
      goal: 'O‘tgan voqealarni aytish, to‘g‘ri (-ed) va noto‘g‘ri fe’llar (irregular verbs).',
      theory: {
        introUz: 'Past Simple — o‘tgan zamonda aniq vaqtda sodir bo‘lib tugagan ish-harakatlar:',
        rules: [
          { pattern: 'To‘g‘ri fe’llar', pronunciation: 'fe’l + ed', exampleDe: 'work → worked, play → played, visit → visited', exampleUz: 'ishladi, o‘ynadi, ziyorat qildi' },
          { pattern: 'Noto‘g‘ri fe’llar (Irregular)', pronunciation: 'ildizdan o‘zgaradi', exampleDe: 'go → went, see → saw, buy → bought', exampleUz: 'bordi, ko‘rdi, sotib oldi' },
          { pattern: 'Savol va inkor', pronunciation: 'did / didn\'t + fe’l 1-shaklda', exampleDe: 'Did you see him? — I didn\'t see him.', exampleUz: 'Uni ko‘rdingizmi? — Men uni ko‘rmadim.' }
        ],
        table: [
          { de: 'I went to London last summer.', uz: 'O‘tgan yozda Londonga bordim.' },
          { de: 'What did you do yesterday?', uz: 'Kecha nima qildingiz?' },
          { de: 'We saw a fantastic movie.', uz: 'Biz ajoyib film ko‘rdik.' },
          { de: 'She bought a new laptop.', uz: 'U yangi noutbuk sotib oldi.' }
        ]
      },
      exercises: [
        {
          id: 'en_ex6_1',
          type: 'multiple-choice',
          question: '"Yesterday I ______ to the supermarket." (go fe’lining o‘tgan zamoni):',
          options: ['goed', 'went', 'gone', 'going'],
          correctIndex: 1,
          explanation: '"go" noto‘g‘ri fe’l bo‘lib, o‘tgan zamoni "went" bo‘ladi.'
        },
        {
          id: 'en_ex6_2',
          type: 'fill-blank',
          question: 'Did you ______ your homework? (do fe’li so‘roqda 1-shaklda qoladi)',
          placeholder: 'do yoki did...',
          correctAnswer: 'do',
          hint: 'did bor joyda fe’l o‘zgarmaydi'
        }
      ],
      speakingPrompt: {
        textDe: 'Last year I visited several European countries and improved my English.',
        textUz: 'O‘tgan yili men bir nechta Yevropa mamlakatlariga sayohat qildim va ingliz tilimni yaxshiladim.',
        tip: 'Improved [im-pru:vd] deb ohang bilan ayting.'
      },
      kulturtip: {
        title: '🇬🇧 British vs. American English',
        text: 'Masalan: Britaniyada "flat" (kvartira), AQSHda "apartment"; Britaniyada "lift", AQSHda "elevator" deb aytiladi.'
      },
      listening: {
        title: '🎧 Listening (Eshitib tushunish)',
        audioText: 'Last weekend I stayed at home and read a book because the weather was terrible.',
        question: 'U o‘tgan dam olish kunida nima qildi va nega?',
        options: ['Do‘stlari bilan tog‘ga chiqdi', 'Ob-havo yomonligi sababli uyda kitob o‘qidi', 'Maktabga bordi'],
        correctIndex: 1
      }
    },
    {
      id: 'en_lesson_7',
      lang: 'en',
      level: 'A2',
      number: 7,
      title: 'Future Plans: "going to" vs "will"',
      goal: 'Kelasi zamon rejalari (be going to) va kutilmagan qarorlar / bashoratlar (will).',
      theory: {
        introUz: 'Kelajak haqida gapirganda 2 ta asosiy konstruksiya ishlatiladi:',
        rules: [
          { pattern: 'be going to + fe’l', pronunciation: 'oldindan rejalashtirilgan niyat', exampleDe: 'I am going to study abroad next year.', exampleUz: 'Kelasi yil chet elda o‘qimoqchiman (rejada bor).' },
          { pattern: 'will + fe’l', pronunciation: 'gapirish paytida berilgan qaror / va’da', exampleDe: 'I will help you with your bags!', exampleUz: 'Sumkalaringizga yordam beraman!' },
          { pattern: 'Inkor shakllari', pronunciation: 'not going to / won\'t', exampleDe: 'I won\'t forget this.', exampleUz: 'Buni unutmayman.' }
        ],
        table: [
          { de: 'What are you going to do this weekend?', uz: 'Bu dam olish kunida nima qilmoqchisiz?' },
          { de: 'I think it will rain tomorrow.', uz: 'Menimcha, ertaga yomg‘ir yog‘adi.' },
          { de: 'I will call you tonight.', uz: 'Bugun oqshom sizga qo‘ng‘iroq qilaman.' },
          { de: 'We are going to buy a new car.', uz: 'Biz yangi mashina sotib olmoqchimiz.' }
        ]
      },
      exercises: [
        {
          id: 'en_ex7_1',
          type: 'multiple-choice',
          question: '"The phone is ringing! — Don\'t worry, I ______ answer it." (Hozir qaror qabul qilindi):',
          options: ['will', 'am going to', 'did', 'was'],
          correctIndex: 0,
          explanation: 'Hozirgi paytdagi tezkor qarorlar uchun "will" ishlatiladi.'
        },
        {
          id: 'en_ex7_2',
          type: 'fill-blank',
          question: 'I am ______ to visit my grandparents this Sunday.',
          placeholder: 'going...',
          correctAnswer: 'going',
          hint: 'going to'
        }
      ],
      speakingPrompt: {
        textDe: 'Next month I am going to take an official English exam to test my level.',
        textUz: 'Kelasi oy men o‘z darajamni tekshirish uchun rasmiy ingliz tili imtihonini topshirmoqchiman.',
        tip: 'Next month [nekst manth] ravon ayting.'
      },
      kulturtip: {
        title: '🇬🇧 Idiom: "Piece of cake"',
        text: 'Agar inglizlar "It is a piece of cake!" deyishsa, bu keks haqida emas, balki "Bu juda oson, suvdek gap!" degan ma’noni anglatadi.'
      },
      listening: {
        title: '🎧 Listening (Eshitib tushunish)',
        audioText: 'I am going to fly to New York on Monday for an international business conference.',
        question: 'U dushanba kuni qayerga va nima uchun uchmoqda?',
        options: ['Ta’tilga Londonga', 'Biznes konferensiya uchun New Yorkka', 'O‘qish uchun Parijga'],
        correctIndex: 1
      }
    },
    {
      id: 'en_lesson_8',
      lang: 'en',
      level: 'B1',
      number: 8,
      title: 'Present Perfect & Expressing Opinions',
      goal: 'Hayotiy tajribalar (have + V3), o‘z fikrini asoslash (In my opinion, I believe).',
      theory: {
        introUz: 'Present Perfect — o‘tmishda boshlanib, natijasi hozirga ta’sir qilayotgan yoki hayotiy tajriba bo‘lgan voqealar:',
        rules: [
          { pattern: 'have / has + V3', pronunciation: 'shaxsga qarab', exampleDe: 'I have visited 10 countries. She has finished her degree.', exampleUz: 'Men 10 ta davlatda bo‘lganman. U diplomini bitirdi.' },
          { pattern: 'ever / never', pronunciation: 'savol va inkorda', exampleDe: 'Have you ever eaten sushi? — I have never tried it.', exampleUz: 'Hech sushi yeganmisiz? — Hech qachon tatib ko‘rmaganman.' },
          { pattern: 'Fikr bildirish', pronunciation: 'IELTS speaking uchun', exampleDe: 'In my opinion, learning languages opens many doors.', exampleUz: 'Mening fikrimcha, tillarni o‘rganish ko‘p eshiklarni ochadi.' }
        ],
        table: [
          { de: 'Have you finished your homework yet?', uz: 'Vazifangizni tugatdingizmi?' },
          { de: 'I have already sent the email.', uz: 'Men xatni allaqachon yubordim.' },
          { de: 'As far as I am concerned, ...', uz: 'Menimcha / Mening nazarimda...' },
          { de: 'I completely agree with you.', uz: 'Sizga to‘liq qo‘shilaman.' }
        ]
      },
      exercises: [
        {
          id: 'en_ex8_1',
          type: 'multiple-choice',
          question: '"Have you ever ______ to New York?" (be fe’lining 3-shakli):',
          options: ['been', 'be', 'was', 'being'],
          correctIndex: 0,
          explanation: '"Have you ever been to..." — biror joyda bo‘lganlik tajribasini so‘rashda ishlatiladi.'
        },
        {
          id: 'en_ex8_2',
          type: 'fill-blank',
          question: 'In my ______, English is essential for global business. (fikrimcha)',
          placeholder: 'opinion...',
          correctAnswer: 'opinion',
          hint: 'opinion'
        }
      ],
      speakingPrompt: {
        textDe: 'In my opinion, consistency is the key to mastering any foreign language.',
        textUz: 'Mening fikrimcha, har qanday chet tilini mukammal o‘rganishning kaliti — bu muntazamlikdir.',
        tip: 'Consistency [kənˈsɪstənsi] so‘ziga urg‘u bering.'
      },
      kulturtip: {
        title: '🇬🇧 Agree to Disagree',
        text: 'Munozaralarda inglizlar to‘g‘ridan-to‘g‘ri "You are wrong!" (Siz nohaqsiz) demaydilar, balki "I see your point, but..." deb o‘z fikrini muloyim bayon qilishadi.'
      },
      listening: {
        title: '🎧 Listening (Eshitib tushunish)',
        audioText: 'I have worked as a software engineer for five years, and I believe artificial intelligence will change education forever.',
        question: 'U necha yil muhandis bo‘lib ishlagan va nima haqida fikr bildirdi?',
        options: ['1 yil, maktablar haqida', '5 yil, sun’iy intellekt ta’limni o‘zgartirishi haqida', '10 yil, robotlar haqida'],
        correctIndex: 1
      }
    }
  ],

  // ------------------------------------------------------------------
  // 🇷🇺 RUSSIAN (РУССКИЙ) LESSONS (ТРКИ Standarti)
  // ------------------------------------------------------------------
  ru: [
    {
      id: 'ru_lesson_1',
      lang: 'ru',
      level: 'A1',
      number: 1,
      title: 'Русский алфавит и Первые фразы',
      goal: 'Rus tili alifbosi, maxsus harflar (Ы, Ь, Ъ, Ж, Ш, Щ) va salomlashish iboralari.',
      theory: {
        introUz: 'Rus tili kirill alifbosiga asoslangan. Eng ko‘p e’tibor talab qiladigan harflar:',
        rules: [
          { pattern: 'Ы harfi', pronunciation: 'Bo‘g‘izdan chiquvchi qattiq «I»', exampleDe: 'мы [mı] (biz), ты [tı] (sen)', exampleUz: 'biz, sen' },
          { pattern: 'Ь (yumshatish)', pronunciation: 'Oldidagi undoshni yumshatadi', exampleDe: 'день [den\'] (kun), мать [mat\']', exampleUz: 'kun, ona' },
          { pattern: 'Ж va Ш', pronunciation: 'Doimo qattiq talaffuz qilinadi', exampleDe: 'жизнь [jizn\'] (hayot), школа [shkola]', exampleUz: 'hayot, maktab' },
          { pattern: 'О harfi urg‘usiz', pronunciation: '«A» kabi o‘qiladi', exampleDe: 'молоко [malako] (sut), хорошо [xarasho]', exampleUz: 'sut, yaxshi' }
        ],
        table: [
          { de: 'Здравствуйте', uz: 'Assalomu alaykum (rasmiy salom)' },
          { de: 'Привет', uz: 'Salom (do‘stona)' },
          { de: 'Доброе утро', uz: 'Xayrli tong' },
          { de: 'Добрый день', uz: 'Xayrli kun' },
          { de: 'Добрый вечер', uz: 'Xayrli kech' },
          { de: 'Спасибо большое', uz: 'Katta rahmat' },
          { de: 'Пожалуйста', uz: 'Iltimos / Arzimaydi' },
          { de: 'До свидания', uz: 'Xayr, ko‘rishguncha' }
        ]
      },
      exercises: [
        {
          id: 'ru_ex1_1',
          type: 'multiple-choice',
          question: 'Kattalarga yoki rasmiy joyda qanday salom beriladi?',
          options: ['Привет', 'Здравствуйте', 'Пока', 'Спокойной ночи'],
          correctIndex: 1,
          explanation: '"Здравствуйте" — eng oliy rasmiy salomlashish ifodasidir.'
        },
        {
          id: 'ru_ex1_2',
          type: 'fill-blank',
          question: 'Katta rahmat demoqchisiz: "Спасибо ______."',
          placeholder: 'So‘zni yozing...',
          correctAnswer: 'большое',
          hint: 'bolshoye'
        }
      ],
      speakingPrompt: {
        textDe: 'Здравствуйте! Очень приятно познакомиться.',
        textUz: 'Assalomu alaykum! Tanishganimdan juda xursandman.',
        tip: 'Здравствуйте [zdrastvuyte] deb talaffuz qilinadi.'
      },
      kulturtip: {
        title: '🇷🇺 Вы vs. Ты (Sizlash va Senlash)',
        text: 'Rus tilida o‘zingizdan kattalarga, notanish insonlarga va ish joyida qat’iy ravishda "Вы" (Siz) deb murojaat qilinadi.'
      },
      listening: {
        title: '🎧 Аудирование (Tinglab tushunish)',
        audioText: 'Добрый день! Меня зовут Алишер. Я живу в Ташкенте.',
        question: 'Alisher qayerda yashaydi?',
        options: ['Moskvada', 'Toshkentda', 'Samarqandda'],
        correctIndex: 1
      }
    },
    {
      id: 'ru_lesson_2',
      lang: 'ru',
      level: 'A1',
      number: 2,
      title: 'Знакомство и Глаголы первого спряжения',
      goal: 'O‘zini tanishtirish, kasbni aytish va fe’llarni tuslash (читать, знать, делать).',
      theory: {
        introUz: 'Rus tilida hozirgi zamonda fe’l shaxs-songa qarab tuslanadi (-ю, -ешь, -ет, -ем, -ете, -ют):',
        rules: [
          { pattern: 'Я', pronunciation: '-ю / -у', exampleDe: 'Я читаю, я знаю, я говорю', exampleUz: 'Men o‘qiyman, men bilaman, gapiraman' },
          { pattern: 'Ты', pronunciation: '-ешь / -ишь', exampleDe: 'Ты читаешь, ты знаешь', exampleUz: 'Sen o‘qiysan, bilasan' },
          { pattern: 'Он / Она', pronunciation: '-ет / -ит', exampleDe: 'Он читает, она знает', exampleUz: 'U o‘qiydi, biladi' },
          { pattern: 'Мы', pronunciation: '-ем / -им', exampleDe: 'Мы читаем, мы знаем', exampleUz: 'Biz o‘qiymiz, bilamiz' }
        ],
        table: [
          { de: 'Как вас зовут?', uz: 'Ismingiz nima? (rasmiy)' },
          { de: 'Меня зовут ...', uz: 'Mening ismim ...' },
          { de: 'Откуда вы?', uz: 'Qayerdansiz?' },
          { de: 'Я из Узбекистана.', uz: 'Men O‘zbekistondanman.' },
          { de: 'Я говорю по-русски.', uz: 'Men ruscha gapiraman.' }
        ]
      },
      exercises: [
        {
          id: 'ru_ex2_1',
          type: 'multiple-choice',
          question: '"Мы ______ по-русски." (говорить fe’lining to‘g‘ri shakli):',
          options: ['говорю', 'говоришь', 'говорит', 'говорим'],
          correctIndex: 3,
          explanation: '"Мы" bilan -им qo‘shiladi: говорим.'
        },
        {
          id: 'ru_ex2_2',
          type: 'fill-blank',
          question: 'Меня ______ Сардор. (Mening ismim Sardor)',
          placeholder: 'so‘zni yozing...',
          correctAnswer: 'зовут',
          hint: 'зовут'
        }
      ],
      speakingPrompt: {
        textDe: 'Меня зовут Анвар. Я изучаю русский язык.',
        textUz: 'Mening ismim Anvar. Men rus tilini o‘rganayapman.',
        tip: 'Изучаю [izuchayu] so‘zini dona-dona ayting.'
      },
      kulturtip: {
        title: '🇷🇺 Рукопожатие (Qo‘l berib ko‘rishish)',
        text: 'Erkaklar uchrashganda va xayrlashganda bir-biriga qo‘l berib so‘rashishadi. Eshik ostonasida qo‘l berib so‘rashish esa irim qilinadi.'
      },
      listening: {
        title: '🎧 Аудирование (Tinglab tushunish)',
        audioText: 'Я студент, учусь на первом курсе. Очень приятно!',
        question: 'U nechanchi kursda o‘qiydi?',
        options: ['3-kursda', '1-kursda', 'Magistraturada'],
        correctIndex: 1
      }
    },
    {
      id: 'ru_lesson_3',
      lang: 'ru',
      level: 'A1',
      number: 3,
      title: 'Три рода существительных и Мой / Моя / Моё',
      goal: 'Rus tilidagi 3 ta rodni (erkak, ayol, o‘rta) farqlash va egalik olmoshlarini to‘g‘ri qo‘llash.',
      theory: {
        introUz: 'Rus tilida har bir ot 3 ta roddan biriga tegishli:',
        rules: [
          { pattern: 'Мужской род (Он)', pronunciation: 'Undoshga tugaydi', exampleDe: 'дом, стол, брат, телефон', exampleUz: 'uy, stol, uka/aka, telefon' },
          { pattern: 'Женский род (Она)', pronunciation: '-А yoki -Я ga tugaydi', exampleDe: 'книга, машина, мама, сестра', exampleUz: 'kitob, mashina, ona, opa' },
          { pattern: 'Средний род (Оно)', pronunciation: '-О yoki -Е ga tugaydi', exampleDe: 'окно, яблоко, море', exampleUz: 'deraza, olma, dengiz' },
          { pattern: 'Притяжательные', pronunciation: 'Egalik olmoshlari moslashadi', exampleDe: 'мой дом, моя книга, моё окно', exampleUz: 'mening uyim, mening kitobim, derazam' }
        ],
        table: [
          { de: 'Это мой друг.', uz: 'Bu mening do‘stim.' },
          { de: 'Это моя семья.', uz: 'Bu mening oilam.' },
          { de: 'Это моё любимое место.', uz: 'Bu mening sevimli joyim.' },
          { de: 'Чей это телефон?', uz: 'Bu kimning telefoni?' }
        ]
      },
      exercises: [
        {
          id: 'ru_ex3_1',
          type: 'multiple-choice',
          question: '"Машина" so‘zi bilan qaysi olmosh to‘g‘ri ishlatiladi?',
          options: ['Мой машина', 'Моя машина', 'Моё машина', 'Мои машина'],
          correctIndex: 1,
          explanation: '"Машина" -а ga tugagan, ayol jinsi (женский род), shuning uchun "моя".'
        },
        {
          id: 'ru_ex3_2',
          type: 'fill-blank',
          question: 'Это ______ новый дом. (Bu mening yangi uyim)',
          placeholder: 'мой, моя yoki моё...',
          correctAnswer: 'мой',
          hint: 'дом — мужской род'
        }
      ],
      speakingPrompt: {
        textDe: 'Это мой город Ташкент. Я очень люблю мой родной край.',
        textUz: 'Bu mening shahrim Toshkent. Men o‘z ona yurtimni juda yaxshi ko‘raman.',
        tip: 'Люблю [lyublyu] so‘zini yumshoq ayting.'
      },
      kulturtip: {
        title: '🇷🇺 Отчество (Otasining ismi)',
        text: 'Rossiyada rasmiy muloqotda kishining ismi va otasining ismi qo‘shib aytiladi (masalan: Иван Сергеевич, Анна Петровна).'
      },
      listening: {
        title: '🎧 Аудирование (Tinglab tushunish)',
        audioText: 'Познакомьтесь, это моя коллега Елена. Она преподаватель.',
        question: 'Yelena kim?',
        options: ['Talaba', 'Hamkasb va o‘qituvchi', 'Shifokor'],
        correctIndex: 1
      }
    },
    {
      id: 'ru_lesson_4',
      lang: 'ru',
      level: 'A1',
      number: 4,
      title: 'Где? Куда? Ориентация в городе и Предлоги',
      goal: 'Shaharda yo‘l so‘rash, qayerda joylashganini aytish (в, на predloglari).',
      theory: {
        introUz: 'Joylashuvni so‘rash va yo‘nalish ko‘rsatish uchun kerakli asosiy iboralar:',
        rules: [
          { pattern: 'Где находится ...?', pronunciation: '... qayerda joylashgan?', exampleDe: 'Где находится аптека?', exampleUz: 'Dorixona qayerda joylashgan?' },
          { pattern: 'Прямо / Направо / Налево', pronunciation: 'To‘g‘riga / O‘ngga / Chapga', exampleDe: 'Идите прямо, потом направо.', exampleUz: 'To‘g‘riga boring, keyin o‘ngga.' },
          { pattern: 'В + Предложный падеж', pronunciation: 'ichida (-da)', exampleDe: 'в Ташкенте (Toshkentda), в школе (maktabda)', exampleUz: 'Toshkentda, maktabda' },
          { pattern: 'На + Предложный падеж', pronunciation: 'ustida / maydonda', exampleDe: 'на столе (stol ustida), на улице (ko‘chada)', exampleUz: 'stolda, ko‘chada' }
        ],
        table: [
          { de: 'Скажите, пожалуйста, где метро?', uz: 'Ayting-chi, iltimos, metro qayerda?' },
          { de: 'Это далеко отсюда?', uz: 'Bu yerdan uzoqmi?' },
          { de: 'Нет, это очень близко.', uz: 'Yo‘q, bu juda yaqin.' },
          { de: 'Сколько стоит проезд?', uz: 'Yo‘l haqi qancha?' }
        ]
      },
      exercises: [
        {
          id: 'ru_ex4_1',
          type: 'multiple-choice',
          question: '"To‘g‘riga boring" ruscha qanday aytiladi?',
          options: ['Идите прямо', 'Идите направо', 'Идите налево', 'Стойте здесь'],
          correctIndex: 0,
          explanation: '"Прямо" — to‘g‘riga degani.'
        },
        {
          id: 'ru_ex4_2',
          type: 'fill-blank',
          question: 'Скажите, пожалуйста, ______ находится банк? (qayerda)',
          placeholder: 'So‘roq so‘zini yozing...',
          correctAnswer: 'где',
          hint: 'где'
        }
      ],
      speakingPrompt: {
        textDe: 'Извините, как пройти к ближайшей станции метро?',
        textUz: 'Kechirasiz, eng yaqin metro bekatiga qanday borsa bo‘ladi?',
        tip: 'Ближайшей so‘ziga e’tibor bering.'
      },
      kulturtip: {
        title: '🇷🇺 Вежливые слова (Xushmuomalalik)',
        text: 'Ko‘chada begonalardan yo‘l so‘rashda har doim "Извините, пожалуйста..." deb boshlash eng yaxshi taassurot qoldiradi.'
      },
      listening: {
        title: '🎧 Аудирование (Tinglab tushunish)',
        audioText: 'Метро находится прямо за углом. Это всего пять минут пешком.',
        question: 'Metrogacha qancha vaqt ketadi?',
        options: ['1 soat', 'Piyoda bor-yo‘g‘i 5 daqiqa', 'Avtobusda 30 daqiqa'],
        correctIndex: 1
      }
    },
    {
      id: 'ru_lesson_5',
      lang: 'ru',
      level: 'A1',
      number: 5,
      title: 'Числа, Время и Покупки в магазине',
      goal: 'Raqamlar, narx so‘rash va magazinda xarid qilish (Сколько стоит, дайте пожалуйста).',
      theory: {
        introUz: 'Magazinda xarid qilish va hisob-kitob qilish uchun zarur jumlalar:',
        rules: [
          { pattern: 'Сколько стоит ...?', pronunciation: 'Narxi qancha?', exampleDe: 'Сколько стоит этот хлеб?', exampleUz: 'Bu non qancha turadi?' },
          { pattern: 'Дайте, пожалуйста ...', pronunciation: 'Bering, iltimos', exampleDe: 'Дайте, пожалуйста, килограмм яблок.', exampleUz: 'Iltimos, bir kilo olma bering.' },
          { pattern: 'Один рубль / два рубля / пять рублей', pronunciation: 'pul birliklarining o‘zgarishi', exampleDe: '1 рубль, 2-4 рубля, 5-20 рублей', exampleUz: '1 rubl, 2 rubl, 5 rubl...' }
        ],
        table: [
          { de: 'один, два, три, четыре, пять', uz: '1, 2, 3, 4, 5' },
          { de: 'десять, двадцать, пятьдесят, сто', uz: '10, 20, 50, 100' },
          { de: 'С вас пятьсот рублей.', uz: 'Sizdan 500 rubl bo‘ldi.' },
          { de: 'Вы принимаете карты?', uz: 'Karta qabul qilasizmi?' }
        ]
      },
      exercises: [
        {
          id: 'ru_ex5_1',
          type: 'multiple-choice',
          question: '"Karta orqali to‘lasam bo‘ladimi?" ruscha qanday so‘raladi?',
          options: ['Можно оплатить картой?', 'Где карта?', 'Сколько стоит карта?', 'Это моя карта'],
          correctIndex: 0,
          explanation: '"Можно оплатить картой?" — to‘lov paytidagi eng ko‘p ishlatiladigan jumla.'
        },
        {
          id: 'ru_ex5_2',
          type: 'fill-blank',
          question: 'Дайте, ______, бутылку минеральной воды.',
          placeholder: 'пожалуйста...',
          correctAnswer: 'пожалуйста',
          hint: 'пожалуйста'
        }
      ],
      speakingPrompt: {
        textDe: 'Здравствуйте, взвесьте, пожалуйста, два килограмма картошки.',
        textUz: 'Assalomu alaykum, iltimos, ikki kilo kartoshka tortib bering.',
        tip: 'Взвесьте [vzveste] deb talaffuz qilinadi.'
      },
      kulturtip: {
        title: '🇷🇺 Чаевые в кафе (Choychaqa)',
        text: 'Rossiya restoran va kafelarida odatda xizmat ko‘rsatish uchun 10% atrofida choychaqa (чаевые) qoldiriladi.'
      },
      listening: {
        title: '🎧 Аудирование (Tinglab tushunish)',
        audioText: 'С вас триста пятьдесят рублей. Пакет нужен?',
        question: 'Kassir nima deb so‘radi?',
        options: ['Sizga mashina kerakmi?', 'Paket kerakmi?', 'Kechirasizmi?'],
        correctIndex: 1
      }
    },
    {
      id: 'ru_lesson_6',
      lang: 'ru',
      level: 'A2',
      number: 6,
      title: 'Прошедшее и будущее время глаголов',
      goal: 'O‘tgan zamon (-л, -ла, -ло, -ли) va murakkab kelasi zamon (буду + fe’l).',
      theory: {
        introUz: 'Rus tilida o‘tgan zamon rodlarga qarab yasaladi, bu o‘rganish uchun juda oson:',
        rules: [
          { pattern: 'Мужской род (Он)', pronunciation: '-л qo‘shiladi', exampleDe: 'Он читал, он работал, он жил', exampleUz: 'U o‘qidi, ishladi, yashadi' },
          { pattern: 'Женский род (Она)', pronunciation: '-ла qo‘shiladi', exampleDe: 'Она читала, она работала', exampleUz: 'U (qiz) o‘qidi, ishladi' },
          { pattern: 'Множественное (Они)', pronunciation: '-ли qo‘shiladi', exampleDe: 'Мы читали, они работали', exampleUz: 'Biz o‘qidik, ular ishlashdi' },
          { pattern: 'Будущее время', pronunciation: 'буду + infintiv', exampleDe: 'Я буду изучать русский язык.', exampleUz: 'Men rus tilini o‘rganaman.' }
        ],
        table: [
          { de: 'Что вы делали вчера?', uz: 'Kecha nima qildingiz?' },
          { de: 'Вчера я весь день отдыхал.', uz: 'Kecha kun bo‘yi dam oldim.' },
          { de: 'Завтра мы будем работать.', uz: 'Ertaga biz ishlaymiz.' },
          { de: 'Она была очень рада.', uz: 'U juda xursand bo‘ldi.' }
        ]
      },
      exercises: [
        {
          id: 'ru_ex6_1',
          type: 'multiple-choice',
          question: '"Вчера Анна ______ новую книгу." (читать fe’li ayol kishiga):',
          options: ['читал', 'читала', 'читало', 'читали'],
          correctIndex: 1,
          explanation: '"Анна" ayol jinsi bo‘lgani uchun fe’lga -ла qo‘shiladi: читала.'
        },
        {
          id: 'ru_ex6_2',
          type: 'fill-blank',
          question: 'Завтра я ______ учить новые слова. (буду)',
          placeholder: 'fe’lni yozing...',
          correctAnswer: 'буду',
          hint: 'буду'
        }
      ],
      speakingPrompt: {
        textDe: 'В прошлые выходные мы гуляли в парке и пили вкусный чай.',
        textUz: 'O‘tgan dam olish kunlarida biz bog‘da sayr qildik va mazali choy ichdik.',
        tip: 'Гуляли [gulyali] deb ravon ayting.'
      },
      kulturtip: {
        title: '🇷🇺 Дача (Shahar tashqarisidagi hovli)',
        text: 'Rossiyada yoz oylarida shahar aholisi dam olish kunlarini tabiat qo‘ynida, o‘z shahar tashqarisidagi hovlisida (дача) o‘tkazishni yaxshi ko‘radi.'
      },
      listening: {
        title: '🎧 Аудирование (Tinglab tushunish)',
        audioText: 'Вчера вечером мы с друзьями смотрели интересный исторический фильм.',
        question: 'Ular kecha nima qilishdi?',
        options: ['Kitob o‘qishdi', 'Do‘stlari bilan tarixiy film ko‘rishdi', 'Dars qilishdi'],
        correctIndex: 1
      }
    },
    {
      id: 'ru_lesson_7',
      lang: 'ru',
      level: 'A2',
      number: 7,
      title: 'Родительный падеж (Кого? Чего?) и Отрицание',
      goal: 'Qaratqich kelishigi, inkor (нет ...), sanash va miqdor ifodalash.',
      theory: {
        introUz: 'Родительный падеж — rus tilidagi eng muhim kelishiklardan biri. Yo‘qlikni (нет) bildirishda ishlatiladi:',
        rules: [
          { pattern: 'нет + Родительный падеж', pronunciation: 'yo‘q bo‘lsa', exampleDe: 'У меня нет времени (vaqtim yo‘q). У него нет машины.', exampleUz: 'vaqtim yo‘q, mashinasi yo‘q' },
          { pattern: 'Мужской род', pronunciation: '-а / -я ga o‘zgaradi', exampleDe: 'брат → брата, стакан чая', exampleUz: 'bir stakan choy' },
          { pattern: 'Женский род', pronunciation: '-ы / -и ga o‘zgaradi', exampleDe: 'вода → воды, стакан воды', exampleUz: 'bir stakan suv' }
        ],
        table: [
          { de: 'Чашку кофе, пожалуйста.', uz: 'Bir chashka kofe, iltimos.' },
          { de: 'У вас есть сахар? — Нет сахара.', uz: 'Shakar bormi? — Shakar yo‘q.' },
          { de: 'Без проблем!', uz: 'Muammosiz! / Hechqisi yo‘q!' },
          { de: 'После работы я иду домой.', uz: 'Ishdan keyin uyga boraman.' }
        ]
      },
      exercises: [
        {
          id: 'ru_ex7_1',
          type: 'multiple-choice',
          question: '"У меня сейчас нет ______ (время).":',
          options: ['время', 'времени', 'временем', 'времените'],
          correctIndex: 1,
          explanation: '"нет" so‘zidan keyin Родительный падеж keladi: нет времени.'
        },
        {
          id: 'ru_ex7_2',
          type: 'fill-blank',
          question: 'Дайте мне стакан холодной ______ (вода -> воды).',
          placeholder: 'воды...',
          correctAnswer: 'воды',
          hint: 'воды'
        }
      ],
      speakingPrompt: {
        textDe: 'Извините, у вас есть свободная минутка? — Да, конечно!',
        textUz: 'Kechirasiz, bo‘sh daqiqangiz bormi? — Ha, albatta!',
        tip: 'Минутка [minutka] so‘ziga urg‘u bering.'
      },
      kulturtip: {
        title: '🇷🇺 Чаепитие (Choy ichish madaniyati)',
        text: 'Rossiyada mehmonga borganda mezbon albatta choy taklif qiladi va dasturxonga shirinliklar (пряники, конфеты, варенье) qo‘yiladi.'
      },
      listening: {
        title: '🎧 Аудирование (Tinglab tushunish)',
        audioText: 'Я пью зелёный чай без сахара, но с лимоном.',
        question: 'U choyni qanday ichadi?',
        options: ['Sut bilan', 'Shakarsiz, lekin limon bilan', 'Shakar bilan'],
        correctIndex: 1
      }
    },
    {
      id: 'ru_lesson_8',
      lang: 'ru',
      level: 'B1',
      number: 8,
      title: 'Глаголы движения (Идти vs Ехать) и Деловая речь',
      goal: 'Piyoda (идти/ходить) va transportda (ехать/ездить) harakatlanish, rasmiy muloqot.',
      theory: {
        introUz: 'Rus tilida harakat fe’llari harakatning yo‘nalishi va transportiga qarab qat’iy farqlanadi:',
        rules: [
          { pattern: 'Идти (hozir piyoda)', pronunciation: 'bir yo‘nalishda', exampleDe: 'Я сейчас иду на работу пешком.', exampleUz: 'Hozir ishga piyoda ketyapman.' },
          { pattern: 'Ходить (doimiy piyoda)', pronunciation: 'odat tusidagi harakat', exampleDe: 'Я каждый день хожу в школу.', exampleUz: 'Har kuni maktabga piyoda boraman.' },
          { pattern: 'Ехать / Ездить', pronunciation: 'transport bilan', exampleDe: 'Мы едем на машине. Я часто езжу на метро.', exampleUz: 'Mashinada ketyapmiz. Metroda ko‘p yuraman.' }
        ],
        table: [
          { de: 'Куда вы идёте?', uz: 'Qayerga ketyapsiz? (piyoda)' },
          { de: 'Куда вы едете?', uz: 'Qayerga ketyapsiz? (transportda)' },
          { de: 'С уважением, ...', uz: 'Hurmat bilan (rasmiy xat yakuni)' },
          { de: 'Я хотел бы обсудить проект.', uz: 'Loyiha haqida muhokama qilmoqchi edim.' }
        ]
      },
      exercises: [
        {
          id: 'ru_ex8_1',
          type: 'multiple-choice',
          question: '"Мы сейчас ______ на поезде в Самарканд." (transportda bir yo‘nalish):',
          options: ['идём', 'едем', 'ходим', 'ездим'],
          correctIndex: 1,
          explanation: 'Poezdda harakatlanayotganda "ехать" (мы едем) fe’li ishlatiladi.'
        },
        {
          id: 'ru_ex8_2',
          type: 'fill-blank',
          question: 'Я каждый день ______ в спортзал пешком. (ходить -> я хожу)',
          placeholder: 'хожу...',
          correctAnswer: 'хожу',
          hint: 'хожу'
        }
      ],
      speakingPrompt: {
        textDe: 'Я хотел бы назначить деловую встречу на следующую неделю.',
        textUz: 'Men kelasi haftaga rasmiy ishchi uchrashuv belgilamoqchi edim.',
        tip: 'Назначить [naznachit\'] so‘zini aniq talaffuz qiling.'
      },
      kulturtip: {
        title: '🇷🇺 Деловая переписка (Ishchi yozishmalar)',
        text: 'Rasmiy yozishmalarda xat doimo "Уважаемый/Уважаемая..." deb boshlanadi va oxirida "С уважением, [Ism Familiya]" deb imzolanadi.'
      },
      listening: {
        title: '🎧 Аудирование (Tinglab tushunish)',
        audioText: 'Завтра утром я еду в аэропорт, чтобы встретить наших зарубежных партнёров.',
        question: 'U ertaga ertalab aeroportga nima uchun boryapti?',
        options: ['O‘zi uchib ketish uchun', 'Xorijiy hamkorlarni kutib olish uchun', 'Chipta olish uchun'],
        correctIndex: 1
      }
    }
  ],

  // ------------------------------------------------------------------
  // 🇰🇷 KOREAN (한국어) LESSONS (TOPIK Standarti)
  // ------------------------------------------------------------------
  ko: [
    {
      id: 'ko_lesson_1',
      lang: 'ko',
      level: 'A1',
      number: 1,
      title: 'Hangeul (한글) Alifbosi va Salomlashish',
      goal: 'Dunyoning eng mukammal alifbosi Hangeul unli va undoshlari, birinchi salomlashish.',
      theory: {
        introUz: 'Koreys alifbosi Hangeul (한글) 1443 yilda qirol Sejong tomonidan yaratilgan bo‘lib, o‘rganish juda oson:',
        rules: [
          { pattern: 'Asosiy unlilar', pronunciation: 'ㅏ (a), ㅓ (o), ㅗ (o\'), ㅜ (u), ㅡ (i), ㅣ (i)', exampleDe: '아이 [ai] (bola), 오이 [oi] (bodring)', exampleUz: 'bola, bodring' },
          { pattern: 'Asosiy undoshlar', pronunciation: 'ㄱ (k/g), ㄴ (n), ㄷ (t/d), ㄹ (r/l), ㅁ (m), ㅂ (p/b), ㅅ (s), ㅇ (ng)', exampleDe: '나무 [namu] (daraxt)', exampleUz: 'daraxt' },
          { pattern: 'So‘z tuzilishi', pronunciation: 'Harflar bo‘g‘in qilib to‘rtburchak bloklarga yig‘iladi', exampleDe: '한 (han) + 글 (geul) = 한글', exampleUz: 'Hangeul' }
        ],
        table: [
          { de: '안녕하세요', uz: 'Assalomu alaykum / Salom (Annyeonghaseyo)' },
          { de: '감사합니다', uz: 'Katta rahmat (Gamsahamnida)' },
          { de: '죄송합니다', uz: 'Kechirasiz / Uzr (Joesonghamnida)' },
          { de: '네', uz: 'Ha (Ne)' },
          { de: '아니요', uz: 'Yo‘q (Aniyo)' },
          { de: '안녕히 가세요', uz: 'Yaxshi boring (ketayotganga)' },
          { de: '안녕히 계세요', uz: 'Yaxshi qoling (qolayotganga)' }
        ]
      },
      exercises: [
        {
          id: 'ko_ex1_1',
          type: 'multiple-choice',
          question: 'Koreyscha "Assalomu alaykum" qanday aytiladi?',
          options: ['감사합니다', '안녕하세요', '죄송합니다', '네'],
          correctIndex: 1,
          explanation: '안녕하세요 [Annyeonghaseyo] — eng universal salomlashish ifodasi.'
        },
        {
          id: 'ko_ex1_2',
          type: 'multiple-choice',
          question: 'Birov sizga yordam bersa, qanday minnatdorchilik bildirasiz?',
          options: ['감사합니다', '안녕히 가세요', '아니요'],
          correctIndex: 0,
          explanation: '감사합니다 [Gamsahamnida] — Rahmat.'
        }
      ],
      speakingPrompt: {
        textDe: '안녕하세요! 만나서 반갑습니다.',
        textUz: 'Salom! Tanishganimdan xursandman (Annyeonghaseyo! Mannaseo bangapseumnida).',
        tip: 'Koreys tilida gapirganda boshni yengil egib salom berish hurmat belgisidir.'
      },
      kulturtip: {
        title: '🇰🇷 Bowing (Ta’zim qilish odobi)',
        text: 'Koreyada salomlashganda yoki minnatdorchilik bildirganda 15-30 daraja ta’zim qilinadi. Bu kishiga bo‘lgan chuqur hurmatni ko‘rsatadi.'
      },
      listening: {
        title: '🎧 듣기 (Tinglab tushunish)',
        audioText: '안녕하세요! 감사합니다.',
        question: 'Koreyscha audio nima dedi?',
        options: ['Xayr dedi', 'Salom va Rahmat dedi', 'Kechirasiz dedi'],
        correctIndex: 1
      }
    },
    {
      id: 'ko_lesson_2',
      lang: 'ko',
      level: 'A1',
      number: 2,
      title: 'O‘zini tanishtirish va 이에요 / 예요 (Bo‘lmoq)',
      goal: 'Ism va kasbni aytish. Koreys tilida gap oxirida keladigan hurmat qo‘shimchalari.',
      theory: {
        introUz: 'Koreys tilida fe’l doimo GAP OXIRIDA keladi (o‘zbek tilidek!). Ism aytish uchun:',
        rules: [
          { pattern: '저는 ...입니다', pronunciation: 'Men ...man (rasmiy hurmat shakli)', exampleDe: '저는 안вар입니다.', exampleUz: 'Men Anvarman.' },
          { pattern: '이에요 / 예요', pronunciation: 'Otga qo‘shiladigan "bo‘lmoq" qo‘shimchasi', exampleDe: '학생이에요 (talabaman), 의사예요 (shifokorman)', exampleUz: 'talabaman, shifokorman' },
          { pattern: 'Undoshga tugasa', pronunciation: '이에요 qo‘shiladi', exampleDe: '선생님 + 이에요 = 선생님이에요', exampleUz: 'o‘qituvchiman' },
          { pattern: 'Unliga tugasa', pronunciation: '예요 qo‘shiladi', exampleDe: '의사 + 예요 = 의사예요', exampleUz: 'shifokorman' }
        ],
        table: [
          { de: '저는 우즈베키스탄 사람이에요.', uz: 'Men O‘zbekistonlikman.' },
          { de: '저는 학생이에요.', uz: 'Men talabaman.' },
          { de: '이름이 뭐예요?', uz: 'Ismingiz nima?' },
          { de: '제 이름은 ...예요.', uz: 'Mening ismim ...' }
        ]
      },
      exercises: [
        {
          id: 'ko_ex2_1',
          type: 'multiple-choice',
          question: '"Men talabaman" koreyscha qanday bo‘ladi? (학생 = talaba / undoshga tugaydi)',
          options: ['저는 학생이에요.', '저는 학생예요.', '저는 학생입니다예요.'],
          correctIndex: 0,
          explanation: '학생 so‘zi undosh (ㅇ) bilan tugagani uchun "이에요" qo‘shiladi.'
        },
        {
          id: 'ko_ex2_2',
          type: 'fill-blank',
          question: '저는 우즈베키스탄 사람______ (Men o‘zbekistonlikman - 사람 undoshga tugaydi)',
          placeholder: '이에요 yoki 예요...',
          correctAnswer: '이에요',
          hint: '이에요'
        }
      ],
      speakingPrompt: {
        textDe: '저는 우즈베키스탄 사람이에요. 한국어를 배워요.',
        textUz: 'Men O‘zbekistonlikman. Koreys tilini o‘rganayapman.',
        tip: 'Koreyscha talaffuzni tinglab ohangiga mos ayting.'
      },
      kulturtip: {
        title: '🇰🇷 Yosh va Martaba (Hurmat tili)',
        text: 'Koreyada insonlar tanishganda darhol yoshini so‘rashadi. Bu qiziquvchanlik emas, balki qaysi hurmat darajasida gapirishni aniqlash uchundir!'
      },
      listening: {
        title: '🎧 듣기 (Tinglab tushunish)',
        audioText: '저는 학생이에요. 한국어를 좋아해요.',
        question: 'U kim va nimani yoqtiradi?',
        options: ['O‘qituvchi', 'Talaba va u koreys tilini yoqtiradi', 'Shifokor'],
        correctIndex: 1
      }
    },
    {
      id: 'ko_lesson_3',
      lang: 'ko',
      level: 'A1',
      number: 3,
      title: 'Ko‘rsatish olmoshlari (이, 그, 저) va Joylar (여기, 저기)',
      goal: 'Yaqin va uzoqdagi narsalarni ko‘rsatish: 이것, 그것, 저것 va joylar: 여기, 저기, 어디.',
      theory: {
        introUz: 'Koreys tilida narsalarni ko‘rsatish 3 ta masofaga bo‘linadi:',
        rules: [
          { pattern: '이 (i) / 이것 (igeot)', pronunciation: 'Bu narsa (gapiruvchiga yaqin)', exampleDe: '이것은 책이에요.', exampleUz: 'Bu kitob.' },
          { pattern: '그 (geu) / 그것 (geugeot)', pronunciation: 'U narsa (tinglovchiga yaqin)', exampleDe: '그것은 시계예요.', exampleUz: 'U soat.' },
          { pattern: '저 (jeo) / 저것 (jeogeot)', pronunciation: 'Anavi narsa (ikkalasidan ham uzoqda)', exampleDe: '저것은 가방이에요.', exampleUz: 'Anavi sumka.' },
          { pattern: '여기 / 저기 / 어디', pronunciation: 'Bu yer / Anavi yer / Qayer', exampleDe: '여기가 화장실이에요.', exampleUz: 'Bu yer hojatxona.' }
        ],
        table: [
          { de: '이게 뭐예요?', uz: 'Bu nima? (og‘zaki ixcham shakli)' },
          { de: '화장실이 어디예요?', uz: 'Hojatxona qayerda?' },
          { de: '여기가 우리 학교예요.', uz: 'Bu yer bizning maktabimiz.' },
          { de: '저것은 제 컴퓨터예요.', uz: 'Anavi mening kompyuterim.' }
        ]
      },
      exercises: [
        {
          id: 'ko_ex3_1',
          type: 'multiple-choice',
          question: '"Bu nima?" koreyscha qanday so‘raladi?',
          options: ['이게 뭐예요?', '어디예요?', '누구예요?', '얼마예요?'],
          correctIndex: 0,
          explanation: '"이게 뭐예요?" — Bu nima?'
        },
        {
          id: 'ko_ex3_2',
          type: 'fill-blank',
          question: '화장실이 ______ 예요? (Hojatxona qayerda?)',
          placeholder: '어디 yoki 여기...',
          correctAnswer: '어디',
          hint: '어디 (qayer)'
        }
      ],
      speakingPrompt: {
        textDe: '실례합니다, 여기가 어디예요?',
        textUz: 'Kechirasiz, bu yer qayer? [Sillyehamnida, yeogiga eodiyeyo?]',
        tip: '실례합니다 [sillyehamnida] — uzr/kechirasiz.'
      },
      kulturtip: {
        title: '🇰🇷 O‘ng qo‘l odobi',
        text: 'Koreyada buyum, karta yoki pul berganda va olganda ikki qo‘llab yoki o‘ng qo‘l tirsagini chap qo‘l bilan ushlab uzatiladi. Bu kishiga hurmat ifodasidir.'
      },
      listening: {
        title: '🎧 듣기 (Tinglab tushunish)',
        audioText: '저기요, 지하철역이 어디예요? — 저기 있어요.',
        question: 'U nimani so‘radi?',
        options: ['Restoran qayerdaligini', 'Metro bekati qayerdaligini', 'Do‘kon qayerdaligini'],
        correctIndex: 1
      }
    },
    {
      id: 'ko_lesson_4',
      lang: 'ko',
      level: 'A1',
      number: 4,
      title: 'Kundalik fe’llar va -아요 / -어요 tuslanishi',
      goal: 'Koreys tilining eng mashhur hozirgi zamon hurmat fe’l tuslanishi: -아요 / -어요.',
      theory: {
        introUz: 'Koreys tilida fe’llar lug‘atda -다 bilan tugaydi (가다, 오다, 먹다). Gapda -아요 yoki -어요 qo‘shiladi:',
        rules: [
          { pattern: 'Asosda ㅏ yoki ㅗ bo‘lsa', pronunciation: '-아요 qo‘shiladi', exampleDe: '가다 → 가요 (boraman), 오다 → 와요 (kelaman)', exampleUz: 'boraman, kelaman' },
          { pattern: 'Boshqa unlilar bo‘lsa', pronunciation: '-어요 qo‘shiladi', exampleDe: '먹다 → 먹어요 (yeyman), 마시다 → 마셔요 (ichaman)', exampleUz: 'yeyman, ichaman' },
          { pattern: '하다 (bajarmoq) fe’li', pronunciation: '해요 ga aylanadi', exampleDe: '공부하다 → 공부해요 (dars qilaman), 일하다 → 일해요 (ishlayman)', exampleUz: 'o‘qiyman, ishlayman' }
        ],
        table: [
          { de: '저는 지금 학교에 가요.', uz: 'Men hozir maktabga boryapman.' },
          { de: '밥을 맛있게 먹어요.', uz: 'Ovqat yeyapman.' },
          { de: '커피를 마셔요.', uz: 'Qahva ichyapman.' },
          { de: '한국어를 열심히 공부해요.', uz: 'Koreys tilini tirishqoqlik bilan o‘rganyapman.' }
        ]
      },
      exercises: [
        {
          id: 'ko_ex4_1',
          type: 'multiple-choice',
          question: '"먹다" (yemoq) fe’li -어요 shaklida qanday bo‘ladi?',
          options: ['먹어요', '먹아요', '먹해요', '먹습니다요'],
          correctIndex: 0,
          explanation: '먹 fe’l asosida ㅓ bo‘lgani uchun -어요 qo‘shilib "먹어요" bo‘ladi.'
        },
        {
          id: 'ko_ex4_2',
          type: 'fill-blank',
          question: '저는 매일 한국어를 공부______ (공부하다 -> hozirgi zamon)',
          placeholder: '해요 yoki 가요...',
          correctAnswer: '해요',
          hint: '하다 -> 해요'
        }
      ],
      speakingPrompt: {
        textDe: '저는 매일 아침 따뜻한 커피를 마셔요.',
        textUz: 'Men har tong issiq qahva ichaman.',
        tip: '따뜻한 [ttatteutan] — issiq.'
      },
      kulturtip: {
        title: '🇰🇷 식사하셨어요? (Ovqatlandingizmi?)',
        text: 'Koreyslar "Ahvolingiz qanday?" o‘rniga ko‘pincha "식사하셨어요?" (Ovqatlandingizmi?) deb so‘rashadi. Bu insonning salomatligi va farovonligiga g‘amxo‘rlik ifodasidir.'
      },
      listening: {
        title: '🎧 듣기 (Tinglab tushunish)',
        audioText: '오늘 뭐 해요? — 친구를 만나요 그리고 영화를 봐요.',
        question: 'U bugun nima qilmoqchi?',
        options: ['Uyda uxlamoqchi', 'Do‘sti bilan uchrashib film ko‘rmoqchi', 'Kasalxonaga bormoqchi'],
        correctIndex: 1
      }
    },
    {
      id: 'ko_lesson_5',
      lang: 'ko',
      level: 'A1',
      number: 5,
      title: 'Raqamlar (Sino vs Native), Narx va ...주세요',
      goal: 'Koreys tilidagi 2 xil raqamlar tizimi, narx so‘rash va buyurtma berish.',
      theory: {
        introUz: 'Koreys tilida 2 xil raqamlar ishlatiladi: Sino-koreys (pul, sana, daqiqa) va Asl koreys (soat, dona sanash):',
        rules: [
          { pattern: 'Sino-koreys (pul, minut)', pronunciation: '일 (1), 이 (2), 삼 (3), 사 (4), 오 (5), 십 (10), 백 (100), 천 (1000), 만 (10,000)', exampleDe: '천 원 [cheon won] = 1000 von', exampleUz: '1000 von, 5 daqiqa...' },
          { pattern: 'Asl koreys (dona, soat)', pronunciation: '하나 (1), 둘 (2), 셋 (3), 넷 (4), 다섯 (5)', exampleDe: '한 개 (bitta), 두 개 (ikkita)', exampleUz: '1 dona, 2 dona...' },
          { pattern: '...주세요 [juseyo]', pronunciation: '...bering (iltimos)', exampleDe: '물 좀 주세요 (suv bering), 커피 두 잔 주세요', exampleUz: 'suv bering, 2 ta kofe bering' }
        ],
        table: [
          { de: '이거 얼마예요?', uz: 'Bu qancha turadi?' },
          { de: '오천 원이에요.', uz: '5000 von.' },
          { de: '사과 세 개 주세요.', uz: '3 dona olma bering.' },
          { de: '카드 돼요?', uz: 'Karta o‘tadimi?' }
        ]
      },
      exercises: [
        {
          id: 'ko_ex5_1',
          type: 'multiple-choice',
          question: '"Bu qancha turadi?" koreyscha qanday aytiladi?',
          options: ['이거 얼마예요?', '이게 뭐예요?', '어디 가요?', '누구예요?'],
          correctIndex: 0,
          explanation: '"얼마예요?" — narx so‘rash ifodasi.'
        },
        {
          id: 'ko_ex5_2',
          type: 'fill-blank',
          question: '아메리카노 한 잔 ______ (iltimos, bir chashka amerikano bering).',
          placeholder: '주세요...',
          correctAnswer: '주세요',
          hint: '주세요'
        }
      ],
      speakingPrompt: {
        textDe: '사장님, 물하고 밥 좀 더 주세요.',
        textUz: 'Xo‘jayin, suv va ozgina guruch keltirib bering, iltimos.',
        tip: '사장님 [sajangnim] — korxona rahbari yoki oshxona egasiga murojaat.'
      },
      kulturtip: {
        title: '🇰🇷 Von (Koreya milliy valyutasi)',
        text: 'Janubiy Koreyada valyuta "Won" (원) deb ataladi. Mayda tangalar kam ishlatiladi, deyarli hamma joyda (hatto taksida ham) plastik karta orqali to‘lanadi.'
      },
      listening: {
        title: '🎧 듣기 (Tinglab tushunish)',
        audioText: '사과 한 개에 천 원이에요. 세 개 드릴까요?',
        question: 'Olma donasi qancha ekan va u nechta taklif qildi?',
        options: ['100 von, 1 ta', '1000 von, 3 ta', '5000 von, 10 ta'],
        correctIndex: 1
      }
    },
    {
      id: 'ko_lesson_6',
      lang: 'ko',
      level: 'A2',
      number: 6,
      title: 'O‘tgan zamon: -았/었어요 va Joy qo‘shimchasi -에서',
      goal: 'O‘tgan harakatlarni ifodalash (-았/었어요) va ish-harakat bajariladigan joy (-에서).',
      theory: {
        introUz: 'Koreys tilida o‘tgan zamon fe’l asosiga qarab -았어요 yoki -었어요 qo‘shish orqali yasaladi:',
        rules: [
          { pattern: 'Asosda ㅏ yoki ㅗ bo‘lsa', pronunciation: '-았어요 qo‘shiladi', exampleDe: '가다 → 갔어요 (bordim), 오다 → 왔어요 (keldim)', exampleUz: 'bordim, keldim' },
          { pattern: 'Boshqa unlilar bo‘lsa', pronunciation: '-었어요 qo‘shiladi', exampleDe: '먹다 → 먹었어요 (yedim), 마시다 → 마셨어요 (ichdim)', exampleUz: 'yedim, ichdim' },
          { pattern: '-에서 (joyda)', pronunciation: 'harakat sodir bo‘ladigan joy', exampleDe: '도서관에서 공부했어요 (kutubxonada o‘qidim)', exampleUz: 'kutubxonada, uyda, ishda' }
        ],
        table: [
          { de: '어제 뭐 했어요?', uz: 'Kecha nima qildingiz?' },
          { de: '집에서 쉬었어요.', uz: 'Uyda dam oldim.' },
          { de: '식당에서 친구를 만났어요.', uz: 'Oshxonada do‘stim bilan uchrashdim.' },
          { de: '한국 드라마를 봤어요.', uz: 'Koreys dramasini ko‘rdim.' }
        ]
      },
      exercises: [
        {
          id: 'ko_ex6_1',
          type: 'multiple-choice',
          question: '"Kecha kitob o‘qidim" (읽다 fe’li) o‘tgan zamonda qanday bo‘ladi?',
          options: ['읽었어요', '읽았어요', '읽해요', '읽겠어요'],
          correctIndex: 0,
          explanation: '"읽다" fe’l asosida ㅣ (boshqa unli) bo‘lgani uchun -었어요 qo‘shiladi: 읽었어요.'
        },
        {
          id: 'ko_ex6_2',
          type: 'fill-blank',
          question: '저는 어제 한국 식당______ 불고기를 먹었어요. (restoranda - joy qo‘shimchasi)',
          placeholder: '에서 yoki 에...',
          correctAnswer: '에서',
          hint: '에서'
        }
      ],
      speakingPrompt: {
        textDe: '어제 한국인 친구하고 같이 한국 음식을 먹었어요.',
        textUz: 'Kecha koreys do‘stim bilan birga koreys taomini yedim.',
        tip: '음식을 [eumsigeul] ravon ayting.'
      },
      kulturtip: {
        title: '🇰🇷 Koreys taomlari (한식)',
        text: 'Koreys taomlarining ajralmas qismi — Kimchi (김치). Koreyada deyarli har bir uyda kimchi saqlash uchun maxsus maxsus muzlatkichlar bo‘ladi.'
      },
      listening: {
        title: '🎧 듣기 (Tinglab tushunish)',
        audioText: '주말에 뭐 했어요? — 백화점에서 옷을 샀어요.',
        question: 'U dam olish kunida nima qildi?',
        options: ['Kinoga bordi', 'Universamda kiyim sotib oldi', 'Uyda uxladi'],
        correctIndex: 1
      }
    },
    {
      id: 'ko_lesson_7',
      lang: 'ko',
      level: 'A2',
      number: 7,
      title: 'Iltimos va taklif: -(으)세요 va -(으)ㄹ까요?',
      goal: 'Xushmuomala iltimos qilish (-(으)세요) va birgalikda biror ish qilishni taklif etish (-(으)ㄹ까요?).',
      theory: {
        introUz: 'Kundalik muloqotda buyruq berish o‘rniga hurmat bilan iltimos qilish va taklif bildirish qoidalari:',
        rules: [
          { pattern: '-(으)세요 (bajar-ing)', pronunciation: 'hurmatli iltimos', exampleDe: '앉으세요 (o‘tiring), 기다리세요 (kuting)', exampleUz: 'o‘tiring, kuting, kiring' },
          { pattern: '-(으)ㄹ까요? (qilaylikmi?)', pronunciation: 'birgalikda taklif', exampleDe: '같이 밥 먹을까요? (birga ovqatlanaylikmi?)', exampleUz: 'ovqatlanaylikmi?, boraylikmi?' },
          { pattern: '좋아요 (yaxshi / mayli)', pronunciation: 'taklifga ijobiy javob', exampleDe: '네, 좋아요! (Ha, ajoyib!)', exampleUz: 'ha, mayli' }
        ],
        table: [
          { de: '여기에 이름을 쓰세요.', uz: 'Bu yerga ismingizni yozing.' },
          { de: '조금만 기다려 주세요.', uz: 'Ozgina kutib turing, iltimos.' },
          { de: '내일 몇 시에 만날까요?', uz: 'Ertaga soat nechada uchrashamiz?' },
          { de: '커피 한 잔 마실까요?', uz: 'Bir piyola kofe ichamizmi?' }
        ]
      },
      exercises: [
        {
          id: 'ko_ex7_1',
          type: 'multiple-choice',
          question: '"Iltimos, bu yerga o‘tiring" (앉다 fe’li / undoshga tugaydi):',
          options: ['앉으세요', '앉세요', '앉아요요', '앉었어요'],
          correctIndex: 0,
          explanation: '"앉다" undosh bilan tugagani uchun "-으세요" qo‘shilib "앉으세요" bo‘ladi.'
        },
        {
          id: 'ko_ex7_2',
          type: 'fill-blank',
          question: '우리 내일 영화를 ______? (ko‘ramizmi? - 보다 fe’li)',
          placeholder: '볼까요 yoki 봐요...',
          correctAnswer: '볼까요',
          hint: '볼까요'
        }
      ],
      speakingPrompt: {
        textDe: '시간이 있으면 오늘 저녁에 같이 영화 볼까요?',
        textUz: 'Vaqtingiz bo‘lsa, bugun kechqurun birga film ko‘ramizmi?',
        tip: '저녁에 [jeonyeoge] ravon o‘qiladi.'
      },
      kulturtip: {
        title: '🇰🇷 Dutch Pay (Nppang - N빵)',
        text: 'Zamonaviy Janubiy Koreya yoshlari orasida restoranda hisobni teng bo‘lib to‘lash odati keng tarqalgan (buni "Datchi pei" yoki "N-ppang" deyishadi).'
      },
      listening: {
        title: '🎧 듣기 (Tinglab tushunish)',
        audioText: '오늘 날씨가 너무 좋아요. 공원에 갈까요? — 네, 좋아요!',
        question: 'Ular qayerga borishga kelishib olishdi?',
        options: ['Kutubxonaga', 'Bog‘ga (공원)', 'Kasalxonaga'],
        correctIndex: 1
      }
    },
    {
      id: 'ko_lesson_8',
      lang: 'ko',
      level: 'B1',
      number: 8,
      title: 'Bog‘lovchilar: -지만 (ammo) va Sabab: -(으)니까 (chunki)',
      goal: 'Murakkab gaplar tuzish, qarama-qarshilik (-지만) va sabab-natija (-(으)니까) grammatikasi.',
      theory: {
        introUz: 'TOPIK va erkin muloqot uchun zarur bo‘lgan eng mashhur bog‘lovchi qo‘shimchalar:',
        rules: [
          { pattern: '-지만 (lekin / ammo)', pronunciation: 'qarama-qarshi fikr', exampleDe: '한국어는 어렵지만 재미있어요.', exampleUz: 'Koreys tili qiyin, lekin juda qiziqarli.' },
          { pattern: '-(으)니까 (chunki / ...sababli)', pronunciation: 'sabab va taklif', exampleDe: '비가 오니까 우산을 쓰세요.', exampleUz: 'Yomg‘ir yog‘yapti, shuning uchun soyabondan foydalaning.' },
          { pattern: '-(으)면 (agar)', pronunciation: 'shart mayli', exampleDe: '시간이 있으면 연락하세요.', exampleUz: 'Vaqtingiz bo‘lsa, aloqaga chiqing.' }
        ],
        table: [
          { de: '바쁘지만 갈게요.', uz: 'Bandman, lekin boraman.' },
          { de: '날씨가 추우니까 따뜻하게 입으세요.', uz: 'Havo sovuq, shuning uchun issiq kiyining.' },
          { de: '모르면 질문하세요.', uz: 'Bilmasangiz, savol bering.' },
          { de: '한국에서 일하고 싶어요.', uz: 'Koreyada ishlamoqchiman.' }
        ]
      },
      exercises: [
        {
          id: 'ko_ex8_1',
          type: 'multiple-choice',
          question: '"Bu taom achchiq, lekin mazali" koreyscha qanday bo‘ladi?',
          options: ['맵지만 맛있어요', '매우니까 맛있어요', '매우면 맛있어요', '맵고 맛있어요'],
          correctIndex: 0,
          explanation: '"맵다" (achchiq) + "-지만" (lekin) = 맵지만 맛있어요.'
        },
        {
          id: 'ko_ex8_2',
          type: 'fill-blank',
          question: '지금 바쁘______ 나중에 전화해 주세요. (chunki / sababli)',
          placeholder: '니까...',
          correctAnswer: '니까',
          hint: '니까'
        }
      ],
      speakingPrompt: {
        textDe: '한국어 공부는 어렵지만 매일 열심히 하면 잘할 수 있어요.',
        textUz: 'Koreys tilini o‘rganish qiyin bo‘lishi mumkin, ammo har kuni astoydil harakat qilsangiz, albatta uddalaysiz.',
        tip: '잘할 수 있어요 [jal-hal su isseoyo] — uddalay olasiz.'
      },
      kulturtip: {
        title: '🇰🇷 EPS-TOPIK & GKS Grantlari',
        text: 'Janubiy Koreyada qonuniy ishlash (E-9 vizasi) uchun EPS-TOPIK imtihonidan o‘tish kerak. Universitetlarda 100% bepul o‘qish uchun esa GKS (Global Korea Scholarship) davlat granti mavjud.'
      },
      listening: {
        title: '🎧 듣기 (Tinglab tushunish)',
        audioText: '한국에서 대학교에 가고 싶어서 매일 네 시간씩 한국어를 열심히 공부하고 있어요.',
        question: 'U nima maqsadda har kuni 4 soatdan koreys tilini o‘rganyapti?',
        options: ['Sayohat qilish uchun', 'Koreyada universitetga kirish uchun', 'Kino ko‘rish uchun'],
        correctIndex: 1
      }
    }
  ],

  // Diagnostic questions database across languages (10 comprehensive questions each)
  diagnosticQuestions: {
    de: [
      { phase: 1, level: 'A1', category: 'Vocabulary', question: '"Guten Abend" iborasining ma’nosi nima?', options: ['Xayrli tong', 'Xayrli kech', 'Xayrli kun', 'Xayrli tun'], correctIndex: 1 },
      { phase: 1, level: 'A1', category: 'Pronunciation', question: '"nein" so‘zida "ei" birikmasi qanday o‘qiladi?', options: ['ey', 'ayn', 'iin', 'on'], correctIndex: 1 },
      { phase: 1, level: 'A1', category: 'Articles', question: '"das Haus" so‘zining artikli va jinsi qaysi?', options: ['der (maskulin)', 'die (feminin)', 'das (neutrum)', 'den (akkusativ)'], correctIndex: 2 },
      { phase: 2, level: 'A1', category: 'Grammar', question: '"Wir ______ Deutsch in der Schule." to‘g‘ri fe’l shakli:', options: ['lerne', 'lernst', 'lernt', 'lernen'], correctIndex: 3 },
      { phase: 2, level: 'A1', category: 'Conjugation', question: '"sein" fe’lining "du" shakli qaysi?', options: ['bist', 'bin', 'ist', 'sind'], correctIndex: 0 },
      { phase: 2, level: 'A2', category: 'Modal Verbs', question: '"Ich ______ heute leider nicht kommen (kela olmayman).":', options: ['kann', 'muss', 'will', 'darf'], correctIndex: 0 },
      { phase: 3, level: 'A2', category: 'Akkusativ', question: '"Ich kaufe ______ Tisch (stol - der Tisch).":', options: ['den', 'der', 'die', 'das'], correctIndex: 0 },
      { phase: 3, level: 'A2', category: 'Tenses', question: 'Perfekt zamon: "Gestern habe ich einen Film ______."', options: ['sehen', 'gesehen', 'sah', 'sieht'], correctIndex: 1 },
      { phase: 4, level: 'B1', category: 'Prepositions', question: '"Ich fahre ______ dem Bus zur Arbeit (avtobus bilan).":', options: ['mit', 'nach', 'zu', 'von'], correctIndex: 0 },
      { phase: 4, level: 'B1', category: 'Subordinate Clauses', question: '"Ich lerne Deutsch, ______ ich in Deutschland studieren möchte (chunki).":', options: ['weil', 'denn', 'dass', 'obwohl'], correctIndex: 0 }
    ],
    en: [
      { phase: 1, level: 'A1', category: 'Vocabulary', question: '"Good evening" nimani anglatadi?', options: ['Xayrli tong', 'Xayrli kech', 'Xayrli tun', 'Xayrli kun'], correctIndex: 1 },
      { phase: 1, level: 'A1', category: 'Grammar', question: '"She ______ from London." to‘g‘ri fe’l:', options: ['am', 'is', 'are', 'be'], correctIndex: 1 },
      { phase: 1, level: 'A1', category: 'Plural', question: '"child" (bola) so‘zining to‘g‘ri ko‘plik shakli:', options: ['childs', 'children', 'childrens', 'childes'], correctIndex: 1 },
      { phase: 2, level: 'A1', category: 'Present Simple', question: '"My brother ______ in a software company.":', options: ['work', 'works', 'working', 'worked'], correctIndex: 1 },
      { phase: 2, level: 'A1', category: 'Wh-Questions', question: '"______ is your favourite teacher?" (Kim):', options: ['What', 'Who', 'Where', 'When'], correctIndex: 1 },
      { phase: 2, level: 'A2', category: 'Past Simple', question: 'Past Simple: "Yesterday I ______ to school."', options: ['go', 'went', 'gone', 'going'], correctIndex: 1 },
      { phase: 3, level: 'A2', category: 'Comparison', question: '"An airplane is ______ than a car.":', options: ['faster', 'fastest', 'more fast', 'fast'], correctIndex: 0 },
      { phase: 3, level: 'B1', category: 'Modal Verbs', question: '"You ______ wear a seatbelt while driving."', options: ['must', 'might', 'could', 'may'], correctIndex: 0 },
      { phase: 4, level: 'B1', category: 'Present Perfect', question: '"I have never ______ to Japan.":', options: ['be', 'been', 'was', 'being'], correctIndex: 1 },
      { phase: 4, level: 'B1', category: 'Conditionals', question: '"If it rains tomorrow, we ______ at home.":', options: ['will stay', 'stay', 'stayed', 'would stay'], correctIndex: 0 }
    ],
    ru: [
      { phase: 1, level: 'A1', category: 'Vocabulary', question: '"Доброе утро" ma’nosi nima?', options: ['Xayrli tong', 'Xayrli kun', 'Xayrli kech', 'Xayrli tun'], correctIndex: 0 },
      { phase: 1, level: 'A1', category: 'Grammar', question: '"Машина" qaysi jinsga mansub?', options: ['Мужской род', 'Женский род', 'Средний род'], correctIndex: 1 },
      { phase: 1, level: 'A1', category: 'Pronouns', question: '"Это ______ книга (mening kitobim).":', options: ['мой', 'моя', 'моё', 'мои'], correctIndex: 1 },
      { phase: 2, level: 'A1', category: 'Grammar', question: '"Я часто ______ книги." (читать fe’lini qo‘ying):', options: ['читаю', 'читаешь', 'читает', 'читаем'], correctIndex: 0 },
      { phase: 2, level: 'A1', category: 'Plural', question: '"Город" so‘zining to‘g‘ri ko‘pligi:', options: ['города', 'городы', 'городе', 'городов'], correctIndex: 0 },
      { phase: 2, level: 'A2', category: 'Past Tense', question: '"Вчера Анна ______ в библиотеке (ishladi).":', options: ['работал', 'работала', 'работало', 'работали'], correctIndex: 1 },
      { phase: 3, level: 'A2', category: 'Prepositions', question: '"Мы живём ______ Ташкенте.":', options: ['в', 'на', 'с', 'из'], correctIndex: 0 },
      { phase: 3, level: 'B1', category: 'Cases', question: '"Я подарил цветы ______ (мама - Dativ):"', options: ['маму', 'маме', 'мамой', 'мама'], correctIndex: 1 },
      { phase: 4, level: 'B1', category: 'Motion Verbs', question: '"Каждое утро я ______ на работу на метро (har kuni qatnayman).":', options: ['езжу', 'еду', 'поеду', 'ходил'], correctIndex: 0 },
      { phase: 4, level: 'B1', category: 'Conjunctions', question: '"Он не пришёл, ______ заболел (chunki).":', options: ['потому что', 'хотя', 'чтобы', 'поэтому'], correctIndex: 0 }
    ],
    ko: [
      { phase: 1, level: 'A1', category: 'Vocabulary', question: 'Koreyscha "감사합니다" nima degani?', options: ['Salom', 'Rahmat', 'Kechirasiz', 'Xayr'], correctIndex: 1 },
      { phase: 1, level: 'A1', category: 'Alphabet', question: '"한글" so‘zining o‘qilishi nima?', options: ['Hangeul', 'Namu', 'Saram', 'Annyeong'], correctIndex: 0 },
      { phase: 1, level: 'A1', category: 'Grammar', question: '"저는 학생______" (talabaman - undoshga tugaydi):', options: ['이에요', '예요', '입니다예요'], correctIndex: 0 },
      { phase: 2, level: 'A1', category: 'Demonstratives', question: '"Bu kitob" koreyscha qanday bo‘ladi?', options: ['이 책', '그 책', '저 책', '어디 책'], correctIndex: 0 },
      { phase: 2, level: 'A1', category: 'Verbs', question: '"가다" (bormoq) fe’lining hozirgi zamon hurmat shakli:', options: ['가요', '와요', '먹어요', '해요'], correctIndex: 0 },
      { phase: 2, level: 'A2', category: 'Particles', question: '"학교______ 가요." (maktabga boraman - yo‘nalish):', options: ['에', '를', '은', '이'], correctIndex: 0 },
      { phase: 3, level: 'A2', category: 'Vocabulary', question: '"한국어를 배워요" nimani anglatadi?', options: ['Koreys tilini o‘rganyapman', 'Ovqat yeyapman', 'Uyga ketyapman'], correctIndex: 0 },
      { phase: 3, level: 'A2', category: 'Negation', question: '"Men koreys tilini bilmayman" inkor shakli:', options: ['한국어를 몰라요', '한국어를 알아요', '한국어를 좋아해요', '한국어를 가요'], correctIndex: 0 },
      { phase: 4, level: 'B1', category: 'Polite Request', question: '"Iltimos, suv bering" iborasi:', options: ['물 좀 주세요', '물 마셔요', '물 있어요', '물 먹어요'], correctIndex: 0 },
      { phase: 4, level: 'B1', category: 'Conjunctions', question: '"Dars qilyapman, shuning uchun bandman" (-아서/어서):', options: ['공부해서 바빠요', '공부하고 바빠요', '공부하지만 바빠요', '공부하면 바빠요'], correctIndex: 0 }
    ]
  }
};
