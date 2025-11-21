'use client';

export default function ShowcaseCarouselSection() {
    // First row - larger cards
    const row1Designs = [
        { bg: 'bg-gradient-to-br from-green-400 to-green-600', title: '10% OFF', subtitle: 'YOUR FIRST ORDER', badge: 'UNLOCK' },
        { bg: 'bg-gradient-to-br from-gray-100 to-gray-200', title: 'CONTINUE →', subtitle: 'YOUR EMAIL', image: true },
        { bg: 'bg-gradient-to-br from-amber-100 to-amber-200', title: 'TAKE THE QUIZ', subtitle: 'Get Your Recommendations in 3 mins', badge: 'Lil Red Jen' },
        { bg: 'bg-gradient-to-br from-blue-50 to-blue-100', title: 'Please select', subtitle: 'Google • Facebook • Instagram', options: true },
        { bg: 'bg-gradient-to-br from-gray-50 to-white', title: 'the essential', subtitle: 'skincare bundle.', price: '$60', stars: true },
        { bg: 'bg-gradient-to-br from-pink-200 to-pink-300', title: 'FOR THE SMELL', subtitle: 'TO RELAX • FOR THE VIBE', candle: true },
    ];

    // Second row - medium cards
    const row2Designs = [
        { bg: 'bg-white', title: 'FLOW', subtitle: 'Limited Time Offer • 25% OFF', product: 'skincare', badge: 'SAVE 25%' },
        { bg: 'bg-gradient-to-br from-orange-100 to-peach-200', title: 'Find your flow', subtitle: 'state with ease', price: '$79.00', featured: true },
        { bg: 'bg-gradient-to-br from-gray-900 to-black text-white', title: 'the essential', subtitle: 'skincare bundle.', dark: true },
        { bg: 'bg-white', title: 'SUBSCRIBE & SAVE', subtitle: '20% + FREE SHIPPING', flow: true },
        { bg: 'bg-gradient-to-br from-amber-50 to-amber-100', title: 'MEMBER', subtitle: 'Get Your Fix Now', exclusive: true },
    ];

    // Third row - smaller cards
    const row3Designs = [
        { bg: 'bg-gradient-to-br from-pink-300 to-pink-400 text-white', title: "You've got", subtitle: '10% Off', brand: 'FLOW' },
        { bg: 'bg-gradient-to-br from-gray-900 to-black text-white', title: '$15 OFF', subtitle: 'YOUR FIRST ORDER', brand: 'FLOW' },
        { bg: 'bg-gradient-to-br from-green-400 to-green-500', title: '60% OFF', subtitle: 'Your First Month', brand: 'numan' },
        { bg: 'bg-gradient-to-br from-blue-50 to-blue-100', title: 'Meal Bowl Plan', subtitle: '$99.99 $89.99', brand: 'eaRK' },
        { bg: 'bg-gradient-to-br from-green-600 to-green-700 text-white', title: 'UNLOCK', subtitle: '10% OFF', product: 'juice' },
        { bg: 'bg-gradient-to-br from-gray-50 to-white', title: 'Bundle & save $20!', subtitle: 'Upgrade your order', offer: true },
        { bg: 'bg-white', title: 'BROW PENCIL', subtitle: 'SHADE FINDER', brand: 'THE SHADE LAB' },
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

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes scroll-left {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
                
                @keyframes scroll-right {
                    from {
                        transform: translateX(-50%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
                
                .animate-scroll-left {
                    animation: scroll-left 40s linear infinite;
                }
                
                .animate-scroll-right {
                    animation: scroll-right 40s linear infinite;
                }
            `}</style>
        </section>
    );
}

function CarouselRow({ designs, direction, size }) {
    // Duplicate designs for infinite scroll
    const duplicatedDesigns = [...designs, ...designs, ...designs];
    
    const sizeClasses = {
        large: 'h-[400px] w-[250px]',
        medium: 'h-[300px] w-[400px]',
        small: 'h-[400px] w-[250px]'
    };

    return (
        <div className="relative w-full">
            <div className="flex gap-6 w-max" style={{
                animation: direction === 'left' ? 'scroll-left 40s linear infinite' : 'scroll-right 40s linear infinite'
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
        <div className={`${sizeClass} ${design.bg} rounded-2xl shadow-lg p-6 flex flex-col justify-between relative overflow-hidden group hover:scale-105 transition-transform duration-300`}>
            {/* Badge */}
            {design.badge && (
                <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                    {design.badge}
                </div>
            )}

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center">
                {design.brand && (
                    <div className="text-sm font-bold mb-2 tracking-wider">
                        {design.brand}
                    </div>
                )}
                
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    {design.title}
                </h3>
                
                <p className="text-sm opacity-90">
                    {design.subtitle}
                </p>

                {design.stars && (
                    <div className="flex items-center mt-2">
                        <div className="flex text-yellow-400">
                            {'★★★★★'.split('').map((star, i) => (
                                <span key={i}>{star}</span>
                            ))}
                        </div>
                        <span className="text-xs ml-2">Loved by 1 million customers</span>
                    </div>
                )}

                {design.price && (
                    <div className="text-2xl font-bold mt-2">
                        {design.price}
                    </div>
                )}

                {design.options && (
                    <div className="space-y-2 mt-4">
                        <button className="w-full py-2 bg-white rounded-lg text-sm font-medium">Google</button>
                        <button className="w-full py-2 bg-white rounded-lg text-sm font-medium">Facebook</button>
                    </div>
                )}
            </div>

            {/* Bottom CTA or Input */}
            <div className="mt-4">
                {design.image || design.product ? (
                    <div className="h-20 bg-white/50 rounded-lg"></div>
                ) : (
                    <div>
                        <input 
                            type="email" 
                            placeholder="YOUR EMAIL" 
                            className="w-full px-4 py-2 rounded-lg mb-2 text-sm"
                        />
                        <button className="w-full bg-black text-white py-2 rounded-lg text-sm font-bold">
                            {design.dark ? 'Unlock 25% OFF now' : 'GET 10% OFF →'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}