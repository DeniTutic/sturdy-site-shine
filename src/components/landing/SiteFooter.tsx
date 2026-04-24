import { HardHat, Facebook, Instagram, Linkedin } from "lucide-react";

export const SiteFooter = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-wide py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <HardHat className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold uppercase tracking-wider">
              Ironclad<span className="text-accent">.</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
            Building landmark commercial, residential and industrial projects across the Mountain West since 1989.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-glow/40 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-accent">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li><a href="#services" className="hover:text-accent">Commercial Construction</a></li>
            <li><a href="#services" className="hover:text-accent">Custom Homes</a></li>
            <li><a href="#services" className="hover:text-accent">Industrial Builds</a></li>
            <li><a href="#services" className="hover:text-accent">Renovations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-accent">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li><a href="#projects" className="hover:text-accent">Projects</a></li>
            <li><a href="#process" className="hover:text-accent">Our Process</a></li>
            <li><a href="#testimonials" className="hover:text-accent">Reviews</a></li>
            <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
            <li><a href="#contact" className="hover:text-accent">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-accent">Get In Touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>1200 Steelworks Ave</li>
            <li>Denver, CO 80205</li>
            <li><a href="tel:+15550123456" className="hover:text-accent">(555) 012-3456</a></li>
            <li><a href="mailto:build@ironclad.example" className="hover:text-accent">build@ironclad.com</a></li>
            <li className="pt-1 text-xs">License #CO-12849 • Bonded • Insured</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-glow/40 pt-6 text-xs text-primary-foreground/55 md:flex-row">
        <p>© {new Date().getFullYear()} Ironclad Construction. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-accent">Privacy</a>
          <a href="#" className="hover:text-accent">Terms</a>
          <a href="#" className="hover:text-accent">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
);
