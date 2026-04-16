import cron from "node-cron";
import { db } from "@workspace/db";
import { leadsTable } from "@workspace/db/schema";
import { isNull, lte, and, eq } from "drizzle-orm";
import { sendDripEmail } from "./postmark";
import { logger } from "./logger";

function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
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
  });
  logger.info("Drip email scheduler started (runs hourly)");
}
