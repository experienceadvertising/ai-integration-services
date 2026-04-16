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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Evan Weber",
  url: "https://learncowork.net",
  image: "https://learncowork.net/evan-profile.jpeg",
  jobTitle: "AI Productivity Trainer & Digital Marketing Expert",
  worksFor: {
    "@type": "Organization",
    name: "Experience Advertising",
    url: "https://experienceadvertising.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fort Lauderdale",
    addressRegion: "FL",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/evanweber/",
    "https://experienceadvertising.com",
    "https://www.affiliatefinders.com",
  ],
  knowsAbout: [
    "Claude Cowork",
    "AI Productivity",
    "Vibe Coding",
    "Claude Code",
    "Digital Marketing",
    "AI Training",
    "Business Automation",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude Cowork Training",
  provider: {
    "@type": "Person",
    name: "Evan Weber",
  },
  description: "Live 1-on-1 and team Claude Cowork training sessions for business teams. 1-hour and 4-hour formats available.",
  url: "https://learncowork.net",
  areaServed: "US",
  offers: [
    {
      "@type": "Offer",
      name: "1-Hour Claude Cowork Training Session",
      price: "300",
      priceCurrency: "USD",
      url: "https://learncowork.net/#pricing",
    },
    {
      "@type": "Offer",
      name: "4-Hour Claude Cowork Deep Dive",
      price: "1000",
      priceCurrency: "USD",
      url: "https://learncowork.net/#pricing",
    },
  ],
};

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

  const schemas = [personSchema, serviceSchema, ...(schema ? [schema] : [])];

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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@learncowork" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
