import { ArrowRight, ShieldCheck, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.webp";
import { QuickQuoteForm } from "./QuickQuoteForm";
import { CountUp } from "./CountUp";
import { company } from "@/lib/company";

export const Hero = () => (
  <section id="top" className="relative isolate min-h-[100svh] overflow-hidden pt-28 lg:pt-36">
    <img
      src={heroImage}
      alt="Construction crew at a steel-frame jobsite during golden hour"
      width={1920}
      height={1080}
      // @ts-expect-error fetchpriority is valid HTML, missing from React 18 types
      fetchpriority="high"
      className="absolute inset-0 -z-20 h-full w-full object-cover"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-hero" />
    <div className="blueprint-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

    <div className="container-wide grid gap-12 pb-24 pt-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
      <div className="min-w-0 animate-fade-up text-primary-foreground">
        <p className="mono-label flex items-center gap-3 text-accent">
          <span className="h-px w-10 bg-accent" />
          Est. {company.founded} — Denver, CO
        </p>

        <h1 className="mt-6 font-display text-6xl font-extrabold uppercase leading-[0.88] text-balance sm:text-7xl lg:text-[7rem]">
          Built to Last.
          <span className="block text-accent">Delivered on Time.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-primary-foreground/85 md:text-xl">
          Commercial towers, custom homes and industrial facilities — built by our own crews, backed by a written on-time guarantee.
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

        <dl className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/20">
          {[
            { label: "Projects Delivered", node: <CountUp to={2400} suffix="+" /> },
            { label: "On-Time Rate", node: <CountUp to={98} suffix="%" /> },
            { label: "Years Building", node: <CountUp to={35} suffix="+" /> },
          ].map((s, i) => (
            <div key={s.label} className={`min-w-0 py-5 ${i > 0 ? "border-l border-white/20 pl-3 sm:pl-5" : "pr-3 sm:pr-5"}`}>
              <dt className="font-mono text-[0.6rem] uppercase tracking-wider text-primary-foreground/60 sm:text-[0.7rem] sm:tracking-[0.2em]">{s.label}</dt>
              <dd className="mt-2 font-display text-3xl font-bold text-accent sm:text-4xl">{s.node}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-primary-foreground/80">
          <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-accent" />$5M liability coverage</li>
          <li className="flex items-center gap-2"><Star className="h-5 w-5 fill-accent text-accent" />4.9/5 from 284 reviews</li>
          <li className="flex items-center gap-2"><Clock className="h-5 w-5 text-accent" />24-hour quote turnaround</li>
        </ul>
      </div>

      <div className="min-w-0 animate-fade-up [animation-delay:120ms]">
        <QuickQuoteForm variant="compact" />
      </div>
    </div>

    <div className="stripes absolute inset-x-0 bottom-0 h-2" aria-hidden />
  </section>
);
