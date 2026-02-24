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
            className="hero-col hero-col-image cursor-pointer flex justify-center items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         >
            <img src={data.left.image} alt="Background" className="hero-media-fill" />

            {/* Glass panel */}
            <div className="relative z-10 flex flex-col items-center justify-between p-8 backdrop-blur-md bg-black/40 rounded-2xl w-[80%] max-w-sm aspect-square border border-white/10 overflow-hidden group">

               <div className="bg-amber-500/90 text-black text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  {data.left.badge}
               </div>

               <div className="bg-[#141414] text-[#F2F2F2] rounded-xl w-32 h-32 flex items-center justify-center p-4">
                  <p className="hero-serif-xl !text-3xl text-center leading-tight whitespace-pre-wrap">
                     SAAS{"\n"}CARTEL
                  </p>
               </div>

               <div className="overflow-hidden relative h-10 w-full flex justify-center items-center">
                  <p className={`hero-serif-xl !text-2xl text-white transition-transform duration-500 ${hovered ? '-translate-y-12 opacity-0' : 'translate-y-0 opacity-100'}`}>
                     {data.left.glassTitle}
                  </p>
                  <p className={`hero-serif-xl !text-2xl text-white absolute transition-transform duration-500 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                     {data.left.hoverTitle}
                  </p>
               </div>
            </div>
         </a>

         {/* Right Column - Dark Card */}
         <div
            className="hero-col hero-col-dark"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         >
            <div className="flex justify-center w-full">
               <p className="hero-tag opacity-70">
                  {data.right.tag}
               </p>
            </div>

            <div className="flex justify-center items-center flex-grow w-full">
               <WordRotate
                  words={[data.right.title, data.right.hoverTitle]}
                  isHovered={hovered}
                  className="hero-serif-xl"
               />
            </div>

            <div className="flex justify-center w-full">
               <p className="hero-mono-desc max-w-[80%] opacity-50">
                  {data.right.desc}
               </p>
            </div>
         </div>
      </div>
   );
}
