import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  schema?: object;
  keywords?: string;
}

const SITE_NAME = "AI Training by Evan Weber | learncowork.net";
const DEFAULT_OG_IMAGE = "https://learncowork.net/og-image.png";
const DEFAULT_KEYWORDS = "Claude Cowork training, AI productivity training, Claude AI training, AI team training, vibe coding training, Evan Weber, learncowork, Claude for business";

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
  schema,
  keywords = DEFAULT_KEYWORDS,
}: SEOProps) {
  const fullTitle = title.includes("Evan Weber") || title.includes("learncowork")
    ? title
    : `${title} | Evan Weber`;

  const schemas = schema ? [schema] : [];

  const ogImageType = ogImage.endsWith(".jpg") || ogImage.endsWith(".jpeg")
    ? "image/jpeg"
    : "image/png";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Evan Weber" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content={ogImageType} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@learncowork" />
      <meta name="twitter:creator" content="@learncowork" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
