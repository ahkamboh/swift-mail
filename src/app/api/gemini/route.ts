// src/app/api/gemini/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { from, to, companyName, context, purpose, tone ,wordCount  } = body;

    const prompt = `Generate an email body:
      From: ${from}
      To: ${to}
      Company: ${companyName}
      Context: ${context}
      Purpose: ${purpose}
      Tone: ${tone}
      Wordcount:${wordCount}
      Format: Complete email including salutation and closing`;

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = await response.text();

    return NextResponse.json({ generatedContent: text });
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
}
