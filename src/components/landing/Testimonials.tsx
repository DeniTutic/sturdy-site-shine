import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "Ironclad delivered our 40,000 sq ft retail center two weeks ahead of schedule and $80k under budget. Their PM caught design issues our architect missed. We've since hired them for two more locations.",
    name: "Marcus Chen",
    role: "VP Development, Westgate Retail Group",
  },
  {
    quote:
      "I interviewed five custom-home builders. Ironclad was the only one who showed up with a written schedule, line-item bid, and references they actually wanted me to call. The build was flawless.",
    name: "Dr. Sarah Whitman",
    role: "Homeowner, Aspen Ridge",
  },
  {
    quote:
      "Weekly progress photos, transparent change orders, and a PM who answered the phone every single time. After 22 years of commercial construction projects, this is how it should be done.",
    name: "James O'Halloran",
    role: "Facilities Director, Northgate Logistics",
  },
];

export const Testimonials = () => (
  <section id="testimonials" className="section-pad bg-secondary/40">
    <div className="container-wide">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>
        <p className="mt-2 text-sm font-semibold text-muted-foreground">4.9/5 from 284 verified reviews</p>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase text-balance md:text-5xl">
          What Our Clients Say
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="relative flex flex-col rounded-2xl bg-card p-8 shadow-md border border-border"
          >
            <Quote className="h-8 w-8 text-accent/40" />
            <blockquote className="mt-4 flex-1 text-foreground/90 leading-relaxed">
              "{r.quote}"
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <div className="font-semibold text-foreground">{r.name}</div>
              <div className="text-sm text-muted-foreground">{r.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
