import { Link } from "wouter";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import ServiceInquiry from "@/components/service-inquiry";

const areas = [
  {
    title: "Research, writing, and documents",
    text: "Practice turning an approved brief and source material into a useful draft, comparison, or summary. Check citations, missing context, tone, and accuracy before anyone shares the result.",
    links: [
      ["/chatgpt-work-training/", "ChatGPT training"],
      ["/claude-cowork-training/", "Claude Cowork training"],
    ],
  },
  {
    title: "Marketing and sales workflows",
    text: "Work through campaign briefs, customer research, content planning, proposal drafts, and reporting. Decide which inputs the team needs, where human judgment matters, and how to review an output against the business goal.",
    links: [
      ["/roles/marketing-managers/", "Marketing team workflows"],
      ["/industries/marketing-agencies/", "Agency training"],
    ],
  },
  {
    title: "Operations and repeatable work",
    text: "Map a recurring task, identify its source files and systems, and build a repeatable process. Explore assisted document preparation, meeting follow-up, reporting, and handoffs with clear approval points.",
    links: [["/ai-workflow-consulting/", "AI workflow consulting"]],
  },
  {
    title: "AI-assisted development",
    text: "Learn to define a small project, direct coding work, review changes, test important paths, and verify a published version. Product and development teams can work on specifications, debugging, Git coordination, and release checks.",
    links: [
      ["/codex-training/", "OpenAI Codex training"],
      ["/ai-coding-training/", "Claude Code and AI coding"],
      ["/replit-consulting/", "Replit training"],
    ],
  },
];
const faqs = [
  [
    "How much does a corporate AI workshop cost?",
    "Team workshops are quoted to fit the agreed scope. Share the audience, goals, tools, and desired format so Evan can discuss a price. Existing individual training sessions have their own published pricing; they are separate from a custom company engagement.",
  ],
  [
    "Do you teach beginners and experienced teams?",
    "The starting point depends on the participants. A mixed group may need shared foundations and separate role exercises. A team already using AI can focus on a specific workflow, output quality, or development process. The audience and prerequisites are agreed during scoping.",
  ],
  [
    "Can we focus on ChatGPT, Claude, or AI coding?",
    "Yes. Training can focus on the approved tools and work your team actually needs. Relevant areas include ChatGPT, Claude Cowork, Claude Code, OpenAI Codex, Replit, and workflow consulting. Access, account requirements, and the agenda should be confirmed before scheduling.",
  ],
  [
    "Do we need to share private company data?",
    "No. Start with public, synthetic, or sanitized examples. Your company decides which tools and data are approved. Do not send credentials or customer records through the inquiry form. Any required access and confidentiality arrangements are discussed separately.",
  ],
  [
    "What format, duration, and group size are available?",
    "Delivery format, session length, participant count, exercises, and follow-up are agreed in the custom proposal. There is no standard corporate package promised on this page. Tell Evan your preferences and constraints so the workshop can be scoped realistically.",
  ],
  [
    "Does training include building our production application?",
    "A workshop can teach development practices or explore a small example. A production application needs its own requirements, testing, launch plan, and support scope. Evan also offers hands-on AI-assisted development as a separate engagement.",
  ],
];
export default function CorporateAiTraining() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Corporate AI Training & Team Workshops | Evan Weber"
        description="Practical AI workshops for company teams with Evan Weber. Train on approved tools and real workflows. Discuss your goals and request a custom quote."
        canonical="https://learncowork.net/corporate-ai-training/"
        ogImage="https://learncowork.net/og-corporate-ai-training.png"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://learncowork.net/corporate-ai-training/#service",
              name: "Corporate AI training and team workshops",
              serviceType: "Custom AI team training",
              url: "https://learncowork.net/corporate-ai-training/",
              description:
                "Practical company AI workshops scoped around team goals, approved tools, exercises, review standards, and a custom quote.",
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
                  name: "Corporate AI training",
                  item: "https://learncowork.net/corporate-ai-training/",
                },
              ],
            },
          ],
        }}
      />
      <SiteNav />
      <main>
        <section className="pt-28 md:pt-32 pb-16 px-5 border-b border-border bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <p className="text-primary font-medium mb-4">
              Company workshops with Evan Weber
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mb-6">
              Corporate AI training built around your team's actual work
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-5">
              Evan Weber helps company teams use AI for practical work:
              research, writing, reporting, marketing, operations, and
              AI-assisted development. Workshops are scoped around your people,
              approved tools, and business goals, with a custom quote before you
              commit.
            </p>
            <p className="max-w-3xl leading-relaxed mb-8">
              Bring a recurring task your team wants to improve. The useful
              starting point is a clear workflow, a safe set of inputs, and a
              way to judge whether the output is good enough to use.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-md px-6 py-3 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Request a team workshop quote
              </a>
              <a
                href="#training-areas"
                className="inline-flex items-center px-2 py-3 text-primary underline"
              >
                Explore training areas
              </a>
            </div>
          </div>
        </section>
        <section className="px-5 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-10">
            <h2 className="text-3xl font-bold">
              What should your team be able to do afterward?
            </h2>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                The goal is to make a useful process repeatable. A team should
                understand how to describe the task, provide relevant context,
                review the result, and know when a person needs to step in.
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  Choose an appropriate tool for a specific task and understand
                  its limits.
                </li>
                <li>
                  Write a clear brief with inputs, constraints, and an expected
                  output.
                </li>
                <li>
                  Check facts, calculations, sources, and missing information
                  before sharing work.
                </li>
                <li>
                  Turn a successful exercise into a process another team member
                  can follow.
                </li>
                <li>
                  Keep approval steps for sending messages, changing systems,
                  and handling sensitive information.
                </li>
              </ul>
              <p>
                These are workshop goals, not guaranteed productivity gains.
                Results depend on the task, tool access, participants, and how
                your team follows through.
              </p>
            </div>
          </div>
        </section>
        <section
          id="training-areas"
          className="scroll-mt-20 px-5 py-16 border-y border-border"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-5">
              Training areas your company can choose from
            </h2>
            <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
              Start with the work, then select the tools. A marketing group and
              a product team may need very different exercises even if both use
              ChatGPT or Claude.
            </p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {areas.map((area) => (
                <div key={area.title}>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {area.text}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {area.links.map(([href, label]) => (
                      <Link
                        key={href}
                        href={href}
                        className="text-primary underline text-sm"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-5 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              A practical workshop starts before the session
            </h2>
            <ol className="grid md:grid-cols-3 gap-8 list-decimal pl-5">
              <li className="pl-2">
                <h3 className="font-semibold text-xl mb-3">
                  Agree on the problem
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identify who is attending, their current experience, one or
                  two useful tasks, and the tools the company permits. Decide
                  what would count as a useful exercise.
                </p>
              </li>
              <li className="pl-2">
                <h3 className="font-semibold text-xl mb-3">
                  Prepare safe examples
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choose public or sanitized materials, confirm account access,
                  and define review criteria. A source document, sample report,
                  or small project brief is more useful than a vague request to
                  “learn AI.”
                </p>
              </li>
              <li className="pl-2">
                <h3 className="font-semibold text-xl mb-3">
                  Practice and review
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Work through the task, inspect where the tool succeeds or
                  misses the point, and document the steps worth repeating.
                  Agree on any materials or follow-up support in the proposal.
                </p>
              </li>
            </ol>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-3xl">
              For example, a marketing workshop might turn a sample campaign
              brief into a content plan, then check the recommendations against
              the audience and approved claims. An operations workshop might use
              sanitized meeting notes to draft an action list, with a person
              confirming owners and deadlines. These are possible exercises, not
              a fixed agenda.
            </p>
          </div>
        </section>
        <section className="bg-secondary/30 border-y border-border px-5 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Who this is for</h2>
              <p className="text-muted-foreground leading-relaxed">
                Companies exploring AI adoption, departments that want
                consistent working practices, and product teams learning to
                direct AI coding tools. Evan brings a marketing and business
                perspective alongside hands-on building. The engagement should
                address a business need your team can explain and evaluate.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                What a custom quote covers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The audience, training focus, tools, delivery format, session
                length, exercises, preparation, and any agreed follow-up. Timing
                and participant count are confirmed during scoping. No
                certification, software license, implementation work, or ongoing
                support is included unless explicitly agreed.
              </p>
            </div>
          </div>
        </section>
        <section className="px-5 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-5">
              Your trainer and the next step
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Evan Weber is the founder of Experience Advertising and offers AI
              training, workflow consulting, and hands-on development through
              LearnCowork. His approach connects planning, execution, review,
              testing, and continued improvement.{" "}
              <Link href="/about/" className="text-primary underline">
                Read Evan's background
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              If your company needs a working product built,{" "}
              <Link
                href="/hire-ai-developer/"
                className="text-primary underline"
              >
                hire Evan for an AI-assisted development project
              </Link>
              . Training and development can support each other, with separate
              scopes so everyone understands the work involved.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Prepare with the{" "}
              <Link
                href="/blog/ai-training-plan-for-teams/"
                className="text-primary underline"
              >
                team AI training planning guide
              </Link>{" "}
              and the{" "}
              <Link
                href="/blog/review-ai-generated-work-before-sharing/"
                className="text-primary underline"
              >
                guide to reviewing AI-generated work
              </Link>
              .
            </p>
          </div>
        </section>
        <section className="px-5 pb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Corporate AI workshop questions
            </h2>
            <div className="space-y-7">
              {faqs.map(([q, a]) => (
                <div key={q}>
                  <h3 className="text-lg font-semibold mb-2">{q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ServiceInquiry service="corporate-training" />
      </main>
      <SiteFooter />
    </div>
  );
}
