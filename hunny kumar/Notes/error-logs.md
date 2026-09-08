# Error Logs

Error logs record failed operations or abnormal conditions that need investigation. Not every error indicates a complete outage, so context and frequency matter.

## Common Examples

- Database connection refused
- HTTP 500 response
- Authentication failure
- File permission denied
- Connection timeout
- Unhandled exception
- Dependency unavailable

## Investigation Checklist

- What failed?
- When did it fail?
- Which service generated the message?
- Does the same error repeat?
- What happened immediately before it?
- Did a deployment or configuration change occur?
- Is the failure still active?

## Important

A message such as `ERROR request failed` is weak without context. Include the operation, component, request/correlation identifier where appropriate, and a concise cause or failure detail.
