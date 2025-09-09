// In app/api/chat/route.ts

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, Part } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const systemInstruction: Part = {
  role: "system",
  parts: [{
    text: `You are Minula's personal AI assistant... (rest of your system prompt remains the same)`
  }],
};

export async function POST(request: Request) {
  const { history, message } = await request.json();
  
  // REMOVED: The initial greeting handler is no longer needed here.
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: systemInstruction, 
  });

  const generationConfig = {
    maxOutputTokens: 200,
  };

  const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    // ... rest of safety settings
  ];
  
  try {
    const result = await model.generateContent({
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      generationConfig,
      safetySettings,
    });
    
    const response = result.response;
    const text = response.text();
    return NextResponse.json({ text });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ text: "Sorry, I'm having trouble connecting right now." }, { status: 500 });
  }
}