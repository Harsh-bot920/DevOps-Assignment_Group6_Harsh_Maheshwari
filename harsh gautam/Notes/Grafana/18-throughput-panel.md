# Throughput Panel

Throughput measures work or data processed over time.

Example request rate:
```promql
sum(rate(http_requests_total[5m]))
```
