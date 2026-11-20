"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, Mail, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InteractiveMascot } from "@/components/interactive-mascot";
import { MagneticButton } from "@/components/magnetic-button";
import { motion } from "framer-motion";

const phrases = [
  "systems engineer.",
  "IoT platform architect.",
  "industrial automation lead.",
  "airport electronic QA officer.",
  "startup CTO & co-founder.",
  "embedded firmware dev."
];

const stats = [
  { value: "11+", label: "Documented Systems" },
  { value: "3", label: "Production IoT Products" },
  { value: "2", label: "National PKM Grants" },
  { value: "1", label: "Published SLAM Research" }
];

export function PremiumHero() {
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = phrases[wordIndex];

      if (isDeleting) {
        setTypewriterText((prev) => prev.substring(0, prev.length - 1));
        setTypingSpeed(45);

        if (typewriterText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(120);
        }
      } else {
        const nextChar = currentWord[typewriterText.length];
        setTypewriterText((prev) => prev + nextChar);
        setTypingSpeed(100);

        if (typewriterText + nextChar === currentWord) {
          setTypingSpeed(2200);
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, wordIndex, typingSpeed]);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        {/* Left column text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="min-w-0"
        >
          <div className="mb-4">
            <Badge>Electrical Engineer × Startup CTO</Badge>
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-[#fafafa] sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="title-accent">Fariz.</span>
          </h1>

          <h2 className="mt-2 min-h-[1.3em] font-display text-2xl font-semibold text-[#666666] sm:text-4xl lg:text-5xl">
            <span>{typewriterText}</span>
            <span className="text-sky-400 animate-pulse">|</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#a0a0a0] sm:text-lg">
            I engineer complete technology systems from sensor firmware to production cloud infrastructure — 
            overseeing critical airport electronics by day and driving startup IoT innovation by night.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#a0a0a0]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-sky-400" />
              Makassar, Indonesia
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-emerald-400" />
              Open for collaboration & consulting
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Button href="/projects" variant="primary">
                View Projects <ArrowRight className="h-4 w-4" />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="/contact" variant="secondary">
                Say Hello <Mail className="h-4 w-4" />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="/cv" variant="ghost">
                Download CV <Download className="h-4 w-4" />
              </Button>
            </MagneticButton>
          </div>

          {/* Clean stats row */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-white/6 pt-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <p className="font-display text-2xl font-bold text-[#fafafa] sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-[#666666]">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column: Interactive Mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <InteractiveMascot />
        </motion.div>
      </div>
    </section>
  );
}
