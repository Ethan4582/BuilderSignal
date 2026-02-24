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

const NavbarLink = ({ link }: NavbarLinkProps) => {
   const [isHovered, setIsHovered] = useState(false)

   return (
      <a
         href={link.href}
         className="group relative flex items-center justify-center w-full min-w-[500px] cursor-pointer"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <div className="relative flex items-center justify-center w-min">

            {/* Simple label with an underline hover animation */}
            <div className="relative flex justify-center items-center h-[55px]">
               <p
                  className="relative text-center uppercase text-[#141414] text-[48px] whitespace-nowrap px-1 inline-block
                             after:content-[''] after:absolute after:bottom-[8px] after:left-[4px] after:right-[4px] after:h-[3px] 
                             after:bg-[#141414] after:origin-left after:scale-x-0 group-hover:after:scale-x-100 
                             after:transition-transform after:duration-300 after:ease-out"
                  style={{
                     fontFamily: "'Baskervville', serif",
                     fontWeight: 400,
                     lineHeight: '55px',
                  }}
               >
                  {link.label}
               </p>
            </div>

            {/* Tag — slides up & fades in on hover (unchanged) */}
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
