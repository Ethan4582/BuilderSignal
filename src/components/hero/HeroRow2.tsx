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
                  className="font-baskervville italic text-[#F2F2F2] whitespace-pre-wrap text-[40px] md:text-[60px] lg:text-[75px] leading-tight"
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
