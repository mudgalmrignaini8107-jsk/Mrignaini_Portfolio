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

    const petals: Petal[] = [];
    const petalCount = 42;

    class Petal {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      angle: number;
      rotationSpeed: number;
      alpha: number;
      alphaSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Very small petals for a peaceful look
        this.size = Math.random() * 2 + 1.5;
        this.speedX = (Math.random() - 0.5) * 0.12;
        this.speedY = 0.18 + Math.random() * 0.22; // slowly falling down
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.008;
        this.alpha = Math.random() * 0.4 + 0.15;
        this.alphaSpeed = 0.001 + Math.random() * 0.002;
        
        // Mapped to Maroon Maple Red (#7A1C25), Peach (#D4A373), and Navy Blue (#1B263B)
        const colors = [
          "rgba(122, 28, 37,",  // Maroon Maple Red
          "rgba(212, 163, 115,", // Soft Peach
          "rgba(27, 38, 59,"     // Navy Blue
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.rotationSpeed;

        // Reset if it goes off screen
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y > height + 20) {
          this.y = -20;
          this.x = Math.random() * width;
          this.speedY = 0.18 + Math.random() * 0.22;
          this.speedX = (Math.random() - 0.5) * 0.12;
        }

        // Opacity pulsing
        this.alpha += this.alphaSpeed;
        if (this.alpha > 0.65 || this.alpha < 0.1) {
          this.alphaSpeed = -this.alphaSpeed;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.angle);
        c.beginPath();
        // Draw a delicate organic leaf/petal shape
        c.moveTo(0, 0);
        c.quadraticCurveTo(this.size, -this.size / 2, this.size * 2, 0);
        c.quadraticCurveTo(this.size, this.size / 2, 0, 0);
        c.fillStyle = `${this.color} ${this.alpha})`;
        c.fill();
        c.restore();
      }
    }

    // Initialize petals
    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw all falling leaf petals
      petals.forEach((petal) => {
        petal.update();
        petal.draw(ctx);
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
      {/* 3D volumetric glowing ambient light shape layers */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen pointer-events-none filter blur-[120px] will-change-transform">
        <div className="absolute top-[10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-blush-light/40 to-gold-light/30 animate-drift-slow" />
        <div className="absolute bottom-[15%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-sage-light/30 to-gold-light/40 animate-drift-mid" />
        <div className="absolute top-[40%] right-[30%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-bl from-blush-light/35 to-sage-light/25 animate-drift-fast" />
      </div>

      {/* Falling leaf petals canvas layer */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-80" />

      {/* Subtle fine noise grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.018] dark:opacity-[0.025] bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }} />
    </div>
  );
}
