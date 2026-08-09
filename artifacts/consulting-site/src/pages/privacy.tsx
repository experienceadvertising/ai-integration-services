import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Privacy Policy | AI Training by Evan Weber"
        description="Privacy policy for learncowork.net, including information collected through reports, training bookings, payments, scheduling and email follow-up."
        canonical="https://learncowork.net/privacy"
      />
      <SiteNav />
      <main className="pt-28 pb-20 px-6 lg:px-12">
        <article className="container max-w-3xl mx-auto prose prose-neutral dark:prose-invert prose-headings:tracking-tight prose-a:text-primary">
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: August 8, 2026</p>
          <p>This policy explains how Experience Advertising, Inc. collects and uses information through learncowork.net.</p>

          <h2>Information We Collect</h2>
          <p>Depending on how you use the site, we may collect your name, email address, company or industry information, website URL, role, job description, workflow details, form responses, scheduling information, training intake information, and communications with us.</p>
          <p>When you buy a session, payment details are processed by Stripe. We do not store full card numbers on our servers. When you schedule a meeting, Calendly processes the scheduling information you provide.</p>

          <h2>AI Reports and Submitted Content</h2>
          <p>If you request an AI report or use an analyzer, the information you submit may be sent to an AI service to generate the requested result. If you provide a website, the service may retrieve publicly available pages from that site to create a more relevant report.</p>
          <p>Do not submit passwords, account credentials, protected health information, confidential legal information, regulated financial information, trade secrets, or other sensitive personal data through a public report or analyzer form.</p>

          <h2>How We Use Information</h2>
          <ul>
            <li>Provide reports, tools, training, consulting, scheduling, and customer support.</li>
            <li>Process purchases and send confirmations, reminders, and preparation materials.</li>
            <li>Respond to requests and send relevant follow-up information.</li>
            <li>Improve the site, services, content, and user experience.</li>
            <li>Protect the site, prevent abuse, and comply with legal obligations.</li>
          </ul>

          <h2>Service Providers</h2>
          <p>We may use service providers for website hosting, analytics, AI report generation, payments, scheduling, email delivery, databases, and other business operations. These may include Replit, Anthropic, Google Analytics when enabled, Stripe, Calendly, and Postmark where those services are used.</p>

          <h2>Cookies, Local Storage, and Analytics</h2>
          <p>The site may use cookies, local or session storage, and analytics tools to operate forms, remember interface choices, understand site usage, and measure conversions. You can control cookies through your browser settings. Some site features may not work as expected if storage is blocked.</p>

          <h2>Email</h2>
          <p>If you request a report, use a lead form, or book a service, we may email the requested material and a limited number of relevant follow-ups. You can unsubscribe from marketing email using the link in the message or by contacting us.</p>

          <h2>Retention and Security</h2>
          <p>We retain information only as long as reasonably needed for the purposes described here, business records, dispute resolution, security, and legal compliance. No system is completely secure, but we use reasonable administrative and technical safeguards appropriate to the information we handle.</p>

          <h2>Your Choices</h2>
          <p>You may ask to access, correct, or delete personal information we control, subject to legal and operational requirements. You may also opt out of marketing email at any time.</p>

          <h2>Contact</h2>
          <p>Questions or privacy requests can be sent to <a href="mailto:evan@experienceadvertising.com">evan@experienceadvertising.com</a>.</p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
