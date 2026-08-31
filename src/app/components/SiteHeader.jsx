"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const NAV_SECTIONS = ["creators", "managers", "brands", "pricing"];

// ─── Spinner ──────────────────────────────────────────────────────────────────
function Spinner() {
  return (
    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        opacity="0.25"
      />
      <path
        fill="currentColor"
        opacity="0.8"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// ─── Site header ──────────────────────────────────────────────────────────────
// At the top of the page it sits bare on the hero's cream canvas (dark ink, light
// pills). Once scrolled past the hero it collapses back into the dark floating
// pill so it stays legible over the rest of the page.
// The bar is pinned with w-screen (not just inset-x-0) so it stays viewport-width
// even when a downstream section makes the document scroll horizontally.
export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setLoadingBtn(sectionId);
    setMobileOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setTimeout(() => setLoadingBtn(null), 800);
  };

  const handleStartFree = () => {
    setMobileOpen(false);
    const el = document.getElementById("pricing");
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const handleLogin = () => {
    window.location.href = "https://app.creativeklux.com/";
  };

  return (
    // Sides are inset to exactly the hero frame's thickness (24 / 40 / 53px — field
    // + ring + hairline, see Hero.jsx), so the bar starts flush with the white
    // canvas's inner edge and stays hugging it however thick the frame gets; the
    // nav's own 4px below is all that holds the logo and Login off that edge.
    // The TOP carries an extra ~10-15px beyond the frame so the bar is not jammed
    // against the canvas's top edge — the one direction that wants air, not less.
    // Still no bottom padding: the header is a fixed overlay and height there eats
    // clicks beneath it.
    <header
      data-cursor-zone
      className="fixed inset-x-0 top-0 z-50 w-screen max-w-full px-6 pt-8 sm:px-10 sm:pt-[52px] lg:px-[53px] lg:pt-[68px]"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      {/* Padding is asymmetric by state on purpose. Unscrolled the bar is invisible,
          so its padding only pushes the logo and Login away from the canvas edge —
          4px keeps them tight to it. Scrolled it becomes a solid pill, which needs
          real room inside its own border, so it widens back out. */}
      <nav
        className={`relative mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-4 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "border border-white/10 bg-[#0E0E0E]/95 px-4 shadow-[0_10px_34px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-5"
            : "border border-transparent bg-transparent px-1"
        }`}
      >
        {/* Logo — dark wordmark on cream, white wordmark on the dark pill */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            alt="Creative Klux logo"
            src={isScrolled ? "/images/logo-klux.png" : "/images/klux-logo-dark.png"}
            width={500}
            height={135}
            priority
            className="h-8 sm:h-9 w-auto"
          />
        </Link>

        {/* Center nav */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 list-none items-center gap-8 lg:flex">
          {NAV_SECTIONS.map((s) => (
            <li key={s}>
              <button
                onClick={() => scrollToSection(s)}
                disabled={loadingBtn === s}
                className={`flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-[14px] font-medium transition-colors duration-150 disabled:opacity-60 ${
                  isScrolled
                    ? "text-white/65 hover:text-white"
                    : "text-[#3F3F46] hover:text-[#17171B]"
                }`}
              >
                {loadingBtn === s && <Spinner />}
                For {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Right CTAs */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <button
            onClick={handleLogin}
            className={`cursor-pointer rounded-full px-6 py-2.5 text-[14px] font-medium transition-all duration-150 ${
              isScrolled
                ? "border border-white/15 bg-transparent text-white/80 hover:text-white hover:border-white/30"
                : // Tinted fill + a real border: the old white pill vanished once
                  // the canvas under it went white.
                  "border border-[#17171B]/12 bg-[#F4F4F7] text-[#17171B] hover:border-[#17171B]/25 hover:-translate-y-px"
            }`}
          >
            Login
          </button>
          <button
            onClick={handleStartFree}
            className={`cursor-pointer rounded-full px-6 py-2.5 text-[14px] font-semibold transition-all duration-150 hover:-translate-y-px ${
              isScrolled
                ? "bg-white text-[#17171B] hover:bg-white/90"
                : "bg-[#17171B] text-white shadow-[0_6px_18px_-8px_rgba(23,23,27,0.8)] hover:bg-[#2A2A30]"
            }`}
          >
            Start for Free
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`cursor-pointer rounded-lg border-none bg-transparent p-1.5 transition-colors lg:hidden ${
            isScrolled
              ? "text-white hover:bg-white/10"
              : "text-[#17171B] hover:bg-[#17171B]/8"
          }`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`mx-auto mt-2 flex max-w-[1400px] flex-col gap-1 rounded-2xl px-5 pt-3 pb-4 backdrop-blur-xl lg:hidden ${
            isScrolled
              ? "border border-white/10 bg-[#14151a]/95"
              : "border border-[#17171B]/12 bg-white/95 shadow-[0_16px_40px_-16px_rgba(20,20,27,0.28)]"
          }`}
        >
          {NAV_SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => scrollToSection(s)}
              disabled={loadingBtn === s}
              className={`flex cursor-pointer items-center gap-2 border-b bg-transparent py-2.5 text-left text-[15px] font-medium transition-colors last:border-0 ${
                isScrolled
                  ? "border-white/5 text-white/75 hover:text-white"
                  : "border-[#17171B]/8 text-[#3F3F46] hover:text-[#17171B]"
              }`}
            >
              {loadingBtn === s && <Spinner />}
              For {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
          <button
            onClick={handleLogin}
            className={`mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-3 text-[15px] font-medium transition-colors ${
              isScrolled
                ? "border border-white/15 bg-transparent text-white/80 hover:text-white hover:border-white/30"
                : "border border-[#17171B]/12 bg-[#F4F4F7] text-[#17171B]"
            }`}
          >
            Login
          </button>
          <button
            onClick={handleStartFree}
            className={`mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-3 text-[14px] font-semibold transition-colors ${
              isScrolled
                ? "bg-white text-[#17171B] hover:bg-white/90"
                : "bg-[#17171B] text-white hover:bg-[#2A2A30]"
            }`}
          >
            Start for Free
          </button>
        </div>
      )}
    </header>
  );
}
