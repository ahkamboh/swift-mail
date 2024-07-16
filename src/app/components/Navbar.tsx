"use client"
import React, { useState } from 'react';
import Image from 'next/image';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="list-none flex justify-between p-5">
          <div className="w-[90px] ClashDisplay-Bold ">
            <h1>EmailGenie</h1>
            <img src="/gradient.png"  alt="gradient" className='w-full relative -top-3.5 -z-20'/>
          </div> 
          <div className="sm:flex hidden gap-5 ClashDisplay-Regular">
            <li className=' text-white hover:text-blue-500 transition-colors duration-300'><a href="">About</a></li>
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">Resources</a></li>
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">Pricing</a></li>
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">Contact</a></li>
          </div>
          <div className="flex gap-2 ClashDisplay-Semibold justify-center items-center">
            <li>
              <span
                className='sm:hidden block cursor-pointer text-white hover:text-blue-500 transition-colors duration-300'
                onClick={toggleMenu}
              >
                Menu
              </span>
              {/* <a className='sm:block hidden text-white hover:text-blue-500 transition-colors duration-300' href="">Resume</a> */}
            </li>
            <li className='flex gap-4' >
              <img alt='twitter' src='/twitter.png'/>
              <img alt='github' src='/github.png'/>
              <img alt='discord' src='/discord.png'/>
            </li>
          </div>
        </div>
        <div
          onClick={toggleMenu}
          className={`${menuOpen ? 'flex' : 'hidden'
            } sm:hidden h-screen w-full absolute top-0 z-40 items-center justify-center list-none transition-opacity duration-500 ease-in-out`}
          style={{
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(154, 130, 130, 0.21)',
            opacity: menuOpen ? 1 : 0
          }}
        >
          <li className='text-white rotate-45 absolute top-10 right-10 hover:bg-black transition-colors duration-100 rounded-full p-1 bg-transparent '><img src="/cross.svg" alt="" /></li>
          <div className="space-y-5 text-center text-xl ClashDisplay-Regular w-full relative h-full">
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">Home</a></li>
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">About</a></li>
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">Work</a></li>
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">Contact</a></li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
