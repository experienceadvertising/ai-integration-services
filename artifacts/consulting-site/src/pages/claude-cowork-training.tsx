import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Monitor, Users, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

export default function ClaudeCoworkTraining() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Claude Cowork Training for Teams — Live 1-on-1 Sessions"
        description="Live Claude Cowork training by Evan Weber - 25-year digital marketing expert and daily Cowork power user. Get your entire team productive in a single session."
        canonical="https://learncowork.net/claude-cowork-training"
        ogImage="https://learncowork.net/og-cowork-training.png"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do my team members need to be technical to use Claude Cowork?",
              acceptedAnswer: { "@type": "Answer", text: "No. Claude Cowork was designed for non-technical users. If your team can use a browser, they can use Cowork. Evan's training is specifically designed to onboard non-technical people quickly." },
            },
            {
              "@type": "Question",
              name: "How much does a Claude Cowork training session cost?",
              acceptedAnswer: { "@type": "Answer", text: "A 1-hour live session costs $300. A 4-hour Deep Dive is $1,000. Both are booked and paid securely via Stripe at learncowork.net." },
            },
            {
              "@type": "Question",
              name: "Does my team need a Claude subscription?",
              acceptedAnswer: { "@type": "Answer", text: "Yes — each user needs a Claude Pro or Claude for Teams subscription to access Cowork features. Evan will walk you through the right plan for your team size during the session." },
            },
            {
              "@type": "Question",
              name: "How many people can attend a session?",
              acceptedAnswer: { "@type": "Answer", text: "Sessions work best with up to 6–8 participants. For larger teams, Evan recommends the 4-hour Deep Dive format or scheduling multiple sessions per department." },
            },
            {
              "@type": "Question",
              name: "What if my industry has specific compliance or data requirements?",
              acceptedAnswer: { "@type": "Answer", text: "Evan covers Claude's privacy settings and data handling policies as part of every session setup, so you can use Cowork confidently within your compliance requirements." },
            },
          ],
        }}
      />
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-border bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Claude Cowork Training
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Get Your Team Using<br />
              <span className="text-primary">Claude Cowork</span> Fluently
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Claude Cowork is Anthropic's most powerful productivity tool - and most teams haven't even opened it. Evan Weber trains your team live, on screen share, using your actual workflows. Results on day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#pricing">
                <Button size="lg" className="text-lg px-8 h-14">
                  Book a Session <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Meet Evan
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Claude Cowork */}
      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What is Claude Cowork?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            Claude Cowork is Anthropic's agentic desktop mode — available in the Claude desktop app — that combines AI chat with direct computer control, file access, a sandboxed shell, and MCP tool integrations. It lets Claude work alongside you on your actual machine: reading files, operating apps, running multi-step automations, and connecting to your existing tools. It's the difference between a chatbot and an actual AI coworker.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Monitor className="w-6 h-6" />,
                title: "Works on your actual computer",
                desc: "Claude Cowork sees your screen, reads your files, and operates your apps - not in a sandbox, in your real workflow."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Automates multi-step tasks",
                desc: "Give it a goal and watch it research, write, organize, and execute across multiple apps without you touching anything."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Built for non-technical users",
                desc: "Unlike AI coding tools, Cowork is designed for everyone - marketing, sales, ops, support, and leadership."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Immediate time savings",
                desc: "Early adopters report recovering 1–3 hours per person per day once their team is using Cowork fluently in their actual workflows."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 bg-card border border-border rounded-xl"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-6 lg:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Evan Covers in Your Session</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-12">
            Every session is tailored to your team's role and tools. Here's what's typically covered:
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Setup & Configuration", desc: "Get Cowork properly configured for your environment, connected to your tools and file systems." },
              { num: "02", title: "Your First Real Workflow", desc: "We start with a task your team actually does - and automate it live, on screen share, together." },
              { num: "03", title: "MCP Server Integration", desc: "Connect Claude to your apps - Google Drive, Notion, Slack, CRM - using MCP plugins for deeper automation." },
              { num: "04", title: "Department-Specific Use Cases", desc: "Marketing, sales, ops, support, dev, and leadership each get specific workflows and examples." },
              { num: "05", title: "Prompt Engineering for Cowork", desc: "How to give Cowork the right instructions so it executes correctly every time, not just sometimes." },
              { num: "06", title: "Building a Team Playbook", desc: "You leave with a repeatable playbook your whole team can reference - not just what we covered on the call." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 bg-card border border-border rounded-xl"
              >
                <div className="text-3xl font-black text-primary/30 mb-3">{item.num}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Who This Training Is For</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10">Claude Cowork is for every team member - not just your technical ones.</p>

          <ul className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {[
              "Marketing teams spending hours on content, reporting, and competitive research",
              "Sales teams losing time to manual prospect research and follow-up writing",
              "Operations teams managing recurring processes that could be automated",
              "Customer support teams handling high-volume ticket queues",
              "Leadership teams buried in reports, briefings, and strategic docs",
              "Any company that wants its team doing deep work instead of admin work"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "Do my team members need to be technical to use Claude Cowork?",
                a: "No. That's one of Cowork's biggest advantages - it was designed for non-technical users. If your team can use a browser, they can use Cowork. Evan's training is specifically designed to onboard non-technical people quickly."
              },
              {
                q: "Does my team need a Claude subscription?",
                a: "Yes - each user needs a Claude Pro or Claude for Teams subscription to access Cowork features. Evan will walk you through the right plan for your team size during the session."
              },
              {
                q: "How many people can attend a session?",
                a: "Sessions work best with up to 6–8 participants. For larger teams, Evan recommends the 4-hour Deep Dive format or scheduling multiple sessions per department."
              },
              {
                q: "Will the session be recorded?",
                a: "That's up to you - Evan is happy for you to record the session for team members who can't attend live. You own the recording."
              },
              {
                q: "What if my industry has specific compliance or data requirements?",
                a: "Covered. Evan will walk you through Claude's privacy settings and data handling policies as part of the setup section, so you can use Cowork confidently within your compliance requirements."
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
          <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to get your team on Claude Cowork?</h2>
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
