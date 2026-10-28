// ==========================================
// OO-USTOZIM AI — COMPREHENSIVE CURRICULUM DATABASE
// 4 Languages: Nemis, Ingliz, Rus, Koreys (64 Full Lessons: A1 -> B2)
// Diagnostic Tests (40 questions) & Cultural Lifehacks
// ==========================================

module.exports = {
  "languages": [
    {
      "code": "de",
      "name": "Nemis tili",
      "flag": "🇩🇪",
      "speechLang": "de-DE",
      "nativeName": "Deutsch"
    },
    {
      "code": "en",
      "name": "Ingliz tili",
      "flag": "🇬🇧",
      "speechLang": "en-US",
      "nativeName": "English"
    },
    {
      "code": "ru",
      "name": "Rus tili",
      "flag": "🇷🇺",
      "speechLang": "ru-RU",
      "nativeName": "Русский"
    },
    {
      "code": "ko",
      "name": "Koreys tili",
      "flag": "🇰🇷",
      "speechLang": "ko-KR",
      "nativeName": "한국어"
    }
  ],
  "de": [
    {
      "id": "de_lesson_1",
      "lang": "de",
      "level": "A1",
      "number": 1,
      "title": "Talaffuzning 3 siri va Ilk salomlashish",
      "goal": "Nemischa o‘qish qoidalarini anglash, begona va do‘stona salomlashish/xayrlashishni o‘rganish.",
      "theory": {
        "introUz": "Nemis tili o‘qilishi bo‘yicha o‘zbek tiliga juda yaqin. 4 ta muhim qoidani bilsangiz, bexato o‘qiysiz:",
        "rules": [
          {
            "pattern": "EI",
            "pronunciation": "«AY»",
            "exampleDe": "mein [mayn], nein [nayn]",
            "exampleUz": "mening, yo‘q"
          },
          {
            "pattern": "IE",
            "pronunciation": "«cho‘ziq II»",
            "exampleDe": "sie [zii], wie [vii]",
            "exampleUz": "u/ular, qanday"
          },
          {
            "pattern": "S + unli",
            "pronunciation": "«Z»",
            "exampleDe": "Sie [zii], Super [zuper]",
            "exampleUz": "Siz, ajoyib"
          },
          {
            "pattern": "W harfi",
            "pronunciation": "«V»",
            "exampleDe": "Wasser [vasser]",
            "exampleUz": "suv"
          }
        ],
        "table": [
          {
            "de": "Hallo",
            "uz": "Salom (do‘stona)"
          },
          {
            "de": "Guten Tag",
            "uz": "Xayrli kun (rasmiy)"
          },
          {
            "de": "Danke",
            "uz": "Rahmat"
          },
          {
            "de": "Bitte",
            "uz": "Iltimos / Arzimaydi"
          },
          {
            "de": "Tschüss",
            "uz": "Xayr (do‘stona)"
          },
          {
            "de": "Auf Wiedersehen",
            "uz": "Ko‘rishguncha xayr (rasmiy)"
          }
        ]
      },
      "exercises": [
        {
          "id": "de_ex1_1",
          "type": "multiple-choice",
          "question": "Do‘konda rasmiy tarzda \"Xayrli kun\" demoqchisiz. Qaysi biri to‘g‘ri?",
          "options": [
            "Hallo",
            "Guten Tag",
            "Gute Nacht",
            "Tschüss"
          ],
          "correctIndex": 1,
          "explanation": "\"Guten Tag\" — eng universal rasmiy salomlashish ifodasidir."
        },
        {
          "id": "de_ex1_2",
          "type": "multiple-choice",
          "question": "\"mein\" (mening) so‘zi qanday o‘qiladi?",
          "options": [
            "meyn",
            "mayn",
            "miin",
            "men"
          ],
          "correctIndex": 1,
          "explanation": "Nemis tilida \"EI\" harf birikmasi doimo «AY» deb talaffuz qilinadi."
        },
        {
          "id": "de_ex1_3",
          "type": "fill-blank",
          "question": "Do‘stingiz bilan xayrlashayotganda: \"______, bis morgen!\"",
          "placeholder": "So‘zni kiriting...",
          "correctAnswer": "Tschüss",
          "hint": "Chyus deb talaffuz qilinadi"
        }
      ],
      "speakingPrompt": {
        "textDe": "Hallo, Guten Tag! Danke schön!",
        "textUz": "Salom, Xayrli kun! Katta rahmat!",
        "tip": "Tugmani bosing va ushbu gapni baland ovozda talaffuz qiling."
      },
      "kulturtip": {
        "title": "🇩🇪 Pünktlichkeit (Vaqtga qat’iy rioya)",
        "text": "Germaniyada vaqtga qat’iy rioya qilish — eng oliy hurmat belgisi. Uchrashuvga 5-10 daqiqa oldin borish odat tusiga kirgan."
      },
      "listening": {
        "title": "🎧 Tinglab tushunish (Hörverstehen)",
        "audioText": "Hallo! Ich bin Thomas. Guten Tag!",
        "question": "Thomas qanday salomlashdi?",
        "options": [
          "Gute Nacht dedi",
          "Guten Tag va Hallo dedi",
          "Tschüss dedi"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "de_lesson_2",
      "lang": "de",
      "level": "A1",
      "number": 2,
      "title": "O‘zini tanishtirish va \"sein\" (bo‘lmoq) fe’li",
      "goal": "Ism, mamlakat va yashash joyini aytish. \"sein\" (to be) fe’lining tuslanishini o‘rganish.",
      "theory": {
        "introUz": "O‘zingizni tanishtirish uchun 3 ta asosiy qolipdan foydalanasiz:",
        "rules": [
          {
            "pattern": "Ich bin ...",
            "pronunciation": "Men [falonchiman]",
            "exampleDe": "Ich bin Jasur.",
            "exampleUz": "Men Jasurman."
          },
          {
            "pattern": "Ich heiße ...",
            "pronunciation": "Mening ismim ...",
            "exampleDe": "Ich heiße Jasur.",
            "exampleUz": "Mening ismim Jasur."
          },
          {
            "pattern": "Ich komme aus ...",
            "pronunciation": "Men ...dan kelganman",
            "exampleDe": "Ich komme aus Usbekistan.",
            "exampleUz": "Men O‘zbekistondanman."
          },
          {
            "pattern": "Ich wohne in ...",
            "pronunciation": "Men ...da yashayman",
            "exampleDe": "Ich wohne in Taschkent.",
            "exampleUz": "Men Toshkentda yashayman."
          }
        ],
        "table": [
          {
            "de": "ich bin",
            "uz": "men ...man"
          },
          {
            "de": "du bist",
            "uz": "sen ...san"
          },
          {
            "de": "er/sie/es ist",
            "uz": "u ...dir"
          },
          {
            "de": "wir sind",
            "uz": "biz ...miz"
          },
          {
            "de": "ihr seid",
            "uz": "sizlar ...siz"
          },
          {
            "de": "Sie/sie sind",
            "uz": "Siz/ular ...lar"
          }
        ]
      },
      "exercises": [
        {
          "id": "de_ex2_1",
          "type": "multiple-choice",
          "question": "\"Men Toshkentda yashayman\" qaysi qatorda to‘g‘ri yozilgan?",
          "options": [
            "Ich komme in Taschkent",
            "Ich wohne in Taschkent",
            "Ich bin Taschkent",
            "Ich heiße Taschkent"
          ],
          "correctIndex": 1,
          "explanation": "\"wohnen in\" — biror joyda doimiy yashashni bildiradi."
        },
        {
          "id": "de_ex2_2",
          "type": "fill-blank",
          "question": "Du ______ sehr freundlich. (\"sein\" fe’lining to‘g‘ri shakli)",
          "placeholder": "fe’lni kiriting...",
          "correctAnswer": "bist",
          "hint": "du bilan bist"
        }
      ],
      "speakingPrompt": {
        "textDe": "Ich komme aus Usbekistan und ich lerne Deutsch.",
        "textUz": "Men O‘zbekistondanman va men nemis tilini o‘rganayapman.",
        "tip": "Dona-dona va ishonch bilan ayting."
      },
      "kulturtip": {
        "title": "🇩🇪 Siezen vs. Duzen",
        "text": "Kattalarga va notanishlarga \"Sie\" (Siz), tengdosh va do‘stlarga \"Du\" (Sen) deb murojaat qilinadi."
      },
      "listening": {
        "title": "🎧 Tinglab tushunish",
        "audioText": "Guten Tag, mein Name ist Anna Weber. Ich wohne in Berlin.",
        "question": "Anna qayerda yashaydi?",
        "options": [
          "Toshkentda",
          "Berlinda",
          "Münchenda"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "de_lesson_3",
      "lang": "de",
      "level": "A1",
      "number": 3,
      "title": "W-Fragen: So‘roq so‘zlar va Muloqot",
      "goal": "Nemis tilida savol berish: Wer, Was, Wo, Woher, Wohin, Wie, Warum.",
      "theory": {
        "introUz": "Nemis tilida so‘roq gaplarda so‘roq so‘z 1-o‘rinda, fe’l esa DOIMO 2-o‘rinda turadi:",
        "rules": [
          {
            "pattern": "Woher ...?",
            "pronunciation": "Qayerdan ...?",
            "exampleDe": "Woher kommst du?",
            "exampleUz": "Qayerdan kelyapsan?"
          },
          {
            "pattern": "Wo ...?",
            "pronunciation": "Qayerda ...?",
            "exampleDe": "Wo wohnst du?",
            "exampleUz": "Qayerda yashaysan?"
          },
          {
            "pattern": "Was ...?",
            "pronunciation": "Nima ...?",
            "exampleDe": "Was machst du?",
            "exampleUz": "Nima qilyapsan?"
          },
          {
            "pattern": "Wer ...?",
            "pronunciation": "Kim ...?",
            "exampleDe": "Wer ist das?",
            "exampleUz": "Bu kim?"
          },
          {
            "pattern": "Wie ...?",
            "pronunciation": "Qanday ...?",
            "exampleDe": "Wie heißt du?",
            "exampleUz": "Isming nima?"
          }
        ],
        "table": [
          {
            "de": "Woher kommen Sie?",
            "uz": "Qayerdansiz? (rasmiy)"
          },
          {
            "de": "Wo ist der Bahnhof?",
            "uz": "Vokzal qayerda?"
          },
          {
            "de": "Was möchten Sie trinken?",
            "uz": "Nima ichishni xohlaysiz?"
          },
          {
            "de": "Wie viel kostet das?",
            "uz": "Bu qancha turadi?"
          }
        ]
      },
      "exercises": [
        {
          "id": "de_ex3_1",
          "type": "multiple-choice",
          "question": "\"Qayerda yashaysan?\" nemischa qanday aytiladi?",
          "options": [
            "Wo wohnst du?",
            "Woher kommst du?",
            "Was machst du?",
            "Wer bist du?"
          ],
          "correctIndex": 0,
          "explanation": "\"Wo\" — qayerda (yashash joyini so‘rashda)."
        },
        {
          "id": "de_ex3_2",
          "type": "fill-blank",
          "question": "______ ist das? — Das ist mein Freund Jasur. (Bu kim?)",
          "placeholder": "So‘roq so‘zini yozing...",
          "correctAnswer": "Wer",
          "hint": "Wer (kim)"
        }
      ],
      "speakingPrompt": {
        "textDe": "Entschuldigung, wo ist der Supermarkt?",
        "textUz": "Kechirasiz, supermarket qayerda?",
        "tip": "Entschuldigung so‘zini ravon talaffuz qiling."
      },
      "kulturtip": {
        "title": "🇩🇪 Anrede (Murojaat madaniyati)",
        "text": "Nemislar rasmiy uchrashuvda \"Herr\" (Janob) yoki \"Frau\" (Xonim) so‘zidan keyin familiyani aytishadi: \"Guten Tag, Herr Schmidt\"."
      },
      "listening": {
        "title": "🎧 Tinglab tushunish",
        "audioText": "Hallo! Woher kommst du? — Ich komme aus Usbekistan.",
        "question": "Suhbatdosh qayerdan kelgan?",
        "options": [
          "Germaniyadan",
          "O‘zbekistondan",
          "Avstriyadan"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "de_lesson_4",
      "lang": "de",
      "level": "A1",
      "number": 4,
      "title": "Artikllar (der, die, das) va \"haben\" (bor bo‘lmoq)",
      "goal": "Nemis tili 3 ta jinsi (maskulin, feminin, neutrum) va narsalarga egalik qilishni ifodalash.",
      "theory": {
        "introUz": "Har bir nemischa ot katta harf bilan yoziladi va o‘z artikliga ega:",
        "rules": [
          {
            "pattern": "der (Maskulin)",
            "pronunciation": "Erkak jinsi",
            "exampleDe": "der Tisch (stol), der Kaffee (kofe)",
            "exampleUz": "stol, kofe"
          },
          {
            "pattern": "die (Feminin)",
            "pronunciation": "Ayol jinsi",
            "exampleDe": "die Lampe (chiroq), die Schule (maktab)",
            "exampleUz": "chiroq, maktab"
          },
          {
            "pattern": "das (Neutrum)",
            "pronunciation": "O‘rta jins",
            "exampleDe": "das Haus (uy), das Buch (kitob)",
            "exampleUz": "uy, kitob"
          },
          {
            "pattern": "haben tuslanishi",
            "pronunciation": "ega bo‘lmoq",
            "exampleDe": "ich habe (menda bor), du hast, er hat, wir haben",
            "exampleUz": "menda bor, senda bor..."
          }
        ],
        "table": [
          {
            "de": "Ich habe ein Buch.",
            "uz": "Menda kitob bor."
          },
          {
            "de": "Hast du Zeit?",
            "uz": "Vaqting bormi?"
          },
          {
            "de": "Wir haben eine Frage.",
            "uz": "Bizda savol bor."
          },
          {
            "de": "Er hat ein Auto.",
            "uz": "Unda mashina bor."
          }
        ]
      },
      "exercises": [
        {
          "id": "de_ex4_1",
          "type": "multiple-choice",
          "question": "\"Kitob\" (Buch) so‘zining artikli qaysi?",
          "options": [
            "der",
            "die",
            "das",
            "den"
          ],
          "correctIndex": 2,
          "explanation": "\"das Buch\" — o‘rta jins (neutrum)."
        },
        {
          "id": "de_ex4_2",
          "type": "fill-blank",
          "question": "Hast du Zeit? — Ja, ich ______ Zeit. (Ha, menda vaqt bor)",
          "placeholder": "fe’lni kiriting...",
          "correctAnswer": "habe",
          "hint": "ich bilan habe"
        }
      ],
      "speakingPrompt": {
        "textDe": "Ich habe einen Tisch und eine Lampe in meinem Zimmer.",
        "textUz": "Mening xonamda stol va chiroq bor.",
        "tip": "Zimmer so‘zida \"Z\" «ts» deb o‘qiladi."
      },
      "kulturtip": {
        "title": "🇩🇪 Qo‘shma so‘zlar sehri",
        "text": "Nemis tilida bir nechta so‘z qo‘shilib yangi so‘z yasaladi: das Haus + die Tür = die Haustür (uy eshigi). Oxirgi so‘zning artikli asosiy bo‘ladi."
      },
      "listening": {
        "title": "🎧 Tinglab tushunish",
        "audioText": "Ich habe ein neues Auto. Das Auto ist sehr schnell.",
        "question": "Unda nima bor?",
        "options": [
          "Yangi velosiped",
          "Yangi mashina",
          "Yangi kitob"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "de_lesson_5",
      "lang": "de",
      "level": "A1",
      "number": 5,
      "title": "Do‘konda xarid, Raqamlar va Pul (Euro)",
      "goal": "Raqamlar (1-100), narx so‘rash va kafeda buyurtma berish.",
      "theory": {
        "introUz": "Xarid qilishda eng ko‘p ishlatiladigan iboralar va sonlar:",
        "rules": [
          {
            "pattern": "Sonlar 20 dan keyin",
            "pronunciation": "birlik oldin o‘qiladi",
            "exampleDe": "einundzwanzig (21) = bir va yigirma",
            "exampleUz": "21, 35, 48..."
          },
          {
            "pattern": "Wie viel kostet ...?",
            "pronunciation": "Qancha turadi?",
            "exampleDe": "Wie viel kostet das Brot?",
            "exampleUz": "Non qancha turadi?"
          },
          {
            "pattern": "Ich möchte ...",
            "pronunciation": "Men xohlardim (xushmuomala)",
            "exampleDe": "Ich möchte einen Kaffee, bitte.",
            "exampleUz": "Men bir chashka kofe xohlardim."
          }
        ],
        "table": [
          {
            "de": "eins, zwei, drei, vier, fünf",
            "uz": "1, 2, 3, 4, 5"
          },
          {
            "de": "zehn, zwanzig, dreißig, hundert",
            "uz": "10, 20, 30, 100"
          },
          {
            "de": "Das macht 5 Euro, bitte.",
            "uz": "Jami 5 yevro bo‘ldi, marhamat."
          },
          {
            "de": "Zusammen oder getrennt?",
            "uz": "Birgami yoki alohidami? (to‘lov)"
          }
        ]
      },
      "exercises": [
        {
          "id": "de_ex5_1",
          "type": "multiple-choice",
          "question": "\"Kafeda hisob-kitob qilishda \"Birgami yoki alohida to‘laysizmi?\" nemischa:",
          "options": [
            "Zusammen oder getrennt?",
            "Wie viel kostet das?",
            "Was möchten Sie?",
            "Auf Wiedersehen"
          ],
          "correctIndex": 0,
          "explanation": "\"Zusammen oder getrennt?\" — Germaniya restoranlarida har doim beriladigan savol."
        },
        {
          "id": "de_ex5_2",
          "type": "fill-blank",
          "question": "Ich ______ bitte ein Glas Wasser. (xohlayman)",
          "placeholder": "möchte...",
          "correctAnswer": "möchte",
          "hint": "möchte"
        }
      ],
      "speakingPrompt": {
        "textDe": "Einen Kaffee und ein Stück Kuchen, bitte!",
        "textUz": "Bir chashka kofe va bir bo‘lak pirojnoe, iltimos!",
        "tip": "Stück so‘zidagi ü ni labni cho‘chaytirib ayting."
      },
      "kulturtip": {
        "title": "🇩🇪 Trinkgeld (Choychaqa odobi)",
        "text": "Germaniyada xizmat ko‘rsatish uchun odatda hisobning 5-10 foizi miqdorida choychaqa (Trinkgeld) qoldiriladi."
      },
      "listening": {
        "title": "🎧 Tinglab tushunish",
        "audioText": "Das macht zusammen zehn Euro und fünfzig Cent.",
        "question": "Jami to‘lov qancha bo‘ldi?",
        "options": [
          "5 yevro",
          "10 yevro 50 sent",
          "20 yevro"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "de_lesson_6",
      "lang": "de",
      "level": "A2",
      "number": 6,
      "title": "O‘tgan zamon (Perfekt) va Partizip II",
      "goal": "Og‘zaki nutqda o‘tgan voqealarni aytish (haben/sein + ge-...-t).",
      "theory": {
        "introUz": "Nemis tilida og‘zaki o‘tgan zamon \"haben\" yoki \"sein\" yordamchi fe’li va asosiy fe’lning Partizip II shaklidan yasaladi:",
        "rules": [
          {
            "pattern": "Muntazam fe’llar",
            "pronunciation": "ge + asos + t",
            "exampleDe": "lernen → gelernt, machen → gemacht",
            "exampleUz": "o‘rgangan, qilgan"
          },
          {
            "pattern": "Harakat fe’llari",
            "pronunciation": "sein bilan ishlatiladi",
            "exampleDe": "Ich bin nach Berlin gefahren.",
            "exampleUz": "Men Berlinga borganman."
          },
          {
            "pattern": "Tinch holatdagi fe’llar",
            "pronunciation": "haben bilan ishlatiladi",
            "exampleDe": "Ich habe Deutsch gelernt.",
            "exampleUz": "Men nemis tilini o‘rgandim."
          }
        ],
        "table": [
          {
            "de": "Was hast du gestern gemacht?",
            "uz": "Kecha nima qilding?"
          },
          {
            "de": "Ich habe Fußball gespielt.",
            "uz": "Men futbol o‘ynadim."
          },
          {
            "de": "Ich bin zu Hause geblieben.",
            "uz": "Men uyda qoldim."
          },
          {
            "de": "Wir haben gut geschlafen.",
            "uz": "Biz yaxshi uxladik."
          }
        ]
      },
      "exercises": [
        {
          "id": "de_ex6_1",
          "type": "multiple-choice",
          "question": "\"Gestern ______ ich meine Freunde getroffen (Kecha do‘stlarim bilan ko‘rishdim).\":",
          "options": [
            "habe",
            "bin",
            "hat",
            "ist"
          ],
          "correctIndex": 0,
          "explanation": "\"treffen\" (uchrashmoq) fe’li haben bilan o‘tgan zamon yasaydi."
        },
        {
          "id": "de_ex6_2",
          "type": "fill-blank",
          "question": "Ich bin gestern nach Deutschland ______ (gefahren).",
          "placeholder": "Partizip II shakli...",
          "correctAnswer": "gefahren",
          "hint": "gefahren"
        }
      ],
      "speakingPrompt": {
        "textDe": "Gestern habe ich viel Deutsch gelernt und geübt.",
        "textUz": "Kecha men ko‘p nemis tili o‘rgandim va mashq qildim.",
        "tip": "Gelernt und geübt [gelernt unt ge-yupt] deb toza talaffuz qiling."
      },
      "kulturtip": {
        "title": "🇩🇪 Feierabend (Ishdan keyingi hordiq)",
        "text": "Nemis madaniyatida ish soati tugagach, ish haqida o‘ylamaslik (Feierabend) va oila davrasida dam olish muqaddas hisoblanadi."
      },
      "listening": {
        "title": "🎧 Tinglab tushunish",
        "audioText": "Am Wochenende bin ich ins Kino gegangen und habe einen Film gesehen.",
        "question": "U dam olish kunida nima qildi?",
        "options": [
          "Ishga bordi",
          "Kinoga borib film ko‘rdi",
          "Uy tozaladi"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "de_lesson_7",
      "lang": "de",
      "level": "A2",
      "number": 7,
      "title": "Dativ kelishigi va Shaharda yo‘l so‘rash",
      "goal": "Dativ (kimga/qayerda) kelishigi va harakat predloglari (nach, zu, mit, von).",
      "theory": {
        "introUz": "Dativ kelishigida artikllar quyidagicha o‘zgaradi: der → dem, das → dem, die → der, Plural → den (+n):",
        "rules": [
          {
            "pattern": "mit (bilan)",
            "pronunciation": "Doimo Dativ talab qiladi",
            "exampleDe": "mit dem Bus (avtobus bilan), mit dem Zug",
            "exampleUz": "avtobusda, poezdda"
          },
          {
            "pattern": "zu (tomon / ga)",
            "pronunciation": "Doimo Dativ",
            "exampleDe": "zum Bahnhof (vokzalga), zur Schule",
            "exampleUz": "vokzalga, maktabga"
          },
          {
            "pattern": "nach (shahar / mamlakatga)",
            "pronunciation": "artiklsiz joylar",
            "exampleDe": "nach Deutschland, nach Taschkent",
            "exampleUz": "Germaniyaga, Toshkentga"
          }
        ],
        "table": [
          {
            "de": "Ich fahre mit dem Auto.",
            "uz": "Men mashinada ketyapman."
          },
          {
            "de": "Wie komme ich zum Bahnhof?",
            "uz": "Vokzalga qanday borsam bo‘ladi?"
          },
          {
            "de": "Gehen Sie geradeaus, dann links.",
            "uz": "To‘g‘riga boring, keyin chapga."
          },
          {
            "de": "Ich helfe der Mutter.",
            "uz": "Men onamga yordam beryapman."
          }
        ]
      },
      "exercises": [
        {
          "id": "de_ex7_1",
          "type": "multiple-choice",
          "question": "\"Ich fahre mit ______ Bus (der Bus).\":",
          "options": [
            "dem",
            "den",
            "der",
            "das"
          ],
          "correctIndex": 0,
          "explanation": "\"mit\" predlogidan keyin \"der\" artikli Dativda \"dem\" ga aylanadi."
        },
        {
          "id": "de_ex7_2",
          "type": "fill-blank",
          "question": "Wie komme ich ______ Bahnhof? (zu + dem)",
          "placeholder": "zum yoki zur...",
          "correctAnswer": "zum",
          "hint": "zum"
        }
      ],
      "speakingPrompt": {
        "textDe": "Entschuldigung, wie komme ich am besten zur Universität?",
        "textUz": "Kechirasiz, universitetga eng qulay yo‘l bilan qanday borsa bo‘ladi?",
        "tip": "Universität [uni-ver-zi-tet] deb ravon ayting."
      },
      "kulturtip": {
        "title": "🇩🇪 Fahrradkultur (Velosiped madaniyati)",
        "text": "Germaniyada shahar ichida harakatlanish uchun velosiped eng ommabop transport. Maxsus veloyo‘laklarda piyodalar yurishi qat’iyan man etiladi."
      },
      "listening": {
        "title": "🎧 Tinglab tushunish",
        "audioText": "Nehmen Sie die U-Bahn Linie 2 und steigen Sie am Alexanderplatz aus.",
        "question": "Qaysi metro liniyasiga o‘tirish kerak?",
        "options": [
          "Liniya 5",
          "Liniya 2",
          "Liniya 10"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "de_lesson_8",
      "lang": "de",
      "level": "B1",
      "number": 8,
      "title": "Bog‘lovchilar (weil, dass, obwohl) va Rasmiy maktub",
      "goal": "Ergashgan gaplar tuzish, sabab va to‘siqsizlikni ifodalash, rasmiy xat yozish.",
      "theory": {
        "introUz": "Nemis tilida \"weil\" (chunki), \"dass\" (ki), \"obwohl\" (garchi) bog‘lovchilaridan keyin FE’L GAPNING ENG OXIRIGA sakraydi:",
        "rules": [
          {
            "pattern": "weil (chunki)",
            "pronunciation": "fe’l gap oxirida",
            "exampleDe": "Ich lerne Deutsch, weil ich in Berlin studieren möchte.",
            "exampleUz": "Nemis tilini o‘rganyapman, chunki Berlinda o‘qishni xohlayman."
          },
          {
            "pattern": "obwohl (garchand)",
            "pronunciation": "to‘siqsizlik",
            "exampleDe": "Obwohl es regnet, gehe ich spazieren.",
            "exampleUz": "Yomg‘ir yog‘ayotganiga qaramay, aylanib kelaman."
          },
          {
            "pattern": "Rasmiy murojaat",
            "pronunciation": "xat yozishda",
            "exampleDe": "Sehr geehrte Damen und Herren, ...",
            "exampleUz": "Hurmatli xonimlar va janoblar..."
          }
        ],
        "table": [
          {
            "de": "Ich weiß, dass du Recht hast.",
            "uz": "Bilmanki, sen haqlisan."
          },
          {
            "de": "Ich kann nicht kommen, weil ich krank bin.",
            "uz": "Kela olmayman, chunki kasalman."
          },
          {
            "de": "Mit freundlichen Grüßen",
            "uz": "Hurmat bilan (xat yakuni)"
          },
          {
            "de": "Ich bewerbe mich um diese Stelle.",
            "uz": "Ushbu bo‘sh ish o‘rniga hujjat topshiryapman."
          }
        ]
      },
      "exercises": [
        {
          "id": "de_ex8_1",
          "type": "multiple-choice",
          "question": "\"Ich lerne Deutsch, weil es mir Spaß ______ (menga yoqadi).\":",
          "options": [
            "macht",
            "machen",
            "machte",
            "gemacht"
          ],
          "correctIndex": 0,
          "explanation": "\"weil\" dan keyin fe’l shaxs-sonda tuslanib, gapning eng oxirida turadi: macht."
        },
        {
          "id": "de_ex8_2",
          "type": "fill-blank",
          "question": "Sehr ______ Damen und Herren, (Hurmatli)",
          "placeholder": "geehrte...",
          "correctAnswer": "geehrte",
          "hint": "geehrte"
        }
      ],
      "speakingPrompt": {
        "textDe": "Ich möchte in Deutschland arbeiten, weil es dort viele Möglichkeiten gibt.",
        "textUz": "Men Germaniyada ishlamoqchiman, chunki u yerda ko‘plab imkoniyatlar bor.",
        "tip": "Möglichkeiten [moek-likh-kay-ten] so‘ziga urg‘u bering."
      },
      "kulturtip": {
        "title": "🇩🇪 Bewerbung (Ishga topshirish standarti)",
        "text": "Nemis ish beruvchilariga hujjat topshirganda rezyume (Lebenslauf) rasm bilan xronologik tartibda va motivatsion maktub aniq dalillar bilan yozilishi shart."
      },
      "listening": {
        "title": "🎧 Tinglab tushunish",
        "audioText": "Ich rufe an, weil ich mich für die Stelle als Web-Entwickler bewerben möchte.",
        "question": "U nima maqsadda qo‘ng‘iroq qildi?",
        "options": [
          "Mahsulot sotib olish uchun",
          "Veb-dasturchi lavozimiga ariza topshirish uchun",
          "Kechirim so‘rash uchun"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "de_lesson_9",
      "lang": "de",
      "level": "A2",
      "number": 9,
      "title": "Mehmonxonada joylashish (Im Hotel & Zimmer buchen)",
      "goal": "Mehmonxonada xona bron qilish, sharoitlarni surishtirish va qulayliklarni so‘rashni o‘rganish.",
      "theory": {
        "introUz": "Sayohat davomida mehmonxonada xona tanlash, nonushta (Frühstück) va qo‘shimcha xizmatlar haqida nemischa bemalol so‘rash qoidalari.",
        "rules": [
          {
            "pattern": "Ich möchte ein Zimmer reservieren.",
            "pronunciation": "Ix mo‘xte ayn Tsimmer rezerviren",
            "exampleDe": "Ich möchte ein Einzelzimmer für zwei Nächte.",
            "exampleUz": "Men ikki kechaga bittalik xona band qilmoqchiman."
          },
          {
            "pattern": "Ist das Frühstück inklusive?",
            "pronunciation": "Ist das Fryushtyuk inkluzive?",
            "exampleDe": "Ist das Frühstück im Preis inbegriffen?",
            "exampleUz": "Nonushta narx ichiga kiradimi?"
          },
          {
            "pattern": "Gibt es ...? (bormi?)",
            "pronunciation": "Gibt es ...?",
            "exampleDe": "Gibt es kostenloses WLAN im Zimmer?",
            "exampleUz": "Xonada bepul Wi-Fi bormi?"
          },
          {
            "pattern": "Wann ist der Check-out?",
            "pronunciation": "Vann ist der Chek-aut?",
            "exampleDe": "Bis wann müssen wir das Zimmer verlassen?",
            "exampleUz": "Soat nechagacha xonani bo‘shatishimiz kerak?"
          }
        ],
        "table": [
          {
            "de": "das Einzelzimmer / Doppelzimmer",
            "uz": "bir kishilik / ikki kishilik xona"
          },
          {
            "de": "der Schlüssel / die Schlüsselkarte",
            "uz": "kalit / plastik karta kalit"
          },
          {
            "de": "die Klimaanlage funktioniert nicht",
            "uz": "konditsioner ishlamayapti"
          },
          {
            "de": "Können Sie ein Taxi rufen?",
            "uz": "Taksi chaqirib bera olasizmi?"
          }
        ]
      },
      "kulturtip": {
        "title": "Germaniyada \"Kurtaxe\" (Turistik soliq)",
        "text": "Germaniyaning ko‘plab sayyohlik shaharlarida mehmonxona narxidan tashqari kuniga 2-3 yevro Kurtaxe (shahar yig‘imi) olinadi. Buning evaziga sizga shahar jamoat transportida bepul yurish kartasi beriladi."
      },
      "listening": {
        "title": "Hörverstehen: Rezeption suhbati",
        "audioText": "Guten Tag, ich habe eine Reservierung auf den Namen Alimovich für drei Nächte.",
        "question": "Mehmon qaysi ismga xona bron qilgan?",
        "options": [
          "Schmidt",
          "Alimovich",
          "Müller",
          "Weber"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Guten Tag! Ich habe ein Doppelzimmer mit Balkon reserviert.",
        "textUz": "Xayrli kun! Men balkonli ikki kishilik xona band qilgan edim.",
        "tip": "Reserviert so‘zida urg‘uni oxirgi bo‘g‘inga bering."
      },
      "exercises": [
        {
          "question": "\"Bir kishilik xona\" nemis tilida nima deyiladi?",
          "options": [
            "das Doppelzimmer",
            "das Einzelzimmer",
            "die Wohnung",
            "das Büro"
          ],
          "correctIndex": 1,
          "explanation": "Einzel (yakka) + Zimmer (xona) = das Einzelzimmer."
        },
        {
          "question": "\"Nonushta narxga kiradimi?\" savoli qaysi?",
          "options": [
            "Wo ist das Frühstück?",
            "Ist das Frühstück inklusive?",
            "Möchten Sie frühstücken?",
            "Ich esse kein Frühstück."
          ],
          "correctIndex": 1,
          "explanation": "Inklusive — o‘z ichiga oladi degani."
        },
        {
          "question": "\"Gibt es ______ WLAN?\" (bepul Wi-Fi bormi):",
          "options": [
            "kostenlos",
            "kostenloses",
            "teuer",
            "kein"
          ],
          "correctIndex": 1,
          "explanation": "das WLAN neytrum bo‘lgani uchun Akkusativda \"kostenloses\" bo‘ladi."
        }
      ]
    },
    {
      "id": "de_lesson_10",
      "lang": "de",
      "level": "A2",
      "number": 10,
      "title": "Modal fe’llar: Qoidalar va Ruxsat (können, müssen, dürfen)",
      "goal": "Modal fe’llar yordamida imkoniyat, majburiyat va taqiqlarni erkin ifodalash.",
      "theory": {
        "introUz": "Nemis tilida modal fe’l 2-o‘rinda tuslanadi, asosiy fe’l esa gapning eng oxiriga noaniq shaklda (Infinitiv) tushadi.",
        "rules": [
          {
            "pattern": "können (qila olmoq)",
            "pronunciation": "könen",
            "exampleDe": "Ich kann gut Deutsch sprechen.",
            "exampleUz": "Men nemischa yaxshi gapira olaman."
          },
          {
            "pattern": "müssen (majbur bo‘lmoq)",
            "pronunciation": "myussen",
            "exampleDe": "Ich muss heute viel arbeiten.",
            "exampleUz": "Men bugun ko‘p ishlashim kerak (majburman)."
          },
          {
            "pattern": "dürfen (ruxsat bo‘lmoq)",
            "pronunciation": "dyurfen",
            "exampleDe": "Hier darf man nicht rauchen.",
            "exampleUz": "Bu yerda chekish mumkin emas (taqiqlangan)."
          },
          {
            "pattern": "wollen / möchten (xohlamoq)",
            "pronunciation": "vollen / mo‘xten",
            "exampleDe": "Wir wollen nach Berlin fahren.",
            "exampleUz": "Biz Berlinga bormoqchimiz."
          }
        ],
        "table": [
          {
            "de": "ich kann / du kannst / er kann",
            "uz": "men qila olaman / sen / u"
          },
          {
            "de": "ich muss / du musst / er muss",
            "uz": "men majburman / sen / u"
          },
          {
            "de": "ich darf / du darfst / er darf",
            "uz": "menga ruxsat / senga / unga"
          },
          {
            "de": "Hier darf man nicht parken.",
            "uz": "Bu yerda mashina qo‘yish taqiqlangan."
          }
        ]
      },
      "kulturtip": {
        "title": "Germaniyada Qoidalar (Ordnung muss sein)",
        "text": "\"Dürfen nicht\" iborasi nemis madaniyatida qat’iy qonuniy taqiqni bildiradi. Masalan yakshanba kunlari shovqin solish taqiqlanadi (Sonntagsruhe)."
      },
      "listening": {
        "title": "Hörverstehen: Qoidalar",
        "audioText": "Entschuldigung, aber hier dürfen Sie leider keine Fotos machen.",
        "question": "Ushbu joyda nima qilish taqiqlangan?",
        "options": [
          "Gaplashish",
          "Rasmga tushirish",
          "Telefon ishlatish",
          "Ovqatlanish"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Entschuldigung, darf ich Sie kurz etwas fragen?",
        "textUz": "Kechirasiz, sizdan bir narsani so‘rasam maylimi?",
        "tip": "Xushmuomala murojaatda \"darf ich...\" eng oliyjanob iboradir."
      },
      "exercises": [
        {
          "question": "\"Ich ______ heute zum Arzt gehen (borishim shart/kerak).\"",
          "options": [
            "kann",
            "muss",
            "darf",
            "willst"
          ],
          "correctIndex": 1,
          "explanation": "Ich bilan müssen -> muss shaklida tuslanadi."
        },
        {
          "question": "\"Hier darf man nicht rauchen\" gapi qanday tarjima qilinadi?",
          "options": [
            "Bu yerda chekish mumkin",
            "Bu yerda chekish taqiqlangan",
            "Men chekmoqchiman",
            "Ular chekishmaydi"
          ],
          "correctIndex": 1,
          "explanation": "nicht dürfen — ruxsat yo‘q / taqiqlangan degani."
        },
        {
          "question": "Modal fe’lli gapda asosiy fe’l qayerda turadi?",
          "options": [
            "1-o‘rinda",
            "2-o‘rinda",
            "Gapning eng oxirida (Infinitiv)",
            "Ega yonida"
          ],
          "correctIndex": 2,
          "explanation": "Nemis tili ramkali strukturasi (Satzklammer) bo‘yicha asosiy fe’l eng oxirga boradi."
        }
      ]
    },
    {
      "id": "de_lesson_11",
      "lang": "de",
      "level": "B1",
      "number": 11,
      "title": "Salomatlik va Shifokor qabulida (Beim Arzt & Gesundheit)",
      "goal": "Shifokorga tana a’zolaridagi og‘riqlar, kasallik belgilari va dori-darmonlar haqida aniq tushuntirish.",
      "theory": {
        "introUz": "Germaniyada shifokor qabuliga yozilish (Termin vereinbaren) va o‘z sog‘lig‘ingiz haqida gapirish uchun kerakli grammatika va ifodalar.",
        "rules": [
          {
            "pattern": "... tut weh / tun weh (og‘riyapti)",
            "pronunciation": "tut vey",
            "exampleDe": "Mein Kopf tut weh.",
            "exampleUz": "Mening boshim og‘riyapti."
          },
          {
            "pattern": "Ich habe Schmerzen (og‘riq bor)",
            "pronunciation": "Ix xabe Shmerts-en",
            "exampleDe": "Ich habe starke Halsschmerzen.",
            "exampleUz": "Mening tomog‘im qattiq og‘riyapti."
          },
          {
            "pattern": "Ich fühle mich nicht wohl",
            "pronunciation": "Ix fyule mix nixt vol",
            "exampleDe": "Seit gestern fühle ich mich schwach.",
            "exampleUz": "Kechadan beri o‘zimni holsiz his qilyapman."
          },
          {
            "pattern": "einnehmen (dori ichmoq/qabul qilmoq)",
            "pronunciation": "ayn-neymen",
            "exampleDe": "Nehmen Sie diese Tabletten dreimal täglich.",
            "exampleUz": "Ushbu tabletkalarni kuniga uch mahal iching."
          }
        ],
        "table": [
          {
            "de": "der Kopf / die Kopfschmerzen",
            "uz": "bosh / bosh og‘rig‘i"
          },
          {
            "de": "das Fieber / Ich habe hohes Fieber",
            "uz": "isitma / menda yuqori isitma bor"
          },
          {
            "de": "die Apotheke / das Rezept",
            "uz": "dorixona / shifokor retsepti"
          },
          {
            "de": "Gute Besserung!",
            "uz": "Tezroq sog‘ayib keting!"
          }
        ]
      },
      "kulturtip": {
        "title": "Germaniyada \"Krankmeldung\" va Sug‘urta",
        "text": "Agar Germaniyada ishlasangiz va kasal bo‘lib qolsangiz, shifokor sizga \"Arbeitsunfähigkeitsbescheinigung\" (kasallik varaqasi) beradi. Uni ish beruvchiga va Krankenkasse (tibbiy sug‘urta)ga topshirasiz."
      },
      "listening": {
        "title": "Hörverstehen: Shifokor xonasida",
        "audioText": "Nehmen Sie bitte zweimal täglich eine Tablette nach dem Essen mit viel Wasser.",
        "question": "Bemor dorini qachon va qanday ichishi kerak?",
        "options": [
          "Ovqatdan oldin bir marta",
          "Kuniga ikki marta ovqatdan keyin suv bilan",
          "Faqat kechasi uxlashdan oldin",
          "Haftada bir marta"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Ich brauche einen dringenden Termin, weil ich starke Bauchschmerzen habe.",
        "textUz": "Menga shoshilinch qabul kerak, chunki qornim qattiq og‘riyapti.",
        "tip": "dringenden (shoshilinch) so‘zini ta’kidlab ayting."
      },
      "exercises": [
        {
          "question": "\"Mening tishim og‘riyapti\" nemischa qanday bo‘ladi?",
          "options": [
            "Mein Zahn tut weh.",
            "Ich habe Zahnbürste.",
            "Mein Zahn ist schön.",
            "Der Zahn geht weg."
          ],
          "correctIndex": 0,
          "explanation": "weh tun — og‘rimoq. Birlikda: tut weh."
        },
        {
          "question": "\"Gute Besserung!\" nima ma’noni bildiradi?",
          "options": [
            "Xayrli tong!",
            "Yoqimli ishtaha!",
            "Tezroq tuzalib keting!",
            "Omad tilayman!"
          ],
          "correctIndex": 2,
          "explanation": "Kasal bo‘lgan odamga tilak bildirishda ishlatiladi."
        },
        {
          "question": "\"Tabletkalarni kuniga 3 mahal iching\" tarjimasi:",
          "options": [
            "Nehmen Sie Tabletten dreimal täglich.",
            "Essen Sie Tabletten morgen.",
            "Trinken Sie Tabletten nicht.",
            "Kaufen Sie Tabletten."
          ],
          "correctIndex": 0,
          "explanation": "Dori qabul qilishda \"einnehmen\" yoki \"nehmen\" fe’li ishlatiladi."
        }
      ]
    },
    {
      "id": "de_lesson_12",
      "lang": "de",
      "level": "B1",
      "number": 12,
      "title": "Nisbiy ergash gaplar (Relativsätze: der, die, das)",
      "goal": "Shaxslar va narsalarni batafsil tasvirlash, boy va murakkab gaplar tuzish.",
      "theory": {
        "introUz": "Nisbiy gaplar o‘zbek tilidagi \"...gan odam/narsa\" ma’nosini beradi. Nisbiy olmosh otning jinsi va gapdagi kelishigiga qarab belgilanadi, fe’l esa gap oxiriga boradi.",
        "rules": [
          {
            "pattern": "der Mann, der ... (erkak kishi)",
            "pronunciation": "der Mann, der",
            "exampleDe": "Das ist der Mann, der hier arbeitet.",
            "exampleUz": "Bu yerda ishlaydigan kishi aynan mana shu."
          },
          {
            "pattern": "die Frau, die ... (ayol kishi)",
            "pronunciation": "di Frau, di",
            "exampleDe": "Das ist die Lehrerin, die Deutsch unterrichtet.",
            "exampleUz": "Nemis tilidan dars beradigan o‘qituvchi mana shu."
          },
          {
            "pattern": "das Buch, das ... (o‘rta jins)",
            "pronunciation": "das Bux, das",
            "exampleDe": "Das ist das Buch, das ich gestern gelesen habe.",
            "exampleUz": "Bu kecha men o‘qigan kitob."
          },
          {
            "pattern": "die Leute, die ... (ko‘plik)",
            "pronunciation": "di Loyte, di",
            "exampleDe": "Ich kenne die Leute, die nebenan wohnen.",
            "exampleUz": "Men yon qo‘shni bo‘lib yashaydigan odamlarni taniyman."
          }
        ],
        "table": [
          {
            "de": "Nominativ: der / die / das / die",
            "uz": "Bosh kelishikdagi nisbiy olmoshlar"
          },
          {
            "de": "Akkusativ: den / die / das / die",
            "uz": "Tushum kelishigidagi nisbiy olmoshlar"
          },
          {
            "de": "Dativ: dem / der / dem / denen",
            "uz": "Jo‘nalish kelishigidagi nisbiy olmoshlar"
          },
          {
            "de": "Das ist alles, was ich brauche.",
            "uz": "Menga kerak bo‘lgan hamma narsa shu."
          }
        ]
      },
      "kulturtip": {
        "title": "B1 darajasi nutqning kaliti",
        "text": "Relativsätze (nisbiy gaplar)siz B1 yoki B2 imtihonini topshirib bo‘lmaydi. Bu grammatika sizning nutqingizni bolalarcha qisqa gaplardan professional nemis tiliga olib chiqadi."
      },
      "listening": {
        "title": "Hörverstehen: Shaxsni tanitish",
        "audioText": "Kennen Sie die Kollegin, die neu in unserer Abteilung angefangen hat?",
        "question": "Gap qaysi xodim haqida ketmoqda?",
        "options": [
          "Eski boshliq",
          "Yangi ish boshlagan hamkasb",
          "Mijoz",
          "Talaba"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Ich suche eine Wohnung, die in der Nähe vom Bahnhof liegt.",
        "textUz": "Men vokzalga yaqin joylashgan kvartira qidiryapman.",
        "tip": "die in der Nähe... iborasini pauzasiz bir nafasda ayting."
      },
      "exercises": [
        {
          "question": "\"Das ist der Computer, ______ sehr schnell funktioniert.\"",
          "options": [
            "der",
            "die",
            "das",
            "den"
          ],
          "correctIndex": 0,
          "explanation": "der Computer erkak jinsida (Nominativ) bo‘lgani uchun \"der\" bo‘ladi."
        },
        {
          "question": "\"Das ist die Stadt, in ______ ich geboren bin.\"",
          "options": [
            "der",
            "die",
            "das",
            "den"
          ],
          "correctIndex": 0,
          "explanation": "in + Dativ: die Stadt Dativda \"der Stadt\" bo‘ladi."
        },
        {
          "question": "Nisbiy ergash gapda (Relativsatz) tuslangan fe’l qayerda turadi?",
          "options": [
            "Boshida",
            "O‘rtasida",
            "Eng oxirida",
            "Nisbiy olmoshdan keyin"
          ],
          "correctIndex": 2,
          "explanation": "Ergash gaplarda fe’l doimo eng oxirgi o‘ringa suriladi."
        }
      ]
    },
    {
      "id": "de_lesson_13",
      "lang": "de",
      "level": "B1",
      "number": 13,
      "title": "Konjunktiv II: Xushmuomalalik va Istaklar (hätte, wäre, würde)",
      "goal": "Orzular, xayoliy vaziyatlar va eng yuksak xushmuomala iltimoslarni tuzish.",
      "theory": {
        "introUz": "Konjunktiv II — nemis tilining eng odobli va madaniyatli shakli. \"Iltimos, buni qilib bera olasizmi?\" yoki \"Agar vaqtim bo‘lganida...\" kabi jumlalar shu orqali yasaladi.",
        "rules": [
          {
            "pattern": "würde + Infinitiv (qilar edim)",
            "pronunciation": "vyurde",
            "exampleDe": "Ich würde gern nach Deutschland reisen.",
            "exampleUz": "Men Germaniyaga bajonidil sayohat qilgan bo‘lardim."
          },
          {
            "pattern": "hätte (menda bo‘lganida edi)",
            "pronunciation": "xette",
            "exampleDe": "Wenn ich mehr Geld hätte, würde ich ein Haus kaufen.",
            "exampleUz": "Agar ko‘proq pulim bo‘lganida, uy sotib olardim."
          },
          {
            "pattern": "wäre (bo‘lganimda edi)",
            "pronunciation": "vere",
            "exampleDe": "Wenn ich du wäre, würde ich mehr lernen.",
            "exampleUz": "Agar men sening o‘rningda bo‘lganimda, ko‘proq o‘qirdim."
          },
          {
            "pattern": "Könnten Sie ...? (qila olarmidingiz?)",
            "pronunciation": "Kyo‘nten Zi",
            "exampleDe": "Könnten Sie mir bitte helfen?",
            "exampleUz": "Iltimos, menga yordam bera olarmidingiz?"
          }
        ],
        "table": [
          {
            "de": "Ich hätte gern einen Kaffee.",
            "uz": "Bir chashka kofe berolmaysizmi? (xushmuomala)"
          },
          {
            "de": "Könnten Sie das bitte wiederholen?",
            "uz": "Buni qaytara olasizmi, iltimos?"
          },
          {
            "de": "Würden Sie mir bitte die Tür öffnen?",
            "uz": "Eshikni ochib yubora olmaysizmi?"
          },
          {
            "de": "Das wäre toll / wunderbar!",
            "uz": "Bu ajoyib bo‘lar edi!"
          }
        ]
      },
      "kulturtip": {
        "title": "Nemis xushmuomalaligi (Höflichkeit)",
        "text": "Do‘konda yoki restoranda hech qachon \"Ich will...\" (men xohlayman) demang, bu juda qo‘pol eshitiladi. Har doim \"Ich hätte gern...\" (bajonidil olgan bo‘lardim) deb ayting."
      },
      "listening": {
        "title": "Hörverstehen: Xushmuomala iltimos",
        "audioText": "Könnten Sie mir bitte sagen, wo der nächste Geldautomat ist?",
        "question": "So‘rovchi nimani bilmoqchi?",
        "options": [
          "Eng yaqin bankomat qayerda",
          "Soat necha bo‘lganini",
          "Mehmonxona qayerda",
          "Poezd qachon ketishini"
        ],
        "correctIndex": 0
      },
      "speakingPrompt": {
        "textDe": "Ich hätte gern ein Glas Mineralwasser ohne Kohlensäure, bitte.",
        "textUz": "Gazlanmagan bir stakan mineral suv bersangiz, iltimos.",
        "tip": "hätte gern iborasini dona-dona va tabassum bilan ayting."
      },
      "exercises": [
        {
          "question": "\"Kafeda kofe so‘rashning eng xushmuomala usuli qaysi?\"",
          "options": [
            "Ich will Kaffee!",
            "Gib mir Kaffee!",
            "Ich hätte gern einen Kaffee, bitte.",
            "Kaffee her!"
          ],
          "correctIndex": 2,
          "explanation": "Ich hätte gern... xushmuomalalikning oltin qoidasidir."
        },
        {
          "question": "\"Agar vaqtim bo‘lganida, men kitob o‘qir edim\":",
          "options": [
            "Wenn ich Zeit habe, lese ich.",
            "Wenn ich Zeit hätte, würde ich lesen.",
            "Ich habe Zeit und lese.",
            "Ich will Zeit haben."
          ],
          "correctIndex": 1,
          "explanation": "hätte (shart) + würde lesen (natija) — Konjunktiv II."
        },
        {
          "question": "\"Könnten Sie mir bitte ______?\" (yordam bera olasizmi)",
          "options": [
            "helfen",
            "helfe",
            "hilft",
            "geholfen"
          ],
          "correctIndex": 0,
          "explanation": "könnten modal shakli bo‘lgani uchun asosiy fe’l Infinitiv (helfen)da bo‘ladi."
        }
      ]
    },
    {
      "id": "de_lesson_14",
      "lang": "de",
      "level": "B2",
      "number": 14,
      "title": "Ish suhbati va Rezyume taqdimoti (Vorstellungsgespräch & Bewerbung)",
      "goal": "Nemis kompaniyalari va ish beruvchilari oldida o‘z tajribasi, kuchli tomonlari va martaba rejalarini professional darajada gapirib berish.",
      "theory": {
        "introUz": "Germaniyada ishga kirish (Job-Interview)dagi eng muhim akademik va kasbiy leksika. O‘z yutuqlaringizni qanday asoslash va savollarga javob berish sirlari.",
        "rules": [
          {
            "pattern": "Ich verfüge über ... (men ega bo‘ldim)",
            "pronunciation": "Ix ferfyuge yuber",
            "exampleDe": "Ich verfüge über mehrjährige Erfahrung im IT-Bereich.",
            "exampleUz": "Men IT sohasida ko‘p yillik tajribaga egaman."
          },
          {
            "pattern": "Zu meinen Stärken gehören ... (kuchli tomonlarim)",
            "pronunciation": "Tsu maynen Shte‘rken",
            "exampleDe": "Zu meinen Stärken gehören Teamfähigkeit und Zuverlässigkeit.",
            "exampleUz": "Jamoada ishlash va mas’uliyatlilik mening kuchli tomonlarimdir."
          },
          {
            "pattern": "Ich habe mich für diese Stelle entschieden, weil ...",
            "pronunciation": "Ix xabe mix fyur...",
            "exampleDe": "Ich habe mich für Ihr Unternehmen entschieden, weil Sie innovativ sind.",
            "exampleUz": "Kompaniyangiz innovatsion bo‘lgani uchun aynan sizni tanladim."
          },
          {
            "pattern": "Ich bin in der Lage, ... zu (men qodirman)",
            "pronunciation": "in der Lage",
            "exampleDe": "Ich bin in der Lage, auch unter Stress ruhig zu arbeiten.",
            "exampleUz": "Men hatto bosim va stress ostida ham xotirjam ishlashga qodirman."
          }
        ],
        "table": [
          {
            "de": "der Lebenslauf / das Anschreiben",
            "uz": "rezyume (CV) / motivatsion xat"
          },
          {
            "de": "die Berufserfahrung / die Qualifikation",
            "uz": "ish tajribasi / malaka"
          },
          {
            "de": "das Gehalt / die Gehaltsvorstellung",
            "uz": "maosh / kutilayotgan maosh miqdori"
          },
          {
            "de": "die Weiterbildungsmöglichkeiten",
            "uz": "malaka oshirish imkoniyatlari"
          }
        ]
      },
      "kulturtip": {
        "title": "Nemis intervyu madaniyati",
        "text": "Germaniyada ish intervyusiga 10 daqiqa oldin kelish (Pünktlichkeit) shart. Ko‘zga tik qarab gapirish (Blickkontakt) va o‘z zaif tomonlaringizni halollik bilan yechimi bilan aytish yuksak baholanadi."
      },
      "listening": {
        "title": "Hörverstehen: HR menejer savoli",
        "audioText": "Warum sollten wir uns gerade für Sie entscheiden und welche Erfahrungen bringen Sie mit?",
        "question": "HR menejer qanday savol berdi?",
        "options": [
          "Qachon ta’tilga chiqmoqchisiz?",
          "Nima uchun aynan sizni tanlashimiz kerak?",
          "Qayerda yashaysiz?",
          "Necha yoshdasiz?"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Aufgrund meiner fundierten Ausbildung und praktischen Erfahrung kann ich schnell Mehrwert für Ihr Team schaffen.",
        "textUz": "Chuqur bilimim va amaliy tajribam tufayli jamoangizga tezda katta foyda keltira olaman.",
        "tip": "Mehrwert (qo‘shimcha qiymat / foyda) so‘zini professional intonatsiya bilan ta’kidlang."
      },
      "exercises": [
        {
          "question": "\"Jamoada ishlash qobiliyati\" nemischa nima deyiladi?",
          "options": [
            "die Pünktlichkeit",
            "die Teamfähigkeit",
            "die Einsamkeit",
            "die Faulheit"
          ],
          "correctIndex": 1,
          "explanation": "Team (jamoa) + Fähigkeit (qobiliyat) = die Teamfähigkeit."
        },
        {
          "question": "\"Men ko‘p yillik tajribaga egaman\" professional ifodasi:",
          "options": [
            "Ich habe keine Erfahrung.",
            "Ich verfüge über langjährige Erfahrung.",
            "Ich brauche Erfahrung.",
            "Erfahrung ist gut."
          ],
          "correctIndex": 1,
          "explanation": "verfügen über + Akkusativ — rasmiy va kasbiy tilda egalik qilishni bildiradi."
        },
        {
          "question": "\"der Lebenslauf\" hujjati nima?",
          "options": [
            "Pasport",
            "Rezyume (CV)",
            "Haydovchilik guvohnomasi",
            "Diplom ilovasi"
          ],
          "correctIndex": 1,
          "explanation": "Lebenslauf — Germaniyada ishga topshirishda eng asosiy rezyume hujjati."
        }
      ]
    },
    {
      "id": "de_lesson_15",
      "lang": "de",
      "level": "B2",
      "number": 15,
      "title": "Passiv zamon va Rasmiy hisobotlar (Passiv Präsens & Präteritum)",
      "goal": "B2 darajadagi rasmiy hisobotlar, yangiliklar va jarayonlarni Passiv (majhul nisbat)da ifodalash.",
      "theory": {
        "introUz": "Passiv nemis rasmiy tili, yangiliklar va biznes hujjatlarining asosidir. Unda harakatni kim bajargani emas, harakatning o‘zi va natijasi birinchi o‘ringa chiqadi. Qoida: werden + Partizip II.",
        "rules": [
          {
            "pattern": "wird + Partizip II (Passiv Präsens)",
            "pronunciation": "vird ... ge-...-t",
            "exampleDe": "Das Auto wird repariert.",
            "exampleUz": "Mashina ta’mirlanmoqda."
          },
          {
            "pattern": "wurde + Partizip II (Passiv Präteritum)",
            "pronunciation": "vurde ... ge-...-t",
            "exampleDe": "Das Dokument wurde gestern unterschrieben.",
            "exampleUz": "Hujjat kecha imzolandi."
          },
          {
            "pattern": "von + Dativ (kim tomonidan)",
            "pronunciation": "fon",
            "exampleDe": "Das Projekt wird von unserem Team geleitet.",
            "exampleUz": "Loyiha bizning jamoamiz tomonidan boshqarilmoqda."
          },
          {
            "pattern": "muss gemacht werden (bajarilishi kerak)",
            "pronunciation": "mus gemaxt verden",
            "exampleDe": "Diese Aufgabe muss heute erledigt werden.",
            "exampleUz": "Ushbu vazifa bugun bajarilishi kerak."
          }
        ],
        "table": [
          {
            "de": "Es wird gebaut.",
            "uz": "U qurilmoqda."
          },
          {
            "de": "Es wurde entschieden.",
            "uz": "Qaror qabul qilindi."
          },
          {
            "de": "Die E-Mail wurde gesendet.",
            "uz": "Elektron xat yuborildi."
          },
          {
            "de": "Die Regeln müssen beachtet werden.",
            "uz": "Qoidalarga rioya qilinishi shart."
          }
        ]
      },
      "kulturtip": {
        "title": "Passiv nemis ilmiy va texnik tili",
        "text": "Germaniyada universitetda o‘qiyotganda barcha ilmiy ishlar (Hausarbeit, Bachelorarbeit) deyarli faqat Passiv shaklda yoziladi. Masalan: \"Es wurde untersucht...\" (tadqiq qilindi)."
      },
      "listening": {
        "title": "Hörverstehen: Ofis xabarnomasi",
        "audioText": "Der neue Vertrag wurde heute Morgen von beiden Seiten erfolgreich unterzeichnet.",
        "question": "Shartnoma bilan nima sodir bo‘ldi?",
        "options": [
          "Bekor qilindi",
          "Ikkala tomon tomonidan imzolandi",
          "Yo‘qotib qo‘yildi",
          "Keyinga qoldirildi"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Alle relevanten Daten wurden bereits im System erfasst und überprüft.",
        "textUz": "Barcha kerakli ma’lumotlar tizimga kiritildi va tekshirildi.",
        "tip": "erfasst und überprüft — professional biznes nutqining yorqin namunasi."
      },
      "exercises": [
        {
          "question": "\"Das Haus ______ vor zwei Jahren gebaut (Passiv Präteritum).\":",
          "options": [
            "wird",
            "wurde",
            "hat",
            "ist"
          ],
          "correctIndex": 1,
          "explanation": "O‘tgan zamon Passiv shaklida \"wurde\" ishlatiladi."
        },
        {
          "question": "\"Das Projekt wird von ______ Ingenieur geleitet.\"",
          "options": [
            "der",
            "dem",
            "den",
            "des"
          ],
          "correctIndex": 1,
          "explanation": "von predlogi doimo Dativ talab qiladi (der Ingenieur -> dem Ingenieur)."
        },
        {
          "question": "Passiv Präsens formulasi qaysi?",
          "options": [
            "haben + Partizip II",
            "sein + Partizip II",
            "werden + Partizip II",
            "können + Infinitiv"
          ],
          "correctIndex": 2,
          "explanation": "Passiv: werden (tuslangan) + Partizip II (gap oxirida)."
        }
      ]
    },
    {
      "id": "de_lesson_16",
      "lang": "de",
      "level": "B2",
      "number": 16,
      "title": "Bahs-munozara, Fikr isboti va Erkin Muloqot (Diskussion & Goethe B2)",
      "goal": "Har qanday mavzuda erkin bahslashish, o‘z nuqtai nazarini ilmiy va madaniy isbotlash, B2 xalqaro imtihoniga to‘liq tayyor bo‘lish.",
      "theory": {
        "introUz": "B2 darajasining cho‘qqisi — bahs va munozarada erkinlik. Bu darsda qarama-qarshi fikrlarni tahlil qilish, o‘z fikrini dalillash va murakkab kirish so‘zlari jamlangan.",
        "rules": [
          {
            "pattern": "Einerseits ..., andererseits ... (Bir tomondan ..., boshqa tomondan ...)",
            "pronunciation": "Aynarzayts ..., andrerzayts",
            "exampleDe": "Einerseits ist es praktisch, andererseits ist es teuer.",
            "exampleUz": "Bir tomondan bu qulay, boshqa tomondan esa qimmat."
          },
          {
            "pattern": "Meiner Auffassung nach ... (Mening fikrimcha / qarashimcha)",
            "pronunciation": "Mayner Auffassung nax",
            "exampleDe": "Meiner Auffassung nach spielt Bildung die wichtigste Rolle.",
            "exampleUz": "Mening qarashimcha, ta’lim eng muhim rol o‘ynaydi."
          },
          {
            "pattern": "Ich bin der festen Überzeugung, dass ... (Qat’iy ishonchim komilki)",
            "pronunciation": "festen Yubertsogung",
            "exampleDe": "Ich bin der festen Überzeugung, dass KI unsere Zukunft verändert.",
            "exampleUz": "Qat’iy ishonchim komilki, sun’iy intellekt kelajagimizni o‘zgartiradi."
          },
          {
            "pattern": "Zusammenfassend lässt sich sagen, dass ... (Xulosa qilib aytganda)",
            "pronunciation": "Tsuzammenfassend...",
            "exampleDe": "Zusammenfassend lässt sich sagen, dass beide Seiten Recht haben.",
            "exampleUz": "Xulosa qilib aytganda, ikkala tomon ham haq."
          }
        ],
        "table": [
          {
            "de": "Ich stimme Ihnen völlig zu.",
            "uz": "Sizning fikringizga to‘liq qo‘shilaman."
          },
          {
            "de": "Da bin ich ganz anderer Meinung.",
            "uz": "Bu masalada men butunlay boshqacha fikrdaman."
          },
          {
            "de": "Es liegt auf der Hand, dass ...",
            "uz": "Shubhasizki, ochiq-oydinki ..."
          },
          {
            "de": "Herzlichen Glückwunsch zum B2-Niveau!",
            "uz": "B2 darajasiga erishganingiz muborak bo‘lsin!"
          }
        ]
      },
      "kulturtip": {
        "title": "Goethe B2 imtihoni siri: \"Redemittel\"",
        "text": "Goethe / telc B2 imtihonida tekshiruvchilar sizning grammatikangizdan ko‘ra ko‘proq \"Redemittel\" (professional muloqot qoliplari)ni qanchalik tabiiy va ravon ishlatishingizga qarab eng yuqori ball qo‘yadilar."
      },
      "listening": {
        "title": "Hörverstehen: Podkast bahsi",
        "audioText": "Obwohl die Digitalisierung viele Vorteile bietet, sollten wir die sozialen Aspekte keineswegs vernachlässigen.",
        "question": "Spiker nimani e’tibordan chetda qoldirmaslik kerakligini aytdi?",
        "options": [
          "Faqat pulni",
          "Ijtimoiy jihatlarni",
          "Texnologiyani",
          "Qonunlarni"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Meiner festen Überzeugung nach eröffnet das Beherrschen von Fremdsprachen grenzenlose berufliche Perspektiven.",
        "textUz": "Qat’iy ishonchim komilki, chet tillarini puxta egallash cheksiz kasbiy istiqbollarni ochadi.",
        "tip": "Ushbu jumlani B2 darajasidagi intellektual notiqdek ravon va ishonch bilan ayting."
      },
      "exercises": [
        {
          "question": "\"Bir tomondan ..., boshqa tomondan ...\" ifodasi qaysi?",
          "options": [
            "Zuerst ..., dann ...",
            "Einerseits ..., andererseits ...",
            "Entweder ..., oder ...",
            "Weder ..., noch ..."
          ],
          "correctIndex": 1,
          "explanation": "Einerseits ..., andererseits ... — B2 darajasining eng nufuzli bog‘lovchisi."
        },
        {
          "question": "\"Sizning fikringizga to‘liq qo‘shilaman\" nemischa:",
          "options": [
            "Ich habe keine Meinung.",
            "Ich stimme Ihnen völlig zu.",
            "Ich bin dagegen.",
            "Das ist falsch."
          ],
          "correctIndex": 1,
          "explanation": "zustimmen — rozi bo‘lmoq / qo‘shilmoq."
        },
        {
          "question": "Goethe B2 imtihonida xulosa yasashda qaysi ibora ishlatiladi?",
          "options": [
            "Guten Tag",
            "Zusammenfassend lässt sich sagen, dass ...",
            "Ich weiß nicht",
            "Tschüss"
          ],
          "correctIndex": 1,
          "explanation": "Zusammenfassend lässt sich sagen — xulosa qilib aytganda."
        }
      ]
    }
  ],
  "en": [
    {
      "id": "en_lesson_1",
      "lang": "en",
      "level": "A1",
      "number": 1,
      "title": "English Alphabet, Pronunciation & Greetings",
      "goal": "Ingliz tili talaffuz sirlari (TH, SH, CH, PH) va kundalik salomlashishlarni o‘rganish.",
      "theory": {
        "introUz": "Ingliz tilida harflar alohida va so‘z ichida turlicha o‘qiladi. Eng muhim qoidalar:",
        "rules": [
          {
            "pattern": "TH",
            "pronunciation": "Tilsimon «Z» yoki «S»",
            "exampleDe": "this [zis] (bu), thank you [senk yu] (rahmat)",
            "exampleUz": "bu, rahmat"
          },
          {
            "pattern": "SH",
            "pronunciation": "«SH» deb o‘qiladi",
            "exampleDe": "she [shi:] (u qiz), shoe [shu:] (poyafzal)",
            "exampleUz": "u, poyafzal"
          },
          {
            "pattern": "CH",
            "pronunciation": "«CH» deb o‘qiladi",
            "exampleDe": "chair [cher] (stul), check [chek]",
            "exampleUz": "stul, tekshiruv"
          },
          {
            "pattern": "EE / EA",
            "pronunciation": "Cho‘ziq «II»",
            "exampleDe": "see [sii] (ko‘rmoq), tea [tii] (choy)",
            "exampleUz": "ko‘rmoq, choy"
          }
        ],
        "table": [
          {
            "de": "Hello / Hi",
            "uz": "Salom"
          },
          {
            "de": "Good morning",
            "uz": "Xayrli tong"
          },
          {
            "de": "Good afternoon",
            "uz": "Xayrli kun"
          },
          {
            "de": "Good evening",
            "uz": "Xayrli kech"
          },
          {
            "de": "Thank you very much",
            "uz": "Katta rahmat"
          },
          {
            "de": "You are welcome",
            "uz": "Arzimaydi"
          },
          {
            "de": "Goodbye / Bye",
            "uz": "Xayr"
          }
        ]
      },
      "exercises": [
        {
          "id": "en_ex1_1",
          "type": "multiple-choice",
          "question": "Kechqurun ko‘rishganda ingliz tilida qanday salom beriladi?",
          "options": [
            "Good morning",
            "Good afternoon",
            "Good evening",
            "Good night"
          ],
          "correctIndex": 2,
          "explanation": "\"Good evening\" — xayrli kech. (\"Good night\" esa faqat uxlashga ketganda xayrlashuvdir)."
        },
        {
          "id": "en_ex1_2",
          "type": "multiple-choice",
          "question": "\"Thank you\" iborasidagi \"TH\" tovushi qanday talaffuz qilinadi?",
          "options": [
            "Oddiy \"T\"",
            "Tilni tishlar orasiga qo‘yib \"S\"",
            "Oddiy \"K\"",
            "Oddiy \"P\""
          ],
          "correctIndex": 1,
          "explanation": "\"TH\" ingliz tilida tilsimon tovush hosil qiladi."
        }
      ],
      "speakingPrompt": {
        "textDe": "Hello! Nice to meet you. Have a great day!",
        "textUz": "Salom! Tanishganimdan xursandman. Kunningiz xayrli o‘tsin!",
        "tip": "Tovushni eshiting va baland ovozda takrorlang."
      },
      "kulturtip": {
        "title": "🇬🇧 Small Talk (Kichik samimiy suhbat)",
        "text": "Ingliz tilida gaplashganda to‘g‘ridan-to‘g‘ri masalaga o‘tishdan oldin ob-havo (\"Lovely weather today, isn't it?\") yoki hol-ahvol (\"How are you doing?\") so‘rash odob qoidasi sanaladi."
      },
      "listening": {
        "title": "🎧 Listening (Eshitib tushunish)",
        "audioText": "Hi, my name is John. I am from London.",
        "question": "John qayerdan kelgan?",
        "options": [
          "New Yorkdan",
          "Londondan",
          "Toshkentdan"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "en_lesson_2",
      "lang": "en",
      "level": "A1",
      "number": 2,
      "title": "To Be (Am, Is, Are) & Personal Pronouns",
      "goal": "Ingliz tilining asosi bo‘lgan \"To Be\" fe’li orqali o‘zini va boshqalarni ta’riflash.",
      "theory": {
        "introUz": "\"To be\" — bo‘lmoq fe’li hozirgi zamonda 3 xil shaklga ega: am, is, are:",
        "rules": [
          {
            "pattern": "I am (I'm)",
            "pronunciation": "Men ...man",
            "exampleDe": "I am a student.",
            "exampleUz": "Men talabaman."
          },
          {
            "pattern": "He / She / It is",
            "pronunciation": "U ...dir",
            "exampleDe": "He is smart. She is a doctor.",
            "exampleUz": "U aqlli. U shifokor."
          },
          {
            "pattern": "We / You / They are",
            "pronunciation": "Biz / Siz / Ular ...miz",
            "exampleDe": "We are ready. They are happy.",
            "exampleUz": "Biz tayyormiz. Ular xursand."
          }
        ],
        "table": [
          {
            "de": "I am from Uzbekistan.",
            "uz": "Men O‘zbekistondanman."
          },
          {
            "de": "How old are you?",
            "uz": "Yoshingiz nechada?"
          },
          {
            "de": "I am 20 years old.",
            "uz": "Men 20 yoshdaman."
          },
          {
            "de": "Are you ready?",
            "uz": "Siz tayyormisiz?"
          },
          {
            "de": "Yes, I am. / No, I am not.",
            "uz": "Ha, tayyorman. / Yo‘q, tayyor emasman."
          }
        ]
      },
      "exercises": [
        {
          "id": "en_ex2_1",
          "type": "multiple-choice",
          "question": "\"She ______ my best friend.\" Nuqtalar o‘rniga to‘g‘ri fe’lni qo‘ying:",
          "options": [
            "am",
            "is",
            "are",
            "be"
          ],
          "correctIndex": 1,
          "explanation": "\"She\" birlikda bo‘lgani uchun \"is\" ishlatiladi."
        },
        {
          "id": "en_ex2_2",
          "type": "fill-blank",
          "question": "We ______ very happy today.",
          "placeholder": "am, is yoki are...",
          "correctAnswer": "are",
          "hint": "We (biz) ko‘plik"
        }
      ],
      "speakingPrompt": {
        "textDe": "I am excited to learn English every day!",
        "textUz": "Men har kuni ingliz tilini o‘rganishdan xursandman!",
        "tip": "Excited [ik-say-tid] so‘ziga urg‘u bering."
      },
      "kulturtip": {
        "title": "🇬🇧 Respectful Pronouns",
        "text": "Ingliz tilida \"sen\" va \"siz\" bir xil \"You\" so‘zi bilan ifodalanadi. Murojaat samimiy bo‘lishi uchun \"please\", \"thank you\" va \"excuse me\" tez-tez ishlatiladi."
      },
      "listening": {
        "title": "🎧 Listening (Eshitib tushunish)",
        "audioText": "They are students at Oxford University.",
        "question": "Ular kimlar?",
        "options": [
          "O‘qituvchilar",
          "Talabalar (o‘quvchilar)",
          "Shifokorlar"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "en_lesson_3",
      "lang": "en",
      "level": "A1",
      "number": 3,
      "title": "Daily Routine & Present Simple Tense",
      "goal": "Har kungi odatiy harakatlar haqida gapirish (uyg‘onish, o‘qish, ishlash).",
      "theory": {
        "introUz": "Present Simple — har doim takrorlanadigan ish-harakatlar uchun ishlatiladi:",
        "rules": [
          {
            "pattern": "I / You / We / They",
            "pronunciation": "Fe’l o‘zgarmaydi",
            "exampleDe": "I work every day. We live in Tashkent.",
            "exampleUz": "Men har kuni ishlayman. Biz Toshkentda yashaymiz."
          },
          {
            "pattern": "He / She / It",
            "pronunciation": "Fe’lga -s yoki -es qo‘shiladi",
            "exampleDe": "He works. She speaks English.",
            "exampleUz": "U ishlaydi. U inglizcha gapiradi."
          },
          {
            "pattern": "Inkor shakli",
            "pronunciation": "do not (don't) / does not (doesn't)",
            "exampleDe": "I don't know. He doesn't speak German.",
            "exampleUz": "Men bilmayman. U nemischa gapirmaydi."
          }
        ],
        "table": [
          {
            "de": "I wake up at 7 AM.",
            "uz": "Men ertalab soat 7 da uyg‘onaman."
          },
          {
            "de": "I drink coffee every morning.",
            "uz": "Men har tong qahva ichaman."
          },
          {
            "de": "She studies at university.",
            "uz": "U universitetda o‘qiydi."
          },
          {
            "de": "Do you work here?",
            "uz": "Siz shu yerda ishlaysizmi?"
          }
        ]
      },
      "exercises": [
        {
          "id": "en_ex3_1",
          "type": "multiple-choice",
          "question": "\"He ______ English very well.\" To‘g‘ri shaklni tanlang:",
          "options": [
            "speaks",
            "speak",
            "speaking",
            "speaked"
          ],
          "correctIndex": 0,
          "explanation": "\"He\" bilan fe’lga -s qo‘shimchasi qo‘shiladi: speaks."
        },
        {
          "id": "en_ex3_2",
          "type": "fill-blank",
          "question": "I ______ not speak French. (Men fransuzcha gapirmayman)",
          "placeholder": "do yoki does...",
          "correctAnswer": "do",
          "hint": "I bilan do"
        }
      ],
      "speakingPrompt": {
        "textDe": "Every day I learn new English words and practice speaking.",
        "textUz": "Har kuni men yangi inglizcha so‘zlar o‘rganaman va muloqot mashq qilaman.",
        "tip": "Practice speaking deb ravon ayting."
      },
      "kulturtip": {
        "title": "🇬🇧 Punctuality & Apologies",
        "text": "Buyuk Britaniyada ozgina kechikilsa ham yoki yo‘lda birovga tegib ketilsa, doimo \"Sorry!\" yoki \"Excuse me!\" deb uzr so‘rash odatdir."
      },
      "listening": {
        "title": "🎧 Listening (Eshitib tushunish)",
        "audioText": "I work in an office from Monday to Friday. I love my job.",
        "question": "U qachon ishlaydi?",
        "options": [
          "Shanba va yakshanba",
          "Dushanbadan jumagacha",
          "Faqat tunda"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "en_lesson_4",
      "lang": "en",
      "level": "A1",
      "number": 4,
      "title": "Wh-Questions: Savol berish va Muloqot",
      "goal": "What, Where, When, Who, Why, How so‘roq so‘zlari bilan savollar tuzish.",
      "theory": {
        "introUz": "Ingliz tilida savol berish uchun maxsus Wh- so‘zlari ishlatiladi:",
        "rules": [
          {
            "pattern": "What ...?",
            "pronunciation": "Nima ...?",
            "exampleDe": "What is this? What do you want?",
            "exampleUz": "Bu nima? Nima xohlaysiz?"
          },
          {
            "pattern": "Where ...?",
            "pronunciation": "Qayerda / Qayerga ...?",
            "exampleDe": "Where do you live?",
            "exampleUz": "Qayerda yashaysiz?"
          },
          {
            "pattern": "When ...?",
            "pronunciation": "Qachon ...?",
            "exampleDe": "When does the class start?",
            "exampleUz": "Dars qachon boshlanadi?"
          },
          {
            "pattern": "Who ...?",
            "pronunciation": "Kim ...?",
            "exampleDe": "Who is your teacher?",
            "exampleUz": "O‘qituvchingiz kim?"
          },
          {
            "pattern": "How ...?",
            "pronunciation": "Qanday ...?",
            "exampleDe": "How are you today?",
            "exampleUz": "Bugun ahvolingiz qanday?"
          }
        ],
        "table": [
          {
            "de": "Where is the nearest bank?",
            "uz": "Eng yaqin bank qayerda?"
          },
          {
            "de": "How much does it cost?",
            "uz": "Bu qancha turadi?"
          },
          {
            "de": "What time is it now?",
            "uz": "Hozir soat necha?"
          },
          {
            "de": "Why are you learning English?",
            "uz": "Nega ingliz tilini o‘rganayapsiz?"
          }
        ]
      },
      "exercises": [
        {
          "id": "en_ex4_1",
          "type": "multiple-choice",
          "question": "\"Qayerda yashaysiz?\" inglizcha qanday so‘raladi?",
          "options": [
            "Where do you live?",
            "What do you live?",
            "Who do you live?",
            "When do you live?"
          ],
          "correctIndex": 0,
          "explanation": "\"Where\" joyni so‘rash uchun ishlatiladi."
        },
        {
          "id": "en_ex4_2",
          "type": "fill-blank",
          "question": "______ much is this coffee? (Bu qahva qancha turadi?)",
          "placeholder": "So‘roq so‘zini yozing...",
          "correctAnswer": "How",
          "hint": "How much"
        }
      ],
      "speakingPrompt": {
        "textDe": "Excuse me, where can I find a good restaurant around here?",
        "textUz": "Kechirasiz, bu atrofda yaxshi restoranni qayerdan topsam bo‘ladi?",
        "tip": "Around here ohangini to‘g‘ri chiqaring."
      },
      "kulturtip": {
        "title": "🇬🇧 Queuing (Navbatda turish madaniyati)",
        "text": "Britaniyada navbatsiz kirish eng katta qo‘pollik sanaladi. Har doim navbat oxiriga o‘tish va sabr qilish talab etiladi."
      },
      "listening": {
        "title": "🎧 Listening (Eshitib tushunish)",
        "audioText": "Excuse me, where is the train station? — Go straight and turn right.",
        "question": "Vokzalga qanday boriladi?",
        "options": [
          "Faqat chapga",
          "To‘g‘riga borib, o‘ngga buriling",
          "Orqaga qayting"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "en_lesson_5",
      "lang": "en",
      "level": "A1",
      "number": 5,
      "title": "At the Restaurant & Ordering Food",
      "goal": "Restoranda taom buyurtma qilish va hisob so‘rash (Can I have, I would like).",
      "theory": {
        "introUz": "Kafe va restoranda xushmuomalalik bilan buyurtma berish qoidalari:",
        "rules": [
          {
            "pattern": "I would like ... (I'd like)",
            "pronunciation": "Men ...ni xohlardim",
            "exampleDe": "I'd like a chicken sandwich, please.",
            "exampleUz": "Menga tovuqli sendvich bering, iltimos."
          },
          {
            "pattern": "Can I have ...?",
            "pronunciation": "... olsam bo‘ladimi?",
            "exampleDe": "Can I have a glass of water?",
            "exampleUz": "Bir stakan suv olsam bo‘ladimi?"
          },
          {
            "pattern": "Could we have the bill?",
            "pronunciation": "Hisobni bersangiz",
            "exampleDe": "Could we have the bill, please?",
            "exampleUz": "Hisobni keltirsangiz, iltimos."
          }
        ],
        "table": [
          {
            "de": "Are you ready to order?",
            "uz": "Buyurtma berishga tayyormisiz?"
          },
          {
            "de": "What do you recommend?",
            "uz": "Nimani tavsiya qilasiz?"
          },
          {
            "de": "For here or to go?",
            "uz": "Shu yerdami yoki olib ketishgami?"
          },
          {
            "de": "Keep the change.",
            "uz": "Qaytimi kerak emas (choychaqa)."
          }
        ]
      },
      "exercises": [
        {
          "id": "en_ex5_1",
          "type": "multiple-choice",
          "question": "\"Hisobni keltirsangiz, iltimos\" inglizcha qanday aytiladi?",
          "options": [
            "Could we have the bill, please?",
            "Where is the kitchen?",
            "I want to eat now.",
            "Goodbye!"
          ],
          "correctIndex": 0,
          "explanation": "\"Could we have the bill, please?\" — eng xushmuomala hisob so‘rash usuli."
        },
        {
          "id": "en_ex5_2",
          "type": "fill-blank",
          "question": "I would ______ a cup of coffee, please.",
          "placeholder": "so‘zni yozing...",
          "correctAnswer": "like",
          "hint": "like"
        }
      ],
      "speakingPrompt": {
        "textDe": "Can I have the menu and a bottle of sparkling water, please?",
        "textUz": "Menga menyu va bir shisha gazli suv keltira olasizmi, iltimos?",
        "tip": "Sparkling water [spa:kling wo:tə] deb ravon ayting."
      },
      "kulturtip": {
        "title": "🇺🇸 Tipping Culture (AQSHda choychaqa)",
        "text": "AQSH restoranlarida ofitsiantga hisobning kamida 15-20 foizi miqdorida \"tip\" (choychaqa) qoldirish majburiy etiket hisoblanadi."
      },
      "listening": {
        "title": "🎧 Listening (Eshitib tushunish)",
        "audioText": "Hi, are you ready to order? — Yes, I would like the grilled salmon with vegetables.",
        "question": "U qanday taom buyurtma qildi?",
        "options": [
          "Gamburger va fri",
          "Sabzavotlar bilan qovurilgan losos balig‘i",
          "Pitsa"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "en_lesson_6",
      "lang": "en",
      "level": "A2",
      "number": 6,
      "title": "Past Simple Tense (O‘tgan zamon)",
      "goal": "O‘tgan voqealarni aytish, to‘g‘ri (-ed) va noto‘g‘ri fe’llar (irregular verbs).",
      "theory": {
        "introUz": "Past Simple — o‘tgan zamonda aniq vaqtda sodir bo‘lib tugagan ish-harakatlar:",
        "rules": [
          {
            "pattern": "To‘g‘ri fe’llar",
            "pronunciation": "fe’l + ed",
            "exampleDe": "work → worked, play → played, visit → visited",
            "exampleUz": "ishladi, o‘ynadi, ziyorat qildi"
          },
          {
            "pattern": "Noto‘g‘ri fe’llar (Irregular)",
            "pronunciation": "ildizdan o‘zgaradi",
            "exampleDe": "go → went, see → saw, buy → bought",
            "exampleUz": "bordi, ko‘rdi, sotib oldi"
          },
          {
            "pattern": "Savol va inkor",
            "pronunciation": "did / didn't + fe’l 1-shaklda",
            "exampleDe": "Did you see him? — I didn't see him.",
            "exampleUz": "Uni ko‘rdingizmi? — Men uni ko‘rmadim."
          }
        ],
        "table": [
          {
            "de": "I went to London last summer.",
            "uz": "O‘tgan yozda Londonga bordim."
          },
          {
            "de": "What did you do yesterday?",
            "uz": "Kecha nima qildingiz?"
          },
          {
            "de": "We saw a fantastic movie.",
            "uz": "Biz ajoyib film ko‘rdik."
          },
          {
            "de": "She bought a new laptop.",
            "uz": "U yangi noutbuk sotib oldi."
          }
        ]
      },
      "exercises": [
        {
          "id": "en_ex6_1",
          "type": "multiple-choice",
          "question": "\"Yesterday I ______ to the supermarket.\" (go fe’lining o‘tgan zamoni):",
          "options": [
            "goed",
            "went",
            "gone",
            "going"
          ],
          "correctIndex": 1,
          "explanation": "\"go\" noto‘g‘ri fe’l bo‘lib, o‘tgan zamoni \"went\" bo‘ladi."
        },
        {
          "id": "en_ex6_2",
          "type": "fill-blank",
          "question": "Did you ______ your homework? (do fe’li so‘roqda 1-shaklda qoladi)",
          "placeholder": "do yoki did...",
          "correctAnswer": "do",
          "hint": "did bor joyda fe’l o‘zgarmaydi"
        }
      ],
      "speakingPrompt": {
        "textDe": "Last year I visited several European countries and improved my English.",
        "textUz": "O‘tgan yili men bir nechta Yevropa mamlakatlariga sayohat qildim va ingliz tilimni yaxshiladim.",
        "tip": "Improved [im-pru:vd] deb ohang bilan ayting."
      },
      "kulturtip": {
        "title": "🇬🇧 British vs. American English",
        "text": "Masalan: Britaniyada \"flat\" (kvartira), AQSHda \"apartment\"; Britaniyada \"lift\", AQSHda \"elevator\" deb aytiladi."
      },
      "listening": {
        "title": "🎧 Listening (Eshitib tushunish)",
        "audioText": "Last weekend I stayed at home and read a book because the weather was terrible.",
        "question": "U o‘tgan dam olish kunida nima qildi va nega?",
        "options": [
          "Do‘stlari bilan tog‘ga chiqdi",
          "Ob-havo yomonligi sababli uyda kitob o‘qidi",
          "Maktabga bordi"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "en_lesson_7",
      "lang": "en",
      "level": "A2",
      "number": 7,
      "title": "Future Plans: \"going to\" vs \"will\"",
      "goal": "Kelasi zamon rejalari (be going to) va kutilmagan qarorlar / bashoratlar (will).",
      "theory": {
        "introUz": "Kelajak haqida gapirganda 2 ta asosiy konstruksiya ishlatiladi:",
        "rules": [
          {
            "pattern": "be going to + fe’l",
            "pronunciation": "oldindan rejalashtirilgan niyat",
            "exampleDe": "I am going to study abroad next year.",
            "exampleUz": "Kelasi yil chet elda o‘qimoqchiman (rejada bor)."
          },
          {
            "pattern": "will + fe’l",
            "pronunciation": "gapirish paytida berilgan qaror / va’da",
            "exampleDe": "I will help you with your bags!",
            "exampleUz": "Sumkalaringizga yordam beraman!"
          },
          {
            "pattern": "Inkor shakllari",
            "pronunciation": "not going to / won't",
            "exampleDe": "I won't forget this.",
            "exampleUz": "Buni unutmayman."
          }
        ],
        "table": [
          {
            "de": "What are you going to do this weekend?",
            "uz": "Bu dam olish kunida nima qilmoqchisiz?"
          },
          {
            "de": "I think it will rain tomorrow.",
            "uz": "Menimcha, ertaga yomg‘ir yog‘adi."
          },
          {
            "de": "I will call you tonight.",
            "uz": "Bugun oqshom sizga qo‘ng‘iroq qilaman."
          },
          {
            "de": "We are going to buy a new car.",
            "uz": "Biz yangi mashina sotib olmoqchimiz."
          }
        ]
      },
      "exercises": [
        {
          "id": "en_ex7_1",
          "type": "multiple-choice",
          "question": "\"The phone is ringing! — Don't worry, I ______ answer it.\" (Hozir qaror qabul qilindi):",
          "options": [
            "will",
            "am going to",
            "did",
            "was"
          ],
          "correctIndex": 0,
          "explanation": "Hozirgi paytdagi tezkor qarorlar uchun \"will\" ishlatiladi."
        },
        {
          "id": "en_ex7_2",
          "type": "fill-blank",
          "question": "I am ______ to visit my grandparents this Sunday.",
          "placeholder": "going...",
          "correctAnswer": "going",
          "hint": "going to"
        }
      ],
      "speakingPrompt": {
        "textDe": "Next month I am going to take an official English exam to test my level.",
        "textUz": "Kelasi oy men o‘z darajamni tekshirish uchun rasmiy ingliz tili imtihonini topshirmoqchiman.",
        "tip": "Next month [nekst manth] ravon ayting."
      },
      "kulturtip": {
        "title": "🇬🇧 Idiom: \"Piece of cake\"",
        "text": "Agar inglizlar \"It is a piece of cake!\" deyishsa, bu keks haqida emas, balki \"Bu juda oson, suvdek gap!\" degan ma’noni anglatadi."
      },
      "listening": {
        "title": "🎧 Listening (Eshitib tushunish)",
        "audioText": "I am going to fly to New York on Monday for an international business conference.",
        "question": "U dushanba kuni qayerga va nima uchun uchmoqda?",
        "options": [
          "Ta’tilga Londonga",
          "Biznes konferensiya uchun New Yorkka",
          "O‘qish uchun Parijga"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "en_lesson_8",
      "lang": "en",
      "level": "B1",
      "number": 8,
      "title": "Present Perfect & Expressing Opinions",
      "goal": "Hayotiy tajribalar (have + V3), o‘z fikrini asoslash (In my opinion, I believe).",
      "theory": {
        "introUz": "Present Perfect — o‘tmishda boshlanib, natijasi hozirga ta’sir qilayotgan yoki hayotiy tajriba bo‘lgan voqealar:",
        "rules": [
          {
            "pattern": "have / has + V3",
            "pronunciation": "shaxsga qarab",
            "exampleDe": "I have visited 10 countries. She has finished her degree.",
            "exampleUz": "Men 10 ta davlatda bo‘lganman. U diplomini bitirdi."
          },
          {
            "pattern": "ever / never",
            "pronunciation": "savol va inkorda",
            "exampleDe": "Have you ever eaten sushi? — I have never tried it.",
            "exampleUz": "Hech sushi yeganmisiz? — Hech qachon tatib ko‘rmaganman."
          },
          {
            "pattern": "Fikr bildirish",
            "pronunciation": "IELTS speaking uchun",
            "exampleDe": "In my opinion, learning languages opens many doors.",
            "exampleUz": "Mening fikrimcha, tillarni o‘rganish ko‘p eshiklarni ochadi."
          }
        ],
        "table": [
          {
            "de": "Have you finished your homework yet?",
            "uz": "Vazifangizni tugatdingizmi?"
          },
          {
            "de": "I have already sent the email.",
            "uz": "Men xatni allaqachon yubordim."
          },
          {
            "de": "As far as I am concerned, ...",
            "uz": "Menimcha / Mening nazarimda..."
          },
          {
            "de": "I completely agree with you.",
            "uz": "Sizga to‘liq qo‘shilaman."
          }
        ]
      },
      "exercises": [
        {
          "id": "en_ex8_1",
          "type": "multiple-choice",
          "question": "\"Have you ever ______ to New York?\" (be fe’lining 3-shakli):",
          "options": [
            "been",
            "be",
            "was",
            "being"
          ],
          "correctIndex": 0,
          "explanation": "\"Have you ever been to...\" — biror joyda bo‘lganlik tajribasini so‘rashda ishlatiladi."
        },
        {
          "id": "en_ex8_2",
          "type": "fill-blank",
          "question": "In my ______, English is essential for global business. (fikrimcha)",
          "placeholder": "opinion...",
          "correctAnswer": "opinion",
          "hint": "opinion"
        }
      ],
      "speakingPrompt": {
        "textDe": "In my opinion, consistency is the key to mastering any foreign language.",
        "textUz": "Mening fikrimcha, har qanday chet tilini mukammal o‘rganishning kaliti — bu muntazamlikdir.",
        "tip": "Consistency [kənˈsɪstənsi] so‘ziga urg‘u bering."
      },
      "kulturtip": {
        "title": "🇬🇧 Agree to Disagree",
        "text": "Munozaralarda inglizlar to‘g‘ridan-to‘g‘ri \"You are wrong!\" (Siz nohaqsiz) demaydilar, balki \"I see your point, but...\" deb o‘z fikrini muloyim bayon qilishadi."
      },
      "listening": {
        "title": "🎧 Listening (Eshitib tushunish)",
        "audioText": "I have worked as a software engineer for five years, and I believe artificial intelligence will change education forever.",
        "question": "U necha yil muhandis bo‘lib ishlagan va nima haqida fikr bildirdi?",
        "options": [
          "1 yil, maktablar haqida",
          "5 yil, sun’iy intellekt ta’limni o‘zgartirishi haqida",
          "10 yil, robotlar haqida"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "en_lesson_9",
      "lang": "en",
      "level": "A2",
      "number": 9,
      "title": "Hotel Booking & Checking In (Mehmonxona va bron qilish)",
      "goal": "Mehmonxonada xona bron qilish, qulayliklar va xizmatlar haqida erkin gaplashish.",
      "theory": {
        "introUz": "Ingliz tilida mehmonxonaga buyurtma berish, bir yoki ikki kishilik xona so‘rash va hisob-kitob qilish jumlalari.",
        "rules": [
          {
            "pattern": "I would like to book a room.",
            "pronunciation": "Ay vud layk tu buk e rum",
            "exampleDe": "I would like to book a single room for three nights.",
            "exampleUz": "Uch kechaga bittalik xona band qilmoqchiman."
          },
          {
            "pattern": "Is breakfast included?",
            "pronunciation": "Iz brekfast inkludid?",
            "exampleDe": "Is continental breakfast included in the price?",
            "exampleUz": "Nonushta xona narxiga kiritilganmi?"
          },
          {
            "pattern": "Could you give me ...?",
            "pronunciation": "Kud yu giv mi",
            "exampleDe": "Could you give me the Wi-Fi password, please?",
            "exampleUz": "Wi-Fi parolini bera olasizmi, iltimos?"
          },
          {
            "pattern": "What time is check-out?",
            "pronunciation": "Vot taym iz chek-aut?",
            "exampleDe": "Check-out is at 11:00 AM tomorrow.",
            "exampleUz": "Xonani bo‘shatish ertaga soat 11:00 da."
          }
        ],
        "table": [
          {
            "de": "single room / double room",
            "uz": "bir kishilik / ikki kishilik xona"
          },
          {
            "de": "key card / reservation",
            "uz": "karta kalit / bron"
          },
          {
            "de": "The air conditioning is not working.",
            "uz": "Konditsioner ishlamayapti."
          },
          {
            "de": "Can you call a taxi for me?",
            "uz": "Menga taksi chaqirib bera olasizmi?"
          }
        ]
      },
      "kulturtip": {
        "title": "Tipping (Choypuli) in the US and UK",
        "text": "AQShda mehmonxona xizmatchilariga (porter / bellhop) har bir chamadon uchun 2-5 dollar choypuli qoldirish odat tusiga kirgan. Buyuk Britaniyada esa bu ixtiyoriy."
      },
      "listening": {
        "title": "Listening: Front Desk Conversation",
        "audioText": "Hello, welcome to Grand Hotel! Do you have a reservation with us today?",
        "question": "Qabulxona xodimi mehmondan nimani so‘ramoqda?",
        "options": [
          "Pasporti bormi",
          "Bugunga xona broni bormi",
          "Qachon ketmoqchi",
          "Nonushta qilganmi"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Hello! I have a reservation under the name Alimovich for three nights.",
        "textUz": "Salom! Mening Alimovich nomiga 3 kechaga bronim bor edi.",
        "tip": "under the name... iborasini ravon va ishonch bilan ayting."
      },
      "exercises": [
        {
          "question": "\"Nonushta narxga kiritilganmi?\" inglizcha qanday so‘raladi?",
          "options": [
            "Where is breakfast?",
            "Is breakfast included?",
            "Do you eat breakfast?",
            "Breakfast is good."
          ],
          "correctIndex": 1,
          "explanation": "included — o‘z ichiga olingan degani."
        },
        {
          "question": "\"Ikki kishilik xona\" qaysi biri?",
          "options": [
            "single room",
            "double room",
            "family house",
            "kitchen"
          ],
          "correctIndex": 1,
          "explanation": "double room — ikki kishilik xona."
        },
        {
          "question": "\"Could you give me the key, please?\" ma’nosi nima?",
          "options": [
            "Menga kalitni bera olasizmi, iltimos?",
            "Kalit qayerda?",
            "Men kalitni yo‘qotdim",
            "Xonaga kiring"
          ],
          "correctIndex": 0,
          "explanation": "Could you give me... — xushmuomala iltimos shakli."
        }
      ]
    },
    {
      "id": "en_lesson_10",
      "lang": "en",
      "level": "A2",
      "number": 10,
      "title": "Modal Verbs: Rules, Abilities & Advice (can, must, should, have to)",
      "goal": "Imkoniyat, qat’iy qoidalar va maslahatlarni modal fe’llar bilan ifodalash.",
      "theory": {
        "introUz": "Modal fe’llar ingliz tilida o‘zidan keyin fe’lning sof asosini (bare infinitive — to siz) talab qiladi va shaxs-sonda tuslanmaydi.",
        "rules": [
          {
            "pattern": "can / could (qila olmoq)",
            "pronunciation": "ken / kud",
            "exampleDe": "I can speak three languages fluently.",
            "exampleUz": "Men uchta tilda ravon gapira olaman."
          },
          {
            "pattern": "must / have to (shart / majbur)",
            "pronunciation": "mast / hev tu",
            "exampleDe": "You have to wear a seatbelt in the car.",
            "exampleUz": "Mashinada xavfsizlik kamarini taqishingiz shart."
          },
          {
            "pattern": "should (maslahat: kerak)",
            "pronunciation": "shud",
            "exampleDe": "You should drink more water and rest.",
            "exampleUz": "Ko‘proq suv ichishingiz va dam olishingiz kerak."
          },
          {
            "pattern": "must not (taqiq: mumkin emas)",
            "pronunciation": "mast not",
            "exampleDe": "You must not take photos inside the museum.",
            "exampleUz": "Muzey ichida rasmga tushirish taqiqlanadi."
          }
        ],
        "table": [
          {
            "de": "I must study tonight.",
            "uz": "Bugun kechqurun dars qilishim shart."
          },
          {
            "de": "You should see a doctor.",
            "uz": "Shifokorga ko‘rinishingiz kerak (maslahat)."
          },
          {
            "de": "We can help you tomorrow.",
            "uz": "Ertaga sizga yordam bera olamiz."
          },
          {
            "de": "You do not have to pay now.",
            "uz": "Hozir to‘lashingiz shart emas (ixtiyoriy)."
          }
        ]
      },
      "kulturtip": {
        "title": "Ingliz tilida maslahat berish madaniyati",
        "text": "Ingliz tilida buyruq bermasdan, odob bilan maslahat berishda doimo \"You should...\" yoki \"Why don't you...\" ishlatiladi. Bu suhbatdoshga nisbatan hurmatni bildiradi."
      },
      "listening": {
        "title": "Listening: Advice from a friend",
        "audioText": "You look very tired today. You should really take a break and get some sleep.",
        "question": "Do‘sti unga nima maslahat beryapti?",
        "options": [
          "Ko‘proq ishlashni",
          "Dam olib uxlashni",
          "Sport bilan shug‘ullanishni",
          "Do‘konga borishni"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Excuse me, could you please tell me how to get to the nearest station?",
        "textUz": "Kechirasiz, eng yaqin vokzalga qanday borishni aytib bera olasizmi, iltimos?",
        "tip": "could you please... iborasida intonatsiyani oxirida muloyim ko‘taring."
      },
      "exercises": [
        {
          "question": "\"Siz ko‘proq kitob o‘qishingiz kerak (maslahat)\" tarjimasi:",
          "options": [
            "You must read books.",
            "You should read more books.",
            "You cannot read books.",
            "You read books."
          ],
          "correctIndex": 1,
          "explanation": "Do‘stona maslahat uchun \"should\" ishlatiladi."
        },
        {
          "question": "\"You ______ smoke here (bu yerda chekish taqiqlangan).\":",
          "options": [
            "can",
            "must not",
            "should",
            "have to"
          ],
          "correctIndex": 1,
          "explanation": "must not — qat’iy taqiqni anglatadi."
        },
        {
          "question": "Modal fe’llardan keyin asosiy fe’l qanday shaklda keladi?",
          "options": [
            "-ing bilan",
            "to bilan",
            "O‘zgarishsiz sof asos (Infinitive without to)",
            "-ed bilan"
          ],
          "correctIndex": 2,
          "explanation": "can go, must do, should study — fe’l hech qanday qo‘shimchasiz keladi."
        }
      ]
    },
    {
      "id": "en_lesson_11",
      "lang": "en",
      "level": "B1",
      "number": 11,
      "title": "At the Doctor & Expressing Illness (Salomatlik va Shifokor)",
      "goal": "Shifokorga kasallik alomatlari, og‘riqlar va dorilar haqida batafsil tushuntirish.",
      "theory": {
        "introUz": "Ingliz tilida tana a’zolari og‘rig‘i (-ache qo‘shimchasi), shamollash va shifokor retsepti bo‘yicha kerakli so‘z birikmalari.",
        "rules": [
          {
            "pattern": "I have a ... (menda ... bor)",
            "pronunciation": "Ay hev e",
            "exampleDe": "I have a terrible headache and a sore throat.",
            "exampleUz": "Menda kuchli bosh og‘rig‘i va tomoq og‘rig‘i bor."
          },
          {
            "pattern": "My ... hurts (og‘riyapti)",
            "pronunciation": "May ... ho‘rts",
            "exampleDe": "My back hurts when I sit for a long time.",
            "exampleUz": "Uzoq o‘tirganimda belim og‘riydi."
          },
          {
            "pattern": "I feel dizzy / sick (o‘zimni yomon his qilyapman)",
            "pronunciation": "Ay fil dizzi",
            "exampleDe": "I feel dizzy and nauseous since this morning.",
            "exampleUz": "Ertalabdan beri boshim aylanib, ko‘nglim aynyapti."
          },
          {
            "pattern": "take this medicine (ushbu dorini iching)",
            "pronunciation": "teyk dis medisin",
            "exampleDe": "Take two pills twice a day after meals.",
            "exampleUz": "Ovqatdan keyin kuniga ikki mahal ikkita tabletka iching."
          }
        ],
        "table": [
          {
            "de": "headache / stomach ache",
            "uz": "bosh og‘rig‘i / qorin og‘rig‘i"
          },
          {
            "de": "fever / high temperature",
            "uz": "isitma / yuqori harorat"
          },
          {
            "de": "prescription / pharmacy",
            "uz": "shifokor retsepti / dorixona"
          },
          {
            "de": "Get well soon!",
            "uz": "Tezroq tuzalib keting!"
          }
        ]
      },
      "kulturtip": {
        "title": "Healthcare (NHS) in the UK",
        "text": "Buyuk Britaniyada umumiy amaliyot shifokori GP (General Practitioner) deb ataladi. To‘g‘ridan-to‘g‘ri tor mutaxassisga emas, oldin GP qabuliga boriladi."
      },
      "listening": {
        "title": "Listening: Doctor’s Prescription",
        "audioText": "You have caught the flu. Drink plenty of warm fluids and stay in bed for three days.",
        "question": "Shifokor bemorga nima buyurdi?",
        "options": [
          "Ishga borishni",
          "Ko‘p iliq suyuqlik ichish va 3 kun yotishni",
          "Operatsiya qilishni",
          "Muzqaymoq yeyishni"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Doctor, I have had a high fever and a persistent cough for three days.",
        "textUz": "Doktor, menda uch kundan beri yuqori isitma va to‘xtovsiz yo‘tal bor.",
        "tip": "persistent cough (to‘xtovsiz yo‘tal) birikmasini ta’kidlab ayting."
      },
      "exercises": [
        {
          "question": "\"Mening tomog‘im og‘riyapti\" inglizcha qanday aytiladi?",
          "options": [
            "I have a sore throat.",
            "I have a headache.",
            "My leg is blue.",
            "I want water."
          ],
          "correctIndex": 0,
          "explanation": "sore throat — tomoq og‘rig‘i."
        },
        {
          "question": "\"Get well soon!\" ma’nosi nima?",
          "options": [
            "Xush kelibsiz!",
            "Tezroq sog‘ayib keting!",
            "Tabriklayman!",
            "Rahmat!"
          ],
          "correctIndex": 1,
          "explanation": "Bemorga sog‘lik tilashning eng mashhur iborasi."
        },
        {
          "question": "\"Dorini ovqatdan keyin iching\" tarjimasi:",
          "options": [
            "Eat the medicine before sleep.",
            "Take this medicine after meals.",
            "Do not buy medicine.",
            "Drink water only."
          ],
          "correctIndex": 1,
          "explanation": "after meals — ovqatdan keyin."
        }
      ]
    },
    {
      "id": "en_lesson_12",
      "lang": "en",
      "level": "B1",
      "number": 12,
      "title": "Relative Clauses: Who, Which, That & Whose (Nisbiy gaplar)",
      "goal": "Gaplarni bir-biriga bog‘lab, murakkab va jozibali jumlalar tuzish.",
      "theory": {
        "introUz": "Relative clauses — shaxslar (who), narsalar (which/that) va egalik (whose) orqali \"...gan odam/narsa\" ma’nosini yasovchi B1 daraja grammatikasi.",
        "rules": [
          {
            "pattern": "who (odamlar uchun: ...gan kishi)",
            "pronunciation": "hu",
            "exampleDe": "The teacher who taught us English was very kind.",
            "exampleUz": "Bizga ingliz tilini o‘rgatgan o‘qituvchi juda mehribon edi."
          },
          {
            "pattern": "which / that (narsalar va hayvonlar uchun)",
            "pronunciation": "vich / det",
            "exampleDe": "This is the laptop which I bought yesterday.",
            "exampleUz": "Bu kecha men sotib olgan noutbuk."
          },
          {
            "pattern": "where (joylar uchun: ...gan joy)",
            "pronunciation": "ver",
            "exampleDe": "This is the city where I was born.",
            "exampleUz": "Men tug‘ilgan shahar mana shu."
          },
          {
            "pattern": "whose (egalik: ...ning)",
            "pronunciation": "huz",
            "exampleDe": "I met a student whose father is an airline pilot.",
            "exampleUz": "Men otasi uchuvchi bo‘lgan talaba bilan uchrashdim."
          }
        ],
        "table": [
          {
            "de": "the person who helped me",
            "uz": "menga yordam bergan inson"
          },
          {
            "de": "the book that I am reading",
            "uz": "men o‘qiyotgan kitob"
          },
          {
            "de": "the restaurant where we met",
            "uz": "biz uchrashgan restoran"
          },
          {
            "de": "That is the reason why I study.",
            "uz": "Men o‘qiyotganimning sababi shu."
          }
        ]
      },
      "kulturtip": {
        "title": "IELTS va CEFR B1 da Relative Clauses roli",
        "text": "IELTS Writing va Speakingda oddiy qisqa gaplar (Simple sentences) past ball keltiradi. Nisbiy olmoshlar (who/which/that) orqali tuzilgan murakkab gaplar esa bahoni 6.5 - 7.0 ga ko‘taradi."
      },
      "listening": {
        "title": "Listening: Describing a colleague",
        "audioText": "She is the project manager who successfully completed the international marketing campaign last month.",
        "question": "Loyiha menejeri o‘tgan oy nima qilgan?",
        "options": [
          "Yangi ishga kirgan",
          "Xalqaro marketing kampaniyasini muvaffaqiyatli yakunlagan",
          "Ta’tilga ketgan",
          "Kompaniyani tark etgan"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "I am looking for a job that provides great opportunities for personal growth and career development.",
        "textUz": "Men shaxsiy rivojlanish va martaba o‘sishi uchun ajoyib imkoniyatlar beradigan ish qidiryapman.",
        "tip": "job that provides... iborasini pauzasiz bir oqimda ayting."
      },
      "exercises": [
        {
          "question": "\"A doctor is a person ______ treats sick people.\"",
          "options": [
            "which",
            "who",
            "where",
            "whose"
          ],
          "correctIndex": 1,
          "explanation": "Odamlar (shaxslar) uchun \"who\" nisbiy olmoshi ishlatiladi."
        },
        {
          "question": "\"This is the house ______ my grandparents lived.\"",
          "options": [
            "who",
            "which",
            "where",
            "whose"
          ],
          "correctIndex": 2,
          "explanation": "Joylar (manzillar) uchun \"where\" ishlatiladi."
        },
        {
          "question": "\"I have a friend ______ car was stolen.\"",
          "options": [
            "whose",
            "who",
            "which",
            "that"
          ],
          "correctIndex": 0,
          "explanation": "Egalik (do‘stimning mashinasi) bo‘lgani uchun \"whose\" to‘g‘ri keladi."
        }
      ]
    },
    {
      "id": "en_lesson_13",
      "lang": "en",
      "level": "B1",
      "number": 13,
      "title": "Conditionals: Real & Imaginary Situations (If clauses: 1st & 2nd)",
      "goal": "Shartli gaplar: kelajakdagi real ehtimollar (1st Conditional) va orzular / xayollar (2nd Conditional).",
      "theory": {
        "introUz": "Agar deb boshlanuvchi gaplar: 1-shart mayli kelajakdagi real imkoniyatlar (If + Present, will + Verb), 2-shart mayli esa hozirgi orzular va xayoliy vaziyatlar (If + Past, would + Verb).",
        "rules": [
          {
            "pattern": "First Conditional (Real kelajak)",
            "pronunciation": "If ..., will ...",
            "exampleDe": "If it rains tomorrow, we will stay at home.",
            "exampleUz": "Agar ertaga yomg‘ir yog‘sa, biz uyda qolamiz."
          },
          {
            "pattern": "Second Conditional (Orzu / Xayol)",
            "pronunciation": "If ..., would ...",
            "exampleDe": "If I had a million dollars, I would travel around the world.",
            "exampleUz": "Agar menda bir million dollar bo‘lganida, dunyo bo‘ylab sayohat qilardim."
          },
          {
            "pattern": "If I were you, I would ... (maslahat)",
            "pronunciation": "If ay ver yu",
            "exampleDe": "If I were you, I would accept this job offer.",
            "exampleUz": "Agar men sening o‘rningda bo‘lganimda, bu ish taklifini qabul qilardim."
          },
          {
            "pattern": "unless = if not (agar bo‘lmasa)",
            "pronunciation": "anles",
            "exampleDe": "You will not pass the exam unless you study hard.",
            "exampleUz": "Qattiq o‘qimasangiz, imtihondan o‘ta olmaysiz."
          }
        ],
        "table": [
          {
            "de": "If you help me, I will help you.",
            "uz": "Agar menga yordam bersang, men ham senga yordam beraman."
          },
          {
            "de": "If I knew his number, I would call him.",
            "uz": "Agar uning raqamini bilganimda, unga qo‘ng‘iroq qilardim."
          },
          {
            "de": "What would you do in my situation?",
            "uz": "Mening vaziyatimda nima qilgan bo‘lardingiz?"
          },
          {
            "de": "I would love to join your project.",
            "uz": "Loyihangizga bajonidil qo‘shilgan bo‘lardim."
          }
        ]
      },
      "kulturtip": {
        "title": "\"If I were you\" — inglizcha nozik maslahat",
        "text": "Inglizlar do‘stlariga yoki hamkasblariga to‘g‘ridan-to‘g‘ri \"buni qilma\" demasdan, \"If I were you, I would think twice\" (Sening o‘rningda bo‘lganimda yana bir bor o‘ylab ko‘rardim) deb yumshoq aytishadi."
      },
      "listening": {
        "title": "Listening: Dream vacation",
        "audioText": "If I won the lottery, I would immediately buy a beautiful house by the ocean.",
        "question": "So‘zlovchi lotereyada yutsa nima qilgan bo‘lardi?",
        "options": [
          "Mashina sotib olardi",
          "Okean bo‘yida chiroyli uy sotib olardi",
          "Pulni bankka qo‘yardi",
          "Sayohatga chiqmasdi"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "If I had more free time, I would learn how to play the piano and speak another language.",
        "textUz": "Agar bo‘sh vaqtim ko‘proq bo‘lganida, pianino chalishni va yana bitta tilni o‘rgangan bo‘lardim.",
        "tip": "would learn... qismida intonatsiyani ilhom bilan ifodalang."
      },
      "exercises": [
        {
          "question": "\"If you study hard, you ______ your IELTS test.\"",
          "options": [
            "pass",
            "will pass",
            "would pass",
            "passed"
          ],
          "correctIndex": 1,
          "explanation": "First Conditional: If + Present Simple, kelajakda \"will pass\"."
        },
        {
          "question": "\"If I ______ more money, I would buy a new car.\"",
          "options": [
            "have",
            "had",
            "will have",
            "having"
          ],
          "correctIndex": 1,
          "explanation": "Second Conditional (orzu): If qismida Past Simple (had) ishlatiladi."
        },
        {
          "question": "\"If I were you, I ______ take this opportunity.\"",
          "options": [
            "will",
            "would",
            "am",
            "can"
          ],
          "correctIndex": 1,
          "explanation": "If I were you + would + Verb — shaxsiy maslahat qolipi."
        }
      ]
    },
    {
      "id": "en_lesson_14",
      "lang": "en",
      "level": "B2",
      "number": 14,
      "title": "Professional Job Interview & Elevating Speech (Ish suhbati va kasbiy nutq)",
      "goal": "Xalqaro kompaniyalar va elchixonalarda ish suhbati (Job Interview)dan muvaffaqiyatli o‘tish sirlari.",
      "theory": {
        "introUz": "B2 darajadagi professional ingliz tili: o‘z kuchli tomonlaringizni STAR (Situation, Task, Action, Result) metodi bo‘yicha tushuntirish va HR savollariga nufuzli javob berish.",
        "rules": [
          {
            "pattern": "I have a proven track record of ... (men isbotlangan natijaga egaman)",
            "pronunciation": "pruven trek rekord",
            "exampleDe": "I have a proven track record of increasing sales by 25%.",
            "exampleUz": "Men savdoni 25% ga oshirish bo‘yicha isbotlangan muvaffaqiyatli tajribaga egaman."
          },
          {
            "pattern": "I specialize in ... (men ... bo‘yicha mutaxassisman)",
            "pronunciation": "speshelayz in",
            "exampleDe": "I specialize in modern frontend development and scalable web apps.",
            "exampleUz": "Men zamonaviy frontend dasturlash va kengaytiriluvchi veb-ilovalar bo‘yicha ixtisoslashganman."
          },
          {
            "pattern": "My greatest strength is ... (mening eng katta ustunligim)",
            "pronunciation": "greytist strengs",
            "exampleDe": "My greatest strength is my ability to solve complex problems under pressure.",
            "exampleUz": "Mening eng katta kuchli tomonim — bosim ostida murakkab muammolarni hal qila olishimdir."
          },
          {
            "pattern": "I am eager to contribute to ... (men hissa qo‘shishga intilaman)",
            "pronunciation": "iger tu kontribyut",
            "exampleDe": "I am eager to contribute to your company’s long-term vision.",
            "exampleUz": "Kompaniyangizning uzoq muddatli maqsadlariga o‘z hissamni qo‘shishga intilaman."
          }
        ],
        "table": [
          {
            "de": "resume / curriculum vitae (CV)",
            "uz": "rezyume (CV)"
          },
          {
            "de": "salary expectation",
            "uz": "kutilayotgan maosh"
          },
          {
            "de": "career growth / professional development",
            "uz": "martaba o‘sishi / kasbiy rivojlanish"
          },
          {
            "de": "Thank you for this opportunity.",
            "uz": "Ushbu imkoniyat uchun katta rahmat."
          }
        ]
      },
      "kulturtip": {
        "title": "STAR Method in Western Job Interviews",
        "text": "Google, Amazon kabi xalqaro kompaniyalar savollariga javob berayotganda STAR metodidan foydalaning: Situation (vaziyat qanday edi), Task (oldimdagi vazifa), Action (men nima qildim), Result (qanday ijobiy natija chiqdi)."
      },
      "listening": {
        "title": "Listening: HR Manager question",
        "audioText": "Could you walk me through a challenging situation you faced at work and how you resolved it?",
        "question": "HR menejer nomzoddan nima haqida so‘ramoqda?",
        "options": [
          "Qayerda o‘qiganini",
          "Ishdagi qiyin vaziyat va uni qanday hal qilganini",
          "Qancha maosh xohlashini",
          "Kompaniya haqida nima bilishini"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "I believe my blend of technical expertise and strong communication skills makes me a great fit for this position.",
        "textUz": "Ishonamanki, texnik bilimim va kuchli muloqot qobiliyatlarim meni ushbu lavozim uchun ayni mos mutaxassisga aylantiradi.",
        "tip": "makes me a great fit for this position iborasini ishonch bilan ayting."
      },
      "exercises": [
        {
          "question": "\"Men ushbu lavozim uchun juda mosman\" inglizcha professional iborasi:",
          "options": [
            "I want this job.",
            "I am a great fit for this position.",
            "Give me work.",
            "I like money."
          ],
          "correctIndex": 1,
          "explanation": "a great fit for this position — B2/C1 intervyu leksikasi."
        },
        {
          "question": "\"Kutilayotgan maosh\" nima deyiladi?",
          "options": [
            "Salary expectation",
            "Free money",
            "Price tag",
            "Cash bonus"
          ],
          "correctIndex": 0,
          "explanation": "Salary expectation — nomzod kutayotgan maosh."
        },
        {
          "question": "\"I have a proven track record\" iborasi nimani bildiradi?",
          "options": [
            "Mening xatolarim ko‘p",
            "Menda isbotlangan muvaffaqiyatli tajriba bor",
            "Men yangi boshlovchiman",
            "Men ishlamaganman"
          ],
          "correctIndex": 1,
          "explanation": "proven track record — muvaffaqiyatli ish tarixi."
        }
      ]
    },
    {
      "id": "en_lesson_15",
      "lang": "en",
      "level": "B2",
      "number": 15,
      "title": "Passive Voice in Business & Reports (Majhul nisbat va Hisobotlar)",
      "goal": "Biznes xatlar, hisobotlar va yangiliklarda Passiv (majhul) nisbatdan foydalanish.",
      "theory": {
        "introUz": "Ingliz tilida Passiv (is done, was created, has been developed) harakatni kim bajargani noma’lum yoki muhim bo‘lmaganda, jarayonning o‘zini ta’kidlash uchun ishlatiladi.",
        "rules": [
          {
            "pattern": "is / are + Past Participle (Present Passive)",
            "pronunciation": "iz / ar + V3",
            "exampleDe": "English is spoken all over the world.",
            "exampleUz": "Ingliz tili butun dunyoda so‘zlashiladi."
          },
          {
            "pattern": "was / were + Past Participle (Past Passive)",
            "pronunciation": "voz / ver + V3",
            "exampleDe": "The contract was signed by both parties yesterday.",
            "exampleUz": "Shartnoma kecha ikkala tomon tomonidan imzolandi."
          },
          {
            "pattern": "has been / have been + Past Participle (Present Perfect Passive)",
            "pronunciation": "hez bin + V3",
            "exampleDe": "The software update has been successfully installed.",
            "exampleUz": "Dasturiy yangilanish muvaffaqiyatli o‘rnatildi."
          },
          {
            "pattern": "by + Agent (kim tomonidan)",
            "pronunciation": "bay",
            "exampleDe": "The research was conducted by top scientists.",
            "exampleUz": "Tadqiqot yetakchi olimlar tomonidan olib borildi."
          }
        ],
        "table": [
          {
            "de": "The decision was made.",
            "uz": "Qaror qabul qilindi."
          },
          {
            "de": "The project has been approved.",
            "uz": "Loyiha ma’qullandi."
          },
          {
            "de": "A new strategy is being developed.",
            "uz": "Yangi strategiya ishlab chiqilmoqda."
          },
          {
            "de": "All requirements must be fulfilled.",
            "uz": "Barcha talablar bajarilishi shart."
          }
        ]
      },
      "kulturtip": {
        "title": "Passiv ingliz akademik va yangiliklar tili",
        "text": "BBC, CNN yoki ilmiy jurnallarda shaxsiy fikr o‘rniga xolislikni ta’minlash uchun deyarli doim Passiv ishlatiladi: \"It is believed that...\" (Ishoniladiki...), \"It has been reported that...\" (Xabar qilingandek...)."
      },
      "listening": {
        "title": "Listening: Corporate Announcement",
        "audioText": "The annual financial report was thoroughly reviewed and officially published on our portal today.",
        "question": "Yillik moliyaviy hisobot bilan nima qilindi?",
        "options": [
          "O‘chirib tashlandi",
          "To‘liq ko‘rib chiqildi va rasman e’lon qilindi",
          "Keyingi yilga qoldirildi",
          "Sotuvga chiqarildi"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "All necessary security measures have been implemented to ensure absolute data safety.",
        "textUz": "To‘liq ma’lumotlar xavfsizligini ta’minlash uchun barcha zarur xavfsizlik choralari amalga oshirildi.",
        "tip": "have been implemented (tatbiq etildi) iborasini jarangdor talaffuz qiling."
      },
      "exercises": [
        {
          "question": "\"The new website ______ launched last week (Past Passive).\":",
          "options": [
            "is",
            "was",
            "has",
            "were"
          ],
          "correctIndex": 1,
          "explanation": "O‘tgan zamon birlik uchun \"was launched\" bo‘ladi."
        },
        {
          "question": "\"The report was prepared ______ our senior analyst.\"",
          "options": [
            "with",
            "by",
            "from",
            "to"
          ],
          "correctIndex": 1,
          "explanation": "Harakatni kim bajarganini ko‘rsatish uchun \"by\" ishlatiladi."
        },
        {
          "question": "\"Dastur yangilandi (natijasi bor)\" Present Perfect Passive:",
          "options": [
            "The app updated.",
            "The app has been updated.",
            "The app is update.",
            "The app was updating."
          ],
          "correctIndex": 1,
          "explanation": "has been + V3 — hozirgi tugallangan majhul nisbat."
        }
      ]
    },
    {
      "id": "en_lesson_16",
      "lang": "en",
      "level": "B2",
      "number": 16,
      "title": "Advanced Debate, IELTS/TOEFL Fluency & Idioms (Erkin notiqlik)",
      "goal": "Har qanday dolzarb mavzuda erkin bahslashish, xalqaro imtihonlarda 7.5+ ballik idiomalar va boy iboralar bilan nutq so‘zlash.",
      "theory": {
        "introUz": "B2 Fluency cho‘qqisi: o‘z fikrini dalillash, qarama-qarshi tomon bilan odobli bahslashish va ingliz tilidagi eng sara idiomalar.",
        "rules": [
          {
            "pattern": "On the one hand ..., on the other hand ... (Bir tomondan ..., ikkinchi tomondan ...)",
            "pronunciation": "On de van hend...",
            "exampleDe": "On the one hand it saves time, on the other hand it is expensive.",
            "exampleUz": "Bir tomondan bu vaqtni tejaydi, boshqa tomondan esa qimmat."
          },
          {
            "pattern": "From my perspective ... (Mening nuqtai nazarimdan)",
            "pronunciation": "From may perspektiv",
            "exampleDe": "From my perspective, continuous self-education is the key to success.",
            "exampleUz": "Mening nuqtai nazarimdan, uzluksiz o‘z ustida ishlash muvaffaqiyat kalitidir."
          },
          {
            "pattern": "I strongly believe that ... (Men qat’iy ishonamanki)",
            "pronunciation": "Ay strongli biliv det",
            "exampleDe": "I strongly believe that artificial intelligence will transform education.",
            "exampleUz": "Men qat’iy ishonamanki, sun’iy intellekt ta’limni butunlay o‘zgartiradi."
          },
          {
            "pattern": "To sum up / In conclusion ... (Xulosa qilib aytganda)",
            "pronunciation": "Tu sam ap",
            "exampleDe": "To sum up, the benefits clearly outweigh the drawbacks.",
            "exampleUz": "Xulosa qilib aytganda, foydali tomonlari kamchiliklaridan ancha ustundir."
          }
        ],
        "table": [
          {
            "de": "I completely agree with your point.",
            "uz": "Fikringizga to‘liq qo‘shilaman."
          },
          {
            "de": "I beg to differ on this matter.",
            "uz": "Bu masalada men boshqacha fikrdaman (odobli)."
          },
          {
            "de": "It goes without saying that ...",
            "uz": "O‘z-o‘zidan ravshanki ..."
          },
          {
            "de": "Congratulations on achieving B2 Fluency!",
            "uz": "B2 erkin so‘zlashuv darajangiz muborak bo‘lsin!"
          }
        ]
      },
      "kulturtip": {
        "title": "IELTS Band 8 Idiom: \"Outweigh the drawbacks\"",
        "text": "IELTS Writing Task 2 va Speaking Part 3 da \"foydali tomonlari ko‘p\" demoqchi bo‘lsangiz, \"The advantages clearly outweigh the disadvantages\" iborasini ishlating — bu darhol yuqori baho keltiradi."
      },
      "listening": {
        "title": "Listening: Debate on Technology",
        "audioText": "While social media connects people across the globe, it also poses notable concerns regarding privacy and mental health.",
        "question": "Spiker ijtimoiy tarmoqlar haqida qanday xulosaga keldi?",
        "options": [
          "Ular faqat yomon",
          "Odamlarni bog‘laydi, lekin maxfiylik va ruhiy salomatlik bo‘yicha xavflari bor",
          "Ularni butunlay taqiqlash kerak",
          "Faqat bolalar uchun foydali"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "In my honest opinion, embracing continuous learning is the ultimate catalyst for personal growth and career excellence.",
        "textUz": "Mening xolis fikrimcha, uzluksiz o‘rganishni hayot tarziga aylantirish shaxsiy o‘sish va kasbiy yuksaklikning bosh omilidir.",
        "tip": "Ushbu jumlani ravon, pauzasiz va ilhom bilan ayting."
      },
      "exercises": [
        {
          "question": "\"Foydasi zararlaridan ustun turadi\" inglizcha qanday aytiladi?",
          "options": [
            "It is good.",
            "The benefits outweigh the drawbacks.",
            "I like benefits.",
            "There are problems."
          ],
          "correctIndex": 1,
          "explanation": "outweigh the drawbacks — B2/C1 darajadagi akademik ibora."
        },
        {
          "question": "\"O‘z-o‘zidan ravshanki...\" iborasi qaysi?",
          "options": [
            "I do not know",
            "It goes without saying that ...",
            "Maybe tomorrow",
            "Never mind"
          ],
          "correctIndex": 1,
          "explanation": "It goes without saying — isbot talab qilmaydigan aniq haqiqat."
        },
        {
          "question": "Qarshi fikr bildirishning eng odobli madaniy usuli qaysi?",
          "options": [
            "You are wrong!",
            "Shut up!",
            "I beg to differ.",
            "Stupid idea."
          ],
          "correctIndex": 2,
          "explanation": "I beg to differ — xushmuomala ingliz tilida \"men boshqacha fikrdaman\"."
        }
      ]
    }
  ],
  "ru": [
    {
      "id": "ru_lesson_1",
      "lang": "ru",
      "level": "A1",
      "number": 1,
      "title": "Русский алфавит и Первые фразы",
      "goal": "Rus tili alifbosi, maxsus harflar (Ы, Ь, Ъ, Ж, Ш, Щ) va salomlashish iboralari.",
      "theory": {
        "introUz": "Rus tili kirill alifbosiga asoslangan. Eng ko‘p e’tibor talab qiladigan harflar:",
        "rules": [
          {
            "pattern": "Ы harfi",
            "pronunciation": "Bo‘g‘izdan chiquvchi qattiq «I»",
            "exampleDe": "мы [mı] (biz), ты [tı] (sen)",
            "exampleUz": "biz, sen"
          },
          {
            "pattern": "Ь (yumshatish)",
            "pronunciation": "Oldidagi undoshni yumshatadi",
            "exampleDe": "день [den'] (kun), мать [mat']",
            "exampleUz": "kun, ona"
          },
          {
            "pattern": "Ж va Ш",
            "pronunciation": "Doimo qattiq talaffuz qilinadi",
            "exampleDe": "жизнь [jizn'] (hayot), школа [shkola]",
            "exampleUz": "hayot, maktab"
          },
          {
            "pattern": "О harfi urg‘usiz",
            "pronunciation": "«A» kabi o‘qiladi",
            "exampleDe": "молоко [malako] (sut), хорошо [xarasho]",
            "exampleUz": "sut, yaxshi"
          }
        ],
        "table": [
          {
            "de": "Здравствуйте",
            "uz": "Assalomu alaykum (rasmiy salom)"
          },
          {
            "de": "Привет",
            "uz": "Salom (do‘stona)"
          },
          {
            "de": "Доброе утро",
            "uz": "Xayrli tong"
          },
          {
            "de": "Добрый день",
            "uz": "Xayrli kun"
          },
          {
            "de": "Добрый вечер",
            "uz": "Xayrli kech"
          },
          {
            "de": "Спасибо большое",
            "uz": "Katta rahmat"
          },
          {
            "de": "Пожалуйста",
            "uz": "Iltimos / Arzimaydi"
          },
          {
            "de": "До свидания",
            "uz": "Xayr, ko‘rishguncha"
          }
        ]
      },
      "exercises": [
        {
          "id": "ru_ex1_1",
          "type": "multiple-choice",
          "question": "Kattalarga yoki rasmiy joyda qanday salom beriladi?",
          "options": [
            "Привет",
            "Здравствуйте",
            "Пока",
            "Спокойной ночи"
          ],
          "correctIndex": 1,
          "explanation": "\"Здравствуйте\" — eng oliy rasmiy salomlashish ifodasidir."
        },
        {
          "id": "ru_ex1_2",
          "type": "fill-blank",
          "question": "Katta rahmat demoqchisiz: \"Спасибо ______.\"",
          "placeholder": "So‘zni yozing...",
          "correctAnswer": "большое",
          "hint": "bolshoye"
        }
      ],
      "speakingPrompt": {
        "textDe": "Здравствуйте! Очень приятно познакомиться.",
        "textUz": "Assalomu alaykum! Tanishganimdan juda xursandman.",
        "tip": "Здравствуйте [zdrastvuyte] deb talaffuz qilinadi."
      },
      "kulturtip": {
        "title": "🇷🇺 Вы vs. Ты (Sizlash va Senlash)",
        "text": "Rus tilida o‘zingizdan kattalarga, notanish insonlarga va ish joyida qat’iy ravishda \"Вы\" (Siz) deb murojaat qilinadi."
      },
      "listening": {
        "title": "🎧 Аудирование (Tinglab tushunish)",
        "audioText": "Добрый день! Меня зовут Алишер. Я живу в Ташкенте.",
        "question": "Alisher qayerda yashaydi?",
        "options": [
          "Moskvada",
          "Toshkentda",
          "Samarqandda"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ru_lesson_2",
      "lang": "ru",
      "level": "A1",
      "number": 2,
      "title": "Знакомство и Глаголы первого спряжения",
      "goal": "O‘zini tanishtirish, kasbni aytish va fe’llarni tuslash (читать, знать, делать).",
      "theory": {
        "introUz": "Rus tilida hozirgi zamonda fe’l shaxs-songa qarab tuslanadi (-ю, -ешь, -ет, -ем, -ете, -ют):",
        "rules": [
          {
            "pattern": "Я",
            "pronunciation": "-ю / -у",
            "exampleDe": "Я читаю, я знаю, я говорю",
            "exampleUz": "Men o‘qiyman, men bilaman, gapiraman"
          },
          {
            "pattern": "Ты",
            "pronunciation": "-ешь / -ишь",
            "exampleDe": "Ты читаешь, ты знаешь",
            "exampleUz": "Sen o‘qiysan, bilasan"
          },
          {
            "pattern": "Он / Она",
            "pronunciation": "-ет / -ит",
            "exampleDe": "Он читает, она знает",
            "exampleUz": "U o‘qiydi, biladi"
          },
          {
            "pattern": "Мы",
            "pronunciation": "-ем / -им",
            "exampleDe": "Мы читаем, мы знаем",
            "exampleUz": "Biz o‘qiymiz, bilamiz"
          }
        ],
        "table": [
          {
            "de": "Как вас зовут?",
            "uz": "Ismingiz nima? (rasmiy)"
          },
          {
            "de": "Меня зовут ...",
            "uz": "Mening ismim ..."
          },
          {
            "de": "Откуда вы?",
            "uz": "Qayerdansiz?"
          },
          {
            "de": "Я из Узбекистана.",
            "uz": "Men O‘zbekistondanman."
          },
          {
            "de": "Я говорю по-русски.",
            "uz": "Men ruscha gapiraman."
          }
        ]
      },
      "exercises": [
        {
          "id": "ru_ex2_1",
          "type": "multiple-choice",
          "question": "\"Мы ______ по-русски.\" (говорить fe’lining to‘g‘ri shakli):",
          "options": [
            "говорю",
            "говоришь",
            "говорит",
            "говорим"
          ],
          "correctIndex": 3,
          "explanation": "\"Мы\" bilan -им qo‘shiladi: говорим."
        },
        {
          "id": "ru_ex2_2",
          "type": "fill-blank",
          "question": "Меня ______ Сардор. (Mening ismim Sardor)",
          "placeholder": "so‘zni yozing...",
          "correctAnswer": "зовут",
          "hint": "зовут"
        }
      ],
      "speakingPrompt": {
        "textDe": "Меня зовут Анвар. Я изучаю русский язык.",
        "textUz": "Mening ismim Anvar. Men rus tilini o‘rganayapman.",
        "tip": "Изучаю [izuchayu] so‘zini dona-dona ayting."
      },
      "kulturtip": {
        "title": "🇷🇺 Рукопожатие (Qo‘l berib ko‘rishish)",
        "text": "Erkaklar uchrashganda va xayrlashganda bir-biriga qo‘l berib so‘rashishadi. Eshik ostonasida qo‘l berib so‘rashish esa irim qilinadi."
      },
      "listening": {
        "title": "🎧 Аудирование (Tinglab tushunish)",
        "audioText": "Я студент, учусь на первом курсе. Очень приятно!",
        "question": "U nechanchi kursda o‘qiydi?",
        "options": [
          "3-kursda",
          "1-kursda",
          "Magistraturada"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ru_lesson_3",
      "lang": "ru",
      "level": "A1",
      "number": 3,
      "title": "Три рода существительных и Мой / Моя / Моё",
      "goal": "Rus tilidagi 3 ta rodni (erkak, ayol, o‘rta) farqlash va egalik olmoshlarini to‘g‘ri qo‘llash.",
      "theory": {
        "introUz": "Rus tilida har bir ot 3 ta roddan biriga tegishli:",
        "rules": [
          {
            "pattern": "Мужской род (Он)",
            "pronunciation": "Undoshga tugaydi",
            "exampleDe": "дом, стол, брат, телефон",
            "exampleUz": "uy, stol, uka/aka, telefon"
          },
          {
            "pattern": "Женский род (Она)",
            "pronunciation": "-А yoki -Я ga tugaydi",
            "exampleDe": "книга, машина, мама, сестра",
            "exampleUz": "kitob, mashina, ona, opa"
          },
          {
            "pattern": "Средний род (Оно)",
            "pronunciation": "-О yoki -Е ga tugaydi",
            "exampleDe": "окно, яблоко, море",
            "exampleUz": "deraza, olma, dengiz"
          },
          {
            "pattern": "Притяжательные",
            "pronunciation": "Egalik olmoshlari moslashadi",
            "exampleDe": "мой дом, моя книга, моё окно",
            "exampleUz": "mening uyim, mening kitobim, derazam"
          }
        ],
        "table": [
          {
            "de": "Это мой друг.",
            "uz": "Bu mening do‘stim."
          },
          {
            "de": "Это моя семья.",
            "uz": "Bu mening oilam."
          },
          {
            "de": "Это моё любимое место.",
            "uz": "Bu mening sevimli joyim."
          },
          {
            "de": "Чей это телефон?",
            "uz": "Bu kimning telefoni?"
          }
        ]
      },
      "exercises": [
        {
          "id": "ru_ex3_1",
          "type": "multiple-choice",
          "question": "\"Машина\" so‘zi bilan qaysi olmosh to‘g‘ri ishlatiladi?",
          "options": [
            "Мой машина",
            "Моя машина",
            "Моё машина",
            "Мои машина"
          ],
          "correctIndex": 1,
          "explanation": "\"Машина\" -а ga tugagan, ayol jinsi (женский род), shuning uchun \"моя\"."
        },
        {
          "id": "ru_ex3_2",
          "type": "fill-blank",
          "question": "Это ______ новый дом. (Bu mening yangi uyim)",
          "placeholder": "мой, моя yoki моё...",
          "correctAnswer": "мой",
          "hint": "дом — мужской род"
        }
      ],
      "speakingPrompt": {
        "textDe": "Это мой город Ташкент. Я очень люблю мой родной край.",
        "textUz": "Bu mening shahrim Toshkent. Men o‘z ona yurtimni juda yaxshi ko‘raman.",
        "tip": "Люблю [lyublyu] so‘zini yumshoq ayting."
      },
      "kulturtip": {
        "title": "🇷🇺 Отчество (Otasining ismi)",
        "text": "Rossiyada rasmiy muloqotda kishining ismi va otasining ismi qo‘shib aytiladi (masalan: Иван Сергеевич, Анна Петровна)."
      },
      "listening": {
        "title": "🎧 Аудирование (Tinglab tushunish)",
        "audioText": "Познакомьтесь, это моя коллега Елена. Она преподаватель.",
        "question": "Yelena kim?",
        "options": [
          "Talaba",
          "Hamkasb va o‘qituvchi",
          "Shifokor"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ru_lesson_4",
      "lang": "ru",
      "level": "A1",
      "number": 4,
      "title": "Где? Куда? Ориентация в городе и Предлоги",
      "goal": "Shaharda yo‘l so‘rash, qayerda joylashganini aytish (в, на predloglari).",
      "theory": {
        "introUz": "Joylashuvni so‘rash va yo‘nalish ko‘rsatish uchun kerakli asosiy iboralar:",
        "rules": [
          {
            "pattern": "Где находится ...?",
            "pronunciation": "... qayerda joylashgan?",
            "exampleDe": "Где находится аптека?",
            "exampleUz": "Dorixona qayerda joylashgan?"
          },
          {
            "pattern": "Прямо / Направо / Налево",
            "pronunciation": "To‘g‘riga / O‘ngga / Chapga",
            "exampleDe": "Идите прямо, потом направо.",
            "exampleUz": "To‘g‘riga boring, keyin o‘ngga."
          },
          {
            "pattern": "В + Предложный падеж",
            "pronunciation": "ichida (-da)",
            "exampleDe": "в Ташкенте (Toshkentda), в школе (maktabda)",
            "exampleUz": "Toshkentda, maktabda"
          },
          {
            "pattern": "На + Предложный падеж",
            "pronunciation": "ustida / maydonda",
            "exampleDe": "на столе (stol ustida), на улице (ko‘chada)",
            "exampleUz": "stolda, ko‘chada"
          }
        ],
        "table": [
          {
            "de": "Скажите, пожалуйста, где метро?",
            "uz": "Ayting-chi, iltimos, metro qayerda?"
          },
          {
            "de": "Это далеко отсюда?",
            "uz": "Bu yerdan uzoqmi?"
          },
          {
            "de": "Нет, это очень близко.",
            "uz": "Yo‘q, bu juda yaqin."
          },
          {
            "de": "Сколько стоит проезд?",
            "uz": "Yo‘l haqi qancha?"
          }
        ]
      },
      "exercises": [
        {
          "id": "ru_ex4_1",
          "type": "multiple-choice",
          "question": "\"To‘g‘riga boring\" ruscha qanday aytiladi?",
          "options": [
            "Идите прямо",
            "Идите направо",
            "Идите налево",
            "Стойте здесь"
          ],
          "correctIndex": 0,
          "explanation": "\"Прямо\" — to‘g‘riga degani."
        },
        {
          "id": "ru_ex4_2",
          "type": "fill-blank",
          "question": "Скажите, пожалуйста, ______ находится банк? (qayerda)",
          "placeholder": "So‘roq so‘zini yozing...",
          "correctAnswer": "где",
          "hint": "где"
        }
      ],
      "speakingPrompt": {
        "textDe": "Извините, как пройти к ближайшей станции метро?",
        "textUz": "Kechirasiz, eng yaqin metro bekatiga qanday borsa bo‘ladi?",
        "tip": "Ближайшей so‘ziga e’tibor bering."
      },
      "kulturtip": {
        "title": "🇷🇺 Вежливые слова (Xushmuomalalik)",
        "text": "Ko‘chada begonalardan yo‘l so‘rashda har doim \"Извините, пожалуйста...\" deb boshlash eng yaxshi taassurot qoldiradi."
      },
      "listening": {
        "title": "🎧 Аудирование (Tinglab tushunish)",
        "audioText": "Метро находится прямо за углом. Это всего пять минут пешком.",
        "question": "Metrogacha qancha vaqt ketadi?",
        "options": [
          "1 soat",
          "Piyoda bor-yo‘g‘i 5 daqiqa",
          "Avtobusda 30 daqiqa"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ru_lesson_5",
      "lang": "ru",
      "level": "A1",
      "number": 5,
      "title": "Числа, Время и Покупки в магазине",
      "goal": "Raqamlar, narx so‘rash va magazinda xarid qilish (Сколько стоит, дайте пожалуйста).",
      "theory": {
        "introUz": "Magazinda xarid qilish va hisob-kitob qilish uchun zarur jumlalar:",
        "rules": [
          {
            "pattern": "Сколько стоит ...?",
            "pronunciation": "Narxi qancha?",
            "exampleDe": "Сколько стоит этот хлеб?",
            "exampleUz": "Bu non qancha turadi?"
          },
          {
            "pattern": "Дайте, пожалуйста ...",
            "pronunciation": "Bering, iltimos",
            "exampleDe": "Дайте, пожалуйста, килограмм яблок.",
            "exampleUz": "Iltimos, bir kilo olma bering."
          },
          {
            "pattern": "Один рубль / два рубля / пять рублей",
            "pronunciation": "pul birliklarining o‘zgarishi",
            "exampleDe": "1 рубль, 2-4 рубля, 5-20 рублей",
            "exampleUz": "1 rubl, 2 rubl, 5 rubl..."
          }
        ],
        "table": [
          {
            "de": "один, два, три, четыре, пять",
            "uz": "1, 2, 3, 4, 5"
          },
          {
            "de": "десять, двадцать, пятьдесят, сто",
            "uz": "10, 20, 50, 100"
          },
          {
            "de": "С вас пятьсот рублей.",
            "uz": "Sizdan 500 rubl bo‘ldi."
          },
          {
            "de": "Вы принимаете карты?",
            "uz": "Karta qabul qilasizmi?"
          }
        ]
      },
      "exercises": [
        {
          "id": "ru_ex5_1",
          "type": "multiple-choice",
          "question": "\"Karta orqali to‘lasam bo‘ladimi?\" ruscha qanday so‘raladi?",
          "options": [
            "Можно оплатить картой?",
            "Где карта?",
            "Сколько стоит карта?",
            "Это моя карта"
          ],
          "correctIndex": 0,
          "explanation": "\"Можно оплатить картой?\" — to‘lov paytidagi eng ko‘p ishlatiladigan jumla."
        },
        {
          "id": "ru_ex5_2",
          "type": "fill-blank",
          "question": "Дайте, ______, бутылку минеральной воды.",
          "placeholder": "пожалуйста...",
          "correctAnswer": "пожалуйста",
          "hint": "пожалуйста"
        }
      ],
      "speakingPrompt": {
        "textDe": "Здравствуйте, взвесьте, пожалуйста, два килограмма картошки.",
        "textUz": "Assalomu alaykum, iltimos, ikki kilo kartoshka tortib bering.",
        "tip": "Взвесьте [vzveste] deb talaffuz qilinadi."
      },
      "kulturtip": {
        "title": "🇷🇺 Чаевые в кафе (Choychaqa)",
        "text": "Rossiya restoran va kafelarida odatda xizmat ko‘rsatish uchun 10% atrofida choychaqa (чаевые) qoldiriladi."
      },
      "listening": {
        "title": "🎧 Аудирование (Tinglab tushunish)",
        "audioText": "С вас триста пятьдесят рублей. Пакет нужен?",
        "question": "Kassir nima deb so‘radi?",
        "options": [
          "Sizga mashina kerakmi?",
          "Paket kerakmi?",
          "Kechirasizmi?"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ru_lesson_6",
      "lang": "ru",
      "level": "A2",
      "number": 6,
      "title": "Прошедшее и будущее время глаголов",
      "goal": "O‘tgan zamon (-л, -ла, -ло, -ли) va murakkab kelasi zamon (буду + fe’l).",
      "theory": {
        "introUz": "Rus tilida o‘tgan zamon rodlarga qarab yasaladi, bu o‘rganish uchun juda oson:",
        "rules": [
          {
            "pattern": "Мужской род (Он)",
            "pronunciation": "-л qo‘shiladi",
            "exampleDe": "Он читал, он работал, он жил",
            "exampleUz": "U o‘qidi, ishladi, yashadi"
          },
          {
            "pattern": "Женский род (Она)",
            "pronunciation": "-ла qo‘shiladi",
            "exampleDe": "Она читала, она работала",
            "exampleUz": "U (qiz) o‘qidi, ishladi"
          },
          {
            "pattern": "Множественное (Они)",
            "pronunciation": "-ли qo‘shiladi",
            "exampleDe": "Мы читали, они работали",
            "exampleUz": "Biz o‘qidik, ular ishlashdi"
          },
          {
            "pattern": "Будущее время",
            "pronunciation": "буду + infintiv",
            "exampleDe": "Я буду изучать русский язык.",
            "exampleUz": "Men rus tilini o‘rganaman."
          }
        ],
        "table": [
          {
            "de": "Что вы делали вчера?",
            "uz": "Kecha nima qildingiz?"
          },
          {
            "de": "Вчера я весь день отдыхал.",
            "uz": "Kecha kun bo‘yi dam oldim."
          },
          {
            "de": "Завтра мы будем работать.",
            "uz": "Ertaga biz ishlaymiz."
          },
          {
            "de": "Она была очень рада.",
            "uz": "U juda xursand bo‘ldi."
          }
        ]
      },
      "exercises": [
        {
          "id": "ru_ex6_1",
          "type": "multiple-choice",
          "question": "\"Вчера Анна ______ новую книгу.\" (читать fe’li ayol kishiga):",
          "options": [
            "читал",
            "читала",
            "читало",
            "читали"
          ],
          "correctIndex": 1,
          "explanation": "\"Анна\" ayol jinsi bo‘lgani uchun fe’lga -ла qo‘shiladi: читала."
        },
        {
          "id": "ru_ex6_2",
          "type": "fill-blank",
          "question": "Завтра я ______ учить новые слова. (буду)",
          "placeholder": "fe’lni yozing...",
          "correctAnswer": "буду",
          "hint": "буду"
        }
      ],
      "speakingPrompt": {
        "textDe": "В прошлые выходные мы гуляли в парке и пили вкусный чай.",
        "textUz": "O‘tgan dam olish kunlarida biz bog‘da sayr qildik va mazali choy ichdik.",
        "tip": "Гуляли [gulyali] deb ravon ayting."
      },
      "kulturtip": {
        "title": "🇷🇺 Дача (Shahar tashqarisidagi hovli)",
        "text": "Rossiyada yoz oylarida shahar aholisi dam olish kunlarini tabiat qo‘ynida, o‘z shahar tashqarisidagi hovlisida (дача) o‘tkazishni yaxshi ko‘radi."
      },
      "listening": {
        "title": "🎧 Аудирование (Tinglab tushunish)",
        "audioText": "Вчера вечером мы с друзьями смотрели интересный исторический фильм.",
        "question": "Ular kecha nima qilishdi?",
        "options": [
          "Kitob o‘qishdi",
          "Do‘stlari bilan tarixiy film ko‘rishdi",
          "Dars qilishdi"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ru_lesson_7",
      "lang": "ru",
      "level": "A2",
      "number": 7,
      "title": "Родительный падеж (Кого? Чего?) и Отрицание",
      "goal": "Qaratqich kelishigi, inkor (нет ...), sanash va miqdor ifodalash.",
      "theory": {
        "introUz": "Родительный падеж — rus tilidagi eng muhim kelishiklardan biri. Yo‘qlikni (нет) bildirishda ishlatiladi:",
        "rules": [
          {
            "pattern": "нет + Родительный падеж",
            "pronunciation": "yo‘q bo‘lsa",
            "exampleDe": "У меня нет времени (vaqtim yo‘q). У него нет машины.",
            "exampleUz": "vaqtim yo‘q, mashinasi yo‘q"
          },
          {
            "pattern": "Мужской род",
            "pronunciation": "-а / -я ga o‘zgaradi",
            "exampleDe": "брат → брата, стакан чая",
            "exampleUz": "bir stakan choy"
          },
          {
            "pattern": "Женский род",
            "pronunciation": "-ы / -и ga o‘zgaradi",
            "exampleDe": "вода → воды, стакан воды",
            "exampleUz": "bir stakan suv"
          }
        ],
        "table": [
          {
            "de": "Чашку кофе, пожалуйста.",
            "uz": "Bir chashka kofe, iltimos."
          },
          {
            "de": "У вас есть сахар? — Нет сахара.",
            "uz": "Shakar bormi? — Shakar yo‘q."
          },
          {
            "de": "Без проблем!",
            "uz": "Muammosiz! / Hechqisi yo‘q!"
          },
          {
            "de": "После работы я иду домой.",
            "uz": "Ishdan keyin uyga boraman."
          }
        ]
      },
      "exercises": [
        {
          "id": "ru_ex7_1",
          "type": "multiple-choice",
          "question": "\"У меня сейчас нет ______ (время).\":",
          "options": [
            "время",
            "времени",
            "временем",
            "времените"
          ],
          "correctIndex": 1,
          "explanation": "\"нет\" so‘zidan keyin Родительный падеж keladi: нет времени."
        },
        {
          "id": "ru_ex7_2",
          "type": "fill-blank",
          "question": "Дайте мне стакан холодной ______ (вода -> воды).",
          "placeholder": "воды...",
          "correctAnswer": "воды",
          "hint": "воды"
        }
      ],
      "speakingPrompt": {
        "textDe": "Извините, у вас есть свободная минутка? — Да, конечно!",
        "textUz": "Kechirasiz, bo‘sh daqiqangiz bormi? — Ha, albatta!",
        "tip": "Минутка [minutka] so‘ziga urg‘u bering."
      },
      "kulturtip": {
        "title": "🇷🇺 Чаепитие (Choy ichish madaniyati)",
        "text": "Rossiyada mehmonga borganda mezbon albatta choy taklif qiladi va dasturxonga shirinliklar (пряники, конфеты, варенье) qo‘yiladi."
      },
      "listening": {
        "title": "🎧 Аудирование (Tinglab tushunish)",
        "audioText": "Я пью зелёный чай без сахара, но с лимоном.",
        "question": "U choyni qanday ichadi?",
        "options": [
          "Sut bilan",
          "Shakarsiz, lekin limon bilan",
          "Shakar bilan"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ru_lesson_8",
      "lang": "ru",
      "level": "B1",
      "number": 8,
      "title": "Глаголы движения (Идти vs Ехать) и Деловая речь",
      "goal": "Piyoda (идти/ходить) va transportda (ехать/ездить) harakatlanish, rasmiy muloqot.",
      "theory": {
        "introUz": "Rus tilida harakat fe’llari harakatning yo‘nalishi va transportiga qarab qat’iy farqlanadi:",
        "rules": [
          {
            "pattern": "Идти (hozir piyoda)",
            "pronunciation": "bir yo‘nalishda",
            "exampleDe": "Я сейчас иду на работу пешком.",
            "exampleUz": "Hozir ishga piyoda ketyapman."
          },
          {
            "pattern": "Ходить (doimiy piyoda)",
            "pronunciation": "odat tusidagi harakat",
            "exampleDe": "Я каждый день хожу в школу.",
            "exampleUz": "Har kuni maktabga piyoda boraman."
          },
          {
            "pattern": "Ехать / Ездить",
            "pronunciation": "transport bilan",
            "exampleDe": "Мы едем на машине. Я часто езжу на метро.",
            "exampleUz": "Mashinada ketyapmiz. Metroda ko‘p yuraman."
          }
        ],
        "table": [
          {
            "de": "Куда вы идёте?",
            "uz": "Qayerga ketyapsiz? (piyoda)"
          },
          {
            "de": "Куда вы едете?",
            "uz": "Qayerga ketyapsiz? (transportda)"
          },
          {
            "de": "С уважением, ...",
            "uz": "Hurmat bilan (rasmiy xat yakuni)"
          },
          {
            "de": "Я хотел бы обсудить проект.",
            "uz": "Loyiha haqida muhokama qilmoqchi edim."
          }
        ]
      },
      "exercises": [
        {
          "id": "ru_ex8_1",
          "type": "multiple-choice",
          "question": "\"Мы сейчас ______ на поезде в Самарканд.\" (transportda bir yo‘nalish):",
          "options": [
            "идём",
            "едем",
            "ходим",
            "ездим"
          ],
          "correctIndex": 1,
          "explanation": "Poezdda harakatlanayotganda \"ехать\" (мы едем) fe’li ishlatiladi."
        },
        {
          "id": "ru_ex8_2",
          "type": "fill-blank",
          "question": "Я каждый день ______ в спортзал пешком. (ходить -> я хожу)",
          "placeholder": "хожу...",
          "correctAnswer": "хожу",
          "hint": "хожу"
        }
      ],
      "speakingPrompt": {
        "textDe": "Я хотел бы назначить деловую встречу на следующую неделю.",
        "textUz": "Men kelasi haftaga rasmiy ishchi uchrashuv belgilamoqchi edim.",
        "tip": "Назначить [naznachit'] so‘zini aniq talaffuz qiling."
      },
      "kulturtip": {
        "title": "🇷🇺 Деловая переписка (Ishchi yozishmalar)",
        "text": "Rasmiy yozishmalarda xat doimo \"Уважаемый/Уважаемая...\" deb boshlanadi va oxirida \"С уважением, [Ism Familiya]\" deb imzolanadi."
      },
      "listening": {
        "title": "🎧 Аудирование (Tinglab tushunish)",
        "audioText": "Завтра утром я еду в аэропорт, чтобы встретить наших зарубежных партнёров.",
        "question": "U ertaga ertalab aeroportga nima uchun boryapti?",
        "options": [
          "O‘zi uchib ketish uchun",
          "Xorijiy hamkorlarni kutib olish uchun",
          "Chipta olish uchun"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ru_lesson_9",
      "lang": "ru",
      "level": "A2",
      "number": 9,
      "title": "В гостинице: Бронирование и заселение (Mehmonxona)",
      "goal": "Mehmonxonada xona bron qilish, sharoitlarni bilish va hisob-kitob qilish.",
      "theory": {
        "introUz": "Rus tilida mehmonxonada (в гостинице / в отеле) bir yoki ikki kishilik xona so‘rash, qulayliklar va chiqish vaqti (расчетный час) haqida muloqot.",
        "rules": [
          {
            "pattern": "Я хочу забронировать номер.",
            "pronunciation": "Ya xochu zabronirovat nomer",
            "exampleDe": "Я хочу забронировать одноместный номер на трое суток.",
            "exampleUz": "Men uch kunga bir kishilik xona band qilmoqchiman."
          },
          {
            "pattern": "Завтрак включён в стоимость?",
            "pronunciation": "Zavtrak vklyuchyon v stoimost?",
            "exampleDe": "Скажите, пожалуйста, завтрак включён в стоимость?",
            "exampleUz": "Ayting-chi, iltimos, nonushta narx ichiga kirganmi?"
          },
          {
            "pattern": "В номере есть ...? (bormi?)",
            "pronunciation": "V nomere yest ...?",
            "exampleDe": "В номере есть бесплатный Wi-Fi и кондиционер?",
            "exampleUz": "Xonada bepul Wi-Fi va konditsioner bormi?"
          },
          {
            "pattern": "Во сколько расчётный час?",
            "pronunciation": "Vo skolko raschyotniy chas?",
            "exampleDe": "Расчётный час у нас в двенадцать часов дня.",
            "exampleUz": "Bizda chiqish vaqti kunduzi soat o‘n ikkida."
          }
        ],
        "table": [
          {
            "de": "одноместный / двухместный номер",
            "uz": "bir kishilik / ikki kishilik xona"
          },
          {
            "de": "ключ-карта / бронирование",
            "uz": "karta kalit / bron"
          },
          {
            "de": "Кондиционер не работает.",
            "uz": "Konditsioner ishlamayapti."
          },
          {
            "de": "Вызовите, пожалуйста, такси.",
            "uz": "Iltimos, taksi chaqirib bering."
          }
        ]
      },
      "kulturtip": {
        "title": "Rossiyada mehmonxonada ro‘yxatdan o‘tish (Регистрация)",
        "text": "Rossiyaga borgan chet el fuqarolari mehmonxonaga joylashganda mehmonxona ma’muriyati ularni ichki ishlar organlarida (миграционный учёт) ro‘yxatga qo‘yadi va maxsus qog‘oz beradi."
      },
      "listening": {
        "title": "Listening: Разговор на ресепшене",
        "audioText": "Здравствуйте! Я бронировал номер люкс на имя Алимович на три дня.",
        "question": "Mehmon qanday xona va qaysi ismga bron qilgan?",
        "options": [
          "Oddiy xona Ivan nomiga",
          "Lyuks xona Alimovich nomiga",
          "Xona bron qilmagan",
          "Faqat nonushta so‘radi"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Здравствуйте! У меня забронирован двухместный номер с видом на город.",
        "textUz": "Assalomu alaykum! Menda shaharga qaragan ikki kishilik xona band qilingan.",
        "tip": "забронирован so‘zidagi urg‘uni to‘g‘ri qo‘yib ayting."
      },
      "exercises": [
        {
          "question": "\"Bir kishilik xona\" rus tilida nima deyiladi?",
          "options": [
            "двухместный номер",
            "одноместный номер",
            "большая квартира",
            "кухня"
          ],
          "correctIndex": 1,
          "explanation": "одноместный — bir kishilik."
        },
        {
          "question": "\"Завтрак включён в стоимость?\" ma’nosi nima?",
          "options": [
            "Nonushta qayerda?",
            "Nonushta narx ichiga kirganmi?",
            "Nonushta yeymizmi?",
            "Nonushta yo‘q"
          ],
          "correctIndex": 1,
          "explanation": "включён в стоимость — narxga kiritilgan."
        },
        {
          "question": "\"Вызовите, пожалуйста, такси\" tarjimasi:",
          "options": [
            "Taksi kelyapti",
            "Iltimos, taksi chaqirib bering",
            "Taksi qimmat",
            "Taksi haydovchisi"
          ],
          "correctIndex": 1,
          "explanation": "Вызовите — chaqiring / chaqirib bering."
        }
      ]
    },
    {
      "id": "ru_lesson_10",
      "lang": "ru",
      "level": "A2",
      "number": 10,
      "title": "Винительный падеж: Кого? Что? (Tushum kelishigi)",
      "goal": "To‘g‘ridan-to‘g‘ri harakat ob’ektini to‘g‘ri ifodalash, ayol jinsi va jonli otlar o‘zgarishi.",
      "theory": {
        "introUz": "Винительный падеж o‘zbek tilidagi tushum kelishigi (kimni? nimani? ko‘ryapman, yaxshi ko‘raman, o‘qiyapman)ga to‘g‘ri keladi.",
        "rules": [
          {
            "pattern": "Ayol jinsi (-а -> -у, -я -> -ю)",
            "pronunciation": "knigu, mashinu",
            "exampleDe": "Я читаю интересную книгу.",
            "exampleUz": "Men qiziqarli kitobni o‘qiyapman (книга -> книгу)."
          },
          {
            "pattern": "Jonsiz erkak va o‘rta jins (o‘zgarmaydi)",
            "pronunciation": "stol, pismo",
            "exampleDe": "Я вижу новый дом и красивое окно.",
            "exampleUz": "Men yangi uyni va chiroyli derazani ko‘ryapman."
          },
          {
            "pattern": "Jonli erkak jinsi (-а qo‘shiladi)",
            "pronunciation": "druga, brata",
            "exampleDe": "Я встретил своего лучшего друга.",
            "exampleUz": "Men o‘zimning eng yaxshi do‘stimni uchratdim (друг -> друга)."
          },
          {
            "pattern": "Yo‘nalish (Куда? В / На + Винительный)",
            "pronunciation": "v shkolu, na rabotu",
            "exampleDe": "Каждое утро я иду на работу.",
            "exampleUz": "Har tong men ishga boraman."
          }
        ],
        "table": [
          {
            "de": "Я люблю музыку и спорт.",
            "uz": "Men musiqa va sportni yaxshi ko‘raman."
          },
          {
            "de": "Я знаю этого человека.",
            "uz": "Men bu insonni taniyman."
          },
          {
            "de": "Мы купили новую машину.",
            "uz": "Biz yangi mashina sotib oldik."
          },
          {
            "de": "Куда вы идёте? — В театр.",
            "uz": "Qayerga ketyapsiz? — Teatrga."
          }
        ]
      },
      "kulturtip": {
        "title": "Rus tilida jonli va jonsiz otlar farqi",
        "text": "Rus tilida tushum kelishigida jonsiz narsalar (stol, telefon) o‘zgarmaydi, lekin jonli inson yoki hayvon (студента, кота) bo‘lsa, oxiriga \"-а\" qo‘shiladi."
      },
      "listening": {
        "title": "Listening: Do‘konda",
        "audioText": "Я хочу купить эту белую рубашку и кожаную куртку.",
        "question": "Xaridor nima sotib olmoqchi?",
        "options": [
          "Oyoq kiyim va shim",
          "Oq ko‘ylak va charm kurtka",
          "Faqat shlyapa",
          "Hech narsa"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Каждый вечер я с удовольствием слушаю классическую музыку.",
        "textUz": "Har oqshom men jon deb mumtoz musiqani tinglayman.",
        "tip": "классическую музыку birikmasida -ую oxirgi qo‘shimchalarini aniq ayting."
      },
      "exercises": [
        {
          "question": "\"Я читаю интересн______ книгу (книга - ayol jinsi)\":",
          "options": [
            "ая",
            "ую",
            "ой",
            "ом"
          ],
          "correctIndex": 1,
          "explanation": "Ayol jinsi sifatlari tushum kelishigida -ую qo‘shimchasini oladi."
        },
        {
          "question": "\"Я жду своего ______ (брат - jonli erkak jinsi)\":",
          "options": [
            "брат",
            "брата",
            "брату",
            "братом"
          ],
          "correctIndex": 1,
          "explanation": "Jonli erkak jinsi otlari tushum kelishigida -а oladi."
        },
        {
          "question": "\"Мы идём ______ концерт (Куда?)\":",
          "options": [
            "на",
            "в",
            "из",
            "о"
          ],
          "correctIndex": 0,
          "explanation": "Tadbirlar (kontsert, stadion) uchun \"на\" predlogi ishlatiladi."
        }
      ]
    },
    {
      "id": "ru_lesson_11",
      "lang": "ru",
      "level": "B1",
      "number": 11,
      "title": "У врача: Симптомы и здоровье (Salomatlik va Shifokor)",
      "goal": "Shifokorga kasallik belgilari, og‘riqlar va shikoyatlarni rus tilida aniq tushuntirish.",
      "theory": {
        "introUz": "Shifokor huzurida (у врача) qayer og‘riyotganini (болит / болят), harorat va dorilarni qabul qilish qoidalarini erkin bayon qilish.",
        "rules": [
          {
            "pattern": "У меня болит ... (birlikda)",
            "pronunciation": "U menya bolit",
            "exampleDe": "У меня сильно болит голова и горло.",
            "exampleUz": "Mening boshim va tomog‘im qattiq og‘riyapti."
          },
          {
            "pattern": "У меня болят ... (ko‘plikda)",
            "pronunciation": "U menya bolyat",
            "exampleDe": "У меня болят глаза и ноги.",
            "exampleUz": "Mening ko‘zlarim va oyoqlarim og‘riyapti."
          },
          {
            "pattern": "Я чувствую себя плохо",
            "pronunciation": "Ya chuvstvuyu sebya ploxo",
            "exampleDe": "У меня высокая температура и слабость.",
            "exampleUz": "Menda yuqori isitma va holsizlik bor."
          },
          {
            "pattern": "Принимайте лекарство (iching)",
            "pronunciation": "Prinimayte lekarstvo",
            "exampleDe": "Принимайте эти таблетки три раза в день после еды.",
            "exampleUz": "Bu tabletkalarni ovqatdan keyin kuniga 3 mahal iching."
          }
        ],
        "table": [
          {
            "de": "головная боль / простуда",
            "uz": "bosh og‘rig‘i / shamollash"
          },
          {
            "de": "высокое давление / рецепт",
            "uz": "yuqori qon bosimi / retsept"
          },
          {
            "de": "аптека / градусник",
            "uz": "dorixona / gradusnik"
          },
          {
            "de": "Выздоравливайте скорее!",
            "uz": "Tezroq sog‘ayib keting!"
          }
        ]
      },
      "kulturtip": {
        "title": "Rossiyada shifokor chaqirish (Вызов на дом)",
        "text": "Rossiyada agar haroratingiz 38 dan baland bo‘lsa, poliklinikaga bormaysiz. Telefon orqali \"врач на дом\" (uyga shifokor chaqirish) qilasiz, uchastka shifokori uyingizga kelib tekshiradi."
      },
      "listening": {
        "title": "Listening: Рекомендация терапевта",
        "audioText": "У вас обычный грипп. Соблюдайте постельный режим и пейте много горячего чая с лимоном.",
        "question": "Shifokor bemorga nima tavsiya qildi?",
        "options": [
          "Sport bilan shug‘ullanishni",
          "O‘rinda yotish va limonli issiq choy ichishni",
          "Muzdek suv ichishni",
          "Ishga chiqishni"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Доктор, подскажите, пожалуйста, как правильно принимать эти капли?",
        "textUz": "Doktor, ayting-chi, iltimos, bu tomchilarni qanday qabul qilish kerak?",
        "tip": "принимать эти капли birikmasini ravon talaffuz qiling."
      },
      "exercises": [
        {
          "question": "\"Mening yuragim og‘riyapti\" qaysi biri to‘g‘ri?",
          "options": [
            "У меня болит сердце.",
            "У меня болят сердце.",
            "Сердце не хочет.",
            "Я люблю сердце."
          ],
          "correctIndex": 0,
          "explanation": "Сердце birlikda bo‘lgani uchun \"болит\" bo‘ladi."
        },
        {
          "question": "\"Выздоравливайте!\" iborasining ma’nosi nima?",
          "options": [
            "Xayr!",
            "Tezroq tuzalib keting!",
            "Yoqimli ishtaha!",
            "Keling!"
          ],
          "correctIndex": 1,
          "explanation": "Kasal bo‘lgan insonning tezroq tuzalishini tilash."
        },
        {
          "question": "\"Dorini ovqatdan oldin iching\" tarjimasi:",
          "options": [
            "Принимайте лекарство до еды.",
            "Принимайте лекарство после еды.",
            "Не пейте лекарство.",
            "Купите лекарство."
          ],
          "correctIndex": 0,
          "explanation": "до еды — ovqatdan oldin."
        }
      ]
    },
    {
      "id": "ru_lesson_12",
      "lang": "ru",
      "level": "B1",
      "number": 12,
      "title": "Дательный падеж: Кому? Чему? (Jo‘nalish kelishigi)",
      "goal": "Birovga nimadir berish, qo‘ng‘iroq qilish va yordam berish fe’llaridan to‘g‘ri foydalanish.",
      "theory": {
        "introUz": "Дательный падеж (kimga? nimaga?) — yordam bermoq (помогать), qo‘ng‘iroq qilmoq (звонить), sovg‘a qilmoq (дарить) fe’llari bilan ishlatiladi.",
        "rules": [
          {
            "pattern": "Erkak jinsi (-у / -ю)",
            "pronunciation": "drugu, bratu",
            "exampleDe": "Я позвонил своему другу.",
            "exampleUz": "Men o‘z do‘stimga qo‘ng‘iroq qildim (друг -> другу)."
          },
          {
            "pattern": "Ayol jinsi (-е)",
            "pronunciation": "mame, sestre",
            "exampleDe": "Я подарил цветы маме.",
            "exampleUz": "Men onamga gullar sovg‘a qildim (мама -> маме)."
          },
          {
            "pattern": "Menga / Senga kerak (Мне / Тебе нужно)",
            "pronunciation": "Mne nujno",
            "exampleDe": "Мне нужно срочно отправить этот документ.",
            "exampleUz": "Menga bu hujjatni zudlik bilan jo‘natish kerak."
          },
          {
            "pattern": "Yoshni aytish (Мне 25 лет)",
            "pronunciation": "Mne 25 let",
            "exampleDe": "Сколько вам лет? — Мне тридцать лет.",
            "exampleUz": "Yoshingiz nechada? — Men o‘ttiz yoshdaman."
          }
        ],
        "table": [
          {
            "de": "помогать друзьям",
            "uz": "do‘stlarga yordam bermoq"
          },
          {
            "de": "звонить родителям",
            "uz": "ota-onaga qo‘ng‘iroq qilmoq"
          },
          {
            "de": "Мне нравится этот город.",
            "uz": "Menga bu shahar yoqadi."
          },
          {
            "de": "Передайте привет коллегам!",
            "uz": "Hamkasblarga salom ayting!"
          }
        ]
      },
      "kulturtip": {
        "title": "Rus tilida yosh aytish qoidasi",
        "text": "Rus tilida \"Men 20 yoshdaman\" deganda \"Я есть 20\" deyilmaydi. Doimo Дательный падеж ishlatiladi: \"Мне 20 лет\" (Menga 20 yosh)."
      },
      "listening": {
        "title": "Listening: Телефонный звонок",
        "audioText": "Алло, передай, пожалуйста, директору, что я задержусь на пятнадцать минут.",
        "question": "Xabarni kimga yetkazish so‘raldi?",
        "options": [
          "Kotibaga",
          "Direktorga",
          "Haydovchiga",
          "Do‘stiga"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Мне очень нравится изучать иностранные языки с помощью искусственного интеллекта.",
        "textUz": "Menga sun’iy intellekt yordamida chet tillarini o‘rganish juda yoqadi.",
        "tip": "Мне очень нравится iborasini tabiiy va erkin ayting."
      },
      "exercises": [
        {
          "question": "\"Я хочу помочь ______ (друг - erkak jinsi)\":",
          "options": [
            "друг",
            "другу",
            "другом",
            "друга"
          ],
          "correctIndex": 1,
          "explanation": "помогать fe’li Дательный падеж (кому? -> другу) talab qiladi."
        },
        {
          "question": "\"Yoshingiz nechada?\" rus tilida qanday so‘raladi?",
          "options": [
            "Кто вы?",
            "Сколько вам лет?",
            "Где вы живёте?",
            "Как дела?"
          ],
          "correctIndex": 1,
          "explanation": "Сколько вам лет? — yoshni so‘rashning standart shakli."
        },
        {
          "question": "\"Я звоню ______ (сестра - ayol jinsi)\":",
          "options": [
            "сестре",
            "сестру",
            "сестрой",
            "сестра"
          ],
          "correctIndex": 0,
          "explanation": "Ayol jinsi Дательный падежда -е qo‘shimchasini oladi."
        }
      ]
    },
    {
      "id": "ru_lesson_13",
      "lang": "ru",
      "level": "B1",
      "number": 13,
      "title": "Творительный падеж: С кем? С чем? Чем? (Birgalik kelishigi)",
      "goal": "Birgalikdagi harakatlar (do‘st bilan), kasb-hunar va vositalarni ifodalash.",
      "theory": {
        "introUz": "Творительный падеж kim bilan? nima bilan? (с кем? с чем?) yoki kasb bo‘lib ishlamoq (работать кем?) savollariga javob beradi.",
        "rules": [
          {
            "pattern": "Erkak jinsi (-ом / -ем)",
            "pronunciation": "s drugom, s bratom",
            "exampleDe": "Я гуляю в парке с другом.",
            "exampleUz": "Men parkda do‘stim bilan sayr qilyapman."
          },
          {
            "pattern": "Ayol jinsi (-ой / -ей)",
            "pronunciation": "s sestroy, s mamoy",
            "exampleDe": "Мы пили чай с сестрой.",
            "exampleUz": "Biz singlim bilan choy ichdik."
          },
          {
            "pattern": "Kasb-hunar (быть / работать + Творительный)",
            "pronunciation": "rabotat vrachom",
            "exampleDe": "Мой брат работает инженером.",
            "exampleUz": "Mening akam muhandis bo‘lib ishlaydi."
          },
          {
            "pattern": "Qiziqish (увлекаться / заниматься)",
            "pronunciation": "zanimatsya sportom",
            "exampleDe": "Я с детства увлекаюсь программированием.",
            "exampleUz": "Men yoshlikdan dasturlashga qiziqaman."
          }
        ],
        "table": [
          {
            "de": "кофе с молоком",
            "uz": "sutli qahva"
          },
          {
            "de": "бутерброд с сыром",
            "uz": "pishloqli buterbrod"
          },
          {
            "de": "заниматься спортом",
            "uz": "sport bilan shug‘ullanmoq"
          },
          {
            "de": "С праздником!",
            "uz": "Bayramingiz bilan!"
          }
        ]
      },
      "kulturtip": {
        "title": "Rus tilida kasbni aytish siri",
        "text": "\"Он врач\" (u hozir shifokor) deyish mumkin, lekin \"U shifokor bo‘lib ishlaydi\" deganda doim Творительный падеж ishlatiladi: \"Он работает врачом\"."
      },
      "listening": {
        "title": "Listening: В кафе",
        "audioText": "Мне, пожалуйста, один чёрный кофе с молоком и круассан с шоколадом.",
        "question": "Mijoz qanday qahva va kruassan buyurtma qildi?",
        "options": [
          "Choy va pechenye",
          "Sutli qora kofe va shokoladli kruassan",
          "Faqat suv",
          "Meva sharbati"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "В свободное время я с большим удовольствием занимаюсь спортом и чтением книг.",
        "textUz": "Bo‘sh vaqtimda men katta mamnuniyat bilan sport va kitob o‘qish bilan shug‘ullanaman.",
        "tip": "с большим удовольствием iborasini ifodali ayting."
      },
      "exercises": [
        {
          "question": "\"Я пью чай с ______ (сахар - shakar bilan)\":",
          "options": [
            "сахар",
            "сахаром",
            "сахаре",
            "сахара"
          ],
          "correctIndex": 1,
          "explanation": "с чем? -> с сахаром (-ом qo‘shimchasi)."
        },
        {
          "question": "\"Она работает ______ (учительница - ayol jinsi)\":",
          "options": [
            "учительница",
            "учительницей",
            "учительницу",
            "учительнице"
          ],
          "correctIndex": 1,
          "explanation": "работать кем? -> учительницей (-ей qo‘shimchasi)."
        },
        {
          "question": "\"С праздником!\" qanday tarjima qilinadi?",
          "options": [
            "Xayrli tong!",
            "Bayramingiz bilan!",
            "Rahmat!",
            "Xush kelibsiz!"
          ],
          "correctIndex": 1,
          "explanation": "Rus xalqida bayram bilan tabriklashning klassik shakli."
        }
      ]
    },
    {
      "id": "ru_lesson_14",
      "lang": "ru",
      "level": "B2",
      "number": 14,
      "title": "Собеседование на работу и Деловой этикет (Ish suhbati)",
      "goal": "Rus tilida ish beruvchilar va kompaniyalar oldida o‘z tajribasini professional taqdim etish.",
      "theory": {
        "introUz": "B2 darajadagi ishbilarmonlik rus tili: rezyume, tajriba, yutuqlar va muzokaralarda o‘zini erkin tutish qoidalari.",
        "rules": [
          {
            "pattern": "Я обладаю опытом в сфере ... (men ... sohasida tajribaga egaman)",
            "pronunciation": "Ya obladayu opitom",
            "exampleDe": "Я обладаю пятилетним опытом работы в сфере IT.",
            "exampleUz": "Men IT sohasida 5 yillik ish tajribasiga egaman."
          },
          {
            "pattern": "К моим сильным сторонам относятся ... (kuchli tomonlarim)",
            "pronunciation": "K moim silnim storonam",
            "exampleDe": "К моим сильным сторонам относятся пунктуальность и ответственность.",
            "exampleUz": "Mening kuchli tomonlarimga intizomlilik va mas’uliyatlilik kiradi."
          },
          {
            "pattern": "Я успешно реализовал проект ... (loyihani amalga oshirdim)",
            "pronunciation": "Ya uspeshno realizoval",
            "exampleDe": "Я успешно реализовал масштабный проект по автоматизации.",
            "exampleUz": "Men avtomatlashtirish bo‘yicha yirik loyihani muvaffaqiyatli amalga oshirdim."
          },
          {
            "pattern": "Я готов внести вклад в ... (hissa qo‘shishga tayyorman)",
            "pronunciation": "vnesti vklad",
            "exampleDe": "Я готов внести свой вклад в развитие вашей компании.",
            "exampleUz": "Men kompaniyangiz rivojiga o‘z hissamni qo‘shishga tayyorman."
          }
        ],
        "table": [
          {
            "de": "резюме / сопроводительное письмо",
            "uz": "rezyume (CV) / yo‘llanma xat"
          },
          {
            "de": "должность / оклад (зарплата)",
            "uz": "lavozim / maosh"
          },
          {
            "de": "профессиональный рост",
            "uz": "kasbiy o‘sish"
          },
          {
            "de": "Благодарю за уделённое время.",
            "uz": "Ajratilgan vaqt uchun minnatdorman."
          }
        ]
      },
      "kulturtip": {
        "title": "Rossiyada rasmiy ish muloqoti (Вы murojaati)",
        "text": "Ish suhbatida suhbatdoshga faqat \"Вы\" (Siz) deb murojaat qilinadi va odatda Ism va Otasining ismi (Имя и Отчество: masalan, Алексей Иванович) bilan chaqirish yuksak hurmat belgisidir."
      },
      "listening": {
        "title": "Listening: Вопрос руководителя",
        "audioText": "Расскажите, пожалуйста, о ваших главных профессиональных достижениях на предыдущем месте работы.",
        "question": "Rahbar nomzoddan nima haqida so‘ramoqda?",
        "options": [
          "Oilasi haqida",
          "Oldingi ish joyidagi asosiy yutuqlari haqida",
          "Hobbilari haqida",
          "Nechta tilda gaplashishini"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Мой практический опыт и стремление к постоянному развитию позволят мне эффективно решать поставленные задачи.",
        "textUz": "Mening amaliy tajribam va doimiy rivojlanishga intilishim qo‘yilgan vazifalarni samarali hal qilishimga imkon beradi.",
        "tip": "позволят мне эффективно решать... qismini ishonchli ayting."
      },
      "exercises": [
        {
          "question": "\"Men IT sohasida katta tajribaga egaman\" rasmiy iborasi:",
          "options": [
            "У меня нет работы.",
            "Я обладаю большим опытом в сфере IT.",
            "Я хочу в IT.",
            "IT это сложно."
          ],
          "correctIndex": 1,
          "explanation": "обладать опытом — yuqori darajadagi rasmiy leksika."
        },
        {
          "question": "\"Kompaniya rivojiga hissa qo‘shish\" iborasi qaysi?",
          "options": [
            "Уйти домой",
            "Внести вклад в развитие компании",
            "Много спать",
            "Ничего не делать"
          ],
          "correctIndex": 1,
          "explanation": "внести вклад — hissa qo‘shmoq."
        },
        {
          "question": "\"Благодарю за уделённое время\" qachon aytiladi?",
          "options": [
            "Suhbat oxirida minnatdorchilik bildirishda",
            "Salomlashganda",
            "Kasal bo‘lganda",
            "Kechikganda"
          ],
          "correctIndex": 0,
          "explanation": "Ish suhbati yoki uchrashuv oxirida madaniyatli yakun."
        }
      ]
    },
    {
      "id": "ru_lesson_15",
      "lang": "ru",
      "level": "B2",
      "number": 15,
      "title": "Сложноподчинённые предложения и Деловая переписка (Murakkab gaplar)",
      "goal": "B2 darajadagi boy bog‘lovchilar: благодаря тому что, несмотря на то что, для того чтобы.",
      "theory": {
        "introUz": "Biznes va rasmiy rus tilida sabab, maqsad va zidlikni ifodalovchi murakkab bog‘lovchilar nutqni boy va nufuzli ko‘rsatadi.",
        "rules": [
          {
            "pattern": "Благодаря тому что ... (Tufayli / Sharofati bilan)",
            "pronunciation": "Blagodarya tomu chto",
            "exampleDe": "Благодаря тому что мы работали слаженно, проект завершён вовремя.",
            "exampleUz": "Hamjihatlikda ishlaganimiz tufayli loyiha o‘z vaqtida yakunlandi."
          },
          {
            "pattern": "Несмотря на то что ... (Garchi ... qaramay)",
            "pronunciation": "Nesmotrya na to chto",
            "exampleDe": "Несмотря на то что было сложно, мы достигли отличных результатов.",
            "exampleUz": "Qiyin bo‘lganiga qaramay, biz ajoyib natijalarga erishdik."
          },
          {
            "pattern": "Для того чтобы ... (Maqsadida / Uchun)",
            "pronunciation": "Dlya togo chtobi",
            "exampleDe": "Для того чтобы добиться успеха, нужно постоянно учиться.",
            "exampleUz": "Muvaffaqiyatga erishish uchun doimo o‘rganish zarur."
          },
          {
            "pattern": "В связи с тем что ... (Munozabati bilan / Sababli)",
            "pronunciation": "V svyazi s tem chto",
            "exampleDe": "В связи с тем что начался ремонт, офис временно закрыт.",
            "exampleUz": "Ta’mirlash boshlangani munosabati bilan ofis vaqtincha yopiq."
          }
        ],
        "table": [
          {
            "de": "В первую очередь ...",
            "uz": "Birinchi navbatda ..."
          },
          {
            "de": "Таким образом, ...",
            "uz": "Shunday qilib, ..."
          },
          {
            "de": "С уважением, ...",
            "uz": "Hurmat bilan, (xat yakunida)"
          },
          {
            "de": "Ждём вашего ответа.",
            "uz": "Javobingizni kutamiz."
          }
        ]
      },
      "kulturtip": {
        "title": "Rus tilida xat yozish odobi",
        "text": "Rasmiy maktublar har doim \"Уважаемый господин...\" yoki \"Уважаемая...\" bilan boshlanadi va \"С уважением...\" (Hurmat bilan) hamda imzo bilan yakunlanadi."
      },
      "listening": {
        "title": "Listening: Деловое письмо",
        "audioText": "Несмотря на возникшие технические трудности, наша команда выполнила все обязательства перед заказчиком.",
        "question": "Jamoa qiyinchiliklarga qaramay nima qildi?",
        "options": [
          "Buyurtmachi oldidagi barcha majburiyatlarini bajardi",
          "Loyihani to‘xtatdi",
          "Pulni qaytardi",
          "Boshqa ishga o‘tdi"
        ],
        "correctIndex": 0
      },
      "speakingPrompt": {
        "textDe": "Для того чтобы повысить эффективность работы, мы внедрили современную систему управления проектами.",
        "textUz": "Ish samaradorligini oshirish uchun biz loyihalarni boshqarishning zamonaviy tizimini joriy qildik.",
        "tip": "Для того чтобы... qismini ifodali va tushunarli ayting."
      },
      "exercises": [
        {
          "question": "\"Garchi yomg‘ir yoqqaniga qaramay...\" ruscha qaysi bog‘lovchi bilan boshlanadi?",
          "options": [
            "Потому что",
            "Несмотря на то что",
            "Как только",
            "Если бы"
          ],
          "correctIndex": 1,
          "explanation": "Несмотря на то что — garchi ... ga qaramay."
        },
        {
          "question": "\"Do‘stlarim yordam bergani tufayli\" qaysi ibora to‘g‘ri?",
          "options": [
            "Благодаря тому что друзья помогли",
            "Из-за того что плохо",
            "Почему друзья",
            "Где друзья"
          ],
          "correctIndex": 0,
          "explanation": "Благодаря тому что — ijobiy sabab uchun \"tufayli\"."
        },
        {
          "question": "Rasmiy xat yakunida qaysi ibora ishlatiladi?",
          "options": [
            "Пока!",
            "Привет!",
            "С уважением,",
            "До скорого!"
          ],
          "correctIndex": 2,
          "explanation": "С уважением — rasmiy yozishmalarning oltin yakuni."
        }
      ]
    },
    {
      "id": "ru_lesson_16",
      "lang": "ru",
      "level": "B2",
      "number": 16,
      "title": "Свободная дискуссия, ТРКИ-2 и фразеологизмы (Erkin nutq va imtihon)",
      "goal": "Rus tilida har qanday murakkab mavzuda erkin bahslashish, maqollar va idiomalarni o‘z o‘rnida ishlatish, ТРКИ-2 darajasiga to‘liq erishish.",
      "theory": {
        "introUz": "B2 darajasining cho‘qqisi: o‘z nuqtai nazarini dalillash, maqollar va mashhur rus frazeologizmlarini o‘z o‘rnida qo‘llash.",
        "rules": [
          {
            "pattern": "С одной стороны ..., с другой стороны ... (Bir tomondan ..., boshqa tomondan ...)",
            "pronunciation": "S odnoy storoni ..., s drugoy storoni",
            "exampleDe": "С одной стороны это выгодно, с другой стороны требует усилий.",
            "exampleUz": "Bir tomondan bu foydali, boshqa tomondan esa kuch talab qiladi."
          },
          {
            "pattern": "По моему глубокому убеждению ... (Mening chuqur ishonchimcha)",
            "pronunciation": "Po moemu glubokomu ubejdeniyu",
            "exampleDe": "По моему глубокому убеждению, чтение формирует личность.",
            "exampleUz": "Mening chuqur ishonchimcha, mutolaa shaxsiyatni shakllantiradi."
          },
          {
            "pattern": "Не подлежит сомнению, что ... (Shubhasizki / Shubhaga o‘rin yo‘qki)",
            "pronunciation": "Ne podlejit somneniyu",
            "exampleDe": "Не подлежит сомнению, что технологии меняют мир к лучшему.",
            "exampleUz": "Shubhasizki, texnologiyalar dunyoni yaxshi tomonga o‘zgartirmoqda."
          },
          {
            "pattern": "Подводя итоги, можно сказать, что ... (Xulosa qilib aytganda)",
            "pronunciation": "Podvodya itogi",
            "exampleDe": "Подводя итоги, можно сказать, что мы достигли поставленной цели.",
            "exampleUz": "Xulosa qilib aytganda, biz qo‘yilgan maqsadga erishdik."
          }
        ],
        "table": [
          {
            "de": "Я абсолютно согласен с вами.",
            "uz": "Men siz bilan mutlaqo roziman."
          },
          {
            "de": "Я придерживаюсь иного мнения.",
            "uz": "Men boshqacha fikrdaman."
          },
          {
            "de": "мастер на все руки",
            "uz": "qo‘li gul usta / barcha ishni eplaydigan odam"
          },
          {
            "de": "Поздравляем с уровнем B2!",
            "uz": "B2 darajangiz bilan tabriklaymiz!"
          }
        ]
      },
      "kulturtip": {
        "title": "ТРКИ-2 (B2) imtihoni sirlari",
        "text": "ТРКИ-2 darajasida suhbatdosh sizning rus tili intonatsiyangiz (Инт-1, Инт-2, Инт-3) va rus madaniyatiga xos maqollarni qanchalik tabiiy ishlatishingizga qarab baholaydi."
      },
      "listening": {
        "title": "Listening: Теледебаты",
        "audioText": "Хотя развитие искусственного интеллекта вызывает много споров, нельзя отрицать его колоссальную пользу для медицины и науки.",
        "question": "Spiker sun’iy intellekt haqida qanday xulosa bildirdi?",
        "options": [
          "U foydasiz",
          "Ko‘p bahslarga sabab bo‘lsa-da, tibbiyot va fan uchun beqiyos foydasi bor",
          "Uni to‘xtatish kerak",
          "Faqat o‘yinlar uchun kerak"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "Я твёрдо убеждён, что владение несколькими языками открывает безграничные горизонты для каждого человека.",
        "textUz": "Men qat’iy ishonamanki, bir nechta tilni bilish har bir inson uchun cheksiz ufqlarni ochadi.",
        "tip": "Ushbu jumlani ТРКИ-2 darajasidagi intellektuallik bilan, ravon ayting."
      },
      "exercises": [
        {
          "question": "\"Bir tomondan ..., boshqa tomondan ...\" rus tilida qaysi biri?",
          "options": [
            "Сначала ..., потом ...",
            "С одной стороны ..., с другой стороны ...",
            "Там ..., тут ...",
            "Или ..., или ..."
          ],
          "correctIndex": 1,
          "explanation": "С одной стороны ..., с другой стороны ... — bahs-munozaraning nufuzli qolipi."
        },
        {
          "question": "\"Men siz bilan to‘liq roziman\" ruscha qanday aytiladi?",
          "options": [
            "Я вас не знаю.",
            "Я абсолютно согласен с вами.",
            "Это неправильно.",
            "Я против."
          ],
          "correctIndex": 1,
          "explanation": "абсолютно согласен — to‘liq roziman."
        },
        {
          "question": "\"мастер на все руки\" frazeologizmi nimani bildiradi?",
          "options": [
            "Dangasa odam",
            "Barcha ishni qoyillatib uddalaydigan mohir inson",
            "Yiqilib tushgan odam",
            "Kasal inson"
          ],
          "correctIndex": 1,
          "explanation": "мастер на все руки — qo‘li gul, har ishni eplaydigan odam."
        }
      ]
    }
  ],
  "ko": [
    {
      "id": "ko_lesson_1",
      "lang": "ko",
      "level": "A1",
      "number": 1,
      "title": "Hangeul (한글) Alifbosi va Salomlashish",
      "goal": "Dunyoning eng mukammal alifbosi Hangeul unli va undoshlari, birinchi salomlashish.",
      "theory": {
        "introUz": "Koreys alifbosi Hangeul (한글) 1443 yilda qirol Sejong tomonidan yaratilgan bo‘lib, o‘rganish juda oson:",
        "rules": [
          {
            "pattern": "Asosiy unlilar",
            "pronunciation": "ㅏ (a), ㅓ (o), ㅗ (o'), ㅜ (u), ㅡ (i), ㅣ (i)",
            "exampleDe": "아이 [ai] (bola), 오이 [oi] (bodring)",
            "exampleUz": "bola, bodring"
          },
          {
            "pattern": "Asosiy undoshlar",
            "pronunciation": "ㄱ (k/g), ㄴ (n), ㄷ (t/d), ㄹ (r/l), ㅁ (m), ㅂ (p/b), ㅅ (s), ㅇ (ng)",
            "exampleDe": "나무 [namu] (daraxt)",
            "exampleUz": "daraxt"
          },
          {
            "pattern": "So‘z tuzilishi",
            "pronunciation": "Harflar bo‘g‘in qilib to‘rtburchak bloklarga yig‘iladi",
            "exampleDe": "한 (han) + 글 (geul) = 한글",
            "exampleUz": "Hangeul"
          }
        ],
        "table": [
          {
            "de": "안녕하세요",
            "uz": "Assalomu alaykum / Salom (Annyeonghaseyo)"
          },
          {
            "de": "감사합니다",
            "uz": "Katta rahmat (Gamsahamnida)"
          },
          {
            "de": "죄송합니다",
            "uz": "Kechirasiz / Uzr (Joesonghamnida)"
          },
          {
            "de": "네",
            "uz": "Ha (Ne)"
          },
          {
            "de": "아니요",
            "uz": "Yo‘q (Aniyo)"
          },
          {
            "de": "안녕히 가세요",
            "uz": "Yaxshi boring (ketayotganga)"
          },
          {
            "de": "안녕히 계세요",
            "uz": "Yaxshi qoling (qolayotganga)"
          }
        ]
      },
      "exercises": [
        {
          "id": "ko_ex1_1",
          "type": "multiple-choice",
          "question": "Koreyscha \"Assalomu alaykum\" qanday aytiladi?",
          "options": [
            "감사합니다",
            "안녕하세요",
            "죄송합니다",
            "네"
          ],
          "correctIndex": 1,
          "explanation": "안녕하세요 [Annyeonghaseyo] — eng universal salomlashish ifodasi."
        },
        {
          "id": "ko_ex1_2",
          "type": "multiple-choice",
          "question": "Birov sizga yordam bersa, qanday minnatdorchilik bildirasiz?",
          "options": [
            "감사합니다",
            "안녕히 가세요",
            "아니요"
          ],
          "correctIndex": 0,
          "explanation": "감사합니다 [Gamsahamnida] — Rahmat."
        }
      ],
      "speakingPrompt": {
        "textDe": "안녕하세요! 만나서 반갑습니다.",
        "textUz": "Salom! Tanishganimdan xursandman (Annyeonghaseyo! Mannaseo bangapseumnida).",
        "tip": "Koreys tilida gapirganda boshni yengil egib salom berish hurmat belgisidir."
      },
      "kulturtip": {
        "title": "🇰🇷 Bowing (Ta’zim qilish odobi)",
        "text": "Koreyada salomlashganda yoki minnatdorchilik bildirganda 15-30 daraja ta’zim qilinadi. Bu kishiga bo‘lgan chuqur hurmatni ko‘rsatadi."
      },
      "listening": {
        "title": "🎧 듣기 (Tinglab tushunish)",
        "audioText": "안녕하세요! 감사합니다.",
        "question": "Koreyscha audio nima dedi?",
        "options": [
          "Xayr dedi",
          "Salom va Rahmat dedi",
          "Kechirasiz dedi"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ko_lesson_2",
      "lang": "ko",
      "level": "A1",
      "number": 2,
      "title": "O‘zini tanishtirish va 이에요 / 예요 (Bo‘lmoq)",
      "goal": "Ism va kasbni aytish. Koreys tilida gap oxirida keladigan hurmat qo‘shimchalari.",
      "theory": {
        "introUz": "Koreys tilida fe’l doimo GAP OXIRIDA keladi (o‘zbek tilidek!). Ism aytish uchun:",
        "rules": [
          {
            "pattern": "저는 ...입니다",
            "pronunciation": "Men ...man (rasmiy hurmat shakli)",
            "exampleDe": "저는 안вар입니다.",
            "exampleUz": "Men Anvarman."
          },
          {
            "pattern": "이에요 / 예요",
            "pronunciation": "Otga qo‘shiladigan \"bo‘lmoq\" qo‘shimchasi",
            "exampleDe": "학생이에요 (talabaman), 의사예요 (shifokorman)",
            "exampleUz": "talabaman, shifokorman"
          },
          {
            "pattern": "Undoshga tugasa",
            "pronunciation": "이에요 qo‘shiladi",
            "exampleDe": "선생님 + 이에요 = 선생님이에요",
            "exampleUz": "o‘qituvchiman"
          },
          {
            "pattern": "Unliga tugasa",
            "pronunciation": "예요 qo‘shiladi",
            "exampleDe": "의사 + 예요 = 의사예요",
            "exampleUz": "shifokorman"
          }
        ],
        "table": [
          {
            "de": "저는 우즈베키스탄 사람이에요.",
            "uz": "Men O‘zbekistonlikman."
          },
          {
            "de": "저는 학생이에요.",
            "uz": "Men talabaman."
          },
          {
            "de": "이름이 뭐예요?",
            "uz": "Ismingiz nima?"
          },
          {
            "de": "제 이름은 ...예요.",
            "uz": "Mening ismim ..."
          }
        ]
      },
      "exercises": [
        {
          "id": "ko_ex2_1",
          "type": "multiple-choice",
          "question": "\"Men talabaman\" koreyscha qanday bo‘ladi? (학생 = talaba / undoshga tugaydi)",
          "options": [
            "저는 학생이에요.",
            "저는 학생예요.",
            "저는 학생입니다예요."
          ],
          "correctIndex": 0,
          "explanation": "학생 so‘zi undosh (ㅇ) bilan tugagani uchun \"이에요\" qo‘shiladi."
        },
        {
          "id": "ko_ex2_2",
          "type": "fill-blank",
          "question": "저는 우즈베키스탄 사람______ (Men o‘zbekistonlikman - 사람 undoshga tugaydi)",
          "placeholder": "이에요 yoki 예요...",
          "correctAnswer": "이에요",
          "hint": "이에요"
        }
      ],
      "speakingPrompt": {
        "textDe": "저는 우즈베키스탄 사람이에요. 한국어를 배워요.",
        "textUz": "Men O‘zbekistonlikman. Koreys tilini o‘rganayapman.",
        "tip": "Koreyscha talaffuzni tinglab ohangiga mos ayting."
      },
      "kulturtip": {
        "title": "🇰🇷 Yosh va Martaba (Hurmat tili)",
        "text": "Koreyada insonlar tanishganda darhol yoshini so‘rashadi. Bu qiziquvchanlik emas, balki qaysi hurmat darajasida gapirishni aniqlash uchundir!"
      },
      "listening": {
        "title": "🎧 듣기 (Tinglab tushunish)",
        "audioText": "저는 학생이에요. 한국어를 좋아해요.",
        "question": "U kim va nimani yoqtiradi?",
        "options": [
          "O‘qituvchi",
          "Talaba va u koreys tilini yoqtiradi",
          "Shifokor"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ko_lesson_3",
      "lang": "ko",
      "level": "A1",
      "number": 3,
      "title": "Ko‘rsatish olmoshlari (이, 그, 저) va Joylar (여기, 저기)",
      "goal": "Yaqin va uzoqdagi narsalarni ko‘rsatish: 이것, 그것, 저것 va joylar: 여기, 저기, 어디.",
      "theory": {
        "introUz": "Koreys tilida narsalarni ko‘rsatish 3 ta masofaga bo‘linadi:",
        "rules": [
          {
            "pattern": "이 (i) / 이것 (igeot)",
            "pronunciation": "Bu narsa (gapiruvchiga yaqin)",
            "exampleDe": "이것은 책이에요.",
            "exampleUz": "Bu kitob."
          },
          {
            "pattern": "그 (geu) / 그것 (geugeot)",
            "pronunciation": "U narsa (tinglovchiga yaqin)",
            "exampleDe": "그것은 시계예요.",
            "exampleUz": "U soat."
          },
          {
            "pattern": "저 (jeo) / 저것 (jeogeot)",
            "pronunciation": "Anavi narsa (ikkalasidan ham uzoqda)",
            "exampleDe": "저것은 가방이에요.",
            "exampleUz": "Anavi sumka."
          },
          {
            "pattern": "여기 / 저기 / 어디",
            "pronunciation": "Bu yer / Anavi yer / Qayer",
            "exampleDe": "여기가 화장실이에요.",
            "exampleUz": "Bu yer hojatxona."
          }
        ],
        "table": [
          {
            "de": "이게 뭐예요?",
            "uz": "Bu nima? (og‘zaki ixcham shakli)"
          },
          {
            "de": "화장실이 어디예요?",
            "uz": "Hojatxona qayerda?"
          },
          {
            "de": "여기가 우리 학교예요.",
            "uz": "Bu yer bizning maktabimiz."
          },
          {
            "de": "저것은 제 컴퓨터예요.",
            "uz": "Anavi mening kompyuterim."
          }
        ]
      },
      "exercises": [
        {
          "id": "ko_ex3_1",
          "type": "multiple-choice",
          "question": "\"Bu nima?\" koreyscha qanday so‘raladi?",
          "options": [
            "이게 뭐예요?",
            "어디예요?",
            "누구예요?",
            "얼마예요?"
          ],
          "correctIndex": 0,
          "explanation": "\"이게 뭐예요?\" — Bu nima?"
        },
        {
          "id": "ko_ex3_2",
          "type": "fill-blank",
          "question": "화장실이 ______ 예요? (Hojatxona qayerda?)",
          "placeholder": "어디 yoki 여기...",
          "correctAnswer": "어디",
          "hint": "어디 (qayer)"
        }
      ],
      "speakingPrompt": {
        "textDe": "실례합니다, 여기가 어디예요?",
        "textUz": "Kechirasiz, bu yer qayer? [Sillyehamnida, yeogiga eodiyeyo?]",
        "tip": "실례합니다 [sillyehamnida] — uzr/kechirasiz."
      },
      "kulturtip": {
        "title": "🇰🇷 O‘ng qo‘l odobi",
        "text": "Koreyada buyum, karta yoki pul berganda va olganda ikki qo‘llab yoki o‘ng qo‘l tirsagini chap qo‘l bilan ushlab uzatiladi. Bu kishiga hurmat ifodasidir."
      },
      "listening": {
        "title": "🎧 듣기 (Tinglab tushunish)",
        "audioText": "저기요, 지하철역이 어디예요? — 저기 있어요.",
        "question": "U nimani so‘radi?",
        "options": [
          "Restoran qayerdaligini",
          "Metro bekati qayerdaligini",
          "Do‘kon qayerdaligini"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ko_lesson_4",
      "lang": "ko",
      "level": "A1",
      "number": 4,
      "title": "Kundalik fe’llar va -아요 / -어요 tuslanishi",
      "goal": "Koreys tilining eng mashhur hozirgi zamon hurmat fe’l tuslanishi: -아요 / -어요.",
      "theory": {
        "introUz": "Koreys tilida fe’llar lug‘atda -다 bilan tugaydi (가다, 오다, 먹다). Gapda -아요 yoki -어요 qo‘shiladi:",
        "rules": [
          {
            "pattern": "Asosda ㅏ yoki ㅗ bo‘lsa",
            "pronunciation": "-아요 qo‘shiladi",
            "exampleDe": "가다 → 가요 (boraman), 오다 → 와요 (kelaman)",
            "exampleUz": "boraman, kelaman"
          },
          {
            "pattern": "Boshqa unlilar bo‘lsa",
            "pronunciation": "-어요 qo‘shiladi",
            "exampleDe": "먹다 → 먹어요 (yeyman), 마시다 → 마셔요 (ichaman)",
            "exampleUz": "yeyman, ichaman"
          },
          {
            "pattern": "하다 (bajarmoq) fe’li",
            "pronunciation": "해요 ga aylanadi",
            "exampleDe": "공부하다 → 공부해요 (dars qilaman), 일하다 → 일해요 (ishlayman)",
            "exampleUz": "o‘qiyman, ishlayman"
          }
        ],
        "table": [
          {
            "de": "저는 지금 학교에 가요.",
            "uz": "Men hozir maktabga boryapman."
          },
          {
            "de": "밥을 맛있게 먹어요.",
            "uz": "Ovqat yeyapman."
          },
          {
            "de": "커피를 마셔요.",
            "uz": "Qahva ichyapman."
          },
          {
            "de": "한국어를 열심히 공부해요.",
            "uz": "Koreys tilini tirishqoqlik bilan o‘rganyapman."
          }
        ]
      },
      "exercises": [
        {
          "id": "ko_ex4_1",
          "type": "multiple-choice",
          "question": "\"먹다\" (yemoq) fe’li -어요 shaklida qanday bo‘ladi?",
          "options": [
            "먹어요",
            "먹아요",
            "먹해요",
            "먹습니다요"
          ],
          "correctIndex": 0,
          "explanation": "먹 fe’l asosida ㅓ bo‘lgani uchun -어요 qo‘shilib \"먹어요\" bo‘ladi."
        },
        {
          "id": "ko_ex4_2",
          "type": "fill-blank",
          "question": "저는 매일 한국어를 공부______ (공부하다 -> hozirgi zamon)",
          "placeholder": "해요 yoki 가요...",
          "correctAnswer": "해요",
          "hint": "하다 -> 해요"
        }
      ],
      "speakingPrompt": {
        "textDe": "저는 매일 아침 따뜻한 커피를 마셔요.",
        "textUz": "Men har tong issiq qahva ichaman.",
        "tip": "따뜻한 [ttatteutan] — issiq."
      },
      "kulturtip": {
        "title": "🇰🇷 식사하셨어요? (Ovqatlandingizmi?)",
        "text": "Koreyslar \"Ahvolingiz qanday?\" o‘rniga ko‘pincha \"식사하셨어요?\" (Ovqatlandingizmi?) deb so‘rashadi. Bu insonning salomatligi va farovonligiga g‘amxo‘rlik ifodasidir."
      },
      "listening": {
        "title": "🎧 듣기 (Tinglab tushunish)",
        "audioText": "오늘 뭐 해요? — 친구를 만나요 그리고 영화를 봐요.",
        "question": "U bugun nima qilmoqchi?",
        "options": [
          "Uyda uxlamoqchi",
          "Do‘sti bilan uchrashib film ko‘rmoqchi",
          "Kasalxonaga bormoqchi"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ko_lesson_5",
      "lang": "ko",
      "level": "A1",
      "number": 5,
      "title": "Raqamlar (Sino vs Native), Narx va ...주세요",
      "goal": "Koreys tilidagi 2 xil raqamlar tizimi, narx so‘rash va buyurtma berish.",
      "theory": {
        "introUz": "Koreys tilida 2 xil raqamlar ishlatiladi: Sino-koreys (pul, sana, daqiqa) va Asl koreys (soat, dona sanash):",
        "rules": [
          {
            "pattern": "Sino-koreys (pul, minut)",
            "pronunciation": "일 (1), 이 (2), 삼 (3), 사 (4), 오 (5), 십 (10), 백 (100), 천 (1000), 만 (10,000)",
            "exampleDe": "천 원 [cheon won] = 1000 von",
            "exampleUz": "1000 von, 5 daqiqa..."
          },
          {
            "pattern": "Asl koreys (dona, soat)",
            "pronunciation": "하나 (1), 둘 (2), 셋 (3), 넷 (4), 다섯 (5)",
            "exampleDe": "한 개 (bitta), 두 개 (ikkita)",
            "exampleUz": "1 dona, 2 dona..."
          },
          {
            "pattern": "...주세요 [juseyo]",
            "pronunciation": "...bering (iltimos)",
            "exampleDe": "물 좀 주세요 (suv bering), 커피 두 잔 주세요",
            "exampleUz": "suv bering, 2 ta kofe bering"
          }
        ],
        "table": [
          {
            "de": "이거 얼마예요?",
            "uz": "Bu qancha turadi?"
          },
          {
            "de": "오천 원이에요.",
            "uz": "5000 von."
          },
          {
            "de": "사과 세 개 주세요.",
            "uz": "3 dona olma bering."
          },
          {
            "de": "카드 돼요?",
            "uz": "Karta o‘tadimi?"
          }
        ]
      },
      "exercises": [
        {
          "id": "ko_ex5_1",
          "type": "multiple-choice",
          "question": "\"Bu qancha turadi?\" koreyscha qanday aytiladi?",
          "options": [
            "이거 얼마예요?",
            "이게 뭐예요?",
            "어디 가요?",
            "누구예요?"
          ],
          "correctIndex": 0,
          "explanation": "\"얼마예요?\" — narx so‘rash ifodasi."
        },
        {
          "id": "ko_ex5_2",
          "type": "fill-blank",
          "question": "아메리카노 한 잔 ______ (iltimos, bir chashka amerikano bering).",
          "placeholder": "주세요...",
          "correctAnswer": "주세요",
          "hint": "주세요"
        }
      ],
      "speakingPrompt": {
        "textDe": "사장님, 물하고 밥 좀 더 주세요.",
        "textUz": "Xo‘jayin, suv va ozgina guruch keltirib bering, iltimos.",
        "tip": "사장님 [sajangnim] — korxona rahbari yoki oshxona egasiga murojaat."
      },
      "kulturtip": {
        "title": "🇰🇷 Von (Koreya milliy valyutasi)",
        "text": "Janubiy Koreyada valyuta \"Won\" (원) deb ataladi. Mayda tangalar kam ishlatiladi, deyarli hamma joyda (hatto taksida ham) plastik karta orqali to‘lanadi."
      },
      "listening": {
        "title": "🎧 듣기 (Tinglab tushunish)",
        "audioText": "사과 한 개에 천 원이에요. 세 개 드릴까요?",
        "question": "Olma donasi qancha ekan va u nechta taklif qildi?",
        "options": [
          "100 von, 1 ta",
          "1000 von, 3 ta",
          "5000 von, 10 ta"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ko_lesson_6",
      "lang": "ko",
      "level": "A2",
      "number": 6,
      "title": "O‘tgan zamon: -았/었어요 va Joy qo‘shimchasi -에서",
      "goal": "O‘tgan harakatlarni ifodalash (-았/었어요) va ish-harakat bajariladigan joy (-에서).",
      "theory": {
        "introUz": "Koreys tilida o‘tgan zamon fe’l asosiga qarab -았어요 yoki -었어요 qo‘shish orqali yasaladi:",
        "rules": [
          {
            "pattern": "Asosda ㅏ yoki ㅗ bo‘lsa",
            "pronunciation": "-았어요 qo‘shiladi",
            "exampleDe": "가다 → 갔어요 (bordim), 오다 → 왔어요 (keldim)",
            "exampleUz": "bordim, keldim"
          },
          {
            "pattern": "Boshqa unlilar bo‘lsa",
            "pronunciation": "-었어요 qo‘shiladi",
            "exampleDe": "먹다 → 먹었어요 (yedim), 마시다 → 마셨어요 (ichdim)",
            "exampleUz": "yedim, ichdim"
          },
          {
            "pattern": "-에서 (joyda)",
            "pronunciation": "harakat sodir bo‘ladigan joy",
            "exampleDe": "도서관에서 공부했어요 (kutubxonada o‘qidim)",
            "exampleUz": "kutubxonada, uyda, ishda"
          }
        ],
        "table": [
          {
            "de": "어제 뭐 했어요?",
            "uz": "Kecha nima qildingiz?"
          },
          {
            "de": "집에서 쉬었어요.",
            "uz": "Uyda dam oldim."
          },
          {
            "de": "식당에서 친구를 만났어요.",
            "uz": "Oshxonada do‘stim bilan uchrashdim."
          },
          {
            "de": "한국 드라마를 봤어요.",
            "uz": "Koreys dramasini ko‘rdim."
          }
        ]
      },
      "exercises": [
        {
          "id": "ko_ex6_1",
          "type": "multiple-choice",
          "question": "\"Kecha kitob o‘qidim\" (읽다 fe’li) o‘tgan zamonda qanday bo‘ladi?",
          "options": [
            "읽었어요",
            "읽았어요",
            "읽해요",
            "읽겠어요"
          ],
          "correctIndex": 0,
          "explanation": "\"읽다\" fe’l asosida ㅣ (boshqa unli) bo‘lgani uchun -었어요 qo‘shiladi: 읽었어요."
        },
        {
          "id": "ko_ex6_2",
          "type": "fill-blank",
          "question": "저는 어제 한국 식당______ 불고기를 먹었어요. (restoranda - joy qo‘shimchasi)",
          "placeholder": "에서 yoki 에...",
          "correctAnswer": "에서",
          "hint": "에서"
        }
      ],
      "speakingPrompt": {
        "textDe": "어제 한국인 친구하고 같이 한국 음식을 먹었어요.",
        "textUz": "Kecha koreys do‘stim bilan birga koreys taomini yedim.",
        "tip": "음식을 [eumsigeul] ravon ayting."
      },
      "kulturtip": {
        "title": "🇰🇷 Koreys taomlari (한식)",
        "text": "Koreys taomlarining ajralmas qismi — Kimchi (김치). Koreyada deyarli har bir uyda kimchi saqlash uchun maxsus maxsus muzlatkichlar bo‘ladi."
      },
      "listening": {
        "title": "🎧 듣기 (Tinglab tushunish)",
        "audioText": "주말에 뭐 했어요? — 백화점에서 옷을 샀어요.",
        "question": "U dam olish kunida nima qildi?",
        "options": [
          "Kinoga bordi",
          "Universamda kiyim sotib oldi",
          "Uyda uxladi"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ko_lesson_7",
      "lang": "ko",
      "level": "A2",
      "number": 7,
      "title": "Iltimos va taklif: -(으)세요 va -(으)ㄹ까요?",
      "goal": "Xushmuomala iltimos qilish (-(으)세요) va birgalikda biror ish qilishni taklif etish (-(으)ㄹ까요?).",
      "theory": {
        "introUz": "Kundalik muloqotda buyruq berish o‘rniga hurmat bilan iltimos qilish va taklif bildirish qoidalari:",
        "rules": [
          {
            "pattern": "-(으)세요 (bajar-ing)",
            "pronunciation": "hurmatli iltimos",
            "exampleDe": "앉으세요 (o‘tiring), 기다리세요 (kuting)",
            "exampleUz": "o‘tiring, kuting, kiring"
          },
          {
            "pattern": "-(으)ㄹ까요? (qilaylikmi?)",
            "pronunciation": "birgalikda taklif",
            "exampleDe": "같이 밥 먹을까요? (birga ovqatlanaylikmi?)",
            "exampleUz": "ovqatlanaylikmi?, boraylikmi?"
          },
          {
            "pattern": "좋아요 (yaxshi / mayli)",
            "pronunciation": "taklifga ijobiy javob",
            "exampleDe": "네, 좋아요! (Ha, ajoyib!)",
            "exampleUz": "ha, mayli"
          }
        ],
        "table": [
          {
            "de": "여기에 이름을 쓰세요.",
            "uz": "Bu yerga ismingizni yozing."
          },
          {
            "de": "조금만 기다려 주세요.",
            "uz": "Ozgina kutib turing, iltimos."
          },
          {
            "de": "내일 몇 시에 만날까요?",
            "uz": "Ertaga soat nechada uchrashamiz?"
          },
          {
            "de": "커피 한 잔 마실까요?",
            "uz": "Bir piyola kofe ichamizmi?"
          }
        ]
      },
      "exercises": [
        {
          "id": "ko_ex7_1",
          "type": "multiple-choice",
          "question": "\"Iltimos, bu yerga o‘tiring\" (앉다 fe’li / undoshga tugaydi):",
          "options": [
            "앉으세요",
            "앉세요",
            "앉아요요",
            "앉었어요"
          ],
          "correctIndex": 0,
          "explanation": "\"앉다\" undosh bilan tugagani uchun \"-으세요\" qo‘shilib \"앉으세요\" bo‘ladi."
        },
        {
          "id": "ko_ex7_2",
          "type": "fill-blank",
          "question": "우리 내일 영화를 ______? (ko‘ramizmi? - 보다 fe’li)",
          "placeholder": "볼까요 yoki 봐요...",
          "correctAnswer": "볼까요",
          "hint": "볼까요"
        }
      ],
      "speakingPrompt": {
        "textDe": "시간이 있으면 오늘 저녁에 같이 영화 볼까요?",
        "textUz": "Vaqtingiz bo‘lsa, bugun kechqurun birga film ko‘ramizmi?",
        "tip": "저녁에 [jeonyeoge] ravon o‘qiladi."
      },
      "kulturtip": {
        "title": "🇰🇷 Dutch Pay (Nppang - N빵)",
        "text": "Zamonaviy Janubiy Koreya yoshlari orasida restoranda hisobni teng bo‘lib to‘lash odati keng tarqalgan (buni \"Datchi pei\" yoki \"N-ppang\" deyishadi)."
      },
      "listening": {
        "title": "🎧 듣기 (Tinglab tushunish)",
        "audioText": "오늘 날씨가 너무 좋아요. 공원에 갈까요? — 네, 좋아요!",
        "question": "Ular qayerga borishga kelishib olishdi?",
        "options": [
          "Kutubxonaga",
          "Bog‘ga (공원)",
          "Kasalxonaga"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ko_lesson_8",
      "lang": "ko",
      "level": "B1",
      "number": 8,
      "title": "Bog‘lovchilar: -지만 (ammo) va Sabab: -(으)니까 (chunki)",
      "goal": "Murakkab gaplar tuzish, qarama-qarshilik (-지만) va sabab-natija (-(으)니까) grammatikasi.",
      "theory": {
        "introUz": "TOPIK va erkin muloqot uchun zarur bo‘lgan eng mashhur bog‘lovchi qo‘shimchalar:",
        "rules": [
          {
            "pattern": "-지만 (lekin / ammo)",
            "pronunciation": "qarama-qarshi fikr",
            "exampleDe": "한국어는 어렵지만 재미있어요.",
            "exampleUz": "Koreys tili qiyin, lekin juda qiziqarli."
          },
          {
            "pattern": "-(으)니까 (chunki / ...sababli)",
            "pronunciation": "sabab va taklif",
            "exampleDe": "비가 오니까 우산을 쓰세요.",
            "exampleUz": "Yomg‘ir yog‘yapti, shuning uchun soyabondan foydalaning."
          },
          {
            "pattern": "-(으)면 (agar)",
            "pronunciation": "shart mayli",
            "exampleDe": "시간이 있으면 연락하세요.",
            "exampleUz": "Vaqtingiz bo‘lsa, aloqaga chiqing."
          }
        ],
        "table": [
          {
            "de": "바쁘지만 갈게요.",
            "uz": "Bandman, lekin boraman."
          },
          {
            "de": "날씨가 추우니까 따뜻하게 입으세요.",
            "uz": "Havo sovuq, shuning uchun issiq kiyining."
          },
          {
            "de": "모르면 질문하세요.",
            "uz": "Bilmasangiz, savol bering."
          },
          {
            "de": "한국에서 일하고 싶어요.",
            "uz": "Koreyada ishlamoqchiman."
          }
        ]
      },
      "exercises": [
        {
          "id": "ko_ex8_1",
          "type": "multiple-choice",
          "question": "\"Bu taom achchiq, lekin mazali\" koreyscha qanday bo‘ladi?",
          "options": [
            "맵지만 맛있어요",
            "매우니까 맛있어요",
            "매우면 맛있어요",
            "맵고 맛있어요"
          ],
          "correctIndex": 0,
          "explanation": "\"맵다\" (achchiq) + \"-지만\" (lekin) = 맵지만 맛있어요."
        },
        {
          "id": "ko_ex8_2",
          "type": "fill-blank",
          "question": "지금 바쁘______ 나중에 전화해 주세요. (chunki / sababli)",
          "placeholder": "니까...",
          "correctAnswer": "니까",
          "hint": "니까"
        }
      ],
      "speakingPrompt": {
        "textDe": "한국어 공부는 어렵지만 매일 열심히 하면 잘할 수 있어요.",
        "textUz": "Koreys tilini o‘rganish qiyin bo‘lishi mumkin, ammo har kuni astoydil harakat qilsangiz, albatta uddalaysiz.",
        "tip": "잘할 수 있어요 [jal-hal su isseoyo] — uddalay olasiz."
      },
      "kulturtip": {
        "title": "🇰🇷 EPS-TOPIK & GKS Grantlari",
        "text": "Janubiy Koreyada qonuniy ishlash (E-9 vizasi) uchun EPS-TOPIK imtihonidan o‘tish kerak. Universitetlarda 100% bepul o‘qish uchun esa GKS (Global Korea Scholarship) davlat granti mavjud."
      },
      "listening": {
        "title": "🎧 듣기 (Tinglab tushunish)",
        "audioText": "한국에서 대학교에 가고 싶어서 매일 네 시간씩 한국어를 열심히 공부하고 있어요.",
        "question": "U nima maqsadda har kuni 4 soatdan koreys tilini o‘rganyapti?",
        "options": [
          "Sayohat qilish uchun",
          "Koreyada universitetga kirish uchun",
          "Kino ko‘rish uchun"
        ],
        "correctIndex": 1
      }
    },
    {
      "id": "ko_lesson_9",
      "lang": "ko",
      "level": "A2",
      "number": 9,
      "title": "호텔 예약과 체크인 (Mehmonxona va xona band qilish)",
      "goal": "Mehmonxonada xona bron qilish, sharoitlar va xizmatlarni koreyscha so‘rash.",
      "theory": {
        "introUz": "Koreyada mehmonxonada (호텔) xona band qilish, kalit olish va nonushta (조식) haqida muloyim muloqot qilish iboralari.",
        "rules": [
          {
            "pattern": "방을 예약하고 싶어요. (xona band qilmoqchiman)",
            "pronunciation": "Bangeul yeyakhago sipeoyo",
            "exampleDe": "2박 3일 동안 싱글룸을 예약하고 싶어요.",
            "exampleUz": "2 kecha 3 kunga bir kishilik xona band qilmoqchiman."
          },
          {
            "pattern": "조식이 포함되어 있나요? (nonushta kirganmi?)",
            "pronunciation": "Josigi pohamdoe-eo innayo?",
            "exampleDe": "방 가격에 아침 조식이 포함되어 있나요?",
            "exampleUz": "Xona narxiga ertalabki nonushta kiritilganmi?"
          },
          {
            "pattern": "와이파이 비밀번호가 뭐예요? (Wi-Fi paroli)",
            "pronunciation": "Waipai bimilbeonhoga mwoyeyo?",
            "exampleDe": "객실 와이파이 비밀번호를 알려주세요.",
            "exampleUz": "Xonadagi Wi-Fi parolini aytib yuboring."
          },
          {
            "pattern": "체크아웃 시간은 언제예요? (chiqish vaqti)",
            "pronunciation": "Chekeu-aut siganeun eonjeyeyo?",
            "exampleDe": "체크아웃은 오전 11시까지 하시면 됩니다.",
            "exampleUz": "Xonadan chiqish ertalab soat 11 gacha."
          }
        ],
        "table": [
          {
            "de": "싱글룸 / 더블룸",
            "uz": "bir kishilik / ikki kishilik xona"
          },
          {
            "de": "카드 키 / 예약",
            "uz": "karta kalit / bron"
          },
          {
            "de": "에어컨이 작동하지 않아요.",
            "uz": "Konditsioner ishlamayapti."
          },
          {
            "de": "택시 좀 불러주시겠어요?",
            "uz": "Taksi chaqirib bera olasizmi?"
          }
        ]
      },
      "kulturtip": {
        "title": "Koreyada mehmonxona turlari (호텔 vs 모텔 vs 펜션)",
        "text": "Koreyada xalqaro mehmonxonalardan tashqari, tabiat qo‘ynida do‘stlar bilan dam olish uchun \"Penshon\" (펜션) va milliy uslubdagi an’anaviy uylar \"Hanok\" (한옥) juda mashhur."
      },
      "listening": {
        "title": "Listening: 호텔 안내데스크",
        "audioText": "안녕하세요! 알리모비치 이름으로 더블룸 예약하셨네요. 502호 카드 키입니다.",
        "question": "Mehmon qaysi xonaga joylashdi?",
        "options": [
          "101-xona",
          "502-xona",
          "305-xona",
          "801-xona"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "안녕하세요! 오늘 2박 3일 예약한 손님인데요, 체크인 부탁드립니다.",
        "textUz": "Assalomu alaykum! Bugun 2 kecha 3 kunga xona bron qilgan mehmonman, ro‘yxatdan o‘tkazib bering, iltimos.",
        "tip": "체크인 부탁드립니다 iborasini muloyim tabassum bilan ayting."
      },
      "exercises": [
        {
          "question": "\"Nonushta kiritilganmi?\" koreyscha qaysi biri?",
          "options": [
            "조식이 포함되어 있나요?",
            "밥 먹었어요?",
            "어디 가요?",
            "물 주세요."
          ],
          "correctIndex": 0,
          "explanation": "조식 (nonushta) + 포함 (o‘z ichiga olmoq) = 조식이 포함되어 있나요?"
        },
        {
          "question": "\"Xona band qilmoqchiman\" qanday aytiladi?",
          "options": [
            "집에 가고 싶어요",
            "방을 예약하고 싶어요",
            "잠자고 싶어요",
            "공부하고 싶어요"
          ],
          "correctIndex": 1,
          "explanation": "방 (xona) + 예약 (bron) + -고 싶어요 (xohlayman)."
        },
        {
          "question": "\"Wi-Fi paroli nima?\" koreyscha:",
          "options": [
            "와이파이 비밀번호가 뭐예요?",
            "전화번호가 뭐예요?",
            "이름이 뭐예요?",
            "얼마예요?"
          ],
          "correctIndex": 0,
          "explanation": "비밀번호 (bimilbeonho) — parol / maxfiy kod."
        }
      ]
    },
    {
      "id": "ko_lesson_10",
      "lang": "ko",
      "level": "A2",
      "number": 10,
      "title": "Harakat maqsadi va Transport: -(으)러 가다 va -(으)로 (Yo‘l va Maqsad)",
      "goal": "Biror maqsad bilan bormoq/kelmoq hamda transport vositalari bilan harakatlanishni ifodalash.",
      "theory": {
        "introUz": "Koreys tilida biror ishni \"qilish uchun bormoq\" qo‘shimchasi -(으)러 가다 va transport bilan (metroda, avtobusda) yurish vosita qo‘shimchasi -(으)로 orqali yasaladi.",
        "rules": [
          {
            "pattern": "Undoshga tugasa: -으러 가다",
            "pronunciation": "-eureo gada",
            "exampleDe": "식당에 밥을 먹으러 가요.",
            "exampleUz": "Oshxonaga ovqat yegani (yeyish uchun) boryapman."
          },
          {
            "pattern": "Unliga tugasa: -러 가다",
            "pronunciation": "-reo gada",
            "exampleDe": "한국어를 공부하러 도서관에 가요.",
            "exampleUz": "Koreys tilini o‘rgangani kutubxonaga boryapman."
          },
          {
            "pattern": "Transport vositasi: -(으)로 (bilan)",
            "pronunciation": "-ro / -euro",
            "exampleDe": "회사에 지하철로 가요.",
            "exampleUz": "Ishxonaga metro bilan (metroda) boraman."
          },
          {
            "pattern": "Harakatlanish vaqti: ...걸려요 (ketadi)",
            "pronunciation": "geollyeoyo",
            "exampleDe": "집에서 학교까지 30분 걸려요.",
            "exampleUz": "Uydan maktabgacha 30 daqiqa vaqt ketadi."
          }
        ],
        "table": [
          {
            "de": "버스로 / 지하철로 / 비행기로",
            "uz": "avtobusda / metroda / samolyotda"
          },
          {
            "de": "친구를 만나러 가요.",
            "uz": "Do‘stim bilan uchrashgani ketyapman."
          },
          {
            "de": "얼마나 걸려요?",
            "uz": "Qancha vaqt ketadi?"
          },
          {
            "de": "조심해서 가세요!",
            "uz": "Ehtiyot bo‘lib boring! (Xayrlashuv)"
          }
        ]
      },
      "kulturtip": {
        "title": "Koreyada transport kartasi: T-Money (티머니)",
        "text": "Koreyada metro va avtobusga minishda T-Money kartasidan foydalaniladi. Metrodan avtobusga 30 daqiqa ichida o‘tsangiz, transfer uchun ortiqcha pul to‘lamaysiz (bepul yoki arzon o‘tish tizimi)."
      },
      "listening": {
        "title": "Listening: Harakat maqsadi",
        "audioText": "주말에 친구하고 같이 한국 영화를 보러 영화관에 갈 거예요.",
        "question": "Ular dam olish kunida kinoteatrga nima uchun boradilar?",
        "options": [
          "Ovqat yeyish uchun",
          "Koreys filmini ko‘rish uchun",
          "Ishlash uchun",
          "Uxlash uchun"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "저는 매일 아침 대학교에 지하철로 가요. 약 20분 걸려요.",
        "textUz": "Men har kuni ertalab universitetga metroda boraman. Taxminan 20 daqiqa ketadi.",
        "tip": "지하철로 [jihacheollo] ravon qo‘shilib o‘qiladi."
      },
      "exercises": [
        {
          "question": "\"Kutubxonaga kitob o‘qigani boryapman\" koreyscha:",
          "options": [
            "도서관에 책을 읽으러 가요.",
            "도서관에 자러 가요.",
            "집에 가요.",
            "밥을 먹어요."
          ],
          "correctIndex": 0,
          "explanation": "읽다 (o‘qimoq) undoshga tugagani uchun -으러 가요 qo‘shiladi."
        },
        {
          "question": "\"Metroda boraman\" qo‘shimchasi qaysi?",
          "options": [
            "지하철에",
            "지하철로",
            "지하철을",
            "지하철은"
          ],
          "correctIndex": 1,
          "explanation": "-(으)로 — vosita kelishigi: metro orqali / metro bilan."
        },
        {
          "question": "\"얼마나 걸려요?\" savolining ma’nosi nima?",
          "options": [
            "Necha pul?",
            "Qayerda?",
            "Qancha vaqt ketadi?",
            "Bu kim?"
          ],
          "correctIndex": 2,
          "explanation": "Vaqt sarflanishini so‘rashda ishlatiladi."
        }
      ]
    },
    {
      "id": "ko_lesson_11",
      "lang": "ko",
      "level": "B1",
      "number": 11,
      "title": "병원에서 증상 말하기 (Shifoxonada shikoyat va salomatlik)",
      "goal": "Shifokorga kasallik belgilari, og‘riqlar va holatni koreys tilida aniq tushuntirish.",
      "theory": {
        "introUz": "Koreyada poliklinika (병원) va dorixonada (약국) og‘riqlar (아파요), shamollash (감기) va dori ichish bo‘yicha zarur iboralar.",
        "rules": [
          {
            "pattern": "...이/가 아파요 (og‘riyapti)",
            "pronunciation": "-i/ga apayo",
            "exampleDe": "머리가 너무 아프고 열이 나요.",
            "exampleUz": "Boshim juda qattiq og‘riyapti va isitmam bor."
          },
          {
            "pattern": "감기에 걸렸어요 (shamollab qoldim)",
            "pronunciation": "gamgie geollyeosseoyo",
            "exampleDe": "어제부터 심한 감기에 걸렸어요.",
            "exampleUz": "Kechadan beri qattiq shamollab qoldim."
          },
          {
            "pattern": "약 / 알약 (dori / tabletka)",
            "pronunciation": "yak / allyak",
            "exampleDe": "이 약을 식후 30분에 드세요.",
            "exampleUz": "Bu dorini ovqatdan 30 daqiqa keyin iching."
          },
          {
            "pattern": "푹 쉬세요 (yaxshilab dam oling)",
            "pronunciation": "puk swiseyo",
            "exampleDe": "따뜻한 물을 많이 마시고 푹 쉬세요.",
            "exampleUz": "Ko‘p iliq suv iching va yaxshilab dam oling."
          }
        ],
        "table": [
          {
            "de": "배가 아파요 / 목이 아파요",
            "uz": "qornim og‘riyapti / tomog‘im og‘riyapti"
          },
          {
            "de": "기침을 해요 / 콧물이 나요",
            "uz": "yo‘talyapman / burnim oqyapti"
          },
          {
            "de": "처방전 / 약국",
            "uz": "retsept / dorixona"
          },
          {
            "de": "빨리 나으세요!",
            "uz": "Tezroq sog‘ayib keting!"
          }
        ]
      },
      "kulturtip": {
        "title": "Koreyada tibbiy sug‘urta (국민건강보험)",
        "text": "Koreyada chet ellik talaba yoki ishchilar davlat tibbiy sug‘urtasiga ulanadi. Shu sababli shifokor ko‘rigi va dorilar narxi juda arzon bo‘ladi (70-80% xarajatni sug‘urta qoplaydi)."
      },
      "listening": {
        "title": "Listening: Shifokor tavsiyasi",
        "audioText": "하루 세 번 밥 먹고 30분 후에 이 약을 드시고 오늘은 무리하지 마세요.",
        "question": "Shifokor dorini qachon ichishni buyurdi?",
        "options": [
          "Ovqatdan oldin",
          "Kuniga uch marta ovqatdan 30 daqiqa keyin",
          "Faqat kechasi",
          "Haftada bir marta"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "의사 선생님, 목이 너무 아프고 기침이 계속 나와서 왔어요.",
        "textUz": "Doktor, tomog‘im juda og‘riyapti va to‘xtovsiz yo‘talyapman, shuning uchun keldim.",
        "tip": "의사 선생님 [uisa seonsaengnim] — Koreyada shifokorga hurmatli murojaat."
      },
      "exercises": [
        {
          "question": "\"Mening boshim og‘riyapti\" koreyscha qaysi biri?",
          "options": [
            "머리가 아파요.",
            "배가 고파요.",
            "눈이 예뻐요.",
            "손이 커요."
          ],
          "correctIndex": 0,
          "explanation": "머리 (bosh) + 아파요 (og‘riyapti) = 머리가 아파요."
        },
        {
          "question": "\"빨리 나으세요!\" iborasining ma’nosi nima?",
          "options": [
            "Xayrli tong!",
            "Tezroq sog‘ayib keting!",
            "Yoqimli ishtaha!",
            "Tabriklayman!"
          ],
          "correctIndex": 1,
          "explanation": "Kasal bo‘lgan kishiga sog‘lik tilash iborasi."
        },
        {
          "question": "\"이 약을 식후 30분에 드세요\" gapi nimani anglatadi?",
          "options": [
            "Bu dorini ovqatdan 30 daqiqa keyin iching.",
            "Dorini tashlab yuboring.",
            "Dorini ovqatdan oldin iching.",
            "Suv ichmang."
          ],
          "correctIndex": 0,
          "explanation": "식후 (ovqatdan keyin) + 30분 (30 daqiqa) + 드세요 (iste’mol qiling)."
        }
      ]
    },
    {
      "id": "ko_lesson_12",
      "lang": "ko",
      "level": "B1",
      "number": 12,
      "title": "Tajriba va Qobiliyat: -(으)ㄴ 적이 있다 va -(으)ㄹ 수 있다",
      "goal": "O‘tmishdagi hayotiy tajribalar va imkoniyat / qobiliyatlarni erkin ifodalash.",
      "theory": {
        "introUz": "Koreys tilida \"...ganman (tajribam bor)\" ma’nosi -(으)ㄴ 적이 있다/없다, \"...qila olaman (qobiliyatim bor)\" esa -(으)ㄹ 수 있다/없다 orqali yasaladi.",
        "rules": [
          {
            "pattern": "-(으)ㄴ 적이 있다 (tajriba bor)",
            "pronunciation": "-eun jeogi itda",
            "exampleDe": "한국에 가 본 적이 있어요.",
            "exampleUz": "Men Koreyaga borib ko‘rganman (tajribam bor)."
          },
          {
            "pattern": "-(으)ㄴ 적이 없다 (tajriba yo‘q)",
            "pronunciation": "-eun jeogi eopda",
            "exampleDe": "김치를 먹어 본 적이 없어요.",
            "exampleUz": "Men hech qachon kimchi yeb ko‘rmaganman."
          },
          {
            "pattern": "-(으)ㄹ 수 있다 (qila olmoq)",
            "pronunciation": "-eul su itda",
            "exampleDe": "저는 한국어로 유창하게 말할 수 있어요.",
            "exampleUz": "Men koreys tilida ravon gapira olaman."
          },
          {
            "pattern": "-(으)ㄹ 수 없다 (qila olmaslik)",
            "pronunciation": "-eul su eopda",
            "exampleDe": "오늘은 바빠서 갈 수 없어요.",
            "exampleUz": "Bugun band bo‘lganim uchun bora olmayman."
          }
        ],
        "table": [
          {
            "de": "태권도를 배운 적이 있어요.",
            "uz": "Taekvondoni o‘rganganman."
          },
          {
            "de": "운전할 수 있어요?",
            "uz": "Mashina hayday olasizmi?"
          },
          {
            "de": "매운 음식을 잘 먹을 수 있어요.",
            "uz": "Achchiq ovqatlarni yaxshi yey olaman."
          },
          {
            "de": "걱정하지 마세요, 할 수 있어요!",
            "uz": "Xavotir olmang, eplay olasiz!"
          }
        ]
      },
      "kulturtip": {
        "title": "Koreys tilida kamtarlik qoidasi",
        "text": "Koreyslar biror narsani juda yaxshi bilsa ham \"Juda zo‘r bilaman\" deb maqtanmaydi. Ko‘pincha \"Chogum hal su isseoyo\" (Ozgina qila olaman) deb kamtarlik bilan javob berishadi."
      },
      "listening": {
        "title": "Listening: Hayotiy tajriba",
        "audioText": "저는 한국 전통 음악을 들어 본 적이 있는데 정말 감동적이었어요.",
        "question": "So‘zlovchi nima qilib ko‘rgan va qanday taassurot olgan?",
        "options": [
          "Ovqat pishirgan va yoqmagan",
          "Koreys milliy musiqasini eshitib ko‘rgan va juda ta’sirlangan",
          "Film ko‘rgan va zerikkan",
          "Uxlab qolgan"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "열심히 연습하면 누구나 한국어로 자연스럽게 대화할 수 있어요.",
        "textUz": "Astoydil mashq qilsa, har kim koreys tilida tabiiy suhbatlasha oladi.",
        "tip": "자연스럽게 [jayeonseureopge] — tabiiy ravishda."
      },
      "exercises": [
        {
          "question": "\"Men Koreyaga borganman (tajribam bor)\" koreyscha:",
          "options": [
            "한국에 가 본 적이 있어요.",
            "한국에 안 가요.",
            "한국에 가고 싶어요.",
            "한국이 좋아요."
          ],
          "correctIndex": 0,
          "explanation": "-(으)ㄴ 적이 있다 — hayotiy tajribani bildiradi."
        },
        {
          "question": "\"Koreys tilida gapira olasizmi?\" qaysi biri?",
          "options": [
            "한국말을 알아요?",
            "한국어로 말할 수 있어요?",
            "한국 사람이에요?",
            "한국에 살아요?"
          ],
          "correctIndex": 1,
          "explanation": "-(으)ㄹ 수 있어요? — qila olasizmi? (imkoniyat)."
        },
        {
          "question": "\"Bugun kela olmayman (imkonim yo‘q)\":",
          "options": [
            "오늘 올 수 있어요.",
            "오늘 올 수 없어요.",
            "오늘 와요.",
            "오늘 가요."
          ],
          "correctIndex": 1,
          "explanation": "-(으)ㄹ 수 없어요 — inkor imkoniyat."
        }
      ]
    },
    {
      "id": "ko_lesson_13",
      "lang": "ko",
      "level": "B1",
      "number": 13,
      "title": "Shart mayli va Taklif: -(으)면 va -(으)ㄹ래요? (Agar va Taklif)",
      "goal": "Shartli gaplar tuzish va suhbatdoshni birgalikda biror ish qilishga taklif etish.",
      "theory": {
        "introUz": "Koreys tilida \"...sa / agar ...sa\" shart mayli -(으)면 qo‘shimchasi bilan, do‘stona va xushmuomala taklif esa -(으)ㄹ래요? orqali ifodalanadi.",
        "rules": [
          {
            "pattern": "Undoshga tugasa: -으면 (agar ...sa)",
            "pronunciation": "-eumyeon",
            "exampleDe": "시간이 있으면 같이 커피 마실래요?",
            "exampleUz": "Vaqtingiz bo‘lsa, birga kofe ichamizmi?"
          },
          {
            "pattern": "Unliga tugasa: -면 (agar ...sa)",
            "pronunciation": "-myeon",
            "exampleDe": "한국에 가면 제주도에 꼭 가 보세요.",
            "exampleUz": "Koreyaga borsangiz, albatta Jeju oroliga boring."
          },
          {
            "pattern": "-(으)ㄹ래요? (qilaylikmi? / qilasizmi?)",
            "pronunciation": "-eullaeyo?",
            "exampleDe": "오늘 저녁에 뭐 먹을래요?",
            "exampleUz": "Bugun kechqurun nima yeymiz / yegingiz kelyapti?"
          },
          {
            "pattern": "-고 싶으면 (xohlasangiz)",
            "pronunciation": "-go sipeumyeon",
            "exampleDe": "한국어를 잘하고 싶으면 매일 연습하세요.",
            "exampleUz": "Koreys tilida yaxshi gapirmoqchi bo‘lsangiz, har kuni mashq qiling."
          }
        ],
        "table": [
          {
            "de": "날씨가 좋으면 산책해요.",
            "uz": "Havo yaxshi bo‘lsa, sayr qilamiz."
          },
          {
            "de": "같이 영화 볼래요?",
            "uz": "Birga kino ko‘ramizmi?"
          },
          {
            "de": "질문이 있으면 언제든 물어보세요.",
            "uz": "Savolingiz bo‘lsa, xohlagan payt so‘rang."
          },
          {
            "de": "좋아요, 그렇게 해요!",
            "uz": "Ajoyib, shunday qilamiz!"
          }
        ]
      },
      "kulturtip": {
        "title": "Koreyscha taklif qilish madaniyati (같이 ...ㄹ래요?)",
        "text": "Koreyslar yakka o‘zi ovqatlanishdan ko‘ra guruh bo‘lib ovqatlanishni xush ko‘radilar. Hamkasb yoki do‘stni tushlikka taklif qilishda \"Kachi bop meogeullaeyo?\" eng samimiy iboradir."
      },
      "listening": {
        "title": "Listening: Do‘stlar suhbati",
        "audioText": "이번 주 토요일에 시간 있으면 우리 같이 삼겹살 먹으러 갈래요?",
        "question": "Ular shanba kuni nima qilishni taklif qilyaptilar?",
        "options": [
          "Kutubxonaga borishni",
          "Birga samgyeopsal yeyishga borishni",
          "Uyda uxlashni",
          "Futbol o‘ynashni"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "한국어를 공부하다가 모르는 단어가 나오면 바로 사전을 찾아봐요.",
        "textUz": "Koreys tilini o‘rganayotib notanish so‘z chiqsa, darhol lug‘atdan qidirib ko‘raman.",
        "tip": "단어가 나오면 [daneoga naomyeon] — so‘z chiqib qolsa."
      },
      "exercises": [
        {
          "question": "\"Vaqtingiz bo‘lsa, birga boramizmi?\" koreyscha qaysi biri?",
          "options": [
            "시간이 있으면 같이 갈래요?",
            "시간이 없어요.",
            "혼자 갈래요.",
            "안 가요."
          ],
          "correctIndex": 0,
          "explanation": "-(으)면 (agar) + -(으)ㄹ래요? (taklif)."
        },
        {
          "question": "\"Bugun tushlikka nima yeysiz / yeylik?\" savoli:",
          "options": [
            "점심에 뭐 먹을래요?",
            "아침 먹었어요?",
            "저녁이 좋아요.",
            "밥 있어요."
          ],
          "correctIndex": 0,
          "explanation": "뭐 먹을래요? — suhbatdoshning istagini so‘rab taklif qilish."
        },
        {
          "question": "\"Havo sovuq bo‘lsa, issiq kiyining\" qaysi biri?",
          "options": [
            "날씨가 추우면 따뜻하게 입으세요.",
            "날씨가 더워요.",
            "옷이 없어요.",
            "집에 있어요."
          ],
          "correctIndex": 0,
          "explanation": "추우면 — sovuq bo‘lsa."
        }
      ]
    },
    {
      "id": "ko_lesson_14",
      "lang": "ko",
      "level": "B2",
      "number": 14,
      "title": "한국 기업 면접과 비즈니스 에티켓 (Koreys kompaniyalarida ish suhbati)",
      "goal": "Koreya kompaniyalarida ish intervyusi (면접 - myeonjeob)dan muvaffaqiyatli o‘tish va rasmiy biznes tilida so‘zlashish.",
      "theory": {
        "introUz": "Koreyada ishga kirish suhbati juda qat’iy etiketga asoslanadi. Rasmiy hurmat shakli (-습니다/십니까) va o‘z kuchli tomonlarini taqdim etish leksikasi.",
        "rules": [
          {
            "pattern": "저는 ...에 강점이 있습니다 (kuchli tomonim bor)",
            "pronunciation": "gangjeomi itseumnida",
            "exampleDe": "저는 문제 해결 능력과 팀워크에 강점이 있습니다.",
            "exampleUz": "Mening muammolarni hal qilish va jamoada ishlashda kuchli tomonlarim bor."
          },
          {
            "pattern": "최선을 다하겠습니다 (bor kuchimni sarflayman)",
            "pronunciation": "choeseoneul dahagesseumnida",
            "exampleDe": "회사 발전을 위해 항상 성실히 최선을 다하겠습니다.",
            "exampleUz": "Kompaniya rivoji uchun har doim vijdonan bor kuchimni sarflayman."
          },
          {
            "pattern": "...경험을 바탕으로 (tajribamga tayangan holda)",
            "pronunciation": "gyeongheomeul batangeuro",
            "exampleDe": "다양한 실무 경험을 바탕으로 빠르게 적응하겠습니다.",
            "exampleUz": "Turli amaliy tajribalarimga tayangan holda yangi muhitga tez moslashaman."
          },
          {
            "pattern": "기회를 주셔서 감사합니다 (imkoniyat uchun tashakkur)",
            "pronunciation": "gihoereul jusyeoseo",
            "exampleDe": "면접 기회를 주셔서 진심으로 감사드립니다.",
            "exampleUz": "Menga suhbat imkoniyatini berganingiz uchun chin dildan minnatdorman."
          }
        ],
        "table": [
          {
            "de": "이력서 / 자기소개서",
            "uz": "rezyume (CV) / o‘z-o‘zini tanishtirish inshosi"
          },
          {
            "de": "지원 동기 / 희망 연봉",
            "uz": "ishga topshirish sababi / kutilayotgan yillik maosh"
          },
          {
            "de": "자기계발 / 업무 능력",
            "uz": "o‘z ustida ishlash / ishchanlik qobiliyati"
          },
          {
            "de": "잘 부탁드립니다!",
            "uz": "Menga ishonishingizni o‘tinib qolaman! (Rasmiy)"
          }
        ]
      },
      "kulturtip": {
        "title": "Koreys ish suhbati etiketi (면접 예절)",
        "text": "Xonaga kirganda 45 daraja egilib ta’zim qilish (인사), stulga o‘tirishga ruxsat bergandagina o‘tirish va gapirganda qo‘llarni tizzada ushlab to‘g‘ri qomatda o‘tirish Koreyada eng katta baho mezonidir."
      },
      "listening": {
        "title": "Listening: 면접관의 질문 (Intervyuer savoli)",
        "audioText": "지원자께서는 우리 회사에 입사 후 어떤 목표를 이루고 싶으십니까?",
        "question": "Suhbat oluvchi nomzoddan nima haqida so‘ramoqda?",
        "options": [
          "Qachon ta’tilga chiqmoqchi",
          "Kompaniyaga kirgach qanday maqsadlarga erishmoqchi",
          "Qayerda tug‘ilgan",
          "Koreys taomlarini yoqtiradimi"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "저의 글로벌 소통 능력과 책임감을 바탕으로 귀사의 성장에 크게 기여하겠습니다.",
        "textUz": "Xalqaro muloqot qobiliyatim va mas’uliyatimga tayangan holda muhtaram kompaniyangiz rivojiga katta hissa qo‘shaman.",
        "tip": "귀사 [gwisa] — sizning muhtaram kompaniyangiz degan yuksak hurmat so‘zi."
      },
      "exercises": [
        {
          "question": "\"Bor kuchim bilan astoydil harakat qilaman\" koreyscha rasmiy qolipi:",
          "options": [
            "놀고 싶어요.",
            "최선을 다하겠습니다.",
            "안 할래요.",
            "피곤해요."
          ],
          "correctIndex": 1,
          "explanation": "최선을 다하겠습니다 — Koreys ish va o‘qish madaniyatining bosh shiori."
        },
        {
          "question": "\"자기소개서\" (jagisogaeseo) qanday hujjat?",
          "options": [
            "Haydovchilik guvohnomasi",
            "O‘zi haqidagi motivatsion bayonnoma / insho",
            "Pasport",
            "Shifokor ma’lumotnomasi"
          ],
          "correctIndex": 1,
          "explanation": "Koreyada ishga yoki universitetga topshirishda yoziladigan shaxsiy insho."
        },
        {
          "question": "\"면접 기회를 주셔서 감사합니다\" ma’nosi nima?",
          "options": [
            "Suhbat imkoniyati uchun rahmat",
            "Ovqat uchun rahmat",
            "Kechirasiz",
            "Xayr"
          ],
          "correctIndex": 0,
          "explanation": "Ish suhbati oxirida bildiriladigan minnatdorchilik."
        }
      ]
    },
    {
      "id": "ko_lesson_15",
      "lang": "ko",
      "level": "B2",
      "number": 15,
      "title": "Bilvosita ko‘chirma nutq: -다고 하다 va -냐고 하다 (Ko‘chirma nutq)",
      "goal": "Boshqalarning so‘zlarini, yangiliklarni va eshitgan gaplarni koreys tilida erkin yetkazish.",
      "theory": {
        "introUz": "Koreys tilida \"...deb aytdi / xabar qildi\" ma’nosi bilvosita ko‘chirma nutq orqali yasaladi: darak gaplarda -다고 하다, so‘roq gaplarda -냐고 하다.",
        "rules": [
          {
            "pattern": "Fe’l darak gap: -(느)ㄴ다고 하다",
            "pronunciation": "-neundago hada",
            "exampleDe": "민수 씨가 내일 한국에 간다고 해요.",
            "exampleUz": "Minsu ertaga Koreyaga ketyapman deb aytyapti."
          },
          {
            "pattern": "Sifat darak gap: -다고 하다",
            "pronunciation": "-dago hada",
            "exampleDe": "한국의 겨울은 아주 춥다고 들었어요.",
            "exampleUz": "Koreyaning qishi juda sovuq bo‘ladi deb eshitdim."
          },
          {
            "pattern": "So‘roq gap: -(으)냐고 하다",
            "pronunciation": "-nyago hada",
            "exampleDe": "선생님이 숙제를 다 했냐고 물어보셨어요.",
            "exampleUz": "Ustoz vazifani tugatdingmi deb so‘radilar."
          },
          {
            "pattern": "Taklif gap: -자고 하다",
            "pronunciation": "-jago hada",
            "exampleDe": "친구가 주말에 같이 공부하자고 했어요.",
            "exampleUz": "Do‘stim dam olish kuni birga dars qilaylik deb aytdi."
          }
        ],
        "table": [
          {
            "de": "뉴스에서 내일 비가 온다고 해요.",
            "uz": "Yangiliklarda ertaga yomg‘ir yog‘adi deyishyapti."
          },
          {
            "de": "그 사람이 뭐라고 했어요?",
            "uz": "U inson nima deb aytdi?"
          },
          {
            "de": "다 잘될 거라고 믿어요.",
            "uz": "Hammasi yaxshi bo‘ladi deb ishonaman."
          },
          {
            "de": "약속을 지키겠다고 약속했어요.",
            "uz": "Va’dasida turaman deb so‘z berdi."
          }
        ]
      },
      "kulturtip": {
        "title": "Koreys tilida mish-mish va yangiliklar (-대요)",
        "text": "Og‘zaki kundalik nutqda \"-다고 해요\" qisqarib \"-대요\" ga aylanadi. Masalan: \"Naeil bi ondaeyo\" (Ertaga yomg‘ir yog‘armish)."
      },
      "listening": {
        "title": "Listening: Yangilik xabari",
        "audioText": "기상청 발표에 따르면 이번 주말부터 전국적으로 기온이 크게 올라갈 거라고 합니다.",
        "question": "Ob-havo markazi dam olish kunlari haqida nima dedi?",
        "options": [
          "Qor yog‘adi",
          "Harorat butun mamlakat bo‘ylab sezilarli ko‘tariladi",
          "Kuchli shamol bo‘ladi",
          "Sovuq davom etadi"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "전문가들은 인공지능 기술이 미래 사회를 혁신적으로 변화시킬 것이라고 강조합니다.",
        "textUz": "Ekspertlar sun’iy intellekt texnologiyasi kelajak jamiyatini tubdan o‘zgartirishini ta’kidlamoqdalar.",
        "tip": "변화시킬 것이라고 [byeonhwasikil geosirago] ravon aytiladi."
      },
      "exercises": [
        {
          "question": "\"Ertaga yomg‘ir yog‘adi deyishyapti\" qaysi biri to‘g‘ri?",
          "options": [
            "내일 비가 와요.",
            "내일 비가 온다고 해요.",
            "비가 안 와요.",
            "비가 좋아요."
          ],
          "correctIndex": 1,
          "explanation": "-(느)ㄴ다고 하다 — eshitilgan gapni ko‘chirma tarzda yetkazish."
        },
        {
          "question": "\"Ustoz qachon kelasan deb so‘radilar\" ko‘chirma so‘roq shakli:",
          "options": [
            "언제 오냐고 물어보셨어요.",
            "언제 와요.",
            "오지 마세요.",
            "왔어요."
          ],
          "correctIndex": 0,
          "explanation": "-냐고 묻다 / 물어보다 — so‘roq gapni ko‘chirma qilish."
        },
        {
          "question": "\"Birga ovqatlanaylik deb aytdi\" taklif shakli qaysi?",
          "options": [
            "밥 먹자고 했어요.",
            "밥 먹으세요.",
            "밥 없어요.",
            "밥 먹었어요."
          ],
          "correctIndex": 0,
          "explanation": "-자고 하다 — taklif gap ko‘chirmasi."
        }
      ]
    },
    {
      "id": "ko_lesson_16",
      "lang": "ko",
      "level": "B2",
      "number": 16,
      "title": "TOPIK II tayyorgarlik va Erkin rasmiy nutq (Akademik muloqot va Fluency)",
      "goal": "TOPIK II (3-4-daraja) insho yozish, ilmiy-ijtimoiy mavzularda bahslashish va to‘liq erkin so‘zlashuv darajasiga chiqish.",
      "theory": {
        "introUz": "TOPIK II va B2 darajasining eng yuqori bosqichi: rasmiy insho (쓰기), tahliliy fikrlash, qarama-qarshi tomonni hurmat bilan rad etish.",
        "rules": [
          {
            "pattern": "한편 ..., 다른 한편으로는 ... (Bir tomondan ..., boshqa tomondan ...)",
            "pronunciation": "Hanpyeon ..., dareun hanpyeoneuroneun",
            "exampleDe": "한편으로는 편리하지만, 다른 한편으로는 비용이 많이 듭니다.",
            "exampleUz": "Bir tomondan qulay, ammo boshqa tomondan xarajati ko‘p."
          },
          {
            "pattern": "제 생각으로는 / 제 견해로는 (Mening qarashimcha)",
            "pronunciation": "Je gyeonhaeroneun",
            "exampleDe": "제 견해로는 언어 학습에서 꾸준한 실천이 가장 중요합니다.",
            "exampleUz": "Mening qarashimcha, til o‘rganishda doimiy amaliyot eng muhim omildir."
          },
          {
            "pattern": "...에 틀림없습니다 (Shubhasizki / Shubhaga o‘rin yo‘qki)",
            "pronunciation": "teullimeopseumnida",
            "exampleDe": "한국어 능력이 여러분의 미래를 더욱 밝게 해 줄 것에 틀림없습니다.",
            "exampleUz": "Koreys tili bilimi kelajagingizni yanada porloq qilishi shubhasizdir."
          },
          {
            "pattern": "결론적으로 말하자면 ... (Xulosa qilib aytganda)",
            "pronunciation": "Gyeollonjeogeuro...",
            "exampleDe": "결론적으로 말하자면, 끊임없는 노력이 성공의 열쇠입니다.",
            "exampleUz": "Xulosa qilib aytganda, to‘xtovsiz intilish muvaffaqiyat kalitidir."
          }
        ],
        "table": [
          {
            "de": "저도 전적으로 동감합니다.",
            "uz": "Men ham to‘liq qo‘shilaman."
          },
          {
            "de": "저는 조금 다른 의견을 가지고 있습니다.",
            "uz": "Menda biroz boshqacha fikr bor (odobli e’tiroz)."
          },
          {
            "de": "두말할 필요도 없이 ...",
            "uz": "Ortiqcha gap-so‘zsiz / Shubhasizki ..."
          },
          {
            "de": "B2 단계 수료를 진심으로 축하드립니다!",
            "uz": "B2 bosqichini muvaffaqiyatli yakunlaganingiz muborak bo‘lsin!"
          }
        ]
      },
      "kulturtip": {
        "title": "TOPIK II 54-savol insho yozish siri",
        "text": "TOPIK II 54-inshoda so‘zlashuv uslubi (-아요/어요) mutlaqo ishlatilmaydi! Faqat yozma akademik shakl (-다/ㄴ다, -는다, -음/기) ishlatilishi shart. Ushbu dars sizni aynan shu darajaga olib chiqadi."
      },
      "listening": {
        "title": "Listening: Akademik muhokama",
        "audioText": "기술의 발전이 인간의 삶을 편리하게 만든 것은 분명하지만, 이로 인한 환경 문제 또한 간과해서는 안 됩니다.",
        "question": "Spiker texnologiya rivoji haqida qanday xulosaga keldi?",
        "options": [
          "Texnologiyadan voz kechish kerak",
          "Hayotni qulay qildi, ammo atrof-muhit muammolarini e’tibordan chetda qoldirib bo‘lmaydi",
          "Hech qanday muammo yo‘q",
          "Faqat boylar uchun foydali"
        ],
        "correctIndex": 1
      },
      "speakingPrompt": {
        "textDe": "다양한 문화를 이해하고 외국어를 유창하게 구사하는 능력은 글로벌 시대의 핵심 경쟁력입니다.",
        "textUz": "Turli madaniyatlarni tushunish va chet tillarida ravon so‘zlasha olish qobiliyati global asrning bosh raqobat ustunligidir.",
        "tip": "핵심 경쟁력 [haeksim gyeongjaengnyeok] — bosh raqobat ustunligi."
      },
      "exercises": [
        {
          "question": "\"Men ham bu fikrga to‘liq qo‘shilaman\" koreyscha rasmiy iborasi:",
          "options": [
            "싫어요.",
            "저도 전적으로 동감합니다.",
            "틀렸어요.",
            "몰라요."
          ],
          "correctIndex": 1,
          "explanation": "전적으로 동감합니다 — to‘liq qo‘shilaman."
        },
        {
          "question": "\"Xulosa qilib aytganda...\" koreyscha qaysi biri?",
          "options": [
            "시작하자면",
            "결론적으로 말하자면",
            "아침에",
            "집에서"
          ],
          "correctIndex": 1,
          "explanation": "결론적으로 말하자면 — xulosa qilganda."
        },
        {
          "question": "\"Bir tomondan ..., boshqa tomondan ...\" ifodasi:",
          "options": [
            "어제 ..., 오늘 ...",
            "한편으로는 ..., 다른 한편으로는 ...",
            "여기 ..., 저기 ...",
            "밥 ..., 물 ..."
          ],
          "correctIndex": 1,
          "explanation": "한편으로는 ..., 다른 한편으로는 ... — B2 darajadagi taqqoslash bog‘lovchisi."
        }
      ]
    }
  ],
  "diagnosticQuestions": {
    "de": [
      {
        "phase": 1,
        "level": "A1",
        "category": "Vocabulary",
        "question": "\"Guten Abend\" iborasining ma’nosi nima?",
        "options": [
          "Xayrli tong",
          "Xayrli kech",
          "Xayrli kun",
          "Xayrli tun"
        ],
        "correctIndex": 1
      },
      {
        "phase": 1,
        "level": "A1",
        "category": "Pronunciation",
        "question": "\"nein\" so‘zida \"ei\" birikmasi qanday o‘qiladi?",
        "options": [
          "ey",
          "ayn",
          "iin",
          "on"
        ],
        "correctIndex": 1
      },
      {
        "phase": 1,
        "level": "A1",
        "category": "Articles",
        "question": "\"das Haus\" so‘zining artikli va jinsi qaysi?",
        "options": [
          "der (maskulin)",
          "die (feminin)",
          "das (neutrum)",
          "den (akkusativ)"
        ],
        "correctIndex": 2
      },
      {
        "phase": 2,
        "level": "A1",
        "category": "Grammar",
        "question": "\"Wir ______ Deutsch in der Schule.\" to‘g‘ri fe’l shakli:",
        "options": [
          "lerne",
          "lernst",
          "lernt",
          "lernen"
        ],
        "correctIndex": 3
      },
      {
        "phase": 2,
        "level": "A1",
        "category": "Conjugation",
        "question": "\"sein\" fe’lining \"du\" shakli qaysi?",
        "options": [
          "bist",
          "bin",
          "ist",
          "sind"
        ],
        "correctIndex": 0
      },
      {
        "phase": 2,
        "level": "A2",
        "category": "Modal Verbs",
        "question": "\"Ich ______ heute leider nicht kommen (kela olmayman).\":",
        "options": [
          "kann",
          "muss",
          "will",
          "darf"
        ],
        "correctIndex": 0
      },
      {
        "phase": 3,
        "level": "A2",
        "category": "Akkusativ",
        "question": "\"Ich kaufe ______ Tisch (stol - der Tisch).\":",
        "options": [
          "den",
          "der",
          "die",
          "das"
        ],
        "correctIndex": 0
      },
      {
        "phase": 3,
        "level": "A2",
        "category": "Tenses",
        "question": "Perfekt zamon: \"Gestern habe ich einen Film ______.\"",
        "options": [
          "sehen",
          "gesehen",
          "sah",
          "sieht"
        ],
        "correctIndex": 1
      },
      {
        "phase": 4,
        "level": "B1",
        "category": "Prepositions",
        "question": "\"Ich fahre ______ dem Bus zur Arbeit (avtobus bilan).\":",
        "options": [
          "mit",
          "nach",
          "zu",
          "von"
        ],
        "correctIndex": 0
      },
      {
        "phase": 4,
        "level": "B1",
        "category": "Subordinate Clauses",
        "question": "\"Ich lerne Deutsch, ______ ich in Deutschland studieren möchte (chunki).\":",
        "options": [
          "weil",
          "denn",
          "dass",
          "obwohl"
        ],
        "correctIndex": 0
      }
    ],
    "en": [
      {
        "phase": 1,
        "level": "A1",
        "category": "Vocabulary",
        "question": "\"Good evening\" nimani anglatadi?",
        "options": [
          "Xayrli tong",
          "Xayrli kech",
          "Xayrli tun",
          "Xayrli kun"
        ],
        "correctIndex": 1
      },
      {
        "phase": 1,
        "level": "A1",
        "category": "Grammar",
        "question": "\"She ______ from London.\" to‘g‘ri fe’l:",
        "options": [
          "am",
          "is",
          "are",
          "be"
        ],
        "correctIndex": 1
      },
      {
        "phase": 1,
        "level": "A1",
        "category": "Plural",
        "question": "\"child\" (bola) so‘zining to‘g‘ri ko‘plik shakli:",
        "options": [
          "childs",
          "children",
          "childrens",
          "childes"
        ],
        "correctIndex": 1
      },
      {
        "phase": 2,
        "level": "A1",
        "category": "Present Simple",
        "question": "\"My brother ______ in a software company.\":",
        "options": [
          "work",
          "works",
          "working",
          "worked"
        ],
        "correctIndex": 1
      },
      {
        "phase": 2,
        "level": "A1",
        "category": "Wh-Questions",
        "question": "\"______ is your favourite teacher?\" (Kim):",
        "options": [
          "What",
          "Who",
          "Where",
          "When"
        ],
        "correctIndex": 1
      },
      {
        "phase": 2,
        "level": "A2",
        "category": "Past Simple",
        "question": "Past Simple: \"Yesterday I ______ to school.\"",
        "options": [
          "go",
          "went",
          "gone",
          "going"
        ],
        "correctIndex": 1
      },
      {
        "phase": 3,
        "level": "A2",
        "category": "Comparison",
        "question": "\"An airplane is ______ than a car.\":",
        "options": [
          "faster",
          "fastest",
          "more fast",
          "fast"
        ],
        "correctIndex": 0
      },
      {
        "phase": 3,
        "level": "B1",
        "category": "Modal Verbs",
        "question": "\"You ______ wear a seatbelt while driving.\"",
        "options": [
          "must",
          "might",
          "could",
          "may"
        ],
        "correctIndex": 0
      },
      {
        "phase": 4,
        "level": "B1",
        "category": "Present Perfect",
        "question": "\"I have never ______ to Japan.\":",
        "options": [
          "be",
          "been",
          "was",
          "being"
        ],
        "correctIndex": 1
      },
      {
        "phase": 4,
        "level": "B1",
        "category": "Conditionals",
        "question": "\"If it rains tomorrow, we ______ at home.\":",
        "options": [
          "will stay",
          "stay",
          "stayed",
          "would stay"
        ],
        "correctIndex": 0
      }
    ],
    "ru": [
      {
        "phase": 1,
        "level": "A1",
        "category": "Vocabulary",
        "question": "\"Доброе утро\" ma’nosi nima?",
        "options": [
          "Xayrli tong",
          "Xayrli kun",
          "Xayrli kech",
          "Xayrli tun"
        ],
        "correctIndex": 0
      },
      {
        "phase": 1,
        "level": "A1",
        "category": "Grammar",
        "question": "\"Машина\" qaysi jinsga mansub?",
        "options": [
          "Мужской род",
          "Женский род",
          "Средний род"
        ],
        "correctIndex": 1
      },
      {
        "phase": 1,
        "level": "A1",
        "category": "Pronouns",
        "question": "\"Это ______ книга (mening kitobim).\":",
        "options": [
          "мой",
          "моя",
          "моё",
          "мои"
        ],
        "correctIndex": 1
      },
      {
        "phase": 2,
        "level": "A1",
        "category": "Grammar",
        "question": "\"Я часто ______ книги.\" (читать fe’lini qo‘ying):",
        "options": [
          "читаю",
          "читаешь",
          "читает",
          "читаем"
        ],
        "correctIndex": 0
      },
      {
        "phase": 2,
        "level": "A1",
        "category": "Plural",
        "question": "\"Город\" so‘zining to‘g‘ri ko‘pligi:",
        "options": [
          "города",
          "городы",
          "городе",
          "городов"
        ],
        "correctIndex": 0
      },
      {
        "phase": 2,
        "level": "A2",
        "category": "Past Tense",
        "question": "\"Вчера Анна ______ в библиотеке (ishladi).\":",
        "options": [
          "работал",
          "работала",
          "работало",
          "работали"
        ],
        "correctIndex": 1
      },
      {
        "phase": 3,
        "level": "A2",
        "category": "Prepositions",
        "question": "\"Мы живём ______ Ташкенте.\":",
        "options": [
          "в",
          "на",
          "с",
          "из"
        ],
        "correctIndex": 0
      },
      {
        "phase": 3,
        "level": "B1",
        "category": "Cases",
        "question": "\"Я подарил цветы ______ (мама - Dativ):\"",
        "options": [
          "маму",
          "маме",
          "мамой",
          "мама"
        ],
        "correctIndex": 1
      },
      {
        "phase": 4,
        "level": "B1",
        "category": "Motion Verbs",
        "question": "\"Каждое утро я ______ на работу на метро (har kuni qatnayman).\":",
        "options": [
          "езжу",
          "еду",
          "поеду",
          "ходил"
        ],
        "correctIndex": 0
      },
      {
        "phase": 4,
        "level": "B1",
        "category": "Conjunctions",
        "question": "\"Он не пришёл, ______ заболел (chunki).\":",
        "options": [
          "потому что",
          "хотя",
          "чтобы",
          "поэтому"
        ],
        "correctIndex": 0
      }
    ],
    "ko": [
      {
        "phase": 1,
        "level": "A1",
        "category": "Vocabulary",
        "question": "Koreyscha \"감사합니다\" nima degani?",
        "options": [
          "Salom",
          "Rahmat",
          "Kechirasiz",
          "Xayr"
        ],
        "correctIndex": 1
      },
      {
        "phase": 1,
        "level": "A1",
        "category": "Alphabet",
        "question": "\"한글\" so‘zining o‘qilishi nima?",
        "options": [
          "Hangeul",
          "Namu",
          "Saram",
          "Annyeong"
        ],
        "correctIndex": 0
      },
      {
        "phase": 1,
        "level": "A1",
        "category": "Grammar",
        "question": "\"저는 학생______\" (talabaman - undoshga tugaydi):",
        "options": [
          "이에요",
          "예요",
          "입니다예요"
        ],
        "correctIndex": 0
      },
      {
        "phase": 2,
        "level": "A1",
        "category": "Demonstratives",
        "question": "\"Bu kitob\" koreyscha qanday bo‘ladi?",
        "options": [
          "이 책",
          "그 책",
          "저 책",
          "어디 책"
        ],
        "correctIndex": 0
      },
      {
        "phase": 2,
        "level": "A1",
        "category": "Verbs",
        "question": "\"가다\" (bormoq) fe’lining hozirgi zamon hurmat shakli:",
        "options": [
          "가요",
          "와요",
          "먹어요",
          "해요"
        ],
        "correctIndex": 0
      },
      {
        "phase": 2,
        "level": "A2",
        "category": "Particles",
        "question": "\"학교______ 가요.\" (maktabga boraman - yo‘nalish):",
        "options": [
          "에",
          "를",
          "은",
          "이"
        ],
        "correctIndex": 0
      },
      {
        "phase": 3,
        "level": "A2",
        "category": "Vocabulary",
        "question": "\"한국어를 배워요\" nimani anglatadi?",
        "options": [
          "Koreys tilini o‘rganyapman",
          "Ovqat yeyapman",
          "Uyga ketyapman"
        ],
        "correctIndex": 0
      },
      {
        "phase": 3,
        "level": "A2",
        "category": "Negation",
        "question": "\"Men koreys tilini bilmayman\" inkor shakli:",
        "options": [
          "한국어를 몰라요",
          "한국어를 알아요",
          "한국어를 좋아해요",
          "한국어를 가요"
        ],
        "correctIndex": 0
      },
      {
        "phase": 4,
        "level": "B1",
        "category": "Polite Request",
        "question": "\"Iltimos, suv bering\" iborasi:",
        "options": [
          "물 좀 주세요",
          "물 마셔요",
          "물 있어요",
          "물 먹어요"
        ],
        "correctIndex": 0
      },
      {
        "phase": 4,
        "level": "B1",
        "category": "Conjunctions",
        "question": "\"Dars qilyapman, shuning uchun bandman\" (-아서/어서):",
        "options": [
          "공부해서 바빠요",
          "공부하고 바빠요",
          "공부하지만 바빠요",
          "공부하면 바빠요"
        ],
        "correctIndex": 0
      }
    ]
  }
};
