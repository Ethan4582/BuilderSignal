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
            {data.left.video ? (
               <video
                  src={data.left.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="hero-media-fill"
               />
            ) : (
               <img src={data.left.image} className="hero-media-fill" alt="Newsletter Visual" />
            )}
         </div>

         {/* Right Column - Charcoal Card (Ledger/Newsletter) */}
         <a
            href={data.right.href}
            className="hero-col hero-col-charcoal cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         >
            <div className="flex justify-center w-full">
               <p className="hero-tag">{data.right.tag}</p>
            </div>

            <div className="flex justify-center items-center flex-grow w-full shrink-0">
               <p className="hero-mono-desc max-w-sm">
                  {data.right.desc}
               </p>
            </div>

            <div className="flex justify-center w-full">
               <WordRotate
                  words={[data.right.title, data.right.title]} // Same word, animated on hover
                  isHovered={hovered}
                  className="hero-serif-lg text-[#D7D1D0]"
               />
            </div>
         </a>
      </div>
   );
}
