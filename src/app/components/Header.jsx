// components/Header.js
"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Trigger after 20px scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = isScrolled ? 80 : 100; // Adjust offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
            <button onClick={() => scrollToSection('creators')} className="text-gray-900 hover:underline hover:text-blue-700 font-medium text-[15px] transition duration-200 whitespace-nowrap cursor-pointer">
              For Creators
            </button>
            <button onClick={() => scrollToSection('managers')} className="text-gray-900 hover:underline hover:text-blue-700 font-medium text-[15px] transition duration-200 whitespace-nowrap cursor-pointer">
              For Managers
            </button>
            <button onClick={() => scrollToSection('brands')} className="text-gray-900 hover:underline hover:text-blue-700 font-medium text-[15px] transition duration-200 whitespace-nowrap cursor-pointer">
              For Brands
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-900 hover:underline hover:text-blue-700 font-medium text-[15px] transition duration-200 whitespace-nowrap cursor-pointer">
              Pricing
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 shrink-0">
            <button className="text-gray-900 cursor-pointer hover:text-black bg-gray-100 hover:bg-gray-200 px-4 rounded-lg py-2 font-medium text-[15px] transition whitespace-nowrap">
              Login
            </button>
            <button className="bg-[#1447e6] cursor-pointer hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-[15px] transition whitespace-nowrap">
              Start for free
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
              <button onClick={() => scrollToSection('creators')} className="text-left text-gray-900 hover:text-gray-600 font-medium text-[15px] py-2">
                For Creators
              </button>
              <button onClick={() => scrollToSection('managers')} className="text-left text-gray-900 hover:text-gray-600 font-medium text-[15px] py-2">
                For Managers
              </button>
              <button onClick={() => scrollToSection('brands')} className="text-left text-gray-900 hover:text-gray-600 font-medium text-[15px] py-2">
                For Brands
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-900 hover:text-gray-600 font-medium text-[15px] py-2">
                Pricing
              </button>
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="w-full text-left text-gray-900 hover:text-gray-600 font-medium text-[15px] py-2">
                  Login
                </button>
                <button className="w-full bg-[#1447e6] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-[15px] transition">
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