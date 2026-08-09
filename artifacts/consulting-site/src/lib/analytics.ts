declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function initializeAnalytics() {
  if (typeof window === "undefined") return;
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  if (!measurementId || document.querySelector(`script[data-ga-id="${measurementId}"]`)) return;

  window.dataLayer = window.dataLayer || [];

  const script = document.createElement("script");
  script.async = true;
  script.dataset.gaId = measurementId;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.dataLayer.push(["js", new Date()]);
  window.dataLayer.push(["config", measurementId]);
}

export function trackEvent(event: string, details: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", event, details]);
}
