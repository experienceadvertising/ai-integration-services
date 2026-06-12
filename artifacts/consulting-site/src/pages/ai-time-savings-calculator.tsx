import { useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { roles } from "@/data/roles";

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");
const PAGE_URL = "https://learncowork.net/ai-time-savings-calculator";

// Share of each task category Claude Cowork can realistically absorb.
// Deliberately conservative — credibility beats a big number.
const TASK_CATEGORIES = [
  { key: "writing", label: "Writing reports, docs & deliverables", factor: 0.6, hint: "status reports, briefs, proposals, summaries" },
  { key: "research", label: "Research & information gathering", factor: 0.65, hint: "competitor scans, prospect research, synthesis" },
  { key: "email", label: "Email & routine communication", factor: 0.5, hint: "follow-ups, updates, drafting replies" },
  { key: "admin", label: "Data entry & admin", factor: 0.7, hint: "CRM updates, expense reports, form processing" },
  { key: "meetings", label: "Meeting prep & notes", factor: 0.55, hint: "agendas, briefs, minutes, action items" },
] as const;

type CategoryKey = (typeof TASK_CATEGORIES)[number]["key"];

const DEFAULT_HOURS: Record<CategoryKey, number> = {
  writing: 6,
  research: 4,
  email: 6,
  admin: 3,
  meetings: 4,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the AI time-savings calculator work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You estimate how many hours per week you spend on five task categories — writing, research, email, admin, and meeting prep. The calculator applies conservative automation rates based on what Claude Cowork handles well in each category and shows hours and dollars reclaimed per week and per year.",
      },
    },
    {
      "@type": "Question",
      name: "Are the savings estimates realistic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The automation rates are deliberately conservative (50-70% per category) and reflect Claude Cowork drafting and executing while a human reviews. Actual results depend on how integrated your tools are — which is exactly what a training session with Evan sets up.",
      },
    },
  ],
};

export default function AiTimeSavingsCalculator() {
  const [hours, setHours] = useState<Record<CategoryKey, number>>(DEFAULT_HOURS);
  const [hourlyRate, setHourlyRate] = useState(60);
  const [teamSize, setTeamSize] = useState(1);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [sending, setSending] = useState(false);

  const results = useMemo(() => {
    const savedPerWeek = TASK_CATEGORIES.reduce(
      (sum, cat) => sum + hours[cat.key] * cat.factor,
      0,
    );
    const totalHours = TASK_CATEGORIES.reduce((sum, cat) => sum + hours[cat.key], 0);
    const weekly = savedPerWeek * teamSize;
    return {
      totalHours,
      weeklyHours: weekly,
      yearlyHours: weekly * 48, // 48 working weeks
      weeklyDollars: weekly * hourlyRate,
      yearlyDollars: weekly * hourlyRate * 48,
    };
  }, [hours, hourlyRate, teamSize]);

  const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  const handleEmailResults = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || sending) return;
    setSending(true);
    const breakdown = TASK_CATEGORIES
      .map((c) => `${c.label}: ${hours[c.key]} hrs/wk → ~${(hours[c.key] * c.factor).toFixed(1)} hrs reclaimed`)
      .join("; ");
    try {
      await fetch(`${BASE_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: "calculator",
          description: `Time-savings calculator: ~${results.weeklyHours.toFixed(1)} hrs/week (${fmt(results.yearlyDollars)} USD/year) across ${teamSize} ${teamSize === 1 ? "person" : "people"} at $${hourlyRate}/hr. ${breakdown}`,
        }),
      });
    } catch {}
    setEmailSent(true);
    setSending(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="AI Time-Savings Calculator — How Many Hours Could Claude Cowork Save You?"
        description="Free calculator: estimate how many hours and dollars Claude Cowork could reclaim from your week across writing, research, email, admin, and meeting prep. Conservative, role-based estimates."
        canonical={PAGE_URL}
        ogImage="https://learncowork.net/og-calculator.png"
        keywords="AI time savings calculator, AI ROI calculator, Claude Cowork ROI, AI productivity calculator, hours saved with AI, AI automation savings, business AI calculator"
        schema={faqSchema}
      />
      <SiteNav />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-5 md:px-12 border-b border-border bg-gradient-to-b from-secondary/40 to-background">
        <div className="container max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-5 border border-primary/20">
              <Calculator className="w-4 h-4" />
              Free Calculator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
              How much of your week could Claude Cowork hand back?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Slide your real numbers in. We apply <strong className="text-foreground">conservative</strong> automation rates — Claude drafts and executes, you review — and show what that's worth per week and per year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 md:py-16 px-5 md:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
          {/* Inputs */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-7">
            <div>
              <h2 className="font-bold text-lg mb-1">Hours per week you (or each team member) spend on…</h2>
              <p className="text-sm text-muted-foreground">Rough estimates are fine.</p>
            </div>

            {TASK_CATEGORIES.map((cat) => (
              <div key={cat.key}>
                <div className="flex items-baseline justify-between mb-1.5 gap-3">
                  <label className="text-sm font-semibold">{cat.label}</label>
                  <span className="text-sm font-bold text-primary tabular-nums shrink-0">{hours[cat.key]} hrs</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={20}
                  step={1}
                  value={hours[cat.key]}
                  onChange={(e) => setHours((h) => ({ ...h, [cat.key]: Number(e.target.value) }))}
                  className="w-full accent-primary"
                  aria-label={cat.label}
                />
                <p className="text-xs text-muted-foreground mt-0.5">{cat.hint}</p>
              </div>
            ))}

            <div className="grid sm:grid-cols-2 gap-5 pt-2 border-t border-border">
              <div className="pt-4">
                <div className="flex items-baseline justify-between mb-1.5">
                  <label className="text-sm font-semibold">Fully loaded hourly cost</label>
                  <span className="text-sm font-bold text-primary tabular-nums">${hourlyRate}/hr</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={250}
                  step={5}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-primary"
                  aria-label="Hourly cost"
                />
              </div>
              <div className="pt-4">
                <div className="flex items-baseline justify-between mb-1.5">
                  <label className="text-sm font-semibold">People doing this work</label>
                  <span className="text-sm font-bold text-primary tabular-nums">{teamSize}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  step={1}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-primary"
                  aria-label="Team size"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:sticky lg:top-20 space-y-4">
            <div className="bg-primary text-primary-foreground rounded-2xl p-7">
              <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-4">Estimated time reclaimed</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-black tabular-nums">{results.weeklyHours.toFixed(1)}</span>
                <span className="text-lg font-semibold opacity-90">hrs/week</span>
              </div>
              <p className="text-sm opacity-80 mb-6">
                of the {fmt(results.totalHours * teamSize)} hours currently going to these tasks
              </p>
              <div className="border-t border-primary-foreground/20 pt-5 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="opacity-80">Per year</span>
                  <span className="font-bold tabular-nums">{fmt(results.yearlyHours)} hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="opacity-80">Value per week</span>
                  <span className="font-bold tabular-nums">${fmt(results.weeklyDollars)}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="opacity-90 font-semibold">Value per year</span>
                  <span className="font-black tabular-nums">${fmt(results.yearlyDollars)}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed px-1">
              Assumes 48 working weeks and 50–70% automation per category — Claude Cowork drafts and executes, a human reviews. Deliberately conservative; integrated tools push these numbers higher.
            </p>

            {/* Email results */}
            {!emailSent ? (
              <form onSubmit={handleEmailResults} className="bg-card border border-border rounded-2xl p-5">
                <label className="text-sm font-semibold mb-2 block">Email me this breakdown</label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="flex-1 px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  />
                  <Button type="submit" size="sm" className="h-auto px-4" disabled={!email || sending}>
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            ) : (
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex items-center gap-3">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm text-foreground">Sent! Evan will follow up with how to actually capture these hours.</p>
              </div>
            )}

            <Link href="/ai-report">
              <Button size="lg" className="w-full h-12">
                See Which Workflows Get You There <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How we got the numbers */}
      <section className="py-14 px-5 md:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Where these numbers come from</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Claude Cowork is Anthropic's agentic AI tool: it operates a browser, reads and drafts documents, connects to your real apps (Gmail, Slack, Salesforce, HubSpot, Notion, databases) via MCP, and runs multi-step workflows end-to-end. It doesn't eliminate task categories — it changes your role in them from <em className="text-foreground not-italic font-medium">producer</em> to <em className="text-foreground not-italic font-medium">reviewer</em>.
            </p>
            <p>
              That's why the calculator caps every category between 50% and 70%: a weekly report that took 3 hours to build takes 20 minutes to review; a follow-up email that took 10 minutes to compose takes 1 minute to approve. The hours that remain are the judgment, relationships, and decisions you were hired for.
            </p>
          </div>
        </div>
      </section>

      {/* Role links */}
      <section className="py-14 px-5 md:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-lg font-bold mb-2">See the specific workflows for your role</h2>
          <p className="text-sm text-muted-foreground mb-6">Each page breaks down exactly which tasks Claude Cowork takes over:</p>
          <div className="flex flex-wrap gap-2">
            {roles.map((r) => (
              <Link key={r.slug} href={`/roles/${r.slug}`}>
                <span className="inline-block px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors cursor-pointer bg-background">
                  {r.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
