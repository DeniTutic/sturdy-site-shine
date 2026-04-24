import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly can you start my project?",
    a: "Most residential projects begin 4–6 weeks after contract signing, once permits are secured. Commercial timelines vary based on design complexity. For emergency or fast-track work, we maintain a rapid-response crew.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes. Every estimate is 100% free with zero obligation. A senior estimator visits your site, reviews your goals, and returns a fully-itemized fixed-price proposal within 5–7 business days.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Ironclad is licensed in CO, UT, NM and AZ, carries $5M general liability insurance, full workers' comp on all crew members, and is bonded for projects up to $25M. Documentation is provided with every proposal.",
  },
  {
    q: "What happens if my project goes over budget?",
    a: "It doesn't. Our fixed-price contracts mean the bid is the price. Any change orders require your written approval before work begins, and you'll always see itemized cost impact upfront.",
  },
  {
    q: "Can you handle architecture and design too?",
    a: "Absolutely. Our in-house design-build team can take you from napkin sketch to final build, or we can work with your existing architect. Either way, you get one accountable partner.",
  },
  {
    q: "What's your warranty?",
    a: "We offer a 2-year written workmanship warranty on all labor — well above the industry standard. Manufacturer warranties on materials are passed through directly to you.",
  },
];

export const FAQ = () => (
  <section id="faq" className="section-pad bg-background">
    <div className="container-tight">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">FAQ</span>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase text-balance md:text-5xl">
          Questions, Answered.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Don't see yours?{" "}
          <a href="#contact" className="font-semibold text-primary underline-offset-4 hover:underline">
            Ask us directly
          </a>
          .
        </p>
      </div>

      <Accordion type="single" collapsible className="mt-12">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-display text-lg font-semibold uppercase hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
