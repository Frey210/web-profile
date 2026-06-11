import Image from "next/image";
import { ArrowRight, Cpu, Database, Plane, RadioTower, Server, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { achievements, domains, experience, projects, stats } from "@/lib/content";

const icons = [Plane, ShieldCheck, RadioTower, Cpu, Server, Database];

export default function HomePage() {
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-grid tech-grid opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-24 lg:pt-28">
          <Reveal>
            <div>
              <Badge>Airport QA Officer + Startup CTO</Badge>
              <h1 className="mt-6 max-w-5xl font-display text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Complete systems from sensors to production deployment.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I build technology at the edge of atoms and bits: airport electronic infrastructure, industrial automation, IoT devices, embedded firmware, backend APIs, and production infrastructure.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/projects">
                  See Engineering Work <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact" variant="secondary">
                  Start a Conversation
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative min-h-[440px] overflow-hidden rounded-lg border border-cyan-300/18 bg-slate-950/70 shadow-panel">
              <div className="absolute inset-0 bg-radial-grid tech-grid opacity-60" />
              <div className="absolute inset-x-10 bottom-8 h-40 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute right-6 top-6 rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 font-mono text-xs text-emerald-100">
                sensors {">"} firmware {">"} api {">"} production
              </div>
              <Image
                src="/media/profile/fariz-startup-cutout.png"
                alt="Fariz Achmad Faizal in startup t-shirt"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="object-contain object-bottom drop-shadow-[0_32px_70px_rgba(6,182,212,0.18)]"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-md border border-white/10 bg-slate-950/78 p-4 backdrop-blur">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">Builder at the Edge</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  I bridge airport-grade systems thinking with startup product execution.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Engineering Domains</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">A rare mix of regulated infrastructure and shipped products.</h2>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={domain.title} delay={index * 0.04}>
                <Card className="h-full">
                  <Icon className="h-6 w-6 text-cyan-200" />
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{domain.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{domain.text}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/8 bg-surface/45">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Featured Projects</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Systems that prove the claim.</h2>
            </div>
            <Button href="/projects" variant="ghost">
              View all projects <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Experience Highlights</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Technical leadership with operational consequences.</h2>
            <p className="mt-5 text-slate-400">
              I bring the same discipline I use for airport commissioning evidence into production IoT product delivery for Aerasea.
            </p>
          </div>
        </Reveal>
        <div className="space-y-4">
          {experience.map((item) => (
            <Card key={item.org}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{item.role}</h3>
                  <p className="text-sm text-cyan-200">{item.org}</p>
                </div>
                <span className="text-sm text-slate-500">{item.period}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card className="grid gap-8 border-cyan-300/20 bg-gradient-to-br from-blue-600/14 via-slate-950/80 to-emerald-500/10 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Research & Recognition</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">Published SLAM research, national grants, and competition proof.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              I combine production delivery with academic output: a Kinect-based SLAM mobile robot publication, nationally funded PKM work, and aviation-domain technical recognition.
            </p>
          </div>
          <div className="grid gap-3">
            {achievements.slice(0, 5).map((achievement) => (
              <div key={achievement} className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                {achievement}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
