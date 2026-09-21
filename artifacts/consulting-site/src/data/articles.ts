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
  "slug": "openai-agents-api-business-guide",
  "title": "OpenAI's Agents API: What Business Teams Should Build First",
  "metaTitle": "OpenAI Agents API Guide for Business Teams | Evan Weber",
  "metaDescription": "Learn what OpenAI's Agents API does, which business workflows to build first, how to control approvals and costs, and how to run a practical pilot.",
  "excerpt": "OpenAI's public-beta Agents API brings the managed Codex harness to developers. Here is how business teams can choose a practical first workflow and keep control of cost, quality, and approvals.",
  "category": "AI Agents",
  "tags": [
    "OpenAI Agents API",
    "Codex",
    "AI agents",
    "Business automation",
    "Agent workflows"
  ],
  "readingTime": "10 min read",
  "datePublished": "2026-09-21",
  "dateModified": "2026-09-21",
  "intro": [
    "AI agents are moving from impressive demonstrations into systems a business can assign real work to. The harder question is no longer whether an agent can complete one task. It is whether the agent can keep its context, use the right tools, coordinate parallel work, recover from interruptions, and leave enough evidence for a person to review the result.",
    "On September 10, OpenAI introduced the Agents API in public beta. It gives developers access to the managed agent harness and cloud infrastructure behind Codex. OpenAI says agents can work with files, run code, use tools, coordinate subagents, save intermediate results, and keep long-running jobs moving for days.",
    "That is a meaningful shift for marketers, founders, operations teams, and online businesses. It can turn a recurring assignment into a managed workflow rather than another prompt someone has to restart every week. The opportunity is real, but the first project should be narrow, measurable, and easy to review."
  ],
  "sections": [
    {
      "heading": "What OpenAI actually launched",
      "paragraphs": [
        "[OpenAI describes the Agents API](https://openai.com/index/introducing-the-agents-api/) as a way to build and run cloud agents with the Codex harness, fully managed by OpenAI. The harness handles context, tool use, subagent coordination, environments, files, code execution, and intermediate work.",
        "The Agents API is available to developers in public beta. OpenAI says there is no separate Agents API fee during the beta. Businesses pay for the model tokens and tools their agents use. Public beta matters because the interface, limits, and operating guidance can still change before general availability.",
        "OpenAI also says the underlying Codex harness is open source. That gives technical teams visibility into the orchestration logic while OpenAI manages the cloud infrastructure. A team can inspect how the harness works without operating every part of the execution environment itself."
      ]
    },
    {
      "heading": "The important change is durable execution",
      "paragraphs": [
        "A chatbot waits for the next message. A useful business agent needs to hold onto the assignment while it researches, creates files, runs checks, asks for help when needed, and resumes after an interruption.",
        "Imagine asking an agent to prepare a weekly marketing review. It may need to collect approved exports, compare results with the previous period, find changes that deserve attention, create a spreadsheet, draft a written analysis, and preserve the supporting evidence. If one source is temporarily unavailable, the agent should record the gap and continue with the work that remains possible.",
        "That is why the harness matters. The model is only one part of the system. The environment, instructions, tools, state, checkpoints, and review process determine whether a long-running assignment becomes reliable work or an expensive experiment."
      ]
    },
    {
      "heading": "What business teams should build first",
      "paragraphs": [
        "I would start with an assignment that happens repeatedly, has clear inputs, and produces a deliverable a knowledgeable person can check. Good first workflows include:",
        "These workflows have a visible finish line. They also create useful intermediate artifacts, which makes it easier to see where the agent performed well and where the instructions or tools need improvement."
      ],
      "bullets": [
        "Weekly performance reviews that gather approved data, explain material changes, and produce a report with links to the evidence",
        "Affiliate recruiting research that identifies audience gaps, builds a qualified shortlist, and prepares personalized outreach angles for review",
        "Holiday campaign readiness checks covering offers, landing pages, creative, links, inventory, deadlines, and measurement",
        "Content operations that research a topic, draft platform-specific versions, check claims and links, and stop before publication for approval",
        "Sales preparation that combines account history, public research, meeting notes, and a clear plan for the next conversation",
        "Website quality reviews that test important pages, document defects, prepare fixes, and verify the corrected customer path"
      ]
    },
    {
      "heading": "A holiday affiliate workflow is a strong example",
      "paragraphs": [
        "Holiday affiliate planning requires several kinds of work at once. A manager needs to review the current roster, find missing publisher and creator types, get promising partners on calls, confirm placements, organize promotions, prepare creative, test links, and track who is ready to go live.",
        "One agent could analyze the approved program data and build a call list. A research subagent could review the public content of prospective partners and prepare a short audience-fit note. Another could turn confirmed promotion details into a partner brief. A QA step could check that each landing page, code, date, and link matches the promise before the manager sends anything.",
        "The agent should not decide on its own that a person is a good partner, send cold outreach, promise commercial terms, or launch a contest. Those decisions require business judgment and authorization. The useful automation is the preparation, coordination, evidence collection, and follow-through around the relationship."
      ]
    },
    {
      "heading": "Subagents help when the work can truly be separated",
      "paragraphs": [
        "OpenAI highlights subagent coordination as part of the managed harness. That can make a complex assignment faster when the work has independent tracks. Research, data analysis, content preparation, and quality checks may run in parallel, then return their findings to one coordinating agent.",
        "Parallel work is not automatically better. Every subagent consumes tokens, uses tools, and creates another output that needs to be reconciled. If two agents depend on the same result, running them at the same time can create confusion or duplicated effort.",
        "Use a subagent when the task is bounded, independent, and produces a clear result. Keep dependent steps in order. The coordinating agent should know which source is authoritative, how conflicts are resolved, and what evidence must appear in the final deliverable."
      ]
    },
    {
      "heading": "Design approvals around consequences",
      "paragraphs": [
        "A practical agent needs different rules for research and action. Reading approved files, organizing information, drafting a report, and running a test are usually reversible. Sending messages, publishing content, changing a live campaign, spending money, modifying permissions, or deleting production data can create real consequences.",
        "I would define those boundaries before the first run:",
        "The goal is not to add approval clicks everywhere. It is to place them at the points where a mistake becomes costly, public, or hard to reverse."
      ],
      "bullets": [
        "What information can the agent read?",
        "Which tools can it use without interruption?",
        "Which actions require a person to approve the exact target and result?",
        "What should it do when a source is missing or contradictory?",
        "Where should it save evidence and intermediate work?",
        "Who reviews the final result, and what must that person verify?"
      ]
    },
    {
      "heading": "Measure the workflow, not just the output",
      "paragraphs": [
        "An agent can produce a polished report and still fail the business. It may use the wrong date range, repeat an old recommendation, miss a source, or consume more time in review than it saves.",
        "Before the pilot, record how the assignment works today. Measure the time required, the common errors, the review effort, and the business decision the deliverable supports. Then compare the agent-assisted process against that baseline.",
        "Useful measures include completion time, correction time, source coverage, factual error rate, tool and token cost, percentage of runs needing intervention, and whether the finished work helped someone make a better or faster decision. If the workflow touches revenue, compare the downstream result too, but do not attribute every change to the agent."
      ]
    },
    {
      "heading": "Cost control belongs in the design",
      "paragraphs": [
        "OpenAI says the Agents API has no additional platform fee during public beta, but the model tokens and tools still cost money. Long tasks, repeated browsing, large files, code execution, and several subagents can make a workflow more expensive than expected.",
        "Give the agent a budget for time, model use, and tool calls. Use faster or lower-cost models for routine classification and formatting when quality holds up. Reserve stronger reasoning for ambiguous decisions, difficult analysis, and final review. Cache stable context instead of rediscovering it on every run, and stop a workflow when the expected value no longer justifies another round.",
        "The cheapest run is not always the best run. A weak result that takes an hour to correct may cost more than a careful result from a stronger model. Track the complete cost of producing something the team can actually use."
      ]
    },
    {
      "heading": "A sensible first pilot takes one week",
      "paragraphs": [
        "Choose one recurring assignment with a clear owner and a real deadline. Write down the current process, inputs, output, approval points, and definition of done. Give the agent access only to the minimum tools and information it needs.",
        "At the end of the week, decide whether to improve it, expand it, or stop. A small workflow that saves time every Friday is more valuable than an ambitious agent nobody trusts enough to use."
      ],
      "bullets": [
        "Day 1: Define the assignment, baseline, sources, owner, and review checklist",
        "Day 2: Build the smallest working version with one agent and limited tools",
        "Day 3: Test normal cases, missing data, conflicting information, and a tool failure",
        "Day 4: Add one useful subagent or automation only if the first version shows a real bottleneck",
        "Day 5: Run the workflow on a live assignment, review every important claim and action, and compare the result with the baseline"
      ]
    },
    {
      "heading": "The agent needs an operating system, not a clever prompt",
      "paragraphs": [
        "The Agents API is interesting because it packages more of the operating system around the model. It can keep context, coordinate tools and subagents, work inside a cloud environment, and preserve progress across a long assignment.",
        "That still does not replace good management. A business must choose the right assignment, provide trusted context, define the limits, measure the cost, and inspect the result. The teams that do that well will be able to delegate larger pieces of real work without giving up control.",
        "If you want help choosing and building a practical first workflow with OpenAI Codex, ChatGPT Work, Claude Cowork, or the Agents API, [LearnCowork.net](https://learncowork.net/) offers hands-on training and implementation. Start with one recurring assignment, make the evidence and approvals clear, and build from a result your team can verify."
      ]
    }
  ],
  "keyTakeaways": [
    "OpenAI introduced the Agents API in public beta on September 10, 2026.",
    "The managed Codex harness supports context, tools, subagents, cloud environments, files, code execution, and long-running work.",
    "The best first project is a recurring, reviewable assignment with known inputs and a clear deliverable.",
    "Human approval should remain at public, financial, customer-facing, permission-changing, and destructive steps.",
    "During public beta there is no separate Agents API fee, but model tokens and tools still have costs that teams should measure."
  ],
  "faqs": [
    {
      "q": "What is OpenAI's Agents API?",
      "a": "It is a public-beta API for building and running cloud agents with the managed Codex harness. OpenAI says it supports context management, tools, subagents, files, code execution, cloud environments, and long-running work."
    },
    {
      "q": "Is the Agents API generally available?",
      "a": "No. OpenAI introduced it as a public beta on September 10, 2026. Teams should expect the product and guidance to evolve."
    },
    {
      "q": "How much does the Agents API cost?",
      "a": "OpenAI says there is no additional Agents API fee during the public beta. Customers pay for the tokens and tools their agents use."
    },
    {
      "q": "What should a business automate first?",
      "a": "Start with a recurring, reviewable assignment with known inputs and a clear deliverable. Weekly reporting, research preparation, campaign QA, content operations, and sales preparation are stronger first projects than an open-ended autonomous business process."
    },
    {
      "q": "Should an agent be allowed to publish or send messages automatically?",
      "a": "Only when the organization has deliberately approved that exact workflow and put appropriate controls in place. For most early pilots, keep human approval before public, financial, customer-facing, permission-changing, or destructive actions."
    }
  ]
},
  {
    slug: "chatgpt-work-data-agent-marketing-guide",
    title:
      "ChatGPT Work's New Data Agent: What Marketing Teams Can Actually Do With It",
    metaTitle: "ChatGPT Work Data Agent Guide for Marketers | Evan Weber",
    metaDescription:
      "See how marketing teams can use ChatGPT Work's Data agent to investigate performance, build dashboards, and turn trusted company data into action.",
    excerpt:
      "OpenAI's new Data agent can investigate approved company data, build interactive dashboards, and help teams decide what to do next. Here is how I would put it to work in marketing.",
    category: "ChatGPT",
    tags: [
      "ChatGPT Work",
      "Data agent",
      "Marketing analytics",
      "AI agents",
      "Business intelligence",
    ],
    readingTime: "9 min read",
    datePublished: "2026-09-14",
    dateModified: "2026-09-14",
    intro: [
      "Marketing teams rarely suffer from a lack of data. The real problem is that useful answers are scattered across analytics platforms, advertising accounts, ecommerce systems, CRM records, spreadsheets, dashboards, and internal documents.",
      "On September 10, OpenAI introduced the Data agent for ChatGPT Work. It can connect to approved company data, investigate a business question, show the evidence behind its findings, and build an interactive dashboard that a team can refine and share. That is a much more useful direction than another AI tool that simply summarizes a CSV.",
      "I see the biggest opportunity in closing the distance between a marketing question and a decision. The tool can help more people explore performance without waiting for every question to become a reporting request. It still depends on good metric definitions, appropriate permissions, clean source data, and a person who knows which questions matter.",
    ],
    sections: [
      {
        heading: "What OpenAI actually launched",
        paragraphs: [
          "[OpenAI describes the Data agent](https://openai.com/index/put-data-to-work/) as a new plugin in ChatGPT Work that connects to approved company data and business context. It can investigate changes, answer follow-up questions, build interactive dashboards, and recommend next steps.",
          "The announced data connections include Amazon Redshift, Google BigQuery, ClickHouse, Databricks, MongoDB, Snowflake, Datadog, and others. It can also bring relevant files and documents from Google Drive and SharePoint into an analysis.",
          "The important detail is that the agent can use the organization's existing business definitions and access rules. It can draw on semantic layers and trusted sources such as dbt, GitHub, Snowflake Horizon, Databricks Genie Ontology, and existing business intelligence dashboards. Queries are still subject to the connected account's table, row, and column permissions.",
        ],
      },
      {
        heading: "A plain-language question can become an investigation",
        paragraphs: [
          "A normal dashboard tells you what someone decided to put on the screen. A useful data agent should let you ask why a number changed, compare segments, test possible explanations, and follow the evidence into the next question.",
          "Imagine an ecommerce marketing director asks, 'Why did new-customer revenue fall last week even though paid traffic increased?' A good investigation could compare channel spend, sessions, conversion rate, average order value, product availability, device performance, coupon usage, landing-page behavior, and the share of returning customers.",
          "The first answer is rarely enough. The marketer might ask whether the decline was concentrated on mobile, whether one campaign sent weaker traffic, whether a popular product went out of stock, or whether a promotion attracted existing customers instead of new ones. That conversational follow-up is where this becomes more valuable than a static report.",
        ],
      },
      {
        heading: "The marketing workflows I would test first",
        paragraphs: [
          "I would begin with a recurring decision that already consumes time every week. The goal is not to connect every data source on day one. It is to prove that one governed workflow can produce a trustworthy answer faster and make the next action clearer.",
        ],
        bullets: [
          "Campaign performance: Explain why revenue, qualified leads, or acquisition cost changed and identify the segments responsible.",
          "Seasonal planning: Compare prior holiday periods, current demand, inventory, promotions, and channel performance before allocating budget.",
          "Conversion analysis: Find where visitors drop out by landing page, device, audience, offer, or product category.",
          "Customer growth: Compare first-time and returning customers, acquisition sources, repeat behavior, and early retention signals.",
          "Creative analysis: Connect campaign results with approved creative labels so the team can see which messages and formats deserve another test.",
          "Affiliate and creator performance: Review qualified traffic, activation, new-customer contribution, promotional timing, and partner-level trends using agreed definitions.",
          "Leadership reporting: Turn monthly performance into a dashboard and written readout with actuals, comparisons, drivers, caveats, and recommended actions.",
        ],
      },
      {
        heading: "A holiday campaign is a useful real-world test",
        paragraphs: [
          "Holiday marketing forces teams to make decisions quickly across paid media, email, affiliates, creators, promotions, inventory, and landing pages. It is exactly the kind of situation where scattered data creates slow or contradictory answers.",
          "A marketing team could ask the agent to build a daily holiday acquisition view that tracks spend, qualified revenue, new customers, conversion rate, average order value, margin where available, inventory risk, and promotion use. The team could then ask which changes deserve attention instead of scanning every chart manually.",
          "The dashboard is only the beginning. If mobile conversion falls after a new holiday landing page launches, the agent can help isolate when the decline started, which traffic sources were affected, and whether the issue is connected to page behavior, offer eligibility, product availability, or checkout performance. A person should still verify the diagnosis in the source systems before changing live campaigns or website experiences.",
        ],
      },
      {
        heading: "Interactive dashboards make the work easier to share",
        paragraphs: [
          "OpenAI says the Data agent can turn an analysis into an interactive dashboard with built-in visualizations. Teams can edit, share, and refresh the result, and they can provide brand guidelines for the presentation.",
          "It can also build and interact with dashboards in established business intelligence tools including Power BI, Tableau, Sigma, ThoughtSpot, Omni, and Oracle BI. That matters because many companies do not want a separate reporting universe. They want a faster way to work with the governed definitions and tools they already trust.",
          "A strong dashboard should make the decision easier, not simply display more charts. Every view should answer a specific question, show the comparison that gives the number meaning, and expose enough evidence for someone to challenge the conclusion.",
        ],
      },
      {
        heading: "Your metric definitions matter more than the prompt",
        paragraphs: [
          "No AI agent can rescue a company that has five definitions of revenue, inconsistent campaign naming, missing cost data, and no agreement on what counts as a qualified lead. The agent may make analysis easier, but it will also expose weaknesses in the underlying measurement system.",
          "Before a team relies on the output, document the business terms that affect the decision. Define revenue, new customer, qualified lead, active user, conversion, refund, cancellation, contribution margin, and attribution window. Make sure the same definitions are available through the trusted semantic layer or source the agent uses.",
          "I would also give every important dashboard a short evidence checklist. Confirm the date range, comparison period, filters, exclusions, currency, time zone, attribution model, and data freshness. Those checks are far more valuable than trying to invent a magical prompt that never needs review.",
        ],
      },
      {
        heading: "Permissions and approved actions need real thought",
        paragraphs: [
          "The Data agent is designed to respect the connected user's existing permissions, while enterprise administrators decide which connections and roles are available. That is the right foundation, but access still needs to be planned carefully.",
          "Give people and agents the least access required for the workflow. Separate broad analysis from actions that change campaigns, contact customers, publish dashboards, or send findings outside the team. OpenAI says the agent can share findings through Slack or email and carry out approved actions through connected tools. I would keep a clear human approval step before those external actions.",
          "Sensitive customer, employee, financial, and health data may require additional governance, legal review, retention rules, or technical controls. Availability inside a product does not automatically make every data source appropriate to connect.",
        ],
      },
      {
        heading: "Availability and limits to understand",
        paragraphs: [
          "OpenAI says the Data agent appears as Data in the ChatGPT Work Plugins directory. An administrator can install it or make it available through Workspace settings, then configure the relevant data-source plugins and decide who can use them.",
          "The launch page does not mean every organization has every connector configured or that every user can install it independently. Data-source credentials, administrator approval, workspace policy, source-system permissions, and the quality of the company's semantic layer all affect what the agent can actually do.",
          "I would treat every early dashboard as an analysis that needs validation. Compare important totals with the source system, review the generated query or evidence where available, test a few known cases, and document any limitations before the result reaches executives or drives spending decisions.",
        ],
      },
      {
        heading: "How I would roll it out in one week",
        paragraphs: [
          "Choose one business question with a known owner and a decision attached to it. Connect only the sources needed to answer that question. Give the agent the approved definitions, comparison logic, and an example of a trusted report.",
        ],
        bullets: [
          "Day 1: Define the question, owner, decision, metrics, and validation source.",
          "Day 2: Confirm permissions and connect the minimum required data sources.",
          "Day 3: Ask the agent to investigate the question and show the evidence behind each finding.",
          "Day 4: Compare the result with trusted reports, correct definitions, and test follow-up questions.",
          "Day 5: Build a focused dashboard, document the review process, and decide whether the workflow saved time or improved the decision.",
        ],
      },
      {
        heading: "The bigger shift is from reporting to decision support",
        paragraphs: [
          "The most interesting part of the Data agent is not that it can draw a chart. AI tools have been able to create charts for years. The change is that a business user can investigate governed company data in a conversation, build a shareable view, and move toward an approved action without handing the question through several disconnected tools.",
          "That can make marketers more independent, but it also makes judgment more important. Someone still needs to ask the right question, recognize a weak explanation, understand how the business makes money, and decide whether the evidence supports the recommendation.",
          "If you want to build practical ChatGPT Work, Codex, Claude Cowork, or AI analytics workflows around the work your team already does, [LearnCowork.net](https://learncowork.net/) offers hands-on training and implementation. We can start with one real assignment, connect the right context, build the workflow, and put the verification and approval steps in place.",
        ],
      },
    ],
    keyTakeaways: [
      "OpenAI introduced the Data agent for ChatGPT Work on September 10, 2026.",
      "It can investigate approved company data, answer follow-up questions, and build interactive dashboards grounded in organizational definitions and permissions.",
      "Marketing teams can use it for campaign diagnosis, seasonal planning, conversion analysis, customer growth, affiliate performance, and leadership reporting.",
      "Reliable results still require clear metric definitions, appropriate access, source-system validation, and human approval before consequential actions.",
      "The best first deployment is one recurring business question with a known decision, a trusted comparison, and a measurable time or quality benefit.",
    ],
    faqs: [
      {
        q: "What is the Data agent in ChatGPT Work?",
        a: "The Data agent is a ChatGPT Work plugin that connects to approved company data and context, investigates business questions, supports follow-up analysis, and creates interactive dashboards.",
      },
      {
        q: "Which data sources can the ChatGPT Work Data agent connect to?",
        a: "OpenAI lists connections including Amazon Redshift, Google BigQuery, ClickHouse, Databricks, MongoDB, Snowflake, Datadog, Google Drive, SharePoint, and other supported sources. The exact connections available depend on workspace configuration and permissions.",
      },
      {
        q: "Can marketing teams use the Data agent without writing SQL?",
        a: "Yes. OpenAI says users can direct and refine analysis in plain language without writing queries. Teams should still validate important totals, filters, definitions, and conclusions against trusted source systems.",
      },
      {
        q: "Can the Data agent create dashboards?",
        a: "Yes. It can create interactive dashboards with built-in visualizations and can also build or interact with dashboards in supported business intelligence tools such as Power BI, Tableau, Sigma, ThoughtSpot, Omni, and Oracle BI.",
      },
      {
        q: "How should a company start using the Data agent?",
        a: "Start with one recurring business question, document the metrics and decision it supports, connect the minimum required sources, validate the findings against a trusted report, and keep human approval before external or consequential actions.",
      },
    ],
  },
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
        heading: "What early users say Astra is capable of",
        paragraphs: [
          "The first reports are interesting because people are not only asking Astra questions. They are giving it ambitious assignments and seeing how far it can get.",
          "[One widely shared example showed Astra creating an Unreal Engine world populated by AI-controlled characters that had to work together to survive](https://www.reddit.com/r/ArtificialInteligence/comments/1w7g2rw/my_first_holy_shit_moment_with_gpt6_astra_i_asked/). [Another user described asking Astra in Codex to repair a broken agent service remotely from a short instruction, with no further intervention](https://app.dealroom.co/news/note/matt-shumer-s-review-of-gpt-6-astra). Developers are also [reporting that it can stay oriented in larger codebases, complete feature audits across multiple repositories, check documents against earlier research, and catch missing or misquoted details](https://www.reddit.com/r/singularity/comments/1w7m0ui/its_been_a_few_hours_since_global_rollout_gpt6/).",
          "These are early user reports, not controlled guarantees, and the results are mixed. Still, they point to the real attraction of Astra. It can often connect research, files, software, browser work, testing, and revision into one sustained assignment instead of stopping after a single answer.",
          "[OpenAI describes Astra as its most capable model for difficult end-to-end work](https://developers.openai.com/api/docs/models/gpt-6-astra), including complex reasoning, coding, computer use, research, and document creation. That is where I would test it first. Give it a substantial goal, clear boundaries, the right tools, and a definition of done, then judge the finished result rather than the first response.",
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
  {
    slug: "chatgpt-work-for-teams",
    title: "How to Roll Out ChatGPT Work Across Your Team: A Practical Guide",
    metaTitle: "ChatGPT Work for Teams: A Practical Rollout Guide (2026) | Evan Weber",
    metaDescription:
      "A practical, step-by-step guide to rolling out ChatGPT Work across a business team — from setup and connector configuration to building your first real workflow and getting the whole department productive. Written by a trainer who does this every week.",
    excerpt:
      "Most ChatGPT Work rollouts fail the same way: someone installs it, tries it on a hard task, gets a mediocre result, and quietly goes back to doing everything by hand. Here is the rollout sequence that actually works.",
    category: "ChatGPT",
    tags: ["ChatGPT Work", "Team training", "AI rollout", "Agentic AI", "OpenAI"],
    readingTime: "9 min read",
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
    intro: [
      "I have watched dozens of AI tool rollouts go sideways in exactly the same way. A team leader installs ChatGPT Work, sends a Slack message telling everyone it's available, and waits. Three weeks later, two people are using it inconsistently and the rest never opened it. The tool isn't the problem. The rollout is.",
      "ChatGPT Work is OpenAI's agentic desktop app — it can operate your computer, a built-in browser, and connected work apps to produce finished deliverables instead of just answering questions. That power is also what makes an unguided rollout hard. Here is the sequence I use with teams that actually sticks.",
    ],
    sections: [
      {
        heading: "Step 1: Pick one department and one real task before you touch the app",
        paragraphs: [
          "The instinct is to install it, open it up, and start exploring. That instinct produces curiosity, not adoption. Instead, before anyone opens the app, sit down with the team lead and identify a single recurring task that meets three criteria: it happens at least weekly, it currently takes more than an hour, and the output is consistently shaped (a report, a summary, a first-draft email, a set of notes formatted a specific way).",
          "That task is your proof of concept. Everything else can wait. The goal of week one is to have one workflow that the team sees running reliably — not ten workflows nobody has touched twice.",
        ],
      },
      {
        heading: "Step 2: Set up the app and configure data settings before any real work",
        paragraphs: [
          "Before your team runs anything against real business data, configure data and privacy settings. This is non-negotiable, and it is the first thing I cover in every session.",
        ],
        bullets: [
          "Personal plan users: go to Settings → Data Controls and turn off 'Improve the model for everyone.' This stops your prompts and outputs from being used in OpenAI's training data.",
          "ChatGPT Team or Enterprise plans: training data exclusion is the default under these commercial terms. Verify your organization's plan before assuming.",
          "Computer use permissions: review which apps and files you are granting access to before enabling computer use. Scoped permissions are safer than broad ones.",
        ],
      },
      {
        heading: "Step 3: Connect the right tools — and only the right tools",
        paragraphs: [
          "ChatGPT Work connects to Slack, Microsoft Teams, Google Drive, SharePoint, email, calendars, CRMs, and project trackers. The temptation is to connect everything. The right move is to connect only the tools involved in the proof-of-concept task you identified in step one.",
          "Two reasons: first, over-permissioning is a real risk when a tool can act on connected accounts. Second, a smaller initial scope means faster first results, and first results are what create team buy-in. You can add connectors once the workflow is proven.",
        ],
      },
      {
        heading: "Step 4: Build the proof-of-concept workflow on a live screen share",
        paragraphs: [
          "This is the step most teams skip, and it is the most important one. The first real workflow should be built with the whole team watching — ideally with the person who does the task most often driving, with a trainer or lead guiding them through the task structure, scope, and prompting approach.",
          "Why a screen share? Because building it live answers every question the team has, they see the tool handle an actual task from their day, and they leave with a workflow they built themselves instead of one someone handed them. Ownership matters for adoption.",
        ],
      },
      {
        heading: "Step 5: Scope the task correctly — this is where most prompts fail",
        paragraphs: [
          "The single biggest reason teams get mediocre results from ChatGPT Work is a prompting problem, not a capability problem. ChatGPT Work is goal-directed, which means it needs a well-scoped outcome, not an open-ended instruction. The difference looks like this:",
        ],
        bullets: [
          "Too vague: 'Help me with the weekly report.' ChatGPT Work will produce something, but it won't match your format or know what to emphasize.",
          "Well-scoped: 'Using the attached exports from [source A] and [source B], build the weekly performance summary in our standard format. Highlight any metric that moved more than 10% week over week, and flag the three items I should discuss in the team meeting.' That gives it a goal, inputs, format, and a decision rule.",
          "Reference files matter: if your team has a template they use for the output, attach it. ChatGPT Work will follow the structure instead of inventing one.",
        ],
      },
      {
        heading: "Step 6: Document the workflow and make it repeatable",
        paragraphs: [
          "Once the proof-of-concept works once, write it down. A simple doc with the task description, the reference files needed, and the prompt structure is all it takes. This sounds obvious; teams almost never do it without prompting, and when they skip it, the workflow lives in one person's memory and dies when they're out sick or leave the team.",
          "The goal of a rollout is not one person who is good at ChatGPT Work. It is a team that has documented, repeatable workflows they can improve over time. That is the version of AI adoption that compounds.",
        ],
      },
      {
        heading: "Step 7: Expand gradually — don't launch everything at once",
        paragraphs: [
          "Once the first workflow is running reliably, add a second. Then a third. The pace matters: teams that try to automate everything in week one typically adopt nothing, because nothing is tuned well enough to trust. Teams that automate one thing well, then two, then three, build real fluency over time.",
          "The comparison to [Claude Cowork](/claude-cowork-training) is useful here: both tools reward this gradual-but-deliberate approach, and the skill of scoping work correctly for one transfers cleanly to the other. If your team is on the Microsoft and ChatGPT ecosystem, ChatGPT Work is the natural fit. If you're evaluating both, I cover them honestly side by side in every session that asks.",
        ],
      },
    ],
    keyTakeaways: [
      "Pick one recurring task with a consistent output format as your proof of concept before anyone opens the app.",
      "Configure data and privacy settings before running any real business data through the tool — non-negotiable.",
      "Connect only the tools involved in your proof-of-concept task; over-permissioning and over-scoping both kill early adoption.",
      "Build the first workflow on a live screen share with the whole team — ownership and visibility are what drive adoption, not documentation.",
      "Document every workflow that works; repeatable prompts with reference files are the difference between one person who uses ChatGPT Work and a team that does.",
    ],
    faqs: [
      {
        q: "How long does a ChatGPT Work team rollout take?",
        a: "A well-structured rollout can get a team from zero to one reliable, working workflow in a single 1-hour training session. Expanding to a full departmental playbook typically takes 2–4 weeks if the team commits to one new workflow per week. The 4-hour deep dive compresses the whole process into one day.",
      },
      {
        q: "How many people should be in a ChatGPT Work training session?",
        a: "Up to 6–8 people works well in a 1-hour session. For larger departments, Evan recommends the 4-hour format or splitting into multiple sessions so each person can participate actively.",
      },
      {
        q: "What if our team is already using Claude Cowork?",
        a: "The rollout principles are very similar, and the workflow-building skills transfer. If your team already has Cowork workflows running, a ChatGPT Work session can focus on the differences — connectors, interface, and prompting nuances — rather than starting from scratch.",
      },
      {
        q: "Does ChatGPT Work work on both Mac and Windows?",
        a: "Yes. The unified ChatGPT desktop app that includes the Work experience is available for both macOS and Windows.",
      },
    ],
  },

  {
    slug: "chatgpt-work-for-individuals",
    title: "ChatGPT Work for Solo Professionals: How to Automate Your Daily Work",
    metaTitle: "ChatGPT Work for Individuals: A Solo Professional's Guide (2026) | Evan Weber",
    metaDescription:
      "A practical guide for solo professionals, consultants, and individual contributors on using ChatGPT Work to automate the recurring, time-intensive tasks that fill their week — from proposals to research to inbox management.",
    excerpt:
      "You don't need a team to get serious value from ChatGPT Work. Here's how solo consultants, executives, agents, and operators are using it to reclaim hours every week — and how to set it up for your actual workflow.",
    category: "ChatGPT",
    tags: ["ChatGPT Work", "Solo professional", "Individuals", "AI productivity", "OpenAI"],
    readingTime: "8 min read",
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
    intro: [
      "Most of the conversation about ChatGPT Work is framed around teams and enterprise rollouts. That framing misses something: some of the fastest, most dramatic results I see are with solo professionals — consultants, real estate agents, financial advisors, attorneys, executives — who run their own day and don't need to wait for a team decision to try something new.",
      "When you are your own bottleneck, reclaiming two hours a day is not a nice-to-have. It is a direct multiplier on your income and on the quality of work you can deliver. Here is how to actually do it with ChatGPT Work.",
    ],
    sections: [
      {
        heading: "What ChatGPT Work actually does for a solo operator",
        paragraphs: [
          "ChatGPT Work is OpenAI's [agentic](/glossary/agentic-ai) desktop app — it can operate your computer, a built-in browser, and your connected work apps to deliver finished work. For a solo professional, that distinction matters more than it sounds: this is not a tool you ask questions to, it is a tool you hand tasks to.",
          "The most useful framing for an individual is this: think of ChatGPT Work as a capable junior assistant who never sleeps, never forgets your format preferences, and gets better the more clearly you scope the work. You are still the one making the calls and reviewing the output. But the assembly, research, drafting, and formatting — most of the mechanical time-consumption — shifts to it.",
        ],
      },
      {
        heading: "The highest-leverage tasks for solo professionals",
        paragraphs: [
          "Not every task compresses equally. These are the ones where I consistently see individual users recover the most time:",
        ],
        bullets: [
          "Proposals and client-facing documents: give ChatGPT Work your notes, a previous proposal you like, and the client context, and it assembles the first draft in your format. You refine and send. A task that used to take 2–3 hours becomes 20 minutes of review.",
          "Research and competitive intelligence: point it at a list of sources or companies and have it synthesize findings into a structured summary. It reads fast and doesn't skim. An hour of reading becomes 10 minutes of reviewing a brief.",
          "Recurring reports and performance summaries: if you produce a consistent report weekly or monthly, ChatGPT Work can pull the source data, run the calculations, and write the narrative in your house format. This is one of the cleanest use cases — consistent input, consistent output.",
          "Inbox management and correspondence drafting: ChatGPT Work can read your inbox, identify threads that need a response, draft replies in your voice, and queue them for your approval. You review and send — you don't originate from scratch.",
          "Meeting prep: before any important call, give it the account history, relevant emails, and your goals, and have it produce a prep brief with context, open items, and suggested questions.",
        ],
      },
      {
        heading: "Setting it up for your specific workflow",
        paragraphs: [
          "The setup that matters most for individuals is different from the team setup. You are not managing permissions for 15 people — you are connecting the specific accounts that hold your actual work.",
        ],
        bullets: [
          "Connect the accounts you live in: your email, calendar, Google Drive or OneDrive, and any CRM or project tool you use daily. These are the sources ChatGPT Work needs to reach your real work.",
          "Build a 'voice' reference: create a short document with your typical email tone, common phrases you use, and formats you prefer for deliverables. Attach it to tasks that produce client-facing output. ChatGPT Work will stay in your register instead of defaulting to generic AI prose.",
          "Start with one task and tune it: pick the most painful recurring task in your week, build the prompt structure for it, and run it three times until it produces something you would send without significant editing. Then add the next task.",
        ],
      },
      {
        heading: "The comparison with Claude Cowork",
        paragraphs: [
          "If you're evaluating both tools, the honest individual-user comparison is this: [Claude Cowork](/claude-cowork-training) is a strong general fit for knowledge workers across every sector, and its MCP integration model gives you deep, reliable connections to tools like Google Drive, Notion, and custom databases. ChatGPT Work leans naturally into the Microsoft ecosystem — Teams, SharePoint, Outlook — and bundles Codex into the same app, which matters if you do any light building.",
          "For a solo professional who is not heavily embedded in Microsoft's stack, Cowork is often the faster starting point. For someone who runs on Teams and Microsoft 365, or who is already a ChatGPT power user, ChatGPT Work is the more natural fit. Many solo operators end up using both — different tasks, different tools — and the core skill of scoping work correctly transfers between them cleanly.",
        ],
      },
      {
        heading: "What a 1-hour solo training session looks like",
        paragraphs: [
          "My 1-hour sessions for individuals are not overviews. We skip the introduction-to-agentic-AI framing and go straight to your actual work. You bring one or two recurring tasks you want to automate. We build the workflow live, together, on screen share — connecting the right apps, getting the prompt structure right, and running it against real data.",
          "You leave with something that runs. Not a list of ideas for what ChatGPT Work could do in theory, but a working workflow you used in the session and can run again tomorrow. That is the entire point of live training versus a tutorial.",
        ],
      },
    ],
    keyTakeaways: [
      "ChatGPT Work is as useful for solo professionals as it is for teams — sometimes more so, because every hour recovered goes directly to you.",
      "The highest-leverage individual use cases are proposals, research synthesis, recurring reports, inbox drafting, and meeting prep.",
      "The setup that matters for individuals: connect your actual accounts, build a voice reference document, and tune one workflow before adding the next.",
      "If you're on Microsoft 365 and Teams, ChatGPT Work is the natural fit. If not, Claude Cowork is often the faster start — and the skills transfer between both.",
    ],
    faqs: [
      {
        q: "Is ChatGPT Work worth it for a solo professional, not a team?",
        a: "Yes — often more immediately than for teams, because an individual sees the time savings directly in their own day. Solo consultants, agents, and operators frequently recover 1–2 hours per day once they have 3–4 workflows tuned to their actual recurring tasks.",
      },
      {
        q: "What plan do I need to use ChatGPT Work as an individual?",
        a: "A ChatGPT Plus or Pro plan gives you access to the full ChatGPT desktop app that includes the Work experience. The Plus plan is around $20/month. For heavier usage, the Pro plan at $200/month removes most token limits and gives access to the most capable models.",
      },
      {
        q: "How is live training better than just watching tutorials?",
        a: "Tutorials show you the tool in someone else's workflow with demo tasks. Live training builds a workflow for your actual work in the session — so you leave with something that runs, not a list of ideas to try someday.",
      },
      {
        q: "Can I use ChatGPT Work and Claude Cowork together?",
        a: "Yes, and many solo operators do. ChatGPT Work works naturally in the Microsoft ecosystem; Claude Cowork connects deeply to Google Drive, Notion, and MCP-compatible tools. The prompting and workflow-building skills carry across both cleanly.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
