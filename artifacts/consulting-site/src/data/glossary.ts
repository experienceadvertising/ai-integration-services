// Glossary of agentic-AI terms. Each term gets its own page for featured
// snippets and LLM citation. The `short` field is written to stand alone as a
// definition (it doubles as the meta description and the snippet bots quote).

export interface GlossaryTerm {
  slug: string;
  term: string;
  aliases?: string[];
  category: string;
  short: string; // 1–2 sentence standalone definition
  body: string[]; // longer explanation
  related: string[]; // related term slugs
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "claude-cowork",
    term: "Claude Cowork",
    category: "Anthropic",
    short:
      "Claude Cowork is Anthropic's agentic desktop mode, available in the Claude desktop app, that lets Claude operate your computer — reading and writing files, running a sandboxed shell, driving apps, and connecting to your tools via MCP — instead of only chatting.",
    body: [
      "Claude Cowork turns Claude from a chat assistant into a digital colleague that can actually do work on your machine. Where a chatbot returns words, Cowork returns completed work: it can open your files, analyze data, draft documents in your format, operate desktop and web apps, and connect to services like Gmail, Slack, Google Drive, and your CRM through MCP integrations.",
      "It is built for everyone, not just developers. Non-technical teams — marketing, recruiting, finance, legal, operations — use Cowork to automate the repetitive, multi-step knowledge work that fills their week. It uses a human-in-the-loop model, asking for approval before sensitive actions, and runs locally on your computer.",
      "Cowork is distinct from Claude.ai (the browser chat), Claude Code (the developer-focused coding agent), and Claude Computer Use (the API capability). It is the general-purpose, do-the-work member of the family.",
    ],
    related: ["agentic-ai", "claude-code", "mcp", "computer-use", "human-in-the-loop"],
  },
  {
    slug: "agentic-ai",
    term: "Agentic AI",
    aliases: ["AI agent"],
    category: "Concept",
    short:
      "Agentic AI describes AI systems that are goal-directed rather than reactive — given an objective, they plan, take multiple steps, use tools, check their own work, and continue until the task is done, instead of just answering a single prompt.",
    body: [
      "A traditional chatbot is reactive: you ask, it answers, the loop ends. An agentic system is autonomous within bounds: you hand it an outcome, and it decides the steps, calls tools, reacts to what it finds, and keeps going until it reaches the goal — with a human approving key actions.",
      "In practice, agentic AI is what lets a tool open your files, pull data from several sources, write a report, and flag what matters — all from one instruction. Claude Cowork and the OpenAI Codex app are both examples of agentic AI applied to the desktop.",
    ],
    related: ["claude-cowork", "codex-app", "computer-use", "llm"],
  },
  {
    slug: "mcp",
    term: "MCP (Model Context Protocol)",
    aliases: ["Model Context Protocol"],
    category: "Standard",
    short:
      "The Model Context Protocol (MCP) is an open standard, introduced by Anthropic, that lets AI applications connect to external tools and data sources — like Google Drive, Slack, databases, and CRMs — through a consistent interface, so an AI agent can read from and act on the tools you already use.",
    body: [
      "MCP is the 'plug' that connects an AI agent to the rest of your stack. Instead of every tool needing a custom integration, MCP defines a common way for an AI to discover and use external capabilities — fetching files, querying a database, posting a message, calling an API.",
      "For Claude Cowork users, MCP is what makes the difference between an AI that can only talk and one that can actually operate inside your Gmail, Notion, Salesforce, HubSpot, or internal systems. Setting up the right MCP connections is usually the first thing that unlocks real workflow automation.",
    ],
    related: ["claude-cowork", "agentic-ai", "claude"],
  },
  {
    slug: "vibe-coding",
    term: "Vibe coding",
    category: "Concept",
    short:
      "Vibe coding is the practice of building software by describing what you want in plain language and letting an AI write and edit the code, so people can ship working apps and automations without traditional hands-on-keyboard programming.",
    body: [
      "The term captures a shift in how software gets made: instead of writing every line yourself, you steer an AI coding agent with natural-language goals, review what it produces, and iterate. Tools like Claude Code, Replit, GitHub Copilot, and the OpenAI Codex app make this possible.",
      "Vibe coding doesn't remove the need for judgment — you still decide what to build, test the result, and guide the direction — but it dramatically lowers the barrier to turning an idea into something that runs. It's how non-engineers prototype tools and how engineers move much faster.",
    ],
    related: ["claude-code", "codex-app", "agentic-ai"],
  },
  {
    slug: "claude-code",
    term: "Claude Code",
    category: "Anthropic",
    short:
      "Claude Code is Anthropic's agentic AI tool built specifically for software development. It works in the terminal and IDE, reading codebases, writing and refactoring code, running tests, and executing commands to help engineers ship software faster.",
    body: [
      "Where Claude Cowork is the generalist for all knowledge work, Claude Code is the specialist for engineering. It's optimized for understanding large codebases, making multi-file changes, running and fixing tests, and automating development tasks from the command line.",
      "Claude Code is a primary tool in vibe-coding workflows. Technical teams often use Claude Code (and tools like the Codex app) for development while non-technical teammates use Claude Cowork for business work.",
    ],
    related: ["claude-cowork", "vibe-coding", "codex-app", "agentic-ai"],
  },
  {
    slug: "codex-app",
    term: "OpenAI Codex app",
    aliases: ["Codex", "Codex desktop app"],
    category: "OpenAI",
    short:
      "The OpenAI Codex app is a desktop application for macOS and Windows that acts as a command center for AI coding agents — running multiple agents in parallel, using background computer use to operate your apps, and automating routine engineering work with reusable skills.",
    body: [
      "Codex began as OpenAI's coding model and grew into a full agentic platform. The desktop app is built around parallelism: rather than one assistant you chat with, it orchestrates many agents at once, each in its own isolated environment, so long-running work compresses into less time.",
      "Its standout features are multi-agent orchestration, background computer use (the agent sees, clicks, and types with its own cursor), Automations for recurring work, and Skills that align the agent to a team's standards. Much of its execution runs in OpenAI's cloud and it is deeply GitHub-native, which makes it especially strong for software engineering.",
    ],
    related: ["agentic-ai", "claude-cowork", "vibe-coding", "computer-use"],
  },
  {
    slug: "computer-use",
    term: "Computer use",
    category: "Concept",
    short:
      "Computer use is an AI capability where the model operates a computer the way a person does — viewing the screen, moving the cursor, clicking, and typing — so it can use any application directly instead of relying on a special API for each one.",
    body: [
      "Computer use is what lets an AI agent work with software that has no convenient integration: it perceives the interface visually and drives it with simulated mouse and keyboard actions. This is the mechanism behind much of what makes agentic desktop tools feel like a real assistant.",
      "Both Anthropic and OpenAI ship computer-use capabilities — Anthropic via Claude (including in Cowork) and OpenAI via the Codex app's background computer use. It's powerful, which is exactly why human-in-the-loop approvals matter for sensitive actions.",
    ],
    related: ["agentic-ai", "claude-cowork", "codex-app", "human-in-the-loop"],
  },
  {
    slug: "human-in-the-loop",
    term: "Human-in-the-loop",
    category: "Concept",
    short:
      "Human-in-the-loop is a design approach where an AI system pauses to get a person's approval before taking consequential actions, keeping a human in control of decisions that carry risk while still letting the AI do the heavy lifting.",
    body: [
      "For agentic AI that can operate your computer and connected accounts, human-in-the-loop is a core safety mechanism. The agent proposes or prepares an action — sending an email, deleting a file, posting to a system — and waits for you to approve it.",
      "Claude Cowork uses this model prominently, which is part of why it's a comfortable fit for non-technical teams handling real business data. It lets you capture the speed of automation without giving up oversight.",
    ],
    related: ["claude-cowork", "computer-use", "agentic-ai"],
  },
  {
    slug: "llm",
    term: "LLM (Large Language Model)",
    aliases: ["Large Language Model"],
    category: "Concept",
    short:
      "A large language model (LLM) is an AI system trained on vast amounts of text to understand and generate human language, predicting likely continuations to answer questions, write, summarize, reason, and — when connected to tools — drive agentic workflows.",
    body: [
      "LLMs are the engines behind modern AI assistants. Anthropic's Claude and OpenAI's GPT models are LLMs. On their own they generate text; paired with tools, memory, and the ability to act, they become the reasoning core of agentic systems like Claude Cowork and the Codex app.",
      "Understanding that an LLM is a prediction system — powerful but not infallible — is why review and human-in-the-loop checks remain part of any serious workflow.",
    ],
    related: ["claude", "agentic-ai", "prompt-engineering"],
  },
  {
    slug: "claude",
    term: "Claude",
    aliases: ["Anthropic Claude"],
    category: "Anthropic",
    short:
      "Claude is the family of large language models built by Anthropic, available through the Claude.ai web app, mobile apps, the Claude desktop app (home of Claude Cowork), Claude Code, and the Anthropic API.",
    body: [
      "Claude is known for strong reasoning, long context, careful instruction-following, and a focus on safety. The same underlying intelligence powers several products: Claude.ai for chat, Claude Code for development, and Claude Cowork for agentic desktop work.",
      "When people compare 'Claude vs ChatGPT,' they're comparing Anthropic's Claude with OpenAI's GPT-powered products. Which fits best depends on the task, the team, and the workflow.",
    ],
    related: ["claude-cowork", "claude-code", "llm", "mcp"],
  },
  {
    slug: "prompt-engineering",
    term: "Prompt engineering",
    category: "Concept",
    short:
      "Prompt engineering is the practice of writing clear, well-structured instructions that get an AI model to produce the result you want — specifying context, format, constraints, and examples so the output is accurate and useful.",
    body: [
      "Good prompting is less about tricks and more about clear communication: telling the AI what you want, in what format, with what context, and what to avoid. For agentic tools, prompts also describe the goal and the steps, then let the agent execute.",
      "In practice, a reusable, well-built prompt is the difference between a generic answer and a finished deliverable. A lot of what training delivers is a library of prompts tuned to a team's real tasks.",
    ],
    related: ["llm", "claude-cowork", "agentic-ai"],
  },
  {
    slug: "ai-workflow-automation",
    term: "AI workflow automation",
    category: "Concept",
    short:
      "AI workflow automation is using AI agents to carry out multi-step business processes end to end — gathering inputs, performing the work, and producing a finished output — turning recurring manual tasks like reporting, research, and intake into reviewable, on-demand results.",
    body: [
      "Unlike rigid, rules-based automation, AI workflow automation can handle fuzzy, language-heavy work: reading documents, summarizing, drafting, and adapting to context. An agent like Claude Cowork can own a whole task — for example, assembling a weekly report from several data sources and writing the narrative.",
      "The highest-value automations are usually the repetitive, multi-step tasks that quietly consume hours each week. Identifying and building those is the core of what AI productivity training focuses on.",
    ],
    related: ["agentic-ai", "claude-cowork", "mcp"],
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
