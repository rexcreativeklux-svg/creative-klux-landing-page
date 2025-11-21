'use client';

export default function PricingSection() {
    const plans = [
        {
            badge: 'FOR BEGINNERS',
            badgeColor: 'bg-black text-white',
            title: 'Free Forever',
            price: '$0',
            priceSubtext: '',
            features: [
                'Customizable link-in-bio',
                'Smart Reply Auto-DMs',
                'Sell with 9% Seller Fees',
                'Auto-updating Media Kits',
                'Video Hosting',
                '5 Email Automations'
            ],
            buttonText: 'Start for free',
            buttonStyle: 'bg-white text-gray-900 border border-gray-200 hover:border-gray-200 cursor-pointer',
            cardStyle: 'bg-white border-2 border-gray-200 transform: `rotate(${(index % 5 - 2) * 1.5}deg)',
            textColor: 'text-gray-900',
            rotation: -2 
        },
        {
            badge: 'MOST POPULAR',
            badgeColor: 'bg-gradient-to-r from-pink-500 to-red-500 text-white',
            title: 'Creator Plus',
            price: '$30',
            priceSubtext: '/month',
            features: [
                'All Free Features',
                'Free Custom Domain',
                '0% Seller Fees',
                'BNPL',
                'Free Custom Domain'
            ],
            buttonText: 'Upgrade',
            buttonStyle: 'bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 cursor-pointer text-white hover:from-orange-600 hover:via-pink-600 hover:to-pink-700',
            cardStyle: 'bg-black',
            textColor: 'text-white',
            popular: true,
            rotation: 0
        },
        {
            badge: 'FOR TEAMS',
            badgeColor: 'bg-black text-white',
            title: 'Business',
            price: '$99',
            priceSubtext: '/month',
            features: [
                'All Creator Plus Features',
                'Priority Support',
                'Team Collaboration',
                'Advanced Analytics',
                'White Label Options',
                'API Access'
            ],
            buttonText: 'Contact Sales',
            buttonStyle: 'bg-white text-gray-900 border border-gray-200 cursor-pointer hover:border-gray-200',
            cardStyle: 'bg-white border-2 border-gray-200',
            textColor: 'text-gray-900',
            rotation: 2 
        }
    ];

    return (
        <section className="py-5 sm:py-5 md:py-5 lg:py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-6xl mx-auto">
                        Get the best bang for your buck on the internet
                    </h2>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PricingCard({ plan }) {
    return (
        <div style={{
            transform: plan.rotation ? `rotate(${plan.rotation}deg)` : 'none'
        }} className={`${plan.cardStyle} flex cursor-pointer flex-col justify-between gap-4 rounded-xl p-6 sm:px-4 sm:py-6 shadow-lg transition-transform duration-300 hover:scale-[1.02] relative overflow-hidden`}>
            {/* Badge */}
            <div className="flex justify-center mb-4">
                <span className={`${plan.badgeColor} px-3 py-1 rounded-md text-xs sm:text-sm font-bold tracking-wide`}>
                    {plan.badge}
                </span>
            </div>

            {/* Title */}
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${plan.textColor} text-center mb-5`}>
                {plan.title}
            </h3>

            {/* Features - Grid for Free Plan, Scattered for Popular */}
            <div className="relative mb-5">
                {plan.popular ? (
                    // Scattered Pills for Creator Plus
                    <div className="flex flex-wrap gap-2 justify-center">
                        {plan.features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white cursor-pointer text-gray-900 px-4 sm:px-5 py-2 sm:py-2 rounded-full text-xs sm:text-xs font-semibold whitespace-nowrap transition-transform hover:scale-105"
                                style={{
                                    transform: `rotate(${(idx % 3 - 1) * 2}deg)`
                                }}
                            >
                                {feature}
                            </div>
                        ))}
                    </div>
                ) : (
                    // Grid Layout for Free Forever and Business
                    <div className="grid grid-cols-2 gap-2">
                        {plan.features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-100 cursor-pointer text-gray-900 px-2 sm:px-2 py-2 sm:py-2 rounded-full text-xs sm:text-xs font-semibold text-center transition-transform hover:scale-105"
                            >
                                {feature}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Pricing */}
            <div className={`text-center flex justify-between items-end ${plan.textColor}`}>
                <div className="flex items-end justify-center">
                    <span className="text-2xl sm:text-3xl font-bold">
                        {plan.price}
                    </span>
                    {plan.priceSubtext && (
                        <span className="text-lg sm:text-lg font-medium mb-1 ml-1 opacity-80">
                            {plan.priceSubtext}
                        </span>
                    )}
                </div>

                {/* CTA Button */}
                <div>
                    <button className={`${plan.buttonStyle} text-sm sm:text-base font-bold px-4 py-2 rounded-md transition-all duration-300 hover:scale-[1.02] hover:shadow whitespace-nowrap`}>
                        {plan.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}