import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useListPackages, useCreateCheckoutSession } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import CoworkAnalyzer from "@/components/cowork-analyzer";
import { industries } from "@/data/industries";
import { roles } from "@/data/roles";
import SiteFooter from "@/components/site-footer";
// @ts-ignore
import heroBg from "../assets/hero-bg.webp";
// @ts-ignore
import evanProfile from "../assets/evan-profile.jpeg";
import { CheckCircle2, ArrowRight, Code2, LineChart, Briefcase, Users, Bot, Zap, Quote, ShieldCheck, Calendar, Sparkles, FileSearch, Calculator, ClipboardCheck, MessageSquare, Settings2, SearchCheck, Rocket } from "lucide-react";
import { CALENDLY_INTRO } from "@/lib/booking-links";
import { trackEvent } from "@/lib/analytics";
import ComparisonTable from "@/components/comparison-table";
import BookingTrustRow from "@/components/booking-trust-row";
import HomeFaq from "@/components/home-faq";
import RecentBookingsBadge from "@/components/recent-bookings-badge";
import RelatedResources from "@/components/related-resources";

export default function Home() {
  const { data: packagesData, isLoading, error } = useListPackages();
  const createCheckout = useCreateCheckoutSession();
  const { toast } = useToast();
  const [initialIndustry, setInitialIndustry] = useState<{ name: string; slug: string } | null>(null);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("industry");
    if (!slug) return;
    const found = industries.find((i) => i.slug === slug);
    if (found) setInitialIndustry({ name: found.name, slug: found.slug });
  }, []);

  const handleCheckout = (priceId: string, hours: number) => {
    trackEvent("begin_checkout", { price_id: priceId, session_hours: hours });
    createCheckout.mutate(
      {
        data: {
          priceId,
          successUrl: window.location.origin + `/success?pkg=${hours}`,
          cancelUrl: window.location.origin + "/cancel"
        }
      },
      {
        onSuccess: (data) => {
          window.location.href = data.url;
        },
        onError: () => {
          toast({
            title: "Checkout failed",
            description: "Could not start checkout session. Please try again.",
            variant: "destructive"
          });
        }
      }
    );
  };

  const testimonials = [
    {
      tag: "Educator",
      quote: "He is always ready to share endless insider knowledge and to really educate his clients about all the ins and outs of the task at hand. I've learned so much from Evan in just a short time frame. Not only does he have the know-how, he also has a great sense of humor to top it off.",
      name: "Katie S., MBA",
      role: "Digital Marketing Expert & Paid Search Manager",
      featured: true
    },
    {
      tag: "Makes Complex Things Simple",
      quote: "He is a great mix of technical know-how, business intelligence, strategic vision and the ability to explain complex ideas in an easily understandable manner. If there are men who work harder than Evan, I have not met them.",
      name: "Allison Padgett",
      role: "Experienced Digital & Social Marketing Manager",
      featured: true
    },
    {
      tag: "Born Teacher",
      quote: "Evan shared an encyclopedic level of knowledge with me. I took a full page of notes that included numerous actionable insights. Immediately after our call, I implemented his suggestions and improved our results by 100%.",
      name: "Mike Blackwell",
      role: "Account Executive & Principal | EdTech"
    },
    {
      tag: "Meets You Where You Are",
      quote: "He meets you and your business where you are at. His personal approach, learning as much as possible about you so he can take you higher. His expertise is second to none, and there is not a better mentor out there.",
      name: "Krissy Hitz",
      role: "National Fundraising Leader"
    },
    {
      tag: "Patience & Generosity",
      quote: "He's willing to help people that need to get a clue, which no one else even tries to do. Evan does it with grace and patience. His content is truly practical and insightful, he holds nothing back.",
      name: "Rodney Granderson",
      role: "Paid Media Strategist | Google Ads & PPC Specialist"
    },
    {
      tag: "Cuts the Learning Curve",
      quote: "Evan has been my mentor for many years. I thank Evan for cutting out the learning curve so I don't have to lose money through trial and error. He has helped me in all facets of digital marketing. Evan truly is a godsend.",
      name: "Jason Clark",
      role: "Business Owner | South Florida"
    },
    {
      tag: "The Real Deal",
      quote: "Your business will get better the moment he gets his arms around it. In an industry of pretend gurus, Evan is the REAL DEAL.",
      name: "Kelly O'Shea",
      role: "High Growth Entrepreneur"
    },
    {
      tag: "Master of His Craft",
      quote: "Evan is not only a thought leader but he is thoughtful. He puts maximum intention into every project. His knowledge, while wide-ranging, is focused on your individual needs. He executes. He is a Master of his craft.",
      name: "Scott Graham",
      role: "AI PM"
    },
    {
      tag: "Teaches While Delivering",
      quote: "Evan can significantly grow your business while teaching your team world-class skills. A true expert in his field with the insight, experience, and proven track record to yield unprecedented results.",
      name: "Michael Scansaroli",
      role: "Growth & Performance Marketing Executive"
    },
    {
      tag: "Industry Legend",
      quote: "Nobody knows more or services clients better. His career spans the entire evolution of this channel and he should be regarded as one of the best in his field.",
      name: "Matt Kemp",
      role: "Chief Marketing Officer | Private Equity & VC"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <SEO
        title="AI Training and Replit Consulting | Evan Weber"
        description="AI training and Replit consulting by Evan Weber. Build websites, software and mobile apps, or train your team on advanced AI coding workflows."
        canonical="https://learncowork.net/"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do my team members need to be technical?",
              acceptedAnswer: { "@type": "Answer", text: "No. Business training is designed for regular users in marketing, sales, operations, support, leadership, and other roles. Technical sessions are available separately for Codex, Claude Code, Replit, and development teams." },
            },
            {
              "@type": "Question",
              name: "Which AI tools can Evan train us on?",
              acceptedAnswer: { "@type": "Answer", text: "Training can cover ChatGPT Work, OpenAI Codex, Claude Cowork, Claude Code, Replit, ChatGPT apps and connectors, workspace agents, and practical multi-tool workflows for individuals or companies." },
            },
            {
              "@type": "Question",
              name: "Can Evan build a website, software product, or mobile app for us?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. Replit consulting can include product planning, hands-on development, troubleshooting, testing, integrations, and publishing for websites, business software, internal tools, prototypes, and mobile apps." },
            },
            {
              "@type": "Question",
              name: "Can you help us choose between ChatGPT Work, Codex, and Claude Cowork?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. Tool selection can be part of the session. The right choice depends on the work, team, existing software, security requirements, and whether the primary need is business productivity, software development, or both." },
            },
            {
              "@type": "Question",
              name: "How is this different from a YouTube tutorial or course?",
              acceptedAnswer: { "@type": "Answer", text: "Generic tutorials show someone else's workflow. Evan trains your team using your actual work, tools, files, and goals, then helps you build a workflow you can keep improving after the session." },
            },
            {
              "@type": "Question",
              name: "What if I'm a solo professional, not a team?",
              acceptedAnswer: { "@type": "Answer", text: "The 1-hour session works well for individuals. Solo professionals can focus on personal workflows, research, documents, reporting, coding, content, or tool setup." },
            },
            {
              "@type": "Question",
              name: "What if the session isn't what I expected?",
              acceptedAnswer: { "@type": "Answer", text: "If your first hour with Evan is not worth the price, contact Evan for a full refund under the satisfaction guarantee described on the booking page." },
            },
            {
              "@type": "Question",
              name: "Can I expense this through my company?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. You'll receive a Stripe receipt immediately after checkout that's expensable as professional development or training. If you need an itemized invoice, just reply to your receipt and Evan will send one." },
            },
            {
              "@type": "Question",
              name: "What happens after I book?",
              acceptedAnswer: { "@type": "Answer", text: "You will receive scheduling and intake steps so Evan can prepare around your role, tools, experience level, and desired workflow before the session." },
            },
          ],
        }}
      />
      <SiteNav />

      {/* Hero Section */}
      <section className="relative flex items-center pt-20 pb-10 md:pt-24 md:pb-12 px-5 md:px-12 border-b border-border">
        <div className="absolute inset-0 z-0 opacity-20">
          {heroBg && (
            <img
              src={heroBg}
              alt=""
              width={1408}
              height={768}
              fetchPriority="low"
              decoding="async"
              className="w-full h-full object-cover grayscale"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        </div>

        <div className="container max-w-6xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs md:text-sm font-medium mb-4 md:mb-8 border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              Live AI training and workflow implementation
            </div>

            <h1 className="text-[2.1rem] leading-[1.1] md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 md:mb-8 text-balance">
              Build with AI.<br />
              <span className="text-primary">Train your team to do it right.</span><br />
              <span className="text-muted-foreground">From workflow to working product.</span>
            </h1>

            <p className="text-base md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-6 md:mb-12">
              I build websites, software products, business systems, and mobile apps with Replit and AI coding tools. I also train individuals and teams on Replit, Codex, Claude Code, ChatGPT Work, Claude Cowork, and the workflows that turn AI into real business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 h-12 md:h-14" onClick={() => document.getElementById('training-tracks')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Training
              </Button>
              <Link href="/ai-workflow-consulting"><Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 h-12 md:h-14">Plan a Team Rollout</Button></Link>
            </div>

            <a
              href={CALENDLY_INTRO}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("select_intro_call", { placement: "homepage_hero" })}
              className="inline-flex items-center gap-2 mt-5 md:mt-6 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors group"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span>Not sure where to start? <strong className="text-foreground group-hover:text-primary">Book a free 15-minute intro call</strong></span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 md:py-12 px-5 border-b border-border bg-secondary/40">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center">
            {[
              { number: "25+", label: "Years in Digital Marketing" },
              { number: "400+", label: "Companies Helped Grow" },
              { number: "20+", label: "AI Projects Built" },
              { number: "100+", label: "LinkedIn Recommendations" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-5xl font-black text-primary mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="training-tracks" className="py-14 md:py-20 px-5 md:px-12 border-b border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Choose Your Training Path</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The right AI tool depends on the work</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">Start with one platform, compare two side by side, or build a practical workflow across your existing stack.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { href: "/chatgpt-work-training", icon: MessageSquare, title: "ChatGPT Work Training", label: "Business productivity", text: "Create documents, spreadsheets, presentations, research, and multi-step deliverables with OpenAI's Work agent." },
              { href: "/codex-training", icon: Bot, title: "OpenAI Codex Training", label: "Agents and technical work", text: "Use the Codex app, projects, agents, worktrees, skills, automations, testing, and GitHub workflows." },
              { href: "/claude-cowork-training", icon: Sparkles, title: "Claude Cowork Training", label: "Agentic desktop work", text: "Set up Cowork, connect tools, work with files, build role-specific workflows, and create a team playbook." },
              { href: "/ai-coding-training", icon: Code2, title: "AI Coding and Vibe Coding", label: "Build and ship", text: "Learn Claude Code, Replit, Codex, GitHub Copilot, and safer AI-assisted development practices." },
              { href: "/replit-consulting", icon: Rocket, title: "Replit Consulting and Training", label: "Websites, software and apps", text: "Build a real Replit product with Evan or train yourself and your team to direct, test, and publish AI-coded work." },
              { href: "/ai-workflow-consulting", icon: Settings2, title: "AI Workflow Implementation", label: "Done with you", text: "Audit workflows, choose the stack, build pilots, document guardrails, train the team, and measure adoption." },
              { href: "/aeo-geo-training", icon: SearchCheck, title: "SEO, AEO and GEO Training", label: "Search and LLM visibility", text: "Improve the content, entities, evidence, technical access, and authority signals that search engines and LLMs rely on." },
            ].map((track, index) => (
              <Link key={track.href} href={track.href}>
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (index % 3) * 0.06 }} className="group h-full p-6 md:p-7 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                  <track.icon className="w-6 h-6 text-primary mb-4" />
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{track.label}</div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{track.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{track.text}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">See details <ArrowRight className="w-4 h-4" /></span>
                </motion.div>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">Sessions can also cover ChatGPT apps and connectors, workspace agents, Microsoft Copilot, Gemini, Perplexity, and mixed-tool workflows when those platforms fit your team.</p>
        </div>
      </section>

      {/* AI Report Analyzer */}
      {initialIndustry && (
        <div className="px-5 md:px-12 pt-6 md:pt-10 bg-secondary/20 border-b border-transparent -mb-px">
          <div className="container max-w-4xl mx-auto">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 px-5 py-3 text-sm md:text-base flex items-start sm:items-center gap-3">
              <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
              <span><strong>Welcome from {initialIndustry.name}.</strong> The report below is pre-tuned for your industry.</span>
            </div>
          </div>
        </div>
      )}
      <CoworkAnalyzer
        defaultIndustry={initialIndustry?.name ?? ""}
        headline="Where could AI save time or improve output in your work?"
        subheadline="Share your website, role, or industry. Get a free report with practical workflow ideas you can evaluate before booking anything."
      />

      {/* Meet Evan Section */}
      <section id="about" className="py-12 md:py-24 px-5 md:px-12 border-b border-border bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Your Trainer</p>
              <h2 className="text-2xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">Meet Evan Weber</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                I've spent 25 years in the trenches of digital marketing, building companies, scaling revenue, and teaching hundreds of people along the way. I founded Experience Advertising in 2007 and have partnered with over 400 companies to drive growth through digital strategy.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                When AI tools emerged, I dove in. I've built 20+ projects using Claude Code, Codex, Replit, and related tools, including websites, software products, business systems, and mobile experiences. I also teach individuals and teams how to direct, test, and publish AI-coded work at an advanced level.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                But here's what makes me different as a trainer: I don't just know the tools. I know how to teach them. Over 100 colleagues and clients have publicly recommended me on LinkedIn, and the #1 thing they say is that I meet people where they are, make complex things simple, and get them to results fast.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={evanProfile}
                  alt="Evan Weber"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shadow-md shrink-0"
                  loading="lazy"
                  width={96}
                  height={96}
                />
                <div>
                  <div className="text-xl md:text-2xl font-bold">Evan Weber</div>
                  <div className="text-muted-foreground text-sm mt-1">AI Coding Enthusiast · Digital Marketing Expert<br />Founder, Experience Advertising · Miami, FL</div>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  { title: "Founder & CEO, Experience Advertising", desc: "19+ years running a full-service digital agency. Partnered with 400+ companies across every vertical." },
                  { title: "Founder, AffiliateFinders.com", desc: "Built an AI-powered platform with 10,000+ pre-vetted affiliates, AI profile scoring, and advanced search." },
                  { title: "AI Product Builder and Trainer", desc: "20+ projects built with Claude Code, Codex, Replit, and agentic workflows, plus practical training for individuals and teams." }
                ].map((card, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-3.5 md:p-4">
                    <div className="font-semibold text-sm mb-1">{card.title}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{card.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Breakdown Section */}
      <section id="departments" className="py-12 md:py-24 px-5 md:px-12 border-b border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">Practical AI workflows for every department</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl">
              The platform may change by team. The goal stays the same: improve real work with clear human review and a workflow people will actually use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: "Marketing",
                icon: <LineChart className="w-5 h-5 md:w-6 md:h-6" />,
                tagline: "More output. Less time staring at a blank doc.",
                uses: [
                  "Write and A/B test ad copy, headlines, and CTAs in minutes",
                  "Analyze campaign data and get prioritized improvement recommendations",
                  "Generate full content briefs, social calendars, and email sequences on-brand",
                  "Summarize competitor research and trend reports without reading everything"
                ]
              },
              {
                title: "Sales",
                icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
                tagline: "Research faster. Write better. Close more.",
                uses: [
                  "Research any prospect or company in under a minute before a call",
                  "Draft personalized outbound that sounds human, not like a template",
                  "Generate follow-ups, proposals, and objection responses automatically",
                  "Prep for discovery calls with instant summaries of pain points and context"
                ]
              },
              {
                title: "Operations",
                icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
                tagline: "Turn chaos into clean process, automatically.",
                uses: [
                  "Convert meeting notes and recordings into clean SOPs and action items",
                  "Build and maintain internal knowledge bases without a dedicated writer",
                  "Automate recurring status reports, updates, and dashboards",
                  "Analyze workflow data to surface bottlenecks before they become problems"
                ]
              },
              {
                title: "Customer Support",
                icon: <Bot className="w-5 h-5 md:w-6 md:h-6" />,
                tagline: "Handle more tickets. Burn out less.",
                uses: [
                  "Draft accurate, on-brand replies to support tickets in seconds",
                  "Summarize long threads instantly for faster handoffs between agents",
                  "Build a self-updating knowledge base from existing support history",
                  "Spot recurring issues by analyzing patterns across ticket data"
                ]
              },
              {
                title: "Dev & AI Coding",
                icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
                tagline: "Ship faster. Stop waiting on backlogs.",
                badge: "Specialized track",
                uses: [
                  "Code reviews, refactoring, and debugging with Claude Code, live",
                  "Build websites, business software, internal tools, and mobile apps with Replit",
                  "Write, document, and test functions faster with Codex and GitHub Copilot",
                  "Use AI agents to handle routine dev tasks end-to-end"
                ]
              },
              {
                title: "Leadership",
                icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
                tagline: "Make better decisions. Communicate more clearly.",
                uses: [
                  "Summarize lengthy reports and board materials before every meeting",
                  "Draft strategic memos, OKRs, and company comms in a fraction of the time",
                  "Get AI-assisted analysis on decisions, trade-offs, and second-order effects",
                  "Prep for investor and board conversations with structured AI-generated briefings"
                ]
              }
            ].map((dept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-5 md:p-8 border border-border bg-card hover:border-primary/40 transition-colors group rounded-xl relative"
              >
                {'badge' in dept && dept.badge && (
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {dept.badge}
                  </span>
                )}
                <div className="flex items-start gap-3 md:gap-4 mb-4">
                  <div className="w-9 h-9 md:w-11 md:h-11 bg-secondary rounded-lg flex items-center justify-center shrink-0 text-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                    {dept.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">{dept.title}</h3>
                    <p className="text-xs md:text-sm text-primary font-medium mt-0.5">{dept.tagline}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {dept.uses.map((use, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-muted-foreground text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-24 px-5 md:px-12 border-b border-border bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-8 md:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What People Say</p>
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">Proof I Can Teach Anyone</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl">
              Curated from 100+ LinkedIn recommendations. These are the ones that show why Evan is the right trainer for AI.
            </p>
          </div>

          {/* Featured testimonials */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            {testimonials.filter(t => t.featured).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-primary/30 rounded-xl p-5 md:p-8 relative"
              >
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/30 mb-3 md:mb-4" />
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3 md:mb-4">{t.tag}</span>
                <p className="text-foreground leading-relaxed mb-4 md:mb-6 italic text-sm md:text-base">"{t.quote}"</p>
                <div className="border-t border-border pt-3 md:pt-4">
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Grid testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {testimonials.filter(t => !t.featured).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-card border border-border rounded-xl p-4 md:p-6 flex flex-col hover:border-primary/30 transition-colors"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3 self-start">{t.tag}</span>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-3 md:mb-4 italic">"{t.quote}"</p>
                <div className="border-t border-border pt-3">
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-14 md:py-20 px-5 md:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">Training for every industry</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">AI training works best when the examples match your business. Choose an industry for a more relevant starting point.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`}>
                <div className="group border border-border rounded-xl px-4 py-4 text-center hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer">
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">{ind.name}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 mb-5">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Or browse by role</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {roles.map((r) => (
              <Link key={r.slug} href={`/roles/${r.slug}`}>
                <span className="inline-block px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer">
                  {r.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section id="tools" className="py-14 md:py-20 px-5 md:px-12 border-b border-border bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">Free tools to find your best AI starting point</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">No credit card, no sales call. Each one takes a couple of minutes and gives you something concrete.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { href: "/ai-report", icon: Sparkles, title: "Free AI Report", body: "Enter your website and get five practical workflow ideas matched to your business." },
              { href: "/job-description-analyzer", icon: FileSearch, title: "Job Description Analyzer", body: "Paste a job description and sort tasks into AI-led, AI-assisted, and human-led work." },
              { href: "/ai-time-savings-calculator", icon: Calculator, title: "Time-Savings Calculator", body: "Estimate the weekly time tied up in repeated research, documents, reporting, and admin work." },
              { href: "/ai-readiness-quiz", icon: ClipboardCheck, title: "AI Readiness Quiz", body: "Answer eight questions and see whether your team is ready for a useful AI rollout." },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href}>
                <div className="group h-full bg-background border border-border rounded-2xl p-6 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <tool.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{tool.body}</p>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-primary mt-4">
                    Try it free <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Packages Section */}
      <section id="pricing" className="py-14 md:py-32 px-5 md:px-12 bg-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-3 md:mb-6">Ready to move faster?</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Individuals and small teams can book directly. Companies planning a broader rollout can start with an implementation call.
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Skeleton className="h-[360px] w-full rounded-xl" />
              <Skeleton className="h-[360px] w-full rounded-xl" />
            </div>
          ) : error ? (
            <div className="text-center p-10 border border-destructive/30 bg-destructive/10 text-destructive rounded-xl">
              <p>Failed to load packages. Please try refreshing.</p>
            </div>
          ) : packagesData?.data ? (
            <>
            <div className="flex justify-center mb-6 md:mb-8">
              <RecentBookingsBadge />
            </div>
            <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto items-start">
              {packagesData.data.map((pkg, i) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className={`relative flex flex-col p-6 md:p-8 rounded-xl border ${
                    pkg.hours > 1
                      ? "border-primary/60 bg-accent shadow-lg"
                      : "border-border bg-card shadow-sm"
                  }`}
                >
                  {pkg.hours > 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{pkg.description}</p>
                  </div>

                  <div className="mb-5 md:mb-8">
                    <span className="text-4xl md:text-5xl font-black">${pkg.unitAmount / 100}</span>
                    {pkg.hours > 1 && <span className="text-muted-foreground ml-2">total</span>}
                  </div>

                  <ul className="space-y-3 mb-6 md:mb-8 flex-grow">
                    <li className="flex items-center gap-3 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{pkg.hours} Hour{pkg.hours > 1 ? 's' : ''} live screen-share with Evan</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>Workflow analysis tailored to your team</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>Actionable setup for the AI tools covered</span>
                    </li>
                  </ul>

                  <Button
                    size="lg"
                    className="w-full h-12 md:h-14 text-base md:text-lg"
                    variant={pkg.hours > 1 ? "default" : "outline"}
                    onClick={() => handleCheckout(pkg.priceId, pkg.hours)}
                    disabled={createCheckout.isPending}
                  >
                    {createCheckout.isPending ? "Starting checkout..." : "Book Now"}
                    {!createCheckout.isPending && <ArrowRight className="w-5 h-5 ml-2" />}
                  </Button>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-5 text-xs md:text-sm text-muted-foreground">
              <ShieldCheck className="inline w-4 h-4 text-primary mr-1.5 -mt-0.5" />
              <strong className="text-foreground">100% satisfaction guarantee.</strong> Not worth it? Full refund, no questions.
            </div>
            <BookingTrustRow />
            <ComparisonTable />
            <div className="mt-10 p-6 md:p-8 border border-primary/30 bg-primary/5 rounded-2xl text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Need implementation across a department or company?</h3>
              <p className="text-muted-foreground mb-5 max-w-2xl mx-auto">Start with a workflow audit and rollout plan instead of buying a general training session.</p>
              <Link href="/ai-workflow-consulting"><Button variant="outline" size="lg">Explore AI Workflow Consulting <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
            </div>
            </>
          ) : null}
        </div>
      </section>

      <HomeFaq />

      <RelatedResources
        heading="New to agentic AI? Start here"
        articleSlugs={["what-is-claude-cowork", "can-ai-do-my-job"]}
        glossarySlug="agentic-ai"
      />

      <SiteFooter />
    </div>
  );
}
