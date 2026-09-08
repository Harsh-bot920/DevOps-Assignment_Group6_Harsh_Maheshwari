a# Monitoring Cheat Sheet

## Core Metrics
| Metric | Meaning |
|---|---|
| CPU Usage | Percentage of CPU currently being used |
| Memory Usage | RAM currently in use |
| Disk Usage | Storage capacity consumed |
| Network Traffic | Data sent/received |
| Latency | Time taken to respond |
| Throughput | Amount of work/data processed |
| Error Rate | Percentage of failed requests |
| Availability | Percentage of time a service is operational |

## Monitoring Golden Signals
1. Latency
2. Traffic
3. Errors
4. Saturation

## Prometheus
- Metrics endpoint commonly exposes data in Prometheus text format.
- Prometheus periodically scrapes configured targets.
- Time-series data consists of metric names, labels, timestamps and values.

## PromQL Examples
```promql
up
rate(http_requests_total[5m])
node_cpu_seconds_total
node_memory_MemAvailable_bytes
node_filesystem_avail_bytes
```

## Grafana
Typical panels:
- CPU utilization
- Memory utilization
- Disk utilization
- Network traffic
- Request rate
- Error rate
- Latency
- Service availability

## Alerting
A monitoring alert normally contains:
- Condition
- Threshold
- Evaluation period
- Severity
- Notification route

## Useful Git Commands
```bash
git checkout -b feature/monitoring-core
git status
git add .
git commit -m "Add monitoring notes"
git push -u origin feature/monitoring-core
git pull origin main
```
