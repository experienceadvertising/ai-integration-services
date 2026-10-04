const test = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { mkdtempSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
const destination = mkdtempSync(path.join(tmpdir(), 'learncowork-analytics-'));
execFileSync(path.resolve(__dirname, '../../../node_modules/.bin/tsc'), [path.resolve(__dirname, '../src/lib/analytics.ts'), '--module', 'commonjs', '--target', 'ES2020', '--skipLibCheck', '--outDir', destination]);
const { submitTrackedLead, trackEvent } = require(path.join(destination, 'analytics.js'));
const calls = [];
global.window = { gtag: (...args) => calls.push(args) };
Object.defineProperty(global, 'navigator', { value: {}, configurable: true });
test('accepted saved lead emits one event without personal data', async () => {
  calls.length = 0;
  global.fetch = async () => ({ ok: true, json: async () => ({ success: true, id: 123 }) });
  assert.equal(await submitTrackedLead('/api/leads', { email: 'qa@example.invalid', name: 'Private', description: 'Private', type: 'quiz' }), true);
  assert.deepEqual(calls, [['event', 'generate_lead', { lead_type: 'quiz', method: 'web_form', send_to: 'G-170RH5EVJF' }]]);
});
test('rejected and unsaved leads do not count', async () => {
  calls.length = 0;
  for (const result of [{ok:false}, {ok:true,json:async()=>({success:false})}, {ok:true,json:async()=>({success:true})}]) {
    global.fetch = async () => result;
    assert.equal(await submitTrackedLead('/api/leads', {type:'quiz'}), false);
  }
  global.fetch = async () => { throw new Error('offline'); };
  assert.equal(await submitTrackedLead('/api/leads', {type:'quiz'}), false);
  assert.equal(calls.length, 0);
});
test('browser privacy signals suppress business events', () => {
  calls.length = 0;
  navigator.globalPrivacyControl = true;
  trackEvent('generate_lead');
  assert.equal(calls.length, 0);
  navigator.globalPrivacyControl = false;
});
test.after(() => rmSync(destination, {recursive:true,force:true}));
