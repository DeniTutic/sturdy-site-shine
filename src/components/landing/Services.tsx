import { Building2, Home, Factory, Wrench, ArrowUpRight } from "lucide-react";
import commercial from "@/assets/project-commercial.webp";
import residential from "@/assets/project-residential.webp";
import industrial from "@/assets/project-industrial.webp";
import renovation from "@/assets/project-renovation.webp";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Building2,
    img: commercial,
    title: "Commercial Construction",
    desc: "Office buildings, retail centers, hospitality and mixed-use developments built to drive ROI.",
    items: ["Ground-up construction", "Tenant improvements", "Build-to-suit"],
  },
  {
    icon: Home,
    img: residential,
    title: "Custom Homes",
    desc: "Architect-quality residential builds from concept through final walk-through.",
    items: ["Luxury custom homes", "Multi-family residential", "Additions"],
  },
  {
    icon: Factory,
    img: industrial,
    title: "Industrial & Warehouse",
    desc: "Heavy-duty industrial facilities, distribution centers and manufacturing plants engineered to spec.",
    items: ["Pre-engineered metal", "Cold storage", "Manufacturing"],
  },
  {
    icon: Wrench,
    img: renovation,
    title: "Renovations & Remodels",
    desc: "Full-service remodels — kitchens, baths, whole-home and commercial refits.",
    items: ["Full home remodels", "Kitchen & bath", "Commercial refits"],
  },
];

export const Services = () => (
  <section id="services" className="section-pad bg-background">
    <div className="container-wide">
      <SectionHeading
        code="SEC. 01 / SERVICES"
        title={<>One Builder.<br />Every Project Type.</>}
        lede="Self-perform crews, dedicated project managers and vetted trade partners — under one accountable roof."
      />

      <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div key={s.title} className="bg-card">
            <Reveal delay={i * 80} className="h-full">
            <article className="group relative flex h-full min-h-[26rem] flex-col overflow-hidden p-7">
              <img
                src={s.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100 group-focus-within:opacity-100"
              />
              <div className="absolute inset-0 bg-primary/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />

              <div className="relative flex h-full flex-col transition-colors group-hover:text-primary-foreground group-focus-within:text-primary-foreground">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-5xl font-medium text-accent">0{i + 1}</span>
                  <s.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold uppercase leading-none">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/80 group-focus-within:text-primary-foreground/80">{s.desc}</p>
                <ul className="mt-5 divide-y divide-dashed divide-border/80 border-t border-dashed border-border/80 text-sm group-hover:divide-white/25 group-hover:border-white/25">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 py-2">
                      <span className="h-1 w-3 bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  aria-label={`Get a quote for ${s.title}`}
                  className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold uppercase tracking-wide text-primary group-hover:text-accent group-focus-within:text-accent"
                >
                  Request a quote
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);
