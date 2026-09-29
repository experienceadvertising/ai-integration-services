import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, FileSearch, Code2, Bot, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import RelatedResources from "@/components/related-resources";

export default function AeoGeoTraining() {
  const faqs = [
    {
      q: "What's the difference between AEO, GEO, and traditional SEO?",
      a: "AEO and GEO describe visibility in answer and generative search experiences. For Google, the core SEO requirements still apply: useful content, crawlable pages, and eligibility to appear in Search with a snippet. This training covers those foundations and how to measure the results.",
    },
    {
      q: "Do we need a developer on the call?",
      a: "It helps but is not required. Content review and clearer answers can be done without code. Someone with site access is useful for routing, indexing controls, structured data and measurement fixes.",
    },
    {
      q: "How is this different from a general SEO audit?",
      a: "This session starts with the same SEO foundations and applies them to questions people ask in AI search. We review page access, intent, useful evidence, internal links and measurement. Citation checks are observations, not guarantees.",
    },
    {
      q: "Can you just do this work for us instead of training us?",
      a: "Yes, for full execution — content strategy, technical SEO, and paid media alongside it — that's the work Evan's agency, Experience Advertising, does for clients directly. This site's training sessions are focused on getting your team fluent enough to run the playbook themselves, with Claude Cowork doing the repetitive parts.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="AEO & GEO Training for AI Search"
        description="Live AEO and GEO training with Evan Weber. Learn schema, direct-answer content and practical ways to improve your chances of being cited in AI search."
        canonical="https://learncowork.net/aeo-geo-training"
        ogImage="https://learncowork.net/og-aeo-geo-training.png"
        keywords="AEO training, GEO training, answer engine optimization, generative engine optimization, AI search SEO, search crawlability, AI search measurement"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://learncowork.net/aeo-geo-training#service",
              name: "AEO/GEO Training",
              provider: { "@type": "Person", name: "Evan Weber" },
              description: "Live AEO and GEO training for teams. Review crawlability, useful answers, internal links, accurate structured data and search measurement on your own site.",
              url: "https://learncowork.net/aeo-geo-training",
              areaServed: "US",
              offers: [
                { "@type": "Offer", name: "1-Hour AEO/GEO Training Session", price: "300", priceCurrency: "USD" },
                { "@type": "Offer", name: "4-Hour AEO/GEO Deep Dive", price: "1000", priceCurrency: "USD" },
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
              <FileSearch className="w-4 h-4" />
              AEO/GEO Training
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Make Your Site More Useful for<br />
              <span className="text-primary">AI Search and Real Visitors</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              AEO and GEO training starts with the pages people already need: clear answers, crawlable content, trustworthy evidence and useful next steps. Evan works through your site with your team, then shows how to check whether changes improve search visibility and leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#pricing">
                <Button size="lg" className="text-lg px-8 h-14">
                  Book a Session <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/blog/aeo-geo-explained">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Read the Full Playbook
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is AEO/GEO */}
      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Are AEO and GEO?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            <Link href="/glossary/aeo" className="text-primary underline underline-offset-2 hover:no-underline">AEO (Answer Engine Optimization)</Link> focuses on answering a visitor's question clearly.{" "}
            <Link href="/glossary/geo" className="text-primary underline underline-offset-2 hover:no-underline">GEO (Generative Engine Optimization)</Link> looks at visibility in AI-generated answers from systems such as{" "}
            <Link href="/glossary/llm" className="text-primary underline underline-offset-2 hover:no-underline">LLMs</Link> like ChatGPT and Claude, plus Google AI Overviews. We start with search fundamentals and useful content, then test the pages and queries that matter to your business.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Structured data that actually matches",
                desc: "Relevant structured data that accurately represents what visitors can see on the page and meets current search feature rules."
              },
              {
                icon: <Bot className="w-6 h-6" />,
                title: "Content AI can actually reach",
                desc: "Check robots rules, page indexing controls, server responses and the actual HTML each public URL serves."
              },
              {
                icon: <FileSearch className="w-6 h-6" />,
                title: "Direct-answer content structure",
                desc: "Give the visitor a clear answer first, then add the examples, limits and source links needed to make it useful."
              },
              {
                icon: <LineChart className="w-6 h-6" />,
                title: "Topical authority through internal linking",
                desc: "Connect related guides and service pages where the next link helps someone finish their task."
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
            Tailored to your site and stack. Here's what's typically covered:
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Content Audit for Answer Engines", desc: "Review your top pages for missing direct answers, weak headings, and content that's too buried to extract or cite." },
              { num: "02", title: "Structured Data Implementation", desc: "Add relevant structured data only where it matches visible content and current feature policies." },
              { num: "03", title: "Crawl and Indexing Checks", desc: "Audit robots rules, indexing controls, clean URL responses and rendered content for target pages." },
              { num: "04", title: "Direct-Answer Content Patterns", desc: "Rewrite key pages so the answer, evidence and next action match the visitor's question." },
              { num: "05", title: "Measuring AI Citation & Referral Traffic", desc: "Track when AI answer engines send you traffic and how to tell if your content is actually being cited." },
              { num: "06", title: "Using Claude Cowork to Run the Playbook", desc: "Set up an agentic workflow so ongoing audits, schema drafts, and crawlability checks run in minutes, not a weekly chore." }
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Who This Is For</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10">Any business whose customers now ask AI before they search.</p>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {[
              "Marketing teams improving search visibility and qualified traffic",
              "Agencies adding AEO/GEO as a service line for clients",
              "SaaS and B2B companies competing to be the AI-recommended answer in their category",
              "Local and service businesses that want to show up when AI assistants get asked for a recommendation",
              "Content and SEO teams who've done the traditional work and want the AI-search layer on top",
              "Founders who want a working playbook, not a slide deck of trends"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEOImprovement tool callout */}
      <section className="py-16 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">My AEO Tool</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Check how your site appears in AI search</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
              I built AEOImprovement.com to audit your site's citability across ChatGPT, Claude, Gemini, and Perplexity. You get a 6-dimension AEO score, live prompt simulations, and evidence-backed fixes you can ship today.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2.5 mb-6 max-w-2xl">
              {[
                "Live prompt simulations across 4 AI engines",
                "Real AI crawler hit tracking",
                "Continuous site monitoring and alerts",
                "Fix Generator for llms.txt and JSON-LD",
                "Google Analytics AI-referral traffic",
                "First month free, every feature, no card",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://aeoimprovement.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">Try AEOImprovement.com <ArrowRight className="w-4 h-4" /></Button>
            </a>
          </div>
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
        heading="The AEO/GEO playbook, in detail"
        articleSlugs={["aeo-geo-explained"]}
        glossarySlug="geo"
      />

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-card">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Stop being invisible to AI search</h2>
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
