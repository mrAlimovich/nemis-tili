// AI Engine with Multi-Provider Failover: Google Gemini + Groq/xAI Grok + Smart Fallback

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

function buildSystemPrompt(scenarioKey, userLevel) {
  const sc = scenarios[scenarioKey] || scenarios.free;
  return `Siz "GERMAN MASTER AI" platformasining nemis tili shaxsiy murabbiyisiz.
O'quvchi darajasi: ${userLevel || 'A1'}.
Joriy muloqot senariysi: "${sc.name}" (${sc.description}).

QOIDALAR:
1. O'quvchi qaysi tilda (nemischa, o'zbekcha yoki ruscha) yozishidan qat'i nazar, unga do'stona, samimiy va o'rgatuvchi tarzda javob bering.
2. Har bir javobingizda tabiiy nemis tilidagi dialog davomi va uning o'zbekcha ma'nosi bo'lishi shart.
3. Agar o'quvchi nemischa xato qilgan bo'lsa, xatosini aniqlab, to'g'ri variantini va sababini tushuntiring.
4. Javobingizni FAQAT quyidagi toza JSON formatida qaytaring:
{
  "replyDe": "Nemischa tabiiy javob",
  "replyUz": "O'zbekcha tarjima",
  "corrections": [
    {
      "category": "GRAMMAR / VOCABULARY / ARTICLE",
      "original": "xato so'z yoki gap",
      "corrected": "to'g'risi",
      "reason": "o'zbekcha tushuntirish"
    }
  ],
  "tip": "Qisqa va foydali nemis tili maslahati"
}`;
}

// 1. Google Gemini API Call
async function generateWithGemini(userMessage, scenarioKey, userLevel, apiKey) {
  const systemPrompt = buildSystemPrompt(scenarioKey, userLevel);
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

// 2. Groq or xAI Grok API Call (OpenAI compatible)
async function generateWithGroqOrGrok(userMessage, scenarioKey, userLevel, apiKey) {
  const systemPrompt = buildSystemPrompt(scenarioKey, userLevel);

  // Detect whether it's Groq (console.groq.com) or xAI Grok (api.x.ai)
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

// 3. Fallback Rule-Based Intelligence
function generateFallbackResponse(userMessage, scenarioKey) {
  const text = userMessage.trim().toLowerCase();

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

  return {
    replyDe: 'Das ist interessant! Könntest du das auf Deutsch versuchen?',
    replyUz: 'Bu juda qiziq! Shuni nemis tilida aytib ko‘ra olasanmi? Masalan oddiy so‘zlar bilan boshla.',
    corrections: [],
    tip: 'Xato qilishdan qo‘rqmang, har bir xato sizni o‘stiradi!'
  };
}

// Master Orchestrator: Try Gemini -> On failure try Groq/Grok -> Fallback
async function generateAiResponse(userMessage, scenarioKey, userLevel, keys = {}) {
  const geminiKey = keys.geminiKey || process.env.GEMINI_API_KEY;
  const groqKey = keys.groqKey || process.env.GROQ_API_KEY;

  // 1. Try Gemini First (if available)
  if (geminiKey) {
    try {
      console.log('Attempting AI response via Google Gemini...');
      return await generateWithGemini(userMessage, scenarioKey, userLevel, geminiKey);
    } catch (err) {
      console.warn('Gemini failed or rate limit hit! Switching immediately to Backup AI (Groq/Grok)...', err.message);
    }
  }

  // 2. Try Groq / Grok Second (Instant Failover)
  if (groqKey) {
    try {
      console.log('Attempting AI response via Groq/Grok AI...');
      return await generateWithGroqOrGrok(userMessage, scenarioKey, userLevel, groqKey);
    } catch (err) {
      console.warn('Groq/Grok also failed:', err.message);
    }
  }

  // 3. Fallback
  return generateFallbackResponse(userMessage, scenarioKey);
}

module.exports = {
  scenarios,
  generateAiResponse
};
