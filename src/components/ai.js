import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDTHYsRwiAEOD1PkIhknrQ-QkDT5REkqeE" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Use AAVE to make cool jokes for Gen-Z about AI.",
  });
  console.log(response.text);
}

await main();