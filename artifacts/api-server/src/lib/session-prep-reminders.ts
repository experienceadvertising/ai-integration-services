import { randomUUID } from "node:crypto";
import type Stripe from "stripe";

// Enroll only checkouts created by this release. Older purchases have no reliable
// send history and must not be replayed after the first safe deployment.
export const PREP_ENROLLMENT = { lc_prep_v1_eligible: "1" } as const;
export const PREP_DELAY_MS = 2 * 60 * 60 * 1000;

type Session = Pick<Stripe.Checkout.Session,
  "id" | "created" | "status" | "payment_status" | "customer_details" | "metadata">;
type Sessions = {
  retrieve(id: string): Promise<Session>;
  update(id: string, params: { metadata: Record<string, string> },
    options?: { idempotencyKey: string; timeout: number }): Promise<Session>;
};
type Send = (recipient: { email: string; name?: string }) => Promise<void>;

export function eligibleForPrep(session: Session, now: number): boolean {
  return session.status === "complete" && session.payment_status === "paid"
    && !!session.customer_details?.email
    && session.metadata?.lc_prep_v1_eligible === "1"
    && !session.metadata?.lc_prep_v1_attempt
    && now - session.created * 1000 >= PREP_DELAY_MS;
}

export async function sendPrepOnce(
  sessions: Sessions, sessionId: string, send: Send, now = Date.now(),
): Promise<"sent" | "skipped"> {
  // Read fresh metadata rather than relying on the scheduler's list snapshot.
  const session = await sessions.retrieve(sessionId);
  if (!eligibleForPrep(session, now)) return "skipped";

  const attempt = randomUUID();
  // One stable key per purchase and a unique owner per attempt. Stripe rejects
  // competing updates with different owners; the durable marker survives key
  // expiry, process restarts, and future scans. Never clear it automatically.
  const claimed = await sessions.update(sessionId, {
    metadata: { lc_prep_v1_attempt: attempt },
  }, { idempotencyKey: `lc-prep-v1-${sessionId}`, timeout: 15000 });
  if (claimed.metadata?.lc_prep_v1_attempt !== attempt) {
    throw new Error("Prep reminder claim was not confirmed; no email sent");
  }

  // Claim before sending: an uncertain provider response or a crash cannot cause
  // an automatic repeat. A claim without sent_at needs manual delivery review.
  await send({
    email: session.customer_details!.email!,
    name: session.customer_details?.name ?? undefined,
  });
  await sessions.update(sessionId, {
    metadata: { lc_prep_v1_sent_at: new Date(now).toISOString() },
  }, { idempotencyKey: `lc-prep-sent-v1-${sessionId}`, timeout: 15000 });
  return "sent";
}
