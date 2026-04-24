const stats = [
  { value: "35+", label: "Years in Business" },
  { value: "2,400+", label: "Projects Completed" },
  { value: "$1.2B", label: "Built to Date" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "284", label: "5-Star Reviews" },
  { value: "0", label: "Open Lawsuits" },
];

export const Stats = () => (
  <section className="relative overflow-hidden bg-gradient-dark py-20 text-primary-foreground">
    <div className="absolute inset-x-0 top-0 h-1.5 stripes opacity-80" />
    <div className="absolute inset-x-0 bottom-0 h-1.5 stripes opacity-80" />
    <div className="container-wide">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-bold text-accent md:text-5xl">{s.value}</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
