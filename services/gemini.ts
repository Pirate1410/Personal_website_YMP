
import { GoogleGenAI, Type } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAIResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are Yashodhar's AI personal assistant. Use the following context to answer questions about him: ${RESUME_CONTEXT}. Be professional, witty, and helpful. If you don't know the answer based on the context, politely suggest contacting Yashodhar directly via email (yparmar2@asu.edu).`,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting right now. Feel free to reach out to Yashodhar directly!";
  }
};
