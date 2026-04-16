import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Users, TrendingUp, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import { getIndustry, industries } from "@/data/industries";
import SiteFooter from "@/components/site-footer";

export default function IndustryPage() {
  const [, params] = useRoute("/industries/:slug");
  const industry = params?.slug ? getIndustry(params.slug) : undefined;

  if (!industry) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Page not found</h1>
          <Link href="/"><Button>Go Home</Button></Link>
        </div>
      </div>
    );
  }

  const canonical = `https://learncowork.net/industries/${industry.slug}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={industry.metaTitle}
        description={industry.metaDescription}
        canonical={canonical}
      />
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-border bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Claude Cowork Training · {industry.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 max-w-4xl">
              {industry.headline}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              {industry.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#pricing">
                <Button size="lg" className="text-lg px-8 h-14">
                  Book a Session <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Get a Free Report First
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stat + intro */}
      <section className="py-16 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
                <div className="text-5xl font-black text-primary mb-2">{industry.stat}</div>
                <div className="text-sm text-muted-foreground leading-snug">{industry.statLabel}</div>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed">{industry.intro}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-1">Trained by Evan Weber</p>
                <p className="text-sm text-muted-foreground">25-year digital marketing veteran, founder of Experience Advertising, and daily Claude Cowork power user. Evan trains your team live on screen share using your actual workflows, not slides or theory.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership vs Staff */}
      <section className="py-16 px-6 lg:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">
            Built for leadership <em>and</em> the people doing the work
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Leadership */}
            <div className="bg-background border border-border rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-base">For Leadership & Managers</div>
                  <div className="text-xs text-muted-foreground">Directors, VPs, Owners, Partners</div>
                </div>
              </div>
              <ul className="space-y-4">
                {industry.leadershipPoints.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Staff */}
            <div className="bg-background border border-border rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-base">For Frontline Staff & Specialists</div>
                  <div className="text-xs text-muted-foreground">The people who actually do the work every day</div>
                </div>
              </div>
              <ul className="space-y-4">
                {industry.staffPoints.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            What your team will be able to do
          </h2>
          <p className="text-muted-foreground mb-10">Real workflows built in real sessions, not theory, not slides.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {industry.useCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base leading-snug">{uc.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-10">{uc.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Win */}
      <section className="py-16 px-6 lg:px-12 border-b border-border bg-primary/5">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Your Biggest Quick Win</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{industry.quickWinTitle}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">{industry.quickWin}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to get your {industry.badge.split(" ")[0].toLowerCase()} team started?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Two session formats, both built around your real workflows, run on screen share with Evan.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <div className="bg-card border border-border rounded-2xl p-7 text-left">
              <div className="text-4xl font-black mb-1">$300</div>
              <div className="text-sm text-muted-foreground mb-4">1-Hour Session</div>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>Live screen share with Evan</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>2–3 workflows built in your session</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>Written playbook you keep</span></li>
              </ul>
              <Link href="/#pricing">
                <Button variant="outline" className="w-full">Book 1-Hour Session <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
            </div>
            <div className="bg-primary text-primary-foreground rounded-2xl p-7 text-left">
              <div className="text-4xl font-black mb-1">$1,000</div>
              <div className="text-sm opacity-80 mb-4">4-Hour Deep Dive</div>
              <ul className="space-y-2 text-sm opacity-90 mb-6">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /><span>Full team or multi-department session</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /><span>6–8 workflows built end-to-end</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /><span>MCP integrations to your existing tools</span></li>
              </ul>
              <Link href="/#pricing">
                <Button variant="secondary" className="w-full">Book 4-Hour Deep Dive <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Not sure which is right? <Link href="/"><span className="text-primary underline cursor-pointer">Get a free AI report first</span></Link>. Evan's AI will analyze your specific situation and recommend the best fit.
          </p>
        </div>
      </section>

      {/* Other industries */}
      <section className="py-14 px-6 lg:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-lg font-bold mb-6">Also available for</h2>
          <div className="flex flex-wrap gap-2">
            {industries
              .filter((i) => i.slug !== industry.slug)
              .map((i) => (
                <Link key={i.slug} href={`/industries/${i.slug}`}>
                  <span className="inline-block px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors cursor-pointer bg-background">
                    {i.name}
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
