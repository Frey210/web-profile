import type { Metadata } from "next";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact for IoT, embedded systems, industrial automation, airport infrastructure, backend systems, or research collaboration.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pixel-grid opacity-20" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div>
          <p className="font-pixel text-[9px] uppercase tracking-[0.3em] text-neon neon-glow-subtle">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-black text-white sm:text-6xl">Build at the edge of hardware and software.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-500">
            Reach out for engineering roles, IoT consulting, startup collaboration, research work, or systems that need hardware, firmware, backend, and infrastructure operating as one.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}`}>
              <Mail className="h-4 w-4" /> Email Me
            </Button>
            <Button href={site.links.linkedin} variant="secondary">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </Button>
            <Button href={site.links.github} variant="ghost">
              <Github className="h-4 w-4" /> GitHub
            </Button>
          </div>
        </div>
        <Card>
          <form className="grid gap-5" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <label className="grid gap-2 font-mono text-xs font-medium text-slate-300">
              Name
              <input name="name" autoComplete="name" required className="min-h-11 border border-neon/10 bg-background/70 px-3 font-sans text-sm text-white outline-none focus:border-neon/40" />
            </label>
            <label className="grid gap-2 font-mono text-xs font-medium text-slate-300">
              Email
              <input name="email" type="email" autoComplete="email" required className="min-h-11 border border-neon/10 bg-background/70 px-3 font-sans text-sm text-white outline-none focus:border-neon/40" />
            </label>
            <label className="grid gap-2 font-mono text-xs font-medium text-slate-300">
              Inquiry Type
              <select name="type" className="min-h-11 border border-neon/10 bg-background/70 px-3 font-sans text-sm text-white outline-none focus:border-neon/40">
                <option>Recruiting / Hiring</option>
                <option>Industrial IoT Project</option>
                <option>Research Collaboration</option>
                <option>Startup / Aerasea</option>
              </select>
            </label>
            <label className="grid gap-2 font-mono text-xs font-medium text-slate-300">
              Message
              <textarea name="message" rows={7} required className="border border-neon/10 bg-background/70 p-3 font-sans text-sm text-white outline-none focus:border-neon/40" />
            </label>
            <button className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-neon bg-neon/10 px-5 py-2.5 font-mono text-sm font-semibold text-neon hover:bg-neon/20 hover:shadow-neon-sm">
              <Send className="h-4 w-4" /> Send Inquiry
            </button>
          </form>
        </Card>
      </div>
    </section>
  );
}
