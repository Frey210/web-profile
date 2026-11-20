import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Boxes, CheckCircle2, ExternalLink, Layers3, Network, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Markdown } from "@/components/markdown";
import { getProject, getProjectSections, projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Fariz Achmad Faizal`,
      description: project.summary,
      images: project.image ? [project.image] : undefined
    }
  };
}

const sectionMeta = {
  overview: { label: "Overview", icon: Layers3 },
  architecture: { label: "Architecture", icon: Network },
  contributions: { label: "Contributions", icon: Wrench },
  results: { label: "Results", icon: CheckCircle2 },
  techStack: { label: "Tech Stack", icon: Boxes }
} as const;

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections = getProjectSections(project.slug);
  const contentSections = Object.entries(sectionMeta).map(([key, meta]) => ({
    ...meta, content: sections[key as keyof typeof sectionMeta]
  }));

  return (
    <article>
      <section className="relative min-h-[620px] overflow-hidden border-b border-neon/8 bg-background">
        <div className="absolute inset-0 pixel-grid opacity-40" />
        {project.image ? (
          <div className="absolute inset-y-0 right-0 w-full opacity-25 lg:w-3/5 lg:opacity-45">
            <Image src={project.image} alt={`${project.title} banner`} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-background/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </div>
        ) : (
          <div className="absolute right-[8%] top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="relative flex h-80 w-80 items-center justify-center border border-neon/10 bg-neon/3">
              <Network className="h-24 w-24 text-neon/30" />
            </div>
          </div>
        )}
        <div className="relative mx-auto flex min-h-[620px] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/projects" className="absolute left-4 top-10 inline-flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-neon sm:left-6 lg:left-8">
            <ArrowLeft className="h-4 w-4" /> Projects
          </Link>
          <div className="max-w-3xl">
            <Badge>{project.domain}</Badge>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{project.status}</p>
            <h1 className="glitch-text mt-3 font-display text-5xl font-black text-white sm:text-7xl" data-text={project.title}>{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-400">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((t) => <Badge key={t}>{t}</Badge>)}
            </div>
          </div>
          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[["Year", project.year], ["Role", project.role], ["System", project.domain]].map(([label, value]) => (
              <div key={label} className="border border-neon/10 bg-surface/60 p-4 backdrop-blur">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">{label}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {contentSections.map(({ label, icon: Icon, content }, i) => (
            <section key={label} id={label.toLowerCase().replace(" ", "-")} className="grid gap-6 border-b border-neon/8 pb-14 pt-4 lg:grid-cols-[220px_1fr]">
              <div>
                <div className="flex h-10 w-10 items-center justify-center border border-neon/15 bg-neon/5 text-neon">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">0{i + 1}</p>
                <h2 className="mt-1 font-display text-2xl font-bold text-white">{label}</h2>
              </div>
              <Card className="min-w-0">
                {content ? <Markdown content={content} /> : <p className="font-mono text-xs text-slate-600">Documentation not publicly available.</p>}
              </Card>
            </section>
          ))}

          <section id="screenshots" className="grid gap-6 border-b border-neon/8 pb-14 pt-4 lg:grid-cols-[220px_1fr]">
            <div>
              <div className="flex h-10 w-10 items-center justify-center border border-neon/15 bg-neon/5 text-neon"><Layers3 className="h-5 w-5" /></div>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">06</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-white">Screenshots</h2>
            </div>
            {project.screenshots?.length ? (
              <div className="grid gap-4 md:grid-cols-2">
                {project.screenshots.map((s, i) => (
                  <div key={s} className="relative aspect-[16/10] overflow-hidden border border-neon/10 bg-background shadow-panel">
                    <Image src={s} alt={`${project.title} screenshot ${i + 1}`} fill sizes="(min-width: 768px) 42vw, 92vw" className="object-cover transition duration-500 hover:scale-105" />
                    <div className="absolute inset-0 pixel-grid-dense opacity-10 pointer-events-none" />
                  </div>
                ))}
              </div>
            ) : (
              <Card className="flex min-h-52 items-center justify-center border-dashed text-center">
                <div><Boxes className="mx-auto h-8 w-8 text-slate-700" /><p className="mt-3 font-mono text-xs text-slate-600">No screenshots available.</p></div>
              </Card>
            )}
          </section>

          <section id="links" className="grid gap-6 pt-4 lg:grid-cols-[220px_1fr]">
            <div>
              <div className="flex h-10 w-10 items-center justify-center border border-neon/15 bg-neon/5 text-neon"><ExternalLink className="h-5 w-5" /></div>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">07</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-white">Links</h2>
            </div>
            <Card>{sections.links ? <Markdown content={sections.links} /> : <p className="font-mono text-xs text-slate-600">No public links available.</p>}</Card>
          </section>
        </div>

        <Link href="/contact" className="mt-16 inline-flex items-center gap-2 border-2 border-neon/30 bg-neon/5 px-5 py-3 font-mono text-sm font-semibold text-neon hover:bg-neon/10 hover:shadow-neon-sm">
          Discuss a similar system <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
