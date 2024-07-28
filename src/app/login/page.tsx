"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

function Page() {
  const router = useRouter();
  const { data: session } = useSession();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (session) {
      router.push('/promote');
    }
  }, [session, router]);

  const handleSignIn = () => {
    signIn('github', { callbackUrl: '/promote' });
  };

  const handleGuest = async () => {
    if (email) {
      try {
        const response = await fetch('/api/guests', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          document.cookie = `guestEmail=${email}; path=/;`;
          router.push('/promote?guest=true');
        } else {
          const data = await response.json();
          setError(data.error || 'Failed to register as a guest');
        }
      } catch (error) {
        setError('Failed to register as a guest');
      }
    } else {
      setError('Please enter your email');
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex flex-col justify-center w-full p-8 space-y-8 bg-black text-white md:max-w-xl md:mx-auto">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold ClashDisplay-Medium">Welcome to Swift Mail</h1>
          <p className="text-muted-foreground ClashDisplay-Regular">Write Cold Emails in no time</p>
        </div>
        <button 
          onClick={handleSignIn} 
          className="  flex gap-1 group  ClashDisplay-Regular  items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-zinc-900 text-white"
        >
   <div className="p-1 rounded-full transition-colors duration-500 bg-black group-hover:bg-gradient-to-br group-hover:from-[#f75ad5] group-hover:to-blue-600">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
</div>

           <span>Sign in with GitHub</span>
        </button>
        <div className="flex items-center space-x-2">
          <hr className="flex-1 border-muted-foreground" />
          <span className="text-sm text-muted-foreground ClashDisplay-Regular">or Guest Mode</span>
          <hr className="flex-1 border-muted-foreground" />
        </div>
        <form className="space-y-4 ClashDisplay-Regular" onSubmit={(e) => { e.preventDefault(); handleGuest(); }}>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email address</label>
            <input
              className="flex h-10 w-full rounded-md border text-gray-500 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              id="email"
              placeholder="ahk@alihamzakamboh.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button 
            type="submit"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-gradient-to-br from-[#f75ad5] to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-[#f75ad5] dark:focus:ring-[#f75ad5] text-white"
          >
            Continue as  guest mode {" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
      <div className="ClashDisplay-Medium  sm flex background-card flex-col items-center justify-center w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-12 md:py-0">
        <img src="/chatbot.png" alt="EmailGenie Logo" className="w-48 h-48" width="200" height="200" style={{ aspectRatio: '200/200', objectFit: 'cover' }} />
        <h2 className="mt-8 text-3xl font-bold text-center 2xl:px-4 md:px-12 px-14">Revolutionize Your Cold Email Game With Swift Mail</h2>
      </div>
    </div>
  );
}

export default Page;
