'use client';

import { useState } from 'react';

export default function CarouselSlider({ 
  speed = 40, 
  direction = 'left',
  pauseOnHover = true 
}) {
  const [isPaused, setIsPaused] = useState(false);

  // Sample creator data - replace with your own
  const creators = [
    {
      name: 'Coffee & Matcha',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
      borderColor: 'border-gray-800',
      width: 'w-40 sm:w-48 md:w-56 lg:w-64'
    },
    {
      name: 'Lauren Riihimaki',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      borderColor: 'border-pink-400',
      width: 'w-48 sm:w-56 md:w-64 lg:w-72'
    },
    {
      name: 'Maya Polar Bear',
      category: 'Pet',
      image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=400&fit=crop',
      borderColor: 'border-amber-200',
      width: 'w-44 sm:w-52 md:w-60 lg:w-68'
    },
    {
      name: 'Excision',
      category: 'DJ',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop',
      borderColor: 'border-gray-900',
      width: 'w-36 sm:w-44 md:w-52 lg:w-60'
    },
    {
      name: 'Soulection',
      category: 'Music',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      borderColor: 'border-gray-900',
      width: 'w-40 sm:w-48 md:w-56 lg:w-64'
    },
    {
      name: 'DaiAlissa',
      category: 'Gaming',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      borderColor: 'border-amber-700',
      width: 'w-52 sm:w-60 md:w-68 lg:w-76'
    },
    {
      name: 'Jae Park',
      category: 'Music',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      borderColor: 'border-blue-600',
      width: 'w-44 sm:w-52 md:w-60 lg:w-68'
    },
    {
      name: 'Molly Grace',
      category: 'Music',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      borderColor: 'border-red-400',
      width: 'w-48 sm:w-56 md:w-64 lg:w-72'
    },
    {
      name: 'Def Leppard',
      category: 'Band',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      borderColor: 'border-gray-800',
      width: 'w-40 sm:w-48 md:w-56 lg:w-64'
    },
    {
      name: 'Sarah Chen',
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop',
      borderColor: 'border-purple-500',
      width: 'w-36 sm:w-44 md:w-52 lg:w-60'
    }
  ];

  const animationStyle = {
    animationDuration: `${speed}s`,
    animationPlayState: pauseOnHover && isPaused ? 'paused' : 'running',
    animationDirection: direction === 'right' ? 'reverse' : 'normal'
  };

  return (
    <section className="w-full overflow-hidden bg-linear-to-b from-white via-gray-50 to-white py-12 sm:py-16 md:py-20">
   
      {/* Carousel Container */}
      <div className="relative">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-14 bg-linear-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
        
        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-14 bg-linear-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div
          className="flex animate-infinite-scroll"
          style={animationStyle}
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
          {/* Original Set */}
          {creators.map((creator, index) => (
            <CreatorCard key={`original-${index}`} creator={creator} />
          ))}
          {/* Duplicate Set for Seamless Loop */}
          {creators.map((creator, index) => (
            <CreatorCard key={`duplicate-${index}`} creator={creator} />
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}

// Creator Card Component
function CreatorCard({ creator }) {
  return (
    <div className="shrink-0 px-2 sm:px-3 md:px-4">
      <div className="group cursor-pointer">
        {/* Card - Same height but different widths */}
        <div 
          className={`
            ${creator.width}
            h-30 sm:h-40 md:h-40 lg:h-50
            bg-white rounded-xl overflow-hidden 
            shadow-lg hover:shadow-2xl
            transform hover:scale-95 hover:-translate-y-2
            transition-all duration-300 ease-out
          `}
        >
          {/* Image Container with Overlay Text */}
          <div className="relative w-full h-full overflow-hidden bg-gray-100">
            {/* Image */}
            <img
              src={creator.image}
              alt={creator.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Gradient Overlay - Always visible at bottom */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Text Overlay at Bottom */}
            <div className="absolute flex bg-white rounded-md flex-row justify-between bottom-2 left-2 right-2 p-3 sm:p-2 z-10">
              <h3 className="font-bold text-sm sm:text-base lg:text-md truncate drop-shadow-lg">
                {creator.name}
              </h3>
              <p className="text-xs sm:text-xs font-medium py-1 drop-shadow-lg">
                {creator.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}