import Link from "next/link";
import { Cpu, Github, Linkedin, Mail, Menu } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-white/8 bg-background/78 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" prefetch={false} className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
            <Cpu className="h-5 w-5" />
          </span>
          <span className="font-display text-sm font-bold tracking-wide text-white sm:text-base">Fariz Achmad</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} prefetch={false} className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/7 hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href={site.links.github} aria-label="GitHub" className="hidden rounded-md p-2 text-slate-300 hover:bg-white/7 hover:text-white sm:block">
            <Github className="h-4 w-4" />
          </a>
          <Button href="/contact" variant="secondary" className="min-h-9 px-3 py-2">
            <Mail className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">Contact</span>
          </Button>
          <details className="group relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-cyan-300/25 bg-slate-950/92 text-cyan-100 shadow-[0_10px_30px_rgba(0,0,0,0.32)] ring-1 ring-white/8 transition hover:border-cyan-200/45 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 group-open:border-cyan-200/55 group-open:bg-slate-900 [&::-webkit-details-marker]:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open navigation menu</span>
            </summary>
            <div className="absolute right-0 top-12 w-60 overflow-hidden rounded-lg border border-cyan-300/18 bg-slate-950 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.5)] ring-1 ring-white/8">
              <div className="px-3 pb-2 pt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-200">Navigation</div>
              {nav.map(([label, href]) => (
                <Link key={href} href={href} prefetch={false} className="block rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-cyan-300/10 hover:text-white">
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
    <footer className="border-t border-white/8">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-lg font-bold text-white">{site.name}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            I build complete technology systems from sensors to production deployment across airport infrastructure, industrial automation, IoT, embedded systems, backend, and infrastructure engineering.
          </p>
        </div>
        <div className="flex items-center gap-3 md:justify-end">
          <a href={site.links.linkedin} className="rounded-md border border-white/10 p-2 text-slate-300 hover:text-white" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={site.links.github} className="rounded-md border border-white/10 p-2 text-slate-300 hover:text-white" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href={`mailto:${site.email}`} className="rounded-md border border-white/10 p-2 text-slate-300 hover:text-white" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
