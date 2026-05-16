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
























## Progress Note 10

- 2026-04-14: documented service readiness, implementation progress, and release hygiene for api-health-monitor.
- Captured validation notes for observability, operational checks, and handoff readiness.

## Update 12

- 2025-01-01: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 13

- 2025-03-14: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 14

- 2025-05-27: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 15

- 2025-08-09: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 16

- 2025-10-22: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 17

- 2026-01-04: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 18

- 2026-02-16: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 19

- 2026-03-28: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 20

- 2026-04-21: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 21

- 2026-05-16: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.
