"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const catMessages = [
  "Beep boop! All sensors calibrated.",
  "Baggage handling status: 100% operational.",
  "I speak fluent C++, Python, and Meow.",
  "Click me for good luck on your next build!",
  "ESP32 Wi-Fi connected to cloud.",
  "Don't just stare, check the projects below!",
  "Actually, I'm the one reviewing the PLC code.",
  "Aww! That tickles! More!",
];

export function InteractiveMascot() {
  const [catMsgIndex, setCatMsgIndex] = useState(0);
  const [isHappy, setIsHappy] = useState(false);
  const [showFeed, setShowFeed] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  const handleCatClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setIsHappy(true);
    setShowFeed(false);
    setTimeout(() => setShowFeed(true), 10);
    setCatMsgIndex(7); // "Aww! That tickles! More!"

    setTimeout(() => {
      setIsHappy(false);
      setShowFeed(false);
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHappy) {
        setCatMsgIndex((prev) => (prev + 1) % (catMessages.length - 1));
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [isHappy]);

  return (
    <div
      className="relative flex items-center justify-center cursor-pointer select-none"
      onClick={handleCatClick}
    >
      {/* Speech bubble */}
      <div
        key={catMsgIndex}
        className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none whitespace-nowrap rounded-2xl border border-amber-500/20 bg-[#141414] px-4 py-2 text-xs font-medium text-[#fafafa] shadow-2xl transition-all duration-300"
        style={{
          animation: "speechBubble 4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        }}
      >
        <span>{catMessages[catMsgIndex]}</span>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-b border-r border-amber-500/20 bg-[#141414]" />
      </div>

      {/* Heart click particle */}
      {showFeed && (
        <motion.div
          className="pointer-events-none absolute z-30 text-amber-400"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.8, 2.2, 1.6],
            opacity: [0, 1, 0],
            y: [0, -60],
            rotate: [0, 15, -15, 0],
          }}
          style={{ left: clickPos.x, top: clickPos.y }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      )}

      {/* Video mascot */}
      <div className={`relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px] transition-transform duration-500 ${isHappy ? "scale-105" : "hover:scale-102"}`}>
        <div className="absolute inset-0 rounded-full bg-amber-500/5 blur-3xl" />
        <video
          src="/icon.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="relative h-full w-full object-contain filter drop-shadow-[0_20px_40px_rgba(196,168,130,0.15)]"
        />
      </div>
    </div>
  );
}
