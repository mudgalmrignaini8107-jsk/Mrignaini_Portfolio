"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Scroll state
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active item detection
      const sections = NAV_ITEMS.map((item) => {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          return {
            id: item.href,
            top: rect.top + window.scrollY - 150,
            bottom: rect.bottom + window.scrollY - 150,
          };
        }
        return null;
      }).filter((section) => section !== null) as { id: string; top: number; bottom: number }[];

      const currentScroll = window.scrollY;
      const active = sections.find(
        (sec) => currentScroll >= sec.top && currentScroll < sec.bottom
      );

      if (active) {
        setActiveItem(active.id);
      } else if (currentScroll < 100) {
        setActiveItem("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Initial theme check
    const isDark = document.documentElement.classList.contains("dark") || 
      (localStorage.getItem("theme") === "dark") || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    if (isDark) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-luxury-bg-light/75 dark:bg-luxury-bg-dark/75 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(44,42,39,0.04)] border-b border-neutral-warm-200/30 dark:border-neutral-warm-800/10"
          : "py-7 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex items-center gap-2 text-neutral-warm-800 dark:text-neutral-warm-50 font-sans tracking-wide text-lg md:text-xl font-medium"
        >
          <span className="font-serif italic font-semibold text-gold-base group-hover:text-gold-dark transition-colors duration-300">
            桜
          </span>
          <span className="relative">
            Mrig Naini
            <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-gold-base transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative font-sans text-sm tracking-wider uppercase py-2 transition-all duration-300 hover:text-gold-base ${
                    activeItem === item.href
                      ? "text-gold-base font-semibold"
                      : "text-neutral-warm-800/70 dark:text-neutral-warm-100/70"
                  }`}
                >
                  {item.label}
                  {activeItem === item.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-base rounded-full animate-fade-in" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-neutral-warm-200 dark:bg-neutral-warm-800/50" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-neutral-warm-200/50 dark:border-neutral-warm-800/40 hover:bg-neutral-warm-100/50 dark:hover:bg-neutral-warm-800/30 text-neutral-warm-800 dark:text-neutral-warm-50 transition-all duration-300 shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-neutral-warm-800" />
            ) : (
              <Sun className="w-4 h-4 text-gold-light" />
            )}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-neutral-warm-200/50 dark:border-neutral-warm-800/40 hover:bg-neutral-warm-100/50 dark:hover:bg-neutral-warm-800/30 text-neutral-warm-800 dark:text-neutral-warm-50 transition-colors shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-4.5 h-4.5" />
            ) : (
              <Sun className="w-4.5 h-4.5 text-gold-light" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-warm-800 dark:text-neutral-warm-50 hover:bg-neutral-warm-100/50 dark:hover:bg-neutral-warm-800/30 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[69px] left-0 right-0 bottom-0 bg-luxury-bg-light/95 dark:bg-luxury-bg-dark/95 backdrop-blur-2xl z-40 border-t border-neutral-warm-200/30 dark:border-neutral-warm-800/20 py-8 px-6 animate-slide-down">
          <ul className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block text-xl font-medium tracking-wide py-2 transition-all hover:text-gold-base ${
                    activeItem === item.href
                      ? "text-gold-base font-semibold border-l-2 border-gold-base pl-3"
                      : "text-neutral-warm-800/80 dark:text-neutral-warm-50/80"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
