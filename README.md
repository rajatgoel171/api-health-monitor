# API Health Monitor

A small Node.js CLI for checking API availability, latency, response status, and percentile timing. It is designed for smoke checks, deployment verification, and lightweight production canaries.

## Features

- HTTP and HTTPS support
- Multiple samples per URL
- Timeout handling
- p50, p95, min, max, and success-rate summary
- JSON output for automation
- Dependency-free implementation

## Run

```bash
npm test
node src/cli.js --url https://example.com --samples 3
```

## Example Output

```json
{
  "url": "https://example.com",
  "samples": 3,
  "successRate": 1,
  "p50Ms": 120,
  "p95Ms": 180
}
```
























## Progress Note 4

- 2026-01-18: documented service readiness, implementation progress, and release hygiene for api-health-monitor.
- Captured validation notes for observability, operational checks, and handoff readiness.
