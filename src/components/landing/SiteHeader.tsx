import { HardHat, Phone, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { company } from "@/lib/company";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#safety", label: "Safety" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = links.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "hidden overflow-hidden bg-accent text-accent-foreground transition-all duration-300 lg:block",
          scrolled ? "h-0" : "h-9",
        )}
      >
        <div className="container-wide flex h-9 items-center justify-between">
          <p className="mono-label">{company.license} · Bonded · Insured · {company.hours[0]}</p>
          <a href="#careers" className="mono-label underline-offset-4 hover:underline">
            Now hiring: carpenters, PMs, estimators →
          </a>
        </div>
      </div>

      <div className={cn("transition-all duration-300", scrolled ? "bg-primary/95 shadow-lg backdrop-blur-md" : "bg-primary/40 backdrop-blur-sm")}>
        <div className="container-wide flex h-16 items-center justify-between lg:h-20">
          <a href="#top" className="flex items-center gap-2 text-primary-foreground">
            <span className="flex h-10 w-10 items-center justify-center bg-accent text-accent-foreground">
              <HardHat className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold uppercase tracking-wider">
              Ironclad<span className="text-accent">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                aria-current={active === l.href ? "true" : undefined}
                className={cn(
                  "border-b-2 border-transparent py-1 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent",
                  active === l.href && "border-accent text-primary-foreground",
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a href={company.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-primary-foreground">
              <Phone className="h-4 w-4 text-accent" />
              {company.phone}
            </a>
            <Button variant="cta" asChild>
              <a href="#contact">Get Free Estimate</a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button className="text-primary-foreground lg:hidden" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="border-primary-glow bg-primary text-primary-foreground">
              <SheetTitle className="font-display text-xl uppercase text-primary-foreground">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a href={l.href} className="border-b border-primary-glow/50 py-4 font-display text-2xl font-semibold uppercase">
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button variant="cta" size="lg" asChild className="mt-8 w-full">
                  <a href="#contact">Get Free Estimate</a>
                </Button>
              </SheetClose>
              <a href={company.phoneHref} className="mt-6 flex items-center gap-2 font-semibold">
                <Phone className="h-4 w-4 text-accent" />
                {company.phone}
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
