"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ── Authentic Cyberpunk Edgerunners & Netrunner Quotes ── */
const capriQuotes = [
  "Neural link nominal. Ready to burn chrome? ⚡",
  "You're remembered by how you die, choom. Make it legendary. 💀",
  "I'm taking us to the Moon. Just watch me. 🌙",
  "No ICE in Night City is unbreakable if you know the seams. 🧊",
  "Fariz architects the systems — I fry the firewalls. 😈",
  "In the Net, a millisecond is the difference between legend and flatline. ⚡",
  "Wake up, netrunner. We've got systems to build. 🔥",
  "⚠️ OVERCLOCK PROTOCOL: NEURAL SYNC AT 100% — LIMITERS DISENGAGED! ⚡🔥",
];

export function InteractiveMascot() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isOverclocked, setIsOverclocked] = useState(false);
  const [glitchTrigger, setGlitchTrigger] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; text: string }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Mouse coordinates normalized -1 to +1 */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* Smooth spring physics for 3D parallax tilt */
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  /* 3D tilt angles */
  const rotateY = useTransform(springX, [-1, 1], [-12, 12]);
  const rotateX = useTransform(springY, [-1, 1], [10, -10]);
  const charX = useTransform(springX, [-1, 1], [-14, 14]);
  const charY = useTransform(springY, [-1, 1], [-10, 10]);

  /* Parallax foreground & background layers */
  const bgRingX = useTransform(springX, [-1, 1], [8, -8]);
  const hudX = useTransform(springX, [-1, 1], [-20, 20]);
  const hudY = useTransform(springY, [-1, 1], [-15, 15]);

  /* Mouse tracking */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set(Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 2))));
      mouseY.set(Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2))));
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  /* Periodic quote rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOverclocked) {
        setQuoteIndex((prev) => (prev + 1) % (capriQuotes.length - 1));
      }
    }, 7500);
    return () => clearInterval(interval);
  }, [isOverclocked]);

  /* Periodic cyber micro-glitch */
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchTrigger(true);
      setTimeout(() => setGlitchTrigger(false), 240);
    }, 4200);
    return () => clearInterval(glitchInterval);
  }, []);

  /* Click Overclock Burst */
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      setIsOverclocked(true);
      setGlitchTrigger(true);
      setQuoteIndex(capriQuotes.length - 1); // Overclock quote

      // Cyber particle explosion
      const symbols = ["⚡", "🔥", "λ", "01", "ICE", "OVERCLOCK", ">>", "💥"];
      const newParticles = Array.from({ length: 8 }).map((_, i) => ({
        id: Date.now() + i,
        x: clickX + (Math.random() - 0.5) * 60,
        y: clickY + (Math.random() - 0.5) * 40,
        text: symbols[Math.floor(Math.random() * symbols.length)],
      }));
      setParticles((prev) => [...prev, ...newParticles]);

      setTimeout(() => {
        setIsOverclocked(false);
        setGlitchTrigger(false);
      }, 2600);
    },
    []
  );

  /* Clean old particles */
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles((prev) => prev.slice(8));
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
      className="relative flex items-center justify-center cursor-pointer select-none py-2 perspective-[1000px]"
      aria-label="Interactive Capri Cyber Girl Mascot"
    >
      {/* ── Speech Bubble (Responsive, no clipping) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={quoteIndex}
          initial={{ opacity: 0, y: 8, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.96 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`absolute -top-12 z-30 pointer-events-none max-w-[280px] sm:max-w-[340px] rounded-2xl border px-3.5 py-2 text-xs font-medium backdrop-blur-md transition-colors shadow-lg ${
            isOverclocked
              ? "border-cyan-400/80 bg-[#080816]/95 text-cyan-200 shadow-[0_0_25px_rgba(56,189,248,0.5)]"
              : "border-indigo-400/40 bg-[#080814]/95 text-[#e0e7ff] shadow-[0_8px_30px_rgba(129,140,248,0.3)]"
          }`}
        >
          <div className="flex items-center gap-2 font-mono text-[11px] leading-snug">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${
                isOverclocked ? "bg-red-400 animate-ping" : "bg-cyan-400 animate-pulse"
              }`}
            />
            <span>{capriQuotes[quoteIndex]}</span>
          </div>
          <div
            className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-b border-r bg-[#080814] ${
              isOverclocked ? "border-cyan-400/80" : "border-indigo-400/40"
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Floating Cyber Particle Explosion ── */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 0.6, x: p.x, y: p.y }}
            animate={{
              opacity: 0,
              scale: 2.2,
              y: p.y - 100 - Math.random() * 60,
              x: p.x + (Math.random() - 0.5) * 90,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.95, ease: "easeOut" }}
            className="pointer-events-none absolute left-0 top-0 z-40 text-xs sm:text-sm font-black font-mono text-cyan-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]"
          >
            {p.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ── Ambient Background Glow (Synchronized with Neo-Indigo & Cyan palette) ── */}
      <motion.div
        animate={{
          scale: isOverclocked ? [1, 1.25, 1.1] : [1, 1.08, 1],
          opacity: isOverclocked ? 0.45 : [0.18, 0.28, 0.18],
        }}
        transition={{ duration: isOverclocked ? 0.6 : 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/35 via-purple-600/25 to-cyan-400/30 blur-3xl pointer-events-none"
      />

      {/* ── 3D Parallax Main Character Stage ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-[340px] w-[290px] sm:h-[400px] sm:w-[340px] lg:h-[440px] lg:w-[380px] flex items-center justify-center"
      >
        {/* Background Holographic Ring (drifts in reverse parallax) */}
        <motion.div
          style={{ x: bgRingX }}
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-6 w-56 h-14 rounded-full border border-indigo-400/25 border-dashed pointer-events-none -z-10"
        />
        <motion.div
          style={{ x: bgRingX }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-6 w-72 h-18 rounded-full border border-cyan-400/20 border-dotted pointer-events-none -z-10"
        />

        {/* HUD Frame Brackets (foreground parallax) */}
        <motion.div style={{ x: hudX, y: hudY }} className="absolute -inset-2 pointer-events-none opacity-30 z-20">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-indigo-400" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-indigo-400" />
        </motion.div>

        {/* Floating Matrix Telemetry Lines */}
        <motion.div
          style={{ x: hudX }}
          className="absolute inset-x-0 top-3 flex justify-between pointer-events-none opacity-20 px-2 font-mono text-[8px] text-cyan-300 z-20"
        >
          <span>NETRUN::SYNC 100%</span>
          <span>CAPRI_AI // READY</span>
        </motion.div>

        {/* 
          ── The Authentic Animated Full-Body Cyber Girl Character ──
          Multi-layer animation:
          - Continuous floating sine bob
          - Mouse tracking parallax translation
          - Micro-glitch chromatic jump
          - Overclock energy flare
        */}
        <motion.div
          style={{ x: charX, y: charY }}
          animate={{
            y: isOverclocked ? [0, -18, 0, -14, 0] : [0, -14, -2, -12, 0],
            rotateZ: isOverclocked ? [-2, 2, -1, 1, 0] : [-1, 1, -0.6, 1, -1],
            scale: isOverclocked ? [1, 1.06, 1.02] : 1,
            filter: glitchTrigger
              ? "drop-shadow(0 0 25px rgba(56,189,248,0.85)) hue-rotate(25deg) contrast(1.15)"
              : "drop-shadow(0 15px 35px rgba(129,140,248,0.4))",
          }}
          transition={{
            y: { duration: isOverclocked ? 0.5 : 4.4, repeat: Infinity, ease: "easeInOut" },
            rotateZ: { duration: isOverclocked ? 0.35 : 5.6, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.3 },
          }}
          className="relative w-full h-full flex items-center justify-center overflow-visible"
        >
          {/* Subtle Glitch Ghost Layer (appears during glitch / overclock) */}
          {glitchTrigger && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 translate-x-1.5 -translate-y-0.5 filter blur-[0.5px]">
              <Image
                src="/capri-fullbody-clean.webp"
                alt="Capri Glitch Ghost"
                fill
                sizes="(min-width: 1024px) 380px, 90vw"
                unoptimized
                priority
                className="object-contain filter hue-rotate(180deg) saturate(2)"
              />
            </div>
          )}

          {/* Main Full-Body Cyber Girl Image */}
          <Image
            src="/capri-fullbody-clean.webp"
            alt="Cyberpunk Cyber Girl AI Capri"
            fill
            sizes="(min-width: 1024px) 380px, 90vw"
            unoptimized
            priority
            className="object-contain filter drop-shadow-[0_15px_35px_rgba(129,140,248,0.35)] select-none pointer-events-none transition duration-300"
          />

          {/* Eye Reticle Pulse Light (Positioned right over eyes) */}
          <motion.div
            animate={{
              opacity: isOverclocked ? [0.4, 1, 0.4] : [0.1, 0.5, 0.1],
              scale: isOverclocked ? [1, 1.6, 1] : [1, 1.2, 1],
            }}
            transition={{ duration: isOverclocked ? 0.4 : 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[22%] left-[49%] -translate-x-1/2 -translate-y-1/2 w-8 h-4 rounded-full bg-cyan-400 blur-[4px] pointer-events-none"
          />

          {/* Hologram scanline wave passing vertically */}
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent pointer-events-none"
          />
        </motion.div>

        {/* Floating cyber energy spark particles rising from feet */}
        <div className="absolute -bottom-2 inset-x-0 h-16 pointer-events-none overflow-hidden">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -45],
                opacity: [0, 0.8, 0],
                x: [0, (i % 2 === 0 ? 8 : -8)],
              }}
              transition={{
                duration: 2.4 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut",
              }}
              style={{ left: `${32 + i * 12}%` }}
              className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(56,189,248,0.9)]"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
