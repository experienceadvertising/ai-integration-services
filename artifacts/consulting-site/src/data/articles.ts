// Long-form, author-bylined articles for /blog. These exist for E-E-A-T
// (first-hand experience + expertise signals) and for LLM/AI-answer citation.
// Content is written in Evan Weber's first-person voice; he should review and
// add real client specifics before each is treated as final.

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ArticleFAQ {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  title: string; // on-page H1
  metaTitle: string; // <title> / OG title
  metaDescription: string;
  excerpt: string; // index card + social description
  category: string;
  tags: string[];
  readingTime: string;
  datePublished: string; // ISO yyyy-mm-dd
  dateModified: string; // ISO yyyy-mm-dd
  // Body
  intro: string[];
  sections: ArticleSection[];
  keyTakeaways: string[];
  faqs: ArticleFAQ[];
}

export const ARTICLE_AUTHOR = {
  name: "Evan Weber",
  title: "AI Productivity Trainer & Digital Marketing Consultant",
  url: "https://learncowork.net/about",
  image: "https://learncowork.net/og-evan.jpg",
  sameAs: [
    "https://www.linkedin.com/in/worldsgreatestmarketer/",
    "https://experienceadvertising.com",
    "https://www.affiliatefinders.com",
  ],
} as const;

export const articles: Article[] = [
  {
    slug: "what-is-claude-cowork",
    title: "What Claude Cowork Actually Is — and How It's Different from Claude.ai, Claude Code, and ChatGPT",
    metaTitle: "What Is Claude Cowork? A Plain-English Guide (2026) | Evan Weber",
    metaDescription:
      "Claude Cowork is Anthropic's agentic desktop AI that operates your computer, handles files, and runs multi-step work. Here's what it actually is — and how it differs from Claude.ai, Claude Code, and ChatGPT — from someone who uses it daily.",
    excerpt:
      "I get asked \"what is Claude Cowork, exactly?\" in almost every session. Here's the plain-English answer, and the clear lines between Cowork, Claude.ai, Claude Code, and ChatGPT.",
    category: "Claude Cowork",
    tags: ["Claude Cowork", "Agentic AI", "Anthropic", "AI productivity"],
    readingTime: "9 min read",
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    intro: [
      "I train business teams on Claude Cowork for a living, and the single most common question I get — usually in the first five minutes of a session — is some version of \"wait, how is this different from the Claude I already use in my browser?\"",
      "It's a fair question. Anthropic now ships several different ways to use Claude, the names sound similar, and the marketing doesn't always make the distinction obvious. So here is the plain-English version I give every team, written from the perspective of someone who uses Cowork every single day to run a real business.",
    ],
    sections: [
      {
        heading: "The one-sentence definition",
        paragraphs: [
          "Claude Cowork is Anthropic's agentic desktop mode — it lives in the Claude desktop app and lets Claude actually operate your computer, rather than just talk to you about what you should do.",
          "That's the whole leap. Regular chat AI gives you words back. Cowork gives you completed work: it reads and writes files on your machine, runs commands in a sandboxed shell, drives apps, and connects to your real tools (Gmail, Slack, Google Drive, your CRM, internal databases) through MCP integrations. You stay in the loop and approve sensitive actions, but Claude is doing the doing.",
        ],
      },
      {
        heading: "Why \"agentic\" is the word that matters",
        paragraphs: [
          "People throw around \"[agentic AI](/glossary/agentic-ai)\" like it's a buzzword, but it points at a real, specific difference. A chatbot is reactive — you ask, it answers, the loop ends. An agent is goal-directed — you give it an outcome, and it plans, takes multiple steps, uses tools, checks its own work, and keeps going until the job is done.",
          "In practice, that means I can tell Cowork \"pull this month's numbers from these three exports, build the board summary in our usual format, and flag anything that moved more than 10%,\" and it will open the files, do the analysis, write the document, and hand it back — instead of giving me instructions for how I could do that myself.",
        ],
      },
      {
        heading: "Claude Cowork vs. Claude.ai (the web chat)",
        paragraphs: [
          "Claude.ai is the chat interface most people already know — the website (and mobile app) where you type a message and get a response. It's excellent for thinking, drafting, and Q&A, but it lives in a sandbox: it can't touch your files, your desktop apps, or your local environment.",
          "Cowork is that same Claude intelligence with hands. The model reasoning is similar; the difference is reach. Claude.ai can write you an email; Cowork can read your inbox, draft the replies in your voice, and (with your approval) send them.",
        ],
        bullets: [
          "Claude.ai → conversation and drafting in a browser sandbox",
          "Claude Cowork → the same intelligence operating your actual computer and connected tools",
        ],
      },
      {
        heading: "Claude Cowork vs. Claude Code",
        paragraphs: [
          "This is the distinction that trips up technical teams. [Claude Code](/glossary/claude-code) is Anthropic's agent built specifically for software development — it lives in the terminal and IDE, and it's optimized for reading codebases, writing and refactoring code, and running tests.",
          "Cowork is the generalist. It's built for everyone — marketers, recruiters, paralegals, finance teams, operations — to automate knowledge work, not just code. There's overlap (both can run a shell), but think of Claude Code as the tool for engineers shipping software (covered in our [vibe coding training](/ai-coding-training)), and Cowork as the digital colleague for the other 90% of your company.",
        ],
      },
      {
        heading: "Claude Cowork vs. ChatGPT",
        paragraphs: [
          "ChatGPT is OpenAI's product, not Anthropic's, so this is a cross-vendor comparison — but teams ask it constantly. The honest answer in 2026 is that both companies are racing toward the same place: AI that doesn't just chat but does work on your machine. OpenAI's equivalent push is the Codex app, which I've written about separately.",
          "For day-to-day, non-coding business automation, my experience is that Cowork's local-first design — operating your real files and apps with human-in-the-loop approvals — is the most natural fit for non-technical teams. But the right answer genuinely depends on your stack, and I'll always tell a team the truth about which tool fits them best.",
        ],
      },
      {
        heading: "What this looks like in a real workflow",
        paragraphs: [
          "Here's a concrete example from how I actually use it. Every week I need a performance digest pulled from a few different platforms. Instead of logging into each one, exporting, and assembling a doc by hand, I hand Cowork the exports, it does the analysis, writes the narrative in our house format, and flags the three things worth my attention. A task that used to eat an hour now takes about ten minutes of review — see the [full time-savings breakdown](/blog/ai-time-savings-guide) for how this plays out across different roles.",
          "Multiply that across every repetitive, multi-step task in a business — intake processing, report assembly, research digests, first-draft documents — and you start to see why I think this is the most important productivity shift since the spreadsheet.",
        ],
      },
    ],
    keyTakeaways: [
      "Claude Cowork is Anthropic's agentic desktop AI — it operates your computer and connected tools, not just a chat window.",
      "Claude.ai is the browser chat; Cowork is that intelligence with the ability to act on your real files and apps.",
      "Claude Code is the developer-focused agent; Cowork is the generalist for non-technical knowledge work.",
      "The defining feature is 'agentic' behavior: goal-directed, multi-step, tool-using work with you in the loop.",
    ],
    faqs: [
      {
        q: "Is Claude Cowork free?",
        a: "Cowork access requires a paid Claude plan (Claude Pro or Claude for Teams). The training I offer is separate — a 1-hour session is $300 and a 4-hour deep dive is $1,000.",
      },
      {
        q: "Do I need to be technical to use Claude Cowork?",
        a: "No. Cowork was designed for non-technical users. If your team can use a browser and approve a prompt, they can use Cowork. Most of the people I train have never written a line of code.",
      },
      {
        q: "Is Claude Cowork safe to use with sensitive company data?",
        a: "Cowork uses a human-in-the-loop model — it asks for approval before taking sensitive actions — and runs locally on your machine. I cover Claude's privacy settings and data handling as part of every session so teams can use it within their compliance requirements.",
      },
    ],
  },

  {
    slug: "what-is-codex-app",
    title: "The Codex Desktop App, Explained: OpenAI's Answer to Agentic Desktop AI",
    metaTitle: "What Is the OpenAI Codex App? A 2026 Guide | Evan Weber",
    metaDescription:
      "OpenAI's Codex app brings agentic AI to your Mac and Windows desktop — multiple agents in parallel, background computer use, automations, and skills. Here's what the Codex app actually is and who it's for, from a daily agentic-AI user.",
    excerpt:
      "OpenAI's Codex app put agentic AI on the desktop — multi-agent, computer use, automations. Here's what it actually is, what it's genuinely good at, and where it fits.",
    category: "Codex",
    tags: ["OpenAI Codex", "Agentic AI", "AI coding", "Desktop AI"],
    readingTime: "8 min read",
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    intro: [
      "When teams ask me about Claude Cowork, the next question is almost always \"what about the OpenAI version?\" They mean the Codex app — OpenAI's desktop application that, like Cowork, can actually operate your computer instead of just chatting.",
      "I use both tools, so here's a straight explainer of what the Codex app is, what it's genuinely good at, and who I'd point toward it. (For a head-to-head, I've written a separate Cowork-vs-Codex comparison.)",
    ],
    sections: [
      {
        heading: "What the Codex app is",
        paragraphs: [
          "Codex started as OpenAI's coding model, but the Codex app is something bigger: a desktop application for macOS and Windows that acts as a command center for running AI agents on real work. It's powered by OpenAI's most capable agentic coding model (GPT-5.3-Codex as of 2026) and is used by millions of developers weekly.",
          "The headline idea is parallelism. Rather than one assistant you chat with, the Codex app is built to orchestrate multiple agents at once — each working in its own isolated environment — so several tasks progress simultaneously while you keep working in your other apps.",
        ],
      },
      {
        heading: "The four capabilities that make it 'agentic desktop AI'",
        paragraphs: [
          "Four features are what move Codex from \"a coding chatbot\" to a genuine desktop agent:",
        ],
        bullets: [
          "Multi-agent orchestration — run many agents in parallel across projects, using built-in worktrees and cloud environments, so long-running work compresses from weeks into days.",
          "Computer use — with background [computer use](/glossary/computer-use), Codex can operate the apps on your machine by seeing, clicking, and typing with its own cursor, including multiple agents working at once without interrupting you.",
          "Automations — Codex can work unprompted on routine but important jobs like issue triage, alert monitoring, and CI/CD, picking up recurring work on its own.",
          "Skills — reusable, team-aligned capabilities (code understanding, prototyping, documentation) that let Codex follow your standards instead of generic defaults.",
        ],
      },
      {
        heading: "Where Codex runs: cloud-first with a sandbox",
        paragraphs: [
          "An important architectural detail: a lot of Codex's execution happens in OpenAI's cloud, in sandboxed environments where agents run terminal commands and work against code repositories. It's also deeply GitHub-native — it can read issues, pull request history, and repository context directly.",
          "That cloud-and-sandbox design is a real strength for software engineering — isolation, parallelism, and reproducibility — and it's a different philosophy from a purely local tool. It's worth understanding when you're deciding which tool fits your data and workflow.",
        ],
      },
      {
        heading: "What Codex is genuinely great at",
        paragraphs: [
          "Codex is, first and foremost, an engineering platform. If your goal is shipping software — building features, fixing bugs across a large codebase, running many coding tasks in parallel, automating the busywork around pull requests and CI — it is exceptionally strong, and the multi-agent model is a legitimate step change for development teams.",
          "Even for non-engineers, the Automations and computer-use features hint at where all of this is going: AI that quietly handles recurring operational work in the background. But its center of gravity is clearly developers and technical teams.",
        ],
      },
      {
        heading: "Who I'd point toward Codex",
        paragraphs: [
          "If you're a software team, or a technical founder who lives in GitHub and wants to parallelize real development work, the Codex app deserves a serious look — and in my [vibe coding training](/ai-coding-training) I cover it alongside [Claude Code](/glossary/claude-code), Replit, and GitHub Copilot.",
          "If you're a non-technical business team trying to automate knowledge work — reports, research, intake, correspondence — the comparison gets more nuanced, which is exactly why I wrote the dedicated [Cowork-vs-Codex piece](/blog/claude-cowork-vs-codex).",
        ],
      },
    ],
    keyTakeaways: [
      "The Codex app is OpenAI's agentic desktop application for macOS and Windows — a command center for running AI agents on real work.",
      "Its defining traits are multi-agent parallelism, background computer use, Automations, and reusable Skills.",
      "Much of its execution is cloud-and-sandbox based and deeply GitHub-native, which suits software engineering especially well.",
      "Its center of gravity is developers and technical teams, even as computer use and Automations point toward broader operational AI.",
    ],
    faqs: [
      {
        q: "Is the Codex app the same as Claude Cowork?",
        a: "No. Both are agentic desktop apps that can operate your computer, but Codex is OpenAI's product and is engineering-focused, while Claude Cowork is Anthropic's general-purpose 'digital colleague' aimed at all knowledge work. I cover the differences in detail in my Cowork-vs-Codex comparison.",
      },
      {
        q: "What platforms does the Codex app run on?",
        a: "The Codex app is available as a desktop application for both macOS and Windows.",
      },
      {
        q: "Can the Codex app control my computer?",
        a: "Yes. With background computer use, Codex can operate the apps on your machine by seeing, clicking, and typing with its own cursor — and can run multiple agents in parallel without interrupting your own work.",
      },
    ],
  },

  {
    slug: "claude-cowork-vs-codex",
    title: "Claude Cowork vs. the Codex App: Which Agentic Desktop AI Should Your Team Use?",
    metaTitle: "Claude Cowork vs. Codex App: Which to Use in 2026 | Evan Weber",
    metaDescription:
      "A practical, no-hype comparison of Claude Cowork and OpenAI's Codex app from someone who uses both daily. Architecture, who each is for, pricing, and how to actually decide — for technical and non-technical teams.",
    excerpt:
      "I use both Claude Cowork and the Codex app every week. Here's the honest, side-by-side breakdown — and a simple way to decide which one your team should actually start with.",
    category: "Comparison",
    tags: ["Claude Cowork", "OpenAI Codex", "Comparison", "Agentic AI"],
    readingTime: "10 min read",
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    intro: [
      "Two of the biggest names in AI now ship desktop apps that can actually operate your computer: Anthropic's Claude Cowork and OpenAI's Codex app. Teams I train want to know which one to bet on — and they want a straight answer, not vendor marketing.",
      "I use both every week, so here's the honest comparison: where each one wins, who each is really built for, and a simple rule of thumb for deciding.",
    ],
    sections: [
      {
        heading: "The core difference in one line",
        paragraphs: [
          "Claude Cowork is a general-purpose digital colleague; the Codex app is an engineering platform. Both can drive your computer — but they were designed for different people doing different work.",
          "Cowork is built so a marketer, recruiter, or finance lead can automate their actual day. Codex is built so a software team can ship more, faster, by running many coding agents in parallel. Almost every real decision flows from that difference.",
        ],
      },
      {
        heading: "Design philosophy: digital colleague vs. engineering platform",
        paragraphs: [
          "Cowork is positioned as a colleague that works the way a person does — it shares your screen, operates your real files and apps, and asks for approval before sensitive actions. The human-in-the-loop model is front and center, which is reassuring for non-technical teams handling real business data.",
          "Codex leans the other way: structure and isolation. It spins up its own background processes and isolated environments, orchestrates multiple agents at once, and is happiest running lots of well-scoped tasks in parallel without interrupting you. That's a developer's mental model, and it's a genuine strength for engineering.",
        ],
      },
      {
        heading: "Architecture: local-first vs. cloud-and-sandbox",
        paragraphs: [
          "Cowork runs locally on your machine, reading and writing your files directly with you approving the sensitive steps. Codex does much of its work in OpenAI's cloud, in sandboxed environments, and is deeply GitHub-native — reading issues, PR history, and repo context.",
          "Neither approach is universally 'better.' Local-first is intuitive and keeps you close to your own files and apps; cloud-and-sandbox gives isolation, reproducibility, and easy parallelism. The right choice depends on your data, your tools, and how technical your team is.",
        ],
      },
      {
        heading: "Who each tool is really for",
        paragraphs: [
          "Here's how I actually route teams when they ask me which to start with:",
        ],
        bullets: [
          "Choose [Claude Cowork](/claude-cowork-training) if you're a non-technical business team automating knowledge work — reports, research, intake, correspondence, CRM hygiene — and you want a tool the whole department can adopt quickly.",
          "Choose the [Codex app](/ai-coding-training) if you're a software team or technical founder who wants to parallelize real development work and automate the busywork around shipping code.",
          "Honestly? Many teams benefit from both — Cowork for the business side, Codex (and Claude Code) for engineering. They aren't mutually exclusive, and I cover them together in my trainings.",
        ],
      },
      {
        heading: "Pricing, briefly",
        paragraphs: [
          "Both have an accessible entry point — Cowork via a Claude Pro plan and Codex via a ChatGPT plan, each around $20/month at the consumer tier as of 2026. Heavy, token-intensive usage can change the math, and team/enterprise tiers differ, so treat these as starting points and check current pricing before you standardize.",
          "In my experience the bigger cost is never the subscription — it's the weeks teams lose figuring the tools out alone. That's the entire reason my training exists: to compress that ramp from months to a single session.",
        ],
      },
      {
        heading: "How I'd actually decide",
        paragraphs: [
          "Skip the spec-sheet paralysis. Ask one question: is the work you most want to automate code, or everything else? If it's code, start with Codex (and Claude Code). If it's the reports, research, and operational busywork that eat your team's week, start with Claude Cowork.",
          "Then pick one real, painful, recurring task and build it end-to-end with that tool. The clarity you get from one working workflow beats a month of comparison articles — including this one.",
        ],
      },
    ],
    keyTakeaways: [
      "Claude Cowork is a general-purpose digital colleague; the Codex app is an engineering platform — the difference drives every decision.",
      "Cowork is local-first with human-in-the-loop approvals; Codex is cloud-and-sandbox, GitHub-native, and built for multi-agent parallelism.",
      "Non-technical teams automating knowledge work should start with Cowork; software teams should start with Codex (and Claude Code).",
      "Both start around $20/month at the consumer tier — but the real cost is the ramp time, which is what training removes.",
    ],
    faqs: [
      {
        q: "Is Claude Cowork better than the Codex app?",
        a: "Neither is universally better — they're built for different work. Cowork is the stronger fit for non-technical teams automating knowledge work; Codex is the stronger fit for software teams parallelizing development. The best choice depends on whether the work you want to automate is code or everything else.",
      },
      {
        q: "Can I use both Claude Cowork and Codex together?",
        a: "Yes, and many teams do — Cowork for business and operational work, Codex (and Claude Code) for engineering. They aren't mutually exclusive, and I cover them together in my AI trainings.",
      },
      {
        q: "Which should a non-technical team start with?",
        a: "Claude Cowork. It's designed for non-technical users, runs locally with human-in-the-loop approvals, and adapts to the reports, research, and correspondence that make up most business work.",
      },
    ],
  },

  {
    slug: "ai-time-savings-guide",
    title: "How Much Time Can AI Actually Save Your Team? A Realistic, Task-by-Task Breakdown",
    metaTitle: "AI Time Savings: A Realistic Breakdown by Task (2026) | Evan Weber",
    metaDescription:
      "How many hours can Claude Cowork and agentic AI actually save your team? A realistic, task-by-task breakdown from someone who trains business teams on this every week — plus how to calculate your own number.",
    excerpt:
      "\"AI will save you 40% of your time\" is a marketing number, not a real one. Here's the honest, task-by-task breakdown of where the time actually comes from — and how to calculate your own team's real savings.",
    category: "Productivity",
    tags: ["AI ROI", "Time savings", "Claude Cowork", "Productivity"],
    readingTime: "8 min read",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    intro: [
      "Every team I sit down with asks some version of the same question before we even open a laptop: \"okay, but how much time is this actually going to save us?\" It's the right question, and it deserves a better answer than the vague percentages most AI vendors throw around.",
      "So here's the honest version, built from actually watching teams adopt Claude Cowork — broken down by the kind of task, not a single made-up blended number. Some tasks compress by 90%. Others barely move. Knowing which is which is what makes an AI rollout pay off instead of fizzle.",
    ],
    sections: [
      {
        heading: "Why the \"AI saves you 40% of your time\" stat is basically meaningless",
        paragraphs: [
          "Any number that isn't tied to a specific task is a marketing number. A [recruiter's](/roles/recruiters) week and a [financial analyst's](/roles/financial-analysts) week don't have the same mix of high-leverage AI tasks, so a single blended percentage hides more than it reveals.",
          "The useful version of this question isn't \"how much time will AI save me\" — it's \"which specific tasks in my week are the kind AI is actually good at, and how much of each one goes away.\" That's the breakdown that follows.",
        ],
      },
      {
        heading: "The tasks where AI genuinely erases most of the time",
        paragraphs: [
          "These are the tasks I see compress the most dramatically, usually 70–90%, because they're fundamentally about assembling and formatting information the AI can gather and structure itself:",
        ],
        bullets: [
          "Recurring reports and digests — pulling numbers from a few sources, writing the narrative, and formatting it in your house style. A task that took an hour typically drops to 5–10 minutes of review.",
          "First-draft writing — emails, proposals, job descriptions, social posts, meeting summaries. The blank page disappears; you're editing instead of originating.",
          "Research synthesis — reading through a pile of documents, articles, or data exports and pulling out what matters. AI reads fast and doesn't skim.",
          "Data reconciliation and cleanup — matching records across spreadsheets, standardizing formats, flagging discrepancies.",
        ],
      },
      {
        heading: "The tasks where AI saves real time, but not all of it",
        paragraphs: [
          "This is the biggest category, and it's where most of the realistic gains live — usually 30–50% time savings, because a human still needs to make judgment calls in the middle of the work:",
        ],
        bullets: [
          "Client or candidate correspondence — AI drafts strong replies in your voice, but you're still reviewing tone and specifics before anything goes out.",
          "Intake and triage — sorting incoming requests, assigning priority, routing to the right person. AI speeds the sorting; a person still owns the judgment calls.",
          "Presentation and document assembly — AI builds the first structure and pulls in the content, but design polish and final narrative framing still take a human pass.",
        ],
      },
      {
        heading: "The tasks where AI barely moves the needle (and that's fine)",
        paragraphs: [
          "Relationship-building conversations, final decisions with real consequences, and anything requiring in-person presence don't compress much, and I don't pretend otherwise in training. The honest pitch for agentic AI has always been about freeing up time for exactly this kind of work — not replacing it.",
        ],
      },
      {
        heading: "How to calculate your own number instead of trusting mine",
        paragraphs: [
          "The only estimate worth trusting is one built from your own week. Here's the method I actually use in sessions: list your recurring weekly tasks, tag each one against the three buckets above, estimate current hours per task, and apply a realistic range (80% for erase-tier tasks, 40% for partial-tier tasks, 0% for the rest).",
          "That gives you a number tied to your actual work instead of a vendor's slide. I built a free version of this exercise into the [AI time-savings calculator](/ai-time-savings-calculator) on this site — it walks through the same buckets and gives you an estimate in about a minute, with an option to email yourself the breakdown.",
        ],
      },
      {
        heading: "Why the number is usually bigger a month in than week one",
        paragraphs: [
          "The first week of using Claude Cowork, savings are modest — you're still learning what to hand off and how to phrase it. The real compounding happens once you've built a few reusable [AI workflow automations](/glossary/ai-workflow-automation) for your recurring tasks; at that point the AI isn't starting from scratch each time, it's running a process you've already refined together.",
          "That's the gap most self-serve AI adoption falls into: people try it once on a hard task, get a mediocre result, and conclude the tool doesn't work. A trained team skips that entire dead zone because the workflows are built correctly the first time.",
        ],
      },
    ],
    keyTakeaways: [
      "Blended \"AI saves X% of time\" stats are marketing numbers — the real answer depends entirely on the task mix in your specific week.",
      "Assembly and formatting tasks (reports, first drafts, research synthesis) compress 70–90%; judgment-heavy tasks (correspondence, triage) compress 30–50%; relationship and decision work barely moves.",
      "Build your own estimate by tagging your recurring weekly tasks into those three buckets — don't trust a single blended percentage.",
      "Time savings compound after the first few weeks, once reusable workflows replace one-off, from-scratch prompting.",
    ],
    faqs: [
      {
        q: "What's a realistic time-savings estimate for a typical knowledge worker?",
        a: "In my experience it usually lands between 20% and 35% of total weekly hours once a team has a handful of trained workflows in place — higher for roles heavy in reporting, research, and correspondence, lower for roles centered on meetings and relationship work.",
      },
      {
        q: "Is there a free way to estimate my own team's AI time savings?",
        a: "Yes — the AI time-savings calculator on this site walks through the same task buckets covered in this article and gives you a personalized estimate in under a minute.",
      },
      {
        q: "Does the time savings show up immediately?",
        a: "Partially. You'll see some savings in week one, but the bigger gains show up after you've built a few reusable workflows for your recurring tasks — which is exactly what a training session is built to shortcut.",
      },
    ],
  },

  {
    slug: "can-ai-do-my-job",
    title: "Can AI Do My Job? A Realistic Answer for Business Teams (Not a Doom Headline)",
    metaTitle: "Can AI Do My Job? A Realistic 2026 Answer | Evan Weber",
    metaDescription:
      "Worried agentic AI will replace your job? Here's the honest answer from an AI trainer who works with real teams every week — which tasks AI actually takes over, which don't, and how to come out ahead of it instead of behind it.",
    excerpt:
      "I get asked some version of \"is AI going to take my job?\" in almost every training session. Here's the honest answer — no headline, no hype — from someone who watches this play out with real teams every week.",
    category: "Career",
    tags: ["Job security", "AI and jobs", "Career advice", "Agentic AI"],
    readingTime: "9 min read",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    intro: [
      "Somewhere in the first ten minutes of almost every training session, someone asks the question they actually came in worried about: \"be honest — is this going to take my job?\"",
      "It's a fair question and it deserves a real answer, not a reassurance speech and not a doom headline. So here's the version I actually give: the difference between a job and a task, which of your tasks are genuinely on the table, and what to do about it either way.",
    ],
    sections: [
      {
        heading: "Your job is not one thing — that's the whole answer",
        paragraphs: [
          "\"My job\" is really a bundle of dozens of distinct tasks, and [agentic AI](/glossary/agentic-ai) doesn't evaluate a job title, it evaluates a task. Some of the tasks in your bundle are the kind AI is already good at. Others aren't, and won't be for a long time, if ever.",
          "That reframe matters because it turns an unanswerable, existential question (\"will AI replace me\") into a concrete, useful one (\"which of my specific tasks is AI actually good at, and what does that free me up to do instead\").",
        ],
      },
      {
        heading: "The tasks that are genuinely on the table",
        paragraphs: [
          "Be honest with yourself about this category, because pretending otherwise doesn't protect you — getting ahead of it does:",
        ],
        bullets: [
          "Pure information assembly — pulling data from known sources and formatting it into a standard output. If a task is \"gather X, format as Y,\" AI does this well today.",
          "First-draft generation — routine emails, standard documents, boilerplate reports. The first 80% of the work compresses hard.",
          "Repetitive research and summarization — reading a volume of material to extract known-shape answers.",
        ],
      },
      {
        heading: "The tasks that are not — and this is most of what makes a role valuable",
        paragraphs: [
          "This is the part the doom headlines skip, and it's the majority of what actually makes a role worth paying for:",
        ],
        bullets: [
          "Judgment under ambiguity — deciding what matters when the inputs are incomplete or conflicting. AI can surface options within a [human-in-the-loop](/glossary/human-in-the-loop) process; it can't own the accountability for the call.",
          "Relationship and trust — a client, patient, or candidate choosing to work with a specific person because of the relationship, not the deliverable.",
          "Context only a human has — organizational history, unwritten politics, who's actually going to push back on a decision and why.",
          "Final accountability — someone has to be answerable when it matters. That's a human role by definition, not a technical limitation that goes away with a better model.",
        ],
      },
      {
        heading: "The people who lose out aren't the ones AI replaces — they're the ones who ignore it",
        paragraphs: [
          "In every industry I've watched go through a real technology shift — and after 25 years in digital marketing, I've watched a few — the risk was never \"the tool takes your job.\" It was \"the person using the tool takes the job of the person who didn't learn it.\"",
          "The practical move isn't to hope AI stays away from your role. It's to be the person on the team who's already fluent in it, handing off the assembly work and spending the reclaimed time on the judgment, relationship, and accountability work that actually makes you valuable — and that's genuinely hard to automate.",
        ],
      },
      {
        heading: "A simple way to audit your own role",
        paragraphs: [
          "List the recurring tasks in your week. For each one, ask two questions: is the input well-defined, and is the output judged mostly on accuracy and formatting rather than relationship or accountability? Tasks that answer yes to both are the ones to hand to AI first — not because you have to, but because doing so is how you get faster and more valuable, not less.",
          "If you want a faster version of this audit specific to your actual job description, I built a free [job description analyzer](/job-description-analyzer) for exactly this — paste in your job description and it breaks the tasks down the same way, tuned to your role.",
        ],
      },
    ],
    keyTakeaways: [
      "AI doesn't replace \"a job\" — it automates specific tasks. The real question is which of your tasks are that kind of task, not whether your job title survives.",
      "Information assembly, first drafts, and repetitive research/summarization are genuinely on the table today.",
      "Judgment under ambiguity, relationship and trust, organizational context, and final accountability are not — and they're most of what makes a role valuable.",
      "The competitive risk isn't the tool — it's being the person on the team who didn't learn to use it while others did.",
    ],
    faqs: [
      {
        q: "Which jobs are most at risk from AI?",
        a: "It's more accurate to talk about tasks than whole jobs. Roles with a high share of pure information-assembly and first-draft work (parts of admin, data entry, basic reporting) see the most task-level automation. Roles centered on judgment, relationships, and accountability change less, even when AI tools are heavily adopted.",
      },
      {
        q: "Should I be worried about AI taking my job?",
        a: "The realistic risk isn't the AI itself — it's falling behind colleagues who learn to use it well. Getting fluent with tools like Claude Cowork early is the practical way to come out ahead of that shift instead of behind it.",
      },
      {
        q: "Is there a free tool to check which of my specific tasks AI could handle?",
        a: "Yes — the job description analyzer on this site takes a real job description and breaks down which tasks are well-suited to AI assistance and which aren't, tuned to the actual role rather than a generic list.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
