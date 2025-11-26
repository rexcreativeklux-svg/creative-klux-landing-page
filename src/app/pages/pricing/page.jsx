"use client";

import Link from "next/link";
import { Check, Sparkles, StopCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for freelancers & creators just getting started",
    badge: "FOR BEGINNERS",
    badgeColor: "bg-black text-white",
    popular: false,
    features: [
      "100 AI generations/month",
      "All creative types",
      "Basic brand kit",
      "1080p export",
      "Commercial license",
      "Email support",
    ],
    cta: "Start Free Trial",
    planId: "starter",
    rotation: -2,
  },
  {
    name: "Pro",
    price: "$149",
    period: "/month",
    description: "For growing teams and serious marketers",
    badge: "MOST POPULAR",
    badgeColor: "bg-gradient-to-r from-pink-500 to-red-500 text-white",
    popular: true,
    features: [
      "Unlimited AI generations",
      "Priority rendering",
      "Unlimited brand kits",
      "4K export",
      "AI voiceovers",
      "A/B testing",
      "Priority support",
      "API access",
    ],
    cta: "Start Free Trial",
    planId: "pro",
    rotation: 0,
  },
  {
    name: "Agency",
    price: "$399",
    period: "/month",
    iption: "For agencies & brands running high-volume campaigns",
    badge: "FOR TEAMS",
    badgeColor: "bg-black text-white",
    popular: false,
    features: [
      "Everything in Pro",
      "Client workspaces",
      "White-label",
      "Account manager",
      "Custom AI training",
      "Bulk generation",
      "99.9% uptime SLA",
      "Early access",
    ],
    cta: "Start Free Trial",
    planId: "agency",
    rotation: 2,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            Choose Your Creative Power
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Replace 6+ tools with one AI studio. 
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              style={{
                transform: plan.rotation ? `rotate(${plan.rotation}deg)` : 'none'
              }}
              className={`${
                plan.popular
                  ? "bg-black text-white"
                  : "bg-white border-2 border-gray-200 text-gray-900"
              } flex flex-col cursor-pointer rounded-xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden`}
            >
              {/* Badge */}
              <div className="flex justify-center mb-4">
                <span className={`${plan.badgeColor} px-3 py-1 rounded-md text-xs sm:text-sm font-bold tracking-wide`}>
                  {plan.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className={`text-2xl sm:text-3xl font-bold text-center mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm sm:text-base text-center mb-6 ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                {plan.description}
              </p>

              {/* Features */}
              <div className="relative mb-6 flex-grow">
                {plan.popular ? (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-white text-gray-900 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-transform hover:scale-105 cursor-pointer"
                        style={{
                          transform: `rotate(${(idx % 3 - 1) * 2}deg)`
                        }}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-100 text-gray-900 px-2 py-2 rounded-full text-xs sm:text-sm font-semibold text-center transition-transform hover:scale-105 cursor-pointer"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Pricing & CTA */}
              <div className="flex justify-between items-end mt-auto">
                <div className="flex items-end">
                  <span className="text-3xl sm:text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className={`text-base sm:text-lg font-medium mb-1 ml-1 ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.period}
                  </span>
                </div>

                {/* CHANGED: Now uses Link with planId */} 
                <Link
                  href={`../pages/checkout?plan=${plan.planId}`}
                  className={`${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 text-white hover:from-orange-600 hover:via-pink-600 hover:to-pink-700"
                      : "bg-white text-gray-900 border border-gray-200 hover:border-gray-300"
                  } text-sm sm:text-base font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap`}
                >
                  {plan.cta}
                </Link>
              </div>

              {plan.cta.includes("Trial") && (
                <p className={`mt-4 text-xs sm:text-sm text-center ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                  14-day free trial • No credit card required
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Trust & Guarantee */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-gray-600">
            Join 10,000+ creators, agencies & brands already using Creativeklux to 10x their creative output.
          </p>
        </div>
      </div>
    </div>
  );
}