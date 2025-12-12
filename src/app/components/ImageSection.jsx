'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ImageSection() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            // Calculate scroll progress within the section
            // Start transition when section is in middle of viewport
            const startTransition = sectionTop;
            const endTransition = sectionTop + (sectionHeight * 0.4); // Transition over 40% of section height

            if (scrollPosition < startTransition) {
                // Before section - text visible
                setScrollProgress(0);
            } else if (scrollPosition >= startTransition && scrollPosition <= endTransition) {
                // During transition
                const progress = (scrollPosition - startTransition) / (endTransition - startTransition);
                setScrollProgress(progress);
            } else {
                // After transition - images visible
                setScrollProgress(1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const creators = [
        {
            name: 'JESSE GOLD',
            theme: 'dark',
            image: '/images/imageone.png',
            layout: 'large'
        },
        {
            name: 'Suki',
            followers: '603.3k',
            theme: 'light',
            image: '/images/imagetwo.png',
            layout: 'medium'
        },
        {
            name: 'thatpetra',
            followers: '532.4k',
            theme: 'gaming',
            image: '/images/imagethree.png',
            layout: 'medium'
        },
        {
            name: 'Kelly Youjin Kim',
            theme: 'minimal',
            image: '/images/imagefour.png',
            layout: 'medium'
        },
        {
            name: 'Income Tracker',
            theme: 'product',
            image: '/images/imagefive.png',
            layout: 'wide'
        },
        {
            name: 'HYPE HOUSE',
            theme: 'dark-brand',
            image: '/images/imagesix.png',
            layout: 'large'
        },
        {
            name: 'ethan.got',
            theme: 'pastel',
            image: '/images/imageseven.png',
            layout: 'square'
        },
        {
            name: 'Dog Photography',
            theme: 'product-card',
            image: '/images/imageeight.png',
            layout: 'tall'
        }
    ];

    // Calculate opacity values - ensure they don't overlap
    const textOpacity = Math.max(0, 1 - (scrollProgress * 2)); // Fades faster
    const imageOpacity = Math.max(0, (scrollProgress - 0.3) * 2); // Starts fading in later

    return (
        <section ref={sectionRef} className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-black overflow-hidden  flex items-center justify-center">
            {/* Text Overlay - Fades out as you scroll */}
            <div 
                className="absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-500"
                style={{ 
                    opacity: textOpacity,
                    pointerEvents: textOpacity < 0.1 ? 'none' : 'auto'
                }}
            >
                <div className="text-center px-4">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                        Made with
                    </h2>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Creative Klux
                    </h2>
                </div>
            </div>

            {/* Image Collage - Fades in as you scroll */}
            <div 
                className="relative w-full max-w-7xl mx-auto px-4 transition-all duration-500"
                style={{ 
                    opacity: imageOpacity,
                    transform: `scale(${0.9 + (imageOpacity * 0.1)})`,
                    pointerEvents: imageOpacity < 0.5 ? 'none' : 'auto'
                }}
            >
                {/* Masonry Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {/* Row 1 */}
                    <CreatorCard 
                        creator={creators[0]} 
                        className="row-span-2 col-span-1"
                    />
                    <CreatorCard 
                        creator={creators[1]} 
                        className="row-span-2 col-span-1"
                    />
                    <CreatorCard 
                        creator={creators[4]} 
                        className="row-span-1 col-span-2"
                    />

                    {/* Row 2 */}
                    <CreatorCard 
                        creator={creators[2]} 
                        className="row-span-2 col-span-1"
                    />
                    <CreatorCard 
                        creator={creators[3]} 
                        className="row-span-2 col-span-1"
                    />

                    {/* Row 3 */}
                    <CreatorCard 
                        creator={creators[6]} 
                        className="row-span-2 col-span-1"
                    />
                    <CreatorCard 
                        creator={creators[5]} 
                        className="row-span-2 col-span-1"
                    />
                    <CreatorCard 
                        creator={creators[7]} 
                        className="row-span-2 col-span-1"
                    />
                </div>

            </div>
        </section>
    );
}

function CreatorCard({ creator, className }) {
    const themeStyles = {
        dark: 'bg-gradient-to-br from-gray-800 to-gray-900 text-white',
        light: 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-900',
        gaming: 'bg-gradient-to-br from-purple-900 to-pink-900 text-white',
        minimal: 'bg-gradient-to-br from-gray-100 to-white text-gray-900',
        product: 'bg-gradient-to-br from-pink-100 to-purple-100 text-gray-900',
        'dark-brand': 'bg-gradient-to-br from-gray-900 to-black text-white',
        pastel: 'bg-gradient-to-br from-pink-200 to-blue-200 text-gray-900',
        'product-card': 'bg-white text-gray-900'
    };

    return (
        <div className={`${className} ${themeStyles[creator.theme]} rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer relative group`}>
            {/* Background Image */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Overlay */}
            {/* <div className="relative h-full p-4 sm:p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                        {creator.name}
                    </h3>
                    {creator.followers && (
                        <p className="text-sm opacity-80">{creator.followers} followers</p>
                    )}
                </div>

               
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-xs">📱</span>
                    </div>
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-xs">🎵</span>
                    </div>
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-xs">📷</span>
                    </div>
                </div>
            </div> */}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    );
}