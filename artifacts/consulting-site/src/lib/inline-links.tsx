import { Fragment, type ReactNode } from "react";
import { Link } from "wouter";

// Parses minimal markdown-style links — [label](/path) or [label](https://url)
// — inside plain body copy so article/glossary text can carry contextual
// internal links without switching to a full markdown renderer.
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderLinkedText(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(text)) !== null) {
    const [full, label, href] = match;
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }
    // Static assets (llms.txt, sitemap.xml, robots.txt, ...) are real files,
    // not SPA routes — a wouter Link would try to client-route them and hit
    // the 404 page instead of navigating to the file.
    const isStaticAsset = /\.[a-z0-9]{2,4}$/i.test(href);
    if (href.startsWith("/") && !isStaticAsset) {
      nodes.push(
        <Link key={key++} href={href} className="text-primary underline underline-offset-2 hover:no-underline">
          {label}
        </Link>,
      );
    } else if (href.startsWith("/")) {
      nodes.push(
        <a key={key++} href={href} className="text-primary underline underline-offset-2 hover:no-underline">
          {label}
        </a>,
      );
    } else {
      nodes.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:no-underline"
        >
          {label}
        </a>,
      );
    }
    lastIndex = match.index + full.length;
  }
  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }
  return nodes;
}
