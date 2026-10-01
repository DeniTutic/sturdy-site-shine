import { HardHat, ShieldCheck, GraduationCap } from "lucide-react";
import { CountUp } from "./CountUp";
import { SectionHeading } from "./SectionHeading";

const metrics = [
  { icon: ShieldCheck, node: <CountUp to={0.62} decimals={2} />, label: "EMR rating", note: "Industry average is 1.00 — lower is safer." },
  { icon: GraduationCap, node: <CountUp to={100} suffix="%" />, label: "OSHA-30 supervisors", note: "Every site lead is OSHA-30 certified." },
  { icon: HardHat, node: <CountUp to={1.2} suffix="M" decimals={1} />, label: "Hours, zero lost time", note: "Self-performed crew hours last year." },
];

export const Safety = () => (
  <section id="safety" className="section-pad bg-secondary/60">
    <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
      <div>
        <SectionHeading
          code="SEC. 05 / SAFETY"
          title={<>Everyone Goes<br />Home.</>}
          lede="Safety isn't a poster on the fence. It's daily toolbox talks, third-party audits and the authority for any worker to stop the job."
        />
        <div className="stripes mt-8 h-2 w-40" aria-hidden />
      </div>

      <dl className="grid gap-px border border-border bg-border sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col bg-card p-6">
            <m.icon className="h-6 w-6 text-accent" />
            <dd className="mt-6 font-display text-5xl font-bold text-primary">{m.node}</dd>
            <dt className="mono-label mt-2 text-steel">{m.label}</dt>
            <p className="mt-3 text-sm text-muted-foreground">{m.note}</p>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
