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
          { de: 'Sie/sie sind', uz: 'Siz (hurmat) / ular ...dirlar' }
        ]
      },
      exercises: [
        {
          id: 'de_ex2_1',
          type: 'multiple-choice',
          question: '"Men O‘zbekistondanman" nemischa qanday aytiladi?',
          options: ['Ich wohne in Usbekistan.', 'Ich komme aus Usbekistan.', 'Ich bin Usbekistan.'],
          correctIndex: 1,
          explanation: '"aus" predlogi bilan "kelib chiqish / kelganlik" ifodalanadi.'
        },
        {
          id: 'de_ex2_2',
          type: 'fill-blank',
          question: 'Du ______ sehr freundlich. (Sen juda xushmuomalasan)',
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
          { de: 'Goodbye / Bye', uz: 'Xayr' },
          { de: 'See you soon', uz: 'Ko‘rishguncha' }
        ]
      },
      exercises: [
        {
          id: 'en_ex1_1',
          type: 'multiple-choice',
          question: '"Good morning" iborasi qachon aytiladi?',
          options: ['Kechqurun', 'Ertalab', 'Uxlashdan oldin', 'Tushdan keyin'],
          correctIndex: 1,
          explanation: '"Morning" — ertalab / tong.'
        },
        {
          id: 'en_ex1_2',
          type: 'fill-blank',
          question: 'Birov sizga "Thank you" desa, nima deb javob berasiz: "You are ______."',
          placeholder: 'So‘zni yozing...',
          correctAnswer: 'welcome',
          hint: 'Arzimaydi ma’nosida'
        },
        {
          id: 'en_ex1_3',
          type: 'order',
          question: 'Gap tuzing: "Nice to meet you" (Tanishganimdan xursandman)',
          words: ['Nice', 'to', 'meet', 'you.'],
          correctSentence: 'Nice to meet you.',
          explanation: '"Nice to meet you" — ilk tanishuvdagi eng mashhur ibora.'
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
        title: '🇬🇧 Politeness (Iltimos va Rahmat)',
        text: 'Inglizlar nutqida "Please", "Thank you" va "Excuse me" so‘zlari juda ko‘p ishlatiladi. Do‘konda yoki ko‘chada bu so‘zlarni ishlatish madaniyat belgisidir.'
      },
      listening: {
        title: '🎧 Listening (Eshitib tushunish)',
        audioText: 'We are students and we are learning English together.',
        question: 'Ular kimlar?',
        options: ['O‘qituvchilar', 'Talabalar (o‘quvchilar)', 'Shifokorlar'],
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
      title: 'Род имён существительных (Мужской, Женский, Средний)',
      goal: 'Rus tilida otlarning 3 ta jinsi (он, она, оно) va ularni oxirgi harfiga qarab aniqlash.',
      theory: {
        introUz: 'Rus tilida har bir otning jinsi bor va bu juda oson aniqlanadi:',
        rules: [
          { pattern: 'Мужской род (ОН)', pronunciation: 'Undosh harf bilan tugaydi', exampleDe: 'дом (uy), стол (stol), брат (aka/uka)', exampleUz: 'uy, stol, aka' },
          { pattern: 'Женский род (ОНА)', pronunciation: '-А yoki -Я bilan tugaydi', exampleDe: 'книга (kitob), машина (mashina), сестра', exampleUz: 'kitob, mashina, opa' },
          { pattern: 'Средний род (ОНО)', pronunciation: '-О yoki -Е bilan tugaydi', exampleDe: 'окно (deraza), море (dengiz), письмо', exampleUz: 'deraza, dengiz, xat' }
        ],
        table: [
          { de: 'мой дом', uz: 'mening uyim (erkak jinsi)' },
          { de: 'моя книга', uz: 'mening kitobim (ayol jinsi)' },
          { de: 'моё окно', uz: 'mening derazam (o‘rta jins)' },
          { de: 'мои друзья', uz: 'mening do‘stlarim (ko‘plik)' }
        ]
      },
      exercises: [
        {
          id: 'ru_ex2_1',
          type: 'multiple-choice',
          question: '"Машина" (mashina) so‘zi qaysi jinsga kiradi?',
          options: ['Мужской род (Он)', 'Женский род (Она)', 'Средний род (Оно)'],
          correctIndex: 1,
          explanation: '-А harfi bilan tugagani uchun Женский род (Она).'
        },
        {
          id: 'ru_ex2_2',
          type: 'fill-blank',
          question: 'Это ______ дом. (Bu mening uyim - "дом" erkak jinsi)',
          placeholder: 'мой / моя / моё...',
          correctAnswer: 'мой',
          hint: 'erkak jinsi uchun'
        }
      ],
      speakingPrompt: {
        textDe: 'Это мой новый дом и моя любимая книга.',
        textUz: 'Bu mening yangi uyim va sevimli kitobim.',
        tip: 'мой дом, моя книга so‘zlariga e’tibor bering.'
      },
      kulturtip: {
        title: '🇷🇺 Отчество (Otasining ismi)',
        text: 'Rossiyada rasmiy munosabatlarda insonning ismi va otasining ismi birga aytiladi (masalan: Иван Иванович, Елена Сергеевна).'
      },
      listening: {
        title: '🎧 Аудирование (Tinglab tushunish)',
        audioText: 'Это мой брат Антон. Он студент.',
        question: 'Anton kim va u nima ish qiladi?',
        options: ['O‘qituvchi', 'Akasi/ukasi va u talaba', 'Shifokor'],
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
          { de: '감사합니다', uz: 'Katta rahmat (Kamsahamnida)' },
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
          explanation: '감사합니다 [Kamsahamnida] — Rahmat.'
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
