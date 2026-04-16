export interface UseCase {
  title: string;
  body: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  headline: string;
  subheadline: string;
  stat: string;
  statLabel: string;
  intro: string;
  leadershipPoints: string[];
  staffPoints: string[];
  useCases: UseCase[];
  quickWin: string;
  quickWinTitle: string;
}

export const industries: IndustryData[] = [
  {
    slug: "marketing-agencies",
    name: "Marketing & Advertising Agencies",
    metaTitle: "Claude Cowork Training for Marketing Agencies | AI Productivity",
    metaDescription: "Train your agency team on Claude Cowork - automate client reports, ad copy, competitor research, and briefs. Live 1-on-1 sessions with Evan Weber.",
    badge: "Marketing & Advertising",
    headline: "Your Agency Runs on Content and Reports. Claude Cowork Does Both.",
    subheadline: "Train your account managers, copywriters, and strategists to offload the repetitive production work - so they can focus on the thinking that actually wins clients.",
    stat: "8–10 hrs",
    statLabel: "saved per week per person on reports and copy",
    intro: "Marketing agencies live or die by output volume and turnaround speed. Claude Cowork can research competitors, draft client reports, generate ad copy variations, and summarize campaign performance - all from a single delegated task. Evan trains your whole team in one session, using your actual client accounts and workflows.",
    leadershipPoints: [
      "Reduce the time your senior staff spends on production-level tasks so they can focus on strategy and new business",
      "Standardize deliverable quality across your team with AI-assisted templates your whole agency can use",
      "Pitch faster - Claude Cowork can research a prospect, analyze their competitors, and draft a pitch outline in under 20 minutes",
    ],
    staffPoints: [
      "Account managers can auto-generate weekly client performance summaries directly from their analytics dashboards",
      "Copywriters can produce 10 ad copy variations in the time it used to take to write 2",
      "Strategists can run deep competitor analysis across multiple channels without spending half a day on research",
    ],
    useCases: [
      { title: "Client Reporting Automation", body: "Pull data from your analytics and ad platforms into Claude Cowork — via exports, APIs, or MCP integrations — and generate formatted client reports with insights, not just numbers, in minutes instead of hours." },
      { title: "Ad Copy at Scale", body: "Give Claude your brand brief, audience profile, and product details. Get 10–20 copy variations across formats - headlines, body copy, CTAs - ready to test immediately." },
      { title: "Competitor Research Briefs", body: "Using the Claude in Chrome extension, Claude Cowork can browse competitor sites, review their ad libraries, read their G2 reviews, and compile a structured competitive brief your team can use in pitches." },
      { title: "Campaign Strategy Drafts", body: "Feed Claude a client brief and target KPIs. It will draft a full campaign strategy outline - channels, messaging angles, budget allocation rationale - for your team to refine." },
      { title: "New Business Pitch Acceleration", body: "Research a prospective client's digital presence, identify their biggest gaps, and draft a tailored pitch outline - all in one Claude Cowork session before a sales call." },
      { title: "Content Brief Generation", body: "Turn a single keyword or campaign theme into detailed content briefs - with audience insights, recommended structure, tone guidance, and competitor angle analysis." },
    ],
    quickWinTitle: "Weekly Client Report → 10 Minutes",
    quickWin: "In your first session, we'll connect Claude Cowork to your analytics source and build a reusable report template. Your account managers will leave able to generate a complete, insight-rich client performance report in under 10 minutes.",
  },
  {
    slug: "law-firms",
    name: "Law Firms & Legal Services",
    metaTitle: "Claude Cowork Training for Law Firms | Legal AI Productivity",
    metaDescription: "AI training for law firms and legal teams - automate contract drafting, legal research summaries, client communications, and matter intake with Claude Cowork.",
    badge: "Legal Services",
    headline: "Less Drafting. More Practicing. Claude Cowork for Legal Teams.",
    subheadline: "Train your attorneys, paralegals, and legal assistants to delegate first-draft work, research summaries, and client communications to Claude - and get hours back every week.",
    stat: "40–60%",
    statLabel: "of legal time is spent on administrative tasks — many of which Claude can help streamline",
    intro: "Legal work is high-stakes and document-heavy. Claude Cowork can draft first versions of contracts, summarize case law, prepare client communications, and organize matter intake - all from natural language instructions. Evan trains your legal team on exactly how to delegate with enough precision that Claude's output is actually useful, not generic.",
    leadershipPoints: [
      "Increase billable-hour efficiency by moving first-draft and research work off your attorneys' plates without sacrificing quality",
      "Give your paralegals and legal assistants a force-multiplier that lets a small team punch well above its weight",
      "Standardize client communication quality across your firm with Claude-assisted templates that reflect your voice",
    ],
    staffPoints: [
      "Attorneys can produce first-draft contract clauses, NDAs, and standard agreements in a fraction of the time",
      "Paralegals can summarize lengthy depositions, discovery documents, and case law into structured briefs",
      "Legal assistants can draft and personalize client status update emails for attorney review in seconds",
    ],
    useCases: [
      { title: "Contract Drafting & First Passes", body: "Describe the deal structure, parties, and key terms in plain language. Claude Cowork produces a structured first draft your attorney can review and refine - cutting drafting time dramatically." },
      { title: "Case Law & Research Summaries", body: "Paste in relevant statutes, rulings, or case documents. Claude synthesizes the key holdings, relevant precedents, and application to your matter in a clear, structured summary." },
      { title: "Client Communication Templates", body: "Build a library of high-quality, on-brand client communication templates - status updates, intake responses, billing explanations - that any team member can use consistently." },
      { title: "Matter Intake Processing", body: "Claude Cowork can process new matter intake forms, extract key details, organize them into a structured file summary, and flag anything missing - saving your intake team significant time." },
      { title: "Deposition & Document Summarization", body: "Feed Claude long depositions, expert reports, or discovery files. Get structured summaries organized by witness, issue, or document type - ready for attorney review." },
      { title: "Billing Description Drafting", body: "Turn raw time entry notes into clear, professional billing narratives that clients understand - a task that eats surprisingly large amounts of attorney time." },
    ],
    quickWinTitle: "Contract First Draft → 30 Minutes",
    quickWin: "In your first session, we'll run a live example using one of your standard agreement types. You'll walk away with a repeatable Claude Cowork workflow that produces solid first drafts of that agreement from a simple intake form.",
  },
  {
    slug: "real-estate",
    name: "Real Estate Teams & Brokerages",
    metaTitle: "Claude Cowork Training for Real Estate Teams | AI for Agents",
    metaDescription: "Train your real estate agents and staff on Claude Cowork - automate listing descriptions, market reports, buyer/seller follow-ups, and CMA drafts.",
    badge: "Real Estate",
    headline: "Every Agent. Every Listing. Running at Full Speed.",
    subheadline: "Train your agents and admin staff to use Claude Cowork for listing content, market reports, follow-up sequences, and client communication - so they can focus on closing.",
    stat: "5+ hrs",
    statLabel: "saved per listing on content and follow-up",
    intro: "Real estate runs on communication speed and content quality. The agent who responds first, presents best, and follows up most consistently wins. Claude Cowork helps your agents draft listing descriptions, generate CMAs, write follow-up sequences, and produce market reports - all faster and at higher quality than doing it manually.",
    leadershipPoints: [
      "Equip every agent with the same high-production-quality content tools that top producers use - without the extra staff",
      "Reduce the admin burden on your transaction coordinators and office staff with automated document workflows",
      "Give your team a competitive edge - agents using Claude Cowork move faster and present more professionally",
    ],
    staffPoints: [
      "Agents can draft compelling, SEO-friendly listing descriptions from a quick property overview in minutes",
      "Transaction coordinators can organize and summarize deal documents, timelines, and outstanding tasks automatically",
      "Admin staff can generate neighborhood market reports and buyer/seller presentations without starting from scratch",
    ],
    useCases: [
      { title: "Listing Description Writing", body: "Give Claude the property details, key features, and neighborhood highlights. Get a polished, emotionally resonant listing description optimized for both buyers and search engines." },
      { title: "CMA Draft Preparation", body: "Claude Cowork can help structure your comparative market analysis presentation - organizing comps, drafting the narrative, and explaining pricing rationale clearly to sellers." },
      { title: "Buyer & Seller Follow-Up Sequences", body: "Build personalized follow-up email sequences for active buyers and sellers. Claude drafts the messages; your agents review and send - keeping every lead warm without manual effort." },
      { title: "Market Report Generation", body: "Produce monthly or quarterly neighborhood market reports - absorption rates, price trends, days on market - in a client-ready format that positions your agents as local experts." },
      { title: "New Lead Response Templates", body: "Claude Cowork can draft immediate, personalized responses to new inquiry leads based on what they're looking for - giving your agents a huge response-speed advantage." },
      { title: "Transaction Timeline Tracking", body: "Feed Claude a contract and key dates. Get a structured timeline, deadline checklist, and reminder sequence that keeps every party on track from contract to close." },
    ],
    quickWinTitle: "Listing Descriptions in 5 Minutes",
    quickWin: "In your first session, we'll build a listing description workflow using one of your current or recent properties. Every agent will leave able to produce a publication-ready listing description in under 5 minutes from a basic fact sheet.",
  },
  {
    slug: "financial-services",
    name: "Financial Services & Accounting Firms",
    metaTitle: "Claude Cowork Training for Financial Services | AI for Finance Teams",
    metaDescription: "AI productivity training for financial advisors, CPAs, and accounting firms - automate client reports, portfolio summaries, tax prep workflows, and compliance docs.",
    badge: "Financial Services & Accounting",
    headline: "Fewer Hours on Reports. More Time for Client Relationships.",
    subheadline: "Train your advisors, CPAs, and analysts to use Claude Cowork for client reporting, research synthesis, compliance documentation, and communication - without compromising precision.",
    stat: "60–70%",
    statLabel: "of financial report prep is automatable with Claude",
    intro: "Financial services firms produce enormous volumes of structured, repetitive documentation - client portfolio summaries, performance reports, tax prep checklists, compliance filings, and advisory communications. Claude Cowork can handle the drafting and organization of all of it. Evan trains your team to delegate these workflows with the precision the industry demands.",
    leadershipPoints: [
      "Reduce the time your senior advisors spend on report preparation so they can serve more clients at higher capacity",
      "Bring consistency and quality control to client communications across your entire practice",
      "Accelerate onboarding of new clients by automating the intake, summary, and documentation workflows",
    ],
    staffPoints: [
      "Financial advisors can generate personalized client portfolio summaries and quarterly performance narratives in minutes",
      "CPAs can use Claude to organize complex tax situations, draft client explanations, and summarize return details",
      "Analysts can synthesize earnings reports, SEC filings, and research notes into structured investment memos",
    ],
    useCases: [
      { title: "Client Portfolio Summaries", body: "Describe a client's holdings, performance, and goals. Claude Cowork drafts a clear, personalized quarterly summary letter that your advisor can review and send - no writing from scratch." },
      { title: "Investment Research Synthesis", body: "Feed Claude earnings calls, analyst reports, or SEC filings. Get a structured investment memo - key financials, risks, opportunities, and recommended action - ready for advisor review." },
      { title: "Tax Season Document Processing", body: "Claude can organize incoming client documents, flag missing items, draft checklist summaries, and prepare client communications that keep tax season moving efficiently." },
      { title: "Compliance Documentation", body: "Draft standard compliance documents, policy summaries, and regulatory disclosures faster. Claude handles the structure and language; your compliance team reviews and approves." },
      { title: "Client Onboarding Workflows", body: "Automate the new client onboarding sequence - intake summaries, financial profile organization, welcome communications, and initial planning document drafts." },
      { title: "Financial Plan Narrative Drafting", body: "Turn numbers, projections, and goals into readable, personalized financial plan narratives that clients actually understand and advisors are proud to present." },
    ],
    quickWinTitle: "Quarterly Client Letter → 10 Minutes",
    quickWin: "In your first session, we'll build a reusable quarterly client communication workflow. Your advisors will leave able to generate a personalized, professional client performance letter in under 10 minutes from a portfolio data summary.",
  },
  {
    slug: "healthcare",
    name: "Healthcare Practices & Medical Offices",
    metaTitle: "Claude Cowork Training for Healthcare Practices | Medical Office AI",
    metaDescription: "AI productivity training for medical offices, clinics, and healthcare teams - automate patient communications, referral letters, intake processing, and admin workflows.",
    badge: "Healthcare & Medical",
    headline: "Less Admin. More Patient Time. Claude Cowork for Healthcare Teams.",
    subheadline: "Train your front office, clinical coordinators, and practice managers to automate the paperwork, communications, and documentation that eat your team's day.",
    stat: "2–3 hrs",
    statLabel: "of daily admin time per staff member that Claude can reclaim",
    intro: "Healthcare practices are drowning in administrative work - patient communications, referral letters, prior authorization drafts, intake processing, and scheduling coordination. None of it requires a clinician's judgment, but all of it consumes clinical staff time. Claude Cowork gives your non-clinical team the ability to handle this volume efficiently and consistently. During your session, Evan covers how to configure Cowork's privacy settings and establish workflows that align with your practice's HIPAA and data handling requirements.",
    leadershipPoints: [
      "Reduce administrative burden on your clinical staff so they can focus on patient care rather than paperwork",
      "Improve patient communication quality and response times without adding headcount",
      "Bring consistency to referral letters, prior auth requests, and patient education materials across your practice",
    ],
    staffPoints: [
      "Front office staff can draft personalized appointment reminders, follow-up messages, and intake confirmation emails",
      "Clinical coordinators can produce structured referral letters and prior authorization summaries for physician review",
      "Practice managers can generate staff scheduling communications, policy updates, and operational reports",
    ],
    useCases: [
      { title: "Patient Communication Drafting", body: "Claude Cowork drafts appointment reminders, post-visit follow-ups, care instructions, and test result communication templates that your staff can personalize and send in seconds." },
      { title: "Referral Letter Generation", body: "Provide patient history highlights and referral reason. Claude produces a structured, professional referral letter draft for physician review - reducing the time spent on each referral significantly." },
      { title: "Prior Authorization Summaries", body: "Claude can organize clinical notes, diagnosis codes, and treatment rationale into a structured prior authorization letter template that your billing team can submit faster." },
      { title: "Intake Form Processing", body: "Claude Cowork can process new patient intake forms, extract and organize key medical history details, flag missing information, and prepare a structured patient summary for the chart." },
      { title: "Patient Education Content", body: "Generate clear, plain-language patient education materials for common diagnoses, post-procedure care, medication instructions, and lifestyle recommendations - in your practice's voice." },
      { title: "Scheduling & Coordination Communications", body: "Draft multi-provider scheduling messages, care team updates, and coordination notes that keep complex patient cases moving without the back-and-forth email chains." },
    ],
    quickWinTitle: "Referral Letters in 5 Minutes",
    quickWin: "In your first session, we'll build a referral letter workflow using your standard referral types. Your coordinators will leave able to produce a complete, physician-ready referral letter draft in under 5 minutes.",
  },
  {
    slug: "ecommerce",
    name: "E-Commerce & Retail Brands",
    metaTitle: "Claude Cowork Training for E-Commerce & Retail | AI for Online Stores",
    metaDescription: "AI productivity training for e-commerce teams - automate product descriptions, customer support responses, email campaigns, and competitor analysis with Claude Cowork.",
    badge: "E-Commerce & Retail",
    headline: "More Products Listed. More Emails Sent. More Revenue Generated.",
    subheadline: "Train your merchandising, marketing, and customer success teams to use Claude Cowork for product content, customer communications, and campaign copy - at the speed your catalog demands.",
    stat: "10x",
    statLabel: "faster product content production with Claude Cowork",
    intro: "E-commerce success is a content and communication game. The brands that win publish more products faster, respond to customers immediately, and run more email campaigns with better copy. Claude Cowork is a force multiplier for small e-commerce teams - handling the content production volume that used to require an entire department.",
    leadershipPoints: [
      "Scale your product catalog faster without scaling your content team - Claude handles the writing, your team handles the strategy",
      "Reduce customer support response time and improve consistency without adding headcount",
      "Run more marketing campaigns with higher-quality copy by removing the production bottleneck",
    ],
    staffPoints: [
      "Merchandisers can generate SEO-optimized product descriptions for 50 SKUs in the time it used to take to write 5",
      "Customer support reps can draft personalized, on-brand responses to complex customer issues in seconds",
      "Email marketers can produce complete campaign copy - subject lines, preview text, body, CTA - from a single brief",
    ],
    useCases: [
      { title: "Product Description Generation at Scale", body: "Feed Claude your product specs, key features, and brand voice guide. Generate SEO-optimized product descriptions for your entire catalog - consistently, quickly, and at your brand's quality bar." },
      { title: "Customer Support Response Drafting", body: "Claude Cowork can draft personalized responses to common support scenarios - returns, shipping issues, product questions - that your team can review and send in seconds." },
      { title: "Email Campaign Copy", body: "Describe your campaign goal, offer, and audience. Claude produces a complete email - subject line, preview text, body copy, and CTA - your team can edit and deploy immediately." },
      { title: "Competitor & Market Research", body: "Claude Cowork can survey competitor product pages, pricing, reviews, and promotions - and compile a structured competitive intelligence report for your merchandising and marketing teams." },
      { title: "Return & Policy Communications", body: "Draft clear, empathetic customer-facing communications for returns, refusals, shipping delays, and policy explanations - reducing the friction and frustration in difficult customer interactions." },
      { title: "Social Media Content Production", body: "Turn a product page or campaign theme into a week of social posts - captions, hashtag sets, and platform variations - across Instagram, TikTok, Facebook, and Pinterest." },
    ],
    quickWinTitle: "50 Product Descriptions in One Morning",
    quickWin: "In your first session, we'll build your product description workflow using your brand guidelines and a sample of your SKUs. You'll leave with a repeatable system for generating on-brand, SEO-ready product copy at catalog scale.",
  },
  {
    slug: "consulting",
    name: "Management & Strategy Consulting Firms",
    metaTitle: "Claude Cowork Training for Consulting Firms | AI for Consultants",
    metaDescription: "AI productivity training for management consultants - automate research synthesis, proposal drafting, client deliverables, and meeting prep with Claude Cowork.",
    badge: "Management Consulting",
    headline: "Better Deliverables. Faster Turnarounds. Claude Cowork for Consultants.",
    subheadline: "Train your consulting team to use Claude Cowork for research synthesis, proposal drafting, slide frameworks, and client communication - so they can spend their time on the thinking, not the production.",
    stat: "30–40%",
    statLabel: "of consulting production time is compressible with Claude",
    intro: "Consulting is fundamentally a knowledge and communication business. Your clients pay for your thinking - but your team spends enormous time on research collection, document production, and deliverable formatting. Claude Cowork compresses the production layer so your consultants can spend more time on the insight and less time on the output.",
    leadershipPoints: [
      "Increase utilization rates by reducing the non-billable production time your consultants spend on research and drafting",
      "Improve the quality and consistency of client-facing deliverables across your team",
      "Win more engagements by accelerating your proposal and pitch process without sacrificing quality",
    ],
    staffPoints: [
      "Consultants can synthesize 50 pages of research documents into a structured briefing memo in under 20 minutes",
      "Analysts can draft structured slide frameworks and data narratives from raw client data and interviews",
      "Project managers can produce meeting summaries, action item registries, and status reports automatically",
    ],
    useCases: [
      { title: "Research Synthesis & Memos", body: "Feed Claude industry reports, interview notes, and competitor documents. Get a structured research memo - key findings, patterns, gaps, and implications - ready for consultant review in minutes." },
      { title: "Proposal & Pitch Drafting", body: "Describe the client situation, engagement scope, and your firm's approach. Claude produces a structured proposal framework - situation, solution, team, timeline, fees - for your partners to refine." },
      { title: "Client Deliverable Templates", body: "Build a library of deliverable templates - diagnostic frameworks, current-state assessments, recommendation memos - that Claude can populate with engagement-specific content on demand." },
      { title: "Meeting Notes & Action Items", body: "Paste raw meeting notes or a transcript. Claude produces a formatted summary with key decisions, action items by owner, and follow-up questions - ready to send in minutes." },
      { title: "Competitive Landscape Analysis", body: "Claude Cowork can survey competitor positioning, service offerings, recent work, and market commentary - and organize it into a structured competitive analysis your team can use in client presentations." },
      { title: "Slide Narrative Drafting", body: "Give Claude your data, key message, and audience. Get slide-by-slide narrative text - the words that go with the charts - drafted in a structured, logical flow your team can build visuals around." },
    ],
    quickWinTitle: "Research Memo in 20 Minutes",
    quickWin: "In your first session, we'll run a live research synthesis using a current or recent engagement's source materials. Your consultants will leave with a workflow that turns a pile of documents into a structured briefing memo in under 20 minutes.",
  },
  {
    slug: "hr-recruiting",
    name: "HR Teams & Recruiting Agencies",
    metaTitle: "Claude Cowork Training for HR & Recruiting Teams | AI for HR",
    metaDescription: "AI productivity training for HR teams and recruiting agencies - automate job descriptions, candidate summaries, offer letters, onboarding docs, and policy writing.",
    badge: "HR & Recruiting",
    headline: "Hire Faster. Onboard Better. Claude Cowork for HR Teams.",
    subheadline: "Train your HR managers, recruiters, and talent ops team to use Claude Cowork for job postings, candidate communication, onboarding workflows, and people documentation.",
    stat: "70%",
    statLabel: "of HR documentation is repeatable and Claude-automatable",
    intro: "HR teams produce enormous volumes of structured, repeatable documentation - job descriptions, offer letters, onboarding guides, policy documents, performance review templates, and candidate communications. Almost all of it follows established patterns that Claude Cowork can handle quickly, consistently, and at higher quality than starting from scratch every time.",
    leadershipPoints: [
      "Accelerate time-to-hire by removing the content production bottleneck from your recruiting funnel",
      "Improve onboarding quality and consistency without adding coordination overhead to your HR team",
      "Free your HR business partners from documentation work so they can focus on the people strategy that actually matters",
    ],
    staffPoints: [
      "Recruiters can write compelling, bias-reduced job descriptions from a hiring manager brief in minutes",
      "HR coordinators can generate personalized offer letters, onboarding schedules, and first-week guides automatically",
      "HR managers can draft policy documents, handbook updates, and compliance communications faster and more consistently",
    ],
    useCases: [
      { title: "Job Description Writing", body: "Give Claude the role, team context, required skills, and culture notes. Get a compelling, inclusive job description that attracts qualified candidates - written in minutes instead of hours." },
      { title: "Candidate Screening Summaries", body: "Paste resume content and job requirements. Claude produces a structured candidate summary - strengths, gaps, questions to probe - so your recruiters can prepare for interviews faster." },
      { title: "Offer Letter Generation", body: "Input the candidate name, role, compensation details, and start date. Claude generates a professional, legally clear offer letter draft in seconds - ready for HR review and personalization." },
      { title: "Onboarding Documentation", body: "Build a complete onboarding package for any role - first-week schedule, equipment checklist, team introduction templates, culture guide, and 30/60/90-day plan framework - with Claude's help." },
      { title: "Performance Review Templates", body: "Claude Cowork can draft performance review frameworks, self-assessment templates, and manager evaluation guides tailored to specific roles, levels, and competencies." },
      { title: "Policy & Handbook Drafting", body: "Describe the policy intent and key parameters. Claude drafts a clear, professional policy document in your organization's tone - ready for legal and HR review." },
    ],
    quickWinTitle: "Job Description in 5 Minutes",
    quickWin: "In your first session, we'll build your job description workflow using a current open role. Your recruiters will leave with a repeatable process for producing polished, on-brand job postings from a simple hiring manager brief in under 5 minutes.",
  },
  {
    slug: "insurance",
    name: "Insurance Agencies & Brokerages",
    metaTitle: "Claude Cowork Training for Insurance Agencies | AI for Insurance",
    metaDescription: "AI training for insurance agents and teams - automate policy comparisons, client communications, renewal sequences, claims correspondence, and compliance documents.",
    badge: "Insurance",
    headline: "More Policies Serviced. More Clients Retained. Claude Cowork for Insurance Teams.",
    subheadline: "Train your agents, account managers, and support staff to use Claude Cowork for client communication, policy work, renewals, and documentation - so they can handle more business with the same team.",
    stat: "3–5x",
    statLabel: "more client communications your team can handle with Claude",
    intro: "Insurance is a relationship and documentation business. Agents who communicate more frequently, more clearly, and more helpfully retain more clients and write more policies. Claude Cowork handles the drafting - policy comparison summaries, renewal outreach, claims correspondence, and coverage explanations - so your team can focus on the relationships.",
    leadershipPoints: [
      "Increase your agency's book-of-business capacity without adding staff by making every agent more productive",
      "Improve client retention through more consistent and professional renewal communication workflows",
      "Accelerate new business production by removing the documentation bottleneck from your sales process",
    ],
    staffPoints: [
      "Agents can draft personalized policy renewal letters and coverage comparison summaries in minutes",
      "Account managers can produce clear, jargon-free coverage explanation documents that clients actually read",
      "Support staff can draft claims correspondence, status updates, and follow-up sequences consistently",
    ],
    useCases: [
      { title: "Policy Comparison Summaries", body: "Feed Claude the key coverage details, premiums, and exclusions from competing policies. Get a clear, client-ready comparison document that makes your recommendation obvious and easy to understand." },
      { title: "Renewal Outreach Sequences", body: "Build personalized renewal communication sequences - initial outreach, follow-up, and close - that your team can launch for every policy renewal without starting from scratch each time." },
      { title: "Claims Correspondence Drafting", body: "Claude Cowork can draft clear, empathetic claims status updates, denial explanations, and appeals correspondence - communications your clients need to understand and trust." },
      { title: "Coverage Explanation Documents", body: "Turn complex policy language into clear, plain-English coverage explanation documents your clients can actually read - reducing confusion, questions, and E&O exposure." },
      { title: "New Business Proposal Drafts", body: "Describe a prospect's situation and risk profile. Claude drafts a structured coverage recommendation memo - recommended policies, rationale, alternatives, and pricing context." },
      { title: "Compliance & Documentation", body: "Draft standard disclosure documents, carrier correspondence, and regulatory filing summaries faster. Claude handles the structure; your compliance team reviews and signs off." },
    ],
    quickWinTitle: "Renewal Letter in 3 Minutes",
    quickWin: "In your first session, we'll build your renewal communication workflow using a sample of your current book. Your agents will leave able to generate personalized, professional renewal letters for every client in minutes - not hours.",
  },
  {
    slug: "nonprofits",
    name: "Nonprofit Organizations",
    metaTitle: "Claude Cowork Training for Nonprofits | AI for Nonprofit Teams",
    metaDescription: "AI productivity training for nonprofits - automate grant writing, donor communications, program reports, annual reports, and volunteer coordination with Claude Cowork.",
    badge: "Nonprofit",
    headline: "Do More Good With the Same Team. Claude Cowork for Nonprofits.",
    subheadline: "Train your development, program, and communications staff to use Claude Cowork for grant writing, donor outreach, program reporting, and community communications - so your team can focus on impact.",
    stat: "Grant writing",
    statLabel: "first drafts completed 5x faster with Claude Cowork",
    intro: "Nonprofits do critical work with lean teams and tight budgets. The communication and documentation load - grant proposals, donor reports, program updates, volunteer coordination, board materials - often falls on just a few people who are already stretched thin. Claude Cowork gives your team the capacity to do more without burning out the people who care most.",
    leadershipPoints: [
      "Increase your grant application volume without overwhelming your development team - Claude handles the first drafts",
      "Improve donor communication frequency and quality without adding development staff",
      "Give your program staff time to focus on direct service rather than reporting and documentation",
    ],
    staffPoints: [
      "Development staff can produce grant proposal first drafts from a program brief in hours instead of days",
      "Communications managers can generate donor outreach emails, campaign copy, and impact updates faster",
      "Program coordinators can produce funder reports, volunteer guides, and training materials consistently",
    ],
    useCases: [
      { title: "Grant Proposal Drafting", body: "Describe your program, target population, outcomes, and budget. Claude produces a structured grant proposal narrative - problem statement, approach, evaluation plan, organizational capacity - ready for your team to refine." },
      { title: "Donor Outreach Sequences", body: "Build personalized donor communication sequences - cultivation, solicitation, stewardship, and renewal - that your development team can launch and track without writing everything from scratch." },
      { title: "Impact Report Drafting", body: "Feed Claude your program data, testimonials, and outcomes. Get a compelling impact narrative - organized by goal, populated with specific results - that makes your funders feel their investment is working." },
      { title: "Volunteer Coordination Communications", body: "Draft volunteer recruitment messages, orientation guides, shift reminders, and appreciation communications that keep your volunteer base engaged and informed." },
      { title: "Program Documentation", body: "Produce training manuals, curriculum outlines, service delivery guides, and program evaluation frameworks - documentation that improves consistency and supports staff transitions." },
      { title: "Board Meeting Preparation", body: "Compile board packet summaries, financial narrative explanations, committee report frameworks, and executive director update drafts that make your board meetings more productive." },
    ],
    quickWinTitle: "Grant Proposal Draft in One Day",
    quickWin: "In your first session, we'll work through a current or upcoming grant application using your program materials. Your development staff will leave with a workflow for producing a compelling, funder-ready grant proposal first draft in a single focused day.",
  },
];

export function getIndustry(slug: string): IndustryData | undefined {
  return industries.find((i) => i.slug === slug);
}
