import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { articles, ARTICLE_AUTHOR } from "@/data/articles";

const PAGE_URL = "https://learncowork.net/blog";

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function Blog() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${PAGE_URL}#blog`,
    name: "The learncowork.net Blog — AI Productivity & Agentic AI",
    description:
      "First-hand guides to Claude Cowork, the Codex app, and agentic AI for business teams, written by AI trainer Evan Weber.",
    url: PAGE_URL,
    author: {
      "@type": "Person",
      name: ARTICLE_AUTHOR.name,
      url: ARTICLE_AUTHOR.url,
    },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `https://learncowork.net/blog/${a.slug}`,
      datePublished: a.datePublished,
      dateModified: a.dateModified,
      author: { "@type": "Person", name: ARTICLE_AUTHOR.name, url: ARTICLE_AUTHOR.url },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title="AI Productivity Blog: Claude Cowork, Codex & Agentic AI | Evan Weber"
        description="First-hand guides to Claude Cowork, the OpenAI Codex app, and agentic AI for business teams — written by AI trainer Evan Weber, who uses these tools every day."
        canonical={PAGE_URL}
        keywords="Claude Cowork blog, agentic AI guides, Codex app explained, AI productivity articles, Evan Weber, Claude Cowork vs Codex, AI for business teams"
        schema={schema}
      />
      <SiteNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-28 md:pt-32 pb-12 px-5 md:px-12 border-b border-border bg-secondary/30">
          <div className="container max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Field notes on agentic AI
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-5">
              The Agentic AI Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Plain-English, first-hand guides to Claude Cowork, the Codex app, and the AI
              tools I use every day to run a real business — written to help your team
              skip the months of figuring it out alone.
            </p>
          </div>
        </section>

        {/* Article list */}
        <section className="py-14 px-5 md:px-12">
          <div className="container max-w-5xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((a, i) => (
                <motion.article
                  key={a.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors"
                >
                  <Link href={`/blog/${a.slug}`} className="flex flex-col h-full">
                    <img
                      src={`https://learncowork.net/og-blog-${a.slug}.png`}
                      alt={a.title}
                      width={1200}
                      height={630}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="w-full aspect-[1200/630] object-cover border-b border-border"
                    />
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {a.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                        {a.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                        {a.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(a.datePublished)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {a.readingTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 md:px-12 pb-20">
          <div className="container max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-secondary/40 p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Want this set up in your team's actual workflow?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Reading about agentic AI is one thing. I'll get your team building real
                workflows live, in a single session.
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
