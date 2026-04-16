import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Code2, GitBranch, Terminal, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";

export default function AiCodingTraining() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="AI Coding Training: Claude Code, Replit & Codex"
        description="Live AI coding training with Evan Weber. Learn Claude Code, Replit, Codex, and GitHub Copilot from a developer who has built 20+ projects with these tools. Teams and individuals."
        canonical="https://learncowork.net/ai-coding-training"
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
              AI Coding Training<br />
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">20+ Projects Built with AI Coding Tools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-12">
            Evan doesn't just teach these tools. He builds with them every day. Here are examples of what he's built using Claude Code, Replit, and Codex:
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "AffiliateFinders.com", desc: "AI-powered affiliate marketplace with 10,000+ pre-vetted affiliates, AI scoring, and advanced search, built with AI coding tools." },
              { title: "Publisher Finders", desc: "Publisher discovery platform connecting brands with content publishers using AI-powered matching and profile generation." },
              { title: "Internal Automation Tools", desc: "Dozens of internal business automations for Experience Advertising built with Replit and Claude Code." },
              { title: "API Integrations", desc: "Multiple API integrations connecting third-party platforms to client marketing stacks, developed with AI assistance." },
              { title: "Client Web Apps", desc: "Custom web applications for agency clients delivered faster using AI-pair programming workflows." }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 bg-card border border-border rounded-xl"
              >
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
              </motion.div>
            ))}
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

      <footer className="py-8 border-t border-border text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} AI Training by Evan Weber · Experience Advertising, Inc. · Fort Lauderdale, FL</p>
      </footer>
    </div>
  );
}
