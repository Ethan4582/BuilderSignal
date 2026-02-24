"use client";

import React, { useState } from 'react';
import Navbar from '@/src/components/navbar';
import Footer from '@/src/components/footer';
import { globalData } from '@/app/globaldata';
import { WordRotate } from '@/src/components/word-rotate';
import { motion } from 'framer-motion';

const AboutMe = () => {
   const [ctaHovered, setCtaHovered] = useState(false);
   const { cta } = globalData.hero;

   return (
      <main className="bg-[#141414] min-h-screen font-sans text-[#F2F2F2]">
         <Navbar />

         {/* Hero Section */}
         <div className="relative pt-[20vh] md:pt-[25vh] pb-[5vh] pl-4 md:pl-10 pr-0 flex flex-col justify-end min-h-[70vh] md:min-h-[85vh] overflow-hidden">
            <div className="absolute right-[5%] top-[15vh] w-full md:w-[35%] h-[50vh] md:h-[70vh] z-0">
               <img
                  src={globalData.hero.heroRows[2].left.photos[0]}
                  alt="Hero"
                  className="w-full h-full object-cover grayscale opacity-90 object-top"
               />
            </div>

            <h1 className="font-baskervville text-[#FFAC16] text-[16.5vw] leading-[0.8] uppercase z-10 relative mt-auto tracking-tight truncate w-[120%] -ml-1">
               {globalData.hero.brandName}
            </h1>
         </div>

         {/* About text section */}
         <div className="px-4 md:px-10 py-[10vh] flex flex-col md:flex-row gap-8 md:gap-32">
            <div className="md:w-1/4">
               <p className="font-azeret uppercase text-[12px] md:text-[14px] text-[#F2F2F2] tracking-wider">(ABOUT ME)</p>
            </div>
            <div className="md:w-3/4 max-w-4xl">
               <p className="font-baskervville text-[20px] md:text-[28px] lg:text-[32px] leading-[1.3] text-[#F2F2F2] mb-12">
                  I’ve dedicated the past ten years to the craft — seeing wins, but mostly gaining wisdom. I’ve founded ventures, stumbled along the way, and navigated the highs of growth and the lows of starting over.
               </p>
               <p className="font-baskervville text-[20px] md:text-[28px] lg:text-[32px] leading-[1.3] text-[#F2F2F2]">
                  Currently, I’m documenting this path as it happens — scaling software, defining identities, and fostering a space for fellow creators. This isn’t chasing quick results. It’s about the daily commitment and the pursuit of excellence — side by side.
               </p>
            </div>
         </div>

         {/* Quote section */}
         <div className="px-4 md:px-10 py-[10vh] flex flex-col md:flex-row gap-8 md:gap-32">
            <div className="md:w-1/4">
               <p className="font-azeret uppercase text-[12px] md:text-[14px] text-[#F2F2F2] tracking-wider">(SPACE)</p>
            </div>
            <div className="md:w-2/3 max-w-3xl">
               <p className="font-baskervville italic text-[#FFAC16] text-[28px] md:text-[40px] lg:text-[46px] leading-[1.1] tracking-tight">
                  The point where relentless effort meets the right moment.
               </p>
            </div>
         </div>

         {/* Positions section */}
         <div className="px-4 md:px-10 py-[10vh] flex flex-col md:flex-row gap-8 md:gap-32 pb-[15vh]">
            <div className="md:w-1/4">
               <p className="font-azeret uppercase text-[12px] md:text-[14px] text-[#F2F2F2] whitespace-pre-wrap tracking-wider leading-relaxed">
                  (WORK WITH ME){'\n'}OPEN POSITIONS
               </p>
            </div>
            <div className="md:w-3/4 flex flex-col font-azeret text-[12px] md:text-[14px] uppercase text-[#F2F2F2] w-full max-w-5xl">
               <div className="flex flex-col md:flex-row py-4 md:py-5 relative gap-2 md:gap-8 group cursor-pointer transition-colors duration-300">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.1 }} className="absolute top-0 left-0 h-[1px] bg-[#F2F2F2]/40" />
                  <div className="md:w-1/4 tracking-wider">[OCIUSX]</div>
                  <div className="md:w-3/4 tracking-wider relative">
                     <span className="relative inline-block pb-1">
                        US BASED: SENIOR SALES EXECUTIVE
                     </span>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row py-4 md:py-5 relative gap-2 md:gap-8 group cursor-pointer transition-colors duration-300">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.1 }} className="absolute top-0 left-0 h-[1px] bg-[#F2F2F2]/40" />
                  <div className="md:w-1/4 tracking-wider">[BTA]</div>
                  <div className="md:w-3/4 tracking-wider relative">
                     <span className="relative inline-block pb-1">
                        REMOTE: EXPERIENCED EDITOR SHORT AND LONG FORM
                     </span>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row py-4 md:py-5 relative gap-2 md:gap-8 group cursor-pointer transition-colors duration-300">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.1 }} className="absolute top-0 left-0 h-[1px] bg-[#F2F2F2]/40" />
                  <div className="md:w-1/4 tracking-wider">[STEALTH MODE]</div>
                  <div className="md:w-3/4 tracking-wider relative">
                     <span className="relative inline-block pb-1">
                        REMOTE: FULL STACK SOFTWARE DEVELOPER
                     </span>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row py-4 md:py-5 relative gap-2 md:gap-8 group cursor-pointer transition-colors duration-300">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.1 }} className="absolute top-0 left-0 h-[1px] bg-[#F2F2F2]/40" />
                  <div className="md:w-1/4 tracking-wider">[PERSONAL]</div>
                  <div className="md:w-3/4 tracking-wider relative">
                     <span className="relative inline-block pb-1">
                        DUBAI: PERSONAL ASSISTENT
                     </span>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row py-4 md:py-5 relative gap-2 md:gap-8 group cursor-pointer transition-colors duration-300">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.1 }} className="absolute top-0 left-0 h-[1px] bg-[#F2F2F2]/40" />
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.1 }} className="absolute bottom-0 left-0 h-[1px] bg-[#F2F2F2]/40" />
                  <div className="md:w-1/4 tracking-wider">[STEALTH MODE]</div>
                  <div className="md:w-3/4 tracking-wider relative">
                     <span className="relative inline-block pb-1">
                        AUSTIN: SENIOR PRODUCT MANAGER & UX DESIGNER
                     </span>
                  </div>
               </div>
            </div>
         </div>

         {/* CTA section copied from Hero */}
         <div
            aria-label="CTA"
            className="items-center flex flex-col h-min justify-center relative w-full gap-0 pt-[100px] pb-[50px] shrink-0 z-30 bg-[#141414]"
         >
            <div className="flex flex-col justify-start relative whitespace-pre shrink-0">
               <p className="hero-tag text-[#F2F2F2] mb-1 tracking-wider">{cta.tag}</p>
            </div>

            <div className="relative">
               <a
                  href={cta.href}
                  aria-label="CTA Desktop"
                  className="hero-cta-link items-center flex flex-col h-min justify-center overflow-hidden relative w-max md:w-max mx-auto text-[#0000EE] gap-0"
                  onMouseEnter={() => setCtaHovered(true)}
                  onMouseLeave={() => setCtaHovered(false)}
               >
                  <div className="items-center flex h-min justify-center relative w-full gap-0 shrink-0">
                     <div className="relative shrink-0">
                        <div className="hero-cta-underline-wrapper items-center flex flex-col justify-start relative w-min h-[60px] md:h-[80px] shrink-0">
                           <WordRotate
                              words={[cta.headline, cta.headline]}
                              isHovered={ctaHovered}
                              height={80}
                              duration={0.8}
                              className="hero-cta-title font-baskervville text-[#F2F2F2] whitespace-nowrap !text-[32px] md:!text-[52px]"
                           />
                        </div>
                     </div>
                  </div>
               </a>
            </div>
         </div>

         <Footer />
      </main>
   );
};

export default AboutMe;