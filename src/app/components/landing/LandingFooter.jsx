import Link from "next/link";
import { BrandIcon } from "./icons";
import { LogoMark } from "./ui";
import FooterSignup from "./FooterSignup";
import { LOGIN_URL, SUPPORT_EMAIL } from "./content";

// Layout after Promora Home V1's footer: brand + sign-up on the left, link
// columns and a bottom bar on the right, and a giant wordmark underneath whose
// lower edge dissolves into grain.
const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Creatives", href: "/#creatives" },
      { label: "Integrations", href: "/#integrations" },
      { label: "Pricing", href: "/pages/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: `mailto:${SUPPORT_EMAIL}` },
      { label: "Log in", href: LOGIN_URL },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/pages/privacy" },
      { label: "Terms of Service", href: "/pages/terms" },
      { label: "Refund Policy", href: "/pages/refund" },
    ],
  },
];

const SOCIALS = [{ name: "X", icon: "x", href: "https://x.com/creativeklux" }];

// Fine noise used to break up the wordmark's fade (alpha-only fractal noise)
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2.2 -.6'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function FooterLink({ href, children }) {
  const className = "text-[16px] text-[#576470] transition-colors hover:text-[#0b1220]";
  return href.startsWith("/") ? (
    <Link href={href} className={className}>{children}</Link>
  ) : (
    <a href={href} className={className}>{children}</a>
  );
}

function Wordmark() {
  const text = "font-display block text-center text-[clamp(64px,17.4vw,250px)] leading-[.82] font-bold tracking-[-.06em] whitespace-nowrap text-[#1447e6]";
  return (
    <div aria-hidden="true" className="relative mt-20 select-none max-sm:mt-12">
      {/* Solid top half... */}
      <span className={text} style={{ maskImage: "linear-gradient(#000 45%, transparent 72%)", WebkitMaskImage: "linear-gradient(#000 45%, transparent 72%)" }}>
        Creativeklux
      </span>
      {/* ...and a grainy copy that thins out toward the bottom */}
      <span
        className={`${text} absolute inset-0`}
        style={{
          maskImage: `${NOISE}, linear-gradient(#000 40%, transparent 100%)`,
          WebkitMaskImage: `${NOISE}, linear-gradient(#000 40%, transparent 100%)`,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      >
        Creativeklux
      </span>
    </div>
  );
}

export default function LandingFooter() {
  return (
    <footer className="px-[30px] pt-[60px] max-sm:px-5">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap justify-between gap-x-16 gap-y-12">
          <div className="flex max-w-[300px] flex-col">
            <Link href="/" className="flex items-center gap-2.5 text-[#0b1220] hover:text-[#0b1220]">
              <LogoMark size={36} radius="50%" />
              <span className="font-display text-[30px] font-semibold">Creativeklux</span>
            </Link>
            <p className="mt-6 text-[16px] leading-[1.7] text-[#576470]">
              The AI social media and ads manager that designs, posts, replies and runs ads for your brand.
            </p>
            <div className="font-display mt-20 text-[24px] leading-[1.3] font-medium tracking-[-.02em] max-sm:mt-10">
              Let AI run your social media and ads.
            </div>
            <div className="mt-6">
              <FooterSignup />
            </div>
          </div>

          <div className="flex min-w-0 max-w-[650px] flex-[1_1_480px] flex-col">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-8">
              {COLUMNS.map((col) => (
                <div key={col.title} className="flex flex-col gap-5">
                  <span className="text-[16px] font-medium">{col.title}</span>
                  {col.links.map((l) => (
                    <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-5 border-t border-[#ededed] pt-6 max-sm:mt-10">
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-[16px] text-[#576470]">
                <span>© {new Date().getFullYear()} Creativeklux, a Netsprin product</span>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-[#0b1220]">{SUPPORT_EMAIL}</a>
              </div>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ededed] bg-white transition-colors hover:border-[#b6bfcf]"
                  >
                    <BrandIcon name={s.icon} size={18} color="#0b1220" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Wordmark />
      </div>
    </footer>
  );
}
