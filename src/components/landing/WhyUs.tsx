import { ShieldCheck, Clock, DollarSign, Users, FileCheck, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const reasons = [
  { icon: ShieldCheck, title: "On-Time Guarantee", desc: "Written commitment to your completion date — or we credit you for every day late. 98% on-time delivery rate." },
  { icon: DollarSign, title: "Fixed-Price Bids", desc: "Detailed line-item estimates with no hidden fees. The price we quote is the price you pay." },
  { icon: Users, title: "Senior PM on Every Job", desc: "A 15+ year project manager runs your build start to finish. No hand-offs, no rookie mistakes." },
  { icon: FileCheck, title: "Fully Permitted & Insured", desc: "Licensed in 4 states, $5M general liability and full workers' comp on every crew member." },
  { icon: MessageCircle, title: "Weekly Progress Reports", desc: "Photos, schedule updates and budget tracking delivered every Friday. You're never in the dark." },
  { icon: Clock, title: "2-Year Workmanship Warranty", desc: "Industry-leading warranty on all labor. We stand behind every nail, weld and seam." },
];

export const WhyUs = () => (
  <section className="section-pad concrete-noise relative bg-primary text-primary-foreground">
    <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
    <div className="container-wide relative">
      <div className="grid items-end gap-8 lg:grid-cols-2">
        <SectionHeading code="SEC. 02 / WHY IRONCLAD" title={<>The Standard,<br />Not the Exception.</>} tone="dark" />
        <p className="text-lg text-primary-foreground/75">
          Since 1989 the same principles have driven us: do what you say, finish what you start, and leave it better than you found it.
        </p>
      </div>

      <div className="mt-14 grid gap-px border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <div key={r.title} className="bg-primary transition-colors hover:bg-primary-glow/60">
            <Reveal delay={(i % 3) * 80} className="h-full">
              <div className="h-full p-8">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center bg-accent text-accent-foreground">
                  <r.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <span className="mono-label text-primary-foreground/40">R-0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{r.desc}</p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);
