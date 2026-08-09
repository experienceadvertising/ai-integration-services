import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Do my team members need to be technical?",
    a: "No. Business training is designed for regular users in marketing, sales, operations, support, leadership, and other roles. Technical sessions are available separately for Codex, Claude Code, Replit, and development teams.",
  },
  {
    q: "Which AI tools can Evan train us on?",
    a: "Training can cover ChatGPT Work, OpenAI Codex, Claude Cowork, Claude Code, Replit, ChatGPT apps and connectors, workspace agents, and practical multi-tool workflows. The session can focus on one tool or compare the options that fit your team.",
  },
  {
    q: "Can you help us choose between ChatGPT Work, Codex, and Claude Cowork?",
    a: "Yes. The right choice depends on the work, team, existing software, security requirements, and whether the primary need is business productivity, software development, or both.",
  },
  {
    q: "How is this different from a course or YouTube tutorial?",
    a: "Generic tutorials show someone else's workflow. Evan trains your team using your actual work, tools, files, and goals, then helps you build a workflow you can keep improving after the session.",
  },
  {
    q: "What if I am an individual, not a company?",
    a: "The one-hour session works well for individuals. Solo professionals can focus on personal workflows, research, documents, reporting, coding, content, or tool setup.",
  },
  {
    q: "What if the first hour is not worth the price?",
    a: "Contact Evan for a full refund under the satisfaction guarantee described on the booking page.",
  },
  {
    q: "What happens after I book?",
    a: "You will receive scheduling and intake steps so Evan can prepare around your role, tools, experience level, and desired workflow before the session.",
  },
];

export default function HomeFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-12 md:py-24 px-5 md:px-12 border-b border-border bg-background">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4 border border-border">
            <HelpCircle className="w-3.5 h-3.5" /> Common Questions
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">Questions before booking</h2>
          <p className="text-base md:text-lg text-muted-foreground">If you do not see your question, email Evan directly.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.q} className={`rounded-2xl border transition-colors ${isOpen ? "border-primary/40 bg-card" : "border-border bg-card hover:border-primary/20"}`}>
                <button className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 md:py-5" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span className="font-semibold text-sm md:text-base leading-snug">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-[15px] text-muted-foreground leading-relaxed">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
