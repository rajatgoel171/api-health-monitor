import http from "node:http";
import https from "node:https";
import { performance } from "node:perf_hooks";

export async function checkUrl(url, options = {}) {
  const timeoutMs = options.timeoutMs ?? 5000;
  const startedAt = performance.now();

  return new Promise((resolve) => {
    const client = url.startsWith("https:") ? https : http;
    const request = client.request(url, { method: "GET", timeout: timeoutMs }, (response) => {
      response.resume();
      response.on("end", () => {
        resolve({
          url,
          ok: response.statusCode >= 200 && response.statusCode < 400,
          statusCode: response.statusCode,
          durationMs: Math.round(performance.now() - startedAt),
        });
      });
    });

    request.on("timeout", () => {
      request.destroy(new Error(`Timed out after ${timeoutMs}ms`));
    });

    request.on("error", (error) => {
      resolve({
        url,
        ok: false,
        statusCode: null,
        durationMs: Math.round(performance.now() - startedAt),
        error: error.message,
      });
    });

    request.end();
  });
}

export async function monitorUrl(url, options = {}) {
  const samples = options.samples ?? 3;
  const results = [];

  for (let index = 0; index < samples; index += 1) {
    results.push(await checkUrl(url, options));
  }

  return summarize(url, results);
}

export function summarize(url, results) {
  const durations = results.map((result) => result.durationMs).sort((a, b) => a - b);
  const successes = results.filter((result) => result.ok).length;

  return {
    url,
    samples: results.length,
    successRate: results.length === 0 ? 0 : successes / results.length,
    minMs: durations[0] ?? 0,
    maxMs: durations.at(-1) ?? 0,
    p50Ms: percentile(durations, 50),
    p95Ms: percentile(durations, 95),
    results,
  };
}

function percentile(values, percentileValue) {
  if (values.length === 0) return 0;
  const index = Math.ceil((percentileValue / 100) * values.length) - 1;
  return values[Math.min(Math.max(index, 0), values.length - 1)];
}
