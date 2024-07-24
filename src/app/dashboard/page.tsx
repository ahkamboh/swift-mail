import React from 'react'
import SideBar from '../components/SideBar';
import Dashboard from '../components/Dashboard';
function page() {
  return (
    <>
      <div className=" w-full ">
        <div className="grid grid-cols-12">
          <SideBar />
          <div className="col-span-10 h-screen  bg-[#1e1e1e]">
            <div className=" flex justify-between items-center p-2 px-4  border-b">
              <div className="ClashDisplay-Regular">Welcome, <span>Ali Hamza</span></div>
              <div className="w-12 h-12 rounded-full overflow-hidden scale-90">
                <img src="/profile-pic.png" alt="" />
              </div>
            </div>
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  )
}

export default page