// Curriculum data: Step-by-step lessons according to German Master AI methodology
module.exports = {
  lessons: [
    {
      id: 'lesson_1',
      level: 'A0/A1',
      number: 1,
      title: 'Talaffuzning 3 siri va Ilk salomlashish',
      goal: 'Nemischa o‘qish qoidalarini anglash, begona va do‘stona salomlashish/xayrlashishni o‘rganish.',
      theory: {
        introUz: 'Nemis tili o‘qilishi bo‘yicha o‘zbek tiliga ancha yaqin — 90% holatlarda yozilganidek o‘qiladi. Faqat 3 ta muhim qoidani bilsangiz, ko‘p so‘zlarni to‘g‘ri talaffuz qilasiz:',
        rules: [
          {
            pattern: 'EI',
            pronunciation: '«AY»',
            exampleDe: 'mein [mayn], nein [nayn], eins [ayns]',
            exampleUz: 'mening, yo‘q, bir'
          },
          {
            pattern: 'IE',
            pronunciation: '«cho‘ziq II»',
            exampleDe: 'sie [zii], wie [vii], vier [fiir]',
            exampleUz: 'u/ular, qanday, to‘rt'
          },
          {
            pattern: 'So‘z boshidagi S + unli',
            pronunciation: '«Z»',
            exampleDe: 'Sie [zii], Super [zuper], sieben [ziiben]',
            exampleUz: 'Siz, ajoyib, yetti'
          },
          {
            pattern: 'W harfi',
            pronunciation: '«V» deb o‘qiladi',
            exampleDe: 'Wasser [vasser], wie [vii]',
            exampleUz: 'suv, qanday'
          }
        ],
        table: [
          { de: 'Hallo', uz: 'Salom (do‘stona, norasmiy)' },
          { de: 'Guten Morgen', uz: 'Xayrli tong (ertalab soat 11 gacha)' },
          { de: 'Guten Tag', uz: 'Xayrli kun (universal, kun bo‘yi)' },
          { de: 'Guten Abend', uz: 'Xayrli kech (kechki 18:00 dan)' },
          { de: 'Gute Nacht', uz: 'Xayrli tun (uxlashga ketganda)' },
          { de: 'Danke / Danke schön', uz: 'Rahmat / Katta rahmat' },
          { de: 'Bitte / Bitte schön', uz: 'Iltimos / Arzimaydi' },
          { de: 'Tschüss', uz: 'Xayr (do‘stona)' },
          { de: 'Auf Wiedersehen', uz: 'Ko‘rishguncha xayr (rasmiy)' }
        ]
      },
      exercises: [
        {
          id: 'ex1_1',
          type: 'multiple-choice',
          question: 'Do‘konda sotuvchiga rasmiy tarzda "Xayrli kun" demoqchisiz. Qaysi biri to‘g‘ri?',
          options: ['Hallo', 'Guten Tag', 'Gute Nacht', 'Tschüss'],
          correctIndex: 1,
          explanation: '"Guten Tag" — eng universal rasmiy salomlashish ifodasidir.'
        },
        {
          id: 'ex1_2',
          type: 'multiple-choice',
          question: '"mein" (mening) so‘zi qanday o‘qiladi?',
          options: ['meyn', 'mayn', 'miin', 'men'],
          correctIndex: 1,
          explanation: 'Nemis tilida "EI" harf birikmasi doimo «AY» deb talaffuz qilinadi.'
        },
        {
          id: 'ex1_3',
          type: 'fill-blank',
          question: 'Do‘stingiz bilan xayrlashayotganda: "______, bis morgen!" (Xayr, ertagacha!)',
          placeholder: 'So‘zni kiriting...',
          correctAnswer: 'Tschüss',
          altAnswers: ['tschüss', 'Tschuess', 'tschuess'],
          hint: 'Chyus deb talaffuz qilinadi'
        },
        {
          id: 'ex1_4',
          type: 'order',
          question: 'So‘zlarni to‘g‘ri tartibda joylashtiring: "Ko‘rishguncha xayr!"',
          words: ['Auf', 'Wiedersehen'],
          correctSentence: 'Auf Wiedersehen',
          explanation: '"Auf Wiedersehen" rasmiy xayrlashish iborasidir.'
        }
      ],
      speakingPrompt: {
        textDe: 'Hallo, Guten Tag! Danke schön!',
        textUz: 'Salom, Xayrli kun! Katta rahmat!',
        tip: 'Tugmani bosing va ushbu gapni baland ovozda talaffuz qiling.'
      },
      kulturtip: {
        title: '🇩🇪 Pünktlichkeit (O‘z vaqtida bo‘lish)',
        text: 'Germaniyada vaqtga qat’iy rioya qilish — eng oliy hurmat belgisi. Agar uchrashuvga yoki darsga 5 daqiqa kech qolsangiz, bu juda qo‘pol hisoblanadi. Doimo 5-10 daqiqa oldin borish odat tusiga kirgan!'
      },
      listening: {
        title: '🎧 Tinglab tushunish (Hörverstehen)',
        audioText: 'Hallo! Ich bin Thomas. Guten Tag!',
        question: 'Thomas kim bilan yoki qanday salomlashdi?',
        options: ['Gute Nacht dedi', 'Guten Tag va Hallo dedi', 'Tschüss dedi'],
        correctIndex: 1
      }
    },

    {
      id: 'lesson_2',
      level: 'A1',
      number: 2,
      title: 'O‘zini tanishtirish va "sein" (bo‘lmoq) fe’li',
      goal: 'Ism, mamlakat va yashash joyini aytish. "sein" (to be) fe’lining tuslanishini o‘rganish.',
      theory: {
        introUz: 'O‘zingizni tanishtirish uchun 3 ta asosiy qolipdan foydalanasiz:',
        rules: [
          {
            pattern: 'Ich bin ...',
            pronunciation: 'Men [falonchiman]',
            exampleDe: 'Ich bin Jasur. Ich bin 22 Jahre alt.',
            exampleUz: 'Men Jasurman. Men 22 yoshdaman.'
          },
          {
            pattern: 'Ich heiße ...',
            pronunciation: 'Mening ismim ...',
            exampleDe: 'Ich heiße Jasur.',
            exampleUz: 'Mening ismim Jasur.'
          },
          {
            pattern: 'Ich komme aus ...',
            pronunciation: 'Men ...dan kelganman',
            exampleDe: 'Ich komme aus Usbekistan.',
            exampleUz: 'Men O‘zbekistondanman.'
          },
          {
            pattern: 'Ich wohne in ...',
            pronunciation: 'Men ...da yashayman',
            exampleDe: 'Ich wohne in Taschkent.',
            exampleUz: 'Men Toshkentda yashayman.'
          }
        ],
        table: [
          { de: 'ich bin', uz: 'men ...man' },
          { de: 'du bist', uz: 'sen ...san' },
          { de: 'er/sie/es ist', uz: 'u ...dir (o‘g‘il/qiz/narsa)' },
          { de: 'wir sind', uz: 'biz ...miz' },
          { de: 'ihr seid', uz: 'sizlar ...siz' },
          { de: 'Sie/sie sind', uz: 'Siz (hurmat) / ular ...dirlar' }
        ]
      },
      exercises: [
        {
          id: 'ex2_1',
          type: 'multiple-choice',
          question: '"Men O‘zbekistondanman" nemischa qanday aytiladi?',
          options: [
            'Ich wohne in Usbekistan.',
            'Ich komme aus Usbekistan.',
            'Ich bin Usbekistan.',
            'Ich heiße Usbekistan.'
          ],
          correctIndex: 1,
          explanation: '"aus" predlogi bilan "kelib chiqish / kelganlik" ifodalanadi.'
        },
        {
          id: 'ex2_2',
          type: 'fill-blank',
          question: 'Du ______ sehr freundlich. (Sen juda xushmuomalasan - "sein" fe’lini qo‘ying)',
          placeholder: 'fe’lni kiriting...',
          correctAnswer: 'bist',
          altAnswers: ['Bist'],
          hint: 'du bilan bist ishlatiladi'
        },
        {
          id: 'ex2_3',
          type: 'order',
          question: 'Gap tuzing: "Mening ismim Anna va men Berlinda yashayman"',
          words: ['Ich', 'heiße', 'Anna', 'und', 'ich', 'wohne', 'in', 'Berlin.'],
          correctSentence: 'Ich heiße Anna und ich wohne in Berlin.',
          explanation: 'Nemis tilida fe’l oddiy darak gapda 2-o‘rinda turadi.'
        }
      ],
      speakingPrompt: {
        textDe: 'Ich komme aus Usbekistan und ich lerne Deutsch.',
        textUz: 'Men O‘zbekistondanman va men nemis tilini o‘rganayapman.',
        tip: 'Dona-dona va ishonch bilan ayting.'
      },
      kulturtip: {
        title: '🇩🇪 Siezen vs. Duzen (Sizlash yoki Senlash)',
        text: 'Germaniyada kattalar, ustozlar, hamkasblar va begonalarga "Sie" (Siz) deb murojaat qilinadi. Faqat do‘stlar, bolalar va yaqinlar o‘rtasida "Du" (Sen) ishlatiladi. Ruxsatsiz "Du" deyish odobsizlik sanaladi.'
      },
      listening: {
        title: '🎧 Tinglab tushunish (Hörverstehen)',
        audioText: 'Guten Tag, mein Name ist Anna Weber. Ich wohne in Berlin.',
        question: 'Anna Weber qayerda yashaydi?',
        options: ['Taschkentda', 'Berlinda', 'Münchenda'],
        correctIndex: 1
      }
    },

    {
      id: 'lesson_3',
      level: 'A1',
      number: 3,
      title: 'Sonlar (0-100), Vaqt va Soatni aytish',
      goal: 'Raqamlarni sanash, telefon raqam va vaqtni so‘rab aytish.',
      theory: {
        introUz: 'Nemis sonlarida ajoyib bir qoida bor: 21 dan boshlab avval birlik, keyin o‘nlik aytiladi! (Masalan: 21 = ein-und-zwanzig yani "bir va yigirma").',
        rules: [
          { pattern: '0 - 10', pronunciation: 'null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn', exampleDe: '0 - 10', exampleUz: 'nol dan o‘ngacha' },
          { pattern: '11 - 12 (maxsus)', pronunciation: 'elf, zwölf', exampleDe: '11, 12', exampleUz: 'o‘n bir, o‘n ikki' },
          { pattern: '13 - 19', pronunciation: 'dreizehn, vierzehn, fünfzehn... (-zehn qo‘shiladi)', exampleDe: '13 - 19', exampleUz: 'o‘n uchdan o‘n to‘qqizgacha' },
          { pattern: 'O‘nliklar (-zig)', pronunciation: 'zwanzig (20), dreißig (30), vierzig (40), fünfzig (50)...', exampleDe: '20, 30, 40', exampleUz: 'yigirma, o‘ttiz, qirq' }
        ],
        table: [
          { de: 'Wie spät ist es?', uz: 'Soat necha bo‘ldi?' },
          { de: 'Es ist zwei Uhr.', uz: 'Soat ikki bo‘ldi.' },
          { de: 'Es ist halb drei.', uz: 'Soat ikki yarim (uchning yarmi).' },
          { de: 'Wie viel kostet das?', uz: 'Bu qancha turadi?' },
          { de: 'Das kostet fünf Euro.', uz: 'Bu besh yevro turadi.' }
        ]
      },
      exercises: [
        {
          id: 'ex3_1',
          type: 'multiple-choice',
          question: 'Nemis tilida "25" qanday aytiladi?',
          options: ['zwanzigfünf', 'fünfundzwanzig', 'fünfzehn', 'fünfzig'],
          correctIndex: 1,
          explanation: 'Nemis tilida avval 5 (fünf), keyin "va" (und), keyin 20 (zwanzig) aytiladi.'
        },
        {
          id: 'ex3_2',
          type: 'fill-blank',
          question: 'Wie spät ist es? — Es ist ______ Uhr. (Soat 10 bo‘ldi)',
          placeholder: 'Sonni nemischa yozing...',
          correctAnswer: 'zehn',
          altAnswers: ['Zehn', '10'],
          hint: '10 soni'
        }
      ],
      speakingPrompt: {
        textDe: 'Entschuldigung, wie spät ist es jetzt?',
        textUz: 'Kechirasiz, hozir soat necha bo‘ldi?',
        tip: 'Entschuldigung [ent-shul-di-gung] deb ohista talaffuz qilinadi.'
      }
    },

    {
      id: 'lesson_4',
      level: 'A1',
      number: 4,
      title: 'Artikllar siri: der, die, das va noaniq artikl (ein, eine)',
      goal: 'Nemis otlarining 3 xil jinsi (erkak, ayol, o‘rta) va ularni farqlash qoidalarini o‘rganish.',
      theory: {
        introUz: 'Nemis tilida BARCHA OTLAR BOSH HARF BILAN YOZILADI va har bir otning jinsi (artikli) bor. Ranglar bilan eslab qolish eng oson:',
        rules: [
          { pattern: '🔵 DER (Maskulin)', pronunciation: 'Erkak jinsi', exampleDe: 'der Tisch (stol), der Mann (erkak), der Apfel (olma)', exampleUz: 'noaniq shakli: ein' },
          { pattern: '🔴 DIE (Feminin)', pronunciation: 'Ayol jinsi', exampleDe: 'die Lampe (lampa), die Frau (ayol), die Stadt (shahar)', exampleUz: 'noaniq shakli: eine' },
          { pattern: '🟢 DAS (Neutrum)', pronunciation: 'O‘rta jins', exampleDe: 'das Haus (uy), das Buch (kitob), das Kind (bola)', exampleUz: 'noaniq shakli: ein' },
          { pattern: '🟡 DIE (Plural)', pronunciation: 'Barcha ko‘plikdagi otlar artikli doimo DIE bo‘ladi!', exampleDe: 'die Tische, die Bücher', exampleUz: 'ko‘plikda noaniq artikl bo‘lmaydi' }
        ],
        table: [
          { de: 'der Tisch -> ein Tisch', uz: 'bir stol (aniq emas)' },
          { de: 'die Tasche -> eine Tasche', uz: 'bir sumka' },
          { de: 'das Auto -> ein Auto', uz: 'bir mashina' },
          { de: 'kein / keine', uz: 'Inkor artikli: Das ist kein Auto (Bu mashina emas)' }
        ]
      },
      exercises: [
        {
          id: 'ex4_1',
          type: 'multiple-choice',
          question: '"Haus" (uy) so‘zining to‘g‘ri artikli qaysi?',
          options: ['der Haus', 'die Haus', 'das Haus', 'den Haus'],
          correctIndex: 2,
          explanation: '"das Haus" — o‘rta jins (neutrum).'
        },
        {
          id: 'ex4_2',
          type: 'multiple-choice',
          question: 'Bu ayol kishi uchun noaniq artikl qaysi: "Das ist ______ Frau."',
          options: ['ein', 'eine', 'einen', 'einer'],
          correctIndex: 1,
          explanation: 'Feminin (die) uchun noaniq artikl "eine" bo‘ladi.'
        }
      ],
      speakingPrompt: {
        textDe: 'Das ist ein Tisch und das ist eine Lampe.',
        textUz: 'Bu stol va bu chiroq.',
        tip: 'der Tisch -> ein Tisch, die Lampe -> eine Lampe ekanligiga e’tibor bering.'
      }
    },

    {
      id: 'lesson_5',
      level: 'A1',
      number: 5,
      title: 'Akkusativ (Tushum kelishigi): "Ich habe einen Tisch"',
      goal: 'Akkusativ qoidasini mantiqiy tushunish va kundalik hayotda to‘g‘ri qo‘llash.',
      theory: {
        introUz: 'Akkusativ — o‘zbek tilidagi tushum kelishigi ("kimni?", "nimani?" savollariga javob beradi). Nemis tilida Akkusativda FAQAT ERKAK JINSI (der) O‘ZGARADI! Boshqalari o‘zgarmaydi!',
        rules: [
          { pattern: '🔵 DER -> DEN (ein -> einen)', pronunciation: 'Faqat erkak jinsi o‘zgaradi!', exampleDe: 'Ich habe einen Tisch. Ich suche den Bahnhof.', exampleUz: 'Menda stol bor. Men vokzalni qidiryapman.' },
          { pattern: '🔴 DIE -> DIE (eine -> eine)', pronunciation: 'O‘zgarmaydi!', exampleDe: 'Ich habe eine Lampe.', exampleUz: 'Menda lampa bor.' },
          { pattern: '🟢 DAS -> DAS (ein -> ein)', pronunciation: 'O‘zgarmaydi!', exampleDe: 'Ich habe ein Buch.', exampleUz: 'Menda kitob bor.' },
          { pattern: 'Akkusativ talab qiluvchi fe’llar', pronunciation: 'haben (ega bo‘lmoq), suchen (qidirmoq), kaufen (sotib olmoq), sehen (ko‘rmoq)', exampleDe: 'Ich kaufe einen Kaffee.', exampleUz: 'Men kofe sotib olyapman.' }
        ],
        table: [
          { de: 'Nominativ (Bosh kelishik)', uz: 'der Mann | die Frau | das Kind' },
          { de: 'Akkusativ (Kimni? Nimani?)', uz: 'den Mann | die Frau | das Kind' },
          { de: 'Noaniq Akkusativ', uz: 'einen Mann | eine Frau | ein Kind' }
        ]
      },
      exercises: [
        {
          id: 'ex5_1',
          type: 'multiple-choice',
          question: '"Ich brauche ______ Apfel." (Apfel = der Apfel / erkak jinsi)',
          options: ['ein', 'eine', 'einen', 'einem'],
          correctIndex: 2,
          explanation: 'der Apfel Akkusativda "einen Apfel"ga aylanadi.'
        },
        {
          id: 'ex5_2',
          type: 'fill-blank',
          question: 'Ich sehe ______ Mann. (der Mann so‘zini Akkusativga qo‘ying)',
          placeholder: 'artiklni yozing...',
          correctAnswer: 'den',
          altAnswers: ['Den'],
          hint: 'der -> den'
        }
      ],
      speakingPrompt: {
        textDe: 'Ich habe einen Computer und ein Smartphone.',
        textUz: 'Menda kompyuter va smartfon bor.',
        tip: 'der Computer -> einen Computer bo‘ldi!'
      }
    }
  ],

  // Diagnostic questions database (Phases 1-6)
  diagnosticQuestions: [
    {
      phase: 1,
      level: 'A0/A1',
      category: 'Vocabulary',
      question: '"Guten Abend" iborasining ma’nosi nima?',
      options: ['Xayrli tong', 'Xayrli kun', 'Xayrli kech', 'Xayrli tun'],
      correctIndex: 2
    },
    {
      phase: 1,
      level: 'A0/A1',
      category: 'Pronunciation',
      question: '"nein" (yo‘q) so‘zida "ei" birikmasi qanday o‘qiladi?',
      options: ['ey', 'ayn', 'iin', 'on'],
      correctIndex: 1
    },
    {
      phase: 2,
      level: 'A1',
      category: 'Grammar',
      question: 'Nuqtalar o‘rniga to‘g‘ri fe’l shaklini tanlang: "Wir ______ Deutsch."',
      options: ['lerne', 'lernst', 'lernt', 'lernen'],
      correctIndex: 3
    },
    {
      phase: 2,
      level: 'A1',
      category: 'Articles',
      question: '"Ich habe ______ Auto." (Auto = das Auto)',
      options: ['ein', 'eine', 'einen', 'einer'],
      correctIndex: 0
    },
    {
      phase: 3,
      level: 'A2',
      category: 'Tenses',
      question: 'Perfekt (o‘tgan zamon): "Gestern habe ich einen Film ______."',
      options: ['sehen', 'gesehen', 'sah', 'sieht'],
      correctIndex: 1
    },
    {
      phase: 3,
      level: 'A2',
      category: 'Grammar',
      question: 'Qaysi gapda Dativ to‘g‘ri qo‘llangan?',
      options: [
        'Ich helfe der Mann.',
        'Ich helfe dem Mann.',
        'Ich helfe den Mann.',
        'Ich helfe das Mann.'
      ],
      correctIndex: 1
    },
    {
      phase: 4,
      level: 'B1',
      category: 'Conjunctions',
      question: '"Ich lerne fleißig Deutsch, ______ ich in Deutschland arbeiten möchte."',
      options: ['denn', 'weil', 'obwohl', 'trotzdem'],
      correctIndex: 1
    },
    {
      phase: 4,
      level: 'B1',
      category: 'Konjunktiv II',
      question: '"Wenn ich reich ______, würde ich um die Welt reisen."',
      options: ['bin', 'wäre', 'hätte', 'sei'],
      correctIndex: 1
    },
    {
      phase: 5,
      level: 'B2',
      category: 'Passiv',
      question: '"Das Gebäude ______ im letzten Jahr renoviert."',
      options: ['wurde', 'wird', 'worden', 'hat'],
      correctIndex: 0
    },
    {
      phase: 6,
      level: 'C1',
      category: 'Advanced Idioms',
      question: '"Er hat mir einen Bären aufgebunden" degani nimani anglatadi?',
      options: [
        'U menga sovg‘a berdi',
        'U meni aldadi (yolg‘on gapirdi)',
        'U og‘ir yuk ko‘tardi',
        'U ovga bordi'
      ],
      correctIndex: 1
    }
  ]
};
