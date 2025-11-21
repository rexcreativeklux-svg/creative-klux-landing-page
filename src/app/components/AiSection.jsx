'use client';

export default function AIFeaturesSection() {
    const features = [
        'Social Asset Generation',
        'Ready for You Email Marketing',
        'Social Digest Emails',
        'Email Automations',
        'Product Descriptions',
        'Audience Intelligence',
        'Image Thumbnails'
    ];

    return (
        <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-black overflow-hidden">
            {/* 3D Grid Background with Animation */}
            <div className="absolute inset-0 opacity-60">
                <div className="absolute inset-0 grid-animation" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    transform: 'perspective(1000px) rotateX(60deg)',
                    transformOrigin: 'center top'
                }}>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* AI Icon */}
                <div className="flex justify-center mb-10 sm:mb-12">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                        {/* Outer orbital ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-blue-500/50 animate-spin-slow">
                            {/* Orbital dot */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                        </div>
                        
                        {/* Inner ring */}
                        <div className="absolute inset-4 rounded-full border-2 border-blue-500/70">
                            {/* Orbital dot */}
                            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                        </div>
                        
                        {/* Center star */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-12 h-12">
                                {/* Four-pointed star */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-cyan-400 shadow-lg shadow-cyan-400/50" style={{
                                        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                                    }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        AI that Helps You Work Smarter
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                        An AI learning engine that gets smarter the more you use it—by building promotional emails, writing copy, and generating data insights.
                    </p>
                </div>

                {/* Feature Pills - Scattered Layout */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <FeaturePill key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>

            {/* Add custom animations */}
            <style jsx>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                @keyframes grid-move {
                    from {
                        background-position: 0 0;
                    }
                    to {
                        background-position: 0 -80px;
                    }
                }
                
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
                
                .grid-animation {
                    animation: grid-move 2s linear infinite;
                }
            `}</style>
        </section>
    );
}

function FeaturePill({ feature, index }) {
    return (
        <div
            className="bg-black text-white border border-white/80 hover:border-white px-6 sm:px-3 py-3 sm:py-2 rounded-full text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
        
        >
            {feature}
        </div>
    );
}