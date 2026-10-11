"use client";

export default function TestimonialSection() {
  const testimonials = [
    {
      image: "",
      quote:
        '"Creativeklux completely replaced my design workflow. I generate ad creatives, thumbnails, and social posts in minutes — what used to take me hours with a designer."',
      name: "Theoriisworld",
      role: "Gaming Creator",
    },
    {
      image: "",
      quote:
        '"I used to outsource my ad creatives for every campaign. Now I generate everything inside Creativeklux and my CTR has never been better."',
      name: "Keegan Robin",
      role: "Photographer & Content Creator",
    },
    {
      image: "",
      quote:
        '"The AI understands my brand instantly. Every creative it generates looks like it came from a professional agency — not a template tool."',
      name: "Suki Lu",
      role: "Lifestyle Creator",
    },
    {
      image: "",
      quote:
        '"Creativeklux is perfect for anyone who wants to grow their brand online without hiring a full creative team. The output quality is genuinely impressive."',
      name: "FlavorsbyFrangipane",
      role: "Food & Lifestyle Creator",
    },
  ];

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            The most ambitious creators love Creative Klux. You will too.
          </h2>
        </div>
      </div>

      {/* Marquee from sm up; a swipeable snap list on a phone — see the media
          query below for why. */}
      <div className="relative w-full snap-x snap-mandatory overflow-x-auto sm:snap-none sm:overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-6 px-4 sm:px-0 animate-scroll-left">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
          width: max-content;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
        /* A card is about as wide as a phone, so the moving row parks a whole one
           on screen only ~1/6 of the time — the rest of the time every quote is
           cut off mid-line by the viewport edge. Below sm the row stops and the
           reader swipes it instead, one card snapping to centre at a time. */
        @media (max-width: 639px) {
          .animate-scroll-left {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    // 85vw on a phone, so a whole card fits on screen with the next one just
    // showing at the edge. At a flat w-96 the card is as wide as the viewport, and
    // since the marquee is always mid-scroll every card sat half off-screen with
    // its quote cut down the middle.
    <div className="bg-white flex flex-col justify-between rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 w-[85vw] max-w-96 sm:w-96 shrink-0 snap-center">
      <div className="flex flex-col">
        {testimonial.image && (
          <div className="mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-gray-100">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        <blockquote className="mb-4">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {testimonial.quote}
          </p>
        </blockquote>
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-1">
          {testimonial.name}
        </h4>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  );
}
