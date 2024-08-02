import RetroGrid from '@/components/magicui/retro-grid'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import NumberTicker from '@/components/magicui/number-ticker'
import SparklesText from '@/components/magicui/sparkles-text'


function page() {
    return (
        <div>
            <Navbar />
            <div className="relative flex w-full flex-col items-center justify-center pt-10 overflow-hidden rounded-lg  bg-background md:shadow-xl">

                <div className="z-10 flex  items-center justify-center">
                    <AnimatedGradientText>
                        ✨ <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                        <span
                            className={cn(
                                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                            )}
                        >
                            About Swift Email
                        </span>
                        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedGradientText>
                </div>

                <div className="ClashDisplay-Medium space-y-3 sm:text-6xl text-4xl px-4 text-center pt-10">
                    <SparklesText text="Our cutting-edge AI. powered " className="sm:text-6xl   text-4xl" />
                    <h1 className="gradient-text sm:px-0 font-semibold  px-3">SwiftMail </h1>
                </div>
                <p className='ClashDisplay-Regular container mx-auto text-center py-6  sm:w-[600px] w-full sm:px-0 px-5 sm:text-base text-sm'> SwiftMail—our cutting-edge AI-powered email generation service. Whether you’re a seasoned user or just getting started, this is the place to ask questions, share insights, and connect with fellow SwiftMail enthusiasts.
                </p>

                <div className="container mx-auto px-8  sm:py-32 py-24">
                    <div className="flex md:flex-row flex-col md:gap-4  justify-between items-center gap-16">
                        <div className="grid justify-center items-center text-current ">
                            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]  via-[#ff5bd4] from-[#19bfff] to-[#8c1eff] ClashDisplay-Semibold bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                                <NumberTicker value={5} />+
                            </span>
                            <div className=" text-center text-neutral-400 text-3xl ClashDisplay-Medium ">
                                Internationl User
                            </div>
                        </div>
                        <div className="h-36 md:block hidden  w-[1px] bg-[#585858]"></div>
                        <div className="grid justify-center items-center gap-5">
                            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-l drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]  via-[#ff5bd4] from-[#19bfff] to-[#8c1eff] ClashDisplay-Semibold bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                                <NumberTicker value={50} />+
                            </span>
                            <div className=" text-center text-neutral-400 text-3xl ClashDisplay-Medium ">
                                Generations
                            </div>
                        </div>
                        <div className=" md:block hidden h-36 w-[1px] bg-[#585858]"></div>
                        <div className=" grid justify-center items-center text-center gap-5">
                            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]  via-[#ff5bd4] from-[#19bfff] to-[#8c1eff] ClashDisplay-Semibold bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                                <NumberTicker value={90} />+
                            </span>
                            <div className=" text-center text-neutral-400 text-3xl ClashDisplay-Medium ">
                                Sign in
                            </div>
                        </div>
                    </div>
                </div>
                <SparklesText text="Our Team" className="sm:text-6xl text-center ClashDisplay-Medium  text-4xl" />
                <div className="min-h-screen flex items-center justify-center relative    xl:my-0 my-28 px-6 ">
                    <div className="grid md:grid-cols-2 grid-cols-1  xl:grid-cols-4 gap-8">
                    <img src="/ai-img-1.svg" alt="gradient blur" className="blur-[80px] left-0 w-full absolute -top-16 -z-10   " />
                        <Card
                            name="ahkamboh"
                            role="Co-Creator"
                            description="@SwiftMail | CS Student"
                            image="/p1.png"
                            linkeidn="https://www.linkedin.com/in/ahkamboh/"
                        />
                        <Card
                            name="Syeda Fatima"
                            role="Co-Creator"
                            description="@SwiftMail | CS Student"
                            image="/p2.png"
                            linkeidn="https://www.linkedin.com/in/syeda-fatima-tu-zahra-940784250"
                        />
                        <Card
                            name="Wasif Umair"
                            role="Co-Creator"
                            description="@SwiftMail | CS Student"
                            image="/p3.png"
                            linkeidn="https://www.linkedin.com/in/wasif-umair"
                        />
                        <Card
                            name="Ayesha Ejaz "
                            role="Co-Creator"
                            description="@SwiftMail | CS Student"
                            image="/p4.png"
                            linkeidn="https://www.linkedin.com/in/ayesha-ejaz-59ba4a280"
                        />
                    </div>
                </div>

                <RetroGrid />
            </div>

            <Footer />
        </div>
    )
}
  
export default page