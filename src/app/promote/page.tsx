"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import SideBar from "../components/SideBar";
import Promote from "../components/Promote";

function Page() {
  const { data: session } = useSession();
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // Use effect to set initial state based on screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
      setSidebarVisible(false);
    }

    const handleResize = () => {
      if (mediaQuery.matches) {
        setSidebarVisible(false);
      } else {
        setSidebarVisible(true);
      }
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="w-full bg-[#1e1e1e]">
        <div className="flex h-screen relative">
          <button
            title="click for Sidebar"
            onClick={toggleSidebar}
            className="h-10 rounded-lg px-2 hover:text-[#f75ad5] transition-colors duration-300 absolute top-3 text-token-text-secondary focus-visible:outline-0 hover:bg-token-sidebar-surface-secondary focus-visible:bg-token-sidebar-surface-secondary z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="icon-xl-heavy"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="flex justify-between items-center p-2 bg-[#1e1e1e] px-4 border-b fixed top-0 w-full z-20">
            <div className="ClashDisplay-Regular">
              <span className={`transition-all duration-300 ease-in-out ${isSidebarVisible ? "pl-64" : "pl-12"}`}>
                {session?.user?.name || "Guest User"}
              </span>
            </div>

            {session ? (
              <div className="w-12 h-12 rounded-full overflow-hidden scale-90">
                <img src={session?.user?.image} alt="Profile Picture" />
              </div>
            ) : (
              <a href="/login">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-[#f75ad5] to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-[#f75ad5] dark:focus:ring-[#f75ad5] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Login
                </button>
              </a>
            )}
          </div>
          <div
            className={`${isSidebarVisible ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out fixed inset-y-0 left-0 w-64 bg-[#1e1e1e] z-20`}
          >
            <SideBar />
          </div>
          <div
            className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarVisible ? "ml-64 md:ml-1/4 lg:ml-1/5" : "ml-0"}`}
          >
            <div className="mt-12 h-[calc(100vh-3rem)] overflow-y-auto">
              <Promote />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
