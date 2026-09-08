# Error Rate Panel

Example pattern:
```promql
sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m]))
```

The exact metric and label names depend on application instrumentation.
