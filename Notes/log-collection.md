# Log Collection

Log collection moves records from their source into a place where they can be searched and analyzed.

## Collection Patterns

### Local collection
An agent reads files or system streams on the same host.

### Container collection
A runtime or agent collects stdout/stderr from containers and forwards records.

### Centralized collection
Multiple hosts send logs to a shared backend for search and correlation.

## Collection Pipeline

```text
Sources → Agent/Collector → Parse → Enrich → Filter → Store → Query
```

## Operational Concerns

- Network interruptions
- Backpressure
- Duplicate delivery
- Missing timestamps
- Format changes
- Storage growth
- Access control
