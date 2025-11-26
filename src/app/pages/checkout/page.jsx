"use client";

import { useEffect, useState } from "react";
import { Check, Lock, ArrowLeft, CreditCard, Sparkles, Shield } from "lucide-react";

export default function CheckoutFlow() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState({
    name: "Pro",
    price: 149,
    badge: "MOST POPULAR",
    badgeColor: "bg-gradient-to-r from-pink-500 to-red-500 text-white"
  });

  const [billingCycle] = useState("monthly");

  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    country: "",
    zipCode: ""
  });

  const plans = [
    { name: "Starter", price: 49, yearlyPrice: 470, badge: "FOR BEGINNERS", badgeColor: "bg-black text-white" },
    { name: "Pro", price: 149, yearlyPrice: 1430, popular: true, badge: "MOST POPULAR", badgeColor: "bg-gradient-to-r from-pink-500 to-red-500 text-white" },
    { name: "Agency", price: 399, yearlyPrice: 3830, badge: "FOR TEAMS", badgeColor: "bg-black text-white" }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setIsProcessing(true);
      setStep(3);

      // Simulate processing (replace with real Stripe later)
      setTimeout(() => {
        alert("Welcome to Creativeklux! Your account is ready");
        setIsProcessing(false);
      }, 4000);
    }
  };

  const currentPrice = billingCycle === "monthly"
    ? selectedPlan.price
    : Math.floor(plans.find(p => p.name === selectedPlan.name)?.yearlyPrice / 12) || selectedPlan.price;

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Complete Your Order
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            14-day free trial • No credit card required until trial ends
          </p>
        </div>

        {/* Progress Steps - 3 Steps */}
        <div className="flex items-center justify-center mb-8 sm:mb-12 gap-2 sm:gap-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <button
                onClick={() => s <= step && setStep(s)}
                disabled={s > step || step === 3}
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full font-bold text-sm sm:text-base transition-all ${
                  step >= s 
                    ? "bg-[#155dfc] text-white scale-110" 
                    : "bg-gray-200 text-gray-500"
                } ${s <= step && step !== 3 ? "cursor-pointer hover:scale-125" : "cursor-not-allowed"}`}
              >
                {step > s ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : s}
              </button>
              {s < 3 && (
                <div className={`w-24 sm:w-32 lg:w-40 h-1 mx-1 sm:mx-2 transition-all ${
                  step > s ? "bg-[#155dfc]" : "bg-gray-200"
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 sm:p-8">
              
              {/* Back to Pricing Button - Always visible */}
              <button
                onClick={() => setStep(1)}
                className="inline-flex cursor-pointer hover:underline items-center gap-2 text-[#155dfc] hover:text-[#0d44b3] mb-6 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              {/* Step 1: Account Creation */}
              {step === 1 && (
                <div className="space-y-6 mt-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      Create Your Account
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                      We'll use this to set up your workspace
                    </p>
                  </div>

                  <div className="space-y-4">
                    <input type="email" name="email" onChange={handleInputChange} placeholder="you@company.com" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#155dfc] focus:outline-none transition-colors" required />
                    <input type="text" name="fullName" onChange={handleInputChange} placeholder="John Doe" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#155dfc] focus:outline-none transition-colors" required />
                    <input type="password" name="password" placeholder="Create a strong password" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#155dfc] focus:outline-none transition-colors" required />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#155dfc] cursor-pointer text-white font-bold py-3 rounded-lg hover:bg-[#0d44b3] transition-all hover:scale-[1.02] hover:shadow-lg"
                  >
                    Continue to Payment
                  </button>
                </div>
              )}

              {/* Step 2: Payment Details */}
              {step === 2 && (
                <div className="space-y-6 mt-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      Payment Details
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Your trial starts today. We'll charge you after 14 days.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <input type="text" name="cardNumber" onChange={handleInputChange} placeholder="4242 4242 4242 4242" maxLength={19} className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:border-[#155dfc] focus:outline-none transition-colors" />
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" name="expiry" onChange={handleInputChange} placeholder="MM/YY" maxLength={5} className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#155dfc] focus:outline-none transition-colors" />
                      <input type="text" name="cvv" onChange={handleInputChange} placeholder="123" maxLength={4} className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#155dfc] focus:outline-none transition-colors" />
                    </div>

                    <select name="country" onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#155dfc] focus:outline-none transition-colors">
                      <option>Select Country</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                    </select>

                    <input type="text" name="zipCode" onChange={handleInputChange} placeholder="10001" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#155dfc] focus:outline-none transition-colors" />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isProcessing}
                    className="w-full bg-[#155dfc] cursor-pointer text-white font-bold py-3 rounded-lg hover:bg-[#0d44b3] transition-all hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <Lock className="w-5 h-5" />
                    {isProcessing ? "Processing..." : "Start Free Trial"}
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    By confirming, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              )}

              {/* Step 3: Processing */}
              {step === 3 && (
                <div className="py-16 text-center">
                  <div className="max-w-md mx-auto">
                    {/* Animated Success Icon */}
                    <div className="mb-8 relative">
                      <div className="w-32 h-32 mx-auto relative">
                        {/* Outer rotating ring */}
                        <div className="absolute inset-0 border-4 border-[#155dfc]/20 rounded-full animate-spin-slow"></div>
                        
                        {/* Middle pulsing ring */}
                        <div className="absolute inset-2 bg-[#155dfc]/10 rounded-full animate-pulse-scale"></div>
                        
                        {/* Inner icon container */}
                        {/* <div className="absolute inset-4 bg-gradient-to-br from-[#155dfc] to-[#0d44b3] rounded-full flex items-center justify-center shadow-2xl animate-float">
                          <Sparkles className="w-12 h-12 text-white animate-sparkle" />
                        </div> */}
                        
                        {/* Floating particles */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#155dfc] rounded-full animate-particle-1"></div>
                        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-500 rounded-full animate-particle-2"></div>
                        <div className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-500 rounded-full animate-particle-3"></div>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      Processing Your Order...
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Setting up your workspace and starting your free trial
                    </p>

                    {/* Modern Progress Bar */}
                    <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#155dfc] to-purple-300  animate-progress-bar"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                    </div>

                    {/* Processing steps */}
                    <div className="mt-8 space-y-3 text-left">
                      <div className="flex items-center gap-3 opacity-100 animate-fade-in">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Creating your account...</span>
                      </div>
                      <div className="flex items-center gap-3 opacity-100 animate-fade-in-delay-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Setting up workspace...</span>
                      </div>
                      <div className="flex items-center gap-3 opacity-100 animate-fade-in-delay-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Activating your trial...</span>
                      </div>
                    </div>

                    <style jsx>{`
                      @keyframes spin-slow {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                      }
                      
                      @keyframes pulse-scale {
                        0%, 100% { transform: scale(1); opacity: 0.5; }
                        50% { transform: scale(1.1); opacity: 0.8; }
                      }
                      
                      @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                      }
                      
                      @keyframes sparkle {
                        0%, 100% { transform: rotate(0deg) scale(1); }
                        25% { transform: rotate(-10deg) scale(1.1); }
                        75% { transform: rotate(10deg) scale(0.9); }
                      }
                      
                      @keyframes particle-1 {
                        0%, 100% { transform: translate(0, 0); opacity: 1; }
                        50% { transform: translate(-20px, -20px); opacity: 0; }
                      }
                      
                      @keyframes particle-2 {
                        0%, 100% { transform: translate(0, 0); opacity: 1; }
                        50% { transform: translate(20px, 20px); opacity: 0; }
                      }
                      
                      @keyframes particle-3 {
                        0%, 100% { transform: translate(0, 0); opacity: 1; }
                        50% { transform: translate(25px, -15px); opacity: 0; }
                      }
                      
                      @keyframes progress-bar {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                      }
                      
                      @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                      }
                      
                      @keyframes fade-in {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                      }
                      
                      .animate-spin-slow {
                        animation: spin-slow 3s linear infinite;
                      }
                      
                      .animate-pulse-scale {
                        animation: pulse-scale 2s ease-in-out infinite;
                      }
                      
                      .animate-float {
                        animation: float 3s ease-in-out infinite;
                      }
                      
                      .animate-sparkle {
                        animation: sparkle 2s ease-in-out infinite;
                      }
                      
                      .animate-particle-1 {
                        animation: particle-1 2s ease-in-out infinite;
                      }
                      
                      .animate-particle-2 {
                        animation: particle-2 2.5s ease-in-out infinite;
                      }
                      
                      .animate-particle-3 {
                        animation: particle-3 2.2s ease-in-out infinite;
                      }
                      
                      .animate-progress-bar {
                        animation: progress-bar 2s ease-in-out infinite;
                      }
                      
                      .animate-shimmer {
                        animation: shimmer 2s ease-in-out infinite;
                      }
                      
                      .animate-fade-in {
                        animation: fade-in 0.5s ease-out forwards;
                      }
                      
                      .animate-fade-in-delay-1 {
                        animation: fade-in 0.5s ease-out 0.5s forwards;
                        opacity: 0;
                      }
                      
                      .animate-fade-in-delay-2 {
                        animation: fade-in 0.5s ease-out 1s forwards;
                        opacity: 0;
                      }
                    `}</style>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary - Always visible */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-center mb-4">
                  <span className={`${selectedPlan.badgeColor} px-3 py-1 rounded-md text-xs font-bold tracking-wide`}>
                    {selectedPlan.badge}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">{selectedPlan.name} Plan</p>
                    <p className="text-sm text-gray-500">Billed monthly</p>
                  </div>
                  <p className="font-bold text-gray-900">${currentPrice}<span className="text-sm text-gray-500">/mo</span></p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Due today</span>
                  <span className="font-bold text-green-600">$0.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Due after trial</span>
                  <span className="font-bold text-gray-900 text-xl">${currentPrice}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">14-day free trial starts today</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">Cancel anytime</p>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">Secure 256-bit SSL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mt-12 flex-wrap">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Shield className="w-5 h-5" />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Lock className="w-5 h-5" />
            <span>PCI Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Check className="w-5 h-5" />
            <span>Money-back Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
}