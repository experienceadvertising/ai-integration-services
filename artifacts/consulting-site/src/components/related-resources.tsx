import { Link } from "wouter";
import { BookOpen } from "lucide-react";
import { getArticle } from "@/data/articles";
import { getGlossaryTerm } from "@/data/glossary";

interface RelatedResourcesProps {
  articleSlugs: string[];
  glossarySlug?: string;
  heading?: string;
}

// Small cross-link block used on industry/role pages to send authority and
// traffic into the blog + glossary — most visitors land on one of these
// pages first, so this is often their only path to that content.
export default function RelatedResources({ articleSlugs, glossarySlug, heading = "Free resources" }: RelatedResourcesProps) {
  const articles = articleSlugs.map((slug) => getArticle(slug)).filter((a): a is NonNullable<typeof a> => Boolean(a));
  const term = glossarySlug ? getGlossaryTerm(glossarySlug) : undefined;

  if (articles.length === 0 && !term) return null;

  return (
    <section className="py-14 px-6 lg:px-12 border-b border-border">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-lg font-bold mb-6">{heading}</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-primary mb-2" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">{a.category}</span>
              <span className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">{a.title}</span>
            </Link>
          ))}
          {term && (
            <Link
              href={`/glossary/${term.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-primary mb-2" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">AI Glossary</span>
              <span className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">What is {term.term}?</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
