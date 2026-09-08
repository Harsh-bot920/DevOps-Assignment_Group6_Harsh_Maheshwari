# Correlating Logs with Metrics

Logs and metrics answer different questions and become more useful together.

| Question | Metric | Log |
|---|---|---|
| Is traffic increasing? | Request rate | Individual requests |
| Is the service unhealthy? | Error rate / availability | Failure details |
| Is latency rising? | Latency percentile | Slow-operation context |
| Is a host saturated? | CPU/memory/disk metrics | Resource-related warnings/errors |

## Correlation Keys

Use common context such as service name, environment, host, request ID, trace ID, version, and timestamp. Consistency makes cross-signal investigation faster.
