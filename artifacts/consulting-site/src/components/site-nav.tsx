import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/claude-cowork-training", label: "Claude Cowork" },
  { href: "/ai-coding-training", label: "AI Coding" },
  { href: "/about", label: "About Evan" },
];

export default function SiteNav() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-foreground hover:text-primary transition-colors text-sm">
          <span className="text-primary">AI</span> Training by Evan Weber
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                location === link.href
                  ? "bg-secondary text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}>
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <Link href="/#pricing">
          <Button size="sm" className="text-sm">
            Book a Session
          </Button>
        </Link>
      </div>
    </nav>
  );
}
