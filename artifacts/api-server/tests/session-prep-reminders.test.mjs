import test from 'node:test';
import assert from 'node:assert/strict';
import { eligibleForPrep, sendPrepOnce, PREP_ENROLLMENT } from '../src/lib/session-prep-reminders.ts';

const now = Date.parse('2026-10-01T12:00:00Z');
function fixture(overrides = {}) {
  let session = { id: 'cs_test_example', created: now / 1000 - 10800,
    status: 'complete', payment_status: 'paid', customer_details: { email: 'buyer@example.test', name: 'Buyer' },
    metadata: { ...PREP_ENROLLMENT, unrelated: 'preserve-me' }, ...overrides };
  const keys = new Map();
  let failClaim = false, failSent = false;
  const api = {
    async retrieve() { return structuredClone(session); },
    async update(id, params, options) {
      if (failClaim && params.metadata.lc_prep_v1_attempt) throw Error('claim unavailable');
      if (failSent && params.metadata.lc_prep_v1_sent_at) throw Error('sent record unavailable');
      const previous = keys.get(options.idempotencyKey);
      if (previous && previous !== JSON.stringify(params)) throw Error('idempotency mismatch');
      keys.set(options.idempotencyKey, JSON.stringify(params));
      session.metadata = { ...session.metadata, ...params.metadata };
      return structuredClone(session);
    },
  };
  return { api, get session() { return session; }, failClaim() { failClaim = true; }, failSent() { failSent = true; } };
}

test('restart and stale list cannot repeat a successfully sent reminder', async () => {
  const f = fixture(); let sends = 0;
  assert.equal(await sendPrepOnce(f.api, f.session.id, async () => { sends++; }, now), 'sent');
  assert.equal(await sendPrepOnce(f.api, f.session.id, async () => { sends++; }, now), 'skipped');
  assert.equal(sends, 1);
  assert.equal(f.session.metadata.unrelated, 'preserve-me');
  assert.equal(f.session.metadata.lc_prep_v1_sent_at, new Date(now).toISOString());
});
test('concurrent workers cannot both send', async () => {
  const f = fixture(); let sends = 0;
  const outcomes = await Promise.allSettled(Array.from({length: 8}, () => sendPrepOnce(f.api, f.session.id, async () => { sends++; }, now)));
  assert.equal(sends, 1);
  assert.equal(outcomes.filter(x => x.status === 'fulfilled' && x.value === 'sent').length, 1);
});
test('unknown send outcome retains claim and never automatically retries', async () => {
  const f = fixture(); let sends = 0;
  await assert.rejects(sendPrepOnce(f.api, f.session.id, async () => { sends++; throw Error('timeout after acceptance'); }, now));
  assert.equal(await sendPrepOnce(f.api, f.session.id, async () => { sends++; }, now), 'skipped');
  assert.equal(sends, 1);
  assert.ok(f.session.metadata.lc_prep_v1_attempt);
  assert.equal(f.session.metadata.lc_prep_v1_sent_at, undefined);
});
test('failure saving success cannot cause another send', async () => {
  const f = fixture(); f.failSent(); let sends = 0;
  await assert.rejects(sendPrepOnce(f.api, f.session.id, async () => { sends++; }, now));
  assert.equal(await sendPrepOnce(f.api, f.session.id, async () => { sends++; }, now), 'skipped');
  assert.equal(sends, 1);
});
test('failed durable claim prevents sending', async () => {
  const f = fixture(); f.failClaim(); let sends = 0;
  await assert.rejects(sendPrepOnce(f.api, f.session.id, async () => { sends++; }, now));
  assert.equal(sends, 0);
});
test('legacy, unpaid, open, young, and missing-email checkouts are excluded', async () => {
  for (const overrides of [{ metadata: {} }, { payment_status: 'unpaid' }, { status: 'open' },
    { created: now / 1000 - 60 }, { customer_details: null }]) {
    const f = fixture(overrides);
    assert.equal(eligibleForPrep(f.session, now), false);
    assert.equal(await sendPrepOnce(f.api, f.session.id, async () => { assert.fail('unexpected send'); }, now), 'skipped');
  }
});
test('unconfirmed claim response prevents sending', async () => {
  const f = fixture(); f.api.update = async () => ({ ...f.session, metadata: {} });
  await assert.rejects(sendPrepOnce(f.api, f.session.id, async () => { assert.fail('unexpected send'); }, now), /claim was not confirmed/);
});
