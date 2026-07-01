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
      a: "Traditional SEO optimizes to rank a page in a list of links. AEO (Answer Engine Optimization) optimizes content to be extracted as a direct answer — featured snippets, voice search. GEO (Generative Engine Optimization) optimizes to be cited or summarized by generative AI like ChatGPT, Claude, and Perplexity. They build on the same technical foundation, and this training covers all three together.",
    },
    {
      q: "Do we need a developer on the call?",
      a: "It helps but isn't required. Most of the work — content structure, direct-answer formatting, FAQ content — doesn't need code. The structured data and llms.txt setup goes faster with someone who can edit your site, but Evan will show your team exactly what to hand off if that's not you.",
    },
    {
      q: "How is this different from a general SEO audit?",
      a: "A general SEO audit focuses on rankings and backlinks. This session is specifically about whether AI systems can find, parse, and cite your content correctly — schema validity, AI crawler access, direct-answer structure, and llms.txt. It's a narrower, more technical slice of SEO that most audits still skip.",
    },
    {
      q: "Can you just do this work for us instead of training us?",
      a: "Yes, for full execution — content strategy, technical SEO, and paid media alongside it — that's the work Evan's agency, Experience Advertising, does for clients directly. This site's training sessions are focused on getting your team fluent enough to run the playbook themselves, with Claude Cowork doing the repetitive parts.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="AEO & GEO Training: Get Cited by ChatGPT, Claude & AI Search"
        description="Live AEO/GEO training by Evan Weber — 25-year digital marketing veteran. Learn the exact playbook (schema, llms.txt, direct-answer content) to get your business cited by ChatGPT, Claude, and AI Overviews."
        canonical="https://learncowork.net/aeo-geo-training"
        ogImage="https://learncowork.net/og-aeo-geo-training.png"
        keywords="AEO training, GEO training, answer engine optimization, generative engine optimization, AI search optimization, get cited by ChatGPT, AI Overviews optimization, llms.txt setup"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://learncowork.net/aeo-geo-training#service",
              name: "AEO/GEO Training",
              provider: { "@type": "Person", name: "Evan Weber" },
              description: "Live 1-on-1 and team training on Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) — structured data, llms.txt, direct-answer content, and AI-crawler-friendly technical setup, so a business gets cited by ChatGPT, Claude, Perplexity, and Google AI Overviews.",
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
              Get Your Business Cited by<br />
              <span className="text-primary">ChatGPT, Claude & AI Search</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              25 years in digital marketing taught Evan Weber how search shifts happen. Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) are the current one — the concrete, technical playbook for getting your content cited by AI answer engines instead of buried under a summary. Evan trains your team live using this exact site as the worked example.
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
            <Link href="/glossary/aeo" className="text-primary underline underline-offset-2 hover:no-underline">AEO (Answer Engine Optimization)</Link> structures content to be extracted as a direct answer — featured snippets, voice search.{" "}
            <Link href="/glossary/geo" className="text-primary underline underline-offset-2 hover:no-underline">GEO (Generative Engine Optimization)</Link> goes further: getting cited or summarized by generative AI —{" "}
            <Link href="/glossary/llm" className="text-primary underline underline-offset-2 hover:no-underline">LLMs</Link> like ChatGPT, Claude, and Perplexity, plus Google AI Overviews. When someone asks an AI a question today, they usually get a synthesized answer with a couple of cited sources instead of ten ranked links. This training is about being one of those sources.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Structured data that actually matches",
                desc: "FAQPage, Service, and Article schema (schema.org) that mirrors your visible content exactly — mismatched structured data gets ignored, not rewarded."
              },
              {
                icon: <Bot className="w-6 h-6" />,
                title: "Content AI can actually reach",
                desc: "robots.txt rules that explicitly allow GPTBot, ClaudeBot, PerplexityBot, and Google-Extended, plus an llms.txt file AI systems can read directly."
              },
              {
                icon: <FileSearch className="w-6 h-6" />,
                title: "Direct-answer content structure",
                desc: "A plain, quotable answer up top, explicit Q&A formatting, and clear author attribution — the format both featured snippets and LLMs prefer to cite."
              },
              {
                icon: <LineChart className="w-6 h-6" />,
                title: "Topical authority through internal linking",
                desc: "A glossary and content hub that cross-links into your core pages, so your domain reads as a real source on the subject, not one lucky page."
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
              { num: "02", title: "Structured Data Implementation", desc: "Add correct FAQPage, Service, and Article schema (JSON-LD) that matches your visible content exactly." },
              { num: "03", title: "llms.txt & AI Crawler Setup", desc: "Write your llms.txt file and audit robots.txt so GPTBot, ClaudeBot, PerplexityBot, and Google-Extended can actually reach your content." },
              { num: "04", title: "Direct-Answer Content Patterns", desc: "Rewrite key pages and FAQs into the quotable, self-contained format answer engines prefer to lift and cite." },
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
              "Marketing teams who want their content actually cited, not just ranked",
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
