import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Copy, Check, Lock, Printer } from "lucide-react";
import type { RoleData } from "@/data/roles";

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

interface Props {
  role: RoleData;
}

export default function RolePlaybook({ role }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);

    // Capture the lead, then unlock regardless of outcome — the playbook is
    // the promise, not the email delivery
    try {
      await fetch(`${BASE_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || undefined,
          email,
          type: "playbook",
          description: `Downloaded the ${role.title} playbook (/roles/${role.slug})`,
        }),
      });
    } catch {}
    setUnlocked(true);
    setSubmitting(false);
  };

  const copyPrompt = (idx: number, prompt: string) => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    }).catch(() => {});
  };

  return (
    <section className="py-16 px-6 lg:px-12 border-b border-border">
      <div className="container max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4 border border-primary/20">
          <BookOpen className="w-4 h-4" />
          Free Playbook
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
          The {role.title}'s Claude Cowork Playbook
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Five copy-paste prompts that cover the highest-leverage {role.title.toLowerCase()} workflows above. Drop them into Claude Cowork, fill in the brackets, and see results today — no session required.
        </p>

        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.form
              key="gate"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              onSubmit={handleUnlock}
              className="bg-card border border-border rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-2 text-sm font-semibold mb-5">
                <Lock className="w-4 h-4 text-primary" />
                Enter your email to unlock all 5 prompts
              </div>
              <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name (optional)"
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                />
                <Button type="submit" disabled={!email || submitting} className="h-auto">
                  {submitting ? "Unlocking…" : "Unlock Playbook"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Free, instant. We'll also send a few practical tips on getting started with Claude Cowork.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="prompts"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {role.playbookPrompts.map((p, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-5 md:p-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="font-semibold text-base">
                      <span className="text-primary mr-2">{i + 1}.</span>
                      {p.title}
                    </h3>
                    <button
                      onClick={() => copyPrompt(i, p.prompt)}
                      className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors shrink-0"
                    >
                      {copiedIdx === i ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedIdx === i ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed bg-secondary/40 border border-border/60 rounded-xl px-4 py-3 font-mono whitespace-pre-wrap">
                    {p.prompt}
                  </p>
                </div>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 print:hidden">
                <Button variant="outline" onClick={() => window.print()}>
                  <Printer className="w-4 h-4 mr-2" /> Print / Save as PDF
                </Button>
                <p className="text-sm text-muted-foreground self-center">
                  Want these built live with your real data? That's what a session with Evan is for.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
