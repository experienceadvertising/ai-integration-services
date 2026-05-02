import { ShieldCheck, Lock, Calendar } from "lucide-react";
import { CALENDLY_INTRO } from "@/lib/booking-links";

export default function BookingTrustRow() {
  return (
    <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-background/50">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-bold leading-snug">100% Satisfaction Guarantee</div>
            <div className="text-xs text-muted-foreground mt-0.5 leading-snug">If your first hour with Evan isn't worth the price, get a full refund. No questions.</div>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-background/50">
          <Lock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-bold leading-snug">Secure Stripe Checkout</div>
            <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Pay securely by card. Receipt emailed instantly. Your details are never stored on our servers.</div>
          </div>
        </div>
        <a
          href={CALENDLY_INTRO}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 p-4 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-colors group"
        >
          <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-bold leading-snug group-hover:text-primary transition-colors">Not Ready? Talk to Evan First</div>
            <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Book a free 15-minute intro call to ask questions and see if it's the right fit.</div>
          </div>
        </a>
      </div>
    </div>
  );
}
