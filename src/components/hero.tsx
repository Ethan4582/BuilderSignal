import React from "react";
import { globalData } from "@/app/globaldata";
import { HeroRow1 } from "./hero/HeroRow1";
import { HeroRow2 } from "./hero/HeroRow2";
import { HeroRow3 } from "./hero/HeroRow3";
import { HeroRow4 } from "./hero/HeroRow4";

const { hero } = globalData;
const { heroRows, cta } = hero;


const row1Data = heroRows.find((r) => r.id === "row1") as any;
const row2Data = heroRows.find((r) => r.id === "row2") as any;
const row3Data = heroRows.find((r) => r.id === "row3") as any;
const row4Data = heroRows.find((r) => r.id === "row4") as any;

const Hero = () => {
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
        className="items-center flex flex-col h-min justify-center relative w-full gap-[10px] py-[150px] shrink-0 z-30 bg-[#141414] mt-[75vh]"
      >
        <div className="flex flex-col justify-start relative whitespace-pre shrink-0">
          <p className="hero-tag text-[#F2F2F2]">{cta.tag}</p>
        </div>

        <div className="relative">
          <a
            href={cta.href}
            aria-label="CTA Desktop"
            className="items-center flex flex-col h-min justify-center overflow-hidden relative w-[300px] md:w-[680px] text-[#0000EE] gap-[10px]"
          >
            <div className="items-center flex h-min justify-center relative w-full gap-[10px] shrink-0">
              <div className="relative shrink-0">
                <div className="items-center flex flex-col justify-start relative w-min h-[52px] shrink-0">
                  <p className="hero-cta-title text-[#F2F2F2] whitespace-pre z-[1] text-[8vw] md:text-[52px]">
                    {cta.headline}
                  </p>
                </div>
              </div>
            </div>

            <div className="items-center flex h-px justify-start relative w-full gap-[16px] shrink-0">
              <div className="items-center flex justify-center overflow-hidden absolute w-[100%] md:w-[628px] top-0 right-[100%] md:right-[1000px] bottom-0 bg-[#F2F2F2] gap-[10px] pr-[100px] z-[1] shrink-0" />
              <div className="overflow-hidden absolute inset-0 bg-[#F2F2F2] z-[1] shrink-0" />
            </div>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;