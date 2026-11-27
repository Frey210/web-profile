import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveMascot } from "@/components/interactive-mascot";
import styles from "./premium-hero.module.css";

const stats = [
  { value: "11+", label: "Documented systems" },
  { value: "3", label: "Production IoT products" },
  { value: "2", label: "National PKM grants" },
  { value: "1", label: "Published SLAM study" }
];

export function PremiumHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={styles.layout}>
          <div>
            <h1 id="hero-title" className={styles.title}>
              Fariz Achmad <span>Faizal</span>
            </h1>
            <p className="mt-4 font-display text-xl font-medium text-[#deddf2] sm:text-2xl">
              Systems Engineer &amp; IoT CTO
            </p>
            <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-[#bebed2] sm:text-lg">
              I build systems from sensor firmware to production cloud infrastructure, oversee airport electronics commissioning, and lead IoT development at Aerasea.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-[#bebed2]">
              <MapPin aria-hidden="true" className="h-4 w-4 text-indigo-300" />
              Makassar, Indonesia
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2 sm:gap-3">
              <Button href="/projects" className="hover:bg-indigo-200">
                View Projects <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Say Hello <Mail aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button href="/cv" variant="ghost" className="px-3 text-[#bebed2]">
                Download CV <Download aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <InteractiveMascot />
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-indigo-200/20 py-5 sm:grid-cols-4 sm:py-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <dt className="order-1 text-sm text-[#bebed2]">{label}</dt>
              <dd className="font-display text-2xl font-semibold tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
