import type { Metadata } from "next";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Fariz Achmad Faizal for IoT engineering, systems consulting, startup leadership, or research collaboration.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
      <ScrollReveal delay={0}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[#fafafa] sm:text-6xl">
            Let&apos;s build together.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[#a0a0a0]">
            Open for engineering leadership roles, industrial IoT consulting, hardware-software integration, or research collaborations.
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
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Card>
          <form className="grid gap-5" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <label className="grid gap-2 text-xs font-medium text-[#a0a0a0]">
              Your Name
              <input
                name="name"
                autoComplete="name"
                required
                className="min-h-11 rounded-xl border border-white/8 bg-[#0a0a0a] px-4 text-sm text-[#fafafa] outline-none transition focus:border-indigo-400/40"
              />
            </label>
            <label className="grid gap-2 text-xs font-medium text-[#a0a0a0]">
              Email Address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-h-11 rounded-xl border border-white/8 bg-[#0a0a0a] px-4 text-sm text-[#fafafa] outline-none transition focus:border-indigo-400/40"
              />
            </label>
            <label className="grid gap-2 text-xs font-medium text-[#a0a0a0]">
              Inquiry Type
              <select
                name="type"
                className="min-h-11 rounded-xl border border-white/8 bg-[#0a0a0a] px-4 text-sm text-[#fafafa] outline-none transition focus:border-indigo-400/40"
              >
                <option>Recruiting / Full-time Role</option>
                <option>Industrial IoT / Automation Project</option>
                <option>Startup Consulting / Aerasea</option>
                <option>Research Collaboration</option>
              </select>
            </label>
            <label className="grid gap-2 text-xs font-medium text-[#a0a0a0]">
              Message
              <textarea
                name="message"
                rows={6}
                required
                className="rounded-xl border border-white/8 bg-[#0a0a0a] p-4 text-sm text-[#fafafa] outline-none transition focus:border-indigo-400/40"
              />
            </label>
            <Button variant="primary" className="w-full">
              <Send className="h-4 w-4" /> Send Message
            </Button>
          </form>
        </Card>
      </ScrollReveal>
    </section>
  );
}

