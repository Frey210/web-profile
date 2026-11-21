"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const botMessages = [
  "Compiling neural network... 100% ✨",
  "Aerasea telemetry: all systems nominal! 🛰️",
  "I speak fluent C++, Python & TypeScript ⚡",
  "Reviewing Fariz's pull requests... LGTM! 🚀",
  "Airport electronics QA status: verified ✈️",
  "Click me for +100 GPU compute power! 💻",
  "Automating the boring stuff with AI 🤖",
  "⚡ Overclocking mode engaged! (≧◡≦) ✨",
];

export function InteractiveMascot() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [isHappy, setIsHappy] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; text: string }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Natural blinking interval
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 3800);
    return () => clearInterval(blinkInterval);
  }, []);

  // Periodic message update when idle
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHappy) {
        setMsgIndex((prev) => (prev + 1) % (botMessages.length - 1));
      }
    }, 9000);
    return () => clearInterval(interval);
  }, [isHappy]);

  // Mouse tracking for subtle head and eye parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
    const dy = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));
    setMousePos({ x: dx * 8, y: dy * 6 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    setIsHappy(true);
    setMsgIndex(7); // "⚡ Overclocking mode engaged! (≧◡≦) ✨"

    // Spawn floating heart / spark particles
    const emojis = ["✨", "⚡", "💜", "🚀", "💻", "⭐"];
    const newParticles = Array.from({ length: 5 }).map((_, i) => ({
      id: Date.now() + i,
      x: clickX + (Math.random() - 0.5) * 40,
      y: clickY + (Math.random() - 0.5) * 20,
      text: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setIsHappy(false);
    }, 2000);
  };

  // Clean old particles
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles((prev) => prev.slice(5));
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
      className="relative flex items-center justify-center cursor-pointer select-none py-4"
      aria-label="Interactive Chibi Anime Mascot"
    >
      {/* Speech bubble */}
      <div
        key={msgIndex}
        className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none whitespace-nowrap rounded-2xl border border-indigo-400/30 bg-[#12111a]/95 px-4 py-2 text-xs font-medium text-[#f5f3ff] shadow-[0_8px_30px_rgba(129,140,248,0.25)] backdrop-blur-md transition-all duration-300"
        style={{
          animation: "speechBubble 4.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        }}
      >
        <span className="flex items-center gap-1.5">{botMessages[msgIndex]}</span>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-b border-r border-indigo-400/30 bg-[#12111a]" />
      </div>

      {/* Floating click burst particles */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 0.6, x: p.x, y: p.y }}
            animate={{
              opacity: 0,
              scale: 1.6,
              y: p.y - 70 - Math.random() * 40,
              x: p.x + (Math.random() - 0.5) * 50,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-none absolute left-0 top-0 z-40 text-sm font-bold"
          >
            {p.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Ambient background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-cyan-400/10 blur-3xl pointer-events-none" />

      {/* Main Chibi Character Container */}
      <motion.div
        animate={{
          y: isHappy ? [0, -14, 0] : [0, -8, 0],
          rotate: isHappy ? [0, -2, 2, 0] : [0, 0.5, -0.5, 0],
        }}
        transition={{
          y: { duration: isHappy ? 0.6 : 3.6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: isHappy ? 0.5 : 4.2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px] flex items-center justify-center"
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full filter drop-shadow-[0_20px_40px_rgba(129,140,248,0.22)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="65%" stopColor="#2e1065" />
              <stop offset="100%" stopColor="#4338ca" />
            </linearGradient>

            <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff1f2" />
              <stop offset="100%" stopColor="#ffe4e6" />
            </linearGradient>

            <linearGradient id="eyeIrisGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4338ca" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            <linearGradient id="jacketGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#18181b" />
              <stop offset="50%" stopColor="#1e1e2d" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>

            <linearGradient id="holoScreen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(129, 140, 248, 0.4)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0.15)" />
            </linearGradient>

            <radialGradient id="blushGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fb7185" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
            </radialGradient>

            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Holographic background grid lines */}
          <g opacity="0.25">
            <line x1="80" y1="120" x2="320" y2="120" stroke="#818cf8" strokeDasharray="4 6" />
            <line x1="60" y1="200" x2="340" y2="200" stroke="#818cf8" strokeDasharray="4 6" />
            <line x1="80" y1="280" x2="320" y2="280" stroke="#818cf8" strokeDasharray="4 6" />
          </g>

          {/* Floating Chibi Drone Companion (BYTE) */}
          <motion.g
            animate={{
              y: isHappy ? [-8, 8, -8] : [-4, 6, -4],
              x: isHappy ? [0, 8, -8, 0] : [0, 3, -3, 0],
              rotate: isHappy ? [0, 360] : [-3, 3, -3],
            }}
            transition={{
              y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 3.1, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: isHappy ? 0.8 : 4, repeat: isHappy ? 1 : Infinity, ease: "easeInOut" },
            }}
          >
            {/* Drone Antenna */}
            <line x1="330" y1="100" x2="330" y2="85" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="330" cy="82" r="4" fill="#38bdf8" filter="url(#neonGlow)" />

            {/* Drone Body */}
            <rect x="305" y="100" width="50" height="38" rx="16" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />

            {/* Drone Screen Face */}
            <rect x="312" y="107" width="36" height="24" rx="8" fill="#09090b" stroke="#38bdf8" strokeWidth="1" />
            {isHappy ? (
              // Happy eyes on drone screen ^ ^
              <g stroke="#38bdf8" strokeWidth="2" strokeLinecap="round">
                <path d="M318 120 Q323 114 326 120" />
                <path d="M332 120 Q337 114 340 120" />
              </g>
            ) : (
              // Calm scanning eyes [• ‿ •]
              <g>
                <circle cx="322" cy="118" r="2.5" fill="#38bdf8" />
                <circle cx="338" cy="118" r="2.5" fill="#38bdf8" />
                <path d="M327 122 Q330 125 333 122" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            )}

            {/* Drone Thruster Rings */}
            <ellipse cx="330" cy="141" rx="8" ry="2.5" fill="#38bdf8" opacity="0.6" filter="url(#neonGlow)" />
          </motion.g>

          {/* Back Hair */}
          <path
            d="M130 150 C110 210, 105 270, 125 320 C145 290, 155 240, 160 200 Z"
            fill="url(#hairGrad)"
          />
          <path
            d="M270 150 C290 210, 295 270, 275 320 C255 290, 245 240, 240 200 Z"
            fill="url(#hairGrad)"
          />

          {/* Body / Cyber Jacket */}
          <g>
            {/* Hoodie shoulders */}
            <path
              d="M130 260 C130 240, 165 235, 200 235 C235 235, 270 240, 270 260 L285 350 C285 365, 270 375, 200 375 C130 375, 115 365, 115 350 Z"
              fill="url(#jacketGrad)"
              stroke="#27272a"
              strokeWidth="2"
            />

            {/* Collar & Cyber Trim */}
            <path
              d="M165 238 L200 280 L235 238"
              stroke="#818cf8"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Center neon zipper */}
            <line x1="200" y1="280" x2="200" y2="370" stroke="#818cf8" strokeWidth="2.5" strokeDasharray="4 2" />

            {/* Neo-Badge on jacket */}
            <rect x="145" y="275" width="22" height="12" rx="3" fill="#312e81" stroke="#818cf8" strokeWidth="1" />
            <text x="148" y="284" fill="#a5b4fc" fontSize="7" fontFamily="monospace" fontWeight="bold">AI/ML</text>
          </g>

          {/* Parallax Group: Head + Hair + Eyes + Headset (tracks mouse position) */}
          <motion.g
            animate={{
              x: mousePos.x,
              y: mousePos.y,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Cyber Cat-Ear Mecha Headset (Behind Ears) */}
            <g>
              {/* Headband arch */}
              <path
                d="M115 170 C115 90, 285 90, 285 170"
                stroke="#18181b"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M115 170 C115 90, 285 90, 285 170"
                stroke="#6366f1"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="8 6"
              />

              {/* Left Mecha Fin / Ear */}
              <polygon points="122,110 95,65 145,85" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
              <polygon points="120,105 105,75 138,88" fill="#312e81" />
              <line x1="108" y1="78" x2="133" y2="90" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Right Mecha Fin / Ear */}
              <polygon points="278,110 305,65 255,85" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
              <polygon points="280,105 295,75 262,88" fill="#312e81" />
              <line x1="292" y1="78" x2="267" y2="90" stroke="#38bdf8" strokeWidth="1.5" />
            </g>

            {/* Chibi Face Shape */}
            <path
              d="M135 155 C135 125, 160 110, 200 110 C240 110, 265 125, 265 155 C265 200, 245 235, 200 235 C155 235, 135 200, 135 155 Z"
              fill="url(#skinGrad)"
            />

            {/* Cute Cheeks Blush */}
            <circle cx="152" cy="182" r="14" fill="url(#blushGlow)" />
            <circle cx="248" cy="182" r="14" fill="url(#blushGlow)" />

            {/* Anime Eyes */}
            <g id="animeEyes">
              {isHappy ? (
                // Happy curved eyes ^ ^
                <g stroke="#312e81" strokeWidth="4" strokeLinecap="round" fill="none">
                  <path d="M152 170 Q167 154 182 170" />
                  <path d="M218 170 Q233 154 248 170" />
                </g>
              ) : isBlinking ? (
                // Blinking closed eye slits
                <g stroke="#312e81" strokeWidth="3.5" strokeLinecap="round">
                  <line x1="154" y1="170" x2="180" y2="170" />
                  <line x1="220" y1="170" x2="246" y2="170" />
                </g>
              ) : (
                // Big expressive Anime Eyes
                <g>
                  {/* Left Eye */}
                  <g>
                    {/* Eyeball white */}
                    <ellipse cx="167" cy="168" rx="15" ry="17" fill="#ffffff" />
                    {/* Iris with Cyber Indigo-Cyan gradient */}
                    <motion.ellipse
                      cx={167 + mousePos.x * 0.4}
                      cy={168 + mousePos.y * 0.4}
                      rx="11.5"
                      ry="14"
                      fill="url(#eyeIrisGrad)"
                    />
                    {/* Pupil */}
                    <ellipse cx={167 + mousePos.x * 0.4} cy={168 + mousePos.y * 0.4} rx="6" ry="7.5" fill="#0f172a" />
                    {/* Big Eye Shine */}
                    <circle cx={163 + mousePos.x * 0.2} cy={163 + mousePos.y * 0.2} r="4.5" fill="#ffffff" />
                    <circle cx={171 + mousePos.x * 0.2} cy={173 + mousePos.y * 0.2} r="2" fill="#ffffff" />
                    {/* Top Eyelash */}
                    <path d="M150 162 C158 150, 176 150, 184 162" stroke="#1e1b4b" strokeWidth="3.8" strokeLinecap="round" fill="none" />
                    <path d="M182 159 L186 156" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" />
                  </g>

                  {/* Right Eye */}
                  <g>
                    {/* Eyeball white */}
                    <ellipse cx="233" cy="168" rx="15" ry="17" fill="#ffffff" />
                    {/* Iris with Cyber Indigo-Cyan gradient */}
                    <motion.ellipse
                      cx={233 + mousePos.x * 0.4}
                      cy={168 + mousePos.y * 0.4}
                      rx="11.5"
                      ry="14"
                      fill="url(#eyeIrisGrad)"
                    />
                    {/* Pupil */}
                    <ellipse cx={233 + mousePos.x * 0.4} cy={168 + mousePos.y * 0.4} rx="6" ry="7.5" fill="#0f172a" />
                    {/* Big Eye Shine */}
                    <circle cx={229 + mousePos.x * 0.2} cy={163 + mousePos.y * 0.2} r="4.5" fill="#ffffff" />
                    <circle cx={237 + mousePos.x * 0.2} cy={173 + mousePos.y * 0.2} r="2" fill="#ffffff" />
                    {/* Top Eyelash */}
                    <path d="M216 162 C224 150, 242 150, 250 162" stroke="#1e1b4b" strokeWidth="3.8" strokeLinecap="round" fill="none" />
                    <path d="M248 159 L252 156" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" />
                  </g>
                </g>
              )}
            </g>

            {/* Cute Mouth */}
            {isHappy ? (
              // Open happy anime cat mouth :3
              <path
                d="M192 195 Q200 206 208 195 Z"
                fill="#f43f5e"
                stroke="#881337"
                strokeWidth="1.5"
              />
            ) : (
              // Tiny gentle smile
              <path
                d="M194 195 Q200 199 206 195"
                stroke="#831843"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            )}

            {/* Layered Anime Hair (Bangs & Framing locks) */}
            <g>
              {/* Left Side Lock */}
              <path
                d="M135 130 C125 160, 130 195, 142 215 C146 190, 145 165, 148 140 Z"
                fill="url(#hairGrad)"
              />
              {/* Right Side Lock */}
              <path
                d="M265 130 C275 160, 270 195, 258 215 C254 190, 255 165, 252 140 Z"
                fill="url(#hairGrad)"
              />

              {/* Center Bangs */}
              <path
                d="M140 120 C160 115, 175 145, 178 158 C182 140, 195 125, 205 155 C210 138, 225 132, 235 152 C242 135, 255 120, 260 120 C240 95, 160 95, 140 120 Z"
                fill="url(#hairGrad)"
              />

              {/* Cyber Cyan Hair Clip */}
              <rect x="140" y="125" width="16" height="5" rx="2" fill="#38bdf8" filter="url(#neonGlow)" />
              <rect x="140" y="133" width="16" height="5" rx="2" fill="#818cf8" />

              {/* Glowing Hair Highlight Streak */}
              <path
                d="M165 112 Q190 108 235 114"
                stroke="#a5b4fc"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* Ahoge (Antenna hair curl) swaying on top */}
              <motion.path
                d="M200 98 Q195 70 215 62 Q210 75 204 98"
                fill="url(#hairGrad)"
                animate={{
                  rotate: [-5, 6, -5],
                  scaleX: [1, 0.95, 1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ originX: "200px", originY: "98px" }}
              />
            </g>

            {/* Headphone Ear Cups (Foreground) */}
            <g>
              {/* Left Cup */}
              <rect x="108" y="152" width="20" height="34" rx="10" fill="#18181b" stroke="#818cf8" strokeWidth="2" />
              <circle cx="118" cy="169" r="6" fill="#312e81" stroke="#38bdf8" strokeWidth="1.5" />
              {/* Right Cup */}
              <rect x="272" y="152" width="20" height="34" rx="10" fill="#18181b" stroke="#818cf8" strokeWidth="2" />
              <circle cx="282" cy="169" r="6" fill="#312e81" stroke="#38bdf8" strokeWidth="1.5" />
            </g>
          </motion.g>

          {/* Floating Holographic Cyber Terminal / Mini Laptop */}
          <g>
            {/* Holographic screen */}
            <motion.g
              animate={{
                y: [0, -4, 0],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <polygon
                points="130,295 270,295 285,340 115,340"
                fill="url(#holoScreen)"
                stroke="#818cf8"
                strokeWidth="1.5"
              />
              {/* Glowing Hologram Grid */}
              <line x1="140" y1="310" x2="260" y2="310" stroke="#818cf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <line x1="130" y1="325" x2="270" y2="325" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

              {/* Code text lines on screen */}
              <text x="145" y="318" fill="#e0e7ff" fontSize="8" fontFamily="monospace" fontWeight="bold">const ai = new Agent();</text>
              <text x="145" y="332" fill="#38bdf8" fontSize="7" fontFamily="monospace">await ai.deploy(); // 100%</text>
            </motion.g>

            {/* Cute Little Typing Hands */}
            <motion.g
              animate={{
                y: isHappy ? [-3, 3, -3] : [-1.5, 1.5, -1.5],
              }}
              transition={{
                duration: isHappy ? 0.2 : 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Left Hand */}
              <circle cx="155" cy="335" r="8" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="1" />
              {/* Right Hand */}
              <circle cx="245" cy="335" r="8" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="1" />
            </motion.g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
