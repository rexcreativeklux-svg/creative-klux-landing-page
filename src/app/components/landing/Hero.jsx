import { ArrowRightIcon, PlayIcon } from "./icons";
import { ButtonLink } from "./ui";
import DemoVideoButton from "./DemoVideoButton";
import HeroDashboard from "./HeroDashboard";
import StickyNav from "./StickyNav";
import { DEAL_ENDS } from "./content";

// Headline, split into letters that fade in one after another (35ms apart).
// Each word is an unbreakable inline-block so lines still wrap between words.
const HEADLINE = [
  { text: "The AI that runs your" },
  { text: "social media & ads", className: "text-[#1447e6]" },
  { text: "for you" },
];
const LETTER_STAGGER = 0.035;
const LETTER_START = 0.15;

function LetterReveal({ parts }) {
  let n = 0;
  return parts.map((part, p) => (
    <span key={p} className={part.className}>
      {part.text.split(" ").map((word, w, words) => (
        <span key={w}>
          <span className="inline-block whitespace-nowrap">
            {[...word].map((ch, c) => (
              <span key={c} className="lp-letter" style={{ animationDelay: `${(LETTER_START + n++ * LETTER_STAGGER).toFixed(3)}s` }}>
                {ch}
              </span>
            ))}
          </span>
          {(w < words.length - 1 || p < parts.length - 1) && " "}
        </span>
      ))}
    </span>
  ));
}

function DealBar() {
  return (
    <a
      href="#deal"
      className="flex flex-wrap items-center justify-center gap-3 bg-[#0b1220] px-4 py-[11px] text-[14px] font-medium text-white hover:text-white max-sm:gap-2 max-sm:px-3 max-sm:text-[13px]"
    >
      <span className="max-sm:hidden">
        Lifetime deal is live: pay once, get Creativeklux forever.
        {DEAL_ENDS && ` Deal ends ${DEAL_ENDS}.`}
      </span>
      <span className="sm:hidden">Lifetime deal is live</span>
      <span className="font-bold whitespace-nowrap text-[#9db4ff]">Grab the deal →</span>
    </a>
  );
}

export default function Hero() {
  return (
    <>
      <DealBar />
      <StickyNav />
      <header className="px-3 pt-3">
        <div
          className="relative overflow-hidden rounded-[30px] px-6 pt-4"
          style={{
            background:
              "radial-gradient(55% 60% at 0% 0%,#cfdcff 0%,rgba(207,220,255,0) 70%),radial-gradient(50% 60% at 100% 10%,#f1dcff 0%,rgba(241,220,255,0) 70%),radial-gradient(60% 50% at 50% 100%,#dbe6ff 0%,rgba(219,230,255,0) 70%),#f6f8ff",
          }}
        >
          {/* Room for the sticky nav, which floats over this spot (see StickyNav) */}
          <div aria-hidden="true" className="h-[58px] max-sm:h-[54px]" />

          <div className="relative z-[2] mx-auto max-w-[900px] py-10 text-center">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pr-4 pl-1.5 text-[14px] font-semibold shadow-[0_6px_20px_rgba(20,71,230,.12)]">
              <span className="lp-shine rounded-full px-3 py-1 text-[12px] font-bold text-white">New</span>
              New: ads on autopilot, with spend limits you set
            </span>
            <h1
              aria-label="The AI that runs your social media & ads for you"
              className="font-display mt-6 text-[clamp(42px,6vw,80px)] leading-[.98] font-bold"
            >
              <span aria-hidden="true">
                <LetterReveal parts={HEADLINE} />
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] text-[19px] leading-[1.6] text-[#3b4a63]">
              Klux designs your posts, ads, product photos and videos, publishes on every platform,
              answers every DM and comment, and puts your ad budget behind what works.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="#deal" variant="blue" className="px-[30px] py-[17px] text-[16px] font-bold">
                Get lifetime access
                <ArrowRightIcon />
              </ButtonLink>
              <DemoVideoButton className="flex items-center gap-2.5 rounded-full bg-white px-[26px] py-[17px] text-[16px] font-bold text-[#0b1220] shadow-[0_0_0_1px_#dfe5f2] hover:shadow-[0_0_0_1px_#b6bfcf]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b1220]">
                  <PlayIcon />
                </span>
                Watch 2-min demo
              </DemoVideoButton>
            </div>
            <div className="mt-[18px] flex flex-wrap justify-center gap-[22px] text-[14px] font-medium text-[#475569]">
              <span>✓ One-time payment</span>
              <span>✓ 30-day money-back guarantee</span>
              <span>✓ All future Pro updates</span>
            </div>
          </div>

          <HeroDashboard />
        </div>
      </header>
    </>
  );
}
