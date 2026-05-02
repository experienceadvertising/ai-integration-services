import { Router, type IRouter } from "express";
import { getUncachableStripeClient } from "../stripeClient";

const router: IRouter = Router();

const CACHE_MS = 5 * 60 * 1000;
const WINDOW_DAYS = 30;
let cache: { count: number; days: number; cachedAt: number } | null = null;

router.get("/stats/recent-bookings", async (req, res) => {
  try {
    if (cache && Date.now() - cache.cachedAt < CACHE_MS) {
      res.json({ count: cache.count, days: cache.days });
      return;
    }

    const stripe = await getUncachableStripeClient();
    const sinceTs = Math.floor(Date.now() / 1000) - WINDOW_DAYS * 86400;

    let count = 0;
    let startingAfter: string | undefined;
    let pagesScanned = 0;
    const MAX_PAGES = 50; // safety guard, ~5,000 sessions in 30 days

    while (pagesScanned < MAX_PAGES) {
      const result: any = await stripe.checkout.sessions.list({
        created: { gte: sinceTs },
        limit: 100,
        ...(startingAfter ? { starting_after: startingAfter } : {}),
      });
      pagesScanned++;

      for (const session of result.data) {
        if (session.payment_status === "paid") count++;
      }

      if (!result.has_more || result.data.length === 0) break;
      startingAfter = result.data[result.data.length - 1].id;
    }

    cache = { count, days: WINDOW_DAYS, cachedAt: Date.now() };
    res.json({ count, days: WINDOW_DAYS });
  } catch (err: any) {
    req.log.error({ err }, "Failed to fetch recent bookings stats");
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

export default router;
