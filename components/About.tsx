"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Cpu, MapPin } from "lucide-react";

export default function About() {
  const metaItems = [
    {
      icon: <GraduationCap className="w-5 h-5 text-gold-base" />,
      label: "Education",
      value: "B.Tech CS, IPEC — AKTU",
      subValue: "2024 – 2028 (Expected)",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-gold-base" />,
      label: "Currently",
      value: "Python Full Stack Intern",
      subValue: "EduSkill Foundation",
    },
    {
      icon: <Cpu className="w-5 h-5 text-gold-base" />,
      label: "Focus",
      value: "LLM Integration & RAG",
      subValue: "Full Stack Engineering",
    },
    {
      icon: <MapPin className="w-5 h-5 text-gold-base" />,
      label: "Based In",
      value: "India",
      subValue: "Available for Remote Work",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-[5%] left-[5%] w-[250px] opacity-10 dark:opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 40" className="w-full text-neutral-warm-800 dark:text-neutral-warm-100">
          <path d="M0 30 Q12 10 25 30 T50 30 T75 30 T100 30" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] font-bold tracking-widest uppercase text-gold-base block mb-3"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-neutral-warm-800 dark:text-neutral-warm-50 tracking-wide uppercase"
          >
            A PASSION FOR ENGINEERING INTELLIGENCE
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Text & Meta details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <p className="font-sans text-lg md:text-xl text-neutral-warm-800/90 dark:text-neutral-warm-100/95 leading-relaxed">
              I am a <strong className="font-semibold text-neutral-warm-900 dark:text-neutral-warm-50">Computer Science undergraduate (Class of 2028)</strong> with hands-on experience building full-stack, AI-powered applications using RAG pipelines, LLM integration, and secure API architectures. Having completed an intensive full-stack development internship and independently designed two end-to-end projects featuring OAuth 2.0 authentication, semantic search, and multi-LLM systems, I am currently seeking Software Engineering / AI-ML internship opportunities.
            </p>

            {/* Grid of meta specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {metaItems.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-2xl border border-neutral-warm-200/50 dark:border-neutral-warm-800/10 bg-neutral-warm-100/30 dark:bg-neutral-warm-800/5 hover:border-gold-base/30 dark:hover:border-gold-base/15 transition-all duration-300 shadow-sm"
                >
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <span className="block font-sans text-[10px] font-bold tracking-widest uppercase text-gold-base mb-1">
                      {item.label}
                    </span>
                    <h3 className="font-sans text-[15px] font-bold text-neutral-warm-800 dark:text-neutral-warm-100">
                      {item.value}
                    </h3>
                    {item.subValue && (
                      <span className="block font-sans text-xs text-neutral-warm-800/60 dark:text-neutral-warm-100/60 mt-0.5">
                        {item.subValue}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Uncropped Profile Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group p-3 bg-neutral-warm-100/40 dark:bg-neutral-warm-800/10 border border-neutral-warm-200/40 dark:border-neutral-warm-800/20 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 max-w-[380px] w-full">
              {/* Gold corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-base rounded-tl-[2.5rem] -translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-base rounded-br-[2.5rem] translate-x-1 translate-y-1" />
              
              <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-neutral-warm-200/50 to-neutral-warm-100 dark:from-neutral-warm-800 dark:to-neutral-warm-900 border border-neutral-warm-200/30 dark:border-neutral-warm-800/30 aspect-[3/4]">
                <img
                  src="/assets/profile-photo.png"
                  alt="Mrig Naini Mudgal Profile Photo"
                  className="w-full h-full object-contain filter saturate-[0.95] contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
