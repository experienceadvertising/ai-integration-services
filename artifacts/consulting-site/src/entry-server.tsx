import { renderToString } from "react-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import App from "./App";
import { industries } from "./data/industries";
import { roles } from "./data/roles";
import { articles } from "./data/articles";
import { glossaryTerms } from "./data/glossary";

export interface RenderResult {
  html: string;
  helmet: HelmetServerState | undefined;
}

export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(<App ssrPath={url} helmetContext={helmetContext} />);
  return { html, helmet: helmetContext.helmet };
}

export { industries, roles, articles, glossaryTerms };
