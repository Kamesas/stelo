"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Slide, SLIDES, PricingOption, PRICING } from "./mockData";

const AUTO_PLAY_INTERVAL = 4000; // ms

// ─── Component ────────────────────────────────────────────────────────────────

export default function PDPHero() {
  const [current, setCurrent] = useState(0);
  const [selectedPricing, setSelectedPricing] = useState(0);
  const isAnimating = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  // Refs for each slide image element
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ── Animation helper ────────────────────────────────────────────────────────
  const goTo = useCallback(
    (next: number) => {
      if (isAnimating.current || next === current) return;
      isAnimating.current = true;

      const outEl = slideRefs.current[current];
      const inEl = slideRefs.current[next];

      if (!outEl || !inEl) {
        setCurrent(next);
        isAnimating.current = false;
        return;
      }

      // Bring incoming slide on top during transition
      gsap.set(inEl, { zIndex: 2, opacity: 0 });
      gsap.set(outEl, { zIndex: 1 });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(outEl, { opacity: 0, zIndex: 0 });
          gsap.set(inEl, { zIndex: 1 });
          setCurrent(next);
          isAnimating.current = false;
        },
      });

      tl.to(outEl, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 0)
        .to(inEl, { opacity: 1, duration: 0.5, ease: "power2.inOut" }, 0)
        .to(
          textRef.current,
          {
            color: SLIDES[next].darkText ? "#000" : "#fff",
            duration: 0.5,
            ease: "power2.inOut",
          },
          0,
        );
    },
    [current],
  );

  // ── Auto-play ───────────────────────────────────────────────────────────────
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % SLIDES.length);
    }, AUTO_PLAY_INTERVAL);
  }, [current, goTo]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resetTimer]);

  // ── Initial visibility setup ────────────────────────────────────────────────
  useEffect(() => {
    if (textRef.current) {
      textRef.current?.classList.add(SLIDES[0].darkText ? "text-black" : "");
    }

    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, zIndex: i === 0 ? 1 : 0 });
    });
  }, []);

  // ── Thumbnail click ─────────────────────────────────────────────────────────
  const handleThumbClick = (idx: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    goTo(idx);
  };

  const openAlert = () => {
    console.log("%c- openAlert clicked -", "color: lime; font-size: 20px;");
  };

  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <section className="h-[800] flex items-end justify-center px-4 py-10 relative">
      <style>
        {`
        @import url('https://fonts.1.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');

        .thumb-btn {
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .thumb-btn:hover {
          transform: scale(1.06);
        }
        .thumb-btn.active {
          box-shadow: 0 0 0 2px #C87941;
        }
        .pricing-card {
          cursor: pointer;
          transition: box-shadow 0.2s, background 0.2s;
          border: 1.5px solid #E5DDD5;
          border-radius: 12px;
          padding: 14px 16px;
          background: #FDFAF7;
        }
        .pricing-card:hover {
          border-color: #C87941;
        }
        .pricing-card.selected {
          border-color: #C87941;
          background: #FFF8F2;
          box-shadow: 0 0 0 1px #C87941;
        }
        .add-btn {
          background: #E8A96A;
          color: #fff;
          border: none;
          border-radius: 50px;
          width: 100%;
          padding: 16px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: background 0.2s, transform 0.15s;
        }
        .add-btn:hover {
          background: #C87941;
          transform: translateY(-1px);
        }
      `}
      </style>
      <div className="absolute left-[0] top-[0] w-full h-full z-0">
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            ref={(el) => {
              slideRefs.current[idx] = el;
            }}
            className={`${idx === 0 ? "opacity-100" : "opacity-0"}} inset-0 absolute l-[0] t-[0]`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width="1440"
              height="800"
              className="object-cover max-w-[1440] max-h-800 h-[100%] w-[100%]"
            />
          </div>
        ))}
      </div>
      {/* TOOD remove pointer events on all divs   */}
      <div className="flex justify-between items-end w-full relative z-1 p-8 pointer-events-none">
        <div className="max-w-[450]">
          <div ref={textRef} className="pointer-events-auto">
            <h1 className="text-4xl mb-3">Stelo Glucose Biosensor</h1>
            <p>
              Stelo tracks your glucose with a small arm sensor, showing your
              trends with the app.
            </p>
            <div className="flex items-center gap-2 mt-3 text-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="#6B5B45"
                  strokeWidth="1.5"
                />
                <path
                  d="M5 8l2 2 4-4"
                  stroke="#6B5B45"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              HSA/FSA eligible
            </div>
          </div>
          <div className="mt-4 flex gap-2 items-center pointer-events-auto">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => handleThumbClick(idx)}
                className={`thumb-btn ${idx === current ? "active" : ""}`}
                aria-label={slide.alt}
              >
                <Image
                  src={slide.thumb}
                  alt={slide.alt}
                  width={44}
                  height={44}
                  className="rounded-[4] w-[44px] h-[44px] object-cover"
                />
              </button>
            ))}
            <span className="ml-2">
              {current + 1}/{SLIDES.length}
            </span>
          </div>
        </div>
        {/* ── RIGHT: pricing ──────────────────────────────────────────────── */}
        <div className="w-[325] pointer-events-auto">
          {PRICING.map((option, idx) => (
            // pricing-card
            <div
              key={idx}
              className={`p-[16] rounded-[12] border-[2] bg-[#EBE6E0] ${idx === selectedPricing ? " border-[#F0B377] bg-[rgb(243,233,218)]" : "border-[transparent]"} mt-2 first:mt-0`}
              onClick={() => setSelectedPricing(idx)}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium leading-1.5 text-black mb-1">
                  {option.label}
                </span>
                {/* badge */}
                {option.badge && (
                  <span className="text-[12px] font-[600] text-black px-[6] py-[4] bg-[#F0B377] rounded-[3]">
                    {option.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[20px] text-black">{option.product}</span>
                <span className="text-[20px] text-black">
                  {option.price}&nbsp;
                  {option.originalPrice && (
                    <span className="text-[#291928] text-[14px] font-[400] line-through opacity-60">
                      {option.originalPrice}
                    </span>
                  )}
                </span>
              </div>
              {option.bullets && (
                <ul className="mt-2 pt-2 border-t-1 border-[#29192820]">
                  {option.bullets.map((b) => (
                    <li key={b} className="text-[14px/19px] text-black">
                      • {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <button
            onClick={openAlert}
            className="w-full rounded-full mt-2 bg-[#E8A96A] px-4 py-3 cursor-pointer hover:bg-[#C87941] transition-[background 0.2s]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}
