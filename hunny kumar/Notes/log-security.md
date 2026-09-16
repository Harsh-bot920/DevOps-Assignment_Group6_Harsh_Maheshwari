# Log Security

Logs are operational data and may contain sensitive context. A secure logging design protects both the records and the people who consume them.

## Never Log

- Passwords
- API keys
- Private keys
- Session tokens
- Authentication headers containing credentials
- Full payment-card data or similar sensitive data

## Protect Logs

- Restrict access using least privilege
- Encrypt transport where applicable
- Protect storage
- Audit access to sensitive logs
- Mask or redact sensitive fields
- Avoid exposing log endpoints publicly

## Incident Use

Logs can support security investigations, but their integrity and timestamps matter. Preserve relevant records according to the team's incident-response process rather than deleting evidence prematurely.
