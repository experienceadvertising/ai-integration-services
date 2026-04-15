import { getUncachableStripeClient } from './stripeClient';

/**
 * Seed consulting packages into Stripe.
 * Idempotent — checks if products exist before creating them.
 *
 * Run with: pnpm --filter @workspace/scripts exec tsx src/seed-products.ts
 */
async function createProducts() {
  const stripe = await getUncachableStripeClient();

  console.log('Creating consulting packages in Stripe...');

  // 1-Hour Session
  const existing1h = await stripe.products.search({
    query: "name:'1-Hour Training Session' AND active:'true'",
  });

  if (existing1h.data.length === 0) {
    const product1h = await stripe.products.create({
      name: '1-Hour Training Session',
      description: 'A focused 1-hour live session via screen share. Perfect for individuals or small teams wanting a fast introduction to Claude, Replit, and AI productivity tools.',
      metadata: {
        hours: '1',
      },
    });

    await stripe.prices.create({
      product: product1h.id,
      unit_amount: 30000, // $300.00
      currency: 'usd',
    });

    console.log(`Created: 1-Hour Session (${product1h.id}) — $300`);
  } else {
    console.log('1-Hour Session already exists — skipping.');
  }

  // 4-Hour Deep Dive
  const existing4h = await stripe.products.search({
    query: "name:'4-Hour Deep Dive Workshop' AND active:'true'",
  });

  if (existing4h.data.length === 0) {
    const product4h = await stripe.products.create({
      name: '4-Hour Deep Dive Workshop',
      description: 'A comprehensive 4-hour workshop where we build real workflows together, set up automations live, and get your team actually using AI — department by department.',
      metadata: {
        hours: '4',
      },
    });

    await stripe.prices.create({
      product: product4h.id,
      unit_amount: 100000, // $1,000.00 ($250/hr)
      currency: 'usd',
    });

    console.log(`Created: 4-Hour Deep Dive (${product4h.id}) — $1,000`);
  } else {
    console.log('4-Hour Deep Dive already exists — skipping.');
  }

  console.log('Done. Webhooks will sync this data to your database automatically.');
}

createProducts().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
