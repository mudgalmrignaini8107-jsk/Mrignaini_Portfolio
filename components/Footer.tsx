"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-neutral-warm-900 dark:bg-luxury-bg-dark border-t border-neutral-warm-800/40 text-neutral-warm-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs tracking-wider">
          <span className="font-serif italic text-gold-light mr-1">桜</span>
          Mrig Naini Mudgal — 2026
        </p>
        <p className="font-sans text-xs tracking-wide">
          Designed &amp; built with intention.
        </p>
      </div>
    </footer>
  );
}
