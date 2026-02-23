import React from "react";
import { globalData } from "@/app/globaldata";

const { hero } = globalData;
const { row2, row3, row4, row5, cta } = hero;

// ─── sub-components ────────────────────────────────────────────────────────

/** Reusable card top-tag */
function CardTag({ label, color }: { label: string; color: string }) {
  return (
    <p className={`hero-tag ${color}`}>{label}</p>
  );
}

/** Reusable card bottom-description */
function CardDesc({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-0">
      <p className={`hero-card-desc ${color}`}>{text}</p>
    </div>
  );
}

/** Full-bleed image that covers its parent container */
function MediaImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="hero-media-fill" />;
}

/** Full-bleed video that covers its parent container */
function MediaVideo({ src }: { src: string }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className="size-full object-cover overflow-clip"
    />
  );
}

// ─── main component ─────────────────────────────────────────────────────────

const Hero = () => {
  return (
    <div className="hero-root">

      {/* ── ROW 1: Giant name banner ─────────────────────────── */}
      <div
        aria-label="Main"
        className="items-center flex flex-col h-min justify-start overflow-hidden relative w-full gap-[10px] shrink-0"
      >
        <div
          aria-label="Hero"
          className="items-center flex flex-col justify-end overflow-hidden relative w-full h-[720px] gap-[10px] shrink-0"
        >
          <div className="items-center flex h-min justify-center overflow-hidden relative w-full gap-[10px] shrink-0">
            {/* perspective wrapper — truly dynamic transform, kept inline */}
            <div
              aria-label="Name Banner"
              className="flex flex-col justify-start overflow-hidden relative whitespace-pre w-full"
              style={{ transform: "perspective(1200px)" }}
            >
              <img
                src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F90cd8c927de9a6901312cfef3521e7e38f3e7c14.svg?generation=1771885061805532&alt=media"
                alt="background texture"
                className="flex size-full"
              />
              {/* matrix3d perspective — genuinely dynamic, kept inline */}
              <div
                className="flex flex-col justify-start overflow-hidden absolute w-[83%] left-0 top-0 right-0 bottom-0 origin-[0px_0px] shrink-0"
                style={{
                  scale: "1.2",
                  transform:
                    "matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,-0.000833333, 0,0,0,1)",
                }}
              >
                <p className="hero-name">{hero.brandName}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── ROW 2: Founder's Tapes card | video ──────────────── */}
        <div aria-label="Section Featured Projects" className="hero-row">

          {/* Cell L — Founder's Tapes card (light) */}
          <div className="hero-cell-fixed">
            <a
              href={row2.card.href}
              aria-label="Founders Tapes Tile"
              className="hero-card-light"
            >
              {/* top tag */}
              <div className="grow h-px relative w-full basis-0 shrink-0">
                <div className="flex flex-col justify-start absolute whitespace-pre left-[49%] top-0 translate-x-[-50%]">
                  <CardTag label={row2.card.tag} color="text-[#141414]" />
                </div>
              </div>

              {/* title */}
              <div className="relative h-[150px] shrink-0">
                <div className="items-center flex flex-col h-full justify-start overflow-hidden relative w-min">
                  <div className="items-center flex flex-col justify-start relative w-[487px] h-[71px] shrink-0">
                    <p className="hero-card-title text-[#141414] w-full z-[1]">
                      {row2.card.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* bottom description */}
              <div
                aria-label="Bottom Row"
                className="items-center flex flex-col grow h-px justify-end overflow-hidden relative w-full basis-0 gap-[10px] pb-[10px] px-[10px] shrink-0"
              >
                <CardDesc text={row2.card.description} color="text-[#141414]" />
              </div>
            </a>
          </div>

          {/* Cell R — video / image */}
          <div aria-label="Content Projects" className="hero-cell">
            <div className="items-start flex flex-col h-min justify-start relative w-full gap-[40px] shrink-0">
              <div className="items-center aspect-square flex flex-wrap justify-start overflow-hidden relative w-full gap-[40px] shrink-0">
                <div className="size-full relative scale-[1.00652]">
                  <div className="absolute inset-0">
                    <MediaImage src={row2.media.image} alt="Founder's Tapes media" />
                  </div>
                  <div className="absolute w-full left-[-0.17094%] top-0 bottom-0 scale-[1.00652]">
                    <MediaVideo src={row2.media.video} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ROW 3: image | SaaS Cartel dark card ─────────────── */}
        <div aria-label="Section Featured Projects" className="hero-row">

          {/* Cell L — image */}
          <div aria-label="Content Projects" className="hero-cell">
            <div className="items-start flex flex-col h-min justify-start relative w-full gap-[40px] shrink-0">
              <div className="items-center aspect-square flex flex-wrap justify-start overflow-hidden relative w-full gap-[40px] shrink-0">
                <a
                  href={row3.card.href}
                  className="block size-full relative text-[#0000EE] scale-[1.00652]"
                >
                  <div className="absolute inset-0">
                    <MediaImage src={row3.media.image} alt="SaaS Cartel project" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Cell R — SaaS Cartel dark card */}
          <div className="hero-cell-fixed">
            <a aria-label="Community Tile" className="hero-card-dark">
              {/* top tag */}
              <div className="grow h-px relative w-full basis-0 shrink-0">
                <div className="flex flex-col justify-start absolute whitespace-pre left-[49%] top-0 translate-x-[-50%]">
                  <CardTag label={row3.card.tag} color="text-[#D6D1D0]" />
                </div>
              </div>

              {/* title */}
              <div className="relative h-[150px] shrink-0">
                <div className="items-center flex flex-col h-full justify-start overflow-hidden relative w-min">
                  <div className="items-center flex flex-col justify-start relative w-[487px] h-[71px] shrink-0">
                    <p className="hero-card-title text-[#D6D1D0] w-full z-[1]">
                      {row3.card.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* bottom description */}
              <div
                aria-label="Bottom Row"
                className="items-center flex flex-col grow h-px justify-end overflow-hidden relative w-full basis-0 gap-[10px] pb-[10px] px-[10px] shrink-0"
              >
                <CardDesc text={row3.card.description} color="text-[#D6D1D0]" />
              </div>
            </a>
          </div>
        </div>

        {/* ── ROW 4: About card | video ─────────────────────────── */}
        <div aria-label="Section About" className="hero-row">

          {/* Cell L — About cream card */}
          <div className="hero-cell-fixed">
            <a
              href={row4.card.href}
              aria-label="About Tile"
              className="hero-card-cream"
            >
              {/* top tag */}
              <div
                aria-label="(ABOUT)"
                className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-0"
              >
                <CardTag label={row4.card.tag} color="text-[#141414]" />
              </div>

              {/* photo pair */}
              <div className="relative w-[197px] h-[246px] shrink-0">
                <div className="items-center flex size-full justify-center overflow-hidden relative gap-[10px]">
                  <div className="items-center flex size-full justify-start relative shrink-0">
                    {row4.card.images.map((img, i) => (
                      <div
                        key={i}
                        className="size-full overflow-hidden relative shrink-0"
                        style={{ transform: "perspective(1200px)" }}
                      >
                        <div className="absolute inset-0">
                          <img
                            src={img}
                            alt={`About photo ${i + 1}`}
                            className="hero-media-fill"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* bio */}
              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-0">
                <p className="hero-card-desc text-[#141414]">{row4.card.bio}</p>
              </div>
            </a>
          </div>

          {/* Cell R — video */}
          <div aria-label="Image Wrapper" className="aspect-square grow overflow-hidden relative w-px basis-0 shrink-0">
            <div aria-label="Image" className="size-full overflow-hidden absolute left-0 top-0">
              <div className="absolute w-[101%] h-[101%] left-[-0.58547%] top-0 scale-[1.00652]">
                <MediaVideo src={row4.media.video} />
              </div>
            </div>
          </div>
        </div>

        {/* ── ROW 5: journal video | Ledger / Newsletter card ───── */}
        <div aria-label="Section Journal" className="items-center flex flex-wrap h-min justify-center overflow-hidden relative w-full gap-[10px] px-[10px] shrink-0">

          {/* Cell L — video with image overlay */}
          <div aria-label="Content Wrapper" className="hero-cell">
            <div aria-label="Video" className="size-full overflow-hidden relative shrink-0">
              <div className="size-full absolute left-[-0.08547%] top-0 scale-[1.00652]">
                <MediaVideo src={row5.media.video} />
              </div>
              <div aria-label="Image" className="size-full absolute left-0 top-0 scale-[1.00652]">
                <div className="absolute inset-0">
                  <MediaImage src={row5.media.image} alt="Journal media" />
                </div>
              </div>
            </div>
          </div>

          {/* Cell R — Ledger / Newsletter charcoal card */}
          <div className="hero-cell-fixed">
            <a
              href={row5.card.href}
              aria-label="Journal Tile"
              className="hero-card-charcoal"
            >
              {/* top tag */}
              <div className="items-center flex flex-col grow h-px justify-start overflow-hidden relative w-full basis-0 gap-[10px] shrink-0">
                <div className="flex flex-col justify-start relative whitespace-pre shrink-0">
                  <CardTag label={row5.card.tag} color="text-[#F4F6F0]" />
                </div>
              </div>

              {/* middle description */}
              <div className="items-center flex flex-col grow h-px justify-center overflow-hidden relative w-full basis-0 gap-[10px] shrink-0">
                <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[295px] shrink-0">
                  <p className="hero-card-desc text-[#F4F6F0]">{row5.card.description}</p>
                </div>
              </div>

              {/* bottom serif title — "Ledger" */}
              <div className="items-center flex flex-col grow h-px justify-end relative w-full basis-0 px-5 shrink-0">
                <div className="relative shrink-0">
                  <div className="items-center flex flex-col justify-start relative w-[487px] h-[90px] gap-[10px] shrink-0">
                    <p className="hero-card-title text-[#D7D1D0] w-[487px] z-[1] !text-[71px]">
                      {row5.card.title}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* ── CTA strip ──────────────────────────────────────────── */}
        <div
          aria-label="CTA"
          className="items-center flex flex-col h-min justify-center overflow-hidden relative w-full gap-[10px] py-[150px] shrink-0"
        >
          <div className="flex flex-col justify-start relative whitespace-pre shrink-0">
            <p className="hero-tag text-[#F2F2F2]">{cta.tag}</p>
          </div>

          <div className="relative">
            <a
              href={cta.href}
              aria-label="CTA Desktop"
              className="items-center flex flex-col h-min justify-center overflow-hidden relative w-[680px] text-[#0000EE] gap-[10px]"
            >
              {/* headline */}
              <div className="items-center flex h-min justify-center relative w-full gap-[10px] shrink-0">
                <div className="relative shrink-0">
                  <div className="items-center flex flex-col justify-start relative w-min h-[52px] shrink-0">
                    <p className="hero-cta-title text-[#F2F2F2] whitespace-pre z-[1]">
                      {cta.headline}
                    </p>
                  </div>
                </div>
              </div>

              {/* underline decorators */}
              <div className="items-center flex h-px justify-start relative w-full gap-[16px] shrink-0">
                <div className="items-center flex justify-center overflow-hidden absolute w-[628px] top-0 right-[1000px] bottom-0 bg-[#F2F2F2] gap-[10px] pr-[100px] z-[1] shrink-0" />
                <div className="overflow-hidden absolute inset-0 bg-[#F2F2F2] z-[1] shrink-0" />
              </div>
            </a>
          </div>
        </div>

      </div>{/* /Main */}

      {/* buy-template module placeholder — kept for layout parity */}
      <div
        aria-label="Buy Template Module"
        className="items-end flex justify-end fixed w-full h-0 right-0 bottom-0 gap-[10px] z-[10] shrink-0"
      >
        <div className="items-center flex size-min justify-center absolute right-5 bottom-[66px] gap-[10px] min-h-9 min-w-[142px] z-[1] shrink-0" />
      </div>

    </div>
  );
};

export default Hero;