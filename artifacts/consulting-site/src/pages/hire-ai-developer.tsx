import { Link } from "wouter";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import ServiceInquiry from "@/components/service-inquiry";
import evanProfile from "../assets/evan-profile.jpeg";

const groups = [
  [
    "Interactive websites and content platforms",
    "Company websites, landing pages, resource hubs, directories, and searchable content experiences. Help a visitor compare choices, find an answer, explore a topic, or make a qualified inquiry. Scope includes the content structure and the action the site should support.",
  ],
  [
    "Web applications and business software",
    "Customer portals, account-based products, internal tools, workflow software, and focused SaaS applications. Turn a process currently spread across spreadsheets and email into a shared application with clear roles, records, and user journeys.",
  ],
  [
    "Assessments, quizzes, calculators, and lead magnets",
    "Readiness assessments, product selectors, cost estimators, audits, and free tools that give visitors a useful result. Decide which calculations or questions drive the result, explain assumptions, and make the next step relevant to the user's needs.",
  ],
  [
    "Dashboards, reporting, and marketing tools",
    "Bring approved data into a dashboard or reporting workflow. Build campaign planning tools, sales research utilities, content operations tools, or account summaries with visible sources and limits. Provider access and metric definitions are part of the scope.",
  ],
  [
    "Workflow automation, integrations, and AI-assisted utilities",
    "Connect existing systems through supported APIs, reduce repetitive handoffs, or help people draft, summarize, classify, and search approved information. Define permissions, approval points, failure handling, and human review before an automation runs on live data.",
  ],
  [
    "Ecommerce and customer experiences",
    "Product discovery, custom configuration, quote requests, buying guides, and customer self-service tools. Plan the catalog, payment, fulfillment, and support dependencies separately so a polished interface does not hide an unfinished business process.",
  ],
  [
    "Mobile apps and phone-first tools",
    "Scope mobile applications and responsive experiences for tasks people need away from their desks. Choose between a mobile-friendly website and an app based on the user need. Native distribution requires device testing and separate store accounts, review, and release work.",
  ],
];
const phases = [
  [
    "Plan the business case",
    "Start with the customer or team problem. Define the users, the useful outcome, the core action, and how you will judge the first version. Evan helps shape the idea into a practical product brief and questions worth resolving before development.",
  ],
  [
    "Scope and build a useful first version",
    "Agree on features, content, data, integrations, permissions, and acceptance criteria. Break work into reviewable steps. AI coding tools assist with implementation, while Evan directs the work, reviews changes, and keeps the project tied to its purpose.",
  ],
  [
    "Test and prepare for launch",
    "Exercise the important paths on desktop and mobile, including validation and failures. Review access controls, integrations, content, and deployment requirements. Confirm the published version behaves as expected and define what still needs specialist review.",
  ],
  [
    "Optimize after real use",
    "Use feedback, errors, performance, and agreed business measures to prioritize improvements. Maintenance, monitoring, security updates, hosting, and further features need an explicit ownership and support plan. Ongoing work is scoped separately or included by agreement.",
  ],
];
const faqs = [
  [
    "What does hiring an AI developer mean here?",
    "You work with Evan Weber as the person responsible for shaping and executing the project. AI-assisted coding helps with development tasks. Evan plans the work, reviews changes, tests important behavior, and verifies the release against the agreed scope. It does not make code automatically correct.",
  ],
  [
    "Can you build an idea from scratch or improve an existing app?",
    "Both are possible. An idea needs a useful first-version scope. An existing application starts with a review of its behavior, architecture, current issues, and uncommitted work. The next step may be a focused fix, a new feature, or a larger rebuild if the evidence supports it.",
  ],
  [
    "How are cost and timing determined?",
    "Projects receive a custom scope and quote after discussing users, features, data, integrations, design, testing, and launch requirements. Third-party services and ongoing support are discussed separately. This page does not promise a fixed price, delivery date, or unlimited revisions.",
  ],
  [
    "Can you build mobile apps?",
    "Mobile apps and phone-first experiences are capabilities Evan can scope for a company. The public examples on this page demonstrate web projects. They do not establish that a native app is available in an app store. Device testing, store submission, accounts, and ongoing releases must be planned explicitly.",
  ],
  [
    "Can you connect our existing tools or add AI features?",
    "Yes, when the providers offer suitable access and the use case makes sense. A project can include approved API integrations and AI-assisted workflows. Data permissions, vendor costs, output review, rate limits, and failure behavior need to be agreed before live use.",
  ],
  [
    "Who owns hosting, accounts, maintenance, and security?",
    "These responsibilities belong in the project agreement. Identify who controls the repository, domain, hosting, provider accounts, and production access, and who handles monitoring and updates. Sensitive or regulated systems may need specialist engineering, legal, or security review.",
  ],
  [
    "Can our team learn the process too?",
    "Yes. A separate team workshop can teach planning, tool use, review, and testing around approved examples. Training scope and development deliverables are agreed independently so the company knows what it is buying.",
  ],
];
export default function HireAiDeveloper() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Hire Evan Weber: AI Developer for Business Projects"
        description="Hire Evan Weber to plan, build, test, launch and optimize websites, apps, software and online tools with AI-assisted development. Request a project quote."
        canonical="https://learncowork.net/hire-ai-developer/"
        ogImage="https://learncowork.net/og-hire-ai-developer.png"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://learncowork.net/hire-ai-developer/#service",
              name: "AI-assisted development with Evan Weber",
              serviceType:
                "Business website, application, software and online tool development",
              url: "https://learncowork.net/hire-ai-developer/",
              description:
                "Planning, business strategy, AI-assisted implementation, testing, launch, and scoped ongoing optimization for company projects.",
              provider: {
                "@type": "Person",
                name: "Evan Weber",
                url: "https://learncowork.net/about/",
                worksFor: {
                  "@type": "Organization",
                  name: "Experience Advertising, Inc.",
                  url: "https://experienceadvertising.com/",
                },
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://learncowork.net/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Hire Evan Weber",
                  item: "https://learncowork.net/hire-ai-developer/",
                },
              ],
            },
          ],
        }}
      />
      <SiteNav />
      <main>
        <section className="pt-28 md:pt-32 pb-16 px-5 border-b border-border bg-secondary/30">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_220px] gap-10 items-start">
            <div>
              <p className="text-primary font-medium mb-4">
                AI-assisted development for companies
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Hire Evan Weber to plan, build, and improve your next business
                project
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground mb-5">
                I plan, strategize, execute, and optimize AI-coded projects for
                companies: interactive websites, software, web applications,
                mobile apps, assessments, quizzes, calculators, lead magnets,
                and other useful online tools.
              </p>
              <p className="leading-relaxed mb-8">
                Start with what your company needs to accomplish. I help turn
                that need into a clear scope, build and test the experience,
                prepare it for launch, and decide what to improve as people use
                it.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-md px-6 py-3 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Discuss your project
                </a>
                <a
                  href="#public-examples"
                  className="inline-flex items-center px-2 py-3 text-primary underline"
                >
                  See public examples
                </a>
              </div>
            </div>
            <div>
              <img
                src={evanProfile}
                alt="Evan Weber, founder of Experience Advertising and AI-assisted developer"
                width={220}
                height={220}
                className="w-40 h-40 md:w-56 md:h-56 rounded-xl object-cover"
                fetchPriority="high"
              />
              <p className="mt-4 font-semibold">Evan Weber</p>
              <p className="text-sm text-muted-foreground mt-1">
                Founder, Experience Advertising
              </p>
              <Link
                href="/about/"
                className="text-primary underline text-sm inline-block mt-3"
              >
                Background and approach
              </Link>
            </div>
          </div>
        </section>
        <section className="px-5 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-10">
            <h2 className="text-3xl font-bold">
              Build something with a clear business purpose
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-5">
              <p>
                A project should make a real action easier: help a prospect
                evaluate an offer, give a customer a useful tool, or let a team
                complete work with fewer disconnected steps. That purpose guides
                the features, content, integrations, and launch priorities.
              </p>
              <p>
                My digital marketing background helps connect the build to
                customer experience, lead generation, and practical business
                use. We agree on what success would look like and which measures
                can show it. A functioning application is a starting point for
                learning from real users, not proof of a revenue gain.
              </p>
              <p>
                You can bring an early idea, a process that needs better
                software, or a build that has stalled. We start by understanding
                the problem and choosing a manageable next version.
              </p>
            </div>
          </div>
        </section>
        <section className="px-5 py-16 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-5">
              Types of projects I can build for your company
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              These are services we can scope, not a claim that every project
              type has already shipped. The right approach depends on your
              users, data, requirements, budget, and existing systems.
            </p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {groups.map(([title, text]) => (
                <div key={title}>
                  <h3 className="font-semibold text-xl mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-5 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-5">
              From strategy to a tested launch and continued improvement
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              The work includes decisions around the code. A clear brief, a
              reviewable build, and a realistic launch plan help your company
              understand what is ready and what still needs attention.
            </p>
            <ol className="grid md:grid-cols-2 gap-x-12 gap-y-10 list-decimal pl-5">
              {phases.map(([title, text]) => (
                <li key={title} className="pl-2">
                  <h3 className="font-semibold text-xl mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section
          id="public-examples"
          className="scroll-mt-20 bg-secondary/30 border-y border-border px-5 py-16"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-5">
              Public web projects you can explore
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              A few focused examples show the kinds of experiences involved.
              These public pages and tools are available to explore. They are
              not promises of commercial results or a claim that every backend
              feature has been independently audited.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-xl mb-3">
                  <a
                    href="/ai-readiness-quiz/"
                    className="text-primary underline"
                  >
                    LearnCowork AI readiness quiz
                  </a>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A question-based assessment with an on-page result. It
                  demonstrates an interactive tool that helps a visitor evaluate
                  a topic before choosing a next step.
                </p>
                <p className="text-sm mt-4">Public interactive web tool</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">
                  <a
                    href="/ai-time-savings-calculator/"
                    className="text-primary underline"
                  >
                    LearnCowork time-savings calculator
                  </a>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  An adjustable calculator that turns user inputs into a modeled
                  estimate. The estimate is illustrative, not a measured
                  productivity result. Useful for explaining assumptions and
                  comparing scenarios.
                </p>
                <p className="text-sm mt-4">Public interactive web tool</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">
                  <a
                    href="https://experienceadvertising.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    Experience Advertising
                  </a>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  My agency's public website organizes services, resources, and
                  paths to a business conversation. It shows how content and
                  navigation can support a company's offer.
                </p>
                <p className="text-sm mt-4">Public company website</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-8 max-w-3xl">
              Private client work, prototypes, and applications still in
              progress are not presented here as shipped examples. Mobile
              development, portals, integrations, and other capabilities are
              scoped around your requirements rather than inferred from these
              three web examples.
            </p>
          </div>
        </section>
        <section className="px-5 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                How I use AI in development
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I use AI coding tools such as OpenAI Codex and Claude Code to
                help implement, investigate, and improve projects. I stay
                responsible for the requirements, decisions, review, and
                verification. Hosting and publishing follow the project's
                existing setup, including Replit where appropriate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                AI-generated code still needs testing, access controls, error
                handling, and maintenance. A project that handles sensitive data
                or critical operations may need additional specialist review
                before launch.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                What helps me scope your project
              </h2>
              <ul className="list-disc pl-5 text-muted-foreground leading-relaxed space-y-3">
                <li>
                  The business problem and the people who need the result.
                </li>
                <li>The main action the first version must support.</li>
                <li>
                  An existing site, repository, sketch, or example you can share
                  safely.
                </li>
                <li>
                  Required data, integrations, user accounts, or payments.
                </li>
                <li>
                  Your priorities, timing constraints, and budget expectations.
                </li>
                <li>Who will operate and maintain the project after launch.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="px-5 pb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Questions about hiring Evan as an AI developer
            </h2>
            <div className="space-y-7">
              {faqs.map(([q, a]) => (
                <div key={q}>
                  <h3 className="font-semibold text-lg mb-2">{q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              Want to build your team's skills alongside the project? Explore{" "}
              <Link
                href="/corporate-ai-training/"
                className="text-primary underline"
              >
                corporate AI workshops
              </Link>
              ,{" "}
              <Link
                href="/ai-coding-training/"
                className="text-primary underline"
              >
                AI coding training
              </Link>
              , or{" "}
              <Link
                href="/replit-consulting/"
                className="text-primary underline"
              >
                Replit consulting
              </Link>
              . For a useful review habit, read{" "}
              <Link
                href="/blog/review-ai-generated-work-before-sharing/"
                className="text-primary underline"
              >
                how to check AI-generated work before sharing it
              </Link>
              .
            </p>
          </div>
        </section>
        <ServiceInquiry service="ai-development" />
      </main>
      <SiteFooter />
    </div>
  );
}
