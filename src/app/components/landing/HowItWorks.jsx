import { WarmPill } from "./ui";
import ScrollLetters from "./ScrollLetters";

// Card layout after Promora Home V1's three-step block: pastel cards, the
// middle one dropped 80px, joined by little connectors.
const STEPS = [
  {
    n: "01",
    title: (<>Connect once <span className="text-[15px] font-medium text-[#576470]">· 2 minutes</span></>),
    body: "Link your social and ad accounts and add your brand. Klux learns your logo, colors, voice and products.",
    bg: "#f7fe8e",
  },
  {
    n: "02",
    title: "Klux does the work, or brief your copilot",
    body: "It designs your posts, ads, product photos and videos, writes the captions, picks the best times to post, publishes, and replies to your comments and DMs. Or create a copilot and tell it what to do in plain language. It keeps running every day without you opening a design tool.",
    bg: "#c1efdc",
    offset: true,
  },
  {
    n: "03",
    title: "You watch it grow",
    body: "See engagement, views, conversions and ad results in one dashboard, and Klux puts more effort into what's working.",
    bg: "#fed3f1",
  },
];

// A wedge in the left card's colour poking out of its side, then a thin line
// on to the next card. `drop` angles the line down (card 1 → 2) or up (2 → 3).
function Connector({ from, to, drop, className }) {
  const y2 = drop ? 40 : 8;
  const y1 = drop ? 8 : 40;
  return (
    <svg width="112" height="48" viewBox="0 0 112 48" fill="none" aria-hidden="true" className={`absolute hidden lg:block ${className}`}>
      <path d={`M0 ${y1 - 14} L14 ${y1} L0 ${y1 + 14} Z`} fill={from} />
      <line x1="14" y1={y1} x2="104" y2={y2} stroke={to} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section className="px-[30px] py-[120px] max-sm:px-4 max-sm:py-20">
      <div className="mx-auto max-w-[1202px]">
        <div className="lp-reveal mx-auto flex max-w-[680px] flex-col items-center gap-6 text-center">
          <WarmPill>How it works</WarmPill>
          <ScrollLetters
            as="h2"
            className="font-display text-[clamp(38px,4.6vw,60px)] leading-[1.2] font-semibold"
            text="Set it up once. Klux does the rest."
          />
        </div>
        <div className="relative mt-20 grid grid-cols-1 items-start gap-10 max-lg:mt-12 max-sm:gap-5 lg:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className={`relative flex min-h-[357px] flex-col rounded-[40px] px-8 py-10 max-sm:min-h-0 max-sm:rounded-[28px] max-sm:p-6 ${s.offset ? "lg:mt-20" : ""}`}
              style={{ background: s.bg }}
            >
              <span className="font-display self-end text-[48px] leading-[1.2] font-semibold tracking-[-.02em]">{s.n}</span>
              <div className="mt-auto pt-10 text-[20px] font-medium max-sm:pt-4">{s.title}</div>
              <p className="mt-2 text-[16px] leading-[1.7] text-[#576470]">{s.body}</p>
            </div>
          ))}
          <Connector from="#f7fe8e" to="#c1efdc" drop className="top-[143px] left-[calc(33.333%-26px)]" />
          <Connector from="#c1efdc" to="#fed3f1" className="top-[270px] left-[calc(66.666%-26px)]" />
        </div>
        <div className="lp-reveal mt-[60px] flex flex-wrap items-center gap-6 rounded-3xl bg-[#0b1220] px-[30px] py-[26px] text-white">
          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[15px] bg-[#1447e6]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" aria-hidden="true">
              <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </span>
          <div className="min-w-0 flex-[1_1_380px]">
            <div className="font-display text-[22px] font-bold">Your brand, your rules.</div>
            <div className="mt-1 text-[15px] leading-[1.6] text-[#b7c4e6]">
              Review posts before they go live with one tap, or let Klux run on autopilot. Set spend
              limits so your ad budget is always protected.
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {["One-tap approval", "Autopilot", "Ad spend limits"].map((c) => (
              <span key={c} className="rounded-full bg-white/10 px-3.5 py-[9px] text-[13.5px] font-semibold">✓ {c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
