import { Award, Building2, ShieldCheck, BadgeCheck, Hammer, Trophy, Factory, Home } from "lucide-react";

const items = [
  { icon: Award, label: "ENR Top 400" },
  { icon: BadgeCheck, label: "LEED Certified" },
  { icon: ShieldCheck, label: "OSHA Compliant" },
  { icon: Trophy, label: "BBB A+ Rated" },
  { icon: Building2, label: "AGC Member" },
  { icon: Hammer, label: "Master Builder" },
  { icon: Factory, label: "Design-Build" },
  { icon: Home, label: "Custom Homes" },
];

export const TrustBar = () => (
  <section className="marquee overflow-hidden border-b border-border bg-primary py-5 text-primary-foreground" aria-label="Certifications and capabilities">
    <div className="flex w-max animate-marquee gap-12 pr-12">
      {[...items, ...items].map((it, i) => (
        <div key={i} className="flex items-center gap-3 whitespace-nowrap" aria-hidden={i >= items.length}>
          <it.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
          <span className="font-display text-lg font-semibold uppercase tracking-wider">{it.label}</span>
          <span className="ml-9 h-2 w-2 rotate-45 bg-accent/60" />
        </div>
      ))}
    </div>
  </section>
);
