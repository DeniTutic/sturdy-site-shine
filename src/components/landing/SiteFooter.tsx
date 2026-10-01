import { HardHat, Facebook, Instagram, Linkedin } from "lucide-react";
import { company } from "@/lib/company";

const socialIcons = [Facebook, Instagram, Linkedin];

export const SiteFooter = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="stripes h-2" aria-hidden />
    <div className="container-wide py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center bg-accent text-accent-foreground">
              <HardHat className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold uppercase tracking-wider">
              Ironclad<span className="text-accent">.</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Building landmark commercial, residential and industrial projects across the Mountain West since {company.founded}.
          </p>
          <div className="mt-5 flex gap-3">
            {company.social.map((s, i) => {
              const Icon = socialIcons[i];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center bg-primary-glow/40 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mono-label text-accent">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li><a href="#services" className="hover:text-accent">Commercial Construction</a></li>
            <li><a href="#services" className="hover:text-accent">Custom Homes</a></li>
            <li><a href="#services" className="hover:text-accent">Industrial Builds</a></li>
            <li><a href="#services" className="hover:text-accent">Renovations</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mono-label text-accent">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li><a href="#projects" className="hover:text-accent">Projects</a></li>
            <li><a href="#process" className="hover:text-accent">Our Process</a></li>
            <li><a href="#safety" className="hover:text-accent">Safety</a></li>
            <li><a href="#testimonials" className="hover:text-accent">Reviews</a></li>
            <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
            <li><a href="#careers" className="hover:text-accent">Careers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mono-label text-accent">Get In Touch</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>{company.address[0]}</li>
            <li>{company.address[1]}</li>
            <li><a href={company.phoneHref} className="hover:text-accent">{company.phone}</a></li>
            <li><a href={company.emailHref} className="hover:text-accent">{company.email}</a></li>
            <li className="pt-1 text-xs">{company.license} • Bonded • Insured</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-glow/40 pt-6 text-xs text-primary-foreground/55 md:flex-row">
        <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-accent">Privacy</a>
          <a href="#" className="hover:text-accent">Terms</a>
          <a href="#" className="hover:text-accent">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
);
