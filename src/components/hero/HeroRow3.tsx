"use client";

import React, { useState } from "react";

interface HeroRow3Props {
   data: {
      left: {
         bg: string;
         tag: string;
         bio: string;
         photos: string[];
         href: string;
      };
      right: {
         video: string;
      };
   };
}

export function HeroRow3({ data }: HeroRow3Props) {
   const [hovered, setHovered] = useState(false);

   return (
      <div className="hero-section">
         {/* Left Column - Cream Card */}
         <a
            href={data.left.href}
            className="hero-col hero-col-cream cursor-pointer transition-colors duration-500 hover:bg-[#EBE5D8]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         >
            <div className="flex w-full justify-center">
               <p className="hero-tag">{data.left.tag}</p>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow w-full relative">
               <div className="w-[197px] h-[246px] overflow-hidden relative">
                  <div className="flex w-full h-full relative">
                     <div className={`w-full h-full absolute transition-transform duration-500 ease-in-out ${hovered ? '-translate-x-full' : 'translate-x-0'}`}>
                        <img src={data.left.photos[0]} className="hero-media-fill" alt="MAX SULLIVAN 1" />
                     </div>
                     <div className={`w-full h-full absolute transition-transform duration-500 ease-in-out ${hovered ? 'translate-x-0' : 'translate-x-full'}`}>
                        <img src={data.left.photos[1]} className="hero-media-fill" alt="MAX SULLIVAN 2" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex justify-center w-full pb-6">
               <p className={`hero-mono-desc text-[#141414] max-w-[80%] transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-70'}`}>
                  {data.left.bio}
               </p>
            </div>
         </a>

         {/* Right Column - Video */}
         <div className="hero-col hero-col-image">
            <video
               src={data.right.video}
               autoPlay
               muted
               loop
               playsInline
               className="hero-media-fill"
            />
         </div>
      </div>
   );
}
