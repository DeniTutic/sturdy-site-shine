import { useInView } from "@/hooks/use-in-view";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", title: "Free Consultation", desc: "Call or submit the form. A senior estimator visits your site, listens to your goals and asks the right questions.", time: "Within 24 hours" },
  { n: "02", title: "Detailed Proposal", desc: "A fully itemized, fixed-price bid with materials, schedule and a realistic completion date — no surprises.", time: "5–7 business days" },
  { n: "03", title: "Design & Permitting", desc: "Our in-house team handles architectural coordination, engineering, permits and approvals.", time: "2–6 weeks" },
  { n: "04", title: "Construction", desc: "Your dedicated PM runs the build with weekly photo updates, transparent budget tracking and proactive issue resolution.", time: "Per schedule" },
  { n: "05", title: "Walk-Through & Warranty", desc: "Punch-list complete, final walk-through, keys handed over — backed by our 2-year written workmanship warranty.", time: "Day of completion" },
];

const Step = ({ s }: { s: (typeof steps)[number] }) => {
  const { ref, inView } = useInView<HTMLLIElement>({ threshold: 0.5 });
  return (
    <li ref={ref} className="relative pb-10 pl-12 lg:pb-0 lg:pl-0 lg:pt-12">
      {/* rail segment + node */}
      <span className="absolute left-[0.95rem] top-3 h-full w-0.5 bg-white/15 lg:left-0 lg:top-4 lg:h-0.5 lg:w-full" aria-hidden>
        <span
          className={`absolute inset-0 origin-top bg-accent transition-transform duration-1000 lg:origin-left ${inView ? "scale-100" : "scale-0"}`}
        />
      </span>
      <span
        className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center border-2 font-mono text-xs font-semibold transition-colors duration-500 lg:top-0 ${
          inView ? "border-accent bg-accent text-accent-foreground" : "border-white/30 bg-primary text-primary-foreground/60"
        }`}
        aria-hidden
      >
        {s.n}
      </span>
      <div className="lg:pr-6">
        <h3 className="font-display text-xl font-bold uppercase">{s.title}</h3>
        <p className="mt-2 text-sm text-primary-foreground/70">{s.desc}</p>
        <p className="mono-label mt-4 text-accent">{s.time}</p>
      </div>
    </li>
  );
};

export const Process = () => (
  <section id="process" className="section-pad bg-gradient-dark text-primary-foreground">
    <div className="container-wide">
      <SectionHeading
        code="SEC. 03 / PROCESS"
        title={<>From First Call<br />to Final Walk-Through</>}
        lede="A repeatable, transparent five-step process refined over 35 years and 2,400+ completed projects."
        tone="dark"
      />
      <ol className="mt-16 grid lg:grid-cols-5">
        {steps.map((s) => (
          <Step key={s.n} s={s} />
        ))}
      </ol>
    </div>
  </section>
);
