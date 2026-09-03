# Access Logs

Access logs record requests received by a server or application. They are useful for traffic analysis, debugging, performance investigation, and security review.

## Common Fields

- Timestamp
- Client address or anonymized client identifier
- HTTP method
- Request path
- Status code
- Response size
- User agent
- Request duration

## Example

```text
192.0.2.10 GET  /health     200  18ms
192.0.2.11 POST /login      401  31ms
192.0.2.12 GET  /dashboard  500  210ms
```

## What to Look For

- A spike in 5xx responses
- Increased latency
- Repeated 401/403 responses
- A growing 404 count
- Unexpected request paths
- Abnormal request volume
