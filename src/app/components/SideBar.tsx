import React from 'react';
import { signOut } from 'next-auth/react';

function SideBar() {
  return (
    <div className=" col-span-2 px-8 pt-  p-4 bg-neutral-700 py-4 flex flex-col justify-between h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[90px] ClashDisplay-Bold scale-125 tracking-widest">
          <h1>SwiftMail</h1>
          <img src="/gradient.png" alt="gradient" className='w-full relative -top-3.5 -z-20' />
        </div>
        <button className='ClashDisplay-Regular w-full rounded py-1 text-white bg-gradient-to-br from-[#f75ad5] bg-cyan-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-[#f75ad5]  dark:focus:ring-[#f75ad5] flex gap-2 justify-center items-center'>
          <img src="/add.svg" alt="" /> New Project
        </button>
        <div className="p-4 flex flex-col justify-start gap-2 mt-2 w-full">
          <button title="Projects" className='ClashDisplay-Regular flex gap-2 items-center'>
            <img src="/project.svg" alt="Project" /> Projects
          </button>
          <button title="Templates" className='ClashDisplay-Regular flex gap-2 items-center'>
            <img src="/file.svg" alt="Templates" /> Templates
          </button>
          {/* <button title="Tools" className='ClashDisplay-Regular flex gap-1 items-center'>
            <img src="/tool.svg" alt="Tools" className='relative -left-0.5' /> Tools
          </button>
          <button title="Saves" className='ClashDisplay-Regular flex gap-1 items-center'>
            <img src="/save.svg" alt="Saves" className='relative -left-0.5' /> Saves
          </button> */}
        </div>
      </div>
      <div className="p-4 border-t">
        <button 
          title="Logout" 
          className='ClashDisplay-Regular flex gap-2 items-center' 
          onClick={() => signOut({ callbackUrl: '/' })} // Redirect to home page after sign-out
        >
          <img src="/logout.svg" alt="Logout" /> Logout
        </button>
      </div>
    </div>
  );
}

export default SideBar;
