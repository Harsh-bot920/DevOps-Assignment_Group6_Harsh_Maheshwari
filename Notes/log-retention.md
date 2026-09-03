# Log Retention and Rotation

Logs can grow quickly. Retention policy defines how long useful records remain available, while rotation prevents individual log files from growing without bound.

## Retention Decisions

Consider:

- Troubleshooting needs
- Security and audit requirements
- Storage cost
- Legal/compliance requirements where applicable
- Data sensitivity
- Expected log volume

## Rotation Concept

```text
Active log → Rotate → Compress → Retain → Expire/Delete
```

## Good Practice

Document who owns retention settings and review them periodically. Retention should be intentional rather than the accidental result of a full disk.
