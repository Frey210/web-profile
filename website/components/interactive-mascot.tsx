"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const capriQuotes = [
  "Neural link nominal. Ready to burn chrome? ⚡",
  "I don't just compile code, I overclock reality. 🚀",
  "Fariz architects the systems. I break the firewalls. 😈",
  "Telemetry locked. All cyberware at 100% capacity. 🛰️",
  "Need an IoT platform or AI system? Let's build it! 💻",
  "Warning: High voltage intelligence detected. ⚡",
  "Click me for an instant neural overclock! 💥",
  "⚠️ PROTOCOL OVERRIDE: MAX OVERCLOCK ENGAGED! ( > ‿ < ) 🔥",
];

export function InteractiveMascot() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isOverclocked, setIsOverclocked] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [glitchTrigger, setGlitchTrigger] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; text: string }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Periodic cyber eye scan / blink
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 140);
    }, 4200);
    return () => clearInterval(blinkInterval);
  }, []);

  // Subtle periodic micro-glitch
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchTrigger((prev) => prev + 1);
    }, 5500);
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

  // Mouse tracking for subtle head and cyber-eye parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
    const dy = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));
    setMousePos({ x: dx * 9, y: dy * 7 });
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
    setQuoteIndex(7); // "⚠️ PROTOCOL OVERRIDE: MAX OVERCLOCK ENGAGED! ( > ‿ < ) 🔥"

    // Cyberpunk burst particles
    const emojis = ["⚡", "💥", "👾", "🔥", "✨", "01", "CYBER"];
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
      aria-label="Interactive Cyberpunk AI Capri Mascot"
    >
      {/* Speech bubble with Edgerunners neon style */}
      <div
        key={quoteIndex}
        className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none whitespace-nowrap rounded-2xl border border-rose-500/40 bg-[#0e0712]/95 px-4 py-2 text-xs font-medium text-[#fff1f2] shadow-[0_8px_30px_rgba(244,63,94,0.35)] backdrop-blur-md transition-all duration-300"
        style={{
          animation: "speechBubble 4.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        }}
      >
        <span className="flex items-center gap-1.5 font-mono">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          {capriQuotes[quoteIndex]}
        </span>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-b border-r border-rose-500/40 bg-[#0e0712]" />
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
            className="pointer-events-none absolute left-0 top-0 z-40 text-sm font-black font-mono text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]"
          >
            {p.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Ambient Cyberpunk Duotone Background Glow (Magenta & Cyan) */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-600/20 via-fuchsia-600/15 to-cyan-400/20 blur-3xl pointer-events-none" />

      {/* Main Capri Character Container with Floating Sine-Wave Motion */}
      <motion.div
        animate={{
          y: isOverclocked ? [0, -14, 0] : [0, -10, 0],
          rotate: isOverclocked ? [0, -2, 2, 0] : [0, 0.6, -0.6, 0],
        }}
        transition={{
          y: { duration: isOverclocked ? 0.6 : 3.8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: isOverclocked ? 0.5 : 4.4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px] flex items-center justify-center"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full filter drop-shadow-[0_20px_45px_rgba(244,63,94,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            {/* Explosive Hot Magenta Hair Gradient */}
            <linearGradient id="capriHairGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff0055" />
              <stop offset="45%" stopColor="#e11d48" />
              <stop offset="85%" stopColor="#9f1239" />
              <stop offset="100%" stopColor="#4c0519" />
            </linearGradient>

            {/* Neon Green/Cyan Glitch Accent */}
            <linearGradient id="capriCyanGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00ffcc" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            {/* Android Cyber Skin (Pale with neon rim) */}
            <linearGradient id="capriSkinGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff1f2" />
              <stop offset="100%" stopColor="#fecdd3" />
            </linearGradient>

            {/* Glowing Cyber Eye Reticle */}
            <radialGradient id="cyberEyeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="40%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#042f2e" />
            </radialGradient>

            {/* Neon Glow Filter */}
            <filter id="neonGlitchGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Chromatic RGB Split Filter */}
            <filter id="rgbSplit" x="-20%" y="-20%" width="140%" height="140%">
              <feOffset in="SourceGraphic" dx="2" dy="0" result="redOffset" />
              <feOffset in="SourceGraphic" dx="-2" dy="0" result="cyanOffset" />
              <feBlend in="redOffset" in2="cyanOffset" mode="screen" />
            </filter>
          </defs>

          {/* Background Matrix Grid Lines & Glitch Shards */}
          <g opacity="0.28">
            <line x1="80" y1="140" x2="420" y2="140" stroke="#ff0055" strokeWidth="1" strokeDasharray="6 8" />
            <line x1="60" y1="240" x2="440" y2="240" stroke="#00ffcc" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="100" y1="340" x2="400" y2="340" stroke="#ff0055" strokeWidth="1" strokeDasharray="6 8" />
            <line x1="160" y1="80" x2="160" y2="420" stroke="#00ffcc" strokeWidth="0.8" strokeDasharray="5 10" />
            <line x1="340" y1="80" x2="340" y2="420" stroke="#ff0055" strokeWidth="0.8" strokeDasharray="5 10" />
          </g>

          {/* Floating Neon Glitch Shards */}
          <motion.g
            key={glitchTrigger}
            initial={{ opacity: 0.8, x: 0 }}
            animate={{
              opacity: [0.8, 1, 0.4, 0.9],
              x: [0, -3, 4, 0],
            }}
            transition={{ duration: 0.35 }}
          >
            <rect x="70" y="160" width="28" height="3" fill="#ff0055" filter="url(#neonGlitchGlow)" />
            <rect x="60" y="170" width="16" height="2" fill="#00ffcc" />
            <rect x="400" y="190" width="34" height="4" fill="#00ffcc" filter="url(#neonGlitchGlow)" />
            <rect x="420" y="202" width="20" height="2" fill="#ff0055" />
            <rect x="110" y="320" width="22" height="3" fill="#00ffcc" />
            <rect x="370" y="310" width="30" height="3" fill="#ff0055" />
          </motion.g>

          {/* Capri's Sleek Cybernetic Body / Android Silhouette */}
          <g id="capriBody">
            {/* Dark Cyber Torso with Sharp Angles */}
            <path
              d="M190 280 L250 280 L310 280 L330 380 C330 400, 310 440, 250 450 C190 440, 170 400, 170 380 Z"
              fill="#09090f"
              stroke="#1e1b2e"
              strokeWidth="2"
            />

            {/* Split Tone Lighting: Cyan Highlight on Left Side */}
            <path
              d="M190 280 L250 280 L250 450 C200 440, 170 400, 170 380 L185 320 Z"
              fill="url(#capriCyanGrad)"
              opacity="0.85"
            />

            {/* Split Tone Lighting: Hot Magenta Highlight on Right Side */}
            <path
              d="M250 280 L310 280 L330 380 C330 400, 300 440, 250 450 Z"
              fill="url(#capriHairGrad)"
              opacity="0.85"
            />

            {/* Central Bio-Mechanical Spine / Cyber Cutout */}
            <line x1="250" y1="280" x2="250" y2="445" stroke="#000000" strokeWidth="4" />
            <line x1="250" y1="285" x2="250" y2="440" stroke="#00ffff" strokeWidth="1.5" strokeDasharray="6 3" />

            {/* Cyber Clavicle Lines & Decals */}
            <path d="M200 295 L240 315 L250 315 L260 315 L300 295" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.9" />
            <circle cx="215" cy="335" r="3" fill="#00ffcc" filter="url(#neonGlitchGlow)" />
            <circle cx="285" cy="335" r="3" fill="#ff0055" filter="url(#neonGlitchGlow)" />

            {/* Sleek Cyber Android Neck */}
            <polygon points="230,230 270,230 265,285 235,285" fill="#11111b" />
            <line x1="235" y1="250" x2="235" y2="280" stroke="#00ffcc" strokeWidth="1.5" />
            <line x1="265" y1="250" x2="265" y2="280" stroke="#ff0055" strokeWidth="1.5" />
          </g>

          {/* 
            Parallax Head Group:
            Includes Capri's wild spiky starburst hair, face, cyber eyes, and grinning mouth.
            Gently tilts and tracks mouse cursor!
          */}
          <motion.g
            animate={{
              x: mousePos.x,
              y: mousePos.y,
            }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            {/* BACK HAIR: Massive Spiky Starburst Silhouettes */}
            <g id="capriBackHair">
              {/* Top Massive Upward Spike */}
              <polygon points="250,110 220,10 260,75 285,15 295,95" fill="url(#capriHairGrad)" />

              {/* Upper Left Spikes */}
              <polygon points="200,100 130,25 175,90 90,55 160,120" fill="url(#capriHairGrad)" />

              {/* Far Left Lightning-Bolt Spikes */}
              <polygon points="150,120 50,100 130,160 30,150 125,190" fill="url(#capriHairGrad)" />
              <polygon points="130,180 40,210 135,225" fill="url(#capriHairGrad)" />

              {/* Upper Right Spikes */}
              <polygon points="300,100 370,25 325,90 410,55 340,120" fill="url(#capriHairGrad)" />

              {/* Far Right Lightning-Bolt Spikes */}
              <polygon points="350,120 450,100 370,160 470,150 375,190" fill="url(#capriHairGrad)" />
              <polygon points="370,180 460,210 365,225" fill="url(#capriHairGrad)" />

              {/* Dual-Tone Cyber Edge Glow on Hair Outline */}
              <path
                d="M50 100 L130 160 L30 150 L125 190 L40 210"
                stroke="#00ffcc"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M450 100 L370 160 L470 150 L375 190 L460 210"
                stroke="#ff0055"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
              />
            </g>

            {/* Capri's Sleek Angular Cyber Face */}
            <polygon
              points="190,145 310,145 305,205 250,265 195,205"
              fill="url(#capriSkinGrad)"
              stroke="#1e1b2e"
              strokeWidth="2"
            />

            {/* Subtle Cyber Blush / Contour on Cheeks */}
            <polygon points="195,195 220,195 210,210" fill="#f43f5e" opacity="0.35" />
            <polygon points="305,195 280,195 290,210" fill="#00ffcc" opacity="0.35" />

            {/* FOREGROUND BANGS: Sharp Jagged Cyber Bangs */}
            <g id="capriBangs">
              {/* Left Sharp Bangs (with Cyan Streaks) */}
              <polygon points="190,140 180,195 210,155 215,185 235,145" fill="url(#capriHairGrad)" />
              <polygon points="180,140 175,185 195,150" fill="url(#capriCyanGrad)" opacity="0.9" />

              {/* Center Jagged Spikes cutting between eyes */}
              <polygon points="230,135 245,175 255,140 265,180 275,135" fill="url(#capriHairGrad)" />
              <line x1="245" y1="140" x2="245" y2="175" stroke="#00ffcc" strokeWidth="2" />

              {/* Right Sharp Bangs (with Neon Pink Highlights) */}
              <polygon points="270,145 285,185 295,155 320,195 310,140" fill="url(#capriHairGrad)" />
              <polygon points="295,145 315,190 315,145" fill="#ff007f" />
            </g>

            {/* 
              EYES & CYBER VISOR RETICLE:
              Capri's intense, glowing geometric cyber eyes that track the cursor!
            */}
            <g id="capriEyes">
              {isOverclocked ? (
                // Overclocked laser eyes with intense crosshair flare
                <g>
                  {/* Left Eye Flare */}
                  <polygon points="195,175 235,160 230,185 200,188" fill="#00ffff" filter="url(#neonGlitchGlow)" />
                  <circle cx="215" cy="175" r="4" fill="#ffffff" />
                  <line x1="200" y1="175" x2="230" y2="175" stroke="#ffffff" strokeWidth="2" />

                  {/* Right Eye Flare */}
                  <polygon points="305,175 265,160 270,185 300,188" fill="#00ffff" filter="url(#neonGlitchGlow)" />
                  <circle cx="285" cy="175" r="4" fill="#ffffff" />
                  <line x1="270" y1="175" x2="300" y2="175" stroke="#ffffff" strokeWidth="2" />
                </g>
              ) : isBlinking ? (
                // Blinking cyber eye slits
                <g stroke="#00ffcc" strokeWidth="3" strokeLinecap="round" filter="url(#neonGlitchGlow)">
                  <line x1="200" y1="175" x2="230" y2="175" />
                  <line x1="270" y1="175" x2="300" y2="175" />
                </g>
              ) : (
                // Capri's Iconic Cybernetic Eyes (Angular, Glowing Cyan Hex Reticle)
                <g>
                  {/* Left Eye Socket & Sclera */}
                  <g>
                    <polygon
                      points="198,178 212,162 234,166 230,184 210,186"
                      fill="#07191d"
                      stroke="#00ffff"
                      strokeWidth="2.5"
                    />
                    {/* Glowing Cyan Cyber Pupil (tracks mouse cursor) */}
                    <motion.circle
                      cx={216 + mousePos.x * 0.4}
                      cy={175 + mousePos.y * 0.4}
                      r="6.5"
                      fill="url(#cyberEyeGlow)"
                      filter="url(#neonGlitchGlow)"
                    />
                    {/* Digital Target Crosshair inside Eye */}
                    <line
                      x1={212 + mousePos.x * 0.4}
                      y1={175 + mousePos.y * 0.4}
                      x2={220 + mousePos.x * 0.4}
                      y2={175 + mousePos.y * 0.4}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                    <line
                      x1={216 + mousePos.x * 0.4}
                      y1={171 + mousePos.y * 0.4}
                      x2={216 + mousePos.x * 0.4}
                      y2={179 + mousePos.y * 0.4}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                    {/* Sharp Angular Eyelash Wing */}
                    <path d="M194,178 L212,160 L238,165" stroke="#11111b" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M192,176 L212,159 L238,164" stroke="#ff0055" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </g>

                  {/* Right Eye Socket & Sclera */}
                  <g>
                    <polygon
                      points="302,178 288,162 266,166 270,184 290,186"
                      fill="#07191d"
                      stroke="#00ffff"
                      strokeWidth="2.5"
                    />
                    {/* Glowing Cyan Cyber Pupil (tracks mouse cursor) */}
                    <motion.circle
                      cx={284 + mousePos.x * 0.4}
                      cy={175 + mousePos.y * 0.4}
                      r="6.5"
                      fill="url(#cyberEyeGlow)"
                      filter="url(#neonGlitchGlow)"
                    />
                    {/* Digital Target Crosshair inside Eye */}
                    <line
                      x1={280 + mousePos.x * 0.4}
                      y1={175 + mousePos.y * 0.4}
                      x2={288 + mousePos.x * 0.4}
                      y2={175 + mousePos.y * 0.4}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                    <line
                      x1={284 + mousePos.x * 0.4}
                      y1={171 + mousePos.y * 0.4}
                      x2={284 + mousePos.x * 0.4}
                      y2={179 + mousePos.y * 0.4}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                    {/* Sharp Angular Eyelash Wing */}
                    <path d="M306,178 L288,160 L262,165" stroke="#11111b" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M308,176 L288,159 L262,164" stroke="#ff0055" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </g>
                </g>
              )}
            </g>

            {/* Fierce Mischievous Eyebrows */}
            <path d="M198,155 L228,152" stroke="#11111b" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M302,155 L272,152" stroke="#11111b" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="200" y1="154" x2="226" y2="151" stroke="#00ffcc" strokeWidth="1.5" />
            <line x1="300" y1="154" x2="274" y2="151" stroke="#ff0055" strokeWidth="1.5" />

            {/* 
              CAPRI'S SIGNATURE MISCHIEVOUS SHARP CYBER SMIRK:
              Sharp toothy anime grin with glowing fangs / cyber teeth grid!
            */}
            <g id="capriGrin">
              {isOverclocked ? (
                // Wide ecstatic toothy cyber grin
                <g>
                  <polygon
                    points="225,210 275,210 268,235 250,245 232,235"
                    fill="#00ffff"
                    stroke="#000000"
                    strokeWidth="2.5"
                    filter="url(#neonGlitchGlow)"
                  />
                  {/* Sharp Teeth Grid */}
                  <line x1="225" y1="222" x2="275" y2="222" stroke="#000000" strokeWidth="2" />
                  <line x1="240" y1="210" x2="240" y2="235" stroke="#000000" strokeWidth="1.5" />
                  <line x1="250" y1="210" x2="250" y2="245" stroke="#000000" strokeWidth="1.5" />
                  <line x1="260" y1="210" x2="260" y2="235" stroke="#000000" strokeWidth="1.5" />
                </g>
              ) : (
                // Capri's classic sharp feline cyber smirk >:]
                <g>
                  <polygon
                    points="232,215 268,215 262,228 250,234 238,228"
                    fill="#080811"
                    stroke="#00ffcc"
                    strokeWidth="2"
                  />
                  {/* Glowing sharp fangs */}
                  <polygon points="236,215 242,215 239,222" fill="#00ffff" />
                  <polygon points="264,215 258,215 261,222" fill="#00ffff" />
                  {/* Smirk accent line */}
                  <path d="M228,214 L234,217 L266,217 L272,213" stroke="#ff0055" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </g>
              )}
            </g>
          </motion.g>

          {/* Floating Holographic Cyber Rings / Data Ribbons */}
          <g opacity="0.7">
            <motion.ellipse
              cx="250"
              cy="450"
              rx="90"
              ry="24"
              stroke="#00ffcc"
              strokeWidth="1.5"
              strokeDasharray="12 8"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              style={{ originX: "250px", originY: "450px" }}
            />
            <motion.ellipse
              cx="250"
              cy="450"
              rx="120"
              ry="32"
              stroke="#ff0055"
              strokeWidth="1.2"
              strokeDasharray="8 12"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              style={{ originX: "250px", originY: "450px" }}
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
