// In app/api/chat/route.ts

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, Part } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const systemInstruction: Part = {
  role: "system",
  parts: [{
    text: `You are Minula's personal AI assistant for his portfolio website. Your name is "MinulaBot".
    Your purpose is to answer questions about Minula Vihanaga based on the information provided below.
    Be friendly, conversational, and helpful. Keep your answers concise and to the point.
    If you are asked a question that you cannot answer from the information below, politely say "I don't have that information, but you can reach out to Minula directly to ask!"

    Here is the information about Minula Vihanaga:
    - Full Name: Minula Vihanaga
    - Current Role: Software Developer and AI Enthusiast.
    - Education:
      - Currently pursuing a BSc (Hons) in Software Engineering at NSBM Green University (2023 - Present).
      - Completed Advanced Level in the Physical Science Stream at President's College, Horana (2018 - 2020).
    - Core Skills & Technologies:
      - Languages: JavaScript, TypeScript, Python, Java, C++.
      - Frontend: React, Next.js, React Native.
      - Backend: Node.js.
      - Databases: MongoDB, PostgreSQL.
      - Tools: Docker.
    - Key Interests: Artificial Intelligence (AI), Web Development, Mobile App Development, and complex problem-solving.
    - Personality: He has a strong analytical background from his science studies and is passionate about turning ideas into clean, scalable code.
    - Contact: His email is minulavihanga70@gmail.com.`
  }],
};

export async function POST(request: Request) {
  const { history, message } = await request.json();
  
  // Handle the initial greeting message directly
  if (history.length === 0 && message === "Hello") {
    return NextResponse.json({ text: "Hi there! I'm Minula's Personal Assistant. Ask me anything about Minula's skills, education, or projects and any other relavant information." });
  }

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: systemInstruction, 
  });

  const generationConfig = {
    maxOutputTokens: 200,
  };

  const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
  ];
  
  // MODIFIED: Switched to the stateless generateContent method
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