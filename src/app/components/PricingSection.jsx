'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BILLING_CYCLES, TIERS, getFeatures } from '@/app/pricing';

export default function PricingSection() {
    const [cycleId, setCycleId] = useState('monthly');
    const cycle = BILLING_CYCLES.find((c) => c.id === cycleId);

    const plans = TIERS.map((tier) => ({
        badge: tier.badge,
        badgeColor: tier.badgeColor,
        title: tier.name,
        price: `$${tier.packages[cycleId].price}`,
        priceSubtext: cycle.period,
        features: getFeatures(tier, cycleId),
        buttonText: 'Get started',
        href: `/pages/checkout?plan=${tier.id}&billing=${cycleId}`,
        buttonStyle: tier.popular
            ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 cursor-pointer text-white hover:from-orange-600 hover:via-pink-600 hover:to-pink-700'
            : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-200 cursor-pointer',
        cardStyle: tier.popular ? 'bg-black' : 'bg-white border-2 border-gray-200',
        textColor: tier.popular ? 'text-white' : 'text-gray-900',
        popular: tier.popular,
        rotation: tier.rotation
    }));

    return (
        <section className="py-5 sm:py-5 md:py-5 lg:py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-6xl mx-auto">
                        Get the best bang for your buck on the internet
                    </h2>

                    {/* Billing cycle toggle */}
                    <div className="mt-6 inline-flex flex-wrap justify-center gap-1 rounded-xl border-2 border-gray-200 bg-white p-1">
                        {BILLING_CYCLES.map((c) => (
                            <button
                                key={c.id}
                                onClick={() => setCycleId(c.id)}
                                aria-pressed={c.id === cycleId}
                                className={`${c.id === cycleId ? 'bg-black text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer rounded-lg px-4 sm:px-6 py-2 text-sm sm:text-base font-bold transition-colors`}
                            >
                                {c.label}
                                {c.note && (
                                    <span className={`ml-2 text-xs font-semibold ${c.id === cycleId ? 'text-pink-300' : 'text-pink-600'}`}>
                                        {c.note}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {cycleId === 'lifetime' && (
                        <p className="mt-4 text-sm sm:text-base text-gray-500">
                            Pay once, keep access for life. Tokens and creatives refresh every month.
                        </p>
                    )}
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
                    <Link href={plan.href} className={`${plan.buttonStyle} inline-block text-sm sm:text-base font-bold px-4 py-2 rounded-md transition-all duration-300 hover:scale-[1.02] hover:shadow whitespace-nowrap`}>
                        {plan.buttonText}
                    </Link>
                </div>
            </div>
        </div>
    );
}