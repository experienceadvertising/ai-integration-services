import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { ArrowRight, X } from "lucide-react";

const HIDDEN_PATHS = ["/success", "/cancel"];
const DISMISS_KEY = "sticky-cta-dismissed";

export default function StickyMobileCta() {
  const [location] = useLocation();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
  }, []);

  useEffect(() => {
    if (dismissed) return;
    if (HIDDEN_PATHS.includes(location)) return;

    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location, dismissed]);

  if (dismissed) return null;
  if (HIDDEN_PATHS.includes(location)) return null;
  if (!visible) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location === "/") {
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#pricing";
    }
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-50 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-primary text-primary-foreground rounded-2xl shadow-2xl flex items-center gap-2 pl-4 pr-2 py-2.5 border border-primary/40">
        <button onClick={handleClick} className="flex items-center gap-3 flex-1 text-left">
          <div className="flex-1">
            <div className="font-bold text-sm leading-tight">Book a Session</div>
            <div className="text-xs opacity-90 leading-tight">Live with Evan · from $300</div>
          </div>
          <ArrowRight className="w-5 h-5 shrink-0" />
        </button>
        <button
          onClick={handleDismiss}
          aria-label="Dismiss"
          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 shrink-0"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
