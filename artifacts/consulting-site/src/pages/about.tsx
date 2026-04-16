import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
// @ts-ignore
import evanProfile from "../assets/evan-profile.jpeg";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="About Evan Weber, AI Trainer and Digital Marketing Veteran"
        description="25 years in digital marketing. Founder of Experience Advertising. Daily Claude Cowork and Claude Code user. 400+ companies helped. 100+ LinkedIn recommendations. Meet your AI trainer."
        canonical="https://learncowork.net/about"
      />
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-border bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="shrink-0"
            >
              <img
                src={evanProfile}
                alt="Evan Weber, AI Trainer and Digital Marketing Expert"
                className="w-48 h-48 rounded-2xl object-cover shadow-lg"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Your Trainer</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Evan Weber</h1>
              <p className="text-xl text-muted-foreground mb-2">AI Coding Enthusiast · Digital Marketing Expert · Agency Founder</p>
              <p className="text-muted-foreground mb-6">Miami-Fort Lauderdale, FL · 40,000+ LinkedIn Followers</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/worldsgreatestmarketer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  LinkedIn Profile <ExternalLink className="w-4 h-4" />
                </a>
                <span className="text-border">·</span>
                <a
                  href="https://experienceadvertising.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Experience Advertising <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-b border-border bg-card">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "25+", label: "Years in Digital Marketing" },
              { number: "400+", label: "Companies Helped" },
              { number: "20+", label: "AI Projects Built" },
              { number: "100+", label: "LinkedIn Recommendations" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-black text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">The Background</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I've spent 25 years in the trenches of digital marketing, building companies, scaling revenue, and teaching hundreds of people along the way. I founded Experience Advertising in 2007 and have partnered with over 400 companies to drive growth through digital strategy, paid media, and affiliate marketing.
                </p>
                <p>
                  When AI coding tools emerged, I didn't watch from the sidelines. I dove in. I've now built 20+ projects using Claude Code, Replit, and related AI tools, and I use Claude Cowork and AI agents every single day to run my businesses.
                </p>
                <p>
                  I built AffiliateFinders.com (an AI-powered affiliate marketplace with 10,000+ pre-vetted partners), Publisher Finders, and leveraging AI-powered development workflows. These aren't demo projects. They're live businesses I run.
                </p>
                <p>
                  But here's what makes me different as a trainer: I know how to teach. Over 100 colleagues, clients, and partners have publicly recommended me on LinkedIn, and the #1 thing they say is that I meet people where they are, make complex things simple, and get them to results fast. That's exactly what I'll do for you with AI.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">What I've Built</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Experience Advertising",
                    meta: "Founder & CEO · 2007–Present",
                    desc: "Full-service digital agency. 400+ clients across every vertical. Google Ads, Meta Ads, LinkedIn Ads, affiliate marketing, and now AI strategy."
                  },
                  {
                    title: "AffiliateFinders.com",
                    meta: "Founder · AI-Powered Platform",
                    desc: "Built an AI-powered platform with 10,000+ pre-vetted affiliates, AI profile scoring, smart matching, and advanced search, using Claude Code and Replit."
                  },
                  {
                    title: "Publisher Finders",
                    meta: "Founder · AI-Powered Discovery",
                    desc: "Publisher discovery platform connecting brands with content publishers at scale, built with AI-assisted development."
                  }
                ].map((project, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-bold mb-0.5">{project.title}</h3>
                    <p className="text-xs text-primary font-medium mb-2">{project.meta}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Train */}
      <section className="py-20 px-6 lg:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why I Train</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-12">
            Teaching isn't an afterthought for me. It's been a core part of how I work for over a decade.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "I Meet You Where You Are",
                desc: "Whether you're a total beginner or a seasoned developer, I tailor my teaching to your level and your specific workflows. No generic slideshows."
              },
              {
                num: "02",
                title: "Practitioner, Not Theorist",
                desc: "I build with these tools every single day. You're learning from someone with 20+ real AI projects shipped, not someone who read the documentation."
              },
              {
                num: "03",
                title: "I Care If You Succeed",
                desc: "100+ people went out of their way to publicly say I'm generous, patient, and genuinely invested in their success. That's how I run every training."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-xl">
                <div className="text-3xl font-black text-primary/30 mb-3">{item.num}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Recommendations */}
      <section className="py-20 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What 100+ People Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-12">A few highlights from Evan's LinkedIn recommendations.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                quote: "Evan can significantly grow your business while teaching your team world-class skills. A true expert in his field with the insight, experience, and proven track record to yield unprecedented results.",
                name: "Michael Scansaroli",
                role: "Growth & Performance Marketing Executive"
              },
              {
                quote: "He is a great mix of technical know-how, business intelligence, strategic vision and the ability to explain complex ideas in an easily understandable manner.",
                name: "Allison Padgett",
                role: "Digital & Social Marketing Manager"
              },
              {
                quote: "Evan is not only a thought leader but he is thoughtful. He puts maximum intention into every project. His knowledge, while wide-ranging, is focused on your individual needs. He executes. He is a Master of his craft.",
                name: "Scott Graham",
                role: "AI PM"
              },
              {
                quote: "In an industry of pretend gurus, Evan is the REAL DEAL.",
                name: "Kelly O'Shea",
                role: "High Growth Entrepreneur"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col"
              >
                <p className="text-muted-foreground italic text-sm leading-relaxed flex-grow mb-4">"{t.quote}"</p>
                <div className="border-t border-border pt-3">
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-card">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to work with Evan?</h2>
          <p className="text-xl text-muted-foreground mb-10">Choose a training session and book directly online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#pricing">
              <Button size="lg" className="text-lg px-8 h-14">
                Book a Session <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/claude-cowork-training">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                Claude Cowork Training
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
