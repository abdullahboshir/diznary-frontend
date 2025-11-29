"use client";

import Header from "../layout/Header";
import { Button } from "../ui/button";
import heroImg from "../../../public/images/hero/hero-img.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full relative min-h-screen bg-[#F2F2F2] overflow-hidden flex flex-col">
      
   <div className="absolute inset-0 w-full h-full pointer-events-none z-10 mt-24">
  <div 
    className="w-full h-full bg-black opacity-100"
    style={{
    clipPath: "polygon(0% 49%, 45% 49%, 58% 36%, 100% 36%, 100% 38%, 58% 38%, 45% 51%, 0% 51%)"
    }}
  ></div>
</div>

      <div 
        className="absolute bottom-0 left-0 h-20 w-1/2 bg-[#111111] z-10 hidden lg:block" 
        style={{ clipPath: "polygon(0 0, 75% 0, 100% 100%, 0% 100%)" }}
      >
    
        <div className="flex items-center gap-10 h-full px-12 text-gray-400/80">
            <div className="flex items-center gap-2 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-infinity"><path d="M12 12c.9-1.2 1.8-1.7 3-1.7a3 3 0 0 1 3 3c0 1.6-1.5 3.1-3.5 3.7c-.8.2-1.7.3-2.5.3-2.5 0-4.8-.9-6.6-2.6-.9-.9-1.7-2-2-4.1"/><path d="M12 12c-.9 1.2-1.8 1.7-3 1.7a3 3 0 0 1-3-3c0-1.6 1.5-3.1 3.5-3.7.8-.2 1.7-.3 2.5-.3 2.5 0 4.8.9 6.6 2.6.9.9 1.7 2 2 4.1"/></svg>
                <span>AetherCo</span>
            </div>
            <div className="flex items-center gap-2 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <span>PulseDev</span>
            </div>
        </div>
      </div>

      <div className="z-40 relative w-full">
        <Header />
      </div>

  
      <div className="relative z-50 flex flex-col lg:flex-row justify-between gap-10 max-w-7xl mx-auto pl-10 w-full mt-10">

       
        <div className="flex flex-col space-y-6 text-purple-700 lg:w-1/2 lg:mt-0">
          <p className="text-sm font-bold tracking-widest text-purple-600 uppercase">Futuristic</p> 
          <div className="space-y-2">
            <h1 className="scroll-m-20 text-7xl lg:text-7xl font-extrabold tracking-tight text-balance mt-10 lg:mt-0 uppercase leading-tight">
              NEW DIGITAL 
              <span className="relative">
                    <svg className="absolute -top-4 -right-12 w-28 h-14 text-gray-400 opacity-50" viewBox="0 0 100 50" fill="none" stroke="currentColor">
                        <path d="M0,50 Q50,0 100,20" strokeWidth="1" />
                    </svg>
              </span>
            </h1>
            <h2 className="scroll-m-20 text-4xl lg:text-7xl font-extrabold tracking-tight text-balance uppercase leading-tight">
              UNIVERSE
            </h2>
         
            <div className="w-24 h-7 bg-[#7C3AED] mt-4"></div>
          </div>

          <div className="flex gap-x-4 mt-24">
         
            <Button
              variant={"secondary"}
              size={'lg'}
              className="px-8 bg-[#7C3AED] text-white font-bold rounded-full hover:bg-purple-700 border-none text-lg h-10 shadow-lg"
            >
              Get Started
            </Button>

            <Button
              variant={"outline"}
              size={'lg'}
              className="px-8 font-bold rounded-full border border-black bg-transparent text-black text-lg h-10 hover:bg-gray-100"
            >
              Consultation free
            </Button>
          </div>
        </div>

    
        <div className="relative flex justify-end items-end">
           <div className="relative w-full max-w-[675px] h-auto -mt-78">
              <Image
                src={heroImg}
                alt="Hero Image"
                width={1000}
                height={1000}
                priority
                className="w-full h-full object-contain drop-shadow-2xl"
              />
           </div>
        </div>

      </div>
    </section>
  );
}