import React from 'react';
import { globalData } from '@/app/globaldata';

const Footer = () => {
  return (
    <footer className="w-full bg-[#141414] overflow-hidden flex flex-col items-center pt-10 pb-1 px-4 md:px-10 z-20 relative -mt-1">

      {/* Brand Text */}
      <div className="w-full flex justify-start md:justify-center items-center pt-6 md:pt-10 pb-0">
        <h1 className="font-baskervville text-[#FFAC16] text-[15vw] md:text-[11.5vw] uppercase leading-none whitespace-nowrap tracking-tight">
          <span className="italic pr-2 md:pr-1">BY</span>
          {globalData.hero.brandName}
        </h1>
      </div>

      {/* Bottom Links */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mt-4 md:mt-4 mb-2">
        {/* Left */}
        <div className="text-left w-full md:w-1/4 flex justify-start">
          <a href="https://ena.supply/" className="footer-link text-left">POWERED BY FOUR CLOVER</a>
        </div>

        {/* Center Left */}
        <div className="text-left w-full md:w-1/4 flex justify-start gap-1">
          <a href="https://www.instagram.com/bymaxsullivan/" className="footer-link">IN</a>
          <span className="text-[#FFAC16] text-[15px] font-azeret">,</span>
          <a href="https://www.youtube.com/@bymaxsullivan" className="footer-link">YT</a>
          <span className="text-[#FFAC16] text-[15px] font-azeret">,</span>
          <a href="https://www.linkedin.com/in/" className="footer-link">LI</a>
        </div>

        {/* Center Right */}
        <div className="text-left w-full md:w-1/4 flex justify-start">
          <a href="mailto:salve@maxsullivan.com" className="footer-link">SALVE@{globalData.hero.brandName.replace(/\s+/g, '').toUpperCase()}.COM</a>
        </div>

        {/* Right */}
        <div className="text-left w-full md:w-1/4 flex justify-start md:justify-end">
          <a href="https://ena.supply/" className="footer-link">©2025</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;