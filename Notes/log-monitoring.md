# Log Monitoring

Log monitoring is the continuous collection, inspection, and analysis of records produced by applications, operating systems, infrastructure, and services. Logs preserve event-level context that complements numeric metrics.

## Why It Matters

- Detect failures and unusual behavior
- Reconstruct what happened during an incident
- Find recurring errors
- Support root-cause analysis
- Correlate events across services
- Provide operational and audit evidence

## Typical Flow

```text
Application / Host
        |
        v
   Log generation
        |
        v
 Collection / Agent
        |
        v
 Parsing / Enrichment
        |
        v
 Storage / Indexing
        |
        v
 Search / Query
        |
        v
 Investigation / Alerting
```

## Logs vs Metrics

Metrics are numerical measurements optimized for aggregation and trends. Logs are event records containing details such as timestamps, messages, severity, and contextual attributes. Use metrics to spot that a problem exists; use logs to investigate the event-level story behind it.

## Good Log Records

A useful record normally carries a timestamp, severity, service/component, message, and enough context to identify the operation. Request IDs, trace IDs, environment, and version information can make cross-service investigations much easier.

## Security Rule

Never place passwords, private keys, authentication tokens, or other secrets directly in application logs. Log access should be restricted because logs can contain operationally sensitive information.
