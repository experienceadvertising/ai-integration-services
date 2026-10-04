declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const LEADPOST_AUDIENCE_ID = "35597";
const LEADPOST_SCRIPT_URL = `https://rdcdn.com/rtjs?aid=${LEADPOST_AUDIENCE_ID}`;

function browserOptedOutOfTracking(): boolean {
  const navigatorWithPrivacySignals = navigator as Navigator & {
    globalPrivacyControl?: boolean;
    msDoNotTrack?: string;
  };

  return (
    navigatorWithPrivacySignals.globalPrivacyControl === true ||
    navigator.doNotTrack === "1" ||
    navigatorWithPrivacySignals.msDoNotTrack === "1"
  );
}

export function initializeLeadPost() {
  if (typeof window === "undefined" || browserOptedOutOfTracking()) return;
  if (document.querySelector(`script[data-leadpost-audience-id="${LEADPOST_AUDIENCE_ID}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.dataset.leadpostAudienceId = LEADPOST_AUDIENCE_ID;
  script.referrerPolicy = "strict-origin-when-cross-origin";
  script.src = LEADPOST_SCRIPT_URL;
  document.head.appendChild(script);
}

export function trackEvent(event: string, details: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (browserOptedOutOfTracking()) return;
  try {
    window.gtag?.("event", event, { ...details, send_to: "G-170RH5EVJF" });
  } catch {
    // A blocked analytics tag must not change a successful product action.
  }
}

// A lead conversion means the API accepted and saved the record.
// Never include names, emails, descriptions or generated reports in GA4.
export async function submitTrackedLead(url: string, payload: Record<string, unknown>): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) return false;
    const result = await response.json();
    if (result.success !== true || result.id == null) return false;
    trackEvent("generate_lead", { lead_type: payload.type, method: "web_form" });
    return true;
  } catch {
    return false;
  }
}
