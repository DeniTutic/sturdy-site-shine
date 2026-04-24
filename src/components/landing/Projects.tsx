import { ArrowUpRight } from "lucide-react";
import commercial from "@/assets/project-commercial.jpg";
import residential from "@/assets/project-residential.jpg";
import industrial from "@/assets/project-industrial.jpg";
import renovation from "@/assets/project-renovation.jpg";

const projects = [
  {
    img: commercial,
    tag: "Commercial",
    title: "Meridian Office Tower",
    meta: "85,000 sq ft • Denver, CO • Delivered 4 weeks early",
  },
  {
    img: residential,
    tag: "Residential",
    title: "Aspen Ridge Estate",
    meta: "6,200 sq ft custom home • Boulder, CO",
  },
  {
    img: industrial,
    tag: "Industrial",
    title: "Northgate Distribution Hub",
    meta: "240,000 sq ft warehouse • Aurora, CO",
  },
  {
    img: renovation,
    tag: "Renovation",
    title: "The Crestwood Kitchen",
    meta: "Full gut remodel • Cherry Creek, CO",
  },
];

export const Projects = () => (
  <section id="projects" className="section-pad bg-background">
    <div className="container-wide">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Recent Projects</span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase text-balance md:text-5xl">
            Work We're Proud to Sign.
          </h2>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent"
        >
          Discuss your project
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`group relative overflow-hidden rounded-2xl bg-card shadow-md ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className={`relative ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"} overflow-hidden`}>
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-primary-foreground">
                <span className="inline-block rounded-sm bg-accent px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase md:text-3xl">{p.title}</h3>
                <p className="mt-1 text-sm text-primary-foreground/80">{p.meta}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
