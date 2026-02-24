'use client'

import React, { useState } from 'react'
import { globalData } from '../../app/globaldata'
import NavbarLink from './navbar-link'

const Navbar = () => {
   const { brand, subtitle, menuText, links } = globalData.navbar;
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="fixed inset-x-0 top-0 z-[50] shrink-[0]" style={{ "transform": "perspective(1200px)" }}>
         <nav
            className={`flex flex-col w-full overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen
               ? 'bg-[#F2F2F2] text-[#141414] h-[340px]'
               : 'bg-[#141414] text-[#F2F2F2] h-[38px]'
               }`}
            onMouseLeave={() => setIsOpen(false)}
         >

            <div className="flex items-center justify-between w-full h-[38px] px-[10px] shrink-0">

               <div className="flex-1 flex justify-start">
                  <a href="/" className="text-[15px] leading-[18px] uppercase" style={{ fontFamily: "'Azeret Mono', monospace" }}>
                     {brand}
                  </a>
               </div>


               <div className="flex-1 flex justify-center">
                  <p className="text-[15px] leading-[18px] uppercase transition-all duration-300" style={{ fontFamily: "'Azeret Mono', monospace" }}>
                     {isOpen ? menuText : subtitle}
                  </p>
               </div>


               <div className="flex-1 flex justify-end items-center pr-1 h-full">
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


            <div
               className={`flex flex-col items-center justify-center w-full grow transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-[20px] pointer-events-none'
                  }`}
            >
               <div className="flex flex-col items-center justify-center pt-3 pb-8">
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