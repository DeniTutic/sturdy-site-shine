import { CountUp } from "./CountUp";

const stats = [
  { node: <CountUp to={35} suffix="+" />, label: "Years in Business" },
  { node: <CountUp to={2400} suffix="+" />, label: "Projects Completed" },
  { node: <CountUp to={1.2} prefix="$" suffix="B" decimals={1} />, label: "Built to Date" },
  { node: <CountUp to={98} suffix="%" />, label: "On-Time Delivery" },
  { node: <CountUp to={284} />, label: "5-Star Reviews" },
  { node: <CountUp to={1.2} suffix="M" decimals={1} />, label: "Safe Man-Hours / Yr" },
];

export const Stats = () => (
  <section className="relative overflow-hidden bg-gradient-dark py-20 text-primary-foreground">
    <div className="stripes absolute inset-x-0 top-0 h-1.5 opacity-80" />
    <div className="stripes absolute inset-x-0 bottom-0 h-1.5 opacity-80" />
    <div className="container-wide">
      <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((s, i) => (
          <div key={s.label} className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-white/15" : ""}`}>
            <dd className="font-display text-4xl font-bold text-accent md:text-5xl">{s.node}</dd>
            <dt className="mono-label mt-2 text-primary-foreground/70">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
