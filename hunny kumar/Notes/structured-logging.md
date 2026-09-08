# Structured Logging

Structured logging stores event data in predictable fields rather than only as free-form text. JSON is a common representation because machines can parse it reliably.

## Example

```json
{
  "timestamp": "2026-09-01T10:31:02Z",
  "level": "ERROR",
  "service": "web",
  "environment": "dev",
  "request_id": "8c91",
  "message": "Database query failed"
}
```

## Advantages

- Consistent parsing
- Easier filtering
- Better aggregation
- Easier correlation across services
- Clear separation of message and metadata

## Design Advice

Keep field names stable. Prefer machine-readable timestamps and explicit severity values. Do not create high-cardinality labels indiscriminately when the log backend uses indexed labels.
