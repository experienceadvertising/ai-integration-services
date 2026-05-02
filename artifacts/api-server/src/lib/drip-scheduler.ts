import cron from "node-cron";
import { db } from "@workspace/db";
import { leadsTable } from "@workspace/db/schema";
import { isNull, lte, and, eq } from "drizzle-orm";
import { sendDripEmail, sendSessionPrepReminder } from "./postmark";
import { getUncachableStripeClient } from "../stripeClient";
import { logger } from "./logger";

function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

// In-memory dedup. Acceptable for current single-instance, low-volume deployment.
// If we ever scale horizontally or add HA, persist this in a `prep_reminders_sent`
// table keyed by stripe checkout session id.
const reminderSent = new Set<string>();

const PREP_DELAY_MS = 2 * 60 * 60 * 1000;          // send 2h after purchase
const SCAN_WINDOW_MS = 5 * 24 * 60 * 60 * 1000;    // scan last 5 days of sessions

async function runSessionReminders() {
  try {
    const stripe = await getUncachableStripeClient();
    const now = Date.now();
    const sinceTs = Math.floor((now - SCAN_WINDOW_MS) / 1000);

    let startingAfter: string | undefined;
    let pagesScanned = 0;
    const MAX_PAGES = 50; // hard safety guard, ~5,000 sessions

    while (pagesScanned < MAX_PAGES) {
      const result: any = await stripe.checkout.sessions.list({
        created: { gte: sinceTs },
        limit: 100,
        ...(startingAfter ? { starting_after: startingAfter } : {}),
      });
      pagesScanned++;

      for (const session of result.data) {
        if (session.payment_status !== "paid") continue;
        if (!session.customer_details?.email) continue;
        if (reminderSent.has(session.id)) continue;

        const ageMs = now - (session.created ?? 0) * 1000;
        if (ageMs < PREP_DELAY_MS) continue;

        try {
          await sendSessionPrepReminder({
            email: session.customer_details.email,
            name: session.customer_details.name ?? undefined,
          });
          reminderSent.add(session.id);
          logger.info({ sessionId: session.id, email: session.customer_details.email }, "Session prep guide sent");
        } catch (err) {
          logger.error({ err, sessionId: session.id }, "Failed to send session prep guide");
        }
      }

      if (!result.has_more || result.data.length === 0) break;
      startingAfter = result.data[result.data.length - 1].id;
    }
  } catch (err) {
    logger.error({ err }, "Session reminder scheduler error");
  }
}

async function runDrip() {
  try {
    // Day 3 — leads created 3+ days ago that haven't had drip3 sent
    const day3Leads = await db
      .select()
      .from(leadsTable)
      .where(and(isNull(leadsTable.drip3SentAt), lte(leadsTable.createdAt, daysAgo(3))));

    for (const lead of day3Leads) {
      try {
        await sendDripEmail({ name: lead.name ?? undefined, email: lead.email, type: lead.type }, 3);
        await db
          .update(leadsTable)
          .set({ drip3SentAt: new Date() })
          .where(eq(leadsTable.id, lead.id));
        logger.info({ leadId: lead.id, email: lead.email }, "Drip day 3 sent");
      } catch (err) {
        logger.error({ err, leadId: lead.id }, "Failed to send drip day 3");
      }
    }

    // Day 7 — leads created 7+ days ago that haven't had drip7 sent
    const day7Leads = await db
      .select()
      .from(leadsTable)
      .where(and(isNull(leadsTable.drip7SentAt), lte(leadsTable.createdAt, daysAgo(7))));

    for (const lead of day7Leads) {
      try {
        await sendDripEmail({ name: lead.name ?? undefined, email: lead.email, type: lead.type }, 7);
        await db
          .update(leadsTable)
          .set({ drip7SentAt: new Date() })
          .where(eq(leadsTable.id, lead.id));
        logger.info({ leadId: lead.id, email: lead.email }, "Drip day 7 sent");
      } catch (err) {
        logger.error({ err, leadId: lead.id }, "Failed to send drip day 7");
      }
    }
  } catch (err) {
    logger.error({ err }, "Drip scheduler error");
  }
}

export function startDripScheduler() {
  // Run every hour at :00
  cron.schedule("0 * * * *", () => {
    logger.info("Running drip email scheduler");
    runDrip();
    runSessionReminders();
  });
  logger.info("Drip email scheduler started (runs hourly)");
}
