import type { Metadata } from "next";
import { BookOpen, ExternalLink, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research & Publications",
  description: "Academic research in SLAM mobile robotics, IoT sensor systems, and AI-based ergonomic devices.",
  alternates: { canonical: "/research" }
};

export default function ResearchPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal delay={0}>
        <Badge>Research Track</Badge>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#fafafa] sm:text-6xl">
          Engineering grounded in research.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#a0a0a0]">
          Connecting autonomous robotics, depth vision, IoT sensing, and nationally funded applied research.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-6">
        <ScrollReveal delay={0.1}>
          <Card>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-6">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="font-display text-2xl font-bold text-[#fafafa]">
              Kinect-Based SLAM Mobile Robot (Y-BOT)
            </h2>
            <p className="mt-1 text-xs text-indigo-400">Published in JITET — Jurnal Informatika dan Teknik Elektro Terapan</p>
            <p className="mt-4 text-xs leading-relaxed text-[#a0a0a0]">
              Validated indoor mapping and localization using a Kinect depth sensor integrated with ROS. 
              The system converts 3D depth point clouds into 2D occupancy grid maps, enabling autonomous 
              navigation on a low-cost differential drive robot base. Completed as undergraduate thesis and 
              published in an indexed journal.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="https://journal.eng.unila.ac.id/index.php/jitet/article/view/8070" variant="secondary">
                Journal Article <ExternalLink className="h-3.5 w-3.5" />
              </Button>
              <Button href={site.links.semantic} variant="ghost">Semantic Scholar</Button>
              <Button href={site.links.sinta} variant="ghost">SINTA Profile</Button>
            </div>
          </Card>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0.15}>
            <Card className="h-full">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 mb-4">
                <FlaskConical className="h-4 w-4" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#fafafa]">PKM-PI 2021</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#a0a0a0]">
                Smart Broiler Chicken Coop — nationally funded applied technology for optimizing DOC brooding parameters via embedded sensors in Bulukumba Regency.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="h-full">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 mb-4">
                <FlaskConical className="h-4 w-4" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#fafafa]">PKM-KC 2022</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#a0a0a0]">
                Smart Healing Aerochair — nationally funded innovation for ATC officer fatigue management using AI computer vision, inspiring the Ergoquipt product line.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

