"use client";

import React from 'react';
import { useSession } from 'next-auth/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import Promote from '../components/Promote';

function Page() {
  const { data: session } = useSession();

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full">
        <div className="grid grid-cols-12">
          <SideBar />
          <div className="col-span-10 bg-[#1e1e1e]">
            <div className="flex justify-between items-center p-2 px-4 border-b">
              <div className="ClashDisplay-Regular">
                Welcome, <span>{session?.user?.name || 'User'}</span>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden scale-90">
                <img
                  src={session?.user?.image || '/profile-pic.png'}
                  alt="Profile Picture"
                />
              </div>
            </div>
            <Promote />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Page;
