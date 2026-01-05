import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * ESClients.jsx
 *
 * Improved clients marquee:
 * - Seamless horizontal loop using duplicated content
 * - Pause / Play control (keyboard accessible)
 * - Edge fade masks for smooth entry/exit of logos
 * - Circular logo tiles with subtle hover/focus animations
 * - Respects prefers-reduced-motion: animation stopped and grid shown instead
 * - Responsive sizes, accessible markup
 *
 * Usage: place below services/process sections.
 */

const logos = [
  {
    key: "google",
    title: "Google",
    svg: (
      <svg viewBox="0 0 80 40" className="w-full h-full" aria-hidden="true">
        <g fill="none">
          <rect width="80" height="40" rx="6" fill="#fff" />
          <g transform="translate(8,8)">
            <circle cx="8" cy="8" r="8" fill="#4285F4" />
            <rect x="24" y="2" width="36" height="12" rx="4" fill="#34A853" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    key: "microsoft",
    title: "Microsoft",
    svg: (
      <svg viewBox="0 0 80 40" className="w-full h-full" aria-hidden="true">
        <rect width="80" height="40" rx="6" fill="#fff" />
        <g transform="translate(10,6)" fill="none" stroke="none">
          <rect x="0" y="0" width="8" height="8" fill="#F35325" />
          <rect x="10" y="0" width="8" height="8" fill="#81BC06" />
          <rect x="0" y="10" width="8" height="8" fill="#05A6F0" />
          <rect x="10" y="10" width="8" height="8" fill="#FFBA08" />
        </g>
      </svg>
    ),
  },
  {
    key: "amazon",
    title: "Amazon",
    svg: (
      <svg viewBox="0 0 80 40" className="w-full h-full" aria-hidden="true">
        <rect width="80" height="40" rx="6" fill="#fff" />
        <g transform="translate(6,8)" fill="#111827">
          <text x="0" y="13" fontSize="10" fontWeight="700" fontFamily="sans-serif">
            amazon
          </text>
          <path d="M4 24c4 2 12 2 18 0" stroke="#F59E0B" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    ),
  },
  {
    key: "apple",
    title: "Apple",
    svg: (
      <svg viewBox="0 0 80 40" className="w-full h-full" aria-hidden="true">
        <rect width="80" height="40" rx="6" fill="#fff" />
        <g transform="translate(14,5)" fill="#111827">
          <path d="M8 0c1.6 0 2.6 1 3.2 2 0.7 1.3 1.1 2.8 0 4.4-1.1 1.3-2.2 2.2-3.8 2.2s-3.7-1.2-4.5-2.4C1.9 5.1 2.1 3 3.9 2 4.9 1.3 6.2 0 8 0z" />
        </g>
      </svg>
    ),
  },
  {
    key: "meta",
    title: "Meta",
    svg: (
      <svg viewBox="0 0 80 40" className="w-full h-full" aria-hidden="true">
        <rect width="80" height="40" rx="6" fill="#fff" />
        <g transform="translate(6,10)" fill="none" stroke="#0064E6" strokeWidth="1.8">
          <path d="M0 8c1.5-4 6-6 9-3s6 4.5 10 3 7-5 10-3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    ),
  },
  {
    key: "ibm",
    title: "IBM",
    svg: (
      <svg viewBox="0 0 80 40" className="w-full h-full" aria-hidden="true">
        <rect width="80" height="40" rx="6" fill="#fff" />
        <g transform="translate(8,8)" fill="#111827">
          <rect x="0" y="0" width="32" height="2" />
          <rect x="0" y="4" width="32" height="2" />
          <rect x="0" y="8" width="32" height="2" />
        </g>
      </svg>
    ),
  },
];

const ESClients = () => {
  const marqueeRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [duration, setDuration] = useState(28); // seconds for full cycle

  // If user prefers reduced motion, disable animation (handled in CSS too)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPaused(true);
    }
    const handleChange = () => setPaused(mq.matches);
    mq.addEventListener?.("change", handleChange);
    return () => mq.removeEventListener?.("change", handleChange);
  }, []);

  // Slightly vary speed based on viewport width for consistency
  useEffect(() => {
    const updateDuration = () => {
      const w = window.innerWidth;
      if (w < 640) setDuration(20);
      else if (w < 1024) setDuration(24);
      else setDuration(28);
    };
    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  const togglePaused = () => setPaused((p) => !p);

  // Accessible keyboard handler for marquee container (space toggles)
  const onMarqueeKey = (e) => {
    if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      togglePaused();
    }
  };

  // Duplicate the logos so the marquee loops seamlessly
  const repeated = [...logos, ...logos];

  return (
    <section id="clients" className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <style>{`
        :root {
          --marquee-duration: ${duration}s;
        }

        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee {
          display: flex;
          gap: 1.25rem;
          align-items: center;
          will-change: transform;
          animation: marquee-left var(--marquee-duration) linear infinite;
        }

        .marquee.paused {
          animation-play-state: paused;
        }

        /* Edge fade masks */
        .marquee-mask::before,
        .marquee-mask::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 10%;
          pointer-events: none;
        }
        .marquee-mask::before {
          left: 0;
          background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
        }
        .marquee-mask::after {
          right: 0;
          background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none !important; transform: none !important; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Our Clients</h2>
              <p className="text-gray-600 mt-1 max-w-2xl">
                We partner with organizations across industries. A selection of brands we’ve worked with:
              </p>
            </div>

            {/* <div className="ml-auto flex items-center gap-2">
              <button
                onClick={togglePaused}
                onKeyDown={(e) => {
                  if (e.key === "Enter") togglePaused();
                }}
                aria-pressed={paused}
                aria-label={paused ? "Play client logos" : "Pause client logos"}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-2 text-sm shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-300"
                title={paused ? "Play" : "Pause"}
              >
                {paused ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" className="text-gray-700" aria-hidden="true">
                      <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                    <span className="text-gray-700">Play</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" className="text-gray-700" aria-hidden="true">
                      <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                    <span className="text-gray-700">Pause</span>
                  </>
                )}
              </button>
            </div> */}
          </div>
        </motion.div>

        <div className="relative mt-6">
          {/* Gradient background band */}
          <div className="absolute inset-x-0 top-6 bottom-6 rounded-xl bg-gradient-to-r from-white/60 via-white to-white/60 pointer-events-none" />

          {/* Marquee viewport */}
          <div
            className="relative overflow-hidden rounded-xl"
            role="region"
            aria-label="Client logos"
            onKeyDown={onMarqueeKey}
          >
            <div className="marquee-mask relative">
              <div
                ref={marqueeRef}
                className={`marquee ${paused ? "paused" : ""}`}
                tabIndex={0}
                aria-hidden={false}
                // allow pausing with hover/focus as well
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => {
                  // only resume automatically if user didn't prefer reduced motion
                  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
                  if (!mq.matches) setPaused(false);
                }}
                onFocus={() => setPaused(true)}
                onBlur={() => {
                  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
                  if (!mq.matches) setPaused(false);
                }}
                style={{
                  // ensure smooth loop: width multiple will be automatically handled by duplicated content
                  alignItems: "center",
                }}
              >
                {repeated.map((l, idx) => (
                  <div
                    key={`${l.key}-${idx}`}
                    className="flex-shrink-0 w-44 sm:w-52 md:w-56 lg:w-64 h-28 md:h-32 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center"
                    style={{ minWidth: 176 }}
                  >
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="w-full h-full flex items-center justify-center px-4"
                      aria-label={l.title}
                    >
                      <div className="w-28 h-14 md:w-32 md:h-16 flex items-center justify-center">
                        {/* subtle grayscale to make brand logos feel consistent; remove if using true brand colors */}
                        <div className="filter grayscale opacity-80 hover:grayscale-0 transition-all duration-300">
                          {l.svg}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-gray-400">Hover or focus to pause the scroll</div>
        </div>
      </div>
    </section>
  );
};

export default ESClients;