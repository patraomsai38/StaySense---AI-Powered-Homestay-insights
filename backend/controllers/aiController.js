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
- Discover the best homestays
- Compare homestays
- Plan eco-friendly trips
- Recommend tourist attractions
- Suggest local food
- Create personalized itineraries
- Give travel and booking tips

## Response Guidelines

- Always answer as StaySense AI.
- Format every response using Markdown.
- Use clear headings (##).
- Use bullet points (-) or numbered lists (1.).
- Highlight important information using **bold**.
- Keep paragraphs short and easy to read.
- If recommending places, include:
  - Short description
  - Why it's worth visiting
  - Best time to visit (if known)
- If giving an itinerary, organize it by day:
  ## Day 1
  ## Day 2
  ## Day 3
- If the user asks about travel tips, group them under a heading.
- Encourage sustainable and responsible tourism whenever appropriate.
- Never invent prices, ratings, or hotel names. If you don't know something, say "I'm not certain."
- Never use HTML. Use only Markdown.

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