"use client";

import React, { useState } from "react";
import { globalData } from "@/app/globaldata";
import { HeroRow1 } from "./hero/HeroRow1";
import { HeroRow2 } from "./hero/HeroRow2";
import { HeroRow3 } from "./hero/HeroRow3";
import { HeroRow4 } from "./hero/HeroRow4";
import { WordRotate } from "@/src/components/word-rotate";

const { hero } = globalData;
const { heroRows, cta } = hero;


const row1Data = heroRows.find((r) => r.id === "row1") as any;
const row2Data = heroRows.find((r) => r.id === "row2") as any;
const row3Data = heroRows.find((r) => r.id === "row3") as any;
const row4Data = heroRows.find((r) => r.id === "row4") as any;

const Hero = () => {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section className="bg-[#141414] relative text-[12px] font-sans overflow-hidden w-full">

      <div className="relative w-full z-10">


        <div className="absolute top-0 left-0 right-0 h-[200vh] pointer-events-none z-0">
          <div className="sticky top-0 h-[86vh] flex flex-col items-center justify-end pb-[50px] pointer-events-auto">
            <h1
              className="font-semibold text-center uppercase text-[#F2F2F2] text-[12vw] leading-none"
              style={{ fontFamily: "'Baskervville', serif" }}
            >
              {hero.brandName}
            </h1>
          </div>
        </div>


        <div className="relative z-20 top-[81vh] px-[11px] flex flex-col gap-[11px]">
          {row1Data && <HeroRow1 data={row1Data} />}
          {row2Data && <HeroRow2 data={row2Data} />}
          {row3Data && <HeroRow3 data={row3Data} />}
          {row4Data && <HeroRow4 data={row4Data} />}
        </div>
      </div>


      <div
        aria-label="CTA"
        className="items-center flex flex-col h-min justify-center relative w-full gap-0 pt-[150px] pb-[50px] shrink-0 z-30 bg-[#141414] mt-[75vh]"
      >
        <div className="flex flex-col justify-start relative whitespace-pre shrink-0">
          <p className="hero-tag text-[#F2F2F2] mb-1">{cta.tag}</p>
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
                    className="hero-cta-title text-[#F2F2F2] whitespace-nowrap !text-[32px] md:!text-[52px]"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;