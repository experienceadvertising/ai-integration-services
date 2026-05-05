import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface Faq {
  q: string;
  a: ReactNode;
}

const faqs: Faq[] = [
  {
    q: "Do my team members need to be technical?",
    a: "No. Claude Cowork is built for non-technical users. If your team can use a browser, they can use Cowork. The training is designed to onboard non-technical people quickly using their actual day-to-day workflows.",
  },
  {
    q: "Is my company's data safe? Will Anthropic train on what we share with Claude?",
    a: (
      <div className="space-y-4">
        <p>
          Short answer: <strong className="text-foreground">no — as long as you do one of two things below.</strong> This matters
          if you're running client data through Cowork (Google Ads accounts, CRM exports, P&amp;Ls, affiliate lists, etc.). We'll cover this on the call too, but here's the playbook:
        </p>
        <div>
          <p className="font-semibold text-foreground mb-1">Option 1 — Turn off the training toggle in Privacy Settings</p>
          <p>
            On Free, Pro, and Max accounts, your chats and coding sessions (including Cowork) are used to train future models <em>only if</em> the
            "Help improve Claude" toggle is on. Flip it off at{" "}
            <a
              href="https://claude.ai/settings/data-privacy-controls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:no-underline"
            >
              claude.ai/settings/data-privacy-controls
            </a>{" "}
            and new or resumed sessions stop being used for training. Retention also drops from 5 years back to 30 days.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">Option 2 — Use a Team or Enterprise plan</p>
          <p>
            Claude for Work (Team / Enterprise) falls under Anthropic's Commercial Terms — those accounts are <strong className="text-foreground">not used for model training by default</strong>, period. No toggle to manage.
            Given the kind of client data most teams run through Cowork, this is the cleanest setup if you're bringing on team members or want bulletproof client confidentiality language in your contracts.
          </p>
        </div>
      </div>
    ),
  },
  {
    q: "What does each person on my team need before the session?",
    a: "Each participant needs a Claude Pro or Claude for Teams subscription (~$20/month) and the Claude desktop app installed. Evan will help you pick the right plan for your team size during the call.",
  },
  {
    q: "How is this different from a YouTube tutorial or course?",
    a: "Generic tutorials show you Cowork in someone else's workflow. Evan trains your specific team in your specific tools, building real automations during the call that you keep and use immediately. Most teams ship 2–3 working workflows in their first hour.",
  },
  {
    q: "What if I'm a solo professional, not a team?",
    a: "The 1-hour session works great for individuals. Many solo consultants, lawyers, agents, and operators book it to build personal automations around their own daily work — proposals, research, client comms, reporting.",
  },
  {
    q: "What if the session isn't what I expected?",
    a: "100% satisfaction guarantee. If your first hour with Evan isn't worth the price, you get a full refund — no forms, no friction. Just email Evan and he'll process it.",
  },
  {
    q: "Can I expense this through my company?",
    a: "Yes. You'll receive a Stripe receipt immediately after checkout that's expensable as professional development or training. If you need an itemized invoice, just reply to your receipt and Evan will send one.",
  },
  {
    q: "What happens after I book?",
    a: "You'll get a confirmation page with a Calendly to lock in your time and a short intake form so Evan arrives prepared. You'll get a calendar invite immediately and a session prep email shortly after with what to have ready.",
  },
];

export default function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-24 px-5 md:px-12 border-b border-border bg-background">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4 border border-border">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Questions
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">Things people ask before booking</h2>
          <p className="text-base md:text-lg text-muted-foreground">If you don't see your question, just <a href="mailto:evan@experienceadvertising.com" className="text-primary underline underline-offset-4 hover:no-underline">email Evan directly</a>.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-colors ${
                  isOpen ? "border-primary/40 bg-card" : "border-border bg-card hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 md:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm md:text-base leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                        {item.a}
                      </div>
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
