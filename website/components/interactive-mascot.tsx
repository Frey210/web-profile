"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const capriQuotes = [
  "Neural link nominal. Ready to burn chrome? ⚡",
  "I don't just compile code, I overclock reality. 🚀",
  "Fariz architects the systems. I break the firewalls. 😈",
  "Telemetry locked. All cyberware at 100% capacity. 🛰️",
  "Looking for an AI engineer? You found the architect. 💻",
  "Warning: High voltage intelligence detected. ⚡",
  "Click me for an instant neural overclock! 💥",
  "⚠️ PROTOCOL OVERRIDE: MAX OVERCLOCK ENGAGED! 🔥",
];

export function InteractiveMascot() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isOverclocked, setIsOverclocked] = useState(false);
  const [glitchTrigger, setGlitchTrigger] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; text: string }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Periodic micro-glitch flicker
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchTrigger((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(glitchInterval);
  }, []);

  // Periodic quote rotation when idle
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOverclocked) {
        setQuoteIndex((prev) => (prev + 1) % (capriQuotes.length - 1));
      }
    }, 9000);
    return () => clearInterval(interval);
  }, [isOverclocked]);

  // Mouse tracking for parallax tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
    const dy = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));
    setMousePos({ x: dx * 12, y: dy * 8 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    setIsOverclocked(true);
    setGlitchTrigger((prev) => prev + 1);
    setQuoteIndex(7); // Protocol override quote

    // Cyberpunk burst particles
    const emojis = ["⚡", "💥", "👾", "🔥", "λ", "01", "AI", "OVERCLOCK"];
    const newParticles = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      x: clickX + (Math.random() - 0.5) * 50,
      y: clickY + (Math.random() - 0.5) * 30,
      text: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setIsOverclocked(false);
    }, 2200);
  };

  // Clean old particles
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles((prev) => prev.slice(6));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative flex items-center justify-center cursor-pointer select-none py-2"
      aria-label="Interactive Cyber Girl Mascot"
    >
      {/* Speech bubble with Edgerunners neon HUD style */}
      <div
        key={quoteIndex}
        className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none whitespace-nowrap rounded-2xl border border-indigo-400/40 bg-[#0c0b16]/95 px-4 py-2 text-xs font-medium text-[#e0e7ff] shadow-[0_8px_30px_rgba(129,140,248,0.35)] backdrop-blur-md transition-all duration-300"
        style={{
          animation: "speechBubble 4.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        }}
      >
        <span className="flex items-center gap-1.5 font-mono">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          {capriQuotes[quoteIndex]}
        </span>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-b border-r border-indigo-400/40 bg-[#0c0b16]" />
      </div>

      {/* Floating click burst particles */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 0.7, x: p.x, y: p.y }}
            animate={{
              opacity: 0,
              scale: 1.8,
              y: p.y - 80 - Math.random() * 50,
              x: p.x + (Math.random() - 0.5) * 60,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-none absolute left-0 top-0 z-40 text-sm font-black font-mono text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]"
          >
            {p.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Ambient background glow harmonized with Neo-Indigo & Cyan palette */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-cyan-400/20 blur-3xl pointer-events-none" />

      {/* Main Animated Cyber Girl Character with Parallax & Continuous Sine Bob */}
      <motion.div
        animate={{
          x: mousePos.x,
          y: isOverclocked ? [0, -16, 0] : [0, -10, 0],
          rotate: isOverclocked ? [0, -2, 2, 0] : [0, mousePos.x * 0.05, -mousePos.x * 0.05, 0],
          scale: isOverclocked ? 1.06 : 1,
        }}
        transition={{
          y: { duration: isOverclocked ? 0.6 : 3.8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: isOverclocked ? 0.5 : 4.2, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.3 },
          x: { type: "spring", stiffness: 180, damping: 20 },
        }}
        className="relative h-[300px] w-[340px] sm:h-[350px] sm:w-[420px] lg:h-[400px] lg:w-[480px] flex items-center justify-center"
      >
        {/* Subtle Cyber Hologram Frame Brackets */}
        <div className="absolute -inset-4 pointer-events-none opacity-40">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-indigo-400" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-indigo-400" />
        </div>

        {/* Floating Matrix HUD lines */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-20 px-2 font-mono text-[9px] text-cyan-300">
          <span>0101 // NETRUN</span>
          <span>CYBER_AI // 100%</span>
        </div>

        {/* 
          Genuine Studio Trigger Cyberpunk Animated Asset:
          Transparent WebP with recolored Neo-Indigo/Violet hair & Cyan faceplate.
          Zero black box, buttery smooth native animation loop.
        */}
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
          <Image
            src="/capri-transparent.webp"
            alt="Cyberpunk Cyber Girl AI Capri"
            fill
            sizes="(min-width: 1024px) 480px, 90vw"
            unoptimized
            priority
            className="object-contain filter drop-shadow-[0_15px_35px_rgba(129,140,248,0.35)] select-none pointer-events-none"
          />
        </div>

        {/* Orbiting Hologram Rings at Base */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-6 w-56 h-12 rounded-full border border-cyan-400/30 border-dashed pointer-events-none -z-10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-6 w-72 h-16 rounded-full border border-indigo-400/25 border-dotted pointer-events-none -z-10"
        />
      </motion.div>
    </div>
  );
}
