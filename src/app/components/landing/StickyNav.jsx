"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink, LogoMark } from "./ui";
import { LOGIN_URL, NAV_LINKS } from "./content";

// Sticky header. A zero-height sticky layer, so it takes no space: at the top
// of the page the nav sits exactly where it did inside the hero card; once the
// page scrolls it becomes a frosted white pill pinned to the top of the screen.
// Below 860px the links fold into a menu button.
export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <div className="sticky top-0 z-50 h-0 px-3">
      <div
        className={`relative mx-auto border transition-all duration-300 ${
          solid
            ? "top-3 max-w-[1240px] rounded-[28px] border-white/80 bg-white/85 px-5 shadow-[0_12px_40px_rgba(20,40,90,.12)] backdrop-blur-xl max-sm:px-3"
            : "top-[27px] max-w-full rounded-[30px] border-transparent bg-transparent px-6 max-sm:px-3"
        }`}
      >
        <nav aria-label="Main" className="relative z-[5] mx-auto flex max-w-[1180px] items-center justify-between gap-3 py-2">
          <a href="#" className="flex min-w-0 items-center gap-2.5 text-[#0b1220] hover:text-[#0b1220]">
            <LogoMark className="shadow-[0_6px_16px_rgba(20,71,230,.35)] max-sm:!h-[34px] max-sm:!w-[34px]" />
            <span className="font-display truncate text-[21px] font-bold max-[420px]:text-[18px] max-[340px]:hidden">Creativeklux</span>
          </a>
          <div className="flex gap-8 text-[15px] font-medium max-[860px]:hidden">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-[#0b1220] hover:text-[#1447e6]">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={LOGIN_URL}
              className="px-3 py-2.5 text-[15px] font-semibold text-[#0b1220] hover:text-[#1447e6] max-[860px]:hidden"
            >
              Log in
            </a>
            <ButtonLink href="#deal" className="px-[22px] py-3 text-[15px] whitespace-nowrap max-sm:px-3.5 max-sm:py-2.5 max-sm:text-[14px]">
              <span className="max-sm:hidden">Get lifetime deal</span>
              <span className="sm:hidden">Get deal</span>
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 cursor-pointer max-sm:-mr-1 max-sm:h-9 max-sm:w-9 items-center justify-center rounded-full text-[#0b1220] hover:bg-black/5 min-[861px]:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="flex flex-col border-t border-[#ededed] pt-2 pb-4 min-[861px]:hidden">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-[16px] font-medium text-[#0b1220] hover:bg-black/5"
              >
                {l.label}
              </a>
            ))}
            <a href={LOGIN_URL} className="rounded-xl px-2 py-3 text-[16px] font-medium text-[#0b1220] hover:bg-black/5">
              Log in
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
