import { ShieldCheck, Clock, DollarSign, Users, FileCheck, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "On-Time Guarantee",
    desc: "Written commitment to your completion date — or we credit you for every day late. 98% on-time delivery rate.",
  },
  {
    icon: DollarSign,
    title: "Fixed-Price Bids",
    desc: "Detailed line-item estimates with no hidden fees. The price we quote is the price you pay.",
  },
  {
    icon: Users,
    title: "Senior PM on Every Job",
    desc: "A 15+ year project manager runs your build start to finish. No hand-offs, no rookie mistakes.",
  },
  {
    icon: FileCheck,
    title: "Fully Permitted & Insured",
    desc: "Licensed in 4 states, $5M general liability and full workers' comp on every crew member.",
  },
  {
    icon: MessageCircle,
    title: "Weekly Progress Reports",
    desc: "Photos, schedule updates and budget tracking delivered every Friday. You're never in the dark.",
  },
  {
    icon: Clock,
    title: "2-Year Workmanship Warranty",
    desc: "Industry-leading warranty on all labor. We stand behind every nail, weld and seam.",
  },
];

export const WhyUs = () => (
  <section className="section-pad bg-gradient-subtle">
    <div className="container-wide">
      <div className="grid items-end gap-8 md:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Why Choose Us</span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase text-balance md:text-5xl">
            The Standard, Not the Exception.
          </h2>
        </div>
        <p className="text-lg text-muted-foreground">
          We've been doing this since 1989, and the same principles still drive us: do what you say, finish what you start, and leave it better than you found it.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r) => (
          <div key={r.title} className="bg-card p-8 transition-colors hover:bg-secondary/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/15 text-accent-foreground">
              <r.icon className="h-5 w-5 text-accent" strokeWidth={2} />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold uppercase">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
