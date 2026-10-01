# Session preparation reminder safety

Only completed, paid checkouts created through the new site checkout route are enrolled, using `lc_prep_v1_eligible=1`. Existing checkouts are excluded because the old in-memory history cannot establish whether a reminder was already sent. A legacy purchase may therefore miss this optional follow-up; it will not receive an automatic replay on deployment.

Before sending, the scheduler retrieves the current Checkout Session and writes a unique `lc_prep_v1_attempt` token with the stable Stripe idempotency key `lc-prep-v1-<session ID>`. Concurrent claims use different tokens; Stripe rejects the conflicting request. The persisted marker survives restarts and the expiration of Stripe's idempotency cache. No schema migration or new connection is required.

After Postmark accepts the send, `lc_prep_v1_sent_at` is saved. If the send outcome or final write is uncertain, the attempt marker remains. This favors avoiding duplicate email over automatically retrying an uncertain delivery. This is not a guarantee of exactly-once delivery by the email provider.

## Review an uncertain attempt

1. Inspect the session's two reminder markers in Stripe.
2. Reconcile the existing Postmark delivery/activity record before considering any manual follow-up.
3. Do not clear the attempt marker or retry automatically. Any manual resend needs a confirmed delivery history and the normal message authorization.

A missing Postmark configuration skips this scheduler before claiming anything. Logs include session IDs, not recipient addresses. The separate day-3/day-7 lead drip is unchanged.

## Validation

Run `node --experimental-strip-types --test artifacts/api-server/tests/session-prep-reminders.test.mjs`, the API TypeScript check, and the existing API/site builds. Tests use synthetic fixtures and make no provider calls or email sends.

References: https://docs.stripe.com/api/checkout/sessions/update and https://docs.stripe.com/api/idempotent_requests
