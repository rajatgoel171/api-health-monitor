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
























## Random Update 20

- 2025-09-10: captured a repository-specific status note with no sequential date pattern.
- Documented work progress, validation, and operational context for api-health-monitor.

## Random Pass 2 Update 10

- 2024-10-11: recorded a new randomized checkpoint for documentation, validation, and operational notes.
- Kept the update isolated to this repository and this pass.
