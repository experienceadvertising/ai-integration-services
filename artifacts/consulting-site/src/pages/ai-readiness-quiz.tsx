import { useMemo, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, ArrowRight, ArrowLeft, Check, Mail, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");
const PAGE_URL = "https://learncowork.net/ai-readiness-quiz";

interface QuizOption {
  label: string;
  points: number;
}

interface QuizQuestion {
  dimension: string;
  question: string;
  options: QuizOption[];
}

const QUESTIONS: QuizQuestion[] = [
  {
    dimension: "Current AI usage",
    question: "How does your team use AI tools today?",
    options: [
      { label: "Not at all, or it's actively discouraged", points: 0 },
      { label: "A few people experiment with ChatGPT/Claude on their own", points: 1 },
      { label: "Regular individual use, but no shared workflows", points: 2 },
      { label: "We have team-level AI workflows people actually use", points: 3 },
    ],
  },
  {
    dimension: "Repetitive work",
    question: "How much of your team's week goes to repeatable work — reports, drafts, data entry, routine emails?",
    options: [
      { label: "Honestly, most of it (60%+)", points: 3 },
      { label: "A lot (around 40–60%)", points: 3 },
      { label: "Some (around 20–40%)", points: 2 },
      { label: "Very little — our work is mostly novel each time", points: 1 },
    ],
  },
  {
    dimension: "Process clarity",
    question: "If a new hire asked 'how do we do X here?', what would they get?",
    options: [
      { label: "A shrug — it's all in people's heads", points: 0 },
      { label: "A teammate walking them through it verbally", points: 1 },
      { label: "Some docs exist, quality varies wildly", points: 2 },
      { label: "Documented processes for most recurring work", points: 3 },
    ],
  },
  {
    dimension: "Data accessibility",
    question: "Where does the information your team works with actually live?",
    options: [
      { label: "Paper, legacy systems, or one person's hard drive", points: 0 },
      { label: "Scattered across tools that don't talk to each other", points: 1 },
      { label: "Mostly in mainstream cloud tools (Google, Microsoft, CRM)", points: 2 },
      { label: "Cloud tools with APIs/exports we already use", points: 3 },
    ],
  },
  {
    dimension: "Team attitude",
    question: "When AI comes up at work, the room's reaction is closest to…",
    options: [
      { label: "Fear or eye-rolling", points: 0 },
      { label: "Skeptical but curious", points: 1 },
      { label: "Genuinely interested, waiting for direction", points: 2 },
      { label: "Already pushing leadership to move faster", points: 3 },
    ],
  },
  {
    dimension: "Leadership support",
    question: "Where does leadership stand on AI adoption?",
    options: [
      { label: "Against it, or hasn't engaged at all", points: 0 },
      { label: "Vague 'we should do something with AI' energy", points: 1 },
      { label: "Supportive, with someone loosely responsible for it", points: 2 },
      { label: "Active sponsor with time or budget committed", points: 3 },
    ],
  },
  {
    dimension: "Data sensitivity",
    question: "How clear are your rules about what data can go into AI tools?",
    options: [
      { label: "No rules — which means nobody dares use anything", points: 1 },
      { label: "A blanket ban that everyone quietly works around", points: 0 },
      { label: "Rough informal guidance", points: 2 },
      { label: "Clear policy on what's allowed and what isn't", points: 3 },
    ],
  },
  {
    dimension: "Capacity to adopt",
    question: "Could your team carve out a few hours to learn and set up new workflows this month?",
    options: [
      { label: "Impossible — we're permanently underwater", points: 0 },
      { label: "Maybe one person could", points: 1 },
      { label: "Yes, if it clearly pays back fast", points: 2 },
      { label: "Yes — we make time for things that compound", points: 3 },
    ],
  },
];

const MAX_SCORE = QUESTIONS.length * 3;

interface Band {
  min: number;
  grade: string;
  title: string;
  summary: string;
  recommendation: string;
}

const BANDS: Band[] = [
  {
    min: 19,
    grade: "A",
    title: "Ready to compound",
    summary: "You have the raw materials — accessible data, willing people, leadership cover. The gap between you and an AI-leveraged team is purely implementation: picking the right workflows and building them properly.",
    recommendation: "You'd get the most from the 4-Hour Deep Dive: with your foundation, one session can stand up 6–8 production workflows across the team, including MCP connections to your real tools.",
  },
  {
    min: 13,
    grade: "B",
    title: "Strong foundation, missing the playbook",
    summary: "The ingredients are mostly there, but AI use is individual and improvised rather than systematic. Your biggest wins are sitting in the repeatable work nobody has mapped to AI yet.",
    recommendation: "Start with the 1-Hour Session: build 2–3 high-ROI workflows live, prove the value internally, then scale what works. The free AI report below will show you exactly which workflows to start with.",
  },
  {
    min: 7,
    grade: "C",
    title: "Real potential, real blockers",
    summary: "There's clear opportunity — likely lots of repetitive work — but something structural is in the way: unclear data rules, scattered systems, or a team that hasn't been given direction.",
    recommendation: "Don't start with tools; start with one visible win. A 1-Hour Session focused on a single painful workflow gives your team a concrete success story that unblocks the bigger conversation.",
  },
  {
    min: 0,
    grade: "D",
    title: "Early days — and that's fine",
    summary: "AI adoption isn't your blocker; the groundwork is. The good news: teams at this stage often see the most dramatic gains, because the manual load is heaviest.",
    recommendation: "Get the free AI report below first — it costs nothing and will identify which workflows are worth fighting for. When you're ready for a session, start small and visible.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does the AI readiness quiz measure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eight dimensions of AI readiness: current AI usage, share of repetitive work, process documentation, data accessibility, team attitude, leadership support, data-sensitivity policy, and capacity to adopt. You get a letter grade with specific recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the quiz take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About two minutes — eight multiple-choice questions, instant scorecard, no email required to see your results.",
      },
    },
  ],
};

export default function AiReadinessQuiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [sending, setSending] = useState(false);

  const score = useMemo(
    () => answers.reduce<number>((sum, a, i) => sum + (a !== null ? QUESTIONS[i].options[a].points : 0), 0),
    [answers],
  );
  const band = useMemo(() => BANDS.find((b) => score >= b.min) ?? BANDS[BANDS.length - 1], [score]);

  const selectOption = (optionIdx: number) => {
    const next = [...answers];
    next[current] = optionIdx;
    setAnswers(next);
    // Auto-advance after a beat so the selection is visible
    setTimeout(() => {
      if (current < QUESTIONS.length - 1) setCurrent(current + 1);
      else setFinished(true);
    }, 250);
  };

  const reset = () => {
    setAnswers(Array(QUESTIONS.length).fill(null));
    setCurrent(0);
    setFinished(false);
    setEmail("");
    setEmailSent(false);
  };

  const handleEmailResults = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || sending) return;
    setSending(true);
    const detail = QUESTIONS
      .map((q, i) => `${q.dimension}: ${answers[i] !== null ? q.options[answers[i]!].points : 0}/3`)
      .join("; ");
    try {
      await fetch(`${BASE_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: "quiz",
          description: `AI Readiness Quiz: grade ${band.grade} (${score}/${MAX_SCORE}). ${detail}`,
        }),
      });
    } catch {}
    setEmailSent(true);
    setSending(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="AI Readiness Quiz — Is Your Team Ready for Claude Cowork?"
        description="Free 2-minute quiz: score your team's AI readiness across 8 dimensions — repetitive work, data access, leadership support, and more. Instant grade with specific next steps."
        canonical={PAGE_URL}
        keywords="AI readiness quiz, AI readiness assessment, is my team ready for AI, AI adoption assessment, Claude Cowork readiness, business AI quiz, AI maturity assessment"
        schema={faqSchema}
      />
      <SiteNav />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-5 md:px-12 border-b border-border bg-gradient-to-b from-secondary/40 to-background">
        <div className="container max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-5 border border-primary/20">
              <ClipboardCheck className="w-4 h-4" />
              Free 2-Minute Quiz
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
              How ready is your team for AI, really?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Eight honest questions across the dimensions that actually predict whether AI adoption sticks. Instant grade, no email required to see your results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-12 md:py-16 px-5 md:px-12 border-b border-border">
        <div className="container max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={`q-${current}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
              >
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span className="font-semibold text-primary uppercase tracking-widest">{QUESTIONS[current].dimension}</span>
                    <span>{current + 1} of {QUESTIONS.length}</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${((current + (answers[current] !== null ? 1 : 0)) / QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                  {QUESTIONS[current].question}
                </h2>

                <div className="space-y-3">
                  {QUESTIONS[current].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => selectOption(i)}
                      className={`w-full text-left px-5 py-4 rounded-xl border text-sm md:text-base transition-all ${
                        answers[current] === i
                          ? "border-primary bg-primary/10 text-foreground font-medium"
                          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {current > 0 && (
                  <button
                    onClick={() => setCurrent(current - 1)}
                    className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous question
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Scorecard */}
                <div className="bg-card border border-border rounded-2xl p-7 md:p-9 text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Your AI Readiness Grade</div>
                  <div className="w-24 h-24 rounded-3xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-5xl font-black text-primary">{band.grade}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{score} of {MAX_SCORE} points</div>
                  <h2 className="text-2xl font-bold tracking-tight mb-3">{band.title}</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">{band.summary}</p>
                </div>

                {/* Dimension breakdown */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-7">
                  <h3 className="font-bold text-base mb-5">Your breakdown</h3>
                  <div className="space-y-3.5">
                    {QUESTIONS.map((q, i) => {
                      const pts = answers[i] !== null ? q.options[answers[i]!].points : 0;
                      return (
                        <div key={i} className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground w-44 shrink-0">{q.dimension}</span>
                          <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${pts >= 2 ? "bg-primary" : pts === 1 ? "bg-primary/50" : "bg-destructive/40"}`}
                              style={{ width: `${(pts / 3) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold tabular-nums w-7 text-right">{pts}/3</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-7">
                  <h3 className="font-bold text-base text-primary mb-2">What Evan recommends for a grade-{band.grade} team</h3>
                  <p className="text-muted-foreground leading-relaxed">{band.recommendation}</p>
                </div>

                {/* Email + CTAs */}
                {!emailSent ? (
                  <form onSubmit={handleEmailResults} className="bg-card border border-border rounded-2xl p-5">
                    <label className="text-sm font-semibold mb-2 block">Email me my scorecard + the readiness checklist</label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="flex-1 px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      />
                      <Button type="submit" size="sm" className="h-auto px-4" disabled={!email || sending}>
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-sm text-foreground">Sent! Check your inbox for the scorecard and next steps.</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <Link
                    href="/ai-report"
                    className="flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-3.5 px-6 font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Get Your Free AI Report <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={reset}
                    className="flex items-center justify-center gap-2 border border-border rounded-xl py-3.5 px-6 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" /> Retake the quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Why these dimensions */}
      <section className="py-14 px-5 md:px-12 border-b border-border bg-secondary/20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Why these eight dimensions</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Most AI adoption fails for non-technical reasons: nobody mapped the repetitive work, the data lives in six disconnected tools, leadership never committed real time, or an unwritten ban made everyone afraid to try. The quiz scores the conditions that determine whether Claude Cowork training turns into lasting workflows — or becomes another tool nobody opens after week two. Evan's sessions are built around fixing exactly these gaps with your real workflows.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
