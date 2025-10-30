import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "Insert your API key here." });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Use AAVE to make cool jokes for Gen-Z about AI.",
  });
  console.log(response.text);
}

await main();