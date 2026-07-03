"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Terminal, Cpu } from "lucide-react";

export default function Skills() {
  const cards = [
    {
      num: "01",
      icon: <Code2 className="w-6 h-6 text-gold-base" />,
      title: "Programming Languages",
      desc: "Architecting clean, type-safe, and structured logic for backend servers, data analysis pipelines, and relational query engines.",
      tags: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
    },
    {
      num: "02",
      icon: <Terminal className="w-6 h-6 text-gold-base" />,
      title: "Full-Stack Development",
      desc: "Engineering robust, scalable web services, handling user sessions and authentication, and managing distributed relational database systems.",
      tags: [
        "Django",
        "FastAPI",
        "Flask",
        "React",
        "PostgreSQL",
        "Supabase",
        "REST APIs",
        "JWT Authentication",
      ],
    },
    {
      num: "03",
      icon: <Cpu className="w-6 h-6 text-gold-base" />,
      title: "AI/ML & Intelligent Workflows",
      desc: "Developing autonomous AI agents, implementing Retrieval-Augmented Generation (RAG) vector pipelines, orchestrating intelligent workflows, and creating AI-powered business applications.",
      tags: [
        "AI Agent Development",
        "Generative AI",
        "Large Language Models",
        "RAG Pipeline Design",
        "Machine Learning",
        "Automation",
        "Intelligent Workflows",
        "AI-powered Applications",
        "ChromaDB Vector Store",
        "Tesseract OCR",
        "Google Cloud APIs",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
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
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-neutral-warm-800 dark:text-neutral-warm-50 tracking-wide uppercase"
          >
            WHAT I DO
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              key={index}
              className="group relative flex flex-col justify-between p-8 md:p-10 rounded-[2rem] border border-neutral-warm-200/50 dark:border-neutral-warm-800/10 bg-neutral-warm-100/30 dark:bg-neutral-warm-800/5 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-gold-base/30 dark:hover:border-gold-base/15"
            >
              {/* Inner card light-glow effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif italic text-sm text-gold-base font-semibold">
                    {card.num}
                  </span>
                  <div className="p-3.5 rounded-2xl bg-neutral-warm-100 dark:bg-neutral-warm-800/40 text-gold-base shadow-sm">
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-sans text-2xl font-bold text-neutral-warm-800 dark:text-neutral-warm-50 mb-4 leading-tight group-hover:text-gold-base transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-neutral-warm-800/70 dark:text-neutral-warm-100/70 leading-relaxed mb-8">
                  {card.desc}
                </p>
              </div>

              {/* Badges / Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {card.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="font-sans text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-xl border border-neutral-warm-200/40 dark:border-neutral-warm-800/20 bg-neutral-warm-100/20 dark:bg-neutral-warm-800/5 text-neutral-warm-800 dark:text-neutral-warm-100 transition-all duration-300 group-hover:bg-neutral-warm-100/60 dark:group-hover:bg-neutral-warm-800/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
