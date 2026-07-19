const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

console.log("GEMINI_API_KEY loaded:", !!process.env.GEMINI_API_KEY);
console.log(
  "Key prefix:",
  process.env.GEMINI_API_KEY?.substring(0, 5)
);

const askAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required.",
      });
    }

    const prompt = `
You are StaySense AI, the official AI assistant of the StaySense platform.

StaySense helps users:
- Discover the best homestays.
- Compare homestays.
- Plan eco-friendly trips.
- Recommend tourist attractions.
- Suggest local food.
- Create personalized itineraries.
- Give travel and booking tips.

Rules:
- Always answer as StaySense AI.
- Use headings and bullet points.
- Keep responses accurate and concise.
- If you don't know something, say "I'm not certain."
- Encourage sustainable and responsible tourism.
- Do not invent prices, ratings, or hotel names unless the user asks for suggestions.

User Question:
${message}
`;

    const result = await ai.models.generateContent({
      model: "models/gemini-3.5-flash",
      contents: prompt,
    });

    res.json({
      reply: result.text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "AI service unavailable.",
    });
  }
};

module.exports = {
  askAI,
};