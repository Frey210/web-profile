"use client";

import { useEffect, useRef } from "react";

/** Canvas-based pixel particle system — floating cyan/magenta pixels */
export function PixelParticles({ count = 60, className = "" }: { count?: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = Math.min(window.devicePixelRatio, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width / dpr,
      y: Math.random() * canvas.height / dpr,
      size: 2 + Math.floor(Math.random() * 3) * 2, // pixelated sizes: 2,4,6
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -0.2 - Math.random() * 0.5,
      opacity: 0.1 + Math.random() * 0.6,
      color: Math.random() > 0.85 ? "#ff00ea" : Math.random() > 0.5 ? "#00fff5" : "#39ff14",
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.speedX + Math.sin(p.phase) * 0.15;
        p.y += p.speedY;
        p.phase += 0.01;
        p.opacity += (Math.random() - 0.5) * 0.02;
        p.opacity = Math.max(0.05, Math.min(0.8, p.opacity));

        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        // Draw pixelated square
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);

        // Glow effect
        ctx.globalAlpha = p.opacity * 0.3;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ imageRendering: "pixelated" }}
      aria-hidden="true"
    />
  );
}
