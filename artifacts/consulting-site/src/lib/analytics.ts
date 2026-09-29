declare global {
  interface Window {
    dataLayer?: unknown[];
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
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", event, details]);
}
