import { Building2, Home, Factory, Wrench, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Office buildings, retail centers, hospitality and mixed-use developments built to drive ROI.",
    items: ["Ground-up construction", "Tenant improvements", "Build-to-suit"],
  },
  {
    icon: Home,
    title: "Custom Homes",
    desc: "Architect-quality residential builds from concept through final walk-through, your vision realized.",
    items: ["Luxury custom homes", "Multi-family residential", "Additions"],
  },
  {
    icon: Factory,
    title: "Industrial & Warehouse",
    desc: "Heavy-duty industrial facilities, distribution centers and manufacturing plants engineered to spec.",
    items: ["Pre-engineered metal", "Cold storage", "Manufacturing"],
  },
  {
    icon: Wrench,
    title: "Renovations & Remodels",
    desc: "Transform your existing space with full-service remodels — kitchens, baths, full home, and commercial.",
    items: ["Full home remodels", "Kitchen & bath", "Commercial refits"],
  },
];

export const Services = () => (
  <section id="services" className="section-pad bg-background">
    <div className="container-wide">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">What We Build</span>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase text-balance md:text-5xl">
          One Builder. Every Project Type.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Self-perform crews, dedicated project managers and vetted trade partners — under one accountable roof.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-elevated"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold uppercase">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <ul className="mt-4 space-y-1.5">
              {s.items.map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1 w-3 bg-accent" />
                  {i}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              aria-label={`Get a quote for ${s.title}`}
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent"
            >
              Request a quote
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
