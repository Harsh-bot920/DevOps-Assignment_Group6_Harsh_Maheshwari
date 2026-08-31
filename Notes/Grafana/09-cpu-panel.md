# CPU Panel

Example PromQL:
```promql
100 * (1 - avg by(instance)(rate(node_cpu_seconds_total{mode="idle"}[5m])))
```

Suggested unit: Percent (0-100). Validate the metric and labels against the actual Prometheus environment.
