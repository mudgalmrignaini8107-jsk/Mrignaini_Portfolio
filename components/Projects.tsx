"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Trophy, Sparkles, Users, Award } from "lucide-react";
import { Github } from "./icons";

export default function Projects() {
  const projects = [
    {
      num: "N° 01",
      title: "AI Meeting Prep Agent — AURA",
      desc: "A full-stack system that generates intelligent meeting briefs by synthesizing Google Calendar events and Gmail conversations. It features OAuth 2.0 + JWT authentication for secure Google API integration, powered by an LLM-driven RAG pipeline for smart email and document summarization.",
      stack: ["FastAPI", "React", "PostgreSQL", "Google APIs", "OAuth 2.0", "JWT"],
      image: "/assets/project-aura.png",
      github: "https://github.com/mrignaini",
    },
    {
      num: "N° 02",
      title: "LexiMind AI — Legal Intelligence Platform",
      desc: "A retrieval-augmented platform for complex contract analysis combining BM25 keyword matching with semantic vector search for a high-recall dual-retrieval pipeline. Includes a multi-LLM fallback layer for reliable reasoning and Tesseract OCR integration for processing scanned legal documents.",
      stack: ["React", "FastAPI", "ChromaDB", "Supabase", "Tesseract OCR", "RAG"],
      image: "/assets/project-leximind.png",
      github: "https://github.com/mrignaini",
    },
  ];

  const achievements = [
    {
      icon: <Trophy className="w-5 h-5 text-gold-base" />,
      title: "Top 10 Finalist — TechSprint Hackathon",
      org: "GDG IPEC",
      desc: "Developed Waste2Grow, an AI-powered smart waste management solution designed to optimize urban collection routes and classification.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold-base" />,
      title: "Kaggle Community Olympiad",
      org: "Kaggle Community",
      desc: "Designed and trained a Lifestyle Risk prediction model that achieved a classification accuracy of 84.4%.",
    },
    {
      icon: <Award className="w-5 h-5 text-gold-base" />,
      title: "DevNovate GenIgnite Hackathon",
      org: "GenIgnite",
      desc: "Created an accessible AI audio description and narration experience for visually impaired users.",
    },
    {
      icon: <Users className="w-5 h-5 text-gold-base" />,
      title: "Hackathon Organizer — HackTheDen",
      org: "HackTheDen",
      desc: "Coordinated technical execution, sponsored API integrations, and participant outreach programs.",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] font-bold tracking-widest uppercase text-gold-base block mb-3"
          >
            Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-4xl md:text-5xl font-extrabold text-neutral-warm-800 dark:text-neutral-warm-50 tracking-tight"
          >
            FEATURED PROJECTS
          </motion.h2>
        </div>

        {/* Projects list */}
        <div className="space-y-24 md:space-y-36">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Frame (Uncropped and aspect ratio preserved) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-last" : ""}`}
              >
                <div className="relative group p-4 md:p-6 bg-neutral-warm-100/40 dark:bg-neutral-warm-800/10 border border-neutral-warm-200/50 dark:border-neutral-warm-800/20 rounded-[2.5rem] shadow-lg hover:shadow-xl transition-all duration-500 flex items-center justify-center aspect-[16/10]">
                  {/* Subtle inner card overlay */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-gold-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Complete uncropped image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain rounded-2xl select-none transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                </div>
              </motion.div>

              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="lg:col-span-6 flex flex-col gap-6"
              >
                <span className="font-serif italic text-sm text-gold-base font-semibold">
                  {project.num}
                </span>
                <h3 className="font-sans text-3xl md:text-4xl font-extrabold text-neutral-warm-800 dark:text-neutral-warm-50 leading-tight">
                  {project.title}
                </h3>
                <p className="font-sans text-base md:text-lg text-neutral-warm-800/80 dark:text-neutral-warm-100/85 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2.5 mt-2">
                  {project.stack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="font-sans text-xs px-3.5 py-1.5 rounded-full border border-neutral-warm-200/60 dark:border-neutral-warm-800/30 bg-neutral-warm-100/30 dark:bg-neutral-warm-800/10 text-neutral-warm-800 dark:text-neutral-warm-100 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Github Link */}
                <div className="mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-warm-800/20 hover:border-neutral-warm-800 dark:border-neutral-warm-100/20 dark:hover:border-neutral-warm-100 font-sans text-xs tracking-wider uppercase font-semibold text-neutral-warm-800 dark:text-neutral-warm-100 transition-all duration-300 hover:bg-neutral-warm-100/30 dark:hover:bg-neutral-warm-800/10"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Hackathons & Achievements Section */}
        <div className="mt-32 pt-20 border-t border-neutral-warm-200/50 dark:border-neutral-warm-800/10">
          <div className="text-center mb-16">
            <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-gold-base">
              Hackathons & Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={idx}
                className="group p-8 rounded-[2rem] border border-neutral-warm-200/50 dark:border-neutral-warm-800/10 bg-neutral-warm-100/20 dark:bg-neutral-warm-800/5 hover:border-gold-base/30 dark:hover:border-gold-base/15 transition-all duration-300 shadow-sm"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-neutral-warm-100 dark:bg-neutral-warm-800/40 text-gold-base shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] font-bold tracking-widest uppercase text-gold-base mb-1">
                      {item.org}
                    </span>
                    <h4 className="font-sans text-lg font-bold text-neutral-warm-800 dark:text-neutral-warm-50 mb-2 leading-snug group-hover:text-gold-base transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="font-sans text-sm md:text-base text-neutral-warm-800/70 dark:text-neutral-warm-100/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
