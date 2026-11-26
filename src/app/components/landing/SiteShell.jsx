import StickyNav from "./StickyNav";
import LandingFooter from "./LandingFooter";
import { WarmPill } from "./ui";

// Chrome for every page outside the landing page: the same sticky nav (always
// in its pill form, since there is no hero to sit in) and the same footer.
export default function SiteShell({ children }) {
  return (
    <div className="font-landing overflow-x-clip bg-white leading-[normal] text-[#0b1220]">
      <StickyNav solid />
      <main className="pt-[110px] max-sm:pt-[96px]">{children}</main>
      <LandingFooter />
    </div>
  );
}

// Header block in the landing page's section style: warm label, big title
export function PageHeader({ label, title, subtitle }) {
  return (
    <div className="mx-auto flex max-w-[760px] flex-col items-center gap-6 px-6 pt-10 text-center max-sm:pt-4">
      <WarmPill>{label}</WarmPill>
      <h1 className="font-display text-[clamp(38px,5vw,64px)] leading-[1.15] font-semibold">{title}</h1>
      {subtitle && <p className="max-w-[560px] text-[18px] leading-[1.7] text-[#576470]">{subtitle}</p>}
    </div>
  );
}

// Legal documents: the text sits in a white card inside a cream panel. The
// .lp-legal rules in globals.css restyle the pages' existing headings, copy
// and lists so the documents themselves don't need rewriting.
export function LegalPage({ title, updated, children }) {
  return (
    <>
      <PageHeader label="Legal" title={title} subtitle={`Last updated: ${updated}`} />
      <section className="px-[30px] pt-14 pb-[120px] max-sm:px-3 max-sm:pt-10 max-sm:pb-20">
        <div className="mx-auto max-w-[1000px] rounded-3xl bg-[#faf4ef] p-[30px] max-sm:p-3">
          <div className="lp-legal space-y-10 rounded-[28px] bg-white px-14 py-12 max-md:px-8 max-sm:rounded-2xl max-sm:px-5 max-sm:py-8">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
