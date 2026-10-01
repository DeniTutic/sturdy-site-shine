import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import commercial from "@/assets/project-commercial.webp";
import residential from "@/assets/project-residential.webp";
import industrial from "@/assets/project-industrial.webp";
import { SectionHeading } from "./SectionHeading";

const reviews = [
  {
    img: commercial, project: "Westgate Retail Center",
    quote: "Ironclad delivered our 40,000 sq ft retail center two weeks ahead of schedule and $80k under budget. Their PM caught design issues our architect missed. We've since hired them for two more locations.",
    name: "Marcus Chen", role: "VP Development, Westgate Retail Group",
  },
  {
    img: residential, project: "Aspen Ridge Estate",
    quote: "I interviewed five custom-home builders. Ironclad was the only one who showed up with a written schedule, line-item bid, and references they actually wanted me to call. The build was flawless.",
    name: "Dr. Sarah Whitman", role: "Homeowner, Aspen Ridge",
  },
  {
    img: industrial, project: "Northgate Distribution Hub",
    quote: "Weekly progress photos, transparent change orders, and a PM who answered the phone every single time. After 22 years of commercial construction projects, this is how it should be done.",
    name: "James O'Halloran", role: "Facilities Director, Northgate Logistics",
  },
];

export const Testimonials = () => (
  <section id="testimonials" className="section-pad bg-secondary/40">
    <div className="container-wide">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading code="SEC. 06 / CLIENT REVIEWS" title={<>What Our<br />Clients Say</>} />
        <div>
          <div className="flex items-center gap-1" aria-hidden>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <p className="mono-label mt-2 text-steel">4.9/5 from 284 verified reviews</p>
        </div>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="mt-12">
        <CarouselContent className="-ml-6">
          {reviews.map((r) => (
            <CarouselItem key={r.name} className="pl-6 md:basis-1/2 lg:basis-1/3">
              <figure className="flex h-full flex-col border border-border bg-card">
                <div className="relative aspect-[16/7] overflow-hidden">
                  <img src={r.img} alt="" loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <span className="mono-label absolute bottom-3 left-4 text-primary-foreground">{r.project}</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <Quote className="h-7 w-7 text-accent" />
                  <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/90">"{r.quote}"</blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.role}</div>
                  </figcaption>
                </div>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-3 hidden rounded-none border-primary bg-background md:flex" />
        <CarouselNext className="-right-3 hidden rounded-none border-primary bg-background md:flex" />
      </Carousel>
    </div>
  </section>
);
