"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const botMessages = [
  "Telemetry nominal. All sensors online.",
  "Baggage handling PLC status: 100% operational.",
  "I speak fluent C++, Python, and STM32.",
  "Click me for good luck on your next deployment!",
  "Aerasea cloud synced — water quality stable.",
  "Y-BOT SLAM navigation locked on target.",
  "Actually, I'm the one reviewing Fariz's pull requests.",
  "⚡ Pulse charged! Systems overclocked!",
];

export function InteractiveMascot() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [isHappy, setIsHappy] = useState(false);
  const [showSpark, setShowSpark] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  const handleBotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setIsHappy(true);
    setShowSpark(false);
    setTimeout(() => setShowSpark(true), 10);
    setMsgIndex(7); // "⚡ Pulse charged! Systems overclocked!"

    setTimeout(() => {
      setIsHappy(false);
      setShowSpark(false);
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHappy) {
        setMsgIndex((prev) => (prev + 1) % (botMessages.length - 1));
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [isHappy]);

  return (
    <div
      className="relative flex items-center justify-center cursor-pointer select-none"
      onClick={handleBotClick}
    >
      {/* Speech bubble */}
      <div
        key={msgIndex}
        className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none whitespace-nowrap rounded-2xl border border-sky-400/25 bg-[#141414] px-4 py-2 text-xs font-medium text-[#fafafa] shadow-2xl transition-all duration-300"
        style={{
          animation: "speechBubble 4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        }}
      >
        <span>{botMessages[msgIndex]}</span>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-b border-r border-sky-400/25 bg-[#141414]" />
      </div>

      {/* Cyber energy burst click particle */}
      {showSpark && (
        <motion.div
          className="pointer-events-none absolute z-30 text-sky-400"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.8, 2.4, 1.8],
            opacity: [0, 1, 0],
            y: [0, -60],
            rotate: [0, 45, -45, 0],
          }}
          style={{ left: clickPos.x, top: clickPos.y }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </motion.div>
      )}

      {/* 3D Cyber Bot mascot video: screen-blended & transparent WebM to eliminate any black box */}
      <div
        className={`relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px] transition-transform duration-500 ${
          isHappy ? "scale-108" : "hover:scale-103"
        }`}
      >
        <div className="absolute inset-0 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <video
          poster="/mascot.png"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="relative h-full w-full object-contain mix-blend-screen filter drop-shadow-[0_20px_40px_rgba(56,189,248,0.25)] pointer-events-none"
        >
          <source src="/mascot.webm" type="video/webm" />
          <source src="/mascot.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
