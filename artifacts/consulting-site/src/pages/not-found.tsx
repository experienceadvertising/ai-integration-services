import { Link } from "wouter";
import { ArrowRight, Home, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const popularLinks = [
  { href: "/claude-cowork-training", label: "Claude Cowork Training" },
  { href: "/ai-coding-training", label: "Vibe Coding Training" },
  { href: "/ai-report", label: "Free AI Opportunity Report" },
  { href: "/ai-readiness-quiz", label: "AI Readiness Quiz" },
  { href: "/ai-time-savings-calculator", label: "Time-Savings Calculator" },
  { href: "/about", label: "About Evan Weber" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title="Page Not Found (404) | Evan Weber AI Training"
        description="That page doesn't exist or has moved. Explore Claude Cowork training, free AI tools, and industry guides at learncowork.net."
        canonical="https://learncowork.net/404"
        noindex
      />
      <SiteNav />

      <main className="flex-1 flex items-center px-5 md:px-12 pt-28 pb-20">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            <Compass className="w-4 h-4" />
            Error 404
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-5">
            This page wandered off.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            The link may be broken or the page may have moved. Let's get you back
            to something useful — here's where most people head next.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <Link href="/">
              <Button size="lg" className="text-base px-7 h-12 gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button size="lg" variant="outline" className="text-base px-7 h-12 gap-2">
                Book a Session <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
            Popular pages
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
            {popularLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                <span className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm font-medium hover:border-primary/40 hover:bg-secondary/60 transition-colors cursor-pointer">
                  {l.label}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
