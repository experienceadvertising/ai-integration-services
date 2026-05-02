import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight } from "lucide-react";

const HIDDEN_PATHS = ["/success", "/cancel"];
const SHOWN_KEY = "exit-intent-shown";
const MIN_TIME_ON_PAGE_MS = 20000;

export default function ExitIntentPopup() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setShown(sessionStorage.getItem(SHOWN_KEY) === "1");
  }, []);

  useEffect(() => {
    if (shown) return;
    if (HIDDEN_PATHS.includes(location)) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;

    const startedAt = Date.now();

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY > 0) return;
      if (Date.now() - startedAt < MIN_TIME_ON_PAGE_MS) return;
      setOpen(true);
      setShown(true);
      sessionStorage.setItem(SHOWN_KEY, "1");
    };

    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, [location, shown]);

  // A11y: focus management + Escape close
  useEffect(() => {
    if (!open) return;
    lastFocused.current = document.activeElement as HTMLElement;
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lastFocused.current?.focus?.();
    };
  }, [open]);

  const close = () => setOpen(false);

  const goToAnalyzer = () => {
    close();
    if (location === "/") {
      document.getElementById("analyzer")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#analyzer";
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-intent-title"
          aria-describedby="exit-intent-desc"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full p-7 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              onClick={close}
              aria-label="Close"
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              Free Personalized Report
            </div>

            <h2 id="exit-intent-title" className="text-2xl font-bold tracking-tight mb-3">
              Wait — get a free report before you go.
            </h2>
            <p id="exit-intent-desc" className="text-muted-foreground text-sm leading-relaxed mb-6">
              Tell our AI what you do and get a personalized list of Claude Cowork use cases for your team. Takes 30 seconds. No credit card.
            </p>

            <button
              onClick={goToAnalyzer}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-3.5 px-6 font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Get My Free Report <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={close}
              className="w-full text-center text-xs text-muted-foreground hover:text-foreground mt-3 py-1"
            >
              No thanks, continue browsing
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
