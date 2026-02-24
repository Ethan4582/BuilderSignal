"use client";

import React, { useState } from "react";
import { WordRotate } from "@/src/components/word-rotate";

interface HeroRow2Props {
   data: {
      left: {
         image: string;
         glassTitle: string;
         hoverTitle: string;
         badge: string;
         href: string;
      };
      right: {
         bg: string;
         tag: string;
         title: string;
         hoverTitle: string;
         desc: string;
      };
   };
}

export function HeroRow2({ data }: HeroRow2Props) {
   const [hovered, setHovered] = useState(false);

   return (
      <div className="hero-section">
         {/* Left Column - Image with Glass Panel */}
         <a
            href={data.left.href}
            className="hero-col hero-col-image cursor-pointer flex justify-center  items-center"
         >
            <img src={data.left.image} alt="Background" className="hero-media-fill" />

            {/* Glass panel */}
            <div className="relative z-10 flex flex-col items-center justify-center pb-12 md:p-16 backdrop-blur-2xl bg-[#D6CDC2]/20 rounded-[48px] w-[90%] md:w-[480px] aspect-square border border-white/5 shadow-2xl gap-10 md:gap-16">

               {/* Badge Pill */}
               <div className="flex items-center bg-[#141414] text-[#F8A80E] text-[12px] md:text-[14px] font-semibold p-1 pr-5 rounded-full gap-2 md:gap-3 shrink-0">
                  <span className="bg-[#F8A80E] text-[#141414] px-3 md:px-4 py-1 rounded-full uppercase tracking-wider">
                     Soon
                  </span>
                  <span className="whitespace-nowrap">Launch in Q3 2025</span>
               </div>

               {/* Center Dark Square */}
               <div className="bg-[#141414] text-[#F2F2F2] rounded-[32px] w-[180px] h-[180px] md:w-[220px] md:h-[220px] flex flex-col items-center justify-center p-6 shadow-xl shrink-0">
                  <p className="hero-serif-xl !text-[36px] md:!text-[44px] text-center leading-[1.1] tracking-tight">
                     <span className="italic">SaaS</span><br />CARTEL
                  </p>
               </div>

               {/* Bottom Text */}
               <p className="hero-serif-xl !text-[28px] md:!text-[36px] text-white tracking-wide shrink-0">
                  Join the waitlist
               </p>
            </div>
         </a>

         {/* Right Column - Dark Card */}
         <div
            className="hero-col hero-col-dark cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         >
            <div className="flex justify-center w-full">
               <p className="hero-tag opacity-70 cursor-default">
                  {data.right.tag}
               </p>
            </div>

            <div className="flex justify-center items-center flex-grow w-full">
               <WordRotate
                  words={["SAAS\nCARTEL", "COMMUNITY"]}
                  isHovered={hovered}
                  height={180}
                  className="italic text-[#F2F2F2] whitespace-pre-wrap text-[40px] md:text-[60px] lg:text-[75px] leading-tight"
                  style={{ fontFamily: "'Fahkwang', sans-serif" }}
               />
            </div>

            <div className="flex justify-center w-full">
               <p className="hero-mono-desc max-w-[80%] opacity-50 cursor-default">
                  {data.right.desc}
               </p>
            </div>
         </div>
      </div>
   );
}
