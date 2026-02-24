'use client'

import React, { useState } from 'react'
import { WordRotate } from './word-rotate'

interface Link {
   id: number;
   label: string;
   href: string;
   tag?: string;
}

interface NavbarLinkProps {
   link: Link;
}

const NavbarLink = ({ link }: NavbarLinkProps) => {
   const [isHovered, setIsHovered] = useState(false)

   return (
      <a
         href={link.href}
         className="group relative flex items-center justify-center w-full min-w-[500px] cursor-pointer"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <div className="relative flex items-center justify-center w-min h-[55px]">

            {/* Implemented EXACTLY like the "youtube" text in hero section row 1 */}
            <WordRotate
               words={[link.label, link.label]}
               isHovered={isHovered}
               height={55}
               className="text-center uppercase text-[#141414] text-[48px] whitespace-nowrap px-1"
               style={{
                  fontFamily: "'Baskervville', serif",
                  fontWeight: 400,
                  lineHeight: '55px',
               }}
            />

            {/* Tag — slides up & fades in on hover */}
            {link.tag && (
               <div
                  className="absolute left-[100%] ml-3 flex items-center translate-y-[10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]"
                  style={{ height: '55px' }}
               >
                  <span
                     className="text-[13px] font-medium tracking-wide whitespace-nowrap text-[#141414]"
                     style={{ fontFamily: "'Azeret Mono', monospace" }}
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
