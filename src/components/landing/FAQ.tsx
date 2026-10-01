import { Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  { q: "How quickly can you start my project?", a: "Most residential projects begin 4–6 weeks after contract signing, once permits are secured. Commercial timelines vary based on design complexity. For emergency or fast-track work, we maintain a rapid-response crew." },
  { q: "Do you provide free estimates?", a: "Yes. Every estimate is 100% free with zero obligation. A senior estimator visits your site, reviews your goals, and returns a fully itemized fixed-price proposal within 5–7 business days." },
  { q: "Are you licensed and insured?", a: "Ironclad is licensed in CO, UT, NM and AZ, carries $5M general liability insurance, full workers' comp on all crew members, and is bonded for projects up to $25M. Documentation is provided with every proposal." },
  { q: "What happens if my project goes over budget?", a: "It doesn't. Our fixed-price contracts mean the bid is the price. Any change orders require your written approval before work begins, and you'll always see itemized cost impact upfront." },
  { q: "Can you handle architecture and design too?", a: "Absolutely. Our in-house design-build team can take you from napkin sketch to final build, or we can work with your existing architect. Either way, you get one accountable partner." },
  { q: "What's your warranty?", a: "We offer a 2-year written workmanship warranty on all labor — well above the industry standard. Manufacturer warranties on materials are passed through directly to you." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const FAQ = () => (
  <section id="faq" className="section-pad bg-background">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
      <div>
        <SectionHeading code="SEC. 07 / FAQ" title={<>Questions,<br />Answered.</>} />
        <div className="mt-8 border-l-4 border-accent bg-secondary p-6">
          <p className="font-display text-xl font-bold uppercase">Still have questions?</p>
          <p className="mt-1 text-sm text-muted-foreground">Talk to an estimator, not a call center.</p>
          <Button variant="steel" className="mt-4" asChild>
            <a href={company.phoneHref}>
              <Phone className="h-4 w-4" />
              {company.phone}
            </a>
          </Button>
        </div>
      </div>

      <Accordion type="single" collapsible className="border-t border-border">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="gap-4 text-left font-display text-lg font-semibold uppercase hover:no-underline">
              <span className="flex gap-4">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                {f.q}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pl-9 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
