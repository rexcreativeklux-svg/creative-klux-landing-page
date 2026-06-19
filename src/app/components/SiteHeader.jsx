"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
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

// ─── Site header — Appzen-style floating dark pill, sticky across the page ──────
export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
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
    setLoadingBtn("start-free");
    window.location.href = "https://app.creativeklux.com/";
  };

  return (
    <header
      data-cursor-zone
      className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 lg:px-9 pt-5 lg:pt-12"
      style={{ fontFamily: "Geist, sans-serif" }}
    >
      <nav
        className={`relative mx-auto max-w-[1500px] flex items-center justify-between gap-4 px-5 sm:px-6 h-16 rounded-2xl border border-white/10 backdrop-blur-2xl transition-colors duration-300 ${
          isScrolled
            ? "bg-[#0E0E0E]/95 shadow-[0_10px_34px_rgba(0,0,0,0.35)]"
            : "bg-white/10"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            alt="Creative Klux logo"
            src="/images/logo-klux.png"
            width={500}
            height={135}
            priority
            className="h-9 sm:h-10 w-auto"
          />
        </Link>

        {/* Center nav */}
        <ul className="hidden lg:flex items-center gap-8 list-none absolute left-1/2 -translate-x-1/2">
          {NAV_SECTIONS.map((s) => (
            <li key={s}>
              <button
                onClick={() => scrollToSection(s)}
                disabled={loadingBtn === s}
                className="flex items-center gap-1.5 text-sm font-medium text-white/65 bg-transparent border-none cursor-pointer transition-colors duration-150 hover:text-white disabled:opacity-60"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                {loadingBtn === s && <Spinner />}
                For {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={handleStartFree}
            disabled={loadingBtn === "start-free"}
            className="group flex items-center gap-2 text-[14px] font-semibold text-white bg-[#1447e6] rounded-full pl-5 pr-4 py-2.5 cursor-pointer transition-all duration-150 hover:bg-[#2a5cff] hover:-translate-y-px disabled:opacity-65"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            {loadingBtn === "start-free" && <Spinner />}
            Start for Free
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden bg-transparent border-none cursor-pointer p-1.5 rounded-lg text-white transition-colors hover:bg-white/10"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mx-auto max-w-7xl mt-2 flex flex-col gap-1 px-5 pt-3 pb-4 rounded-2xl border border-white/10 bg-[#14151a]/95 backdrop-blur-xl">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => scrollToSection(s)}
              disabled={loadingBtn === s}
              className="flex items-center gap-2 text-[15px] font-medium text-white/75 bg-transparent border-none border-b border-white/5 last:border-0 cursor-pointer text-left py-2.5 transition-colors hover:text-white"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              {loadingBtn === s && <Spinner />}
              For {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
          <button
            onClick={handleStartFree}
            className="mt-3 w-full justify-center flex items-center gap-2 text-[14px] font-semibold text-white bg-[#1447e6] rounded-full px-4 py-3 cursor-pointer transition-all hover:bg-[#2a5cff]"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            {loadingBtn === "start-free" && <Spinner />}
            Start for Free
            <ArrowUpRight size={17} />
          </button>
        </div>
      )}
    </header>
  );
}
