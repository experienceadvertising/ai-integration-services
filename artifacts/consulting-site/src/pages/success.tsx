import { useState } from "react";
import { Link } from "wouter";
import { CheckCircle2, ArrowLeft, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteNav from "@/components/site-nav";
const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

const CALENDLY_1HR = "https://calendly.com/evanexperience/claude-cowork-1-on-1-training";
const CALENDLY_4HR = "https://calendly.com/evanexperience/claude-cowork-1-on-1-training-clone";

export default function Success() {
  const params = new URLSearchParams(window.location.search);
  const pkg = params.get("pkg") || "1";
  const is4hr = pkg === "4";
  const calendlyUrl = is4hr ? CALENDLY_4HR : CALENDLY_1HR;
  const packageLabel = is4hr ? "4-Hour Deep Dive" : "1-Hour Session";

  const [form, setForm] = useState({
    name: "", email: "", workflows: "", tools: "", teamSize: "", goals: "", extra: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    setStatus("sending");
    try {
      const res = await fetch(`${BASE_URL}/api/intake`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, packageType: pkg }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="pt-20 pb-10 px-5 text-center border-b border-border">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
          <CheckCircle2 className="w-7 h-7 text-primary" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">You're all set.</h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
          Payment confirmed for your <strong>{packageLabel}</strong>. Pick a time below to lock in your session with Evan.
        </p>
      </section>

      {/* Calendly embed */}
      <section className="py-10 px-5 border-b border-border bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-1 text-center">Step 1: Pick your time</h2>
          <p className="text-muted-foreground text-sm text-center mb-6">Choose any open slot. You'll get a calendar invite immediately.</p>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-background">
            <iframe
              src={`${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=D4703A`}
              width="100%"
              height="700"
              frameBorder="0"
              title="Book your session with Evan"
            />
          </div>
        </div>
      </section>

      {/* Intake form */}
      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-1">Step 2: Help Evan prepare</h2>
            <p className="text-muted-foreground text-sm">
              A few quick questions so Evan can hit the ground running. The more detail, the better the session.
            </p>
          </div>

          {status === "sent" ? (
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Got it. Evan will be prepared.</h3>
              <p className="text-muted-foreground text-sm">Your intake notes have been sent. See you at the session!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold mb-1.5 block">Your name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1.5 block">Your email <span className="text-destructive">*</span></label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold mb-1.5 block">
                  What are your top 2–3 most time-consuming workflows right now?
                </label>
                <textarea
                  name="workflows"
                  value={form.workflows}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g. Writing weekly client reports, pulling data from multiple dashboards, drafting ad copy variations..."
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-1.5 block">
                  What tools does your team use daily?
                </label>
                <input
                  name="tools"
                  value={form.tools}
                  onChange={handleChange}
                  placeholder="e.g. Google Workspace, HubSpot, Slack, Notion, Shopify..."
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-1.5 block">
                  Team size / your role
                </label>
                <input
                  name="teamSize"
                  value={form.teamSize}
                  onChange={handleChange}
                  placeholder="e.g. 8-person marketing team, solo consultant, 3-person ops team..."
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-1.5 block">
                  What do you hope to walk away with after the session?
                </label>
                <textarea
                  name="goals"
                  value={form.goals}
                  onChange={handleChange}
                  rows={2}
                  placeholder="e.g. A working automation for our weekly report, confidence using Claude on real tasks, a playbook the team can follow..."
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-1.5 block">
                  Anything else Evan should know before the call? <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <textarea
                  name="extra"
                  value={form.extra}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Industry context, team dynamics, specific challenges, prior AI experience..."
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-destructive text-sm">Something went wrong. Please email the info directly to evan@experienceadvertising.com.</p>
              )}

              <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold" disabled={!form.email || status === "sending"}>
                {status === "sending" ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…</>
                ) : (
                  <><Send className="w-4 h-4 mr-2" /> Send prep notes to Evan</>
                )}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer nav */}
      <div className="py-8 border-t border-border text-center">
        <Link href="/">
          <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </button>
        </Link>
      </div>
    </div>
  );
}
