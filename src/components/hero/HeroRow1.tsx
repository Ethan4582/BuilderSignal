"use client";

import React, { useState } from "react";
import { WordRotate } from "@/src/components/word-rotate";

interface HeroRow1Props {
   data: {
      left: {
         tag: string;
         hoverTag: string;
         title: string;
         hoverTitle: string;
         desc: string;
         href: string;
      };
      right: {
         image: string;
      };
   };
}

export function HeroRow1({ data }: HeroRow1Props) {
   const [hovered, setHovered] = useState(false);

   return (
      <div className="hero-section">
         {/* Left Column - Light Card */}
         <a
            href={data.left.href}
            className="hero-col hero-col-light cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         >
            <div className="flex justify-center w-full">
               <p className="hero-tag">
                  {hovered ? data.left.hoverTag : data.left.tag}
               </p>
            </div>

            <div className="flex justify-center items-center flex-grow w-full">
               <WordRotate
                  words={[data.left.title, data.left.hoverTitle]}
                  isHovered={hovered}
                  className="hero-serif-xl italic"
               />
            </div>

            <div className="flex justify-center w-full">
               <p className={`hero-mono-desc text-[#141414] mb-10 max-w-[80%] transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-50'}`}>
                  {data.left.desc}
               </p>
            </div>
         </a>

         {/* Right Column - Image */}
         <div className="hero-col hero-col-image">
            <img
               src={data.right.image}
               alt="hero section img"
               className="hero-media-fill"
            />
         </div>
      </div>
   );
}
