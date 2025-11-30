"use client";
import Header from "../layout/Header";
import { Button } from "../ui/button";
import heroImg from "../../../public/images/hero/hero-img.png";
import Image from "next/image";
import { useEffect, useState } from 'react'; // useState এবং useEffect ইম্পোর্ট করা হয়েছে

// পূর্বের AOS-এর সমস্ত ইম্পোর্ট এখন অপ্রয়োজনীয়, তাই সেগুলো সরানো হয়েছে।
// import AOS from 'aos'; 
// import 'aos/dist/aos.css'; 

export function Hero() {
  // state তৈরি করা হয়েছে যাতে কম্পোনেন্ট মাউন্ট হওয়ার পর CSS ক্লাস যোগ করা যায়
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // কম্পোনেন্ট মাউন্ট হওয়ার পরে state আপডেট করা হয়েছে, 
    // যা CSS-এর মাধ্যমে অ্যানিমেশন ট্রিগার করবে
    setIsMounted(true);
    
    // যেহেতু AOS ব্যবহার করা হচ্ছে না, তাই কোনো cleanup বা window.onload লজিকের প্রয়োজন নেই।
  }, []);

  return (
    // isMounted state-এর উপর ভিত্তি করে `mounted` ক্লাস যুক্ত করা হয়েছে
    <section className={`w-full relative min-h-screen bg-[#F2F2F2] overflow-hidden flex flex-col ${isMounted ? 'mounted' : ''}`}>
      
      {/* ==================== Custom CSS for Animation ==================== */}
      <style jsx global>{`
        @keyframes fire-scroll {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: -250% center; /* 200% width to ensure seamless loop */
          }
        }

        /* নিচের দিক থেকে ইমেজ উপরে স্লাইড করার জন্য keyframe */
        @keyframes slideUpFromBottom {
          0% {
            opacity: 0;
            transform: translateY(100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* টেক্সট এবং বাটনের জন্য ফেড-ইন keyframe */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* সমস্ত অ্যানিমেটেড উপাদানকে প্রাথমিকভাবে লুকিয়ে রাখা হয়েছে (opacity: 0) */
        .animate-on-load {
          opacity: 0;
        }

        /* কম্পোনেন্ট মাউন্ট হওয়ার পরে (mounted ক্লাসে) অ্যানিমেশন প্রয়োগ করা হয়েছে */
        
        /* ইমেজের অ্যানিমেশন */
        .mounted .image-slide-up {
          animation: slideUpFromBottom 1s ease-out 0.8s forwards; /* 0.8s পরে শুরু হবে */
        }

        /* সাধারণ ফেড-ইন অ্যানিমেশন */
        .mounted .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        /* ফায়ার লাইন অ্যানিমেশন */
        .animated-fire-line {
          /* Fire-like gradient with purple and subtle orange/red tones */
          background: linear-gradient(
            90deg,
            #111111 0%, /* Dark base */
            #7c3aed 10%, /* Purple glow */
            #a855f7 20%, /* Lighter purple */
            #f59e0b 30%, /* Orange-ish fire start */
            #dc2626 40%, /* Red-ish fire */
            #7c3aed 50%, /* Center purple glow */
            #dc2626 60%, /* Red-ish fire */
            #f59e0b 70%, /* Orange-ish fire end */
            #a855f7 80%,
            #7c3aed 90%,
            #111111 100% /* Dark base */
          );
          background-size: 200% 100%; /* Make the background wider than the container */
          animation: fire-scroll 8s linear infinite; /* Animation duration and type */
        }

        /* Staggered delays for text elements */
        .mounted .text-futuristic {
          animation-delay: 0.2s;
        }

        .mounted .text-new {
          animation-delay: 0.3s;
        }

        .mounted .text-digital {
          animation-delay: 0.4s;
        }

        .mounted .text-universe {
          animation-delay: 0.5s;
        }
        
        .mounted .text-bar {
          animation-delay: 0.6s;
        }

        /* বাটন কনটেইনারের অ্যানিমেশন */
        .mounted .buttons-container {
          animation: fadeInUp 0.8s ease-out 0.7s forwards;
        }
      `}</style>
      
      {/* ==================== BACKGROUND SHAPES & DECORATIONS (z-10) ==================== */}
      
      {/* Shape 1: মাঝখানের জিগজ্যাগ কালো লাইন (Animated Fire Line) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 mt-24">
        <div 
          className="w-full h-full bg-black opacity-100 relative"
          style={{
            clipPath: "polygon(0% 49%, 45% 49%, 58% 36%, 100% 36%, 100% 38%, 58% 38%, 45% 51%, 0% 51%)"
          }}
        >
          <div className="animated-fire-line absolute inset-0"></div>
        </div>
      </div>

      {/* Shape 2: নিচের বাম পাশের কালো শেপ (Bottom Left Shape) */}
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

      {/* ==================== HEADER (z-40) ==================== */}
      <div className="z-40 relative w-full">
        <Header />
      </div>


      {/* ==================== MAIN CONTENT (z-50) ==================== */}
      <div className="relative z-50 flex flex-col lg:flex-row justify-between gap-10 max-w-7xl mx-auto pl-10 w-full mt-10">

        
        <div className="flex flex-col space-y-6 text-purple-700 lg:w-1/2 lg:mt-0">
          {/* Futuristic Text */}
          <p 
            className="text-sm font-bold tracking-widest text-purple-600 uppercase fade-in-up text-futuristic animate-on-load"
          >
            Futuristic
          </p> 
          
          <div className="space-y-2">
            {/* NEW Text */}
            <h1 
              className="scroll-m-20 text-7xl lg:text-7xl font-extrabold tracking-tight text-balance mt-10 lg:mt-0 uppercase leading-tight fade-in-up text-new animate-on-load"
            >
              NEW <span className="relative">
                    DIGITAL
                    <svg className="absolute -top-4 -right-12 w-28 h-14 text-gray-400 opacity-50" viewBox="0 0 100 50" fill="none" stroke="currentColor">
                        <path d="M0,50 Q50,0 100,20" strokeWidth="1" />
                    </svg>
              </span>
            </h1>
            
            {/* UNIVERSE Text */}
            <h2 
              className="scroll-m-20 text-4xl lg:text-7xl font-extrabold tracking-tight text-balance uppercase leading-tight fade-in-up text-universe animate-on-load"
            >
              UNIVERSE
            </h2>
          
            {/* Purple Bar */}
            <div className="w-24 h-7 bg-[#7C3AED] mt-4 fade-in-up text-bar animate-on-load"></div>
          </div>

          {/* Buttons */}
          <div className="flex gap-x-4 mt-24 buttons-container animate-on-load">
          
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

      
        {/* Image - স্লাইড-আপ ক্লাস প্রয়োগ করা হয়েছে */}
        <div className="relative flex justify-end items-end">
           <div className="relative w-full max-w-[675px] h-auto -mt-78 image-slide-up animate-on-load">
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