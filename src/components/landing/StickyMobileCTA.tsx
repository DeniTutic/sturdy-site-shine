import { Phone } from "lucide-react";

export const StickyMobileCTA = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
    <a
      href="tel:+15550123456"
      className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground"
    >
      <Phone className="h-4 w-4 text-accent" />
      Call
    </a>
    <a
      href="#contact"
      className="flex flex-[2] items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-accent"
    >
      Get Free Estimate
    </a>
  </div>
);
