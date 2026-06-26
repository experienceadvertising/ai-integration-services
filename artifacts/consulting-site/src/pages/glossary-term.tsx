import { useRoute, Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { getGlossaryTerm, glossaryTerms } from "@/data/glossary";

export default function GlossaryTermPage() {
  const [, params] = useRoute("/glossary/:slug");
  const term = params?.slug ? getGlossaryTerm(params.slug) : undefined;

  if (!term) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Term not found</h1>
          <Link href="/glossary"><Button>Back to the glossary</Button></Link>
        </div>
      </div>
    );
  }

  const url = `https://learncowork.net/glossary/${term.slug}`;
  const ogImage = `https://learncowork.net/og-glossary-${term.slug}.png`;
  const related = term.related
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        "@id": `${url}#term`,
        name: term.term,
        description: term.short,
        url,
        ...(term.aliases?.length ? { alternateName: term.aliases } : {}),
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          name: "Agentic AI & Claude Cowork Glossary",
          url: "https://learncowork.net/glossary",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://learncowork.net" },
          { "@type": "ListItem", position: 2, name: "Glossary", item: "https://learncowork.net/glossary" },
          { "@type": "ListItem", position: 3, name: term.term, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={`What Is ${term.term}? Definition & Meaning | Evan Weber`}
        description={term.short}
        canonical={url}
        ogImage={ogImage}
        ogType="article"
        keywords={`${term.term}, what is ${term.term}, ${term.term} definition, ${term.term} meaning${term.aliases?.length ? ", " + term.aliases.join(", ") : ""}`}
        schema={schema}
      />
      <SiteNav />

      <main className="flex-1">
        <article className="pt-28 md:pt-32 pb-16 px-5 md:px-12">
          <div className="container max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
              <Link href="/glossary" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> All terms
              </Link>
            </nav>

            <header className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                AI Glossary · {term.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mt-3 mb-2">
                {term.term}
              </h1>
              {term.aliases?.length ? (
                <p className="text-sm text-muted-foreground">
                  Also known as: {term.aliases.join(", ")}
                </p>
              ) : null}
            </header>

            {/* Definition callout — snippet-optimized */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-7 mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Definition
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                {term.short}
              </p>
            </div>

            <div className="space-y-5 text-[1.0625rem] md:text-lg leading-relaxed text-foreground/90">
              {term.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Related terms */}
            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-lg font-bold mb-4">Related terms</h2>
                <div className="flex flex-wrap gap-2.5">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/glossary/${r.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {r.term}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-primary/10 border border-primary/20 p-6 md:p-8 text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Want to actually use this, not just define it?
              </h2>
              <p className="text-muted-foreground mb-5 max-w-lg mx-auto">
                I train business teams to put agentic AI to work in their real workflows —
                live, in a single session.
              </p>
              <Link href="/#pricing">
                <Button size="lg" className="gap-2">Book a Session <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
