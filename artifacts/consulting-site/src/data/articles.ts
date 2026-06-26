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
          "People throw around \"agentic AI\" like it's a buzzword, but it points at a real, specific difference. A chatbot is reactive — you ask, it answers, the loop ends. An agent is goal-directed — you give it an outcome, and it plans, takes multiple steps, uses tools, checks its own work, and keeps going until the job is done.",
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
          "This is the distinction that trips up technical teams. Claude Code is Anthropic's agent built specifically for software development — it lives in the terminal and IDE, and it's optimized for reading codebases, writing and refactoring code, and running tests.",
          "Cowork is the generalist. It's built for everyone — marketers, recruiters, paralegals, finance teams, operations — to automate knowledge work, not just code. There's overlap (both can run a shell), but think of Claude Code as the tool for engineers shipping software, and Cowork as the digital colleague for the other 90% of your company.",
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
          "Here's a concrete example from how I actually use it. Every week I need a performance digest pulled from a few different platforms. Instead of logging into each one, exporting, and assembling a doc by hand, I hand Cowork the exports, it does the analysis, writes the narrative in our house format, and flags the three things worth my attention. A task that used to eat an hour now takes about ten minutes of review.",
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
          "Computer use — with background computer use, Codex can operate the apps on your machine by seeing, clicking, and typing with its own cursor, including multiple agents working at once without interrupting you.",
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
          "If you're a software team, or a technical founder who lives in GitHub and wants to parallelize real development work, the Codex app deserves a serious look — and in my coding-focused trainings I cover it alongside Claude Code, Replit, and GitHub Copilot.",
          "If you're a non-technical business team trying to automate knowledge work — reports, research, intake, correspondence — the comparison gets more nuanced, which is exactly why I wrote the dedicated Cowork-vs-Codex piece.",
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
          "Choose Claude Cowork if you're a non-technical business team automating knowledge work — reports, research, intake, correspondence, CRM hygiene — and you want a tool the whole department can adopt quickly.",
          "Choose the Codex app if you're a software team or technical founder who wants to parallelize real development work and automate the busywork around shipping code.",
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
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
