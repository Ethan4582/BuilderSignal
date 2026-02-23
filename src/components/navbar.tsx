'use client'

import React, { useState, useEffect, useRef } from 'react'
import { globalData } from '../../app/globaldata'

// Characters used for the scramble text effect
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

/**
 * Reusable NavbarLink component that implements the Scramble Text animation
 * and the right-side tag reveal on hover.
 */
const NavbarLink = ({ link }: { link: any }) => {
   const [displayText, setDisplayText] = useState(link.label);
   const [isHovered, setIsHovered] = useState(false);
   const intervalRef = useRef<NodeJS.Timeout | null>(null);

   useEffect(() => {
      let iteration = 0;

      if (isHovered) {
         clearInterval(intervalRef.current as NodeJS.Timeout);

         intervalRef.current = setInterval(() => {
            setDisplayText((prev: string) =>
               link.label
                  .split("")
                  .map((letter: string, index: number) => {
                     if (index < iteration) {
                        return link.label[index];
                     }
                     if (link.label[index] === " ") return " ";
                     return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                  })
                  .join("")
            );

            if (iteration >= link.label.length) {
               clearInterval(intervalRef.current as NodeJS.Timeout);
            }

            iteration += 1 / 3; // controls the speed/steps of scramble
         }, 30);
      } else {
         clearInterval(intervalRef.current as NodeJS.Timeout);
         setDisplayText(link.label);
      }
      return () => clearInterval(intervalRef.current as NodeJS.Timeout);
   }, [isHovered, link.label]);

   return (
      <a
         href={link.href}
         className="group relative flex items-center justify-center h-[75px] w-full min-w-[500px] cursor-pointer"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <div className="relative flex items-center justify-center w-min">
            {/* Scrambled Main Label in Baskervville */}
            <span className="font-baskervville text-center uppercase text-[#141414] text-[65px] leading-[1] whitespace-nowrap">
               {displayText}
            </span>

            {/* Tag reveal on the right side */}
            {link.tag && (
               <div
                  className={`absolute left-[105%] flex items-center h-full transition-all duration-300 ease-out ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[10px]'
                     }`}
               >
                  <span className="font-azeret text-[15px] font-medium tracking-tight whitespace-nowrap text-[#141414]">
                     {link.tag}
                  </span>
               </div>
            )}
         </div>
      </a>
   )
}


const Navbar = () => {
   const { brand, subtitle, menuText, links } = globalData.navbar;
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="fixed inset-x-0 top-0 z-[10] shrink-[0]" style={{ "transform": "perspective(1200px)" }}>
         <nav
            className={`flex flex-col w-full overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen
                  ? 'bg-[#F2F2F2] text-[#141414] h-[450px]'
                  : 'bg-[#141414] text-[#F2F2F2] h-[38px]'
               }`}
            onMouseLeave={() => setIsOpen(false)}
         >
            {/* Top Section */}
            <div className="flex items-center justify-between w-full h-[38px] px-[10px] shrink-0">
               {/* Brand Name */}
               <div className="flex-1 flex justify-start">
                  <a href="/" className="font-azeret text-[15px] leading-[18px] uppercase">
                     {brand}
                  </a>
               </div>

               {/* Subtitle / Menu Text */}
               <div className="flex-1 flex justify-center">
                  <p className="font-azeret text-[15px] leading-[18px] uppercase transition-all duration-300">
                     {isOpen ? menuText : subtitle}
                  </p>
               </div>

               {/* Menu Button (Dot) */}
               <div className="flex-1 flex justify-end items-center pr-1 h-full">
                  {/* Expanded click target for the dot so it's easier to hover */}
                  <div
                     className="w-[30px] h-full flex items-center justify-end cursor-pointer"
                     onMouseEnter={() => setIsOpen(true)}
                  >
                     <div
                        className={`aspect-square w-[10px] rounded-[100%] transition-colors duration-300 ${isOpen ? 'bg-[#141414]' : 'bg-[#F2F2F2]'
                           }`}
                     />
                  </div>
               </div>
            </div>

            {/* Links Section */}
            <div
               className={`flex flex-col items-center justify-center w-full grow pointer-events-none transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-[20px]'
                  }`}
            >
               <div className="flex flex-col items-center justify-center pt-2 pb-8">
                  {links.map((link) => (
                     <NavbarLink key={link.id} link={link} />
                  ))}
               </div>
            </div>
         </nav>
      </div>
   )
}

export default Navbar;