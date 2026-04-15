import { Router, type IRouter } from "express";
import { getUncachableStripeClient } from "../stripeClient";

const router: IRouter = Router();

// List consulting packages — fetches directly from Stripe API
router.get("/packages", async (req, res) => {
  try {
    const stripe = await getUncachableStripeClient();

    const [productsResult, pricesResult] = await Promise.all([
      stripe.products.list({ active: true, limit: 20 }),
      stripe.prices.list({ active: true, limit: 20 }),
    ]);

    const pricesByProduct = new Map<string, typeof pricesResult.data[0][]>();
    for (const price of pricesResult.data) {
      const productId = typeof price.product === "string" ? price.product : price.product.id;
      if (!pricesByProduct.has(productId)) {
        pricesByProduct.set(productId, []);
      }
      pricesByProduct.get(productId)!.push(price);
    }

    const packages = productsResult.data
      .filter((product) => pricesByProduct.has(product.id))
      .flatMap((product) => {
        const prices = pricesByProduct.get(product.id) ?? [];
        return prices.map((price) => ({
          id: product.id,
          priceId: price.id,
          name: product.name,
          description: product.description ?? "",
          hours: Number(product.metadata?.hours ?? 1),
          unitAmount: price.unit_amount ?? 0,
          currency: price.currency,
          metadata: product.metadata as Record<string, string>,
        }));
      })
      .sort((a, b) => a.unitAmount - b.unitAmount);

    res.json({ data: packages });
  } catch (error: any) {
    req.log.error({ err: error }, "Failed to list packages");
    res.status(500).json({ error: "Failed to load packages" });
  }
});

// Create Stripe checkout session
router.post("/checkout", async (req, res) => {
  const { priceId, successUrl, cancelUrl } = req.body;

  if (!priceId || !successUrl || !cancelUrl) {
    res.status(400).json({ error: "priceId, successUrl, and cancelUrl are required" });
    return;
  }

  try {
    const stripe = await getUncachableStripeClient();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    res.json({ url: session.url });
  } catch (error: any) {
    req.log.error({ err: error }, "Failed to create checkout session");
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

export default router;
