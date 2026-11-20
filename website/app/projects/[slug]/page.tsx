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
    <article className="pb-24">
      <section className="relative min-h-[500px] flex flex-col justify-center border-b border-[#222222] bg-[#0d0d0d] px-4 py-20 sm:px-6 lg:px-8">
        {project.image && (
          <div className="absolute inset-0 opacity-20">
            <Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
          </div>
        )}
        <div className="relative mx-auto w-full max-w-6xl">
          <Link href="/projects" className="inline-flex items-center gap-2 text-xs text-[#a0a0a0] hover:text-[#fafafa] mb-8 transition">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
          <div className="max-w-3xl">
            <Badge>{project.domain}</Badge>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#fafafa] sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#a0a0a0]">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="rounded-md border border-white/6 bg-white/[0.04] px-2.5 py-1 text-xs text-[#a0a0a0]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[["Year", project.year], ["Role", project.role], ["Status", project.status]].map(([label, value]) => (
              <div key={label} className="glass-panel p-4">
                <p className="text-[10px] uppercase tracking-wider text-[#666666]">{label}</p>
                <p className="mt-1 text-xs font-semibold text-[#fafafa]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {contentSections.map(({ label, icon: Icon, content }, i) => (
          <section key={label} id={label.toLowerCase().replace(" ", "-")} className="grid gap-6 border-b border-[#222222] pb-12 lg:grid-cols-[220px_1fr]">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-mono text-xs text-[#666666]">0{i + 1}</p>
              <h2 className="mt-1 font-display text-xl font-bold text-[#fafafa]">{label}</h2>
            </div>
            <Card className="min-w-0">
              {content ? <Markdown content={content} /> : <p className="text-xs text-[#666666]">Documentation not publicly available.</p>}
            </Card>
          </section>
        ))}

        {project.screenshots?.length ? (
          <section id="screenshots" className="grid gap-6 border-b border-[#222222] pb-12 lg:grid-cols-[220px_1fr]">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                <Layers3 className="h-5 w-5" />
              </div>
              <p className="mt-4 font-mono text-xs text-[#666666]">06</p>
              <h2 className="mt-1 font-display text-xl font-bold text-[#fafafa]">Screenshots</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {project.screenshots.map((s, idx) => (
                <div key={s} className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/6 bg-[#141414]">
                  <Image src={s} alt={`${project.title} screenshot ${idx + 1}`} fill sizes="(min-width: 768px) 42vw, 92vw" className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section id="links" className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
              <ExternalLink className="h-5 w-5" />
            </div>
            <p className="mt-4 font-mono text-xs text-[#666666]">07</p>
            <h2 className="mt-1 font-display text-xl font-bold text-[#fafafa]">Links & References</h2>
          </div>
          <Card>
            {sections.links ? <Markdown content={sections.links} /> : <p className="text-xs text-[#666666]">No public links available.</p>}
          </Card>
        </section>
      </div>
    </article>
  );
}
