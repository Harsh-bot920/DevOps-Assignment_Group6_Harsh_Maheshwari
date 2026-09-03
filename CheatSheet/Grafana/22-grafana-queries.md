# Grafana Query Examples

Target availability:
```promql
up
```

Request rate:
```promql
sum(rate(http_requests_total[5m]))
```

CPU:
```promql
100 * (1 - avg by(instance)(rate(node_cpu_seconds_total{mode="idle"}[5m])))
```
