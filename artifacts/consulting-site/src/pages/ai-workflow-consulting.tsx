import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardList, Gauge, Network, Settings2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { CALENDLY_INTRO } from "@/lib/booking-links";

const faqs = [
  { q: "How is workflow consulting different from a training session?", a: "Training teaches your people how to use the tools. Workflow consulting also identifies the best use cases, configures the stack, builds the workflows, documents them, and helps your team adopt them." },
  { q: "Which tools can be included?", a: "The engagement can include ChatGPT Work, Codex, Claude Cowork, Claude Code, Replit, ChatGPT apps and connectors, workspace agents, and the business systems those tools need to work with." },
  { q: "Do we need to know which AI platform we want?", a: "No. Tool selection can be part of the engagement. The recommendation should follow your workflows, security requirements, existing software, team skills, and budget." },
  { q: "Can you work with one department first?", a: "Yes. A focused pilot with one department is often the cleanest way to prove value, document guardrails, and build internal champions before a broader rollout." },
  { q: "How do we measure whether the rollout worked?", a: "Start with a baseline for time, quality, throughput, adoption, and error rates. Then measure the same workflow after implementation instead of relying on vague productivity claims." },
];

export default function AiWorkflowConsulting() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="AI Workflow Consulting and Implementation | Evan Weber"
        description="AI workflow consulting for teams using ChatGPT Work, Codex and Claude. Find high-value use cases, build workflows, train staff and measure adoption."
        canonical="https://learncowork.net/ai-workflow-consulting"
        keywords="AI workflow consulting, AI implementation services, ChatGPT Work consulting, Codex consulting, Claude Cowork implementation, AI adoption consulting, AI training and implementation"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://learncowork.net/ai-workflow-consulting#service",
              name: "AI Workflow Consulting and Implementation",
              provider: { "@id": "https://learncowork.net/#evan" },
              url: "https://learncowork.net/ai-workflow-consulting",
              areaServed: "Worldwide",
              availableChannel: { "@type": "ServiceChannel", serviceType: "Remote consulting and implementation" },
              description: "AI workflow assessment, tool selection, implementation, documentation, training, governance, and adoption support for business teams.",
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
            },
          ],
        }}
      />
      <SiteNav />

      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-border bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <Settings2 className="w-4 h-4" /> Done-With-You AI Implementation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Turn AI Training Into<br /><span className="text-primary">Working Business Systems</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
              Identify the workflows worth improving, choose the right AI stack, build the first systems, document the guardrails, and get your team using them consistently. This is for companies that need implementation, not another general AI presentation.
            </p>
            <a href={CALENDLY_INTRO} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 h-14">Discuss Your AI Rollout <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">From Workflow Audit to Adoption</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">A practical rollout connects technology, process, training, governance, and measurement.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: ClipboardList, title: "1. Find the Right Work", text: "Map repeated tasks, bottlenecks, handoffs, sensitive data, and quality requirements. Rank use cases by value, feasibility, and risk." },
              { icon: Network, title: "2. Choose the Stack", text: "Match ChatGPT Work, Codex, Claude Cowork, Claude Code, Replit, apps, connectors, or existing systems to the work they handle best." },
              { icon: Settings2, title: "3. Build the Pilot", text: "Create a small set of working workflows using your real inputs, templates, tools, review steps, and definition of done." },
              { icon: CheckCircle2, title: "4. Add Guardrails", text: "Document permissions, human approvals, data boundaries, failure handling, quality checks, and escalation paths." },
              { icon: Users, title: "5. Train the Team", text: "Teach role-specific workflows, coach managers and champions, and give employees playbooks they can use after the session." },
              { icon: Gauge, title: "6. Measure and Improve", text: "Track adoption, throughput, time, quality, and errors. Improve what works, retire what does not, and expand only when the evidence supports it." },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="p-6 bg-card border border-border rounded-xl">
                <item.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Good Starting Points</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Team AI Readiness and Workflow Audit", text: "A prioritized map of the workflows, tools, risks, expected value, and rollout sequence that make sense for your company." },
              { title: "Department Pilot", text: "A focused implementation for marketing, sales, operations, support, leadership, or a development team, with training and documentation included." },
              { title: "ChatGPT Work or Claude Cowork Rollout", text: "Platform setup, apps or connectors, role-based workflows, privacy guidance, team playbooks, and adoption support." },
              { title: "Codex and AI Development Workflow", text: "Repository guidance, agent delegation, worktrees, testing, code review, skills, automations, and a safer operating process for builders." },
            ].map((item) => (
              <div key={item.title} className="p-7 bg-card border border-border rounded-xl">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">AI Implementation Questions</h2>
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

      <section className="py-24 px-6 text-center bg-card">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Start With the Work, Not the Tool</h2>
          <p className="text-xl text-muted-foreground mb-10">Book a short call to discuss the workflows, people, systems, and outcomes that matter to your company.</p>
          <a href={CALENDLY_INTRO} target="_blank" rel="noopener noreferrer"><Button size="lg" className="text-xl px-10 h-16">Book a 15-Minute Intro <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
