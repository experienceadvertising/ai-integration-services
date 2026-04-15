const POSTMARK_API_KEY = process.env.POSTMARK_API_KEY;
const FROM_EMAIL = "info@learncowork.net";
const FROM_NAME = "Learn Cowork";
const EVAN_EMAIL = "evan@experienceadvertising.com";
const SITE_URL = "https://learncowork.net";

async function sendEmail(to: string, subject: string, htmlBody: string, replyTo?: string) {
  if (!POSTMARK_API_KEY) {
    console.warn("POSTMARK_API_KEY not set — skipping email send");
    return;
  }

  const res = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": POSTMARK_API_KEY,
    },
    body: JSON.stringify({
      From: `${FROM_NAME} <${FROM_EMAIL}>`,
      To: to,
      ReplyTo: replyTo ?? FROM_EMAIL,
      Subject: subject,
      HtmlBody: htmlBody,
      MessageStream: "outbound",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Postmark error:", res.status, text);
    throw new Error(`Postmark send failed: ${res.status}`);
  }
}

export async function sendLeadNotification(lead: {
  name?: string | null;
  email: string;
  type: string;
  website?: string | null;
  industry?: string | null;
  description?: string | null;
}) {
  const subject = `New AI training lead: ${lead.name || lead.email}`;
  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 600px; padding: 24px;">
      <h2 style="color: #D4703A; margin-top: 0;">New Lead from learncowork.net</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666; width: 130px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${lead.name || "Not provided"}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Type</td><td style="padding: 8px 0;">${lead.type === "business" ? "Business" : "Individual"}</td></tr>
        ${lead.website ? `<tr><td style="padding: 8px 0; color: #666;">Website</td><td style="padding: 8px 0;"><a href="${lead.website}">${lead.website}</a></td></tr>` : ""}
        ${lead.industry ? `<tr><td style="padding: 8px 0; color: #666;">Industry</td><td style="padding: 8px 0;">${lead.industry}</td></tr>` : ""}
        ${lead.description ? `<tr><td style="padding: 8px 0; color: #666;">Description</td><td style="padding: 8px 0;">${lead.description}</td></tr>` : ""}
      </table>
      <div style="margin-top: 24px;">
        <a href="mailto:${lead.email}?subject=Your Claude Cowork Report from Evan Weber" style="background: #D4703A; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: 600;">Reply to ${lead.name || "this lead"}</a>
      </div>
    </div>
  `;
  await sendEmail(EVAN_EMAIL, subject, html);
}

export async function sendWelcomeEmail(lead: {
  name?: string | null;
  email: string;
  type: string;
}) {
  const firstName = lead.name?.split(" ")[0] || "there";
  const subject = "Your Claude Cowork report is ready — plus what to do next";
  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 600px; padding: 24px; color: #1a1a1a;">
      <p style="font-size: 18px; font-weight: 600; color: #D4703A; margin-top: 0;">AI Training by Evan Weber</p>
      <h1 style="font-size: 26px; margin: 0 0 16px;">Hey ${firstName} — your report is ready.</h1>
      <p>I just generated a personalized Claude Cowork report for you based on what you shared. I hope it gives you a clear picture of what's possible.</p>
      <p>A few things worth knowing:</p>
      <ul style="line-height: 1.8;">
        <li><strong>Claude Cowork isn't just another chatbot.</strong> It's an AI that operates your computer — reading files, running automations, and working in your actual tools.</li>
        <li><strong>Most teams see results in the first session.</strong> We don't do theory. We build real workflows together on the call.</li>
        <li><strong>The 1-hour session is a great starting point.</strong> It's $300, runs on screen share, and is tailored entirely to your situation.</li>
      </ul>
      <p>If you're ready to book, you can do it directly here:</p>
      <div style="margin: 24px 0;">
        <a href="${SITE_URL}/#pricing" style="background: #D4703A; color: white; padding: 14px 24px; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 16px;">Book a Session →</a>
      </div>
      <p>Or if you have questions first, just reply to this email. I read everything.</p>
      <p style="margin-bottom: 4px;">— Evan</p>
      <p style="color: #666; font-size: 13px; margin-top: 4px;">Evan Weber · AI Training · Experience Advertising<br/><a href="${SITE_URL}" style="color: #D4703A;">learncowork.net</a></p>
    </div>
  `;
  await sendEmail(lead.email, subject, html, EVAN_EMAIL);
}

export async function sendDripEmail(lead: {
  name?: string | null;
  email: string;
  type: string;
}, day: 3 | 7) {
  const firstName = lead.name?.split(" ")[0] || "there";

  if (day === 3) {
    const subject = "The #1 mistake teams make with Claude (and how to avoid it)";
    const html = `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; padding: 24px; color: #1a1a1a;">
        <p style="font-size: 14px; color: #D4703A; margin-top: 0; font-weight: 600;">AI Training by Evan Weber</p>
        <h1 style="font-size: 24px; margin: 0 0 16px;">Hey ${firstName} — the #1 mistake I see</h1>
        <p>I've trained a lot of teams on Claude Cowork, and there's one mistake I see almost every time:</p>
        <p><strong>They use Claude like a search engine.</strong></p>
        <p>They type a short question, get a short answer, and wonder why it's not changing anything. That's not how Claude Cowork works.</p>
        <p>Claude Cowork is designed for <em>delegation</em> — not lookup. You give it a full task with context, and it handles the whole thing. The difference is massive.</p>
        <p>Here's a concrete example:</p>
        <ul style="line-height: 1.8;">
          <li><strong>Wrong:</strong> "Summarize our competitor."</li>
          <li><strong>Right:</strong> "Review our competitor's homepage, pricing page, and G2 reviews. Summarize their positioning, what customers love, what they complain about, and three angles we could use in our next campaign."</li>
        </ul>
        <p>One gets you a paragraph. The other gets you a competitive brief you'd normally spend 3 hours on.</p>
        <p>This is exactly what I cover in the first 20 minutes of every training session — how to give Claude the right level of instruction so it actually changes your output.</p>
        <div style="margin: 24px 0;">
          <a href="${SITE_URL}/#pricing" style="background: #D4703A; color: white; padding: 14px 24px; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 16px;">Book a Session →</a>
        </div>
        <p style="margin-bottom: 4px;">— Evan</p>
        <p style="color: #666; font-size: 13px; margin-top: 4px;">Evan Weber · <a href="${SITE_URL}" style="color: #D4703A;">learncowork.net</a></p>
      </div>
    `;
    await sendEmail(lead.email, subject, html, EVAN_EMAIL);
  } else {
    const subject = "What does a full Claude Cowork session actually look like?";
    const html = `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; padding: 24px; color: #1a1a1a;">
        <p style="font-size: 14px; color: #D4703A; margin-top: 0; font-weight: 600;">AI Training by Evan Weber</p>
        <h1 style="font-size: 24px; margin: 0 0 16px;">Hey ${firstName} — here's exactly what happens in a session</h1>
        <p>I get this question a lot: "What does the training actually look like?" So let me walk you through it.</p>
        <p><strong>Before the call:</strong> I'll ask you to share your top 2-3 time-consuming workflows. The ones that eat your week.</p>
        <p><strong>First 15 minutes:</strong> Setup and orientation. We make sure Claude Cowork is properly configured, connected to your tools, and you understand the fundamentals.</p>
        <p><strong>Middle 30-40 minutes:</strong> We build together. I share my screen, you share yours, and we work through your actual workflows — not demo data, your real tasks.</p>
        <p><strong>Last 5-10 minutes:</strong> Playbook and next steps. You leave with a written guide specific to your role that you can share with your team.</p>
        <p>The 4-hour Deep Dive does this across multiple departments or goes deep on a single workflow end-to-end — including MCP integrations connecting Claude to your existing tools.</p>
        <p>Either way, you're not watching a presentation. You're building something real.</p>
        <div style="margin: 24px 0;">
          <a href="${SITE_URL}/#pricing" style="background: #D4703A; color: white; padding: 14px 24px; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 16px;">Book your session →</a>
        </div>
        <p>If you want to chat before committing, just reply to this email. I'm happy to answer any questions.</p>
        <p style="margin-bottom: 4px;">— Evan</p>
        <p style="color: #666; font-size: 13px; margin-top: 4px;">Evan Weber · <a href="${SITE_URL}" style="color: #D4703A;">learncowork.net</a></p>
      </div>
    `;
    await sendEmail(lead.email, subject, html, EVAN_EMAIL);
  }
}
