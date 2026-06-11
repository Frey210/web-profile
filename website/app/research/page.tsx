import type { Metadata } from "next";
import { BookOpen, ExternalLink, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research & Publications",
  description: "Academic research in SLAM mobile robotics, IoT sensor systems, and AI-based ergonomic devices, including JITET publication and PKM grants."
};

export default function ResearchPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Badge>Research Showcase</Badge>
      <h1 className="mt-5 font-display text-4xl font-black text-white sm:text-6xl">Engineering grounded in research.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
        My research track connects robotics, computer vision, IoT systems, and nationally funded applied engineering projects.
      </p>

      <div className="mt-10 grid gap-5">
        <Card>
          <BookOpen className="h-7 w-7 text-cyan-200" />
          <h2 className="mt-5 font-display text-2xl font-bold text-white">Kinect-Based SLAM Mobile Robot</h2>
          <p className="mt-2 text-sm text-cyan-200">Published in JITET - Jurnal Informatika dan Teknik Elektro Terapan</p>
          <p className="mt-5 leading-7 text-slate-400">
            In my Y-BOT research, I validated indoor mapping and localization using a Kinect depth sensor integrated with ROS. The system converts depth data into SLAM-ready perception input, builds an occupancy map, and demonstrates autonomous navigation on a low-cost mobile robot platform.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="https://journal.eng.unila.ac.id/index.php/jitet/article/view/8070" variant="secondary">
              Journal <ExternalLink className="h-4 w-4" />
            </Button>
            <Button href={site.links.semantic} variant="ghost">
              Semantic Scholar
            </Button>
            <Button href={site.links.sinta} variant="ghost">
              SINTA
            </Button>
          </div>
        </Card>

        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <FlaskConical className="h-6 w-6 text-emerald-300" />
            <h2 className="mt-4 font-display text-xl font-bold text-white">PKM-PI 2021</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Smart Broiler Chicken Coop, a nationally funded applied technology project for optimizing DOC broiler chicken brooding conditions in Balong Village, Bulukumba Regency.
            </p>
          </Card>
          <Card>
            <FlaskConical className="h-6 w-6 text-emerald-300" />
            <h2 className="mt-4 font-display text-xl font-bold text-white">PKM-KC 2022</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Smart Healing Aerochair, a nationally funded ergonomic chair innovation for ATC stress and work-fatigue control using AI-based digital imagery.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
