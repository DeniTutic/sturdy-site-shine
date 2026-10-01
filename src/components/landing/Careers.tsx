import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

const roles = ["Lead Carpenters", "Project Managers", "Estimators", "Site Superintendents"];

export const Careers = () => (
  <section id="careers" className="relative overflow-hidden bg-accent text-accent-foreground">
    <div className="container-wide flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center">
      <div>
        <p className="mono-label">Now hiring</p>
        <h2 className="mt-2 font-display text-4xl font-extrabold uppercase leading-none md:text-5xl">Build your career with us.</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {roles.map((r) => (
            <li key={r} className="mono-label border border-accent-foreground/40 px-3 py-1.5">{r}</li>
          ))}
        </ul>
      </div>
      <Button variant="default" size="xl" asChild>
        <a href={`${company.emailHref}?subject=Careers%20at%20Ironclad`}>
          Send us your resume
          <ArrowRight className="h-5 w-5" />
        </a>
      </Button>
    </div>
  </section>
);
