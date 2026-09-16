# Log Monitoring Cheat Sheet

## Core Concepts
| Concept | Remember |
|---|---|
| Log | Event record with timestamp and context |
| Metric | Numeric measurement over time |
| Trace | Request path across components |
| Severity | Importance/diagnostic level of a log record |
| Correlation ID | Identifier used to connect related events |

## Common Log Types
- Application
- System
- Access
- Error
- Audit

## Common Levels
`TRACE` → `DEBUG` → `INFO` → `WARN` → `ERROR` → `FATAL/CRITICAL`

## Investigation
```text
Time window → Service → Severity → Error phrase → Correlation ID → Related metrics → Root cause
```

## Structured Log
```json
{
  "timestamp": "2026-09-01T10:31:02Z",
  "level": "ERROR",
  "service": "web",
  "request_id": "8c91",
  "message": "Database query failed"
}
```

## Security
Never log passwords, API keys, private keys, session tokens, or other secrets.

## Retention
`Write → Rotate → Compress → Retain → Expire`

## Useful Official References
- OpenTelemetry Logs: https://opentelemetry.io/docs/concepts/signals/logs/
- Loki: https://grafana.com/oss/loki/
- Prometheus overview: https://prometheus.io/docs/introduction/overview/
