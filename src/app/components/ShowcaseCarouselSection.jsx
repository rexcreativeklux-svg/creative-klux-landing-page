'use client';

export default function ShowcaseCarouselSection() {
    // First row - larger cards
    const row1Designs = [
        { 
            image: '/images/email.png', 
            alt: 'Corporate Value Design'
        },
        { 
            image: '/images/two.png',
            alt: 'Market Value Design'
        },
        { 
            image: '/images/three.png',
            alt: 'Silent Factors Design'
        },
        { 
            image: '/images/four.png',
            alt: 'Market Value More Than Price'
        },
        { 
            image: '/images/five.png',
            alt: 'Market Value Reflects'
        },
        { 
            image: '/images/six.png',
            alt: 'Invisible Factors'
        },
    ];

    // Second row - medium cards
    const row3Designs = [
        { 
            image: '/images/seven.png',
            alt: 'Real Life Example'
        },
        { 
            image: '/images/eight.png',
            alt: 'Factors That Affect'
        },
        { 
            image: '/images/nine.png',
            alt: 'Ready to Redefine'
        },
        { 
            image: '/images/ten.png',
            alt: 'Marketing Design'
        },
        { 
            image: '/images/eleven.png',
            alt: 'Business Growth'
        },
    ];

    // Third row - smaller cards
    const row2Designs = [
        { image: '/images/twelve.png', alt: 'Design 12' },
        { image: '/images/thirteen.png', alt: 'Design 13' },
        { image: '/images/fourteen.png', alt: 'Design 14' },
        { image: '/images/fifteen.png', alt: 'Design 15' },
        { image: '/images/sixteen.png', alt: 'Design 16' },
        { image: '/images/seventeen.png', alt: 'Design 17' },
        { image: '/images/eighteen.png', alt: 'Design 18' },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
                {/* Section Header */}
                <div className="text-center">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Powered by Creative Klux
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                        Create stunning designs. Choose from hundreds of professionally designed templates or build your own from scratch.
                    </p>
                </div>
            </div>

            {/* Carousel Rows */}
            <div className="space-y-8">
                {/* First Row - Moving Left */}
                <CarouselRow designs={row1Designs} direction="left" size="large" />
                
                {/* Second Row - Moving Right */}
                <CarouselRow designs={row2Designs} direction="right" size="medium" />
                
                {/* Third Row - Moving Left */}
                <CarouselRow designs={row3Designs} direction="left" size="small" />
            </div>

            {/* Animation Styles.
                A plain <style>, not styled-jsx: CarouselRow starts these keyframes
                from an inline `animation` by name, and styled-jsx both scopes the
                name and scopes the rule to THIS component's elements — so the rows,
                which are a separate component, never matched and never moved. The
                names are prefixed instead, since a plain <style> is global. */}
            <style>{`
                @keyframes klux-scroll-left {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                @keyframes klux-scroll-right {
                    from { transform: translateX(-50%); }
                    to   { transform: translateX(0); }
                }
            `}</style>
        </section>
    );
}

function CarouselRow({ designs, direction, size }) {
    // Duplicate designs for infinite scroll
    const duplicatedDesigns = [...designs, ...designs, ...designs];
    
    // Cards step down on small screens so a phone shows a card and a bit of the
    // next rather than one card wider than the screen.
    const sizeClasses = {
        large: 'h-[300px] w-[190px] sm:h-[380px] sm:w-[240px] lg:h-[450px] lg:w-[280px]',
        medium: 'h-[200px] w-[270px] sm:h-[260px] sm:w-[350px] lg:h-[300px] lg:w-[400px]',
        small: 'h-[300px] w-[190px] sm:h-[380px] sm:w-[240px] lg:h-[450px] lg:w-[280px]'
    };

    return (
        <div className="relative w-full">
            <div className="flex gap-4 sm:gap-6 w-max" style={{
                animation: direction === 'left' ? 'klux-scroll-left 40s linear infinite' : 'klux-scroll-right 40s linear infinite'
            }}>
                {duplicatedDesigns.map((design, index) => (
                    <DesignCard 
                        key={index} 
                        design={design} 
                        sizeClass={sizeClasses[size]}
                    />
                ))}
            </div>
        </div>
    );
}

function DesignCard({ design, sizeClass }) {
    return (
        <div className={`${sizeClass} rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer`}>
            <img 
                src={design.image} 
                alt={design.alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
}