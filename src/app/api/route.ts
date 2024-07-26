import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  generatedContent: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  try {
    const response = await fetch(`${apiUrl}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Generate an email:
              To: ${req.body.to}
              Company: ${req.body.companyName}
              Context: ${req.body.context}
              Purpose: ${req.body.purpose}
              Tone: ${req.body.tone}`
          }]
        }]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API response error:', errorText);
      throw new Error(`Failed to generate content: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Check if the data contains the expected structure
    const generatedContent = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedContent) {
      throw new Error('No content generated');
    }

    res.status(200).json({ generatedContent });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ error: 'An error occurred while generating content' });
  }
}
