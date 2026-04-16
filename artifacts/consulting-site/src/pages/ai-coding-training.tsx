import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Code2, GitBranch, Terminal, Cpu, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

export default function AiCodingTraining() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Vibe Coding Training: Claude Code, Replit & Codex | Evan Weber"
        description="Live vibe coding training with Evan Weber. Learn Claude Code, Replit, Codex, and GitHub Copilot from someone who has shipped 20+ real projects with these tools. Teams and individuals."
        canonical="https://learncowork.net/ai-coding-training"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Vibe Coding Training",
          provider: { "@type": "Person", name: "Evan Weber" },
          description: "Live 1-on-1 and team vibe coding training sessions covering Claude Code, Replit, GitHub Copilot, and Codex. Build real projects with AI-assisted development tools.",
          url: "https://learncowork.net/ai-coding-training",
          areaServed: "US",
          offers: [
            { "@type": "Offer", name: "1-Hour Vibe Coding Training Session", price: "300", priceCurrency: "USD" },
            { "@type": "Offer", name: "4-Hour Vibe Coding Deep Dive", price: "1000", priceCurrency: "USD" },
          ],
        }}
      />
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-border bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <Code2 className="w-4 h-4" />
              Specialized Track
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Vibe Coding Training<br />
              <span className="text-primary">Claude Code, Replit & Codex</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Evan Weber has built 20+ real projects using Claude Code, Replit, and Codex. This is hands-on AI coding training from someone who does it daily, not a theorist reading documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#pricing">
                <Button size="lg" className="text-lg px-8 h-14">
                  Book a Session <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Evan's Background
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Covered */}
      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Tools Covered in This Track</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-12">
            Evan trains on the AI coding stack he uses every day to build and ship real products.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Terminal className="w-6 h-6" />,
                tool: "Claude Code",
                desc: "Anthropic's agentic coding assistant that lives in your terminal. Write, refactor, debug, and ship entire features by describing what you want. Evan has used it to build full-stack apps from scratch.",
                uses: ["Feature development end-to-end", "Code review and refactoring", "Debugging complex issues fast", "Writing tests and documentation"]
              },
              {
                icon: <Code2 className="w-6 h-6" />,
                tool: "Replit",
                desc: "The fastest way to go from idea to deployed app. Build internal tools, automations, and small products in hours without infrastructure setup. Perfect for non-dev teams who want to build.",
                uses: ["Internal tools without a full dev cycle", "Rapid prototyping in any language", "Deploying AI-powered automations", "Collaborative development in the browser"]
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                tool: "OpenAI Codex & GitHub Copilot",
                desc: "AI code completion and generation integrated directly into your IDE. Evan covers setup, prompt strategies, and how to pair Copilot with Claude Code for a complete AI coding workflow.",
                uses: ["IDE integration and workflow setup", "Autocomplete that actually helps", "Generating boilerplate and tests", "Working with legacy codebases"]
              },
              {
                icon: <GitBranch className="w-6 h-6" />,
                tool: "GitHub + AI Workflows",
                desc: "How to integrate AI into your GitHub workflows: PR reviews, code summaries, issue triage, and automated documentation, so AI makes your entire development process faster.",
                uses: ["Automated PR descriptions and reviews", "AI-powered issue triage", "Documentation generation from code", "Release notes and changelog automation"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-8 bg-card border border-border rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.tool}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.uses.map((u, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-6 lg:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Who This Is For</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10">
            This isn't just for senior engineers. AI coding tools have lowered the bar significantly.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {[
              "Software engineers who want to ship 3-5x faster using AI as a coding partner",
              "Junior developers who want to level up their output without years of experience",
              "Non-technical founders who want to build MVPs without hiring a dev team",
              "Product managers who want to prototype ideas without waiting on engineers",
              "Dev teams who want to standardize AI coding workflows across the organization",
              "Agencies looking to deliver client projects faster with AI-assisted development"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Evan Has Built */}
      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">14 Live Sites and Apps Built with Vibe Coding</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-12">
            Evan doesn't just teach these tools. He ships with them. Every project below is a real, live site built using Claude Code, Replit, and agentic coding workflows.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "MonetizeHub", url: "https://monetizehub.net", category: "SaaS Tools", desc: "All-in-one dashboard for managing and tracking multiple income streams across platforms." },
              { title: "DailySignal", url: "https://dailysignal.app", category: "SaaS Tools", desc: "Real-time signal tracking and news aggregation delivering curated market and media insights daily." },
              { title: "AffiliateFinders", url: "https://www.affiliatefinders.com", category: "Marketing", desc: "AI-powered affiliate recruitment platform with 10,000+ verified profiles across Google, YouTube, Instagram, and TikTok." },
              { title: "Experience Advertising", url: "https://experienceadvertising.com", category: "Agency", desc: "Full-service digital marketing agency site built with AI, specializing in Meta, Google, TikTok, and affiliate networks." },
              { title: "Insurazon", url: "https://insurazon.com", category: "Finance", desc: "Insurance comparison platform comparing quotes across auto, home, life, health, and Medicare." },
              { title: "Smart Site Audit", url: "https://smartsiteaudit.com", category: "SaaS Tools", desc: "Comprehensive website audit tool evaluating SEO health, performance, accessibility, and security." },
              { title: "GTM Champion", url: "https://gtmchampion.com", category: "Marketing", desc: "Go-to-market strategy platform with tools and frameworks to plan, execute, and optimize market entry." },
              { title: "SuperFundraiser", url: "https://superfundraiser.com", category: "Nonprofit", desc: "Free matching service connecting schools, teams, and nonprofits with vetted fundraising companies." },
              { title: "MyDetailerPro", url: "https://mydetailerpro.com", category: "SaaS Tools", desc: "CRM and booking platform built specifically for auto detailing businesses." },
              { title: "BeSure Assessment", url: "https://besureassessment.com", category: "SaaS Tools", desc: "Professional assessment and evaluation platform for structured testing and analysis." },
              { title: "BoostQ4", url: "https://boostq4.com", category: "Marketing", desc: "Q4 revenue optimization toolkit to help businesses maximize fourth-quarter performance." },
              { title: "Local Contractor Bids", url: "https://localcontractorbids.com", category: "Lead Gen", desc: "Contractor bidding marketplace connecting homeowners with local vetted professionals." },
              { title: "Hurricane Shutters Florida", url: "https://hurricaneshuttersflorida.com", category: "Lead Gen", desc: "Lead generation platform connecting Florida homeowners with hurricane shutter installers." },
              { title: "Offers for Homeowners", url: "https://offersforhomeowners.com", category: "Home Services", desc: "Resource platform featuring exclusive deals on home improvement with market insights." },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className="p-6 bg-card border border-border rounded-xl group hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold leading-snug">{project.title}</h3>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-0.5">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="text-xs text-primary font-semibold mb-2">{project.category}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://replit-showcase-evan185.replit.app/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                View Full Project Showcase <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "Do I need to know how to code before this training?",
                a: "It depends on the tool. Claude Code works best if you have some coding experience. Replit is genuinely accessible to non-coders. Evan will assess your level in the first few minutes and adapt the training accordingly."
              },
              {
                q: "What language or tech stack do you cover?",
                a: "Evan covers JavaScript/TypeScript, Python, and React as primary examples, but AI coding tools are language-agnostic. Whatever you're building in, the principles apply."
              },
              {
                q: "How is this different from reading the Claude Code docs?",
                a: "Documentation tells you what's possible. Evan shows you what actually works in production, what doesn't, and the specific workflows and prompt patterns he's validated across 20+ projects."
              },
              {
                q: "Can my whole dev team attend together?",
                a: "Yes. The 4-hour Deep Dive is ideal for development teams. There's enough time to cover all tools and build something real together during the session."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-border pb-8">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-card">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Start shipping faster with AI coding tools</h2>
          <p className="text-xl text-muted-foreground mb-10">Book a live session with Evan. Payment is secure via Stripe.</p>
          <Link href="/#pricing">
            <Button size="lg" className="text-xl px-10 h-16">
              Book a Session <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
