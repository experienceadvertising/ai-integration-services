import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Bot, CheckCircle2, GitBranch, Layers3, Repeat2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import RelatedResources from "@/components/related-resources";

const faqs = [
  {
    q: "What is OpenAI Codex?",
    a: "Codex is OpenAI's agent for software development and technical work. It can inspect a codebase, change files, run commands and tests, review diffs, and help take a project from an idea to a verified result.",
  },
  {
    q: "Who is Codex training for?",
    a: "Training is available for developers, product managers, technical founders, agencies, and business operators who want to build internal tools or supervise AI-assisted software work more effectively.",
  },
  {
    q: "Can a non-developer learn Codex?",
    a: "Yes, with the right project and guardrails. Non-developers can use Codex to prototype, document requirements, inspect changes, and build smaller tools. Technical review is still important for production software, security, and sensitive data.",
  },
  {
    q: "What Codex surfaces can the training cover?",
    a: "A session can cover the Codex desktop app, local projects, GitHub workflows, skills, worktrees, automations, code review, and how Codex fits alongside ChatGPT Work, Claude Code, Replit, and your existing development stack.",
  },
  {
    q: "Will we work on a real project?",
    a: "Yes. The most useful sessions start with a real repository, backlog item, internal tool, or repeated technical task. You leave with a working pattern your team can repeat after the session.",
  },
];

export default function CodexTraining() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="OpenAI Codex Training for Teams and Individuals"
        description="Live OpenAI Codex training for developers, founders and teams. Learn the Codex app, agents, worktrees, skills, automations and GitHub workflows."
        canonical="https://learncowork.net/codex-training"
        ogImage="https://learncowork.net/og-ai-coding-training.png"
        keywords="OpenAI Codex training, Codex app training, Codex for teams, AI coding training, Codex agents, Codex automations, Codex worktrees, GitHub AI training"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://learncowork.net/codex-training#service",
              name: "OpenAI Codex Training",
              provider: { "@id": "https://learncowork.net/#evan" },
              url: "https://learncowork.net/codex-training",
              areaServed: "Worldwide",
              availableChannel: { "@type": "ServiceChannel", serviceType: "Online training" },
              description: "Live Codex training for individuals and business teams, covering the Codex desktop app, agents, worktrees, skills, automations, GitHub workflows, testing, and review.",
              offers: [
                { "@type": "Offer", name: "1-Hour Codex Training Session", price: "300", priceCurrency: "USD" },
                { "@type": "Offer", name: "4-Hour Codex Workshop", price: "1000", priceCurrency: "USD" },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ],
        }}
      />
      <SiteNav />

      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-border bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <Bot className="w-4 h-4" /> OpenAI Codex Training
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Make Codex a Real Part of<br />
              <span className="text-primary">How Your Team Builds</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
              Learn how to direct Codex, review its work, run multiple tasks safely, and turn repeated development work into a reliable system. Sessions are live and built around your actual repositories, tools, and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#pricing"><Button size="lg" className="text-lg px-8 h-14">Book Codex Training <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
              <Link href="/ai-workflow-consulting"><Button size="lg" variant="outline" className="text-lg px-8 h-14">Plan a Team Rollout</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What You Can Learn</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            OpenAI describes the Codex app as a command center for agents. The training turns those capabilities into a practical workflow your team can use every day.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Layers3, title: "Projects, Threads, and Context", text: "Organize work so Codex receives the right repository, instructions, files, and definition of done without bloated prompts." },
              { icon: GitBranch, title: "Git, Worktrees, and Review", text: "Run work in isolated branches or worktrees, inspect diffs, protect uncommitted changes, and keep human review in the loop." },
              { icon: Bot, title: "Parallel Agent Work", text: "Break a larger project into independent tasks, coordinate agents, avoid overlapping edits, and bring the results back together cleanly." },
              { icon: Repeat2, title: "Skills and Automations", text: "Turn repeated processes into reusable skills and scheduled automations for triage, reports, checks, documentation, and maintenance." },
              { icon: ShieldCheck, title: "Safety and Verification", text: "Set boundaries, choose appropriate approvals, run tests, validate output, and know when a technical expert should review the work." },
              { icon: CheckCircle2, title: "A Real Deliverable", text: "Use the session to fix a bug, ship a feature, create an internal tool, improve tests, document a system, or standardize your team's Codex playbook." },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="p-7 bg-card border border-border rounded-xl">
                <item.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            Product reference: <a href="https://openai.com/index/introducing-the-codex-app/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:no-underline">OpenAI's Codex app overview</a>.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Choose the Right Training Path</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Individual Builder", text: "Set up Codex around one real project and learn a repeatable build, test, and review loop." },
              { title: "Development Team", text: "Standardize repository instructions, worktree use, agent delegation, code review, testing, and handoff." },
              { title: "Business Team", text: "Use Codex for internal tools, data cleanup, reporting, websites, documentation, and technical knowledge work." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Codex Training Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border pb-8">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedResources heading="Learn more about Codex and agentic work" articleSlugs={["what-is-codex-app", "claude-cowork-vs-codex"]} glossarySlug="codex-app" />

      <section className="py-24 px-6 text-center bg-card">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Bring a Real Project</h2>
          <p className="text-xl text-muted-foreground mb-10">Leave with a working Codex process, not a page of generic notes.</p>
          <Link href="/#pricing"><Button size="lg" className="text-xl px-10 h-16">Book a Session <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
