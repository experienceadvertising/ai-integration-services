import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { EVAN_EMAIL, CALENDLY_INTRO } from "@/lib/booking-links";

export default function ServiceInquiry({
  service,
}: {
  service: "corporate-training" | "ai-development";
}) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  const isTraining = service === "corporate-training";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending" || state === "success") return;
    const data = Object.fromEntries(new FormData(event.currentTarget));
    setState("sending");
    setError("");
    try {
      const response = await fetch(
        `${import.meta.env.BASE_URL.replace(/\/$/, "")}/api/inquiries`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, service }),
          signal: AbortSignal.timeout(20000),
        },
      );
      const result = await response.json();
      if (
        !response.ok ||
        result.accepted !== true ||
        typeof result.reference !== "string"
      )
        throw new Error(
          result.error ||
            "Your inquiry could not be confirmed. Please email Evan directly. Your text is still in the form.",
        );
      setState("success");
      trackEvent("service_inquiry_accepted", { service, method: "web_form" });
    } catch (err) {
      setState("error");
      setError(
        err instanceof Error && err.name !== "TimeoutError"
          ? err.message
          : "We could not confirm your inquiry. To avoid sending it twice, email Evan directly and mention you tried the form. Your text is still here.",
      );
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }
  const fieldClass =
    "w-full rounded-md border border-input bg-background px-3 py-2.5 text-base focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2";
  return (
    <section
      id="inquiry"
      className="scroll-mt-20 border-t border-border bg-secondary/30 px-5 py-16"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            {isTraining
              ? "Request a team workshop quote"
              : "Tell Evan what you want to build"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            {isTraining
              ? "Share who needs training, the work you want to improve, and the tools your company allows. Evan can discuss fit and prepare a custom scope and quote."
              : "Share the business problem, who will use the project, and what a useful first version should do. An existing site or unfinished app is a good starting point too."}
          </p>
          <p className="text-sm text-muted-foreground mb-5">
            This is an inquiry, with no payment or project commitment. Scope,
            timing, price, and any ongoing support are agreed before work
            starts.
          </p>
          <p className="mb-3">
            Prefer email?{" "}
            <a
              className="text-primary underline break-all"
              href={`mailto:${EVAN_EMAIL}`}
            >
              {EVAN_EMAIL}
            </a>
          </p>
          <a
            href={CALENDLY_INTRO}
            className="text-primary underline"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("service_intro_click", { service })}
          >
            Schedule an introductory conversation
          </a>
        </div>
        <form
          onSubmit={submit}
          className="space-y-4"
          aria-label={
            isTraining ? "Team workshop inquiry" : "AI development inquiry"
          }
        >
          <div>
            <label htmlFor="inquiry-name" className="block font-medium mb-1">
              Your name
            </label>
            <input
              id="inquiry-name"
              name="name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="inquiry-email" className="block font-medium mb-1">
              Email
            </label>
            <input
              id="inquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="inquiry-company" className="block font-medium mb-1">
              Company or organization
            </label>
            <input
              id="inquiry-company"
              name="company"
              autoComplete="organization"
              required
              minLength={2}
              maxLength={150}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="inquiry-details" className="block font-medium mb-1">
              {isTraining
                ? "What should your team learn?"
                : "What are you trying to build or improve?"}
            </label>
            <textarea
              id="inquiry-details"
              name="details"
              required
              minLength={20}
              maxLength={4000}
              rows={5}
              aria-describedby="inquiry-help"
              className={fieldClass}
            />
            <p id="inquiry-help" className="text-sm text-muted-foreground mt-1">
              At least 20 characters. Please leave out passwords, private
              customer records, and confidential files.
            </p>
          </div>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="inquiry-website">Leave empty</label>
            <input
              id="inquiry-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Your details go to Evan to respond to this request. See the{" "}
            <a className="underline" href="/privacy/">
              privacy policy
            </a>
            .
          </p>
          <Button
            type="submit"
            disabled={state === "sending" || state === "success"}
            className="w-full h-12"
          >
            {state === "sending"
              ? "Sending inquiry..."
              : state === "success"
                ? "Inquiry accepted"
                : isTraining
                  ? "Request a custom quote"
                  : "Send project inquiry"}
          </Button>
          <div
            ref={statusRef}
            tabIndex={-1}
            role={state === "error" ? "alert" : "status"}
            className="text-sm leading-relaxed focus:outline-none"
          >
            {state === "success" &&
              "Your inquiry has been accepted by our email service for Evan. No booking or payment has been made. If you do not hear back, use the direct email above."}
            {state === "error" && <p className="text-destructive">{error}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
