import { RollButton } from "./ui";
import ScrollLetters from "./ScrollLetters";

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#0b1220",
  strokeWidth: 1.8,
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const CASES = [
  {
    title: "Online stores",
    body: "Product ads, launch posts and \"is this in stock?\" answered while you pack orders.",
    icon: (<svg {...iconProps}><path d="M6 7h12l-1 13H7z" /><path d="M9 7a3 3 0 016 0" /></svg>),
  },
  {
    title: "Local businesses",
    body: "Salons, gyms, clinics and shops post every week and never miss a booking question.",
    icon: (<svg {...iconProps}><path d="M12 21s-6-6-6-11a6 6 0 0112 0c0 5-6 11-6 11z" /><circle cx="12" cy="10" r="2" /></svg>),
  },
  {
    title: "Agencies",
    body: "Run every client brand from one place, each with its own brand kit, copilot and ad budget.",
    icon: (<svg {...iconProps}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5h6v2" /></svg>),
  },
  {
    title: "Creators and coaches",
    body: "Stay consistent without burnout. Your copilot keeps your voice and books your calls.",
    icon: (<svg {...iconProps}><path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L3.4 9.3l6-.7z" /></svg>),
  },
  {
    title: "Restaurants and cafes",
    body: "Daily specials, event promos and order links, with reviews and DMs answered fast.",
    icon: (<svg {...iconProps}><path d="M7 3v8M5 3v5a2 2 0 004 0V3M7 11v10M17 3c-2 2-2 6 0 8v10" /></svg>),
  },
  {
    title: "Product launches",
    body: "Teasers, launch-day ads and retargeting creatives, with spend limits you control.",
    icon: (<svg {...iconProps}><path d="M5 19c1-3 2-5 4-6l6-6c2-2 4-2 5-2 0 1 0 3-2 5l-6 6c-1 2-3 3-6 4z" /><path d="M9 13l2 2" /></svg>),
  },
];

export default function UseCases() {
  return (
    <section className="relative px-[30px] py-[120px] max-sm:px-4 max-sm:py-20">
      {/* Soft yellow → pink glow bleeding in from the left edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -left-[20%] h-[900px] w-[55%] opacity-80 blur-[60px]"
        style={{
          background:
            "radial-gradient(45% 40% at 45% 30%, #f4f8b5 0%, rgba(244,248,181,0) 70%), radial-gradient(45% 40% at 55% 65%, #fed3f1 0%, rgba(254,211,241,0) 70%)",
        }}
      />
      <div className="relative mx-auto flex max-w-[1280px] flex-wrap items-start justify-between gap-20 max-lg:gap-12">
        <div className="top-[110px] flex min-w-0 max-w-[540px] flex-[1_1_380px] flex-col items-start gap-10 md:sticky">
          <div className="flex flex-col gap-6">
            <ScrollLetters
              as="h2"
              className="font-display text-[clamp(38px,4.6vw,60px)] leading-[1.2] font-semibold"
              text="Powerful use cases for every business"
            />
            <p className="text-[18px] leading-[1.7] text-[#576470]">
              Stores, local shops, creators and agencies use Klux to post every day, answer every
              customer and run ads that pay back.
            </p>
          </div>
          <RollButton href="#deal">Get lifetime access</RollButton>
        </div>
        <div className="flex min-w-0 max-w-[635px] flex-[1_1_480px] flex-col gap-10 max-sm:gap-5">
          {CASES.map((c) => (
            <div key={c.title} className="flex items-start gap-6 rounded-2xl bg-[#faf4ef] px-10 py-[60px] max-sm:gap-4 max-sm:p-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white">{c.icon}</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-[24px] font-medium tracking-[-.02em]">{c.title}</h3>
                <p className="text-[16px] leading-[1.7] text-[#576470]">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
