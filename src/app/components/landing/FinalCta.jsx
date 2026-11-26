import Image from "next/image";
import { BrandIcon } from "./icons";
import DemoVideoButton from "./DemoVideoButton";

// White platform tiles floating around the headline. left/top are % of the panel.
const TILES = [
  { icon: "facebook", left: 11.1, top: 15.4, size: 60, iconSize: 30, rotate: -6 },
  { icon: "instagram", left: 18.9, top: 40.4, size: 52, iconSize: 26, rotate: -6, delay: -2 },
  { icon: "linkedin", left: 6.7, top: 60, size: 48, iconSize: 22, rotate: -4, delay: -4 },
  { icon: "tiktok", left: 88.9, top: 14.1, size: 58, iconSize: 28, rotate: 6, delay: -1 },
  { icon: "youtube", left: 81.1, top: 39.1, size: 52, iconSize: 28, rotate: 4, delay: -3 },
  { icon: "x", left: 93.3, top: 60, size: 48, iconSize: 20, rotate: 4, delay: -5 },
];

// Fanned row of creatives running off the bottom edge; the middle card stands
// tallest. `top` staggers them; the panel clips their bottoms.
const CARDS = [
  { img: "creative-09.jpg", alt: "Grow on social without burnout event creative", w: 150, top: 78, outer: true },
  { img: "creative-01.jpg", alt: "Headphones sale creative", w: 170, top: 33 },
  { img: "creative-02.jpg", alt: "New season fashion creative", w: 185, top: 0 },
  { img: "creative-03.jpg", alt: "Skincare testimonial creative", w: 170, top: 33 },
  { img: "creative-04.jpg", alt: "Career coaching creative", w: 150, top: 78, outer: true },
];

export default function FinalCta() {
  return (
    <section className="px-3 pt-5 pb-10">
      <div
        className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[34px] px-8 pt-[54px] text-center text-white max-sm:rounded-[28px] max-sm:px-5 max-sm:pt-14"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 0%, #2f5cff 0%, rgba(47,92,255,0) 70%), radial-gradient(60% 50% at 50% 100%, #2448e0 0%, rgba(36,72,224,0) 70%), #1a3bd0",
        }}
      >
        {TILES.map((t) => (
          <span
            key={t.icon}
            className="lp-float absolute flex items-center justify-center rounded-[16px] bg-white shadow-[0_16px_36px_rgba(6,18,80,.35)] max-[860px]:hidden"
            style={{
              left: `${t.left}%`,
              top: `${t.top}%`,
              width: t.size,
              height: t.size,
              margin: -t.size / 2,
              rotate: `${t.rotate}deg`,
              animationDelay: t.delay ? `${t.delay}s` : undefined,
            }}
          >
            <BrandIcon name={t.icon} size={t.iconSize} />
          </span>
        ))}

        <div className="relative mx-auto max-w-[640px]">
          <h2 className="font-display text-[clamp(40px,4.5vw,60px)] leading-[1.06] font-bold tracking-[-.04em]">
            Let AI run your social <br className="max-sm:hidden" />
            media, <span className="font-accent tracking-[-.01em]">starting today</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[420px] text-[16px] leading-[1.6] text-white/85">
            Your first creatives are free. Connect an account and meet your copilot in five minutes.
          </p>
          <div className="mt-[26px] flex flex-wrap justify-center gap-2.5">
            <a
              href="#deal"
              className="rounded-full bg-white px-[26px] py-[13px] text-[15px] font-semibold text-[#1a3bd0] shadow-[0_10px_30px_rgba(6,18,80,.25)] transition-transform hover:-translate-y-0.5 hover:text-[#1a3bd0]"
            >
              Start free trial
            </a>
            <DemoVideoButton className="rounded-full border-[1.5px] border-white/60 px-[24px] py-[12px] text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10">
              See a demo
            </DemoVideoButton>
          </div>
        </div>

        <div className="relative mx-auto mt-9 flex h-[235px] items-start justify-center gap-[13px] max-sm:h-[190px]">
          {CARDS.map((c, i) => (
            <div
              key={c.img}
              className={`lp-reveal relative aspect-[4/5] shrink-0 overflow-hidden rounded-t-[12px] shadow-[0_-10px_40px_rgba(6,18,80,.25)] ${c.outer ? "max-sm:hidden" : ""}`}
              style={{ width: c.w, marginTop: c.top, animationDelay: `${i * 0.08}s` }}
            >
              <Image src={`/images/landing/${c.img}`} alt={c.alt} fill sizes="185px" className="object-cover object-top" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
