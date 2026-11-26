import Image from "next/image";
import { BrandIcon } from "./icons";
import { SectionTitle } from "./ui";

// Brand-coloured tiles orbiting the Klux hub. `left`/`top` are percentages of
// the hub area and match the endpoints of the dashed connector lines below.
const NODES = [
  { icon: "facebook", left: 12, top: 16, bg: "#1877f2", size: 36 },
  { icon: "x", left: 28, top: 10, bg: "#0b0b0b", size: 30, delay: -2 },
  { icon: "linkedin", left: 24, top: 50, bg: "#0a66c2", size: 48, delay: -4 },
  { icon: "instagram", left: 12, top: 72, bg: "linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)", size: 36, delay: -1 },
  { icon: "tiktok", left: 28, top: 88, bg: "#0b0b0b", size: 34, delay: -3 },
  { icon: "youtube", left: 88, top: 16, bg: "#fff", size: 40, delay: -2.5, brand: true },
  { icon: "meta", left: 72, top: 10, bg: "#0467df", size: 38, delay: -0.5 },
  { icon: "whatsapp", left: 76, top: 50, bg: "#25d366", size: 36, delay: -3.5 },
  { icon: "pinterest", left: 88, top: 72, bg: "#e60023", size: 36, delay: -1.5 },
  { icon: "telegram", left: 72, top: 88, bg: "#26a5e4", size: 34, delay: -4.5 },
];

function NodeIcon({ n, small }) {
  if (n.icon === "linkedin") {
    return (
      <span className="font-extrabold text-white" style={{ fontFamily: "Arial, sans-serif", fontSize: small ? 24 : 34 }}>
        in
      </span>
    );
  }
  return <BrandIcon name={n.icon} size={small ? Math.round(n.size * 0.7) : n.size} color={n.brand ? undefined : "#fff"} />;
}

const LINES = ["160 56", "310 35", "240 175", "160 252", "310 308", "840 56", "690 35", "760 175", "840 252", "690 308"];

export default function Integrations() {
  return (
    <section id="integrations" className="bg-gradient-to-b from-[#f5f8ff] to-white px-6 pt-[46px] pb-[30px]">
      <div className="lp-reveal mx-auto max-w-[820px] text-center">
        <span className="inline-flex rounded-full border border-[#c7d6ff] px-4 py-[7px] text-[13px] font-bold tracking-[.06em] text-[#1447e6]">
          INTEGRATIONS
        </span>
        <SectionTitle className="mt-[18px]">
          Connect your <span className="text-[#1447e6]">social &amp; ad platforms</span>
        </SectionTitle>
        <p className="mx-auto mt-[18px] max-w-[600px] text-[17px] leading-[1.6] text-[#475569]">
          One click per account. Creativeklux posts, replies, runs ads and reads results back, all
          from one place.
        </p>
      </div>

      <div className="relative mx-auto mt-4 h-[290px] max-w-[1000px] max-sm:hidden">
        <svg
          aria-hidden="true"
          width="100%"
          height="100%"
          viewBox="0 0 1000 350"
          preserveAspectRatio="none"
          className="absolute inset-0 max-[860px]:hidden"
        >
          <g stroke="#9db4ff" strokeWidth="2" fill="none">
            {LINES.map((end) => (
              <path key={end} className="lp-dash" d={`M500 175 L${end}`} />
            ))}
          </g>
        </svg>

        <div className="absolute top-1/2 left-1/2 -mt-[85px] -ml-[85px] h-[170px] w-[170px]">
          <span className="lp-ring absolute -inset-[30px] rounded-full border-2 border-[#9db4ff]" />
          <span className="lp-ring absolute -inset-[30px] rounded-full border-2 border-[#9db4ff]" style={{ animationDelay: "1.5s" }} />
          <span className="absolute inset-0 flex items-center justify-center rounded-[36px] bg-gradient-to-br from-[#2c63ff] to-[#1447e6] shadow-[0_30px_70px_rgba(20,71,230,.45)]">
            <Image src="/images/landing/klux-mark.png" alt="Creativeklux" width={158} height={166} className="h-auto w-[84px]" />
          </span>
        </div>

        {NODES.map((n) => (
          <span
            key={n.icon}
            className="lp-float absolute -m-[38px] flex h-[76px] w-[76px] items-center justify-center rounded-[20px] shadow-[0_18px_36px_rgba(0,0,0,.14)]"
            style={{
              left: `${n.left}%`,
              top: `${n.top}%`,
              background: n.bg,
              animationDelay: n.delay ? `${n.delay}s` : undefined,
            }}
          >
            <NodeIcon n={n} />
          </span>
        ))}
      </div>

      {/* Phones: the orbit has no room, so the hub sits above a tidy grid */}
      <div className="mt-10 flex flex-col items-center gap-8 sm:hidden">
        <span className="relative flex h-[110px] w-[110px] items-center justify-center rounded-[28px] bg-gradient-to-br from-[#2c63ff] to-[#1447e6] shadow-[0_24px_50px_rgba(20,71,230,.4)]">
          <span className="lp-ring absolute -inset-[20px] rounded-full border-2 border-[#9db4ff]" />
          <Image src="/images/landing/klux-mark.png" alt="Creativeklux" width={158} height={166} className="h-auto w-[54px]" />
        </span>
        <div className="grid grid-cols-5 gap-3">
          {NODES.map((n) => (
            <span
              key={n.icon}
              className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,.12)] max-[360px]:h-12 max-[360px]:w-12"
              style={{ background: n.bg }}
            >
              <NodeIcon n={n} small />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
