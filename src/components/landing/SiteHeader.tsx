import { HardHat, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-18 items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 text-primary-foreground">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
            <HardHat className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-wider">
            Ironclad<span className="text-accent">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+15550123456"
            className="flex items-center gap-2 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4 text-accent" />
            (555) 012-3456
          </a>
          <Button variant="cta" size="default" asChild>
            <a href="#contact">Get Free Estimate</a>
          </Button>
        </div>

        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-primary border-t border-primary-glow">
          <div className="container-wide flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-primary-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button variant="cta" asChild className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>Get Free Estimate</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
