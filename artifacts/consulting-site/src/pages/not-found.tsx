import { Link } from "wouter";
import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const helpfulLinks = [
  { href: "/claude-cowork-training", label: "Claude Cowork Training" },
  { href: "/ai-coding-training", label: "Vibe Coding Training" },
  { href: "/ai-report", label: "Free AI Report" },
  { href: "/#tools", label: "Free Tools" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Explore Claude Cowork training, free AI tools, and resources at learncowork.net."
        noindex
      />
      <SiteNav />
      <main className="flex-1 flex items-center justify-center px-5 py-32">
        <div className="text-center max-w-lg">
          <div className="text-7xl md:text-8xl font-black text-primary mb-4">404</div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">This page wandered off</h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has moved. Here's where most people are headed:
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {helpfulLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                <span className="inline-block px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer">
                  {l.label}
                </span>
              </Link>
            ))}
          </div>
          <Link href="/">
            <Button size="lg">
              <Home className="w-4 h-4 mr-2" /> Back to Home <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
