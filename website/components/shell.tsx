"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Research", "/research"],
  ["Achievements", "/achievements"],
  ["Contact", "/contact"]
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#222222] bg-[#0a0a0a]/85 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 font-bold text-xs transition group-hover:scale-105">
            F
          </span>
          <span className="font-display text-base font-bold tracking-tight text-[#fafafa] group-hover:text-indigo-300 transition">
            fariz<span className="text-indigo-400">.dev</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map(([label, href]) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition ${
                  isActive
                    ? "text-[#fafafa]"
                    : "text-[#a0a0a0] hover:text-[#fafafa]"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute inset-x-3.5 -bottom-1 h-0.5 rounded-full bg-indigo-400" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden p-2 text-[#a0a0a0] transition hover:text-[#fafafa] sm:block"
          >
            <Github className="h-4 w-4" />
          </a>
          <Button href="/contact" variant="secondary" className="min-h-9 px-3.5 py-1.5 text-xs">
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Get in Touch</span>
          </Button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 text-[#a0a0a0] hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[65px] border-b border-[#222222] bg-[#0a0a0a]/95 backdrop-blur-2xl p-6 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition ${
                  pathname === href ? "bg-white/5 text-indigo-300" : "text-[#a0a0a0] hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-[#0d0d0d]/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-lg font-bold text-[#fafafa]">{site.name}</p>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[#666666]">
            Electrical Engineer & Startup CTO. Building systems from physical sensors to scalable cloud production.
          </p>
          <p className="mt-4 text-[11px] text-[#444444]">
            © {new Date().getFullYear()} Fariz Achmad Faizal. Crafted with care.
          </p>
        </div>
        <div className="flex items-center gap-3 md:justify-end">
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[#222222] p-2.5 text-[#a0a0a0] transition hover:border-[#333333] hover:text-[#fafafa]"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[#222222] p-2.5 text-[#a0a0a0] transition hover:border-[#333333] hover:text-[#fafafa]"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-lg border border-[#222222] p-2.5 text-[#a0a0a0] transition hover:border-[#333333] hover:text-[#fafafa]"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
