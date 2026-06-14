import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Boxes,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Network,
  Wrench
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Markdown } from "@/components/markdown";
import { getProject, getProjectSections, projects } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
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
      title: `${project.title} - Fariz Achmad Faizal`,
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
    ...meta,
    content: sections[key as keyof typeof sectionMeta]
  }));

  return (
    <article>
      <section className="relative min-h-[620px] overflow-hidden border-b border-white/8 bg-slate-950">
        <div className="absolute inset-0 bg-radial-grid tech-grid opacity-50" />
        {project.image ? (
          <div className="absolute inset-y-0 right-0 w-full opacity-30 lg:w-3/5 lg:opacity-55">
            <Image src={project.image} alt={`${project.title} project banner`} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/55 to-slate-950/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          </div>
        ) : (
          <div className="absolute right-[8%] top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.04]">
              <Network className="h-24 w-24 text-cyan-200/60" />
              <div className="absolute inset-10 rounded-full border border-dashed border-cyan-300/20" />
              <div className="absolute inset-24 rounded-full border border-emerald-300/20" />
            </div>
          </div>
        )}
        <div className="relative mx-auto flex min-h-[620px] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/projects" className="absolute left-4 top-10 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white sm:left-6 lg:left-8">
            <ArrowLeft className="h-4 w-4" /> Projects
          </Link>
          <div className="max-w-3xl">
            <Badge>{project.domain}</Badge>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">{project.status}</p>
            <h1 className="mt-3 font-display text-5xl font-black text-white sm:text-7xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => <Badge key={tech}>{tech}</Badge>)}
            </div>
          </div>
          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              ["Year", project.year],
              ["Role", project.role],
              ["System", project.domain]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-slate-950/65 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {contentSections.map(({ label, icon: Icon, content }, index) => (
            <section key={label} id={label.toLowerCase().replace(" ", "-")} className="grid gap-6 border-b border-white/8 pb-14 pt-4 lg:grid-cols-[220px_1fr]">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">0{index + 1}</p>
                <h2 className="mt-1 font-display text-2xl font-bold text-white">{label}</h2>
              </div>
              <Card className="min-w-0">
                {content ? <Markdown content={content} /> : <p className="text-sm text-slate-400">Detailed documentation is not publicly available for this section.</p>}
              </Card>
            </section>
          ))}

          <section id="screenshots" className="grid gap-6 border-b border-white/8 pb-14 pt-4 lg:grid-cols-[220px_1fr]">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-100"><Layers3 className="h-5 w-5" /></div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">06</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-white">Screenshots</h2>
            </div>
            {project.screenshots?.length ? (
              <div className="grid gap-4 md:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <div key={screenshot} className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-panel">
                    <Image src={screenshot} alt={`${project.title} screenshot ${index + 1}`} fill sizes="(min-width: 768px) 42vw, 92vw" className="object-cover transition duration-500 hover:scale-105" />
                  </div>
                ))}
              </div>
            ) : (
              <Card className="flex min-h-52 items-center justify-center border-dashed text-center">
                <div><Boxes className="mx-auto h-8 w-8 text-slate-600" /><p className="mt-3 text-sm text-slate-400">No public interface screenshots are available for this system.</p></div>
              </Card>
            )}
          </section>

          <section id="links" className="grid gap-6 pt-4 lg:grid-cols-[220px_1fr]">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-100"><ExternalLink className="h-5 w-5" /></div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">07</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-white">Links</h2>
            </div>
            <Card>{sections.links ? <Markdown content={sections.links} /> : <p className="text-sm text-slate-400">No public links are available for this project.</p>}</Card>
          </section>
        </div>

        <Link href="/contact" className="mt-16 inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 hover:bg-cyan-300/15">
          Discuss a similar system <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
