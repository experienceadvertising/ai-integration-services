import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

interface SharedReport {
  id: string;
  type: string;
  industry: string | null;
  reportHtml: string;
  createdAt: string;
}

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

export default function ReportPage() {
  const [, params] = useRoute("/report/:id");
  const [report, setReport] = useState<SharedReport | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "missing">("loading");

  useEffect(() => {
    if (!params?.id) return;
    fetch(`${BASE_URL}/api/reports/${params.id}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.reportHtml) {
          setReport(data);
          setState("ready");
        } else {
          setState("missing");
        }
      })
      .catch(() => setState("missing"));
  }, [params?.id]);

  const typeLabel =
    report?.type === "job-description" ? "Job Description Breakdown"
    : report?.type === "business" ? "Business Opportunity Report"
    : "Personal Opportunity Report";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Shared Claude Cowork Report"
        description="A personalized Claude Cowork opportunity report generated at learncowork.net. Get your own free report in 30 seconds."
        noindex
      />
      <SiteNav />

      <section className="pt-28 md:pt-32 pb-16 px-5 md:px-12">
        <div className="container max-w-3xl mx-auto">
          {state === "loading" && (
            <div className="flex items-center justify-center gap-3 py-32 text-muted-foreground">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-sm font-medium">Loading report…</span>
            </div>
          )}

          {state === "missing" && (
            <div className="text-center py-24">
              <h1 className="text-2xl font-bold mb-3">Report not found</h1>
              <p className="text-muted-foreground mb-8">This link may have expired or been mistyped. You can generate a fresh report in about 30 seconds.</p>
              <Link href="/ai-report">
                <Button size="lg">Get a Free Report <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
            </div>
          )}

          {state === "ready" && report && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4 border border-primary/20">
                  <Sparkles className="w-4 h-4" />
                  {typeLabel}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  A Claude Cowork report, shared with you
                </h1>
                <p className="text-muted-foreground">
                  Generated by the free AI analyzer at learncowork.net
                  {report.industry ? <> · {report.industry}</> : null}
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
                <div className={REPORT_CLASSES} dangerouslySetInnerHTML={{ __html: report.reportHtml }} />
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">Want one for your own work?</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Free, personalized, takes 30 seconds. Then Evan can build every workflow in it with you, live.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/ai-report">
                    <Button size="lg">Get My Free Report <ArrowRight className="w-4 h-4 ml-2" /></Button>
                  </Link>
                  <Link href="/#pricing">
                    <Button size="lg" variant="outline">Book a Session with Evan</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
