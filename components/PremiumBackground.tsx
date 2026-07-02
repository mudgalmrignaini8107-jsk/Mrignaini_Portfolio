"use client";

import React, { useEffect, useRef } from "react";

export default function PremiumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = 28;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      alphaSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15 - 0.05; // slowly drift up
        this.alpha = Math.random() * 0.3 + 0.1;
        this.alphaSpeed = 0.002 + Math.random() * 0.003;
        
        // Randomly choose between accent colors
        const colors = [
          "rgba(212, 163, 115,", // Soft Peach
          "rgba(27, 38, 59,",    // Navy Blue
          "rgba(178, 58, 72,"    // Accent Red
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around boundaries
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = height;

        // Pulsing opacity
        this.alpha += this.alphaSpeed;
        if (this.alpha > 0.55 || this.alpha < 0.05) {
          this.alphaSpeed = -this.alphaSpeed;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = `${this.color} ${this.alpha})`;
        c.shadowBlur = 4;
        c.shadowColor = "rgba(197, 168, 128, 0.2)";
        c.fill();
        c.shadowBlur = 0; // Reset shadow
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw all particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-luxury-bg-light dark:bg-luxury-bg-dark transition-colors duration-700">
      {/* volumentric ambient glow shapes */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen pointer-events-none filter blur-[120px] will-change-transform">
        <div className="absolute top-[10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-gold-light/40 to-blush-light/30 animate-drift-slow" />
        <div className="absolute bottom-[15%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-sage-light/30 to-gold-light/40 animate-drift-mid" />
        <div className="absolute top-[40%] right-[30%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-bl from-blush-light/35 to-sage-light/25 animate-drift-fast" />
      </div>

      {/* Floating canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-80" />

      {/* Subtle fine noise grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.018] dark:opacity-[0.025] bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }} />
    </div>
  );
}
