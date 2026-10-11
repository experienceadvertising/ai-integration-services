import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { rm } from 'node:fs/promises';
await build({ entryPoints: ['artifacts/api-server/src/lib/postmark.ts'], bundle: true, platform: 'node', format: 'esm', outfile: 'artifacts/api-server/tests/.email-test.mjs' });
process.env.POSTMARK_API_KEY = 'local-test-fixture';
const { sendServiceInquiry } = await import('./.email-test.mjs');
const inquiry = { name: '<Test & Owner>', email: 'evan@experienceadvertising.com', company: 'TEST\nONLY', service: 'ai-development', details: '<script>test</script>\nNo real delivery.' };
const originalFetch = globalThis.fetch;
try {
  globalThis.fetch = async (_url, opts) => {
    const message = JSON.parse(opts.body);
    assert.equal(message.To, 'evan@experienceadvertising.com');
    assert.equal(message.ReplyTo, inquiry.email);
    assert.equal(message.From, 'Learn Cowork <info@learncowork.net>');
    assert(!message.Subject.includes('\n'));
    assert(!message.HtmlBody.includes('<script>'));
    assert(message.TextBody.includes('No real delivery.'));
    return Response.json({ ErrorCode: 0, MessageID: 'fixture-message' });
  };
  assert.equal(await sendServiceInquiry(inquiry), 'fixture-message');
  for (const response of [Response.json({ ErrorCode: 1, MessageID: 'fixture' }), Response.json({ ErrorCode: 0 }), Response.json({ ErrorCode: 0 }, { status: 503 })]) {
    globalThis.fetch = async () => response; await assert.rejects(sendServiceInquiry(inquiry));
  }
  globalThis.fetch = async () => { throw new Error('timeout'); }; await assert.rejects(sendServiceInquiry(inquiry));
  console.log('Service email contract passed: existing owner destination, reply address, escaped HTML, subject sanitization, acceptance, provider and network failures. No real email sent.');
} finally { globalThis.fetch = originalFetch; delete process.env.POSTMARK_API_KEY; await rm('artifacts/api-server/tests/.email-test.mjs'); }
