import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { glossaryTerms } from "@/data/glossary";

const PAGE_URL = "https://learncowork.net/glossary";

export default function Glossary() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${PAGE_URL}#glossary`,
    name: "Agentic AI & Claude Cowork Glossary",
    description:
      "Plain-English definitions of agentic AI terms — Claude Cowork, MCP, the Codex app, vibe coding, and more — by AI trainer Evan Weber.",
    url: PAGE_URL,
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.short,
      url: `${PAGE_URL}/${t.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title="AI Glossary: Claude Cowork, MCP, Agentic AI & More | Evan Weber"
        description="Plain-English definitions of the agentic AI terms that matter — Claude Cowork, MCP, the Codex app, vibe coding, computer use, and more — from AI trainer Evan Weber."
        canonical={PAGE_URL}
        keywords="AI glossary, agentic AI terms, what is Claude Cowork, what is MCP, what is vibe coding, Codex app definition, AI terminology"
        schema={schema}
      />
      <SiteNav />

      <main className="flex-1">
        <section className="pt-28 md:pt-32 pb-12 px-5 md:px-12 border-b border-border bg-secondary/30">
          <div className="container max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Plain-English definitions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-5">
              The Agentic AI Glossary
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              The terms that come up constantly once you start working with AI — Claude
              Cowork, MCP, the Codex app, vibe coding, computer use — defined clearly, with
              no jargon, by someone who uses these tools every day.
            </p>
          </div>
        </section>

        <section className="py-14 px-5 md:px-12">
          <div className="container max-w-5xl mx-auto">
            <div className="grid gap-4 md:grid-cols-2">
              {glossaryTerms.map((t, i) => (
                <motion.div
                  key={t.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (i % 2) * 0.05 }}
                >
                  <Link
                    href={`/glossary/${t.slug}`}
                    className="group flex flex-col h-full rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h2 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {t.term}
                      </h2>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {t.short}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 md:px-12 pb-20">
          <div className="container max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-secondary/40 p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                From definitions to doing
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Knowing the terms is step one. I'll get your team actually using these tools
                in their real workflows — live, in a single session.
              </p>
              <Link href="/#pricing">
                <span className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-7 py-3 font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Book a Session <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
