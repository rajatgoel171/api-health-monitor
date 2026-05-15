#!/usr/bin/env node
import { monitorUrl } from "./monitor.js";

const args = new Map();
for (let index = 2; index < process.argv.length; index += 2) {
  args.set(process.argv[index], process.argv[index + 1]);
}

const url = args.get("--url");
const samples = Number(args.get("--samples") ?? 3);
const timeoutMs = Number(args.get("--timeout") ?? 5000);

if (!url) {
  console.error("Usage: node src/cli.js --url https://example.com --samples 3 --timeout 5000");
  process.exit(1);
}

const report = await monitorUrl(url, { samples, timeoutMs });
console.log(JSON.stringify(report, null, 2));

process.exit(report.successRate === 1 ? 0 : 2);
