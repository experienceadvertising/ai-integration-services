import { Link } from "wouter";

const industryLinks = [
  { slug: "marketing-agencies", label: "Marketing Agencies" },
  { slug: "law-firms", label: "Law Firms" },
  { slug: "real-estate", label: "Real Estate" },
  { slug: "financial-services", label: "Financial Services" },
  { slug: "healthcare", label: "Healthcare" },
  { slug: "ecommerce", label: "Ecommerce" },
  { slug: "consulting", label: "Consulting Firms" },
  { slug: "hr-recruiting", label: "HR & Recruiting" },
  { slug: "insurance", label: "Insurance" },
  { slug: "nonprofits", label: "Nonprofits" },
];

const trainingLinks = [
  { href: "/claude-cowork-training", label: "Claude Cowork Training" },
  { href: "/ai-coding-training", label: "Vibe Coding Training" },
  { href: "/about", label: "About Evan" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/20 px-5 md:px-12 pt-14 pb-10">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <span className="font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                <span className="text-primary">AI</span> Training by Evan Weber
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
              Live Claude Cowork and Vibe Coding training for business teams. Built around your actual workflows.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              Experience Advertising, Inc.<br />Fort Lauderdale, FL
            </p>
          </div>

          {/* Training */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">Training</div>
            <ul className="space-y-2.5">
              {trainingLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#pricing">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Book a Session
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries col 1 */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">Industries</div>
            <ul className="space-y-2.5">
              {industryLinks.slice(0, 5).map((l) => (
                <li key={l.slug}>
                  <Link href={`/industries/${l.slug}`}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries col 2 */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-foreground mb-4 opacity-0 select-none">
              Industries
            </div>
            <ul className="space-y-2.5">
              {industryLinks.slice(5).map((l) => (
                <li key={l.slug}>
                  <Link href={`/industries/${l.slug}`}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Experience Advertising, Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            <a href="https://learncowork.net" className="hover:text-foreground transition-colors">learncowork.net</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
