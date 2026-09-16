# System Logs

System logs describe operating-system and infrastructure activity. They can reveal service restarts, authentication events, kernel messages, device problems, and resource-related warnings.

## Investigation Pattern

1. Establish the incident time.
2. Identify the affected host/service.
3. Inspect system messages immediately before and after the event.
4. Compare with application logs and resource metrics.
5. Determine whether the issue is isolated or widespread.

## Example

```text
INFO  ssh.service started
WARN  filesystem usage reached 85%
ERROR network interface unavailable
INFO  service restarted after dependency recovery
```
