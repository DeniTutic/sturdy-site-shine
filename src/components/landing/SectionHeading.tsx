import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  code: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

export const SectionHeading = ({ code, title, lede, tone = "light", className }: Props) => (
  <div className={cn("max-w-3xl", className)}>
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-accent" />
      <span className={cn("mono-label", tone === "dark" ? "text-accent" : "text-steel")}>{code}</span>
    </div>
    <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] text-balance md:text-6xl">{title}</h2>
    {lede && (
      <p className={cn("mt-5 max-w-2xl text-lg", tone === "dark" ? "text-primary-foreground/75" : "text-muted-foreground")}>{lede}</p>
    )}
  </div>
);
