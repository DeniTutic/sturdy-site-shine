import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import commercial from "@/assets/project-commercial.webp";
import residential from "@/assets/project-residential.webp";
import industrial from "@/assets/project-industrial.webp";
import renovation from "@/assets/project-renovation.webp";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { BeforeAfter } from "./BeforeAfter";
import { Reveal } from "./Reveal";

type Category = "Commercial" | "Residential" | "Industrial" | "Renovation";

interface Project {
  img: string;
  tag: Category;
  title: string;
  meta: string;
  blurb: string;
  specs: [string, string][];
}

const projects: Project[] = [
  {
    img: commercial, tag: "Commercial", title: "Meridian Office Tower",
    meta: "85,000 sq ft • Denver, CO • Delivered 4 weeks early",
    blurb: "A twelve-story class-A office tower with a steel moment frame, curtain-wall façade and structured parking.",
    specs: [["Size", "85,000 sq ft"], ["Location", "Denver, CO"], ["Duration", "18 months"], ["Budget band", "$2M+"], ["Result", "4 weeks early"]],
  },
  {
    img: residential, tag: "Residential", title: "Aspen Ridge Estate",
    meta: "6,200 sq ft custom home • Boulder, CO",
    blurb: "A mountain-modern custom home with cantilevered decks, radiant floors and a locally quarried stone envelope.",
    specs: [["Size", "6,200 sq ft"], ["Location", "Boulder, CO"], ["Duration", "14 months"], ["Budget band", "$2M+"], ["Result", "On schedule"]],
  },
  {
    img: industrial, tag: "Industrial", title: "Northgate Distribution Hub",
    meta: "240,000 sq ft warehouse • Aurora, CO",
    blurb: "A tilt-up distribution center with 36' clear height, 48 dock doors and an ESFR sprinkler system.",
    specs: [["Size", "240,000 sq ft"], ["Location", "Aurora, CO"], ["Duration", "11 months"], ["Budget band", "$2M+"], ["Result", "2 weeks early"]],
  },
  {
    img: renovation, tag: "Renovation", title: "The Crestwood Kitchen",
    meta: "Full gut remodel • Cherry Creek, CO",
    blurb: "A full gut remodel — structural wall removal, new MEP, custom cabinetry and a quartzite island.",
    specs: [["Size", "420 sq ft"], ["Location", "Cherry Creek, CO"], ["Duration", "14 weeks"], ["Budget band", "$100k – $500k"], ["Result", "On budget"]],
  },
];

const filters = ["All", "Commercial", "Residential", "Industrial", "Renovation"] as const;

export const Projects = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const visible = projects.filter((p) => filter === "All" || p.tag === filter);

  return (
    <section id="projects" className="section-pad bg-background">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading code="SEC. 04 / PORTFOLIO" title={<>Work We're<br />Proud to Sign.</>} />
          <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
            <TabsList className="h-auto flex-wrap justify-start gap-1 rounded-none bg-secondary p-1">
              {filters.map((f) => (
                <TabsTrigger key={f} value={f} className="rounded-none px-4 py-2 font-mono text-xs uppercase tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  {f}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className={visible.length % 2 === 1 && i === 0 ? "md:col-span-2" : ""}>
              <button
                type="button"
                onClick={() => setOpen(p)}
                className="group relative block w-full overflow-hidden text-left shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div className={`relative overflow-hidden ${visible.length % 2 === 1 && i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground md:p-8">
                    <span className="mono-label inline-block bg-accent px-2.5 py-1 text-accent-foreground">{p.tag}</span>
                    <h3 className="mt-3 font-display text-2xl font-bold uppercase md:text-3xl">{p.title}</h3>
                    <p className="mt-1 text-sm text-primary-foreground/80">{p.meta}</p>
                  </div>
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-accent text-accent-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto rounded-none p-0">
          {open && (
            <>
              {open.tag === "Renovation" ? (
                // TODO: replace `before` with a real "before" photo; the filtered stand-in is only a placeholder.
                <BeforeAfter before={open.img} after={open.img} beforeFilter="grayscale(1) sepia(0.4) brightness(0.55) contrast(1.1)" alt={open.title} />
              ) : (
                <img src={open.img} alt={open.title} className="aspect-[16/9] w-full object-cover" />
              )}
              <div className="p-6 md:p-8">
                <span className="mono-label bg-accent px-2.5 py-1 text-accent-foreground">{open.tag}</span>
                <DialogTitle className="mt-3 font-display text-3xl font-bold uppercase">{open.title}</DialogTitle>
                <DialogDescription className="mt-2 text-base">{open.blurb}</DialogDescription>
                <dl className="mt-6 grid grid-cols-2 border border-border sm:grid-cols-5">
                  {open.specs.map(([k, v], i) => (
                    <div key={k} className={`p-4 ${i > 0 ? "border-l border-border" : ""}`}>
                      <dt className="mono-label text-steel">{k}</dt>
                      <dd className="mt-1 font-display text-lg font-bold">{v}</dd>
                    </div>
                  ))}
                </dl>
                <Button variant="hero" size="lg" asChild className="mt-6" onClick={() => setOpen(null)}>
                  <a href="#contact">Discuss a similar project</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
