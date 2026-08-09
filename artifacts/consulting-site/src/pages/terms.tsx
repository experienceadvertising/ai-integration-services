import SEO from "@/components/seo";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Terms of Service | AI Training by Evan Weber"
        description="Terms for AI training, workflow consulting, free reports and tools provided through learncowork.net by Experience Advertising, Inc."
        canonical="https://learncowork.net/terms"
      />
      <SiteNav />
      <main className="pt-28 pb-20 px-6 lg:px-12">
        <article className="container max-w-3xl mx-auto prose prose-neutral dark:prose-invert prose-headings:tracking-tight prose-a:text-primary">
          <h1>Terms of Service</h1>
          <p className="lead">Last updated: August 8, 2026</p>
          <p>These terms apply to learncowork.net and services provided through the site by Experience Advertising, Inc.</p>

          <h2>Training and Consulting Services</h2>
          <p>Sessions are tailored to the information, goals, tools, access, and examples you provide. The exact agenda may change based on your experience level, technical environment, security requirements, and available time.</p>
          <p>You are responsible for having the required software, subscriptions, permissions, files, and accounts ready for the session unless we agree otherwise in writing.</p>

          <h2>Bookings and Payment</h2>
          <p>Payment is processed by Stripe. Scheduling is handled through the booking process shown after purchase or through a mutually agreed meeting time. Your checkout confirmation, invoice, or written proposal may include additional engagement-specific terms.</p>

          <h2>Satisfaction Guarantee</h2>
          <p>If the first hour of a paid training session is not worth the purchase price to you, contact us promptly and we will provide the refund described on the booking page. This guarantee does not cover third-party subscriptions, software fees, travel, or work performed under a separate consulting proposal.</p>

          <h2>AI Limitations and Your Responsibility</h2>
          <p>AI systems can make mistakes, omit important context, produce insecure code, or take an unintended action. You are responsible for reviewing outputs and approving actions before using them in production, sending them to customers, making business decisions, or relying on them for legal, medical, financial, compliance, security, employment, or other high-impact matters.</p>
          <p>Training and site content are educational and operational guidance. They are not legal, medical, tax, financial, cybersecurity, or regulatory advice.</p>

          <h2>Confidentiality and Access</h2>
          <p>Do not share passwords or permanent credentials during a session. Use least-privilege access, temporary access, screen sharing, test accounts, or supervised login whenever practical. If a separate consulting agreement includes confidentiality terms, that agreement controls for the engagement.</p>

          <h2>Intellectual Property</h2>
          <p>You keep ownership of your pre-existing content, data, systems, and materials. Unless a written proposal states otherwise, you may use the playbooks, prompts, workflow documentation, and session recording created specifically for your internal business use. We retain ownership of our pre-existing methods, templates, site content, and training materials.</p>

          <h2>Free Tools and Reports</h2>
          <p>Free tools and AI-generated reports are provided for general informational purposes. Results are generated from the information available and may be incomplete or inaccurate. Verify recommendations before acting on them.</p>

          <h2>Third-Party Services</h2>
          <p>The site and training may involve third-party services such as OpenAI, Anthropic, Replit, GitHub, Stripe, Calendly, Postmark, and other tools selected for your workflow. Their terms, availability, security, pricing, and data practices are controlled by those providers and may change.</p>

          <h2>Limitation of Liability</h2>
          <p>To the extent permitted by law, Experience Advertising, Inc. is not liable for indirect, incidental, special, consequential, or lost-profit damages arising from the site, AI-generated content, third-party services, or your use of training materials. Any direct liability is limited to the amount you paid for the specific service giving rise to the claim.</p>

          <h2>Changes and Contact</h2>
          <p>We may update these terms as the services change. The updated date appears at the top of this page. Questions can be sent to <a href="mailto:evan@experienceadvertising.com">evan@experienceadvertising.com</a>.</p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
