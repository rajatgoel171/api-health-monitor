import assert from "node:assert/strict";
import { test } from "node:test";
import { summarize } from "../src/monitor.js";

test("summarizes latency and success rate", () => {
  const summary = summarize("https://api.example.test", [
    { ok: true, durationMs: 10 },
    { ok: true, durationMs: 20 },
    { ok: false, durationMs: 50 },
  ]);

  assert.equal(summary.samples, 3);
  assert.equal(summary.successRate, 2 / 3);
  assert.equal(summary.p50Ms, 20);
  assert.equal(summary.p95Ms, 50);
});
