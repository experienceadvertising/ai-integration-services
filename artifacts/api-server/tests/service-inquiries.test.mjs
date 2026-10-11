import assert from "node:assert/strict";
import { build } from "esbuild";
import { rm } from "node:fs/promises";
import express from "express";
// External Express resolves from the repository, so place the tiny compiled module there for the test.
await build({
  entryPoints: ["artifacts/api-server/src/routes/inquiries.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  packages: "external",
  outfile: "artifacts/api-server/tests/.inquiry-test.mjs",
});
const { createInquiryRouter, validateInquiry } =
  await import("./.inquiry-test.mjs");
const valid = {
  name: "Test Owner",
  email: "evan@experienceadvertising.com",
  company: "TEST ONLY",
  service: "corporate-training",
  details: "TEST ONLY. This is a validation fixture, not a live inquiry.",
};
assert.equal(validateInquiry(null), null);
for (const input of [
  { ...valid, email: "bad" },
  { ...valid, email: "test@example.com\r\nBcc: x@y.com" },
  { ...valid, details: "short" },
  { ...valid, name: " " },
  { ...valid, service: "other" },
  { ...valid, company: "x".repeat(151) },
])
  assert.equal(validateInquiry(input), null);
let calls = 0;
const app = express();
app.use(express.json());
app.use(
  "/api",
  createInquiryRouter(async (inquiry) => {
    calls++;
    assert.equal(inquiry.company, valid.company);
    return "test-provider-id";
  }),
);
app.use(
  "/failed",
  createInquiryRouter(async () => {
    throw new Error("provider unavailable");
  }),
);
app.use("/unconfigured", createInquiryRouter());
const server = app.listen(0, "127.0.0.1");
await new Promise((resolve) => server.once("listening", resolve));
const base = `http://127.0.0.1:${server.address().port}`;
async function post(path, body, origin) {
  return fetch(`${base}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(origin ? { Origin: origin } : {}),
    },
    body: JSON.stringify(body),
  });
}
try {
  assert.equal((await post("/api/inquiries", {})).status, 400);
  assert.equal(
    (await post("/api/inquiries", { ...valid, website: "spam" })).status,
    400,
  );
  assert.equal(
    (await post("/api/inquiries", valid, "https://unrelated.example")).status,
    403,
  );
  assert.equal(calls, 0);
  const accepted = await post(
    "/api/inquiries",
    valid,
    "https://learncowork.net",
  );
  assert.deepEqual(await accepted.json(), {
    accepted: true,
    reference: "test-provider-id",
  });
  assert.equal(calls, 1);
  const failed = await post("/failed/inquiries", valid);
  assert.equal(failed.status, 503);
  assert.match((await failed.json()).error, /could not be confirmed/);
  assert.equal((await post("/unconfigured/inquiries", valid)).status, 503);
  for (let i = 0; i < 9; i++)
    assert.equal((await post("/api/inquiries", valid)).status, 200);
  assert.equal((await post("/api/inquiries", valid)).status, 429);
  assert.equal(calls, 10);
  console.log(
    "Service inquiry tests passed: validation, origin, honeypot, provider acceptance, failure, missing configuration, rate limit. No real email sent.",
  );
} finally {
  server.close();
  await rm("artifacts/api-server/tests/.inquiry-test.mjs");
}
