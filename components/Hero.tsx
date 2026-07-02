"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 px-6 md:px-12 select-none overflow-hidden"
    >
      {/* Decorative luxury abstract lines */}
      <div className="absolute top-[25%] right-[10%] w-[320px] h-[320px] opacity-15 dark:opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold-base dark:text-gold-light">
          <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center z-10 relative">
        {/* Kicker badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-base/20 bg-gold-light/10 dark:bg-gold-base/5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-base animate-pulse" />
          <span className="font-sans text-[11px] font-semibold tracking-widest uppercase text-gold-dark dark:text-gold-light">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-5xl md:text-8xl tracking-tight font-bold text-neutral-warm-800 dark:text-neutral-warm-50 leading-[1.05]"
        >
          Mrig Naini{" "}
          <span className="font-serif italic font-light text-gold-base relative inline-block">
            Mudgal
            <svg
              className="absolute -bottom-2 left-0 w-full h-[6px] text-blush-base/30 dark:text-gold-base/15 pointer-events-none"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 font-sans text-lg md:text-2xl text-neutral-warm-800/80 dark:text-neutral-warm-100/80 font-normal max-w-2xl mx-auto leading-relaxed flex flex-wrap items-center justify-center gap-2.5 md:gap-3"
        >
          <span className="font-medium text-neutral-warm-900 dark:text-neutral-warm-50">AI Engineer</span>
          <span className="text-gold-base/60">•</span>
          <span className="font-medium text-neutral-warm-900 dark:text-neutral-warm-50">Developer</span>
          <span className="text-gold-base/60">•</span>
          <span className="text-neutral-warm-800/70 dark:text-neutral-warm-100/70">B.Tech Computer Science Student</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Action Button */}
          <a
            href="#projects"
            onClick={(e) => handleScrollClick(e, "#projects")}
            className="group relative px-8 py-4 w-full sm:w-auto font-sans text-sm tracking-wider font-semibold uppercase rounded-full overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg border border-neutral-warm-800 dark:border-neutral-warm-100 bg-neutral-warm-800 hover:bg-transparent dark:bg-neutral-warm-100 dark:hover:bg-transparent text-neutral-warm-50 hover:text-neutral-warm-800 dark:text-neutral-warm-900 dark:hover:text-neutral-warm-100 flex items-center justify-center gap-2"
          >
            See My Work
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Secondary Action Button */}
          <a
            href="/assets/Mrignaini_Resume_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 w-full sm:w-auto font-sans text-sm tracking-wider font-semibold uppercase rounded-full border border-neutral-warm-800/20 hover:border-neutral-warm-800 dark:border-neutral-warm-100/20 dark:hover:border-neutral-warm-100 text-neutral-warm-800 dark:text-neutral-warm-100 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-neutral-warm-100/30 dark:hover:bg-neutral-warm-800/10 shadow-sm"
          >
            Open CV
          </a>
        </motion.div>
      </div>

      {/* Hero Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 left-50 -translate-x-50 flex flex-col items-center gap-2 select-none"
      >
        <span className="font-sans text-[11px] font-semibold tracking-widest uppercase text-neutral-warm-800 dark:text-neutral-warm-100">
          Scroll
        </span>
        <a
          href="#about"
          onClick={(e) => handleScrollClick(e, "#about")}
          className="group p-2 rounded-full border border-neutral-warm-200/50 hover:border-gold-base dark:border-neutral-warm-800/50 transition-colors duration-300 animate-bounce"
          aria-label="Scroll to About Section"
        >
          <ChevronDown className="w-4 h-4 text-neutral-warm-800 dark:text-neutral-warm-100 group-hover:text-gold-base" />
        </a>
      </motion.div>

      {/* Hero Index N° Indicator */}
      <div className="absolute top-[40%] right-8 md:right-12 hidden lg:flex flex-col items-center gap-2 select-none font-serif italic text-sm tracking-widest text-neutral-warm-800/40 dark:text-neutral-warm-50/30 writing-mode-vertical">
        N° 001 — PORTFOLIO 2026
      </div>
    </section>
  );
}
