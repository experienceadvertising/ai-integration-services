import { motion } from "framer-motion";
import { useListPackages, useCreateCheckoutSession } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
// @ts-ignore
import heroBg from "../assets/hero-bg.png";
// @ts-ignore
import evanProfile from "../assets/evan-profile.jpeg";
import { CheckCircle2, ArrowRight, Code2, LineChart, Briefcase, Users, Bot, Zap, Quote } from "lucide-react";

export default function Home() {
  const { data: packagesData, isLoading, error } = useListPackages();
  const createCheckout = useCreateCheckoutSession();
  const { toast } = useToast();

  const handleCheckout = (priceId: string) => {
    createCheckout.mutate(
      {
        data: {
          priceId,
          successUrl: window.location.origin + "/success",
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
      quote: "He meets you and your business where you are at. His personal approach — learning as much as possible about you so he can take you higher. His expertise is second to none, and there is not a better mentor out there.",
      name: "Krissy Hitz",
      role: "National Fundraising Leader"
    },
    {
      tag: "Patience & Generosity",
      quote: "He's willing to help people that need to get a clue, which no one else even tries to do — Evan does it with grace and patience. His content is truly practical and insightful, he holds nothing back.",
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
        title="Claude Cowork Training for Teams | Evan Weber AI Trainer"
        description="Live Claude Cowork training for business teams by Evan Weber — 25-year digital marketing veteran and daily AI power user. Book a 1-hour or 4-hour session."
        canonical="https://evanweberai.com/"
      />
      <SiteNav />

      {/* Hero Section */}
      <section className="relative flex items-center pt-20 pb-10 md:pt-24 md:pb-12 px-5 md:px-12 border-b border-border">
        <div className="absolute inset-0 z-0 opacity-20">
          {heroBg && <img src={heroBg} alt="" className="w-full h-full object-cover grayscale" />}
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
              Live 1-on-1 training · Limited spots available
            </div>

            <h1 className="text-[2.1rem] leading-[1.1] md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 md:mb-8 text-balance">
              Your team needs<br />
              <span className="text-primary">Claude Cowork.</span><br />
              <span className="text-muted-foreground">Let me show them how.</span>
            </h1>

            <p className="text-base md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-6 md:mb-12">
              Claude Cowork is the most powerful AI productivity tool available — and most teams haven't touched it. I'll get your people using it fluently, in their actual workflow, in a single session.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 h-12 md:h-14" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Book a Session
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 h-12 md:h-14" onClick={() => document.getElementById('departments')?.scrollIntoView({ behavior: 'smooth' })}>
                Who it's for
              </Button>
            </div>
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
                I've spent 25 years in the trenches of digital marketing — building companies, scaling revenue, and teaching hundreds of people along the way. I founded Experience Advertising in 2007 and have partnered with over 400 companies to drive growth through digital strategy.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                When AI tools emerged, I didn't watch from the sidelines — I dove in. I've built 20+ projects using Claude Code, and I use Claude Cowork and AI agents every single day to run my businesses. I built AffiliateFinders.com, Publisher Finders, and Digital Marketing U, all leveraging AI-powered workflows.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                But here's what makes me different as a trainer: I don't just know the tools — I know how to teach them. Over 100 colleagues and clients have publicly recommended me on LinkedIn, and the #1 thing they say is that I meet people where they are, make complex things simple, and get them to results fast.
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
                  { title: "Founder, Digital Marketing U", desc: "11+ years creating courses and education. Teaching is in my DNA — not an afterthought." },
                  { title: "Daily AI Builder", desc: "20+ projects built with Claude Code and Cowork. I live in these tools so you don't have to figure them out alone." }
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
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">Claude Cowork works for every department</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl">
              That's the whole point — it's not just for devs. Real use cases, real hours saved, across every role on your team.
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
                tagline: "Turn chaos into clean process — automatically.",
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
                  "Code reviews, refactoring, and debugging with Claude Code — live",
                  "Build internal tools and automations in Replit without a full dev cycle",
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
              Curated from 100+ LinkedIn recommendations — these are the ones that show why Evan is the right trainer for AI.
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

      {/* Pricing / Packages Section */}
      <section id="pricing" className="py-14 md:py-32 px-5 md:px-12 bg-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-3 md:mb-6">Ready to move faster?</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a live session with Evan directly below. Payment is secure via Stripe.
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
                      <span>Actionable Claude Cowork setup</span>
                    </li>
                  </ul>

                  <Button
                    size="lg"
                    className="w-full h-12 md:h-14 text-base md:text-lg"
                    variant={pkg.hours > 1 ? "default" : "outline"}
                    onClick={() => handleCheckout(pkg.priceId)}
                    disabled={createCheckout.isPending}
                  >
                    {createCheckout.isPending ? "Starting checkout..." : "Book Now"}
                    {!createCheckout.isPending && <ArrowRight className="w-5 h-5 ml-2" />}
                  </Button>
                </motion.div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t border-border text-center text-muted-foreground px-5">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src={evanProfile} alt="Evan Weber" className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover" />
          <span className="font-semibold text-foreground text-sm md:text-base">Evan Weber</span>
        </div>
        <p className="text-xs md:text-sm">AI Training by Evan Weber · Experience Advertising, Inc. · Fort Lauderdale, FL</p>
        <p className="text-xs md:text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}
