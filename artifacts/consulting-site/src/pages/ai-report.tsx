import { motion } from "framer-motion";
import { Link } from "wouter";
import { Sparkles, Clock, ShieldCheck, Target, FileText, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import CoworkAnalyzer from "@/components/cowork-analyzer";

const PAGE_URL = "https://learncowork.net/ai-report";
const OG_IMAGE = "https://learncowork.net/og-ai-report.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the free AI opportunity report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A personalized report that fetches your website, analyzes what your business actually does, and identifies 5 high-leverage Claude Cowork workflows you could build — with realistic time-saved estimates and a recommended first-hour build.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the report take to generate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually 30–45 seconds. The system fetches your website (homepage plus key internal pages) and uses Claude Sonnet 4.5 to write a report grounded in your actual business — not a generic template.",
      },
    },
    {
      "@type": "Question",
      name: "Is the AI report really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Free, no credit card. You only pay if you decide to book a 1-hour ($300) or 4-hour ($1,000) training session with Evan to actually build the workflows.",
      },
    },
    {
      "@type": "Question",
      name: "What is Claude Cowork?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude Cowork is Anthropic's agentic AI tool that can operate a computer, automate multi-step workflows, and connect to real apps via MCP (Gmail, Slack, Salesforce, HubSpot, Notion, internal databases, etc.).",
      },
    },
    {
      "@type": "Question",
      name: "What happens after I get the report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll get the report on screen and emailed to you. From there you can either implement it yourself or book a session with Evan, who'll build the workflows live with your team.",
      },
    },
  ],
};

export default function AiReport() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Free Claude Cowork Opportunity Report for Your Business"
        description="Enter your website and get 5 personalized Claude Cowork workflows in 30 seconds — with realistic time-saved estimates based on your actual business. Free, no credit card required."
        canonical={PAGE_URL}
        ogImage={OG_IMAGE}
        keywords="free AI report, AI productivity audit, Claude Cowork report, AI workflow analysis, AI opportunity report, business AI assessment, Claude AI audit, AI use case report, Evan Weber"
        schema={faqSchema}
      />
      <SiteNav />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-5 md:px-12 border-b border-border bg-gradient-to-b from-secondary/40 to-background">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-5 border border-primary/20">
              <Sparkles className="w-4 h-4" />
              Free · No credit card · ~30 seconds
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-[1.05]">
              See exactly how <span className="text-primary">Claude Cowork</span> could save your team 10+ hours a week.
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Drop in your website. In 30 seconds you'll get a personalized report — 5 specific Cowork workflows tailored to your actual business, with realistic time-saved estimates and the one to build first. Free, generated live by Claude Sonnet 4.5.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-2">
              {[
                { icon: Target, label: "5 specific workflows" },
                { icon: Clock, label: "Time-saved estimates" },
                { icon: FileText, label: "Emailed to you" },
                { icon: ShieldCheck, label: "Free, no signup wall" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground bg-card border border-border rounded-lg px-3 py-2.5">
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analyzer — primary conversion */}
      <section className="py-10 md:py-16 bg-background">
        <CoworkAnalyzer
          variant="embedded"
          headline={<>Generate your free report</>}
          subheadline="Paste your website, hit the button, and watch the report stream in. We email you a copy too."
        />
      </section>

      {/* What you get */}
      <section className="py-12 md:py-20 px-5 md:px-12 border-y border-border bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">What's in the report</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Not a generic AI brochure. The model fetches your homepage and key internal pages, then writes a report grounded in what your business actually does.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                icon: Target,
                title: "What we see about your business",
                body: "A confident, specific summary using real signals from your site — services, industries served, scale, methodology. If you've ever read an AI report and thought 'they don't get us,' this fixes it.",
              },
              {
                icon: Zap,
                title: "Where time is leaking right now",
                body: "Three operational bottlenecks typical of your kind of business — the kind a senior person at the firm would nod at. No fluff.",
              },
              {
                icon: Sparkles,
                title: "5 high-leverage Cowork workflows",
                body: "Each workflow names the apps and data sources it would touch (Gmail, Slack, Salesforce, HubSpot, Notion, your CRM, etc.), what Cowork actually does step-by-step, and a realistic hours-saved-per-week estimate.",
              },
              {
                icon: Clock,
                title: "Your first-hour build",
                body: "The one workflow that's the highest ROI to ship live in a session with Evan, plus what you'd walk away with by the end of the hour.",
              },
              {
                icon: CheckCircle2,
                title: "Total weekly time recovered",
                body: "A conservative estimate of total hours saved per affected team member if you implemented all 5 workflows. Numbers, not platitudes.",
              },
              {
                icon: FileText,
                title: "What Evan recommends",
                body: "Based on the complexity and integrations needed, the report tells you whether to start with the 1-hour or 4-hour session — and exactly why.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg leading-tight">{title}</h3>
                </div>
                <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this is different */}
      <section className="py-12 md:py-20 px-5 md:px-12 border-b border-border bg-background">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 text-center">Why this report is actually useful</h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>Most "AI audits" are a 5-minute form, a generic checklist, and a sales call. That's not what this is.</p>
            <p>This report is generated by <strong className="text-foreground">Claude Sonnet 4.5</strong> — the same model running Cowork — after we fetch your homepage <em>and</em> several internal pages from your site. The model is given strict rules: never guess from your brand name, never invent facts, never use words like "leverage" or "transform." It writes like a strategist who already understands your business.</p>
            <p>You can take the report and run it yourself. Or book a session with Evan and he'll build the workflows live with your team. Either way, the report is yours — free, no signup wall, no follow-up call required.</p>
          </div>
        </div>
      </section>

      {/* Mini bio */}
      <section className="py-12 md:py-20 px-5 md:px-12 border-b border-border bg-secondary/30">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Built by</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Evan Weber</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            25 years in digital marketing. Founder of Experience Advertising. Daily Claude Cowork and Claude Code user. 400+ companies helped. 100+ LinkedIn recommendations. The report uses the same prompt patterns Evan uses on real client engagements.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Read Evan's full background <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-20 px-5 md:px-12 bg-background">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">Ready to see your report?</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Scroll back up, drop in your website, and watch it generate live. It really is free, and it really is specific to your business.
          </p>
          <button
            onClick={() => {
              document.getElementById("analyzer")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-xl px-7 py-3.5 font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Generate My Free Report <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
