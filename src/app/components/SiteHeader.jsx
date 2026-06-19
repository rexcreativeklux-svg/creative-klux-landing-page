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

// ─── Site header (sticky across the whole page) ─────────────────────────────────
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
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setTimeout(() => setLoadingBtn(null), 800);
  };

  const handleLogin = () => {
    setLoadingBtn("login");
    window.location.href = "https://app.creativeklux.com/";
  };

  const handleStartFree = () => {
    setLoadingBtn("start-free");
    setTimeout(() => {
      window.location.href = "../pages/pricing";
    }, 300);
  };

  return (
    <header
      className="sticky top-0 z-50"
      style={{ fontFamily: "Geist, sans-serif" }}
    >
      <nav
        className={`flex items-center justify-between px-10 h-16 border-b border-black/[0.07] bg-[#f7f7f5]/85 backdrop-blur-xl transition-shadow duration-200 ${isScrolled ? "shadow-[0_1px_16px_rgba(0,0,0,0.07)] bg-[#f7f7f5]/95" : ""}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-[15px] text-[#111] no-underline tracking-[-0.2px]"
        >
          <Image
            alt="Creative Klux logo"
            src="/images/klux-logo.png"
            width={500}
            height={135}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Center nav */}
        <ul className="hidden lg:flex items-center gap-8 list-none absolute left-1/2 -translate-x-1/2">
          {NAV_SECTIONS.map((s) => (
            <li key={s}>
              <button
                onClick={() => scrollToSection(s)}
                disabled={loadingBtn === s}
                className="flex items-center gap-1.5 text-sm font-normal text-[#555] bg-transparent border-none cursor-pointer transition-colors duration-150 hover:text-[#111] disabled:opacity-60"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                {loadingBtn === s && <Spinner />}
                For {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-2.5">
          <button
            onClick={handleLogin}
            disabled={loadingBtn === "login"}
            className="flex items-center gap-1.5 text-[13.5px] font-medium text-[#555] bg-[#f0f0ec] border border-[#e0e0da] rounded-lg px-4 py-[7px] cursor-pointer transition-all duration-150 hover:border-[#bbb] hover:text-[#111] hover:bg-[#e8e8e4] disabled:opacity-65"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            {loadingBtn === "login" && <Spinner />}
            Log in
          </button>
          <button
            onClick={handleStartFree}
            disabled={loadingBtn === "start-free"}
            className="flex items-center gap-1.5 text-[13.5px] font-semibold text-white bg-[#1447e6] border-none rounded-lg px-[18px] py-[7px] cursor-pointer transition-all duration-150 hover:bg-[#0f3bbf] hover:-translate-y-px disabled:opacity-65"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            {loadingBtn === "start-free" && <Spinner />}
            Get Started for free
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden bg-transparent border-none cursor-pointer p-1.5 rounded-lg text-[#333] transition-colors hover:bg-black/5"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden flex flex-col gap-1 px-6 pt-4 pb-5 border-t border-black/[0.07] bg-[#f7f7f5]/98">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => scrollToSection(s)}
              disabled={loadingBtn === s}
              className="flex items-center gap-2 text-[15px] font-normal text-[#444] bg-transparent border-none border-b border-black/5 last:border-0 cursor-pointer text-left py-2.5 transition-colors hover:text-[#111]"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              {loadingBtn === s && <Spinner />}
              For {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
          <div className="flex flex-col gap-2.5 pt-4 border-t border-black/[0.07] mt-2">
            <button
              onClick={handleLogin}
              className="w-full justify-center flex items-center gap-1.5 text-[13.5px] font-medium text-[#555] bg-[#f0f0ec] border border-[#e0e0da] rounded-lg px-4 py-2.5 cursor-pointer transition-all hover:text-[#111]"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              {loadingBtn === "login" && <Spinner />} Login
            </button>
            <button
              onClick={handleStartFree}
              className="w-full justify-center flex items-center gap-1.5 text-[13.5px] font-semibold text-white bg-[#1447e6] rounded-lg px-4 py-2.5 cursor-pointer transition-all hover:bg-[#0f3bbf]"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              {loadingBtn === "start-free" && <Spinner />} Start for free
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
