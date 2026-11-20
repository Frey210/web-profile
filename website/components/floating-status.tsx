"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";

export function FloatingStatus() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <Link
        href="/contact"
        prefetch={false}
        className="group flex items-center gap-2.5 rounded-full border border-amber-500/20 bg-[#141414]/90 px-4 py-2 text-xs font-medium text-[#fafafa] shadow-2xl backdrop-blur-md transition-all hover:border-amber-500/40 hover:bg-[#1a1a1a] hover:scale-105"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[#a0a0a0] group-hover:text-white transition">Available for hire</span>
        <span className="text-amber-300">Let&apos;s talk!</span>
        <MessageSquare className="h-3.5 w-3.5 text-amber-300 ml-0.5" />
      </Link>
    </aside>
  );
}
