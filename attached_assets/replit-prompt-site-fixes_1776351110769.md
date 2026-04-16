# Replit Prompt: LearnCowork.net Accuracy & Content Fixes

Paste this into Replit:

---

I need you to make the following edits across my learncowork.net site. These are accuracy corrections and content improvements based on a review of what Claude Cowork actually does. Do NOT change the design, layout, or structure — only update the text content specified below.

## 1. Fix the "What is Claude Cowork?" definition (claude-cowork-training page)

CURRENT TEXT:
"Claude Cowork (formerly Claude Computer Use) is Anthropic's agentic AI mode that lets Claude operate directly on your computer - reading files, managing your desktop, running multi-step automations, and integrating with your existing tools. It's the difference between a chatbot and an actual AI coworker."

REPLACE WITH:
"Claude Cowork is Anthropic's agentic desktop mode — available in the Claude desktop app — that combines AI chat with direct computer control, file access, a sandboxed shell, and MCP tool integrations. It lets Claude work alongside you on your actual machine: reading files, operating apps, running multi-step automations, and connecting to your existing tools. It's the difference between a chatbot and an actual AI coworker."

Do NOT use the phrase "formerly Claude Computer Use" anywhere on the site. Cowork and Computer Use are related but different things.

## 2. Soften the "1–3 hours saved" claim (claude-cowork-training page)

CURRENT TEXT:
"Immediate time savings — Teams typically recover 1–3 hours per person per day within the first week of using Cowork correctly."

REPLACE WITH:
"Immediate time savings — Early adopters report recovering 1–3 hours per person per day once their team is using Cowork fluently in their actual workflows."

## 3. Fix the Google Analytics / Meta Ads integration claim (industries/marketing-agencies page)

CURRENT TEXT (in Client Reporting Automation section):
"Connect Claude Cowork to Google Analytics, Meta Ads Manager, or your reporting tools and generate formatted client reports with insights, not just numbers - in minutes, not hours."

REPLACE WITH:
"Pull data from your analytics and ad platforms into Claude Cowork — via exports, APIs, or MCP integrations — and generate formatted client reports with insights, not just numbers, in minutes instead of hours."

## 4. Add a qualifier to the competitor browsing claim (industries/marketing-agencies page)

CURRENT TEXT (in Competitor Research Briefs section):
"Claude Cowork can browse competitor sites, review their ad libraries, read their G2 reviews, and compile a structured competitive brief your team can use in pitches."

REPLACE WITH:
"Using the Claude in Chrome extension, Claude Cowork can browse competitor sites, review their ad libraries, read their G2 reviews, and compile a structured competitive brief your team can use in pitches."

## 5. Soften the legal time-savings stat (industries/law-firms page)

CURRENT TEXT:
"40–60% of legal time spent on tasks Claude can handle"

REPLACE WITH:
"40–60% of legal time is spent on administrative tasks — many of which Claude can help streamline"

## 6. Add HIPAA callout to healthcare page (industries/healthcare page)

Find the section that starts with "Healthcare practices are drowning in administrative work" and add this sentence at the end of that paragraph:

"During your session, Evan covers how to configure Cowork's privacy settings and establish workflows that align with your practice's HIPAA and data handling requirements."

## 7. Fix broken nav link on homepage

The "Claude Cowork" nav link in the header currently points to `/claude-cowork` which returns a 404. It should point to `/claude-cowork-training`. Same for the "AI Coding" link — make sure it points to `/ai-coding-training`. And "About Evan" should point to `/about`. Verify all nav links across every page resolve correctly.

## 8. Schema.org markup update (claude-cowork-training and ai-coding-training pages)

In the structured data JSON-LD on the claude-cowork-training page, the Service description is fine, but double-check that the schema on the ai-coding-training page has its own unique Service name (e.g., "Vibe Coding Training" not "Claude Cowork Training") so Google doesn't see duplicate service schemas.

---

After making all changes, do a find-across-files search for "formerly Claude Computer Use" and remove any remaining instances. Then check that all internal links resolve (no 404s).
