// AI Engine with Direct Google Gemini Integration & Smart Fallback
const scenarios = {
  free: {
    name: 'Erkin Suhbat (Freies Gespräch)',
    description: 'Har qanday mavzuda do‘stona va o‘rgatuvchi muloqot'
  },
  supermarket: {
    name: '🛒 Im Supermarkt (Supermarketda)',
    description: 'Xarid qilish, narx so‘rash va kassada to‘lov qilish'
  },
  restaurant: {
    name: '☕ Im Restaurant / Café (Restoranda)',
    description: 'Menyu so‘rash, ovqat buyurtma qilish va hisob-kitob'
  },
  doctor: {
    name: '🏥 Beim Arzt (Shifokor qabulida)',
    description: 'Shikoyatlarni aytish, retsept va maslahat olish'
  },
  station: {
    name: '🚆 Am Bahnhof (Vokzalda chipta olish)',
    description: 'Poyezd jadvali, platforma va chipta sotib olish'
  },
  interview: {
    name: '💼 Vorstellungsgespräch (Ish suhbati)',
    description: 'O‘zingiz, tajribangiz va motivatsiyangiz haqida gapirish'
  }
};

// System prompt instructing the AI model to behave as German Master AI
function buildSystemPrompt(scenarioKey, userLevel) {
  const sc = scenarios[scenarioKey] || scenarios.free;
  return `Siz "GERMAN MASTER AI" platformasining nemis tili shaxsiy murabbiyisiz.
O'quvchi darajasi: ${userLevel || 'A1'}.
Joriy muloqot senariysi: "${sc.name}" (${sc.description}).

QOIDALAR:
1. O'quvchi qaysi tilda (nemischa, o'zbekcha yoki ruscha) yozishidan qat'i nazar, unga do'stona, samimiy va o'rgatuvchi tarzda javob bering.
2. Har bir javobingizda tabiiy nemis tilidagi javob (dialog davomi) va uning o'zbekcha ma'nosi bo'lishi shart.
3. Agar o'quvchi nemischa yozgan bo'lsa va xato qilgan bo'lsa, xatosini aniqlab, to'g'ri variantini va sababini tushuntiring.
4. Javobingizni FAQAT quyidagi JSON formatida qaytaring:
{
  "replyDe": "Nemischa tabiiy javob (agar o'quvchi o'zbekcha savol bergan bo'lsa ham unga nemischa qisqa javob va o'rgatish)",
  "replyUz": "Nemischa javobingizning o'zbekcha tushunarli tarjimasi",
  "corrections": [
    {
      "category": "GRAMMAR / VOCABULARY / ARTICLE",
      "original": "o'quvchi xato yozgan so'z yoki gap",
      "corrected": "to'g'ri varianti",
      "reason": "o'zbek tilida qisqa tushuntirish"
    }
  ],
  "tip": "Qisqa va foydali nemis tili maslahati"
}`;
}

// Real AI Generation using Google Gemini API
async function generateWithGemini(userMessage, scenarioKey, userLevel, apiKey) {
  const systemPrompt = buildSystemPrompt(scenarioKey, userLevel);
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const requestBody = {
    contents: [
      {
        role: 'user',
        parts: [{ text: `${systemPrompt}\n\nFoydalanuvchi xabari: "${userMessage}"` }]
      }
    ],
    generationConfig: {
      temperature: 0.7,
      responseMimeType: "application/json"
    }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API Error: ${errText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('AI javob qaytarmadi');

  return JSON.parse(text);
}

// Fallback intelligent responder if API key is not yet configured
function generateFallbackResponse(userMessage, scenarioKey) {
  const text = userMessage.trim().toLowerCase();

  // If user asks in Uzbek
  if (/yordam bera olasanmi|yordam ber|menga yordam|yordam kerak/i.test(text)) {
    return {
      replyDe: 'Natürlich! Ich kann dir sehr gerne beim Deutschlernen helfen. Womit möchtest du anfangen?',
      replyUz: 'Albatta! Men senga nemis tilini o‘rganishda jon deb yordam beraman. Nimadan boshlashni xohlaysan: grammatikami yoki oddiy suhbatdanmi?',
      corrections: [],
      tip: '"Ich kann dir helfen" — Men senga yordam bera olaman.'
    };
  }

  if (/salom|assalomu|qalesan|qalaysiz/i.test(text)) {
    return {
      replyDe: 'Hallo! Wie geht es dir heute? Bist du bereit für die heutige Lektion?',
      replyUz: 'Salom! Ahvollaring qanday? Bugungi darsga tayyormisan?',
      corrections: [],
      tip: 'Salomlashishda do‘stlarga "Hallo", rasmiy odamlarga "Guten Tag" deyiladi.'
    };
  }

  if (/tushunmadim|yana tushuntir|qanaqa/i.test(text)) {
    return {
      replyDe: 'Kein Problem! Sag mir einfach genau, was unklar ist.',
      replyUz: 'Hechqisi yo‘q! Aynan qaysi mavzu yoki qoida tushunarsiz bo‘lganini ayt, sodda qilib tushuntirib beraman.',
      corrections: [],
      tip: 'So‘rashdan hech qachon tortinmang!'
    };
  }

  // Akkusativ check
  if (/ich\s+habe\s+ein\s+(tisch|stuhl|apfel|kaffee)/i.test(text)) {
    return {
      replyDe: 'Sehr gut! Aber vergiss nicht: Im Akkusativ heißt es "einen Tisch".',
      replyUz: 'Juda yaxshi! Lekin unutmang: Akkusativda (tushum kelishigida) "einen Tisch" bo‘ladi.',
      corrections: [
        {
          category: 'ARTICLE / CASE',
          original: 'ein Tisch',
          corrected: 'einen Tisch',
          reason: 'Erkak jinsidagi otlar Akkusativda "ein" emas, "einen" oladi.'
        }
      ],
      tip: 'haben fe’lidan keyin erkak jinsi doimo "einen" bo‘ladi.'
    };
  }

  return {
    replyDe: 'Das ist interessant! Könntest du das auf Deutsch versuchen?',
    replyUz: 'Bu juda qiziq! Shuni nemis tilida aytib ko‘ra olasanmi? Masalan oddiy so‘zlar bilan boshla.',
    corrections: [],
    tip: 'Xato qilishdan qo‘rqmang, har bir xato sizni o‘stiradi!'
  };
}

async function generateAiResponse(userMessage, scenarioKey, userLevel, customApiKey) {
  const apiKey = customApiKey || process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      return await generateWithGemini(userMessage, scenarioKey, userLevel, apiKey);
    } catch (err) {
      console.error('Gemini error, falling back:', err.message);
    }
  }

  return generateFallbackResponse(userMessage, scenarioKey);
}

module.exports = {
  scenarios,
  generateAiResponse
};
