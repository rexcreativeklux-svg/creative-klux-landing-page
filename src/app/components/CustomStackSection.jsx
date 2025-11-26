"use client";

export default function CustomStack() {
  const integrations = [
    // Left side - Social Media Platforms
    { 
      name: 'Facebook', 
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-blue-600 to-blue-700', 
      position: 'left-[10%] top-[25%]' 
    },
    { 
      name: 'Instagram', 
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500', 
      position: 'left-[10%] top-[55%]' 
    },
    
    // Left-center - Social Media
    { 
      name: 'Twitter/X', 
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-gray-900 to-black', 
      position: 'left-[22%] top-[15%]' 
    },
    { 
      name: 'LinkedIn', 
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-blue-600 to-blue-700', 
      position: 'left-[22%] top-[45%]' 
    },
    { 
      name: 'TikTok', 
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-gray-900 to-black', 
      position: 'left-[22%] top-[75%]' 
    },
    
    // Right-center - Ads Platforms
    { 
      name: 'Google Ads', 
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path fill="#4285F4" d="M12 2L2.5 20h3l3.5-6h10.5z"/>
          <path fill="#FBBC04" d="M16.5 14L12 6l-4.5 8z"/>
          <path fill="#EA4335" d="M21.5 20L18 14h-6l3.5 6z"/>
        </svg>
      ),
      color: 'bg-white', 
      position: 'right-[10%] top-[15%]' 
    },
    { 
      name: 'Meta Ads', 
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M24 12.073C24 5.445 18.627 0 12 0S0 5.445 0 12.073c0 6.024 4.388 11.019 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.235 2.686.235v2.971H15.83c-1.491 0-1.956.931-1.956 1.886v2.248h3.328l-.532 3.49h-2.796v8.437C19.612 23.092 24 18.097 24 12.073z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-blue-600 to-blue-700', 
      position: 'right-[10%] top-[45%]' 
    },
    { 
      name: 'Pinterest Ads', 
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-red-600 to-red-700', 
      position: 'right-[10%] top-[75%]' 
    },
    
    // Right side - Ads Platforms
    { 
      name: 'Bing Ads', 
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M2.05 2v19.97l6.06 2.03V9.11l6.54 3.87-3.36 1.65v3.89l10.71-6.55V7.03z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-green-500 to-green-600', 
      position: 'right-[-3%] top-[25%]' 
    },
    { 
      name: 'LinkedIn Ads', 
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-blue-700 to-blue-800', 
      position: 'right-[-3%] top-[55%]' 
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 via-white to-white" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center justify-center mb-8">
          <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wide border border-blue-200">
            Integrations
          </span>
        </div>

        {/* Heading */}
       <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-gray-900">Connect your</span>{' '}
          <span className="text-blue-600">Social & Ad platforms</span>
        </h1>

        {/* Description */}
       <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-20 leading-relaxed">
          Run personalized campaigns across every channel. Sync leads, trigger messages, and track conversions — all from one place.
        </p>

        {/* Integration Hub Visualization */}
        <div className="relative max-w-5xl mx-auto h-[500px] mb-12">
          {/* Central Hub with Glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            
            {/* Central box with logo */}
            <div className="relative z-20 w-40 h-40 bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl border border-blue-400/30"
                 style={{ boxShadow: '0 0 80px rgba(59, 130, 246, 0.4)' }}>
              {/* ConvertFlow Logo placeholder */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-3 h-8 bg-white rounded-sm transform -rotate-12" />
                  <div className="w-3 h-8 bg-white rounded-sm" />
                  <div className="w-3 h-8 bg-white rounded-sm transform rotate-12" />
                </div>
              </div>
            </div>

            {/* Connection lines visualization */}
            <svg className="absolute inset-0 w-[800px] h-[600px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 pointer-events-none" style={{ filter: 'drop-shadow(0 0 2px rgba(59, 130, 246, 0.3))' }}>
              {/* Left connections */}
              <path d="M 400 300 L 200 200" stroke="#3b82f6" strokeWidth="2" opacity="0.2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              <path d="M 400 300 L 200 300" stroke="#3b82f6" strokeWidth="2" opacity="0.2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              
              {/* Left-center connections */}
              <path d="M 400 300 L 280 180" stroke="#3b82f6" strokeWidth="2" opacity="0.2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              <path d="M 400 300 L 280 280" stroke="#3b82f6" strokeWidth="2" opacity="0.2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              <path d="M 400 300 L 280 400" stroke="#3b82f6" strokeWidth="2" opacity="0.2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              
              {/* Right-center connections */}
              <path d="M 400 300 L 520 180" stroke="#3b82f6" strokeWidth="2" opacity="0.2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              <path d="M 400 300 L 520 280" stroke="#3b82f6" strokeWidth="2" opacity="0.2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              <path d="M 400 300 L 520 400" stroke="#3b82f6" strokeWidth="2" opacity="0.2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              
              {/* Right connections */}
              <path d="M 400 300 L 600 200" stroke="#3b82f6" strokeWidth="2" opacity="0.2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              <path d="M 400 300 L 600 300" stroke="#3b82f6" strokeWidth="2" opacity="0.2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>

              {/* Sync arrows */}
              <g opacity="0.4">
                <circle cx="320" cy="300" r="12" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2">
                  <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
                </circle>
                <path d="M 315 300 L 320 295 L 325 300 L 320 305 Z" fill="white" />
              </g>
              <g opacity="0.4">
                <circle cx="480" cy="300" r="12" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2">
                  <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
                </circle>
                <path d="M 475 300 L 480 295 L 485 300 L 480 305 Z" fill="white" />
              </g>
            </svg>
          </div>

          {/* Integration Icons */}
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`absolute ${integration.position} transform -translate-x-1/2 -translate-y-1/2`}
              style={{
                animation: `fadeInScale 0.8s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="group cursor-pointer">
                <div
                  className={`w-20 h-20 rounded-2xl ${integration.color} flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 border border-gray-100`}
                >
                  {integration.logo}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm">
          Plus, many <span className="text-gray-700 font-semibold">more integrations</span>
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}