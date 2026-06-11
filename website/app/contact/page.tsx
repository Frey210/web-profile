import type { Metadata } from "next";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me for IoT, embedded systems, industrial automation, airport infrastructure, backend systems, or research collaboration."
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Contact</p>
        <h1 className="mt-3 font-display text-4xl font-black text-white sm:text-6xl">Build at the edge of hardware and software.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-400">
          Reach out for engineering roles, industrial IoT consulting, startup collaboration, research work, or systems that need hardware, firmware, backend, and infrastructure to operate as one.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`mailto:${site.email}`}>
            <Mail className="h-4 w-4" />
            Email Me
          </Button>
          <Button href={site.links.linkedin} variant="secondary">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Button>
          <Button href={site.links.github} variant="ghost">
            <Github className="h-4 w-4" />
            GitHub
          </Button>
        </div>
      </div>
      <Card>
        <form className="grid gap-5" action={`mailto:${site.email}`} method="post" encType="text/plain">
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Name
            <input name="name" className="min-h-11 rounded-md border border-white/10 bg-slate-950/70 px-3 text-white outline-none focus:border-cyan-300/60" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Email
            <input name="email" type="email" className="min-h-11 rounded-md border border-white/10 bg-slate-950/70 px-3 text-white outline-none focus:border-cyan-300/60" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Inquiry Type
            <select name="type" className="min-h-11 rounded-md border border-white/10 bg-slate-950/70 px-3 text-white outline-none focus:border-cyan-300/60">
              <option>Recruiting / Hiring</option>
              <option>Industrial IoT Project</option>
              <option>Research Collaboration</option>
              <option>Startup / Aerasea</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Message
            <textarea name="message" rows={7} className="rounded-md border border-white/10 bg-slate-950/70 p-3 text-white outline-none focus:border-cyan-300/60" />
          </label>
          <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:bg-blue-500">
            <Send className="h-4 w-4" />
            Send Inquiry
          </button>
        </form>
      </Card>
    </section>
  );
}
