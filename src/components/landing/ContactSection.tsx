import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { QuickQuoteForm } from "./QuickQuoteForm";

export const ContactSection = () => (
  <section id="contact" className="section-pad bg-gradient-dark text-primary-foreground">
    <div className="container-wide">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Get Started</span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase text-balance md:text-5xl lg:text-6xl">
            Ready to Build?
            <span className="block text-accent">Let's Talk.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-primary-foreground/80">
            Submit your project details and a senior estimator will personally call you within 24 hours. No call centers, no high-pressure sales — just a real builder ready to listen.
          </p>

          <div className="mt-10 grid gap-5">
            <a href="tel:+15550123456" className="group flex items-center gap-4 rounded-xl bg-primary-glow/30 p-5 transition-colors hover:bg-primary-glow/50">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">Call us</span>
                <span className="block font-display text-xl font-bold">(555) 012-3456</span>
              </span>
            </a>
            <a href="mailto:build@ironclad.example" className="group flex items-center gap-4 rounded-xl bg-primary-glow/30 p-5 transition-colors hover:bg-primary-glow/50">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">Email</span>
                <span className="block font-display text-xl font-bold">build@ironclad.com</span>
              </span>
            </a>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex items-start gap-3 rounded-xl bg-primary-glow/30 p-5">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm">
                  <span className="block font-semibold">Headquarters</span>
                  <span className="text-primary-foreground/70">1200 Steelworks Ave<br />Denver, CO 80205</span>
                </span>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-primary-glow/30 p-5">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm">
                  <span className="block font-semibold">Office Hours</span>
                  <span className="text-primary-foreground/70">Mon–Fri 7am–6pm<br />Sat 8am–2pm</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <QuickQuoteForm />
        </div>
      </div>
    </div>
  </section>
);
