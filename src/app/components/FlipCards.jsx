"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Target, TrendingUp, Award } from "lucide-react";

const whoItsFor = [
  {
    icon: <Users className="w-7 h-7" />,
    title: "Agencies & SMMA",
    desc: "Scale creative output for multiple clients with fast, high-quality ads and campaigns — no bottlenecks, no designer hiring needed.",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Creators & Influencers",
    desc: "Produce professional thumbnails, social posts, ads, and brand assets in minutes — without ever hiring a designer.",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Brands & E-commerce",
    desc: "Launch high-converting ad campaigns, social content, product visuals, and video ads — perfect for teams without big in-house creative budgets.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Startups & SMEs",
    desc: "Replace multiple design, video, and marketing tools with one lean solution — professional creatives on a startup-friendly budget.",
  },
];

export default function FlipCards() {
  const [flipped, setFlipped] = useState(whoItsFor.map(() => false));
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const intervalRef = useRef(null);
  const cursorRef = useRef(0);
  const hoveredIndexRef = useRef(-1);

  const FLIP_INTERVAL = 1800;
  const SHOW_BACK_DURATION = 1400;

  useEffect(() => {
    hoveredIndexRef.current = hoveredIndex;
  }, [hoveredIndex]);

  useEffect(() => {
    const tick = () => {
      const idx = cursorRef.current;

      if (idx === hoveredIndexRef.current) {
        cursorRef.current = (idx + 1) % whoItsFor.length;
        return;
      }

      setFlipped((prev) => {
        const next = [...prev];
        next[idx] = true;
        return next;
      });

      setTimeout(() => {
        setFlipped((prev) => {
          const next = [...prev];
          if (idx !== hoveredIndexRef.current) next[idx] = false;
          return next;
        });
      }, SHOW_BACK_DURATION);

      cursorRef.current = (idx + 1) % whoItsFor.length;
    };

    intervalRef.current = setInterval(tick, FLIP_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = (i) => {
    setHoveredIndex(i);
    hoveredIndexRef.current = i;
    setFlipped((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });
  };

  const handleMouseLeave = (i) => {
    setHoveredIndex(-1);
    hoveredIndexRef.current = -1;
    setFlipped((prev) => {
      const next = [...prev];
      next[i] = false;
      return next;
    });
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="mb-20">
      <style>{`
        .flip-card-inner {
          transform-style: preserve-3d;
          transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
          width: 100%;
          height: 100%;
          position: relative;
        }
        .flip-card-inner.is-flipped {
          transform: rotateY(180deg);
        }
        .flip-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 0.5rem;
        }
        .flip-face-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <motion.h2
        className="text-3xl md:text-4xl font-black text-center mb-16 text-gray-900 uppercase tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Who the app is for
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        {whoItsFor.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="relative h-72 cursor-pointer"
            style={{ perspective: "1000px" }}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <div className={`flip-card-inner ${flipped[i] ? "is-flipped" : ""}`}>

              {/* FRONT */}
              <div className="flip-face bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute top-3 left-3 text-4xl font-black text-gray-100 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 mb-4"
                  style={{
                    boxShadow: flipped[i] ? "none" : "0 0 0 6px rgba(37,99,235,0.08)",
                  }}
                >
                  {item.icon}
                </div>
                <h4 className="text-sm font-black text-gray-700 uppercase tracking-tight px-4 text-center">
                  {item.title}
                </h4>
                <div className="absolute bottom-4 flex gap-1 items-center opacity-40">
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="block w-1 h-1 rounded-full bg-blue-600" />
                  ))}
                </div>
              </div>

              {/* BACK */}
              <div className="flip-face flip-face-back bg-black border border-gray-800 flex flex-col justify-center items-center text-center px-5">
                <div className="absolute top-3 left-3 text-4xl font-black text-[#1264ff] leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute top-5 right-5">
                  <div className="w-5 h-5 bg-[#1264ff] transform rotate-45" />
                </div>

                <p className="text-white text-sm leading-relaxed">{item.desc}</p>

                <div className="absolute bottom-4 flex justify-between w-full px-4 pt-3 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#1264ff] rounded-sm flex items-center justify-center">
                      <span className="text-black text-[10px] font-bold">✓</span>
                    </div>
                    <span className="text-white text-[11px] font-bold">Service Details</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx} className="text-[#1264ff] text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}