"use client";
import React, { useState, FormEvent } from 'react';

interface FormData {
  from: string;
  to: string;
  companyName: string;
  context: string;
  purpose: string;
  tone: string;
}

const Promote: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    from: 'Rehmat Ali',
    to: 'Abu bakar',
    companyName: 'Google',
    context: 'for linkedin aware post for developers',
    purpose: 'I want to write this email to Abubakar the manager of Google so I want to request do post about the DevOps interview when happens.',
    tone: 'aggressive'
  });
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const apiKey = 'AIzaSyC-IHRSLmAL645a2zbXo3ngz0C7XsnkRJM'; // Replace with your actual API key
      const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

      const response = await fetch(`${apiUrl}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Generate an email body:
                From: ${formData.from}
                To: ${formData.to}
                Company: ${formData.companyName}
                Context: ${formData.context}
                Purpose: ${formData.purpose}
                Tone: ${formData.tone}
                Format: Complete email including salutation and closing`
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

      setGeneratedContent(generatedContent);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error generating content:', err.message);
        setError(err.message);
      } else {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-12 md:col-span-7 py-10 px-5 w-full'>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <div className="mb-4">
            <label htmlFor="from" className="block text-white mb-2">From</label>
            <input
              type="text"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              className="w-full p-2 border border-[#575757] rounded-lg bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="to" className="block text-white mb-2">To</label>
            <input
              type="text"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              className="w-full p-2 border border-[#575757] rounded-lg bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-white mb-2">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full p-2 border border-[#575757] rounded-lg bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="context" className="block text-white mb-2">Context</label>
            <input
              type="text"
              id="context"
              name="context"
              value={formData.context}
              onChange={handleInputChange}
              className="w-full p-2 border border-[#575757] rounded-lg bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="purpose" className="block text-white mb-2">Purpose</label>
            <textarea
              id="purpose"
              name="purpose"
              rows={5}
              value={formData.purpose}
              onChange={handleInputChange}
              className="w-full p-2 border border-[#575757] rounded-lg bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tone" className="block text-white mb-2">Tone</label>
            <input
              type="text"
              id="tone"
              name="tone"
              value={formData.tone}
              onChange={handleInputChange}
              className="w-full p-2 border border-[#575757] rounded-lg bg-transparent"
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="w-fit p-2 bg-[#129dbc] text-white rounded-lg px-16">
              Generate
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>

      <div className="col-span-12 md:col-span-5 border-l p-4 space-y-2">

        
        <div className="">
          <div className="bg-[#2c2c2c] w-full rounded-xl p-4 text-white overflow-auto whitespace-pre-line">
            {generatedContent}
          </div>
          <div className="flex mt-2 gap-2">
            <button className='w-full bg-[#2c2c2c] py-2 flex justify-center rounded-xl gap-2 items-start'>
              <img src="/save.svg" alt="Save" /> Save
            </button>
            <button className='w-full bg-[#2c2c2c] py-2 flex justify-center rounded-xl gap-2 items-start'>
              <img src="/copy.svg" alt="Copy" /> Copy
            </button>
            <button className='w-full bg-[#2c2c2c] py-2 flex justify-center rounded-xl gap-2 items-start'>
              <img src="/edit.svg" alt="Edit" /> Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promote;