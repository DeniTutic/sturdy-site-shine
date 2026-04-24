import { ArrowRight, ShieldCheck, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";
import { QuickQuoteForm } from "./QuickQuoteForm";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden pt-24"
    >
      <img
        src={heroImage}
        alt="Construction crew at a steel-frame jobsite during golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />

      <div className="container-wide grid gap-12 py-16 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="animate-fade-up text-primary-foreground">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-accent" />
            Licensed • Bonded • Insured Since 1989
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] text-balance md:text-6xl lg:text-7xl">
            Built to Last.
            <span className="block text-accent">Delivered on Time.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 md:text-xl">
            From skyline-defining commercial towers to custom homes and industrial facilities, Ironclad delivers craftsmanship you can stake your reputation on — backed by a written on-time guarantee.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Get Your Free Estimate
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <a href="#projects">View Our Work</a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-primary-foreground/60">Projects Delivered</dt>
              <dd className="mt-1 font-display text-3xl font-bold text-accent">2,400+</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-primary-foreground/60">On-Time Rate</dt>
              <dd className="mt-1 font-display text-3xl font-bold text-accent">98%</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-primary-foreground/60">Years Building</dt>
              <dd className="mt-1 font-display text-3xl font-bold text-accent">35+</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent" />
              $5M Liability Coverage
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-accent text-accent" />
              4.9/5 from 284 reviews
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              24-hour quote turnaround
            </div>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <QuickQuoteForm />
        </div>
      </div>
    </section>
  );
};
