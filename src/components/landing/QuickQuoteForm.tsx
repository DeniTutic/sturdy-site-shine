import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  projectType: z.string().min(1, "Choose a project type"),
  budget: z.string().optional(),
  message: z.string().trim().max(1000).optional(),
});

interface QuickQuoteFormProps {
  variant?: "card" | "inline";
}

export const QuickQuoteForm = ({ variant = "card" }: QuickQuoteFormProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
    toast.success("Estimate request received — we'll call within 24 hours.");
  };

  if (done) {
    return (
      <div className="rounded-2xl bg-card p-8 shadow-elevated text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
          <CheckCircle2 className="h-8 w-8 text-success" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold uppercase">Request Received</h3>
        <p className="mt-2 text-muted-foreground">
          A senior estimator will call you within 24 hours to schedule your free site visit.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setDone(false)}>
          Submit another request
        </Button>
      </div>
    );
  }

  const wrapClass =
    variant === "card"
      ? "rounded-2xl bg-card p-6 md:p-8 shadow-elevated border border-border"
      : "rounded-2xl bg-card p-6 md:p-8 shadow-lg border border-border";

  return (
    <form onSubmit={onSubmit} className={wrapClass} noValidate>
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Free • No Obligation
        </div>
        <h2 className="mt-3 font-display text-2xl font-bold uppercase md:text-3xl">
          Get Your Estimate in 24 Hours
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Tell us about your project. A senior estimator (not a salesperson) will call you back.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="Jane Smith" required maxLength={100} className="mt-1.5" />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required maxLength={20} className="mt-1.5" />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@company.com" required maxLength={255} className="mt-1.5" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="projectType">Project Type</Label>
            <Select name="projectType" required>
              <SelectTrigger id="projectType" className="mt-1.5">
                <SelectValue placeholder="Select…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="commercial">Commercial Build</SelectItem>
                <SelectItem value="residential">Custom Home</SelectItem>
                <SelectItem value="industrial">Industrial / Warehouse</SelectItem>
                <SelectItem value="renovation">Renovation / Remodel</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.projectType && <p className="mt-1 text-xs text-destructive">{errors.projectType}</p>}
          </div>
          <div>
            <Label htmlFor="budget">Budget Range</Label>
            <Select name="budget">
              <SelectTrigger id="budget" className="mt-1.5">
                <SelectValue placeholder="Optional" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-100k">Under $100k</SelectItem>
                <SelectItem value="100k-500k">$100k – $500k</SelectItem>
                <SelectItem value="500k-2m">$500k – $2M</SelectItem>
                <SelectItem value="2m-plus">$2M+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message">Project Details</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Square footage, location, timeline…"
            maxLength={1000}
            rows={3}
            className="mt-1.5 resize-none"
          />
        </div>

        <Button type="submit" variant="hero" size="lg" disabled={submitting} className="mt-2 w-full">
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending…
            </>
          ) : (
            "Request My Free Estimate"
          )}
        </Button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <Lock className="h-3 w-3" />
          Your information stays private. No spam, ever.
        </p>
      </div>
    </form>
  );
};
