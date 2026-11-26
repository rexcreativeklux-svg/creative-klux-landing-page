import Image from "next/image";
import { Pill, RollButton, WarmPill } from "./ui";
import ScrollLetters from "./ScrollLetters";
import { TESTIMONIALS } from "./content";

// Bento after Promora Home V1's "Achievement" block: a four-column grid of
// white 40px-radius cards inside a cream panel. Stat cards carry a soft
// colour blur fading down into white; the wide card fades a photo into white.
const card = "relative overflow-hidden rounded-[40px] bg-white px-[30px] py-8 max-sm:rounded-[28px] max-sm:p-6";

function QuoteMark() {
  return <span className="font-display block text-[56px] leading-[.5] font-bold text-[#d9d0ff]" aria-hidden="true">“</span>;
}

function Stars({ rating }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path fill={i < rating ? "#0b1220" : "#cbd5e1"} d="M12 2.5l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.5l-6 3.3 1.3-6.7-5-4.6 6.8-.8z" />
        </svg>
      ))}
    </div>
  );
}

function Initials({ name }) {
  return (
    <span className="font-display flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1447e6] to-[#7c5cff] text-[18px] font-semibold text-white">
      {name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
    </span>
  );
}

// Stat card: a blurred colour wash at the top melting into the white card
function StatCard({ value, label, wash, className = "" }) {
  return (
    <div className={`${card} flex flex-col justify-end ${className}`}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[78%]" style={{ background: wash }} />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[78%] bg-gradient-to-b from-transparent from-35% to-white" />
      <div className="relative">
        <div className="font-display text-[48px] leading-[1.2] font-semibold tracking-[-.02em]">{value}</div>
        <p className="mt-4 text-[16px] leading-[1.7] text-[#576470]">{label}</p>
      </div>
    </div>
  );
}

export function ResultsBento() {
  const quote = TESTIMONIALS[0];
  return (
    <section className="px-[30px] pb-[120px] max-sm:px-3 max-sm:pb-20">
      <div className="mx-auto max-w-[1376px] rounded-3xl bg-[#faf4ef] px-[30px] py-[120px] max-lg:py-20 max-sm:px-3 max-sm:py-14">
        <div className="lp-reveal mx-auto flex max-w-[640px] flex-col items-center gap-6 text-center">
          <WarmPill>Why Klux</WarmPill>
          <ScrollLetters
            as="h2"
            className="font-display text-[clamp(38px,4.6vw,60px)] leading-[1.2] font-semibold"
            text="Brands switch to Klux for this"
          />
          <p className="max-w-[572px] text-[18px] leading-[1.7] text-[#576470]">
            Posting, replying and running ads every day, without hiring a designer or a social media
            manager.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-[1280px] grid-cols-1 gap-6 max-lg:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Row 1: wide review · stat · small text card */}
          <div className={`${card} flex min-h-[349px] flex-col sm:col-span-2`}>
            <QuoteMark />
            <p className="mt-6 text-[16px] leading-[1.7] font-medium">{quote.quote}</p>
            <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
              <div className="flex items-center gap-4">
                <Initials name={quote.name} />
                <div>
                  <div className="text-[16px] font-medium">{quote.name}</div>
                  <div className="text-[14px] text-[#576470]">{quote.role}</div>
                </div>
              </div>
              <div className="text-right">
                <Stars rating={quote.rating} />
                <div className="mt-2 text-[24px]">
                  {quote.rating.toFixed(1)} <span className="text-[#576470]">Ratings</span>
                </div>
              </div>
            </div>
          </div>

          <StatCard
            className="min-h-[349px]"
            value="24/7"
            label="Replies to DMs and comments, nights and weekends included."
            wash="radial-gradient(60% 70% at 70% 10%, #ff5a3c 0%, rgba(255,90,60,0) 70%), radial-gradient(50% 60% at 25% 20%, #ffb347 0%, rgba(255,179,71,0) 70%), radial-gradient(60% 60% at 80% 50%, #ff3d6e 0%, rgba(255,61,110,0) 70%)"
          />

          <div className={`${card} flex min-h-[349px] flex-col`}>
            <QuoteMark />
            <div className="font-display mt-6 text-[48px] leading-none font-semibold tracking-[-.02em]">21</div>
            <p className="mt-3 text-[16px] leading-[1.7] font-medium">
              designs from one Creative Studio prompt, each with its own caption and copy.
            </p>
          </div>

          {/* Row 2: stat · image · wide photo card */}
          <StatCard
            className="min-h-[446px]"
            value="10"
            label="Social and ad platforms from one login, from Instagram and TikTok to Meta and Google Ads."
            wash="radial-gradient(55% 60% at 30% 15%, #f0a6ff 0%, rgba(240,166,255,0) 70%), radial-gradient(60% 60% at 75% 30%, #b79bff 0%, rgba(183,155,255,0) 70%), radial-gradient(50% 50% at 45% 55%, #ffc6e3 0%, rgba(255,198,227,0) 70%)"
          />

          <div className="relative min-h-[446px] overflow-hidden rounded-[40px] max-sm:rounded-[28px]">
            <Image
              src="/images/landing/creative-perfume-offer.jpg"
              alt="Perfume offer ad creative made with Creativeklux"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 302px"
              className="object-cover"
            />
          </div>

          <div className={`${card} flex min-h-[446px] flex-col justify-end sm:col-span-2`}>
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[70%]">
              <Image src="/images/landing/bg-field.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 628px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-white" />
            </div>
            <div className="relative">
              <h3 className="font-display text-[24px] leading-[1.4] font-medium tracking-[-.02em]">
                One payment. No monthly bills.
              </h3>
              <p className="mt-3 max-w-[480px] text-[16px] leading-[1.7] text-[#576470]">
                Replace your design tool, scheduler, inbox tool, link-in-bio and ad creative tool with
                one lifetime deal.
              </p>
              <RollButton href="#deal" className="mt-6">
                Get lifetime access
              </RollButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  {
    title: "Brand-safe by default",
    body: "Your logo, colors and voice on every post and ad.",
    bg: "#d9d0ff",
    text: "#3b3560",
    icon: <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />,
    stroke: "#5b3cc4",
  },
  {
    title: "Always on",
    body: "Posting and replying every day, even when you're offline.",
    bg: "#ffd6ec",
    text: "#5b2343",
    icon: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
    stroke: "#be185d",
  },
  {
    title: "You stay in control",
    body: "Approve first or go autopilot, with spend limits on ads.",
    bg: "#fff3b0",
    text: "#5b4a14",
    icon: (<><path d="M4 7h10M4 17h6M18 7h2M14 17h6" /><circle cx="16" cy="7" r="2" /><circle cx="12" cy="17" r="2" /></>),
    stroke: "#a16207",
  },
  {
    title: "Gets better every week",
    body: "Klux puts more effort into what's working for you.",
    bg: "#c9f2de",
    text: "#1f4d36",
    icon: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
    stroke: "#15803d",
  },
];

export function CoreValues() {
  return (
    <section className="px-6 pt-[50px] pb-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="lp-reveal text-center">
          <h2 className="font-display text-[clamp(34px,4.2vw,54px)] leading-none font-bold">Built around your brand</h2>
          <p className="mx-auto mt-3.5 max-w-[520px] text-[16.5px] leading-[1.6] text-[#475569]">
            What Klux promises every brand it works for.
          </p>
        </div>
        <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-4">
          {VALUES.map((v) => (
            <div key={v.title} className="lp-reveal lp-lift flex min-h-[248px] flex-col rounded-3xl p-6" style={{ background: v.bg }}>
              <span className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={v.stroke} strokeWidth="2.2" aria-hidden="true">
                  {v.icon}
                </svg>
              </span>
              <div className="font-display mt-auto text-[19px] font-bold">{v.title}</div>
              <p className="mt-1.5 text-[14px] leading-[1.5]" style={{ color: v.text }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Segmented gauge: 16 rounded bars on a 240° arc, filled green → yellow up to
// `value`, the rest grey.
const GAUGE_SEGMENTS = 16;

function Gauge({ value, label }) {
  const filled = Math.round((value / 100) * GAUGE_SEGMENTS);
  const lerp = (a, b, t) => Math.round(a + (b - a) * t);
  const color = (t) => `rgb(${lerp(79, 241, t)},${lerp(163, 238, t)},${lerp(127, 112, t)})`;

  return (
    <div role="img" aria-label={`${value}% ${label}`} className="relative mx-auto h-[172px] w-[230px]">
      <svg viewBox="0 0 230 172" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {Array.from({ length: GAUGE_SEGMENTS }, (_, i) => {
          const deg = 210 - (240 / (GAUGE_SEGMENTS - 1)) * i;
          const rad = (deg * Math.PI) / 180;
          const x = 115 + 92 * Math.cos(rad);
          const y = 115 - 92 * Math.sin(rad);
          return (
            <rect
              key={i}
              x={-9}
              y={-16}
              width={18}
              height={32}
              rx={6}
              transform={`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${90 - deg})`}
              fill={i < filled ? color(i / (GAUGE_SEGMENTS - 1)) : "#eef1f4"}
              className="lp-fade"
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          );
        })}
      </svg>
      <div className="absolute inset-x-0 top-[72px] text-center">
        <div className="font-display text-[40px] leading-none font-semibold tracking-[-.03em]">{value}%</div>
        <div className="mt-1.5 text-[16px]">{label}</div>
      </div>
    </div>
  );
}

const DAYS = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const REACH_PATH = "M0 70 C14 62 22 40 36 36 S58 40 72 32 S96 24 108 38 S132 70 150 66 S176 54 200 58";
const ENGAGE_PATH = "M0 10 C10 4 18 6 26 24 S44 62 58 52 S80 40 96 40 S112 30 120 44 S140 72 160 60 S184 66 200 68";

export function Analytics() {
  return (
    <section className="px-6 pt-10 pb-[50px]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-14 gap-y-10">
        <div className="lp-reveal min-w-0 max-w-[520px] flex-[1_1_380px]">
          <Pill>Analytics</Pill>
          <h2 className="font-display mt-6 text-[clamp(38px,4.4vw,60px)] leading-[1.2] font-semibold">
            Analytics that show your real growth
          </h2>
          <p className="mt-6 text-[18px] leading-[1.7] text-[#576470]">
            Engagement, views, followers, conversions and ad results across every account, with the
            best times to post worked out for you.
          </p>
        </div>

        <div className="lp-reveal relative aspect-[640/600] min-w-0 max-sm:aspect-auto max-sm:h-[480px] max-w-[640px] flex-[1_1_480px] overflow-hidden rounded-3xl">
          <Image src="/images/landing/bg-analytics.jpg" alt="" fill sizes="(max-width: 1000px) 100vw, 640px" className="object-cover" />

          <div className="absolute top-1/2 left-1/2 w-[346px] max-w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white px-6 pt-6 pb-5 shadow-[0_30px_60px_rgba(0,0,0,.18)] max-sm:px-4 max-sm:pt-4">
            <Gauge value={94} label="Replies by AI" />

            {/* Reach vs engagement over the week */}
            <div className="relative mt-6 flex gap-2 max-sm:mt-3">
              <div className="flex flex-col justify-between py-0.5 text-[9px] text-[#576470]">
                {["70K", "60K", "40K", "30K"].map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>
              <div className="relative flex-1">
                <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="block h-[104px] w-full" fill="none" aria-hidden="true">
                  {DAYS.map((_, i) => (
                    <line key={i} x1={(200 / 7) * i} x2={(200 / 7) * i} y1="0" y2="80" stroke="#f1f3f5" />
                  ))}
                  <path d={`${ENGAGE_PATH} L200 80 L0 80Z`} fill="#f4f6a8" opacity=".45" />
                  <path className="lp-draw" d={ENGAGE_PATH} stroke="#eef07a" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                  <path className="lp-draw" d={REACH_PATH} stroke="#4fa37f" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                </svg>
                <span className="absolute top-[49px] left-[54%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#4fa37f] shadow" />
                <span className="absolute top-0 right-0 rounded-[4px] bg-[#0b1220] px-2 py-1 text-[8px] font-medium text-white">
                  Best time · 6 PM
                </span>
                <div className="mt-1.5 flex justify-between text-[9px] text-[#576470]">
                  {DAYS.map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
