"use client";
import React, { useState, useRef, FormEvent } from 'react';
import ReactMarkdown from 'react-markdown';

const Promote: React.FC = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    companyName: '',
    context: '',
    purpose: '',
    tone: '',
    wordCount: '' // Default word count range
  });
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [copyButtonText, setCopyButtonText] = useState<string>('Copy');

  const contentRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setGeneratedContent(''); // Clear previous content
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API response error:', errorText);
        throw new Error(`Failed to generate content: ${response.statusText}`);
      }

      const data = await response.json();
      const generatedContent = data.generatedContent;

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
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleCopy = () => {
    if (contentRef.current) {
      const range = document.createRange();
      range.selectNodeContents(contentRef.current);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      document.execCommand('copy');
      setCopyButtonText('Copied!');
      setTimeout(() => setCopyButtonText('Copy'), 2000);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4   ">
      <div className="col-span-12 md:col-span-7 py-10 px-5 w-full">
        <form onSubmit={handleSubmit} autoComplete='off'>
          <div className="flex flex-wrap gap-2 w-full">
            <div className="mb-4 flex-1 min-w-[200px] max-w-full">
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
            <div className="mb-4 flex-1 min-w-[200px] max-w-full">
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
          <div className="mb-4">
            <label htmlFor="wordCount" className="block text-white mb-2">Word Count</label>
            <select
              id="wordCount"
              name="wordCount"
              value={formData.wordCount}
              onChange={handleInputChange}
              className="w-full p-2 border border-[#575757] rounded-lg bg-transparent"
            >
              <option className='text-black' value="100-200">100-200 words</option>
              <option className='text-black' value="201-300">200-300 words</option>
              <option className='text-black' value="301-400">300-400 words</option>
              <option className='text-black' value="401-500">400-500 words</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="w-fit p-2  bg-gradient-to-br from-[#f75ad5] bg-cyan-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-[#f75ad5]  dark:focus:ring-[#f75ad5] text-white rounded-lg px-16">
              Generate
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>

      <div className="col-span-12 md:col-span-5 md:border-l p-4 space-y-2 ">
        <div className="grid place-items-center text-center">
          {!loading && !generatedContent && (
            <>
              <div className="w-48 h-48 flex  flex-col items-center justify-center">
                <img src="ourlogo.png" alt="Email Genie" className="max-w-full max-h-full" />
              </div>
              <div className="mt-4">Your copies created by Swift Mail will appear here.</div>
            </>
          )}
          {loading && (
            <div className="w-48 h-48 flex items-center justify-center">
              <img src="ourlogo.gif" alt="Loading" className="max-w-full max-h-full" />
            </div>
          )}
        </div>
        {generatedContent && (
          <>
            <div className={`bg-[#2c2c2c] w-full ${isEditable ? ' border-white' : 'border-[#ffffff00]'} border rounded-xl copycontainer p-4 text-white overflow-auto whitespace-pre-line`}
              ref={contentRef}
              contentEditable={isEditable}
              suppressContentEditableWarning={true}
            >
              <ReactMarkdown>{generatedContent}</ReactMarkdown>
            </div>
            <div className="flex mt-2 gap-2">
              <button
                className='w-full bg-[#2c2c2c] py-2 flex justify-center rounded-xl gap-2 items-start'
                onClick={handleEdit}
              >
                <img src="/edit.svg" alt="Edit" /> {isEditable ? 'Cancel' : 'Edit'}
              </button>
              <button
                className='w-full bg-[#2c2c2c] py-2 flex justify-center rounded-xl gap-2 items-start'
                onClick={handleCopy}
              >
                <img src="/copy.svg" alt="Copy" /> {copyButtonText}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Promote;
