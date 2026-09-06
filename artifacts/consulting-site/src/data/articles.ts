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
    slug: "gpt-6-astra-business-guide",
    title:
      "What Is GPT-6 Astra? A Practical Guide for Business and Marketing Teams",
    metaTitle: "What Is GPT-6 Astra? Practical Business Guide | Evan Weber",
    metaDescription:
      "Learn what GPT-6 Astra can do for marketing, research, computer use, coding, documents, and online business workflows, plus how to use it responsibly.",
    excerpt:
      "GPT-6 Astra can connect research, computer use, coding, and professional deliverables in one workflow. Here is how business teams can put that capability to work without losing control of the process.",
    category: "ChatGPT",
    tags: [
      "GPT-6 Astra",
      "ChatGPT",
      "Agentic AI",
      "AI for business",
      "AI marketing",
    ],
    readingTime: "10 min read",
    datePublished: "2026-09-05",
    dateModified: "2026-09-06",
    intro: [
      "GPT-6 Astra is OpenAI's most capable model for complex, end-to-end work. It combines advanced reasoning with browsing, computer use, coding, research, and document creation, which means it can help complete a connected business workflow instead of only answering one prompt at a time.",
      "For business teams, the practical question is not whether Astra is smarter on a benchmark. It is whether it can help finish meaningful work more quickly and reliably. The answer is yes, but only when you give it a clear outcome, the right context, appropriate access, and a real review process.",
    ],
    sections: [
      {
        heading: "Astra is built for complete assignments",
        paragraphs: [
          "Most people still use AI one prompt at a time. They ask for a summary, then a few ideas, then a draft. They manually carry the output from one application to another. That is useful, but it leaves most of the real workflow on the person's shoulders.",
          "[OpenAI describes GPT-6 Astra](https://openai.com/index/gpt-6-astra/) as a model for demanding professional work across browsers, code, files, and business software. It can research a topic, use tools, create a deliverable, incorporate a new requirement, and continue working without losing sight of the larger goal. That connected capability is what makes Astra important.",
        ],
      },
      {
        heading: "What marketing teams can do with GPT-6 Astra",
        paragraphs: [
          "Marketing is a strong use case because nearly every serious assignment combines strategy, research, creation, analysis, and execution. Astra can help connect those pieces instead of treating each one as an isolated prompt.",
          "A team could give Astra a product brief, customer research, previous campaign results, brand guidelines, and access to relevant files. It could analyze the market, identify positioning opportunities, propose campaign angles, draft the creative brief, build a reporting spreadsheet, and help create or improve the landing page. A person still owns the strategy and approves the consequential decisions, but far more of the production work can happen inside one managed process.",
        ],
        bullets: [
          "SEO and content: research a topic, compare authoritative sources, map search intent, build a content brief, draft the page, and review it for clarity and factual support.",
          "Paid media: analyze campaign exports, find patterns, develop test ideas, improve the message from ad to landing page, and prepare recommendations for human approval.",
          "Conversion optimization: review a website or funnel, identify friction, prioritize improvements, create revised copy or components, and test the resulting experience.",
          "Affiliate and influencer marketing: research potential partners, organize qualification data, develop outreach angles, and prepare personalized messages without automating the final relationship decision.",
          "Reporting: combine exports and source documents into a clear spreadsheet, presentation, or written analysis that follows the team's normal format.",
        ],
      },
      {
        heading: "Computer use turns advice into action",
        paragraphs: [
          "A traditional chatbot can explain how to update a CRM, prepare a report, or review a website. A computer-using agent can perform the steps across the interfaces it is allowed to access. It can open pages, gather information, enter data, organize records, and work inside professional software.",
          "This is especially valuable for recurring online work that crosses several systems. Instead of writing instructions for a person to follow, you can define the result, provide the rules, and supervise the agent while it completes the workflow. Sensitive steps such as publishing, sending messages, spending money, changing live campaigns, or deleting data should still require explicit approval.",
        ],
      },
      {
        heading: "Astra can help turn an idea into working software",
        paragraphs: [
          "Astra is also a major software engineering model. For non-developers, that does not mean technical knowledge suddenly has no value. It means a knowledgeable business owner or marketer can collaborate much more directly on landing pages, calculators, dashboards, internal tools, websites, and full applications.",
          "The best process goes beyond asking the model to build something. Have it inspect the existing project, explain its plan, implement the change, run automated checks, use the result like a real visitor, and repair the problems it finds. Then ask it to suggest improvements separately so you can decide which ideas actually support the business goal.",
          "This combination of building and reviewing can dramatically shorten the distance from idea to usable product. It is also where a tool such as [Codex](/blog/what-is-codex-app) becomes especially valuable, because the model can work directly with the codebase, tests, and browser instead of handing you a code snippet to figure out yourself.",
        ],
      },
      {
        heading:
          "Documents, spreadsheets, and presentations are real deliverables",
        paragraphs: [
          "Many AI outputs still arrive as a wall of text that someone must reformat. Astra is designed to create professional documents, spreadsheets, and presentations that follow supplied templates and instructions. That matters because formatting is part of whether a deliverable is actually ready to use.",
          "A good assignment should include a reference file, audience, purpose, required sections, source data, and the standard the finished work must meet. You can then ask Astra to produce the artifact, verify its calculations and citations, and compare the result against your template before returning it.",
        ],
      },
      {
        heading: "The right way to introduce Astra to a team",
        paragraphs: [
          "Do not start with a vague instruction to improve productivity. Pick one recurring or high-value assignment with an observable result. Give Astra the same briefing you would give a capable new team member, including examples, constraints, permissions, and the definition of done.",
          "I recommend separating preparation, execution, and approval. Let the agent research, analyze, draft, build, and test within a defined workspace. Require a person to approve external messages, publication, live campaign changes, financial decisions, and access to sensitive information. After the task, capture the instructions and checks that worked so the process becomes repeatable.",
        ],
        bullets: [
          "Start with a clear business outcome, not a list of disconnected prompts.",
          "Provide source material and examples instead of expecting the model to guess your standards.",
          "Limit access to the files, apps, and accounts the assignment actually requires.",
          "Ask for evidence, test results, and links so important work can be verified.",
          "Keep a human approval step before any consequential external action.",
          "Review the finished workflow and improve the instructions for the next run.",
        ],
      },
      {
        heading: "When to use Astra and when a faster model is enough",
        paragraphs: [
          "Astra is intended for hard, multi-step work, and it can burn through tokens or plan usage quickly during long, tool-heavy assignments. I would not make it the default for every short email, simple rewrite, routine question, or everyday marketing task.",
          "The official API prices help explain the difference. [OpenAI lists Astra at $10 per million input tokens and $50 per million output tokens](https://openai.com/index/gpt-6-astra/), compared with [$4 per million input tokens and $20 per million output tokens for GPT-5.6 Sol](https://developers.openai.com/api/docs/models/gpt-5.6-sol). That makes Astra 2.5 times the API price per token before separate cache, tool, fast-mode, and long-context charges are considered.",
          "Early user reports suggest subscription usage can disappear much faster too, but the results vary enough that they should be treated as anecdotes, not a guaranteed burn rate. [One Pro user reported using about 30% of a weekly allowance during several hours of Astra High work, compared with an estimated 15% for the same time on Sol](https://www.reddit.com/r/OpenAI/comments/1w7nwts/be_aware_astra_burns_usage/). [A Plus user reported that an agentic coding session on Astra High exhausted a five-hour allowance in roughly 20 minutes](https://www.reddit.com/r/ChatGPT/comments/1w7v30t/chatgpt_6_astra_high_burning_through_usage_really/). At the other end, [another user reported a 53-minute Astra Medium task using about 2% of a weekly limit, versus about 1% for a similar Sol High task](https://www.reddit.com/r/GPT/comments/1w87yn9/gpt6_astra_my_002/). The spread shows how much the result depends on the task, context size, tools, retries, reasoning level, and plan.",
          "Use a light or low reasoning setting when it is available and the assignment does not require maximum depth. Better yet, save Astra for the strategic, technical, cross-application, and high-stakes work where its added capability can justify the usage.",
          "GPT-5.6 Sol is still an extremely capable everyday model. It is a strong choice for most research, writing, analysis, marketing production, and routine coding. Move up to Astra when the job involves difficult judgment, several tools, a large amount of context, conflicting evidence, or a deliverable that needs unusually careful verification. The goal is not to use the biggest model all day. It is to use the right model for the job.",
        ],
      },
      {
        heading: "Capability makes good management more valuable",
        paragraphs: [
          "Astra can do more, but it does not remove the need for expertise. Someone still has to choose the goal, judge the evidence, understand the customer, protect the business, and decide whether the final work is good enough.",
          "The advantage will go to people who learn how to manage AI well. They will know how to frame an assignment, provide context, set boundaries, steer the work, verify the result, and turn a successful run into a reusable workflow. Those are practical skills, and they apply across ChatGPT, [Claude Cowork](/blog/what-is-claude-cowork), Codex, and whatever capable agent comes next.",
          "If you want to build those skills around the work you actually do, [LearnCowork.net](https://learncowork.net) offers hands-on one-on-one and team training. We work on your real workflows so you leave with something useful running, not just a list of AI tips.",
        ],
      },
    ],
    keyTakeaways: [
      "GPT-6 Astra combines reasoning, research, browsing, computer use, coding, and professional deliverable creation for complex end-to-end work.",
      "Marketing teams can use it to connect research, strategy, production, analysis, landing-page work, and reporting inside one supervised workflow.",
      "A reliable process includes clear goals, relevant context, limited permissions, verification, and human approval before consequential actions.",
      "Astra can consume usage quickly, so use a lighter reasoning setting when appropriate and reserve it for demanding work. GPT-5.6 Sol remains highly capable for most everyday assignments.",
      "The durable skill is learning how to manage AI agents, not memorizing prompts for one specific model.",
    ],
    faqs: [
      {
        q: "What is GPT-6 Astra?",
        a: "GPT-6 Astra is OpenAI's most capable model for difficult end-to-end work. It combines advanced reasoning with research, browsing, computer use, software engineering, and the creation of documents, spreadsheets, and presentations.",
      },
      {
        q: "How can marketing teams use GPT-6 Astra?",
        a: "Marketing teams can use Astra for connected assignments that include market research, SEO, campaign strategy, content, paid-media analysis, conversion optimization, reporting, landing pages, and browser-based work. Important publishing, spending, and account changes should remain subject to human approval.",
      },
      {
        q: "Can GPT-6 Astra operate a computer?",
        a: "Yes. With supported tools and appropriate permissions, Astra can work across browsers and professional software, gather information, enter data, create deliverables, and complete multi-step online workflows.",
      },
      {
        q: "Can GPT-6 Astra build websites and applications?",
        a: "Yes. Astra is designed for advanced software engineering and can help inspect a codebase, build or modify websites and applications, run tests, and check the result in a browser. A person should still review security, tracking, usability, and production changes before release.",
      },
      {
        q: "Is GPT-6 Astra available to everyone?",
        a: "OpenAI announced a phased rollout beginning September 3, 2026. Access is initially limited and is planned to expand to eligible ChatGPT Plus, Pro, Business, and Enterprise users, as well as the API, Microsoft Azure, and AWS Bedrock.",
      },
    ],
  },
  {
    slug: "what-is-chatgpt-work",
    title:
      "What the ChatGPT Work Desktop App Actually Is, and How It Compares to Claude Cowork",
    metaTitle: "What Is ChatGPT Work? A Plain-English 2026 Guide | Evan Weber",
    metaDescription:
      "ChatGPT Work is OpenAI's new agentic desktop app that operates your computer, a built-in browser, and your connected work apps to deliver finished work. Here is what it actually is, and an honest comparison with Claude Cowork, from someone who trains teams on both.",
    excerpt:
      "OpenAI just shipped ChatGPT Work, a desktop agent that does the work instead of just chatting about it. Here is the plain-English rundown, and an honest side-by-side with Claude Cowork, from someone who runs both every day.",
    category: "ChatGPT",
    tags: ["ChatGPT Work", "OpenAI", "Agentic AI", "Claude Cowork"],
    readingTime: "9 min read",
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    intro: [
      "A new name landed on every team's radar in July 2026: ChatGPT Work. OpenAI shipped it as part of a rebuilt ChatGPT desktop app, and within a day I had clients messaging me to ask whether it replaces the Claude Cowork setups we had just finished building together.",
      "I train business teams on agentic desktop AI for a living, and I run the major tools every single day. So here is the straight version, no hype: what ChatGPT Work actually is, what it does on your machine, and how honestly it stacks up against Claude Cowork.",
    ],
    sections: [
      {
        heading: "The one-sentence definition",
        paragraphs: [
          "ChatGPT Work is OpenAI's agentic desktop experience: a rebuilt ChatGPT app for Mac and Windows that can operate your computer, a built-in browser, and your connected work apps to produce finished deliverables, instead of only answering questions in a chat box.",
          "That is the whole leap, and it is the same leap Claude Cowork made. A normal chatbot hands you words. ChatGPT Work hands you completed work: it gathers information from your files and apps, does the task across multiple steps, and returns an actual artifact like a spreadsheet, a slide deck, a document, or a working web app. It runs on OpenAI's GPT-5.6 model, which is built to reason through multi-step jobs and follow your templates and reference files.",
        ],
      },
      {
        heading: "What actually ships in the new desktop app",
        paragraphs: [
          "The launch was not just a new feature toggle. OpenAI folded several products into one unified desktop app, and that is worth understanding before you decide anything:",
        ],
        bullets: [
          "One unified desktop app for Mac and Windows, available to all ChatGPT users, with the agentic Work experience built in.",
          "A built-in browser plus [computer use](/glossary/computer-use), so ChatGPT can see the screen, click, type, and drive websites and desktop apps on its own.",
          "Codex, OpenAI's coding agent, merged into the same app, so engineering work and business work now live under one roof.",
          "The ability to work across your local files, your installed apps, and live websites in a single task, rather than staying trapped in a chat window.",
        ],
      },
      {
        heading: "Why this counts as agentic, not just chat",
        paragraphs: [
          'People overuse the word "[agentic](/glossary/agentic-ai)," but it points at a real difference. A chatbot is reactive: you ask, it answers, the loop ends. An agent is goal-directed: you hand it an outcome, and it plans the steps, uses tools, checks its own work, and keeps going until the job is done.',
          "In practice that means you can tell ChatGPT Work something like \"pull last month's numbers from these exports, build the board summary in our usual format, and flag anything that moved more than ten percent,\" and it will open the files, run the analysis, assemble the deck or document, and hand it back. That is the same shape of work I build with teams in Claude Cowork, now coming from OpenAI's side of the fence.",
        ],
      },
      {
        heading: "The connectors are where the real work happens",
        paragraphs: [
          "The headline capability is not the browser. It is the connectors. ChatGPT Work plugs into the tools your team already lives in, which is what turns it from a clever demo into something that touches your actual workflow.",
          "As of launch it connects to Slack, Microsoft Teams, Google Drive, SharePoint, email, calendars, CRMs, and project trackers. If you have used Claude Cowork, this will feel familiar: it is the same idea as connecting Claude to your stack through [MCP](/glossary/mcp), just OpenAI's own version of the plumbing. And as with any tool that can reach into your real accounts, the connectors you set up are exactly where you want to be deliberate about permissions and data handling.",
        ],
      },
      {
        heading: "ChatGPT Work vs. Claude Cowork: the honest comparison",
        paragraphs: [
          "This is the question I get most, so here is my real answer after using both. They are more alike than either company's marketing admits. Both are agentic desktop apps that operate your computer and connected tools to deliver finished work. The differences are about ecosystem and philosophy, not some giant capability gap.",
        ],
        bullets: [
          "Ecosystem fit: ChatGPT Work leans naturally into the Microsoft and OpenAI world (Teams, SharePoint), while [Claude Cowork](/claude-cowork-training) is a strong general-purpose fit and is often the more comfortable starting point for non-technical teams.",
          "Coding under one roof: ChatGPT Work bundles Codex into the same app, so engineering and business work share one tool. On the Anthropic side, that split lives across Cowork and Claude Code (I break this down in the [Cowork vs. Codex piece](/blog/claude-cowork-vs-codex)).",
          "Approach to control: both keep a human in the loop for sensitive actions, and with both I always walk teams through the privacy and data settings before we automate anything real.",
          "The honest bottom line: the tool matters less than whether your team actually knows how to hand off the right work to it. That skill transfers between both.",
        ],
      },
      {
        heading: "Who I would point toward ChatGPT Work",
        paragraphs: [
          "If your company already runs on Microsoft 365 and Teams, or your team is deep in the ChatGPT habit and standardized on OpenAI, ChatGPT Work is an easy and natural fit. Having Codex in the same app is also a genuine plus for companies where the same people do both operational work and light building.",
          "If you are a non-technical business team and you want the shortest path to a digital colleague that automates reports, research, intake, and correspondence, I still often start teams on Claude Cowork, and I explain exactly why in my [full Cowork explainer](/blog/what-is-claude-cowork). The good news is you are not locked in. Many teams I work with end up using both, and the workflow-building skills carry across cleanly.",
        ],
      },
      {
        heading: "A note for anyone in marketing or SEO",
        paragraphs: [
          "There is a second story inside this launch that most people miss. Now that millions of people ask ChatGPT Work to research vendors, compile options, and recommend a choice, being the answer it surfaces is its own discipline. That is answer engine optimization, and it is quickly becoming as important as ranking on Google used to be.",
          "This is close to home for me. Getting a business cited by ChatGPT, Claude, Gemini, and Perplexity is exactly what my tool [AEOImprovement.com](https://aeoimprovement.com) is built for. It audits your site's citability across those engines and gives you a 6-dimension score plus evidence-backed fixes, and it is the same playbook I cover in my [AEO and GEO training](/aeo-geo-training). If ChatGPT Work is going to be the front door to how people find services, you want your business to be what it recommends, not invisible to it.",
        ],
      },
      {
        heading: "How to roll it out without losing a month to it",
        paragraphs: [
          "The mistake I watch teams make with every new agentic tool is the same one: they install it, try it once on a hard task, get a mediocre result, and quietly go back to doing everything by hand. The tool was never the problem. Nobody showed them how to scope a task, connect the right apps, and build a workflow that runs reliably the second and hundredth time.",
          "Whether you land on ChatGPT Work, Claude Cowork, or both, the fastest path is to pick one real, painful, recurring task and build it end to end with someone who has done it before. That is the entire reason my training exists, and the skills apply no matter which app your team standardizes on.",
        ],
      },
    ],
    keyTakeaways: [
      "ChatGPT Work is OpenAI's agentic desktop app: it operates your computer, a built-in browser, and connected work apps to deliver finished work, powered by GPT-5.6.",
      "It ships inside a unified ChatGPT desktop app for Mac and Windows, with Codex merged in and computer use built into the same tool.",
      "Its connectors (Slack, Microsoft Teams, Google Drive, SharePoint, email, calendars, CRMs, project trackers) are what make it useful, the same role MCP plays for Claude Cowork.",
      "ChatGPT Work and Claude Cowork are more alike than different. The right choice depends on your ecosystem, and the workflow-building skills transfer between both.",
    ],
    faqs: [
      {
        q: "Is ChatGPT Work free?",
        a: "The unified ChatGPT desktop app that hosts the Work experience launched as available to all ChatGPT users on Mac and Windows, with heavier usage tied to paid ChatGPT plans. My training is separate from any subscription: a 1-hour session is $300 and a 4-hour deep dive is $1,000.",
      },
      {
        q: "Is ChatGPT Work the same as Claude Cowork?",
        a: "No, they are competing products from different companies, but they are very similar in concept. Both are agentic desktop apps that can operate your computer and connected tools to produce finished work. ChatGPT Work is OpenAI's version and Claude Cowork is Anthropic's. I train teams on both.",
      },
      {
        q: "Do I need to be technical to use ChatGPT Work?",
        a: "No. Like Claude Cowork, ChatGPT Work is designed for regular business users, not just developers. If your team can use a browser and approve an action, they can use it. The value comes from knowing how to hand off the right tasks, which is exactly what training covers.",
      },
      {
        q: "Can ChatGPT Work connect to my company's tools?",
        a: "Yes. At launch it connects to Slack, Microsoft Teams, Google Drive, SharePoint, email, calendars, CRMs, and project trackers. As with any tool that reaches into your real accounts, I walk teams through permissions and data handling before automating sensitive work.",
      },
    ],
  },

  {
    slug: "what-is-claude-cowork",
    title:
      "What Claude Cowork Actually Is — and How It's Different from Claude.ai, Claude Code, and ChatGPT",
    metaTitle:
      "What Is Claude Cowork? A Plain-English Guide (2026) | Evan Weber",
    metaDescription:
      "Claude Cowork is Anthropic's agentic desktop AI that operates your computer, handles files, and runs multi-step work. Here's what it actually is — and how it differs from Claude.ai, Claude Code, and ChatGPT — from someone who uses it daily.",
    excerpt:
      'I get asked "what is Claude Cowork, exactly?" in almost every session. Here\'s the plain-English answer, and the clear lines between Cowork, Claude.ai, Claude Code, and ChatGPT.',
    category: "Claude Cowork",
    tags: ["Claude Cowork", "Agentic AI", "Anthropic", "AI productivity"],
    readingTime: "9 min read",
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    intro: [
      'I train business teams on Claude Cowork for a living, and the single most common question I get — usually in the first five minutes of a session — is some version of "wait, how is this different from the Claude I already use in my browser?"',
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
        heading: 'Why "agentic" is the word that matters',
        paragraphs: [
          'People throw around "[agentic AI](/glossary/agentic-ai)" like it\'s a buzzword, but it points at a real, specific difference. A chatbot is reactive — you ask, it answers, the loop ends. An agent is goal-directed — you give it an outcome, and it plans, takes multiple steps, uses tools, checks its own work, and keeps going until the job is done.',
          'In practice, that means I can tell Cowork "pull this month\'s numbers from these three exports, build the board summary in our usual format, and flag anything that moved more than 10%," and it will open the files, do the analysis, write the document, and hand it back — instead of giving me instructions for how I could do that myself.',
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
    title:
      "The Codex Desktop App, Explained: OpenAI's Answer to Agentic Desktop AI",
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
      'When teams ask me about Claude Cowork, the next question is almost always "what about the OpenAI version?" They mean the Codex app — OpenAI\'s desktop application that, like Cowork, can actually operate your computer instead of just chatting.',
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
          'Four features are what move Codex from "a coding chatbot" to a genuine desktop agent:',
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
    title:
      "Claude Cowork vs. the Codex App: Which Agentic Desktop AI Should Your Team Use?",
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
        heading:
          "Design philosophy: digital colleague vs. engineering platform",
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
    title:
      "How Much Time Can AI Actually Save Your Team? A Realistic, Task-by-Task Breakdown",
    metaTitle:
      "AI Time Savings: A Realistic Breakdown by Task (2026) | Evan Weber",
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
      'Every team I sit down with asks some version of the same question before we even open a laptop: "okay, but how much time is this actually going to save us?" It\'s the right question, and it deserves a better answer than the vague percentages most AI vendors throw around.',
      "So here's the honest version, built from actually watching teams adopt Claude Cowork — broken down by the kind of task, not a single made-up blended number. Some tasks compress by 90%. Others barely move. Knowing which is which is what makes an AI rollout pay off instead of fizzle.",
    ],
    sections: [
      {
        heading:
          'Why the "AI saves you 40% of your time" stat is basically meaningless',
        paragraphs: [
          "Any number that isn't tied to a specific task is a marketing number. A [recruiter's](/roles/recruiters) week and a [financial analyst's](/roles/financial-analysts) week don't have the same mix of high-leverage AI tasks, so a single blended percentage hides more than it reveals.",
          'The useful version of this question isn\'t "how much time will AI save me" — it\'s "which specific tasks in my week are the kind AI is actually good at, and how much of each one goes away." That\'s the breakdown that follows.',
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
      'Blended "AI saves X% of time" stats are marketing numbers — the real answer depends entirely on the task mix in your specific week.',
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
    title:
      "Can AI Do My Job? A Realistic Answer for Business Teams (Not a Doom Headline)",
    metaTitle: "Can AI Do My Job? A Realistic 2026 Answer | Evan Weber",
    metaDescription:
      "Worried agentic AI will replace your job? Here's the honest answer from an AI trainer who works with real teams every week — which tasks AI actually takes over, which don't, and how to come out ahead of it instead of behind it.",
    excerpt:
      'I get asked some version of "is AI going to take my job?" in almost every training session. Here\'s the honest answer — no headline, no hype — from someone who watches this play out with real teams every week.',
    category: "Career",
    tags: ["Job security", "AI and jobs", "Career advice", "Agentic AI"],
    readingTime: "9 min read",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    intro: [
      'Somewhere in the first ten minutes of almost every training session, someone asks the question they actually came in worried about: "be honest — is this going to take my job?"',
      "It's a fair question and it deserves a real answer, not a reassurance speech and not a doom headline. So here's the version I actually give: the difference between a job and a task, which of your tasks are genuinely on the table, and what to do about it either way.",
    ],
    sections: [
      {
        heading: "Your job is not one thing — that's the whole answer",
        paragraphs: [
          "\"My job\" is really a bundle of dozens of distinct tasks, and [agentic AI](/glossary/agentic-ai) doesn't evaluate a job title, it evaluates a task. Some of the tasks in your bundle are the kind AI is already good at. Others aren't, and won't be for a long time, if ever.",
          'That reframe matters because it turns an unanswerable, existential question ("will AI replace me") into a concrete, useful one ("which of my specific tasks is AI actually good at, and what does that free me up to do instead").',
        ],
      },
      {
        heading: "The tasks that are genuinely on the table",
        paragraphs: [
          "Be honest with yourself about this category, because pretending otherwise doesn't protect you — getting ahead of it does:",
        ],
        bullets: [
          'Pure information assembly — pulling data from known sources and formatting it into a standard output. If a task is "gather X, format as Y," AI does this well today.',
          "First-draft generation — routine emails, standard documents, boilerplate reports. The first 80% of the work compresses hard.",
          "Repetitive research and summarization — reading a volume of material to extract known-shape answers.",
        ],
      },
      {
        heading:
          "The tasks that are not — and this is most of what makes a role valuable",
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
        heading:
          "The people who lose out aren't the ones AI replaces — they're the ones who ignore it",
        paragraphs: [
          'In every industry I\'ve watched go through a real technology shift — and after 25 years in digital marketing, I\'ve watched a few — the risk was never "the tool takes your job." It was "the person using the tool takes the job of the person who didn\'t learn it."',
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
      'AI doesn\'t replace "a job" — it automates specific tasks. The real question is which of your tasks are that kind of task, not whether your job title survives.',
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

  {
    slug: "aeo-geo-explained",
    title:
      "AEO & GEO Explained: How Businesses Actually Get Cited by ChatGPT, Claude, and AI Search in 2026",
    metaTitle: "AEO & GEO Explained: An AI Search Playbook (2026) | Evan Weber",
    metaDescription:
      "What Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) actually mean, why they matter now, and the concrete playbook — schema, llms.txt, FAQ structure, crawlable content — using this site as the worked example.",
    excerpt:
      "AEO and GEO aren't buzzwords for a keynote — they're the specific, mechanical reasons some businesses get cited by ChatGPT and Claude and most don't. Here's the real playbook, using this exact site as the case study.",
    category: "AI Search",
    tags: ["AEO", "GEO", "AI search", "SEO", "Answer engine optimization"],
    readingTime: "10 min read",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    intro: [
      "I've spent 25 years watching search evolve — keyword stuffing, then content quality, then featured snippets, then voice search. Every shift had the same shape: the tactics that worked yesterday quietly stopped working, and the businesses that noticed first won for years. We're in the middle of one of those shifts right now, and it's the biggest one yet.",
      "When someone asks ChatGPT, Claude, or Perplexity a question today, they usually don't get ten blue links back — they get a synthesized answer with two or three sources cited, or none at all. [AEO](/glossary/aeo) and [GEO](/glossary/geo) are the practices for making sure your business is one of those sources instead of invisible to the whole conversation. This isn't theory — it's the exact set of things I did to this site, and I'll show you all of it.",
    ],
    sections: [
      {
        heading: "AEO vs. GEO — they're related, not the same thing",
        paragraphs: [
          "[Answer Engine Optimization (AEO)](/glossary/aeo) is the older discipline: structuring content so a system can lift out a direct, self-contained answer — for Google's featured snippets, voice assistants like Siri and Alexa, and \"People Also Ask\" boxes. It's about being extractable.",
          "[Generative Engine Optimization (GEO)](/glossary/geo) is the newer, adjacent discipline: getting your content cited, summarized, or recommended by generative AI systems — ChatGPT, Claude, Perplexity, Google AI Overviews — that synthesize an answer instead of extracting one verbatim. It's about being trustworthy enough, and clear enough, for an [LLM](/glossary/llm) to choose you as a source.",
          "In practice they overlap heavily and the same underlying work supports both, which is why I treat them as one playbook, not two separate projects.",
        ],
      },
      {
        heading: "Why this matters now, not eventually",
        paragraphs: [
          "The traditional SEO model was: rank a page, earn a click, the visitor lands on your site. AI answer engines break that model — the model answers the question directly, on its own surface, often without a click at all. If you're only optimized for the old model, you're optimizing for a shrinking share of how people actually find answers now.",
          "The businesses winning this shift aren't doing anything mysterious. They're doing disciplined, structural work that most sites still skip: clear direct answers, correct structured data, and genuine crawlable access for AI bots. That's a gap you can close.",
        ],
      },
      {
        heading: "The playbook — what actually moves the needle",
        paragraphs: ["This is the concrete list, not the vague one:"],
        bullets: [
          "Lead with the direct answer. Put a plain, one-to-two sentence answer to the obvious question at the top of the page or section — before the nuance, not after it. Answer engines quote the sentence that already reads like an answer.",
          "Structured data, done correctly. FAQPage, Article, Service, and DefinedTerm schema (schema.org / JSON-LD) tell machines exactly what a page contains instead of making them infer it. Critically, the schema has to match the visible content — mismatched structured data gets ignored or penalized.",
          "Explicit Q&A formatting. Real, visible question headings with direct answers underneath outperform the same information buried in narrative paragraphs, for both featured snippets and LLM citation.",
          "Author expertise signals (E-E-A-T). A named, credentialed author with a real bio and a consistent publishing history is a trust signal both Google and LLMs weigh — anonymous or unattributed content is easy to skip when a model is choosing what to cite.",
          "Crawlable by AI bots, on purpose. Your robots.txt needs to explicitly allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and the other AI crawlers — many sites block these by default and never notice.",
          "An llms.txt file. A plain-language summary of what your site is, who runs it, and what's on it, written for an AI system to read directly — the same idea as robots.txt, but aimed at comprehension instead of access control.",
          "Topical depth through internal linking. A glossary, a blog, and genuine cross-links between them build the kind of topical authority that makes a domain look like a real source on a subject, not a single lucky page.",
        ],
      },
      {
        heading: "This site is the worked example",
        paragraphs: [
          "I didn't write this article as theory — I built every item on that list into learncowork.net before writing it. The [/llms.txt file](/llms.txt) at the root of this site is a direct-read summary for AI systems. The robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot, and every major AI crawler. Every training page, tool, and blog post carries FAQPage or Service schema that matches its visible content exactly — not close, exactly, because mismatches undermine the whole point.",
          "This glossary you're reading terms from is itself an AEO/GEO tactic: short, quotable, standalone definitions that are easy for a model to lift and cite correctly, cross-linked into the blog posts and training pages that go deeper. That's not an accident — it's the structure this whole article is describing, applied to itself.",
        ],
      },
      {
        heading: "Where this fits for your business",
        paragraphs: [
          "Most of this is content and technical structure, not a giant redesign: audit your top pages for a missing direct-answer paragraph, add FAQPage schema that matches what's actually on the page, check whether your robots.txt is silently blocking AI crawlers, and publish an llms.txt. To make that audit faster, I built a tool for exactly this, [AEOImprovement.com](https://aeoimprovement.com), which audits your site's citability across ChatGPT, Claude, Gemini, and Perplexity and hands you a 6-dimension AEO score with evidence-backed fixes you can ship today. None of that requires new headcount — it requires someone who knows what to build and where.",
          "If your team is already using [Claude Cowork](/claude-cowork-training) or AI coding tools, this is exactly the kind of structured, repeatable work an agentic AI workflow is good at once it's set up correctly — auditing pages, drafting schema, checking crawlability. I cover this as part of training when a team's goal is AI-search visibility specifically. For full execution — content strategy, technical SEO, and paid alongside it — that's the kind of work my agency, [Experience Advertising](https://experienceadvertising.com), does for clients directly.",
        ],
      },
    ],
    keyTakeaways: [
      "AEO is about being extractable (featured snippets, voice search); GEO is about being citable by generative AI (ChatGPT, Claude, Perplexity, AI Overviews) — the same underlying work supports both.",
      "AI answer engines synthesize an answer instead of showing ranked links, which shrinks the value of old-model SEO tactics and rewards clear, structured, verifiably authored content.",
      "The concrete playbook: direct-answer content, correct and matching structured data, explicit Q&A formatting, author expertise signals, AI-bot-friendly robots.txt, an llms.txt file, and real topical depth via internal linking.",
      "This exact site — its llms.txt, robots.txt, schema, and glossary/blog cross-linking — is a working example of every tactic in this article, not just a description of them.",
    ],
    faqs: [
      {
        q: "What's the difference between AEO and GEO?",
        a: "AEO (Answer Engine Optimization) is about structuring content to be extracted as a direct answer, for featured snippets and voice search. GEO (Generative Engine Optimization) is about being cited or summarized by generative AI systems like ChatGPT and Claude. They overlap heavily and are usually pursued together.",
      },
      {
        q: "Does GEO replace traditional SEO?",
        a: "No — it extends it. Technical fundamentals like site speed, crawlability, and quality content still matter. GEO adds a specific layer on top: structured data, direct-answer formatting, and explicit AI-crawler access that traditional SEO doesn't require.",
      },
      {
        q: "What is an llms.txt file?",
        a: "It's a plain-language summary of a site's purpose and content, placed at the root of the domain, written for AI systems to read directly — conceptually similar to robots.txt, but aimed at giving models an accurate, direct understanding of the site rather than controlling crawler access.",
      },
      {
        q: "How do I know if AI crawlers can access my site?",
        a: "Check your robots.txt for explicit rules covering GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and similar AI user-agents. If they're not mentioned at all, some crawlers may still access the site by default, but an explicit allow rule removes any ambiguity.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
