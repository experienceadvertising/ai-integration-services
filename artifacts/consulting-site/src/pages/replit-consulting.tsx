import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe2,
  GraduationCap,
  Rocket,
  ShieldCheck,
  Smartphone,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { CALENDLY_INTRO } from "@/lib/booking-links";
import { trackEvent } from "@/lib/analytics";

const faqs = [
  {
    q: "What can Evan build with Replit?",
    a: "Evan uses Replit and related AI coding tools to build websites, landing pages, internal tools, dashboards, SaaS products, business software, prototypes, APIs, automations, and mobile apps. The right architecture depends on the users, data, integrations, security needs, and launch plan.",
  },
  {
    q: "Do you offer Replit consulting and hands-on development?",
    a: "Yes. Evan can help shape the product, build or improve the application, troubleshoot a difficult Replit project, prepare it for publishing, and create a practical plan for continued development.",
  },
  {
    q: "Can you train a non-technical founder to use Replit Agent?",
    a: "Yes. Training starts at the participant's current level and focuses on planning, prompting, reviewing, testing, debugging, checkpoints, and publishing. The goal is not blind prompting. It is learning how to direct the work and judge the result.",
  },
  {
    q: "Can you train a development or product team?",
    a: "Yes. Team training can cover shared project standards, specifications, Agent workflows, GitHub coordination, testing, review, permissions, publishing, and deciding which work still needs an experienced engineer.",
  },
  {
    q: "Can Replit be used for mobile apps?",
    a: "Yes. Replit supports phone-first projects and mobile app workflows using tools such as Expo and React Native. Mobile work still requires device testing and may require Apple, Google Play, or Expo accounts for store distribution.",
  },
  {
    q: "How do we start?",
    a: "Book a short intro call for a consulting project or choose a live training session. Bring the idea, existing Replit project, repository, requirements, or workflow you want to improve.",
  },
];

export default function ReplitConsulting() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Replit Consulting and Training | Evan Weber"
        description="Replit consulting and advanced training for websites, software and mobile apps. Build a real product or teach your team to use Replit Agent well."
        canonical="https://learncowork.net/replit-consulting"
        ogImage="https://learncowork.net/og-ai-coding-training.png"
        keywords="Replit consulting, Replit consultant, Replit training, Replit Agent training, Replit developer, vibe coding consultant, AI coding training, build app with Replit, Replit mobile app"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://learncowork.net/replit-consulting#service",
              name: "Replit Consulting and Training",
              provider: { "@id": "https://learncowork.net/#evan" },
              url: "https://learncowork.net/replit-consulting",
              areaServed: "Worldwide",
              availableChannel: { "@type": "ServiceChannel", serviceType: "Remote consulting and live training" },
              description: "Replit consulting, application development, troubleshooting, publishing support, and advanced Replit Agent training for individuals and teams building websites, software, and mobile apps.",
              offers: [
                { "@type": "Offer", name: "1-Hour Replit Training Session", price: "300", priceCurrency: "USD" },
                { "@type": "Offer", name: "4-Hour Replit Workshop", price: "1000", priceCurrency: "USD" },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ],
        }}
      />
      <SiteNav />

      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-border bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <Rocket className="w-4 h-4" /> Replit Consulting and Training
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Build Real Products With Replit.<br />
              <span className="text-primary">Then Learn How to Keep Building.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
              I help founders and companies plan, build, fix, and publish websites, software, internal tools, and mobile apps with Replit. I also train individuals and teams to use Replit Agent and AI coding workflows at an advanced, production-minded level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_INTRO} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("select_intro_call", { placement: "replit_consulting_hero" })}>
                <Button size="lg" className="text-lg px-8 h-14">Discuss a Replit Project <ArrowRight className="w-5 h-5 ml-2" /></Button>
              </a>
              <Link href="/#pricing">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">Book Replit Training</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Two Ways to Work With Evan</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">Get hands-on help building the product, or learn the operating system behind better AI-assisted development.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-card border border-border rounded-xl">
              <Wrench className="w-8 h-8 text-primary mb-5" />
              <h3 className="text-2xl font-bold mb-3">Replit Consulting and Development</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">Bring an idea, a stalled build, or an existing application. Evan can help scope it, improve it, connect the pieces, test the important flows, and prepare it for a real launch.</p>
              <ul className="space-y-3">
                {["Product scoping and technical planning", "Hands-on builds and feature development", "Troubleshooting and project rescue", "Databases, APIs, authentication, and integrations", "Publishing, custom domains, and launch readiness"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-card border border-border rounded-xl">
              <GraduationCap className="w-8 h-8 text-primary mb-5" />
              <h3 className="text-2xl font-bold mb-3">Advanced Replit Training</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">Learn how to direct Agent clearly, evaluate its plan, control scope, test the result, recover when a build goes sideways, and turn one successful project into a repeatable team workflow.</p>
              <ul className="space-y-3">
                {["Better specifications and prompt sequences", "Plan, Build, and iteration workflows", "Checkpoints, GitHub, testing, and review", "Debugging without random prompt loops", "Team standards, permissions, and handoff"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What We Can Build</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">Replit can support the full path from a first prompt to a tested, published product. The build should still start with a clear user, problem, and definition of done.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Globe2, title: "Websites", text: "Company sites, landing pages, directories, lead-generation sites, portals, and interactive marketing experiences." },
              { icon: Code2, title: "Software", text: "SaaS products, dashboards, client portals, internal systems, assessments, calculators, APIs, and workflow tools." },
              { icon: Smartphone, title: "Mobile Apps", text: "Phone-first apps, prototypes, field tools, booking flows, trackers, and Expo or React Native projects for iOS and Android." },
              { icon: Rocket, title: "MVPs and Prototypes", text: "Test a business idea, demonstrate a workflow, collect feedback, and learn what deserves a larger production investment." },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="p-6 bg-card border border-border rounded-xl">
                <item.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">AI Coding at a Higher Level</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">The advantage is not typing a clever prompt. It is running a disciplined build process where AI moves quickly and a capable human stays responsible for the product.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Users, title: "Direction", text: "Translate the business goal into users, workflows, screens, data, constraints, acceptance criteria, and a realistic release sequence." },
              { icon: ShieldCheck, title: "Control", text: "Use checkpoints, version control, permissions, test data, human approvals, and smaller changes to reduce expensive mistakes." },
              { icon: CheckCircle2, title: "Verification", text: "Test the critical flows, inspect what changed, check mobile behavior, validate integrations, and confirm the published version instead of trusting a completion message." },
            ].map((item) => (
              <div key={item.title} className="p-7 bg-card border border-border rounded-xl">
                <item.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Built From Real Product Work</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-5">Evan has built more than 20 AI-assisted projects across marketing, SaaS, lead generation, assessments, reporting, directories, and business operations. That experience shapes both the consulting and the training.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">You learn the parts that matter after the first impressive demo: scope control, data models, integrations, testing, mobile behavior, publishing, fixes, and continued ownership.</p>
            </div>
            <div className="p-7 bg-card border border-border rounded-xl">
              <h3 className="font-bold text-xl mb-4">Related Training</h3>
              <div className="space-y-3">
                <Link href="/ai-coding-training"><span className="flex items-center justify-between text-primary hover:underline cursor-pointer">AI Coding and Vibe Coding <ArrowRight className="w-4 h-4" /></span></Link>
                <Link href="/codex-training"><span className="flex items-center justify-between text-primary hover:underline cursor-pointer">OpenAI Codex Training <ArrowRight className="w-4 h-4" /></span></Link>
                <Link href="/ai-workflow-consulting"><span className="flex items-center justify-between text-primary hover:underline cursor-pointer">AI Workflow Consulting <ArrowRight className="w-4 h-4" /></span></Link>
              </div>
              <a href="https://docs.replit.com/build/welcome" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mt-6">Current Replit product documentation <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Replit Consulting Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border pb-8">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-card">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Bring the Idea or the Existing Build</h2>
          <p className="text-xl text-muted-foreground mb-10">We can build it, fix it, prepare it for launch, or teach you and your team how to take control of the process.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={CALENDLY_INTRO} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("select_intro_call", { placement: "replit_consulting_footer" })}><Button size="lg" className="text-lg px-8 h-14">Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
            <Link href="/#pricing"><Button size="lg" variant="outline" className="text-lg px-8 h-14">Book Training</Button></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
