// AI Engine with Multi-Language Support (German, English, Russian, Korean) + Multi-Provider Failover

const languageMeta = {
  de: { name: 'Nemis tili (German)', native: 'Deutsch' },
  en: { name: 'Ingliz tili (English)', native: 'English' },
  ru: { name: 'Rus tili (Russian)', native: 'Русский' },
  ko: { name: 'Koreys tili (Korean)', native: '한국어' }
};

const scenarios = {
  free: {
    name: 'Erkin Suhbat',
    description: 'Har qanday mavzuda do‘stona va o‘rgatuvchi muloqot'
  },
  supermarket: {
    name: '🛒 Supermarketda',
    description: 'Xarid qilish, narx so‘rash va kassada to‘lov qilish'
  },
  restaurant: {
    name: '☕ Restoran / Kafe',
    description: 'Menyu so‘rash, ovqat buyurtma qilish va hisob-kitob'
  },
  doctor: {
    name: '🏥 Shifokor qabulida',
    description: 'Shikoyatlarni aytish, retsept va maslahat olish'
  },
  station: {
    name: '🚆 Vokzal / Aeroport',
    description: 'Jadval, chipta va yo‘nalish so‘rash'
  },
  interview: {
    name: '💼 Ish suhbati',
    description: 'O‘zingiz, tajribangiz va maqsadingiz haqida gapirish'
  }
};

function buildSystemPrompt(scenarioKey, userLevel, lang = 'de') {
  const sc = scenarios[scenarioKey] || scenarios.free;
  const targetLang = languageMeta[lang] || languageMeta.de;

  return `Siz "MASTER AI" platformasining ${targetLang.name} bo'yicha shaxsiy murabbiyisiz.
O'quvchi darajasi: ${userLevel || 'A1'}.
O'rganilayotgan til: ${targetLang.name} (${targetLang.native}).
Muloqot senariysi: "${sc.name}" (${sc.description}).

QOIDALAR:
1. O'quvchi qaysi tilda (o'zbekcha, ruscha yoki o'rganayotgan tilda) yozishidan qat'i nazar, unga juda samimiy, do'stona va rag'batlantiruvchi tarzda javob bering.
2. Har bir javobingizda o'rganilayotgan tildagi (${targetLang.native}) dialog davomi va uning o'zbekcha tushunarli tarjimasi bo'lishi shart.
3. Agar o'rganilayotgan til Koreys tili (ko) bo'lsa, qavs ichida talaffuzini (romanizatsiyasini) ham yozib keting (masalan: 안녕하세요 [Annyeonghaseyo]).
4. Agar o'quvchi xato qilgan bo'lsa, xatoni darhol to'g'irlab, sababini o'zbek tilida tushuntiring.
5. Javobingizni FAQAT quyidagi toza JSON formatida qaytaring:
{
  "replyDe": "${targetLang.native} tilidagi tabiiy javobingiz",
  "replyUz": "Javobingizning o'zbekcha tarjimasi",
  "corrections": [
    {
      "category": "GRAMMAR / VOCABULARY / PRONUNCIATION",
      "original": "xato ibora",
      "corrected": "to'g'ri varianti",
      "reason": "o'zbek tilida qisqa tushuntirish"
    }
  ],
  "tip": "Foydali til yoki madaniyat maslahati"
}`;
}

// 1. Google Gemini API Call
async function generateWithGemini(userMessage, scenarioKey, userLevel, apiKey, lang = 'de') {
  const systemPrompt = buildSystemPrompt(scenarioKey, userLevel, lang);
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
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
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini Error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Gemini bo‘sh javob qaytardi');

  return JSON.parse(text);
}

// 2. Groq or xAI Grok API Call
async function generateWithGroqOrGrok(userMessage, scenarioKey, userLevel, apiKey, lang = 'de') {
  const systemPrompt = buildSystemPrompt(scenarioKey, userLevel, lang);
  const isXai = apiKey.startsWith('xai-');
  const endpoint = isXai 
    ? 'https://api.x.ai/v1/chat/completions' 
    : 'https://api.groq.com/openai/v1/chat/completions';
  
  const model = isXai ? 'grok-beta' : 'llama-3.3-70b-versatile';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Groq/Grok Error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error('Groq/Grok bo‘sh javob qaytardi');

  return JSON.parse(text);
}

// 3. Smart Fallback for all 4 languages
function generateFallbackResponse(userMessage, scenarioKey, lang = 'de') {
  const text = userMessage.trim().toLowerCase();

  if (lang === 'en') {
    if (/yordam|help|salom|hi|hello/i.test(text)) {
      return {
        replyDe: 'Hello! I am your English AI Coach. How can I help you improve your English today?',
        replyUz: 'Salom! Men sizning ingliz tili AI murabbiyingizman. Bugun ingliz tilini qaysi mavzudan boshlaymiz?',
        corrections: [],
        tip: 'Practice makes perfect! Har kuni 15 daqiqa gapiring.'
      };
    }
    return {
      replyDe: 'Great job! Let\'s continue our conversation in English.',
      replyUz: 'Ajoyib! Ingliz tilida suhbatlashishni davom ettiramiz. Nimani muhokama qilamiz?',
      corrections: [],
      tip: 'Remember to use simple present tense for daily routines.'
    };
  }

  if (lang === 'ru') {
    if (/yordam|salom|привет|здравствуйте/i.test(text)) {
      return {
        replyDe: 'Здравствуйте! Я ваш личный преподаватель русского языка. Чем могу вам помочь?',
        replyUz: 'Assalomu alaykum! Men sizning rus tili murabbiyingizman. Sizga qanday yordam bera olaman?',
        corrections: [],
        tip: 'Salomlashganda kattalarga "Здравствуйте" deyiladi.'
      };
    }
    return {
      replyDe: 'Очень хорошо! Расскажите, пожалуйста, подробнее о себе.',
      replyUz: 'Juda yaxshi! Iltimos, o‘zingiz haqingizda ko‘proq so‘zlab bering.',
      corrections: [],
      tip: 'Rus tilida rodlarga (он, она, оно) e’tibor bering.'
    };
  }

  if (lang === 'ko') {
    if (/yordam|salom|안녕/i.test(text)) {
      return {
        replyDe: '안녕하세요! [Annyeonghaseyo!] 저는 한국어 AI 튜터예요. 무엇을 도와드릴까요?',
        replyUz: 'Assalomu alaykum! Men koreys tili AI murabbiyingizman. Sizga qanday yordam beray?',
        corrections: [],
        tip: '안녕하세요 [Annyeonghaseyo] — eng mashhur koreyscha salom.'
      };
    }
    return {
      replyDe: '아주 잘했어요! [Aju jal-haesseoyo!] 한국어로 더 이야기해 볼까요?',
      replyUz: 'Juda yaxshi uddaladingiz! Koreyscha ko‘proq gaplashamizmi?',
      corrections: [],
      tip: 'Koreys tilida fe’l har doim gapning eng oxirida keladi.'
    };
  }

  // Default German (de)
  if (/yordam|salom|hallo|tag/i.test(text)) {
    return {
      replyDe: 'Hallo! Natürlich kann ich dir beim Deutschlernen helfen. Womit fangen wir an?',
      replyUz: 'Salom! Albatta, men nemis tilini o‘rganishingizda yordam beraman. Nimadan boshlaymiz?',
      corrections: [],
      tip: '"Ich kann dir helfen" — Men senga yordam bera olaman.'
    };
  }

  return {
    replyDe: 'Das ist interessant! Erzähl mir mehr darüber auf Deutsch.',
    replyUz: 'Bu juda qiziq! Bu haqida nemis tilida ko‘proq so‘zlab bering.',
    corrections: [],
    tip: 'Fe’lni har doim 2-o‘rinda saqlashni unutmang.'
  };
}

async function generateAiResponse(userMessage, scenarioKey, userLevel, keys = {}, lang = 'de') {
  const geminiKey = keys.geminiKey || process.env.GEMINI_API_KEY;
  const groqKey = keys.groqKey || process.env.GROQ_API_KEY;

  if (geminiKey) {
    try {
      return await generateWithGemini(userMessage, scenarioKey, userLevel, geminiKey, lang);
    } catch (err) {
      console.warn('Gemini failed, switching to Groq/Grok:', err.message);
    }
  }

  if (groqKey) {
    try {
      return await generateWithGroqOrGrok(userMessage, scenarioKey, userLevel, groqKey, lang);
    } catch (err) {
      console.warn('Groq/Grok failed:', err.message);
    }
  }

  return generateFallbackResponse(userMessage, scenarioKey, lang);
}

module.exports = {
  scenarios,
  languages: languageMeta,
  generateAiResponse
};
