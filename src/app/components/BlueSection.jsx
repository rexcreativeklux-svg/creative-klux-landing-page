'use client';

import { useState } from 'react';

export default function BlueSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "../pages/pricing"; 
    }, 500);
  };

  // Reusable Spinner (white for dark button)
  const Loader = () => (
    <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );

  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-[250px] bg-[#1447e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 text-center sm:mb-12 max-w-6xl mx-auto">
            The best time to start your creatives journey was yesterday. The next best time is now.
          </h2>

          {/* CTA Button with Loading State */}
          <button
            onClick={handleGetStarted}
            disabled={isLoading}
            className="relative bg-gray-900 hover:bg-black text-white text-lg sm:text-xl cursor-pointer font-bold px-8 sm:px-8 py-3 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-4 mx-auto disabled:opacity-80"
          >
            {isLoading ? (
              <>
                <Loader />
                <span>Redirecting...</span>
              </>
            ) : (
              "Get started - It's free!"
            )}
          </button>
        </div>
      </div>
    </section>
  );
}