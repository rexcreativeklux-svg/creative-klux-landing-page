// components/Header.js
"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loadingButton, setLoadingButton] = useState(null); // Tracks which button is loading

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setLoadingButton(sectionId);
    setIsMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = isScrolled ? 80 : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Remove loader after scroll completes
      setTimeout(() => setLoadingButton(null), 800);
    }
  };

  const handleLogin = () => {
    setLoadingButton('login');
    window.location.href = "https://app.creativeklux.com/";
  };

  const handleStartFree = () => {
    setLoadingButton('start-free');
    // Small delay so spinner is visible
    setTimeout(() => {
      window.location.href = "../pages/pricing";
    }, 300);
  };

  // Spinner Component
  const Loader = () => (
    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );

  return (
    <header
      className={`
        z-50 mx-10 rounded-xl bg-white border-b border-gray-200
        transition-all duration-300 ease-out
        ${isScrolled
          ? 'fixed top-0 left-0 right-0 mx-0 rounded-none shadow-lg'
          : 'relative top-5'
        }
      `}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="4" fill="#1F2937" />
              <circle cx="22" cy="10" r="4" fill="#1F2937" />
              <circle cx="10" cy="22" r="4" fill="#1F2937" />
              <circle cx="22" cy="22" r="4" fill="#1F2937" />
            </svg>
            <span className="text-xl font-bold text-gray-900">Creative Klux</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {['creators', 'managers', 'brands', 'pricing'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative text-gray-900 cursor-pointer hover:underline hover:underline-offset-2 hover:text-blue-700 font-medium text-[15px] transition duration-200 whitespace-nowrap flex items-center gap-2"
                disabled={loadingButton === section}
              >
                For {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 shrink-0">
            <button
              onClick={handleLogin}
              disabled={loadingButton === 'login'}
              className="relative text-gray-900 cursor-pointer border border-gray-200 hover:text-black bg-gray-100 hover:bg-gray-200 px-4 rounded-lg py-2 font-medium text-[15px] transition duration-200 whitespace-nowrap flex items-center gap-2 disabled:opacity-70"
            >
              Login
              {loadingButton === 'login' && <Loader />}

            </button>
            <button
              onClick={handleStartFree}
              disabled={loadingButton === 'start-free'}
              className="relative bg-[#1447e6] cursor-pointer hover:scale-105 text-white transition duration-200 px-5 py-2 rounded-lg font-medium text-[15px] flex items-center gap-2 disabled:opacity-70"
            >
              Start for free
              {loadingButton === 'start-free' && <Loader />}

            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {['creators', 'managers', 'brands', 'pricing'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  disabled={loadingButton === section}
                  className="text-left text-gray-900 hover:text-gray-600 font-medium text-[15px] py-2 flex items-center gap-2"
                >
                  {loadingButton === section && <Loader />}
                  For {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button
                  onClick={handleLogin}
                  disabled={loadingButton === 'login'}
                  className="w-full text-left cursor-pointer text-gray-900 hover:text-gray-600 font-medium text-[15px] py-2 flex items-center gap-2"
                >
                  {loadingButton === 'login' && <Loader />}
                  Login
                </button>
                <button
                  onClick={handleStartFree}
                  disabled={loadingButton === 'start-free'}
                  className="bg-[#1447e6] cursor-pointer hover:scale-105 text-white px-5 py-2 rounded-lg font-medium text-[15px] flex items-center gap-2 w-full text-left"
                >
                  {loadingButton === 'start-free' && <Loader />}
                  Start for free
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}