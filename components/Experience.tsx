"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Building, GraduationCap, Link2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "internship",
      role: "Python Full Stack Development Intern",
      org: "EduSkill Foundation",
      date: "Apr 2026 – Jun 2026",
      icon: <Building className="w-5 h-5" />,
      bullets: [
        "Completed an intensive 8-week full-stack development program, building end-to-end web applications with Django, JavaScript, jQuery, and SQL.",
        "Developed responsive, multi-page web interfaces using HTML, CSS, and Bootstrap, integrated with Django backend services and SQL databases.",
        "Collaborated using Git-based version control workflows, contributing to team-based feature development and code integration.",
        "Applied full-stack engineering principles across front-end design, back-end logic, database management, and deployment."
      ],
      highlights: ["Django", "JavaScript", "jQuery", "Bootstrap", "PostgreSQL", "Git"],
      links: [
        { label: "Offer Letter", url: "#" },
        { label: "Certificate", url: "#" }
      ]
    },
    {
      type: "education",
      role: "B.Tech in Computer Science",
      org: "Inderprastha College of Engineering, AKTU University",
      date: "2024 — 2028 (Expected)",
      icon: <GraduationCap className="w-5 h-5" />,
      bullets: [
        "Building a rigorous academic foundation in data structures, algorithms, operating systems, and computer network architectures.",
        "Actively developing full-stack applications, integrating generative AI systems, and leading software projects."
      ],
      highlights: ["Data Structures", "Algorithms", "Software Engineering", "AI Integration"],
      links: [
        { label: "IPEC Website", url: "http://www.ipec.org.in" }
      ]
    },
    {
      type: "education",
      role: "Senior Secondary (Class XII — Physics, Chemistry, Mathematics)",
      org: "Presentation Convent Senior Secondary School, Delhi",
      date: "2024",
      icon: <GraduationCap className="w-5 h-5" />,
      bullets: [
        "Completed high school specialization in Physics, Chemistry, and Mathematics with a strong academic record."
      ],
      highlights: ["Physics", "Chemistry", "Mathematics", "Science Division"],
      links: [
        { label: "School Portal", url: "#" }
      ]
    }
  ];

  const technologies = [
    "Python", "JavaScript / TypeScript", "Java", "C++", "SQL",
    "Django", "FastAPI", "React", "PostgreSQL", "Supabase",
    "GitHub Actions", "Vercel"
  ];

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden bg-neutral-warm-900 text-neutral-warm-50 dark:bg-luxury-bg-dark border-y border-neutral-warm-800/20">
      {/* Decorative vector */}
      <div className="absolute top-[8%] right-[6%] w-[260px] opacity-15 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full text-gold-base">
          <path d="M50 90 V30 M50 30 Q40 18 30 22 M50 30 Q60 18 70 22 M50 50 Q40 40 30 44 M50 50 Q60 40 70 44" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] font-bold tracking-widest uppercase text-gold-light block mb-3"
          >
            Career & Education
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-neutral-warm-50 tracking-wide uppercase"
          >
            EXPERIENCE TIMELINE
          </motion.h2>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-neutral-warm-800 pl-8 md:pl-12 max-w-4xl mx-auto text-left">
          {experiences.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              key={index}
              className="relative pb-16 last:pb-0"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-8 h-8 rounded-full bg-neutral-warm-900 dark:bg-luxury-bg-dark border-2 border-gold-base flex items-center justify-center text-gold-base shadow-lg z-10">
                {exp.icon}
              </div>

              {/* Entry metadata */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-gold-light flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.date}
                </span>
                <span className="text-neutral-warm-800/30 dark:text-neutral-warm-100/30 hidden sm:inline">•</span>
                <span className="font-serif italic text-xs text-neutral-warm-100/70">{exp.org}</span>
              </div>

              {/* Title */}
              <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-neutral-warm-50 leading-tight mb-4">
                {exp.role}
              </h3>

              {/* Bullet points */}
              <ul className="space-y-3.5 mb-6">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="font-sans text-[15px] md:text-[16px] text-neutral-warm-100/80 leading-relaxed pl-5 relative">
                    <span className="absolute left-0 top-3 w-1.5 h-[1px] bg-gold-base" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Action Links */}
              {exp.links && (
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {exp.links.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-sans text-[10px] font-bold tracking-wider uppercase text-gold-light hover:text-neutral-warm-50 border border-neutral-warm-800 hover:border-gold-base/50 px-3.5 py-1.5 rounded-full bg-neutral-warm-950/40 transition-all duration-300 shadow-sm"
                    >
                      <Link2 className="w-3 h-3" />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="font-sans text-xs px-3 py-1 rounded-full border border-neutral-warm-800 bg-neutral-warm-900/60 text-gold-light/90 hover:border-gold-base/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Tools Sub-section */}
        <div className="mt-24 pt-16 border-t border-neutral-warm-800 max-w-4xl mx-auto text-center">
          <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-gold-light mb-8">
            Languages & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="font-sans text-xs md:text-sm px-4.5 py-2 rounded-full border border-neutral-warm-800/80 bg-neutral-warm-900/40 text-neutral-warm-100 hover:text-gold-light hover:border-gold-base/40 hover:bg-neutral-warm-800/30 transition-all duration-300 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
