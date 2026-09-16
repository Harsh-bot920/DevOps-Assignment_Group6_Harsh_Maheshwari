# Response Time Panel

For a compatible histogram metric:
```promql
histogram_quantile(0.95, sum by(le)(rate(http_request_duration_seconds_bucket[5m])))
```

This can represent the 95th-percentile request duration.
