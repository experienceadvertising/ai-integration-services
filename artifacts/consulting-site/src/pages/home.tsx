import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useListPackages, useCreateCheckoutSession } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
// @ts-ignore
import heroBg from "../assets/hero-bg.png";
import { CheckCircle2, ArrowRight, Code2, LineChart, Briefcase, Users, Bot, Zap } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center pt-24 pb-12 px-6 lg:px-12 border-b border-border">
        <div className="absolute inset-0 z-0 opacity-20">
          {heroBg && <img src={heroBg} alt="" className="w-full h-full object-cover grayscale" />}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        </div>
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Live 1-on-1 training · Limited spots available
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 text-balance">
              Your team needs<br />
              <span className="text-primary">Claude Cowork.</span><br />
              <span className="text-muted-foreground">Let me show them how.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              Claude Cowork is the most powerful AI productivity tool available — and most teams haven't touched it. I'll get your people using it fluently, in their actual workflow, in a single session.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 h-14" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Book a Session
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14" onClick={() => document.getElementById('departments')?.scrollIntoView({ behavior: 'smooth' })}>
                Who it's for
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem / Approach Section */}
      <section className="py-24 px-6 lg:px-12 border-b border-border bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Claude Cowork changes how work gets done. I'll show your team.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I use Claude Cowork every day across writing, research, analysis, planning, and strategy. The difference it makes isn't incremental — it's transformational. And it's one of the few AI tools that genuinely works for everyone, not just technical teams.
              </p>
              <p className="text-lg text-muted-foreground">
                For teams with developers, I also train on AI coding with Claude Code, Replit, and Codex. But Claude Cowork is where we start — because it's the tool that unlocks productivity across your entire company.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border p-8 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
              <h3 className="text-xl font-semibold mb-6">Why me</h3>
              <ul className="space-y-4">
                {[
                  "Daily Claude Cowork user — I know exactly what moves the needle and what doesn't",
                  "Also trained in Claude Code, Replit, Codex, and GitHub Copilot for dev teams",
                  "Shows 'here's how this saves 2 hours a day' — not 'here's a prompt to memorize'",
                  "Experience spans marketing, sales, ops, support, dev, and leadership"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Breakdown Section */}
      <section id="departments" className="py-24 px-6 lg:px-12 border-b border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Claude Cowork works for every department</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              That's the whole point — it's not just for devs. Real use cases, real time saved, across every role on your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Marketing", icon: <LineChart className="w-6 h-6" />, desc: "Campaign analysis, ad copy at scale, CRO recommendations, automated reporting." },
              { title: "Sales", icon: <Users className="w-6 h-6" />, desc: "Personalized outbound, lead research instantly, follow-up automation, call prep." },
              { title: "Operations", icon: <Zap className="w-6 h-6" />, desc: "Process automation, internal doc generation, AI agent workflows, eliminating manual busywork." },
              { title: "Support", icon: <Bot className="w-6 h-6" />, desc: "AI-assisted responses, knowledge base generation, faster ticket handling." },
              { title: "Dev / AI Coding", icon: <Code2 className="w-6 h-6" />, desc: "Specialized training on Claude Code, Replit, and Codex. Ship faster, automate more, stop waiting on dev cycles." },
              { title: "Leadership", icon: <Briefcase className="w-6 h-6" />, desc: "Faster decisions with AI analysis, report summarization, strategic support." }
            ].map((dept, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-border bg-card hover:border-primary/50 transition-colors group rounded-xl"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 text-foreground group-hover:text-primary transition-colors">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{dept.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{dept.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Packages Section */}
      <section id="pricing" className="py-32 px-6 lg:px-12 bg-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to move faster?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a session directly below. Payment is secure via Stripe.
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-8">
              <Skeleton className="h-[400px] w-full rounded-xl" />
              <Skeleton className="h-[400px] w-full rounded-xl" />
            </div>
          ) : error ? (
            <div className="text-center p-12 border border-destructive/30 bg-destructive/10 text-destructive">
              <p>Failed to load packages. Please try refreshing.</p>
            </div>
          ) : packagesData?.data ? (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
              {packagesData.data.map((pkg, i) => (
                <motion.div 
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className={`relative flex flex-col p-8 rounded-xl border ${
                    pkg.hours > 1 
                      ? "border-primary/60 bg-accent shadow-lg" 
                      : "border-border bg-card shadow-sm"
                  }`}
                >
                  {pkg.hours > 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <span className="text-5xl font-black">${pkg.unitAmount / 100}</span>
                    {pkg.hours > 1 && <span className="text-muted-foreground ml-2">total</span>}
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>{pkg.hours} Hour{pkg.hours > 1 ? 's' : ''} live screen-share</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Workflow analysis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Actionable automation setup</span>
                    </li>
                  </ul>
                  
                  <Button 
                    size="lg" 
                    className="w-full h-14 text-lg"
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
      <footer className="py-12 border-t border-border text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} AI Consulting & Training. All rights reserved.</p>
      </footer>
    </div>
  );
}
