# Application Logs

Application logs are emitted by software while it starts, processes work, encounters errors, or completes important operations.

## Useful Events

- Application startup and shutdown
- Configuration loading
- Database connection success/failure
- API request handling
- Authentication outcomes
- Background jobs
- External service calls
- Exceptions and retries

## Example

```text
2026-09-01T10:30:11Z INFO  service=web msg="Application started"
2026-09-01T10:30:13Z INFO  service=web msg="Database connection established"
2026-09-01T10:31:02Z ERROR service=web request_id=8c91 msg="Database query failed"
```

## Recommendation

Use consistent fields and messages. Avoid logging sensitive values just because they are available in the request or exception object.
