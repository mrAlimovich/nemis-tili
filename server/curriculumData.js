// Multi-language Curriculum Data (German, English, Russian, Korean)
module.exports = {
  // Supported languages config
  languages: [
    { code: 'de', name: 'Nemis tili', flag: '🇩🇪', speechLang: 'de-DE', nativeName: 'Deutsch' },
    { code: 'en', name: 'Ingliz tili', flag: '🇬🇧', speechLang: 'en-US', nativeName: 'English' },
    { code: 'ru', name: 'Rus tili', flag: '🇷🇺', speechLang: 'ru-RU', nativeName: 'Русский' },
    { code: 'ko', name: 'Koreys tili', flag: '🇰🇷', speechLang: 'ko-KR', nativeName: '한국어' }
  ],

  // ------------------------------------------------------------------
  // 🇩🇪 GERMAN (DEUTSCH) LESSONS
  // ------------------------------------------------------------------
  de: [
    {
      id: 'de_lesson_1',
      lang: 'de',
      level: 'A0/A1',
      number: 1,
      title: 'Talaffuzning 3 siri va Ilk salomlashish',
      goal: 'Nemischa o‘qish qoidalarini anglash, begona va do‘stona salomlashish/xayrlashishni o‘rganish.',
      theory: {
        introUz: 'Nemis tili o‘qilishi bo‘yicha o‘zbek tiliga yaqin — yozilganidek o‘qiladi. Faqat 3 ta qoidani bilsangiz kifoya:',
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
          altAnswers: ['tschüss', 'Tschuess', 'tschuess'],
          hint: 'Chyus deb talaffuz qilinadi'
        }
      ],
      speakingPrompt: {
        textDe: 'Hallo, Guten Tag! Danke schön!',
        textUz: 'Salom, Xayrli kun! Katta rahmat!',
        tip: 'Tugmani bosing va ushbu gapni baland ovozda talaffuz qiling.'
      },
      kulturtip: {
        title: '🇩🇪 Pünktlichkeit (O‘z vaqtida bo‘lish)',
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
        text: 'Kattalarga "Sie" (Siz), tengdosh va do‘stlarga "Du" (Sen) deb murojaat qilinadi.'
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
      title: 'W-Fragen: Nemischa so‘roq so‘zlar va Muloqot',
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
        title: '🇩🇪 Wortzusammensetzung (Qo‘shma so‘zlar)',
        text: 'Nemis tilida bir nechta so‘zni qo‘shib yangi so‘z yasash juda mashhur (masalan, das Haus + die Tür = die Haustür - uy eshigi).'
      },
      listening: {
        title: '🎧 Tinglab tushunish',
        audioText: 'Ich habe ein neues Auto. Das Auto ist sehr schnell.',
        question: 'Unda nima bor?',
        options: ['Yangi velosiped', 'Yangi mashina', 'Yangi kitob'],
        correctIndex: 1
      }
    }
  ],

  // ------------------------------------------------------------------
  // 🇬🇧 ENGLISH LESSONS
  // ------------------------------------------------------------------
  en: [
    {
      id: 'en_lesson_1',
      lang: 'en',
      level: 'A0/A1',
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
    }
  ],

  // ------------------------------------------------------------------
  // 🇷🇺 RUSSIAN (РУССКИЙ) LESSONS
  // ------------------------------------------------------------------
  ru: [
    {
      id: 'ru_lesson_1',
      lang: 'ru',
      level: 'A0/A1',
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
    }
  ],

  // ------------------------------------------------------------------
  // 🇰🇷 KOREAN (한국어) LESSONS
  // ------------------------------------------------------------------
  ko: [
    {
      id: 'ko_lesson_1',
      lang: 'ko',
      level: 'A0/A1',
      number: 1,
      title: 'Hangeul (한글) Alifbosi va Salomlashish',
      goal: 'Dunyoning eng mukammal alifbosi Hangeul unli va undoshlari, birinchi salomlashish.',
      theory: {
        introUz: 'Koreys alifbosi Hangeul (한글) 1443 yilda qirol Sejong tomonidan yaratilgan bo‘lib, o‘rganish juda oson:',
        rules: [
          { pattern: 'Asosiy unlilar', pronunciation: 'ㅏ (a), ㅓ (o), ㅗ (o\'), ㅜ (u), ㅡ (i), ㅣ (i)', exampleDe: '아이 [ai] (bola), 오이 [oi] (bodring)', exampleUz: 'bola, bodring' },
          { pattern: 'Asosiy undoshlar', pronunciation: 'ㄱ (k/g), ㄴ (n), ㄷ (t/d), ㄹ (r/l), ㅁ (m), ㅂ (p/b), ㅅ (s), ㅇ (ng/boshida o‘qilmaydi)', exampleDe: '나무 [namu] (daraxt)', exampleUz: 'daraxt' },
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
    }
  ],

  // Diagnostic questions database across languages
  diagnosticQuestions: {
    de: [
      { phase: 1, level: 'A1', category: 'Vocabulary', question: '"Guten Abend" iborasining ma’nosi nima?', options: ['Xayrli tong', 'Xayrli kun', 'Xayrli kech', 'Xayrli tun'], correctIndex: 2 },
      { phase: 1, level: 'A1', category: 'Pronunciation', question: '"nein" so‘zida "ei" qanday o‘qiladi?', options: ['ey', 'ayn', 'iin', 'on'], correctIndex: 1 },
      { phase: 2, level: 'A1', category: 'Grammar', question: '"Wir ______ Deutsch." to‘g‘ri fe’lni tanlang:', options: ['lerne', 'lernst', 'lernt', 'lernen'], correctIndex: 3 },
      { phase: 3, level: 'A2', category: 'Tenses', question: 'Perfekt zamon: "Gestern habe ich einen Film ______."', options: ['sehen', 'gesehen', 'sah', 'sieht'], correctIndex: 1 }
    ],
    en: [
      { phase: 1, level: 'A1', category: 'Vocabulary', question: '"Good evening" nimani anglatadi?', options: ['Xayrli tong', 'Xayrli kech', 'Xayrli tun', 'Xayrli kun'], correctIndex: 1 },
      { phase: 1, level: 'A1', category: 'Grammar', question: '"She ______ from London." to‘g‘ri fe’l:', options: ['am', 'is', 'are', 'be'], correctIndex: 1 },
      { phase: 2, level: 'A2', category: 'Tenses', question: 'Past Simple: "Yesterday I ______ to school."', options: ['go', 'went', 'gone', 'going'], correctIndex: 1 },
      { phase: 3, level: 'B1', category: 'Modal Verbs', question: '"You ______ wear a seatbelt while driving."', options: ['must', 'might', 'could', 'may'], correctIndex: 0 }
    ],
    ru: [
      { phase: 1, level: 'A1', category: 'Vocabulary', question: '"Доброе утро" ma’nosi nima?', options: ['Xayrli tong', 'Xayrli kun', 'Xayrli kech', 'Xayrli tun'], correctIndex: 0 },
      { phase: 1, level: 'A1', category: 'Grammar', question: '"Машина" qaysi jinsga mansub?', options: ['Мужской род', 'Женский род', 'Средний род'], correctIndex: 1 },
      { phase: 2, level: 'A2', category: 'Grammar', question: '"Я часто ______ книги." (читать fe’lini qo‘ying):', options: ['читаю', 'читаешь', 'читает', 'читаем'], correctIndex: 0 },
      { phase: 3, level: 'B1', category: 'Cases', question: '"Я подарил цветы ______ (мама - Dativ):"', options: ['маму', 'маме', 'мамой', 'мама'], correctIndex: 1 }
    ],
    ko: [
      { phase: 1, level: 'A1', category: 'Vocabulary', question: 'Koreyscha "감사합니다" nima degani?', options: ['Salom', 'Rahmat', 'Kechirasiz', 'Xayr'], correctIndex: 1 },
      { phase: 1, level: 'A1', category: 'Alphabet', question: '"한글" so‘zining o‘qilishi nima?', options: ['Hangeul', 'Namu', 'Saram', 'Annyeong'], correctIndex: 0 },
      { phase: 2, level: 'A1', category: 'Grammar', question: '"저는 학생______" (talabaman - undoshga tugaydi):', options: ['이에요', '예요', '입니다예요'], correctIndex: 0 },
      { phase: 3, level: 'A2', category: 'Vocabulary', question: '"한국어를 배워요" nimani anglatadi?', options: ['Koreys tilini o‘rganyapman', 'Ovqat yeyapman', 'Uyga ketyapman'], correctIndex: 0 }
    ]
  }
};
