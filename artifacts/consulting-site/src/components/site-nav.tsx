import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/claude-cowork-training", label: "Claude Cowork" },
  { href: "/ai-coding-training", label: "AI Coding" },
  { href: "/about", label: "About Evan" },
];

export default function SiteNav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/" className="font-bold text-foreground hover:text-primary transition-colors text-sm" onClick={() => setOpen(false)}>
            <span className="text-primary">AI</span> Training by Evan Weber
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`px-3 py-1.5 text-sm rounded-md transition-colors cursor-pointer ${
                  location === link.href
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link href="/#pricing" className="hidden md:block">
              <Button size="sm" className="text-sm">Book a Session</Button>
            </Link>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-5 py-4 flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                <span className={`block px-3 py-2.5 text-sm rounded-lg transition-colors cursor-pointer ${
                  location === link.href
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}>
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-3">
              <Link href="/#pricing" onClick={() => setOpen(false)}>
                <Button size="sm" className="w-full">Book a Session</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
