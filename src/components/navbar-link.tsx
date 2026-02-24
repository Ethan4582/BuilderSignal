'use client'

import React, { useState } from 'react'

interface Link {
   id: number;
   label: string;
   href: string;
   tag?: string;
}

interface NavbarLinkProps {
   link: Link;
}

/**
 * NavbarLink with the exact same text-hover animation
 * used in the hero section (HeroRow2 glass panel style).
 * Pure CSS translateY + opacity flip — no WordRotate wrapper needed.
 */
const NavbarLink = ({ link }: NavbarLinkProps) => {
   const [isHovered, setIsHovered] = useState(false)

   const textStyle: React.CSSProperties = {
      fontFamily: "'Baskervville', serif",
      fontWeight: 400,
   }

   const tagStyle: React.CSSProperties = {
      fontFamily: "'Azeret Mono', monospace",
   }

   return (
      <a
         href={link.href}
         className="relative flex items-center justify-center w-full min-w-[500px] cursor-pointer"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <div className="relative flex items-center justify-center w-min">

            {/* Text flip container — same approach as HeroRow2 glass panel */}
            <div className="overflow-hidden relative h-[55px] flex justify-center items-center">
               {/* Default text — slides up and out on hover */}
               <p
                  className="text-center uppercase text-[#141414] text-[48px] leading-[55px] whitespace-nowrap px-1 transition-all duration-500"
                  style={{
                     ...textStyle,
                     transform: isHovered ? 'translateY(-55px)' : 'translateY(0)',
                     opacity: isHovered ? 0 : 1,
                  }}
               >
                  {link.label}
               </p>

               {/* Hover text — slides up into view from below */}
               <p
                  className="absolute text-center uppercase text-[#141414] text-[48px] leading-[55px] whitespace-nowrap px-1 transition-all duration-500"
                  style={{
                     ...textStyle,
                     transform: isHovered ? 'translateY(0)' : 'translateY(55px)',
                     opacity: isHovered ? 1 : 0,
                  }}
               >
                  {link.label}
               </p>
            </div>

            {/* Tag reveal on hover — right side */}
            {link.tag && (
               <div
                  className="absolute left-[100%] ml-3 flex items-center h-full"
                  style={{
                     transition: 'all 400ms cubic-bezier(0.76, 0, 0.24, 1)',
                     opacity: isHovered ? 1 : 0,
                     transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                  }}
               >
                  <span
                     className="text-[13px] font-medium tracking-wide whitespace-nowrap text-[#141414]"
                     style={tagStyle}
                  >
                     {link.tag}
                  </span>
               </div>
            )}
         </div>
      </a>
   )
}

export default NavbarLink;
