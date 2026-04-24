const steps = [
  {
    n: "01",
    title: "Free Consultation",
    desc: "Call or submit the form. A senior estimator visits your site, listens to your goals and asks the right questions.",
    time: "Within 24 hours",
  },
  {
    n: "02",
    title: "Detailed Proposal",
    desc: "You receive a fully-itemized, fixed-price bid with materials, schedule, and a realistic completion date — no surprises.",
    time: "5–7 business days",
  },
  {
    n: "03",
    title: "Design & Permitting",
    desc: "Our in-house team handles architectural coordination, engineering, permits and approvals so you don't have to.",
    time: "2–6 weeks",
  },
  {
    n: "04",
    title: "Construction",
    desc: "Your dedicated PM runs the build with weekly photo updates, transparent budget tracking and proactive issue resolution.",
    time: "Per schedule",
  },
  {
    n: "05",
    title: "Walk-Through & Warranty",
    desc: "Punch-list complete, final walk-through, keys handed over — backed by our 2-year written workmanship warranty.",
    time: "Day of completion",
  },
];

export const Process = () => (
  <section id="process" className="section-pad bg-primary text-primary-foreground">
    <div className="container-wide">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Our Process</span>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase text-balance md:text-5xl">
          From First Call to Final Walk-Through
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/75">
          A repeatable, transparent five-step process refined over 35 years and 2,400+ completed projects.
        </p>
      </div>

      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-primary-glow/40 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <li key={s.n} className="relative bg-primary p-7">
            <div className="font-display text-5xl font-bold text-accent">{s.n}</div>
            <h3 className="mt-3 font-display text-lg font-bold uppercase">{s.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/75">{s.desc}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">{s.time}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
