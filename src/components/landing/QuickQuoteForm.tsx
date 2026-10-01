import { useId, useState } from "react";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, Factory, Home, Loader2, Lock, MoreHorizontal, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const fields = {
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  projectType: z.string().min(1, "Choose a project type"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  size: z.string().trim().max(50).optional(),
  message: z.string().trim().max(1000).optional(),
};

const stepSchemas = [
  z.object({ projectType: fields.projectType }),
  z.object({ budget: fields.budget, timeline: fields.timeline, size: fields.size, message: fields.message }),
  z.object({ name: fields.name, phone: fields.phone, email: fields.email }),
];
const fullSchema = z.object(fields);

type Values = Record<keyof typeof fields, string>;
const empty: Values = { name: "", email: "", phone: "", projectType: "", budget: "", timeline: "", size: "", message: "" };

const types = [
  { value: "commercial", label: "Commercial", icon: Building2 },
  { value: "residential", label: "Custom Home", icon: Home },
  { value: "industrial", label: "Industrial", icon: Factory },
  { value: "renovation", label: "Renovation", icon: Wrench },
  { value: "other", label: "Other", icon: MoreHorizontal },
];

const budgets = [
  ["under-100k", "Under $100k"], ["100k-500k", "$100k – $500k"], ["500k-2m", "$500k – $2M"], ["2m-plus", "$2M+"],
];
const timelines = [
  ["asap", "As soon as possible"], ["3-months", "Within 3 months"], ["6-months", "Within 6 months"], ["planning", "Just planning"],
];

interface Props {
  /** `compact` = one-screen form for the hero; `steps` = 3-step estimator. */
  variant?: "compact" | "steps";
}

export const QuickQuoteForm = ({ variant = "steps" }: Props) => {
  const uid = useId();
  const id = (n: string) => `${uid}-${n}`;
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof Values, v: string) => setValues((p) => ({ ...p, [k]: v }));
  const isSteps = variant === "steps";

  const validate = (schema: z.ZodTypeAny) => {
    const parsed = schema.safeParse(values);
    if (parsed.success) {
      setErrors({});
      return true;
    }
    const errs: Record<string, string> = {};
    parsed.error.issues.forEach((i) => (errs[i.path[0] as string] ??= i.message));
    setErrors(errs);
    return false;
  };

  const submit = async () => {
    setSubmitting(true);
    // TODO: send `values` to a real backend (email service / serverless function).
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
    toast.success("Estimate request received — we'll call within 24 hours.");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSteps && step < 2) {
      if (validate(stepSchemas[step])) setStep(step + 1);
      return;
    }
    if (!validate(fullSchema)) {
      toast.error("Please fix the highlighted fields");
      return;
    }
    await submit();
  };

  if (done) {
    return (
      <div className="border border-border bg-card p-8 text-center text-card-foreground shadow-elevated">
        <div className="mx-auto flex h-14 w-14 items-center justify-center bg-success/10">
          <CheckCircle2 className="h-8 w-8 text-success" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold uppercase">Request Received</h3>
        <p className="mt-2 text-muted-foreground">A senior estimator will call you within 24 hours to schedule your free site visit.</p>
        <Button
          variant="steel"
          className="mt-6"
          onClick={() => {
            setDone(false);
            setValues(empty);
            setStep(0);
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  const err = (k: string) => errors[k] && <p role="alert" className="mt-1 text-xs text-destructive">{errors[k]}</p>;

  const typeField = (
    <fieldset>
      <legend className="mono-label text-steel">Project type</legend>
      <div className={cn("mt-2 grid gap-2", isSteps ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2")}>
        {types.map((t) => (
          <label
            key={t.value}
            className={cn(
              "flex cursor-pointer items-center gap-2 border px-3 py-3 text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring",
              values.projectType === t.value ? "border-accent bg-accent/15" : "border-input hover:border-primary",
            )}
          >
            <input type="radio" name="projectType" value={t.value} checked={values.projectType === t.value} onChange={() => set("projectType", t.value)} className="sr-only" />
            <t.icon className="h-5 w-5 text-accent" />
            {t.label}
          </label>
        ))}
      </div>
      {err("projectType")}
    </fieldset>
  );

  const selectField = (key: "budget" | "timeline", label: string, opts: string[][]) => (
    <div>
      <Label htmlFor={id(key)}>{label}</Label>
      <Select value={values[key]} onValueChange={(v) => set(key, v)}>
        <SelectTrigger id={id(key)} className="mt-1.5">
          <SelectValue placeholder="Optional" />
        </SelectTrigger>
        <SelectContent>
          {opts.map(([v, l]) => (
            <SelectItem key={v} value={v}>{l}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  const detailsFields = (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {selectField("budget", "Budget range", budgets)}
        {selectField("timeline", "Timeline", timelines)}
      </div>
      <div>
        <Label htmlFor={id("size")}>Approx. size</Label>
        <Input id={id("size")} value={values.size} onChange={(e) => set("size", e.target.value)} placeholder="e.g. 4,000 sq ft" maxLength={50} className="mt-1.5" />
      </div>
      <div>
        <Label htmlFor={id("message")}>Project details</Label>
        <Textarea id={id("message")} value={values.message} onChange={(e) => set("message", e.target.value)} placeholder="Location, scope, anything we should know…" maxLength={1000} rows={3} className="mt-1.5 resize-none" />
      </div>
    </>
  );

  const contactFields = (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor={id("name")}>Full name</Label>
          <Input id={id("name")} value={values.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" placeholder="Jane Smith" maxLength={100} aria-invalid={!!errors.name} className="mt-1.5" />
          {err("name")}
        </div>
        <div>
          <Label htmlFor={id("phone")}>Phone</Label>
          <Input id={id("phone")} type="tel" value={values.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" placeholder="(555) 123-4567" maxLength={20} aria-invalid={!!errors.phone} className="mt-1.5" />
          {err("phone")}
        </div>
      </div>
      <div>
        <Label htmlFor={id("email")}>Email</Label>
        <Input id={id("email")} type="email" value={values.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" placeholder="you@company.com" maxLength={255} aria-invalid={!!errors.email} className="mt-1.5" />
        {err("email")}
      </div>
    </>
  );

  const stepTitles = ["Project type", "Project details", "Your contact info"];

  return (
    <form onSubmit={onSubmit} noValidate className="border border-border bg-card p-6 text-card-foreground shadow-elevated md:p-8">
      <div className="mb-6">
        <div className="mono-label inline-flex items-center gap-2 bg-accent/15 px-3 py-1 text-accent-foreground">
          <span className="h-1.5 w-1.5 bg-accent" />
          Free • No Obligation
        </div>
        <h2 className="mt-3 font-display text-2xl font-bold uppercase md:text-3xl">Get Your Estimate in 24 Hours</h2>
        {isSteps ? (
          <div className="mt-4" aria-live="polite">
            <div className="flex gap-1.5" aria-hidden>
              {stepTitles.map((_, i) => (
                <span key={i} className={cn("h-1.5 flex-1 transition-colors", i <= step ? "bg-accent" : "bg-border")} />
              ))}
            </div>
            <p className="mono-label mt-2 text-steel">Step {step + 1} of 3 — {stepTitles[step]}</p>
          </div>
        ) : (
          <p className="mt-1 text-sm text-muted-foreground">A senior estimator (not a salesperson) will call you back.</p>
        )}
      </div>

      <div className="grid gap-4">
        {isSteps ? (
          <>
            {step === 0 && typeField}
            {step === 1 && detailsFields}
            {step === 2 && contactFields}
          </>
        ) : (
          <>
            {typeField}
            {contactFields}
          </>
        )}

        <div className="mt-2 flex gap-3">
          {isSteps && step > 0 && (
            <Button type="button" variant="steel" size="lg" onClick={() => setStep(step - 1)} aria-label="Previous step">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <Button type="submit" variant="hero" size="lg" disabled={submitting} className="flex-1">
            {submitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending…
              </>
            ) : isSteps && step < 2 ? (
              <>
                Continue
                <ArrowRight className="h-5 w-5" />
              </>
            ) : (
              "Request My Free Estimate"
            )}
          </Button>
        </div>

        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <Lock className="h-3 w-3" />
          Your information stays private. No spam, ever.
        </p>
      </div>
    </form>
  );
};
