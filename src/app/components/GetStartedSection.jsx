'use client';

import { useState } from "react";

export default function GetStartedSection() {
const [isLoading, setIsLoading] = useState(false);

  const creators = [
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop',
      title: 'Get started fast, at any size',
      handle: '@niuviews',
      description: 'worked in digital marketing for 10 years, but when it came to being an entrepreneur and growing her content business, she turned to Beacons to get the tools she needs.'
    },
    {
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop',
      title: 'Build new streams of income',
      handle: '@dailyalissa',
      description: 'All of the ways you make money in one place. Sell your own digital products and templates, link to affiliate products and earn commission, and get brand sponsorships with your media kit'
    },
    {
      image: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=800&h=800&fit=crop',
      title: 'Partner with brands you love',
      handle: '@yeshjadaor',
      description: 'Brand collabs, made easy. Find your favorite brands on Beacons and easily add affiliate links to you Link in Bio, like . Then, use your affiliate conversion data to build long-term relationships.'
    }
  ];

  const handleGetStarted = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "../pages/pricing"; 
    }, 500);
  };

  // Reusable Spinner
  const Loader = () => (
    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
    </svg>
  );

  return (
    <section className="py-5 sm:py-5 md:py-5 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            For every creator, from first posts to fame and fortune
          </h2>
        </div>

        {/* Creator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-9 mb-12">
          {creators.map((creator, index) => (
            <CreatorCard key={index} creator={creator} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
       <button
            onClick={handleGetStarted}
            disabled={isLoading}
            className="relative bg-[#1447e6] hover:bg-blue-700 text-white cursor-pointer text-lg sm:text-xl font-semibold px-8 sm:px-9 py-4 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 disabled:opacity-80"
          >
            {isLoading ? (
              <>
                <Loader />
                <span>Redirecting...</span>
              </>
            ) : (
              "Get started"
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

function CreatorCard({ creator }) {
  return (
    <div className="group">
      {/* Image Container */}
      <div className="relative rounded-2xl cursor-pointer overflow-hidden mb-6 w-[400px] h-[300px] bg-gray-100">
        <img
          src={creator.image}
          alt={creator.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-2xl sm:text-2xl font-bold text-gray-900">
          {creator.title}
        </h3>
        <p className="text-base sm:text-md text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-900">{creator.handle}</span> {creator.description}
        </p>
      </div>
    </div>
  );
}