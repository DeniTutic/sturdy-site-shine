import { Award, Building2, ShieldCheck, BadgeCheck, Hammer, Trophy } from "lucide-react";

const items = [
  { icon: Award, label: "ENR Top 400" },
  { icon: BadgeCheck, label: "LEED Certified" },
  { icon: ShieldCheck, label: "OSHA Compliant" },
  { icon: Trophy, label: "BBB A+ Rated" },
  { icon: Building2, label: "AGC Member" },
  { icon: Hammer, label: "Master Builder" },
];

export const TrustBar = () => (
  <section className="border-y border-border bg-secondary/60">
    <div className="container-wide py-8">
      <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
        Trusted, Certified & Recognized
      </p>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center justify-center gap-2 text-primary/70 transition-colors hover:text-primary"
          >
            <it.icon className="h-6 w-6" strokeWidth={1.5} />
            <span className="text-sm font-semibold uppercase tracking-wide">{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
