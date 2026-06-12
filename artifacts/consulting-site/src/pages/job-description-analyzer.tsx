import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { FileSearch, ArrowRight, Loader2, RotateCcw, Sparkles, CheckCircle2, Link2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { roles } from "@/data/roles";

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");
const PAGE_URL = "https://learncowork.net/job-description-analyzer";

type Phase = "form" | "streaming" | "done" | "error";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does the job description analyzer do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paste any job description and the analyzer breaks the role into three buckets: tasks Claude Cowork can run end-to-end, tasks it accelerates with a human driving, and tasks that stay fully human. Every task traces back to a responsibility actually in the description.",
      },
    },
    {
      "@type": "Question",
      name: "Whose job description can I analyze?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your own, a role you're hiring for, or a posting you're considering applying to. Hiring managers use it to scope roles in an AI-assisted team; individuals use it to see how Claude changes their actual job.",
      },
    },
    {
      "@type": "Question",
      name: "Is the analysis free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — free, no credit card. You only pay if you book a 1-hour ($300) or 4-hour ($1,000) training session with Evan to build the workflows the report identifies.",
      },
    },
  ],
};

// Same report typography as cowork-analyzer.tsx — keep the two in sync
const REPORT_CLASSES = `max-w-none text-foreground
  [&>h3]:font-bold [&>h3]:text-xl md:[&>h3]:text-2xl [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-foreground [&>h3]:tracking-tight [&>h3:first-child]:mt-0
  [&_h4]:font-semibold [&_h4]:text-base md:[&_h4]:text-lg [&_h4]:text-foreground [&_h4]:mt-1 [&_h4]:mb-1.5 [&_h4]:leading-snug
  [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-3 [&>p]:text-[15px] md:[&>p]:text-base
  [&_li>p]:text-muted-foreground [&_li>p]:leading-relaxed [&_li>p]:mb-1 [&_li>p]:text-[15px] md:[&_li>p]:text-base
  [&>ul]:space-y-3 [&>ul]:mb-5 [&>ul]:pl-0 [&>ul]:list-none
  [&>ul>li]:relative [&>ul>li]:pl-7 [&>ul>li]:text-muted-foreground [&>ul>li]:leading-relaxed [&>ul>li]:text-[15px] md:[&>ul>li]:text-base
  [&>ul>li]:before:content-['▸'] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-0 [&>ul>li]:before:text-primary [&>ul>li]:before:font-bold
  [&>h3+ul>li]:bg-secondary/30 [&>h3+ul>li]:rounded-xl [&>h3+ul>li]:px-4 [&>h3+ul>li]:py-3 [&>h3+ul>li]:pl-10 [&>h3+ul>li]:border [&>h3+ul>li]:border-border/60
  [&>h3+ul>li]:before:left-4 [&>h3+ul>li]:before:top-3
  [&_strong]:font-semibold [&_strong]:text-foreground
  [&_em]:italic [&_em]:text-primary [&_em]:not-italic [&_em]:text-sm [&_em]:font-medium
  [&>blockquote]:my-6 [&>blockquote]:bg-primary/5 [&>blockquote]:border [&>blockquote]:border-primary/20 [&>blockquote]:rounded-2xl [&>blockquote]:p-5 md:[&>blockquote]:p-6
  [&>blockquote>h3]:text-primary [&>blockquote>h3]:mt-0 [&>blockquote>h3]:mb-2 [&>blockquote>h3]:text-lg md:[&>blockquote>h3]:text-xl
  [&>blockquote>p]:text-foreground [&>blockquote>p]:mb-0 [&>blockquote>p+p]:mt-2`;

export default function JobDescriptionAnalyzer() {
  const [phase, setPhase] = useState<Phase>("form");
  const [jd, setJd] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [streamBuffer, setStreamBuffer] = useState("");
  const [reportHtml, setReportHtml] = useState("");
  const [error, setError] = useState("");
  const [shareId, setShareId] = useState("");
  const [copied, setCopied] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || jd.trim().length < 40) return;

    setPhase("streaming");
    setStreamBuffer("");
    setReportHtml("");

    let fullReport = "";

    try {
      const resp = await fetch(`${BASE_URL}/api/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "job-description", description: jd, industry }),
      });

      if (!resp.ok || !resp.body) throw new Error("Request failed");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const parsed = JSON.parse(line.slice(6));
            if (parsed.error) throw new Error(parsed.error);
            if (parsed.content) {
              fullReport += parsed.content;
              setStreamBuffer(fullReport);
              reportRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
            if (parsed.done) {
              const cleaned = fullReport
                .replace(/^```html\s*/i, "")
                .replace(/^```\s*/i, "")
                .replace(/```\s*$/i, "")
                .trim();
              setReportHtml(cleaned);
              setPhase("done");

              fetch(`${BASE_URL}/api/leads`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: name || undefined,
                  email,
                  type: "job-description",
                  industry: industry || undefined,
                  description: jd.slice(0, 2000),
                  reportHtml: fullReport,
                }),
              }).catch(() => {});

              fetch(`${BASE_URL}/api/reports`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  type: "job-description",
                  industry: industry || undefined,
                  description: jd.slice(0, 2000),
                  reportHtml: cleaned,
                }),
              })
                .then((r) => (r.ok ? r.json() : null))
                .then((data) => {
                  if (data?.id) setShareId(data.id);
                })
                .catch(() => {});
            }
          } catch (err: any) {
            if (err?.message) {
              setError(err.message);
              setPhase("error");
            }
          }
        }
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setPhase("error");
    }
  };

  const reset = () => {
    setPhase("form");
    setStreamBuffer("");
    setReportHtml("");
    setError("");
    setShareId("");
    setCopied(false);
  };

  const copyShareLink = () => {
    const url = `${window.location.origin}/report/${shareId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {});
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Job Description Analyzer — What Can Claude Cowork Take Off This Role's Plate?"
        description="Paste any job description and get a free AI breakdown: which tasks Claude Cowork can run end-to-end, which it accelerates, and which stay human. Instant, no credit card."
        canonical={PAGE_URL}
        ogImage="https://learncowork.net/og-jd-analyzer.png"
        keywords="job description analyzer, AI job analysis, can AI do my job, Claude Cowork job tasks, AI task automation by role, which tasks can AI automate, Claude AI for my job"
        schema={faqSchema}
      />
      <SiteNav />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-5 md:px-12 border-b border-border bg-gradient-to-b from-secondary/40 to-background">
        <div className="container max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-5 border border-primary/20">
              <FileSearch className="w-4 h-4" />
              Free AI Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
              Paste a job description. See what Claude can take off its plate.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Your job, a role you're hiring for, or a posting you're eyeing — our AI reads the actual responsibilities and splits them into what Claude Cowork can <strong className="text-foreground">run end-to-end</strong>, what it <strong className="text-foreground">accelerates</strong>, and what <strong className="text-foreground">stays human</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool */}
      <section className="py-12 md:py-16 px-5 md:px-12 border-b border-border">
        <div className="container max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {phase === "form" && (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-5"
              >
                <div>
                  <label className="text-sm font-semibold mb-1.5 block">Job description <span className="text-destructive">*</span></label>
                  <textarea
                    value={jd}
                    onChange={(e) => setJd(e.target.value)}
                    placeholder="Paste the full job description here — responsibilities, requirements, the works. The more complete it is, the sharper the breakdown."
                    rows={10}
                    required
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-y"
                  />
                  {jd.length > 0 && jd.trim().length < 40 && (
                    <p className="text-xs text-destructive mt-1">Paste a bit more — at least a few sentences of responsibilities.</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">Your name <span className="text-muted-foreground font-normal">(optional)</span></label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Smith"
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">Email <span className="text-destructive">*</span></label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">Industry <span className="text-muted-foreground font-normal">(optional)</span></label>
                    <input
                      type="text"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      placeholder="e.g. SaaS, legal, retail"
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold" disabled={!email || jd.trim().length < 40}>
                  Analyze This Role <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Free, no credit card. We'll also email you a copy of the breakdown.
                </p>
              </motion.form>
            )}

            {(phase === "streaming" || phase === "done") && (
              <motion.div
                key="report"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3.5">
                  {phase === "streaming" ? (
                    <>
                      <Loader2 className="w-4 h-4 text-primary animate-spin shrink-0" />
                      <span className="text-sm font-medium">Reading the role and building the breakdown…</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-medium">Breakdown complete. We've also emailed you a copy.</span>
                    </>
                  )}
                </div>

                <div ref={reportRef} className="bg-card border border-border rounded-2xl p-6 md:p-8">
                  <div
                    className={REPORT_CLASSES}
                    dangerouslySetInnerHTML={{ __html: phase === "streaming" ? streamBuffer : reportHtml }}
                  />
                  {phase === "streaming" && (
                    <span className="inline-block w-0.5 h-4 bg-primary animate-pulse ml-0.5" />
                  )}
                </div>

                {phase === "done" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="grid sm:grid-cols-2 gap-4"
                  >
                    <Link
                      href="/#pricing"
                      className="flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-3.5 px-6 font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Book a Session with Evan <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={reset}
                      className="flex items-center justify-center gap-2 border border-border rounded-xl py-3.5 px-6 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" /> Analyze another role
                    </button>
                    {shareId && (
                      <button
                        onClick={copyShareLink}
                        className="sm:col-span-2 flex items-center justify-center gap-2 border border-primary/30 bg-primary/5 rounded-xl py-3 px-6 text-sm text-primary font-medium hover:bg-primary/10 transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                        {copied ? "Link copied — share it with your team" : "Copy a shareable link to this breakdown"}
                      </button>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )}

            {phase === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-destructive/10 border border-destructive/30 text-destructive rounded-2xl p-6 flex flex-col items-center gap-4 text-center"
              >
                <p className="font-medium">{error || "Something went wrong. Please try again."}</p>
                <Button variant="outline" onClick={reset} size="sm">
                  <RotateCcw className="w-4 h-4 mr-2" /> Try again
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-14 px-5 md:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Three ways people use this</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Analyze your own job", body: "See exactly which parts of your week Claude Cowork can absorb — and walk into the AI conversation at work with specifics instead of vibes." },
              { title: "Scope a role you're hiring", body: "Before you post the req, learn which responsibilities Claude handles so you can hire for the judgment work and equip the person with AI from day one." },
              { title: "Evaluate a posting you want", body: "Applying somewhere? Know which parts of the role you could supercharge with Claude — a genuinely differentiating interview talking point." },
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6">
                <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role links for SEO + internal linking */}
      <section className="py-14 px-5 md:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-lg font-bold mb-2">Prefer a ready-made breakdown?</h2>
          <p className="text-sm text-muted-foreground mb-6">We've already mapped what Claude Cowork can do for these roles:</p>
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
