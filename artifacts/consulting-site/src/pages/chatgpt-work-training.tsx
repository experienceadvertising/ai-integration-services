import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Monitor, Users, Zap, Clock, Plug, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import RelatedResources from "@/components/related-resources";

export default function ChatGptWorkTraining() {
  const faqs = [
    {
      q: "What is ChatGPT Work, in plain terms?",
      a: "ChatGPT Work is OpenAI's agentic desktop app. It operates your computer, a built-in browser, and your connected work apps to deliver finished work like spreadsheets, slide decks, and documents, instead of only answering questions. It is OpenAI's direct counterpart to Claude Cowork, and it is powered by the GPT-5.6 model.",
    },
    {
      q: "Do my team members need to be technical to use ChatGPT Work?",
      a: "No. ChatGPT Work is built for regular business users, not just developers. If your team can use a browser and approve an action, they can use it. Evan's training is designed to get non-technical people productive quickly using their actual day-to-day workflows.",
    },
    {
      q: "How much does a ChatGPT Work training session cost?",
      a: "A 1-hour live session is $300. A 4-hour deep dive is $1,000. Both are booked and paid securely via Stripe at learncowork.net.",
    },
    {
      q: "We already use Claude Cowork. Is this training different?",
      a: "The tools are close cousins, so much of the thinking carries over, but the setup, connectors, and interface differ. Evan uses both every day and will train your team on ChatGPT Work specifically, or on both side by side if you want to decide which fits your stack.",
    },
    {
      q: "Can ChatGPT Work connect to our existing tools?",
      a: "Yes. At launch it connects to Slack, Microsoft Teams, Google Drive, SharePoint, email, calendars, CRMs, and project trackers. Evan will help you connect the right ones and will walk through permissions and data handling so you can automate real work confidently.",
    },
    {
      q: "Will the session be recorded?",
      a: "That is up to you. Evan is happy for you to record the session for team members who cannot attend live, and you own the recording.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="ChatGPT Work Training for Teams and Individuals"
        description="Live ChatGPT Work training by Evan Weber, a 25-year digital marketing veteran and daily agentic-AI power user. Get your team setting up and using OpenAI's ChatGPT Work desktop app in a single session."
        canonical="https://learncowork.net/chatgpt-work-training"
        ogImage="https://learncowork.net/og-chatgpt-work-training.png"
        keywords="ChatGPT Work training, ChatGPT Work desktop app, OpenAI agentic AI training, ChatGPT for teams, ChatGPT Work setup, ChatGPT Work vs Claude Cowork, AI productivity training, Evan Weber"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://learncowork.net/chatgpt-work-training#service",
              name: "ChatGPT Work Training",
              provider: { "@type": "Person", name: "Evan Weber" },
              description:
                "Live 1-on-1 and team training on OpenAI's ChatGPT Work desktop app: setup, connectors, computer use, and multi-step workflow automation, so business teams and individuals can put agentic AI to work in their real workflows.",
              url: "https://learncowork.net/chatgpt-work-training",
              areaServed: "US",
              offers: [
                { "@type": "Offer", name: "1-Hour ChatGPT Work Training Session", price: "300", priceCurrency: "USD" },
                { "@type": "Offer", name: "4-Hour ChatGPT Work Deep Dive", price: "1000", priceCurrency: "USD" },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
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
              <MessageSquare className="w-4 h-4" />
              ChatGPT Work Training
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Get Your Team Using<br />
              <span className="text-primary">ChatGPT Work</span> the Right Way
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              ChatGPT Work is OpenAI's new agentic desktop app, and like Claude Cowork it does the work instead of just talking about it. I run both every day. I will get your team setting it up, connecting the right tools, and building real automations live, in a single session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#pricing">
                <Button size="lg" className="text-lg px-8 h-14">
                  Book a Session <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/blog/what-is-chatgpt-work">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  What Is ChatGPT Work?
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is ChatGPT Work */}
      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What is ChatGPT Work?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            ChatGPT Work is OpenAI's{" "}
            <Link href="/glossary/agentic-ai" className="text-primary underline underline-offset-2 hover:no-underline">agentic</Link>{" "}
            desktop experience, built into a unified ChatGPT app for Mac and Windows. It combines chat with a built-in browser,{" "}
            <Link href="/glossary/computer-use" className="text-primary underline underline-offset-2 hover:no-underline">computer use</Link>, connectors to your work apps, and Codex under one roof, so it can operate your machine and deliver finished work. It is OpenAI's direct answer to{" "}
            <Link href="/glossary/claude-cowork" className="text-primary underline underline-offset-2 hover:no-underline">Claude Cowork</Link>. Read the{" "}
            <Link href="/blog/what-is-chatgpt-work" className="text-primary underline underline-offset-2 hover:no-underline">full explainer</Link>, or see how the two{" "}
            <Link href="/blog/claude-cowork-vs-codex" className="text-primary underline underline-offset-2 hover:no-underline">agentic desktop tools compare</Link>.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Monitor className="w-6 h-6" />,
                title: "Operates your actual computer",
                desc: "With a built-in browser and computer use, ChatGPT Work sees the screen, clicks, types, and drives your apps and websites, not just a sandbox.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Delivers finished work",
                desc: "Give it a goal and it produces real artifacts: spreadsheets, slide decks, documents, and web apps, following your templates and reference files.",
              },
              {
                icon: <Plug className="w-6 h-6" />,
                title: "Connects to your stack",
                desc: "Plugs into Slack, Microsoft Teams, Google Drive, SharePoint, email, calendars, CRMs, and project trackers, so it works where your team already works.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Built for everyone, not just devs",
                desc: "Like Claude Cowork, ChatGPT Work is designed for regular business users across marketing, sales, ops, support, and leadership.",
              },
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
            Every session is tailored to your team's role and tools. Here is what is typically covered:
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Setup & Configuration", desc: "Install the ChatGPT Work desktop app, configure it for your environment, and get the privacy and data settings right before you automate anything." },
              { num: "02", title: "Connecting Your Tools", desc: "Wire up the connectors that matter to you, from Slack and Teams to Google Drive, SharePoint, email, and your CRM, with permissions handled carefully." },
              { num: "03", title: "Your First Real Workflow", desc: "We take a task your team actually does and automate it live, on screen share, together, so you leave with something that works." },
              { num: "04", title: "Computer Use & the Built-in Browser", desc: "How to let ChatGPT Work operate apps and websites safely, and when to keep a human in the loop." },
              { num: "05", title: "Prompting for Finished Work", desc: "How to scope a task so ChatGPT Work returns the deliverable you wanted the first time, not a rough draft you have to redo." },
              { num: "06", title: "ChatGPT Work vs. Claude Cowork", desc: "An honest comparison for your specific stack, so you know which tool to standardize on, or how to use both together." },
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
          <p className="text-xl text-muted-foreground max-w-2xl mb-10">ChatGPT Work is for every team member and every solo operator, not just your technical ones.</p>

          <ul className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {[
              "Teams already standardized on ChatGPT or the Microsoft 365 and Teams ecosystem",
              "Individuals and solo professionals who want to automate their own daily work",
              "Marketing, sales, and ops teams drowning in reports, research, and correspondence",
              "Companies weighing ChatGPT Work against Claude Cowork who want an honest comparison",
              "Leaders who want their people fluent in agentic AI before competitors are",
              "Anyone who tried ChatGPT Work once, got a mediocre result, and wants to do it right",
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
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border pb-8">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedResources
        heading="Learn more about ChatGPT Work"
        articleSlugs={["what-is-chatgpt-work", "claude-cowork-vs-codex"]}
        glossarySlug="chatgpt-work"
      />

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-card">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to get your team on ChatGPT Work?</h2>
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
