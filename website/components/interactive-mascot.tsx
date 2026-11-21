"use client";

import { useState, useEffect, useRef } from "react";
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

  // Periodic micro-glitch flicker
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchTrigger((prev) => prev + 1);
    }, 4800);
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

  // Mouse tracking for head and cyber-eye parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
    const dy = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));
    setMousePos({ x: dx * 10, y: dy * 8 });
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
    setQuoteIndex(7);

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
      aria-label="Interactive Studio Trigger Cyberpunk AI Mascot"
    >
      {/* Speech bubble harmonized with website Neo-Indigo theme */}
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

      {/* Main Character Container with Continuous Smooth Floating Bob */}
      <motion.div
        animate={{
          y: isOverclocked ? [0, -15, 0] : [0, -10, 0],
          rotate: isOverclocked ? [0, -2, 2, 0] : [0, 0.8, -0.8, 0],
        }}
        transition={{
          y: { duration: isOverclocked ? 0.6 : 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: isOverclocked ? 0.5 : 4.6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative h-[320px] w-[340px] sm:h-[380px] sm:w-[400px] lg:h-[440px] lg:w-[460px] flex items-center justify-center"
      >
        <svg
          viewBox="0 0 520 460"
          className="w-full h-full filter drop-shadow-[0_20px_50px_rgba(129,140,248,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients harmonized to Web Theme: Deep Violet to Electric Indigo */}
            <linearGradient id="edgerunnerHairGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="35%" stopColor="#6366f1" />
              <stop offset="70%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>

            {/* Glowing Cyber Cyan for Faceplate & Reticles */}
            <linearGradient id="cyberCyanFaceGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="40%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>

            {/* Jet-black shadow gradient */}
            <linearGradient id="voidBodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0b0a12" />
              <stop offset="100%" stopColor="#050508" />
            </linearGradient>

            {/* Glowing Iris Radial Gradient */}
            <radialGradient id="irisRingGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="85%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </radialGradient>

            {/* Digital Static Film Grain Filter for Hair Texture (Authentic Trigger Style) */}
            <filter id="cyberStaticNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
              <feColorMatrix type="matrix" values="1 0 0 0 1   0 1 0 0 1   0 0 1 0 1  0 0 0 0.35 0" result="coloredNoise" />
              <feComposite in="SourceGraphic" in2="coloredNoise" operator="over" />
            </filter>

            {/* Neon Glitch Glow */}
            <filter id="neonBeamGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Matrix HUD & Cyber Grid */}
          <g opacity="0.25">
            <line x1="60" y1="120" x2="460" y2="120" stroke="#818cf8" strokeWidth="1" strokeDasharray="6 8" />
            <line x1="40" y1="220" x2="480" y2="220" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="80" y1="320" x2="440" y2="320" stroke="#818cf8" strokeWidth="1" strokeDasharray="6 8" />
          </g>

          {/* Floating Data Shards with Glitch Response */}
          <motion.g
            key={glitchTrigger}
            animate={{
              opacity: [0.8, 1, 0.4, 0.9],
              x: [0, -3, 3, 0],
            }}
            transition={{ duration: 0.35 }}
          >
            <rect x="50" y="140" width="30" height="3" fill="#818cf8" filter="url(#neonBeamGlow)" />
            <rect x="40" y="150" width="18" height="2" fill="#38bdf8" />
            <rect x="430" y="170" width="35" height="3" fill="#38bdf8" filter="url(#neonBeamGlow)" />
            <rect x="445" y="182" width="20" height="2" fill="#818cf8" />
          </motion.g>

          {/* 
            MASSIVE STATIC NEON HAIR (CANOPY & JAGGED FLARES):
            True to Studio Trigger's iconic sweeping silhouette, textured with digital static spray!
          */}
          <g id="massiveHairCanopy" filter="url(#cyberStaticNoise)">
            {/* Top Massive Sweeping Hair Cloud */}
            <path
              d="M 50,70 
                 C 90,20 180,5 260,8 
                 C 340,5 430,20 470,70 
                 L 490,110 L 440,105 L 485,165 L 420,150 L 450,210 L 390,190 L 400,245 L 345,215
                 L 330,265 L 290,205
                 L 260,225 L 230,205
                 L 190,265 L 175,215 L 120,245 L 130,190 L 70,210 L 100,150 L 35,165 L 80,105 L 30,110 Z"
              fill="url(#edgerunnerHairGrad)"
            />

            {/* Deep Violet Core Volume Shading */}
            <path
              d="M 80,85 
                 C 140,40 220,30 260,32 
                 C 300,30 380,40 440,85 
                 L 420,130 L 380,115 L 390,165 L 350,150 L 360,200 L 310,180
                 L 260,200 L 210,180 L 160,200 L 170,150 L 130,165 L 140,115 L 100,130 Z"
              fill="#2e1065"
              opacity="0.65"
            />

            {/* Glowing Cyan Rim Light Trim around Hair Perimeter */}
            <path
              d="M 35,165 L 70,210 L 120,245 L 175,215 L 190,265 L 230,205 L 260,225"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M 485,165 L 450,210 L 400,245 L 345,215 L 330,265 L 290,205 L 260,225"
              stroke="#818cf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
          </g>

          {/* 
            SLENDER CYBERNETIC BODY & JET-BLACK SILHOUETTE:
            Asymmetrical Trigger pose with glowing cyan/indigo circuitry and sharp geometric cuts.
          */}
          <g id="slenderCyberBody">
            {/* Jet-Black Torso with Sharp Angular Shards */}
            <path
              d="M 225,270 L 295,270 L 315,340 L 335,420 C 335,435 305,445 260,448 C 215,445 185,435 185,420 L 205,340 Z"
              fill="url(#voidBodyGrad)"
              stroke="#1e1b2e"
              strokeWidth="2"
            />

            {/* Cyan Geometric Panel on Left Torso */}
            <path
              d="M 220,285 L 250,285 L 245,360 L 200,345 Z"
              fill="url(#cyberCyanFaceGrad)"
              opacity="0.9"
            />

            {/* Indigo Geometric Panel on Right Torso */}
            <path
              d="M 270,285 L 300,285 L 320,345 L 275,360 Z"
              fill="url(#edgerunnerHairGrad)"
              opacity="0.85"
            />

            {/* Central Neon Circuit Spine */}
            <line x1="260" y1="270" x2="260" y2="445" stroke="#000000" strokeWidth="4" />
            <line x1="260" y1="275" x2="260" y2="440" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 3" />

            {/* Cyber Clavicle Lines */}
            <path d="M 210,285 L 245,302 L 260,302 L 275,302 L 310,285" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.85" />

            {/* Slender Black Neck */}
            <polygon points="242,230 278,230 272,275 248,275" fill="#07060c" />
            <line x1="248" y1="240" x2="248" y2="270" stroke="#38bdf8" strokeWidth="2" />
            <line x1="272" y1="240" x2="272" y2="270" stroke="#818cf8" strokeWidth="2" />
          </g>

          {/* 
            PARALLAX HEAD & FACE GROUP:
            Features the Jet-Black Head, Electric Cyan Faceplate, Iconic Reticle Eyes, and Zigzag Smirk.
            Tracks mouse movement!
          */}
          <motion.g
            animate={{
              x: mousePos.x,
              y: mousePos.y,
            }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            {/* Jet-Black Head Silhouette (Tilted 3/4 Anime Stance) */}
            <polygon
              points="200,140 320,135 315,200 260,258 205,200"
              fill="#06050b"
              stroke="#1e1b2e"
              strokeWidth="2"
            />

            {/* Forehead V-Bangs cutting over the face */}
            <polygon points="195,135 220,185 240,140 260,190 280,140 305,180 325,135" fill="url(#edgerunnerHairGrad)" />
            <polygon points="215,135 235,180 245,140" fill="#38bdf8" opacity="0.8" />
            <polygon points="275,140 285,180 305,135" fill="#c084fc" opacity="0.8" />

            {/* 
              ELECTRIC CYAN GEOMETRIC FACEPLATE (True to Reference GIF!):
              Sharp angular diamond/mask framing the eyes, nose, and cheek.
            */}
            <polygon
              points="208,162 258,154 310,160 302,204 260,244 216,204"
              fill="url(#cyberCyanFaceGrad)"
              filter="url(#neonBeamGlow)"
            />

            {/* Dark Cyber Eye Sockets / Eyeliner (Sharp Winged Anime Trigger Contours) */}
            {/* Left Eye Contour */}
            <path
              d="M 218,178 L 235,168 L 252,176 L 246,192 L 226,194 Z"
              fill="#050508"
              stroke="#0b0a14"
              strokeWidth="2.5"
            />
            {/* Left Wing Eyelash */}
            <polygon points="214,178 226,166 238,168" fill="#050508" />
            <polygon points="212,176 220,168 226,170" fill="#ffffff" />

            {/* Right Eye Contour */}
            <path
              d="M 302,176 L 285,168 L 268,176 L 274,192 L 294,194 Z"
              fill="#050508"
              stroke="#0b0a14"
              strokeWidth="2.5"
            />
            {/* Right Wing Eyelash */}
            <polygon points="306,176 294,166 282,168" fill="#050508" />
            <polygon points="308,174 300,168 294,170" fill="#ffffff" />

            {/* Diamond / Star Markings beside eyes (Authentic to GIF) */}
            <polygon points="212,185 215,180 218,185 215,190" fill="#050508" />
            <polygon points="308,185 305,180 302,185 305,190" fill="#050508" />

            {/* 
              THE ICONIC CYBERNETIC RETICLE EYES:
              Glowing concentric cyan & white ring irises with center black pupil,
              dynamically tracking mouse cursor!
            */}
            <g id="interactiveCyberEyes">
              {isOverclocked ? (
                // Overclock Mode: Laser crosshairs flare with intense cyan glow
                <g filter="url(#neonBeamGlow)">
                  {/* Left Eye Flare */}
                  <circle cx="236" cy="180" r="8" fill="#ffffff" />
                  <circle cx="236" cy="180" r="14" fill="#38bdf8" opacity="0.4" />
                  <line x1="222" y1="180" x2="250" y2="180" stroke="#ffffff" strokeWidth="2.5" />
                  <line x1="236" y1="166" x2="236" y2="194" stroke="#ffffff" strokeWidth="2.5" />

                  {/* Right Eye Flare */}
                  <circle cx="284" cy="180" r="8" fill="#ffffff" />
                  <circle cx="284" cy="180" r="14" fill="#38bdf8" opacity="0.4" />
                  <line x1="270" y1="180" x2="298" y2="180" stroke="#ffffff" strokeWidth="2.5" />
                  <line x1="284" y1="166" x2="284" y2="194" stroke="#ffffff" strokeWidth="2.5" />
                </g>
              ) : isBlinking ? (
                // Blinking Cyber Slit Lines
                <g stroke="#ffffff" strokeWidth="3" strokeLinecap="round">
                  <line x1="224" y1="180" x2="248" y2="180" />
                  <line x1="272" y1="180" x2="296" y2="180" />
                </g>
              ) : (
                // Normal Eye Mode: Rings with parallax pupil
                <g>
                  {/* Left Eye Sclera & Iris Ring */}
                  <circle cx="236" cy="181" r="7.5" fill="#050508" />
                  <motion.circle
                    cx={236 + mousePos.x * 0.35}
                    cy={181 + mousePos.y * 0.35}
                    r="6.5"
                    fill="url(#irisRingGlow)"
                    filter="url(#neonBeamGlow)"
                  />
                  {/* Outer White Concentric Ring */}
                  <circle
                    cx={236 + mousePos.x * 0.35}
                    cy={181 + mousePos.y * 0.35}
                    r="4.5"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Center Black Pupil Dot */}
                  <circle
                    cx={236 + mousePos.x * 0.35}
                    cy={181 + mousePos.y * 0.35}
                    r="2"
                    fill="#050508"
                  />

                  {/* Right Eye Sclera & Iris Ring */}
                  <circle cx="284" cy="181" r="7.5" fill="#050508" />
                  <motion.circle
                    cx={284 + mousePos.x * 0.35}
                    cy={181 + mousePos.y * 0.35}
                    r="6.5"
                    fill="url(#irisRingGlow)"
                    filter="url(#neonBeamGlow)"
                  />
                  {/* Outer White Concentric Ring */}
                  <circle
                    cx={284 + mousePos.x * 0.35}
                    cy={181 + mousePos.y * 0.35}
                    r="4.5"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Center Black Pupil Dot */}
                  <circle
                    cx={284 + mousePos.x * 0.35}
                    cy={181 + mousePos.y * 0.35}
                    r="2"
                    fill="#050508"
                  />
                </g>
              )}
            </g>

            {/* 
              THE SIGNATURE ZIGZAG ELECTRIC MOUTH (Direct from the GIF!):
              A sharp lightning-bolt grin drawn in pitch-black over the cyan faceplate!
            */}
            <g id="zigzagElectricMouth">
              {isOverclocked ? (
                // Wide Open Electric Cyber Grin on Overclock
                <g>
                  <polygon
                    points="235,212 285,212 280,230 260,236 240,230"
                    fill="#050508"
                    stroke="#38bdf8"
                    strokeWidth="2"
                  />
                  <line x1="237" y1="221" x2="283" y2="221" stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1="248" y1="212" x2="248" y2="230" stroke="#ffffff" strokeWidth="1.5" />
                  <line x1="260" y1="212" x2="260" y2="236" stroke="#ffffff" strokeWidth="1.5" />
                  <line x1="272" y1="212" x2="272" y2="230" stroke="#ffffff" strokeWidth="1.5" />
                </g>
              ) : (
                // Signature Edgerunners Lightning-Bolt Zigzag Line: \/\/\/\
                <path
                  d="M 234,216 
                     L 241,222 
                     L 248,216 
                     L 255,222 
                     L 262,216 
                     L 269,222 
                     L 276,216 
                     L 284,222"
                  stroke="#050508"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                  fill="none"
                />
              )}
            </g>
          </motion.g>

          {/* Floating Holographic Cyber Rings at Base */}
          <g opacity="0.6">
            <motion.ellipse
              cx="260"
              cy="435"
              rx="95"
              ry="22"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="10 6"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              style={{ originX: "260px", originY: "435px" }}
            />
            <motion.ellipse
              cx="260"
              cy="435"
              rx="130"
              ry="30"
              stroke="#818cf8"
              strokeWidth="1.2"
              strokeDasharray="6 10"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              style={{ originX: "260px", originY: "435px" }}
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
