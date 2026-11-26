import { BrandIcon } from "./icons";
import { WarmPill } from "./ui";
import ScrollLetters from "./ScrollLetters";
import { PLATFORMS } from "./content";

const ICON_SIZES = { tiktok: 26, x: 24, youtube: 30, meta: 30 };

// Logo strip under the hero. The list renders twice so the -50% marquee loops.
export function PlatformMarquee() {
  return (
    <section className="pt-11 pb-9">
      <p className="mb-[26px] px-6 text-center text-[15px] font-medium text-[#475569]">
        Creates, posts and replies on the accounts you already use
      </p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="lp-marquee gap-14 text-[20px] font-bold tracking-[-.02em]" style={{ animationDuration: "36s" }}>
          {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
            <span key={i} aria-hidden={i >= PLATFORMS.length} className="flex items-center gap-2.5 whitespace-nowrap">
              <BrandIcon name={p.id} size={ICON_SIZES[p.id] ?? 28} />
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutStatement() {
  return (
    <section className="px-6 pt-[30px] pb-[120px] text-center max-sm:pb-20">
      <WarmPill>About Creativeklux</WarmPill>
      <ScrollLetters
        className="font-display mx-auto mt-6 max-w-[1030px] text-[clamp(28px,3.4vw,48px)] leading-[1.2] font-semibold tracking-[-1px]"
        text="Creativeklux is the AI social media and ads manager for brands without a marketing team. Klux designs your creatives, runs your calendar and your ads, answers your customers and tracks your growth."
      />
    </section>
  );
}
