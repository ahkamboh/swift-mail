
"use client"
import React, { useState } from 'react';

function Promote() {
  const [formData, setFormData] = useState({
    to: '',
    companyName: '',
    context: '',
    purpose: '',
    tone: '',
  });
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Handle form submission (e.g., send data to an API)
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-7 py-10 px-5 w-full'>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <div className="mb-4">
            <label htmlFor="to" className="block text-white mb-2">To</label>
            <input
              type="text"
              id="to"
              name="to"
              placeholder='Ali Hamza, Founder of Genie'
              value={formData.to}
              onChange={handleChange}
              className="w-full p-2 border border-[#575757] rounded-lg  bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-white mb-2">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder='Email Ganie'
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 border border-[#575757] rounded-lg  bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="context" className="block text-white mb-2">Context</label>
            <input
              type="text"
              id="context"
              name="context"
              placeholder='Saw his LinkedIn profile'
              value={formData.context}
              onChange={handleChange}
              className="w-full p-2 border border-[#575757] rounded-lg  bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="purpose" className="block text-white mb-2">Purpose</label>
            <textarea
              id="purpose"
              name="purpose"
              rows={5}
              placeholder='Ask about the UI designer job opening at his company. I am entry- level UI designer looking for the first job. I have done online courses. Introduce me to get a job or internship at his company.'
              value={formData.purpose}
              onChange={handleChange}

              className="w-full p-2 border border-[#575757] rounded-lg  bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tone" className="block text-white mb-2">Tone</label>
            <input
              type="text"
              id="tone"
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className="w-full p-2 border border-[#575757] rounded-lg  bg-transparent"
              placeholder='Friendly'
            />
          </div>
          <div className="flex justify-end"><button type="submit" className="w-fit p-2 bg-[#129dbc]  text-white rounded-lg px-16"   onClick={toggleMenu}>Generate</button></div>

        </form>
      </div>

      {menuOpen ? (
        <div className="col-span-5 border-l flex justify-center items-center flex-col gap-2">
          <div className="w-40 h-40 object-contain">
            <img src="/ourlogo.png" alt="" className='' />
          </div>
          <div className="ClashDisplay-Regular text-center">
            Your copies created by artificial intelligence <br /> will appear here.
          </div>
        </div>
      ) : (
        <div className="col-span-5 border-l flex justify-center items-center flex-col gap-2">
          <div className="w-40 h-40 object-contain">
            <img src="/ourlogo.gif" alt="" className='' />
          </div>
          <div className="ClashDisplay-Regular text-center">
            Generation ................
          </div>
        </div>
      )}
    </div>
  );
}

export default Promote;
