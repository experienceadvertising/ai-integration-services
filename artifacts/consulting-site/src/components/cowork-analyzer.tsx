import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Building2, User, Loader2, RotateCcw } from "lucide-react";

type UserType = "business" | "individual";
type Phase = "form" | "streaming" | "done" | "error";

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

interface Props {
  defaultUserType?: UserType;
  defaultIndustry?: string;
  headline?: React.ReactNode;
  subheadline?: React.ReactNode;
  variant?: "section" | "embedded";
}

export default function CoworkAnalyzer({
  defaultUserType = "business",
  defaultIndustry = "",
  headline,
  subheadline,
  variant = "section",
}: Props = {}) {
  const [userType, setUserType] = useState<UserType>(defaultUserType);
  const [phase, setPhase] = useState<Phase>("form");
  const [reportHtml, setReportHtml] = useState("");
  const [streamBuffer, setStreamBuffer] = useState("");
  const [error, setError] = useState("");

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState(defaultIndustry);
  const [description, setDescription] = useState("");

  const reportRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setPhase("streaming");
    setStreamBuffer("");
    setReportHtml("");

    let fullReport = "";

    try {
      const resp = await fetch(`${BASE_URL}/api/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: userType, website, industry, description }),
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
              // Auto-scroll report into view as it streams
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

              // Fire-and-forget: save lead + send emails
              fetch(`${BASE_URL}/api/leads`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: name || undefined,
                  email,
                  type: userType,
                  website: website || undefined,
                  industry: industry || undefined,
                  description: description || undefined,
                  reportHtml: fullReport,
                }),
              }).catch(() => {});
            }
          } catch (err: any) {
            if (err?.message) {
              setError(err.message);
              setPhase("error");
            }
          }
        }
      }
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
      setPhase("error");
    }
  };

  const reset = () => {
    setPhase("form");
    setStreamBuffer("");
    setReportHtml("");
    setError("");
  };

  const isEmbedded = variant === "embedded";
  const Wrapper: any = isEmbedded ? "div" : "section";
  const wrapperProps = isEmbedded
    ? { id: "analyzer", className: "px-5 md:px-12" }
    : { id: "analyzer", className: "py-12 md:py-24 px-5 md:px-12 border-b border-border bg-secondary/20" };

  return (
    <Wrapper {...wrapperProps}>
      <div className={`container ${isEmbedded ? "max-w-3xl" : "max-w-4xl"} mx-auto`}>
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Free Personalized Report
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
            {headline ?? <>What could Claude Cowork do for <em>you</em>?</>}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            {subheadline ?? "Enter your website or describe what you do. Get a tailored AI-generated report with specific use cases in under 30 seconds, free, no commitment. Then book a session and I'll help you implement every item in it."}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* FORM */}
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
              {/* Business / Individual toggle */}
              <div>
                <label className="text-sm font-semibold mb-2 block">I am a…</label>
                <div className="grid grid-cols-2 gap-2">
                  {(["business", "individual"] as UserType[]).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setUserType(t)}
                      className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border text-sm font-medium transition-all ${
                        userType === t
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {t === "business" ? <Building2 className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      {t === "business" ? "Business / Team" : "Individual"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
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
              </div>

              {/* Context fields */}
              {userType === "business" ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">Website URL <span className="text-muted-foreground font-normal">(optional)</span></label>
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://yourcompany.com"
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">Industry / what you do <span className="text-muted-foreground font-normal">(optional)</span></label>
                    <input
                      type="text"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      placeholder="e.g. SaaS startup, ecommerce, digital agency"
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">What do you do? <span className="text-muted-foreground font-normal">(the more detail, the better the report)</span></label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="e.g. I'm a freelance marketing consultant working with 5-10 clients. I spend most of my time writing proposals, doing competitor research, and managing social content."
                      rows={3}
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">Industry / field <span className="text-muted-foreground font-normal">(optional)</span></label>
                    <input
                      type="text"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      placeholder="e.g. marketing, sales, operations, healthcare"
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              )}

              <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold" disabled={!email}>
                Generate My Report <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Free, no credit card. We'll also email you a copy and a few tips on getting started.
              </p>
            </motion.form>
          )}

          {/* STREAMING / DONE */}
          {(phase === "streaming" || phase === "done") && (
            <motion.div
              key="report"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              {/* Status bar */}
              <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3.5">
                {phase === "streaming" ? (
                  <>
                    <Loader2 className="w-4 h-4 text-primary animate-spin shrink-0" />
                    <span className="text-sm font-medium">Generating your personalized report…</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium">Your report is ready. We've also emailed you a copy. Evan can help you implement every item in it.</span>
                  </>
                )}
              </div>

              {/* Report card */}
              <div
                ref={reportRef}
                className="bg-card border border-border rounded-2xl p-6 md:p-8"
              >
                <div
                  className="prose prose-sm md:prose max-w-none text-foreground
                    [&>h3]:font-bold [&>h3]:text-lg [&>h3]:mt-6 [&>h3]:mb-2 [&>h3]:text-foreground
                    [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-3
                    [&>ul]:space-y-2 [&>ul]:mb-4 [&>ul]:pl-0 [&>ul]:list-none
                    [&_li]:text-muted-foreground [&_li]:leading-relaxed [&_li]:flex [&_li]:gap-2 [&_li]:items-start
                    [&_strong]:font-semibold [&_strong]:text-foreground
                    [&_em]:italic"
                  dangerouslySetInnerHTML={{ __html: phase === "streaming" ? streamBuffer : reportHtml }}
                />
                {phase === "streaming" && (
                  <span className="inline-block w-0.5 h-4 bg-primary animate-pulse ml-0.5" />
                )}
              </div>

              {/* CTA after report */}
              {phase === "done" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  <a
                    href="#pricing"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-3.5 px-6 font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Book a Session with Evan <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={reset}
                    className="flex items-center justify-center gap-2 border border-border rounded-xl py-3.5 px-6 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" /> Run another report
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ERROR */}
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
    </Wrapper>
  );
}
