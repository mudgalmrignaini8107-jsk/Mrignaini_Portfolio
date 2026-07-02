"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Code, ArrowUpRight, Send } from "lucide-react";
import { Github, Linkedin } from "./icons";

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success badge after a few seconds
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1500);
  };

  const contactLinks = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "mrignaini.work6@gmail.com",
      href: "mailto:mrignaini.work6@gmail.com",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "Phone",
      value: "+91 92663 29449",
      href: "tel:+919266329449",
    },
    {
      icon: <Github className="w-4 h-4" />,
      label: "GitHub",
      value: "github.com/mrignaini",
      href: "https://github.com/mrignaini",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mrignaini",
      href: "https://linkedin.com/in/mrignaini",
    },
    {
      icon: <Code className="w-4 h-4" />,
      label: "LeetCode",
      value: "leetcode.com/mrignaini",
      href: "https://leetcode.com/mrignaini",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-neutral-warm-900 text-neutral-warm-50 dark:bg-luxury-bg-dark border-t border-neutral-warm-800/20 relative overflow-hidden">
      {/* Decorative gradient element */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-gold-base/5 to-transparent filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-gold-light block mb-3">
                Get In Touch
              </span>
              <h2 className="font-sans text-4xl md:text-6xl font-extrabold text-neutral-warm-50 tracking-tight leading-[1.08] mb-6">
                LET'S WORK<br />TOGETHER
              </h2>
              <p className="font-sans text-base md:text-lg text-neutral-warm-100/70 leading-relaxed max-w-sm mb-12">
                Have an interesting project, internship, or role in mind? I'd love to hear about it. Let's build something exceptional.
              </p>
            </div>

            {/* Structured Info Rows */}
            <div className="flex flex-col border-t border-neutral-warm-800/80">
              {contactLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between py-5 border-b border-neutral-warm-800/80 hover:pl-3 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-neutral-warm-800/50 text-gold-light border border-neutral-warm-800/30 group-hover:text-neutral-warm-900 group-hover:bg-gold-base transition-all duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <span className="block font-sans text-[9px] font-bold tracking-widest uppercase text-gold-light/60">
                        {link.label}
                      </span>
                      <span className="font-sans text-sm text-neutral-warm-100 group-hover:text-gold-light transition-colors">
                        {link.value}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-warm-100/40 group-hover:text-gold-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-10 rounded-[2.5rem] border border-neutral-warm-800 bg-neutral-warm-900/60 backdrop-blur-md shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] font-bold tracking-widest uppercase text-gold-light">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.firstName}
                      onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                      placeholder="Jane"
                      className="bg-neutral-warm-950/40 border border-neutral-warm-800 hover:border-neutral-warm-700 focus:border-gold-base rounded-xl px-4 py-3.5 text-sm text-neutral-warm-50 placeholder-neutral-warm-100/20 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] font-bold tracking-widest uppercase text-gold-light">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.lastName}
                      onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                      placeholder="Doe"
                      className="bg-neutral-warm-950/40 border border-neutral-warm-800 hover:border-neutral-warm-700 focus:border-gold-base rounded-xl px-4 py-3.5 text-sm text-neutral-warm-50 placeholder-neutral-warm-100/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] font-bold tracking-widest uppercase text-gold-light">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane.doe@example.com"
                    className="w-full bg-neutral-warm-950/40 border border-neutral-warm-800 hover:border-neutral-warm-700 focus:border-gold-base rounded-xl px-4 py-3.5 text-sm text-neutral-warm-50 placeholder-neutral-warm-100/20 focus:outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] font-bold tracking-widest uppercase text-gold-light">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Collaboration opportunities"
                    className="w-full bg-neutral-warm-950/40 border border-neutral-warm-800 hover:border-neutral-warm-700 focus:border-gold-base rounded-xl px-4 py-3.5 text-sm text-neutral-warm-50 placeholder-neutral-warm-100/20 focus:outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] font-bold tracking-widest uppercase text-gold-light">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-neutral-warm-950/40 border border-neutral-warm-800 hover:border-neutral-warm-700 focus:border-gold-base rounded-xl px-4 py-3.5 text-sm text-neutral-warm-50 placeholder-neutral-warm-100/20 focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 font-sans text-sm tracking-wider font-semibold uppercase rounded-full overflow-hidden transition-all duration-300 shadow-md bg-gold-base hover:bg-gold-dark text-neutral-warm-900 hover:text-neutral-warm-900/90 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4.5 h-4.5 rounded-full border-2 border-neutral-warm-900 border-t-transparent animate-spin" />
                      Sending...
                    </span>
                  ) : submitSuccess ? (
                    "Message Sent ✓"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
