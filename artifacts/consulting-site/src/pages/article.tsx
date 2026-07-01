import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Calendar, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { getArticle, articles, ARTICLE_AUTHOR } from "@/data/articles";
import { renderLinkedText } from "@/lib/inline-links";

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function ArticlePage() {
  const [, params] = useRoute("/blog/:slug");
  const article = params?.slug ? getArticle(params.slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link href="/blog"><Button>Back to the blog</Button></Link>
        </div>
      </div>
    );
  }

  const url = `https://learncowork.net/blog/${article.slug}`;
  const ogImage = `https://learncowork.net/og-blog-${article.slug}.png`;
  const others = articles.filter((a) => a.slug !== article.slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.metaDescription,
        image: ogImage,
        url,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        inLanguage: "en-US",
        keywords: article.tags.join(", "),
        articleSection: article.category,
        author: {
          "@type": "Person",
          name: ARTICLE_AUTHOR.name,
          jobTitle: ARTICLE_AUTHOR.title,
          url: ARTICLE_AUTHOR.url,
          image: ARTICLE_AUTHOR.image,
          sameAs: [...ARTICLE_AUTHOR.sameAs],
        },
        publisher: {
          "@type": "Person",
          name: ARTICLE_AUTHOR.name,
          url: "https://learncowork.net",
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://learncowork.net" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://learncowork.net/blog" },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={article.metaTitle}
        description={article.metaDescription}
        canonical={url}
        ogImage={ogImage}
        ogType="article"
        keywords={article.tags.join(", ")}
        schema={schema}
      />
      <SiteNav />

      <main className="flex-1">
        <article className="pt-28 md:pt-32 pb-16 px-5 md:px-12">
          <div className="container max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
              <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> All articles
              </Link>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mt-3 mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground border-y border-border py-4">
                <Link href="/about" className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors">
                  <img
                    src="https://learncowork.net/og-evan.jpg"
                    alt={ARTICLE_AUTHOR.name}
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full object-cover"
                    loading="lazy"
                  />
                  By {ARTICLE_AUTHOR.name}
                </Link>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readingTime}
                </span>
              </div>
            </header>

            {/* Hero image */}
            <img
              src={ogImage}
              alt={article.title}
              width={1200}
              height={630}
              fetchPriority="high"
              className="w-full aspect-[1200/630] object-cover rounded-2xl border border-border mb-10"
            />

            {/* Body */}
            <div className="space-y-5 text-[1.0625rem] md:text-lg leading-relaxed text-foreground/90">
              {article.intro.map((p, i) => (
                <p key={i} className={i === 0 ? "text-xl md:text-2xl leading-relaxed text-foreground font-medium" : undefined}>
                  {renderLinkedText(p)}
                </p>
              ))}

              {article.sections.map((section, si) => (
                <section key={si} className="pt-6">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 scroll-mt-24">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi} className="mb-4">{renderLinkedText(p)}</p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2.5 my-5">
                      {section.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{renderLinkedText(b)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Key takeaways */}
            <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
              <h2 className="text-lg font-bold mb-4">Key takeaways</h2>
              <ul className="space-y-3">
                {article.keyTakeaways.map((t, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-5">
                {article.faqs.map((f, i) => (
                  <div key={i} className="border-b border-border pb-5">
                    <h3 className="font-semibold mb-2">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{renderLinkedText(f.a)}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Author bio */}
            <div className="mt-12 rounded-2xl border border-border p-6 md:p-8 flex flex-col sm:flex-row gap-5 items-start">
              <img
                src="https://learncowork.net/og-evan.jpg"
                alt={ARTICLE_AUTHOR.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover shrink-0"
                loading="lazy"
              />
              <div>
                <div className="font-bold">{ARTICLE_AUTHOR.name}</div>
                <div className="text-sm text-primary mb-2">{ARTICLE_AUTHOR.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Evan is a 25-year digital marketing veteran, founder of Experience Advertising,
                  and a daily Claude Cowork and Codex user who trains business teams to use
                  agentic AI fluently in their real workflows.
                </p>
                <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  More about Evan <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-2xl bg-primary/10 border border-primary/20 p-6 md:p-8 text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Skip the months of figuring it out alone.
              </h2>
              <p className="text-muted-foreground mb-5 max-w-lg mx-auto">
                I'll get your team building real agentic-AI workflows live, in a single session.
              </p>
              <Link href="/#pricing">
                <Button size="lg" className="gap-2">Book a Session <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </div>
        </article>

        {/* Keep reading */}
        {others.length > 0 && (
          <section className="border-t border-border px-5 md:px-12 py-14 bg-secondary/20">
            <div className="container max-w-5xl mx-auto">
              <h2 className="text-xl font-bold mb-6">Keep reading</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {others.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{a.category}</span>
                    <h3 className="font-bold leading-snug mt-2 mb-2 group-hover:text-primary transition-colors">{a.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
