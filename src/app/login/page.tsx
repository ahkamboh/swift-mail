"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

function Page() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    // Redirect to the promote page if the user is already authenticated
    if (session) {
      router.push('/promote');
    }
  }, [session, router]);

  const handleSignIn = () => {
    signIn('github', { callbackUrl: '/promote' });
  };

  const handleGuest = () => {
    router.push('/promote?guest=true');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex flex-col justify-center w-full p-8 space-y-8 bg-black text-white md:max-w-xl md:mx-auto">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold ClashDisplay-Medium">Welcome to EmailGenie</h1>
          <p className="text-muted-foreground ClashDisplay-Regular">Write Cold Emails in no time</p>
        </div>
        <button 
          onClick={handleSignIn} 
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#5169c3] ClashDisplay-Regular text-white gap-2"
        >
          <img src="/google-logo.svg" alt="google-logo" className='scale-[.85]'/>
          Continue with Google
        </button>
        <button onClick={handleSignIn}>Sign in with GitHub</button>
        <button 
          onClick={handleGuest} 
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-gray-500 text-white"
        >
          Continue as Guest
        </button>
        <div className="flex items-center space-x-2">
          <hr className="flex-1 border-muted-foreground" />
          <span className="text-sm text-muted-foreground ClashDisplay-Regular">or register with your email</span>
          <hr className="flex-1 border-muted-foreground" />
        </div>
        <form className="space-y-4 ClashDisplay-Regular">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email address</label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              id="email"
              placeholder="ahk@alihamzakamboh.com"
            />
          </div>
        </form>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#129dbc] text-white">
          Continue{" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-2">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
        <p className="text-center ClashDisplay-Regular text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="#" className="text-blue-500">Login</a>
        </p>
      </div>
      <div className="ClashDisplay-Medium flex background-card flex-col items-center justify-center w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-12 md:py-0">
        <img src="/chatbot.png" alt="EmailGenie Logo" className="w-48 h-48" width="200" height="200" style={{ aspectRatio: '200/200', objectFit: 'cover' }} />
        <h2 className="mt-8 text-3xl font-bold text-center 2xl:px-4 md:px-12 px-14">Revolutionize Your Cold Email Game With EmailGenie</h2>
      </div>
    </div>
  );
}

export default Page;
