import Link from "next/link";
import { Cpu, Github, Linkedin, Mail, Menu, Gamepad2 } from "lucide-react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";

const nav = [
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Research", "/research"],
  ["Achievements", "/achievements"],
  ["Contact", "/contact"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neon/10 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" prefetch={false} className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center border-2 border-neon/40 bg-neon/10 text-neon transition group-hover:shadow-neon-sm">
            <Gamepad2 className="h-5 w-5" />
          </span>
          <span className="font-pixel text-[10px] tracking-wider text-neon neon-glow-subtle sm:text-xs">
            FARIZ.DEV
          </span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              prefetch={false}
              className="px-3 py-2 font-mono text-xs text-slate-400 transition hover:bg-neon/5 hover:text-neon"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={site.links.github}
            aria-label="GitHub"
            className="hidden p-2 text-slate-400 transition hover:text-neon sm:block"
          >
            <Github className="h-4 w-4" />
          </a>
          <Button href="/contact" variant="secondary" className="min-h-9 px-3 py-2">
            <Mail className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">Contact</span>
          </Button>
          <details className="group relative lg:hidden">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center border border-neon/20 text-slate-300 hover:bg-neon/5 hover:text-neon [&::-webkit-details-marker]:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </summary>
            <div className="absolute right-0 top-12 w-56 border border-neon/15 bg-background/98 p-2 shadow-panel">
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  prefetch={false}
                  className="block px-3 py-3 font-mono text-sm text-slate-300 hover:bg-neon/5 hover:text-neon"
                >
                  {label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-neon/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="font-pixel text-xs text-neon neon-glow-subtle">{site.name}</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Building complete systems from sensors to production. Airport QA officer by day, startup CTO by night.
          </p>
          <p className="mt-4 font-mono text-xs text-slate-700">© {new Date().getFullYear()} — All rights reserved</p>
        </div>
        <div className="flex items-center gap-3 md:justify-end">
          <a href={site.links.linkedin} className="border border-neon/15 p-2.5 text-slate-400 transition hover:border-neon/40 hover:text-neon" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={site.links.github} className="border border-neon/15 p-2.5 text-slate-400 transition hover:border-neon/40 hover:text-neon" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href={`mailto:${site.email}`} className="border border-neon/15 p-2.5 text-slate-400 transition hover:border-neon/40 hover:text-neon" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
