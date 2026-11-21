"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FloatingStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        href="/contact"
        className="group flex items-center gap-2.5 rounded-full border border-indigo-400/20 bg-[#141414]/90 px-4 py-2 text-xs font-medium text-[#fafafa] shadow-2xl backdrop-blur-md transition hover:border-indigo-400/40 hover:bg-[#1a1a1a]"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[#a0a0a0] group-hover:text-white transition">Available for hire</span>
        <span className="text-[#666666]">·</span>
        <span className="text-indigo-300 font-semibold">Let&apos;s talk →</span>
      </Link>
    </motion.div>
  );
}
