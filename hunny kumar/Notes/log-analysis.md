# Log Analysis

Log analysis turns raw event records into evidence for troubleshooting and operational decisions.

## Workflow

```text
Define incident window
        ↓
Filter by service / host
        ↓
Filter by severity / event
        ↓
Group repeated events
        ↓
Correlate timestamps and IDs
        ↓
Form hypotheses
        ↓
Validate against metrics and changes
        ↓
Document root cause
```

## Useful Techniques

- Filter by time range
- Search exact error phrases
- Group by service or host
- Count repeated failures
- Correlate request IDs/trace IDs
- Compare before and after a deployment
- Compare logs with CPU, memory, disk, and network metrics

## Avoid

Do not treat the first matching error as the root cause automatically. A downstream error may simply be a symptom of an earlier failure.
