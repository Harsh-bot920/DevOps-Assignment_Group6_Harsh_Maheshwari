# Log Query Thinking Cheat Sheet

Query syntax differs by backend, but the investigation pattern is usually consistent.

## Filter by Time

Start with the smallest useful incident window.

## Filter by Severity

Inspect WARN/ERROR events first when troubleshooting an incident.

## Filter by Service

Reduce noise by selecting one service or component at a time.

## Search by Message

Use a stable error phrase or event name.

## Correlate

Search a request ID or trace ID across services.

## Example Concepts

```text
time: last 15 minutes
service: api
level: ERROR
request_id: 8c91
```

This is conceptual; exact query syntax depends on the chosen log backend.
