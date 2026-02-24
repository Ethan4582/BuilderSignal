"use client";

import React, { useState } from "react";
import { WordRotate } from "@/src/components/word-rotate";

interface HeroRow4Props {
   data: {
      left: {
         image: string;
         video: string;
      };
      right: {
         bg: string;
         tag: string;
         desc: string;
         title: string;
         href: string;
      };
   };
}

export function HeroRow4({ data }: HeroRow4Props) {
   const [hovered, setHovered] = useState(false);

   return (
      <div className="hero-section">
         {/* Left Column - Video/Image */}
         <div className="hero-col hero-col-image">
            <img src={data.left.image} className="hero-media-fill" alt="Newsletter Visual" />
         </div>

         {/* Right Column - Charcoal Card (Ledger/Newsletter) */}
         <a
            href={data.right.href}
            className="hero-col hero-col-charcoal cursor-pointer transition-colors duration-500 hover:bg-[#2D2D2D]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         >
            <div className="flex justify-center w-full">
               <p className="hero-tag opacity-70 cursor-default">{data.right.tag}</p>
            </div>

            <div className="flex justify-center items-center flex-grow w-[90%] shrink-0">
               <p className="hero-mono-desc max-w-sm text-center whitespace-pre-wrap leading-relaxed opacity-60">
                  {`MY THOUGHTS ABOUT BUILDING,\nSAAS NEWS AND OTHER\nSTARTUP RELATED STUFF.`}
               </p>
            </div>

            <div className="flex justify-center items-center w-full mb-16">
               <WordRotate
                  words={["LEDGER", "NEWSLETTER"]}
                  isHovered={hovered}
                  height={80}
                  className="hero-serif-lg font-baskervville text-[#D7D1D0] italic text-[32px] md:text-[40px]"
               />
            </div>
         </a>
      </div>
   );
}
