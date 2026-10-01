import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { QuickQuoteForm } from "./QuickQuoteForm";
import { SectionHeading } from "./SectionHeading";
import { company } from "@/lib/company";

export const ContactSection = () => (
  <section id="contact" className="section-pad concrete-noise relative bg-primary text-primary-foreground">
    <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden />
    <div className="container-wide relative">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            code="SEC. 08 / GET STARTED"
            title={<>Ready to Build?<span className="block text-accent">Let's Talk.</span></>}
            lede="Tell us about your project and a senior estimator will personally call you within 24 hours. No call centers, no high-pressure sales — just a real builder ready to listen."
            tone="dark"
          />

          <div className="mt-10 grid gap-4">
            <a href={company.phoneHref} className="flex items-center gap-4 border border-white/15 bg-white/5 p-5 transition-colors hover:border-accent hover:bg-white/10">
              <span className="flex h-12 w-12 items-center justify-center bg-accent text-accent-foreground"><Phone className="h-5 w-5" /></span>
              <span>
                <span className="mono-label block text-primary-foreground/60">Call us</span>
                <span className="block font-display text-2xl font-bold">{company.phone}</span>
              </span>
            </a>
            <a href={company.emailHref} className="flex items-center gap-4 border border-white/15 bg-white/5 p-5 transition-colors hover:border-accent hover:bg-white/10">
              <span className="flex h-12 w-12 items-center justify-center bg-accent text-accent-foreground"><Mail className="h-5 w-5" /></span>
              <span>
                <span className="mono-label block text-primary-foreground/60">Email</span>
                <span className="block font-display text-2xl font-bold">{company.email}</span>
              </span>
            </a>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 border border-white/15 bg-white/5 p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm">
                  <span className="block font-semibold">Headquarters</span>
                  <span className="text-primary-foreground/70">{company.address[0]}<br />{company.address[1]}</span>
                </span>
              </div>
              <div className="flex items-start gap-3 border border-white/15 bg-white/5 p-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm">
                  <span className="block font-semibold">Office Hours</span>
                  <span className="text-primary-foreground/70">{company.hours[0]}<br />{company.hours[1]}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <QuickQuoteForm variant="steps" />
        </div>
      </div>
    </div>
  </section>
);
