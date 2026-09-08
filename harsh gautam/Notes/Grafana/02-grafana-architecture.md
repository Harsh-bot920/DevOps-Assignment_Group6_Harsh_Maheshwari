# Grafana Architecture

```text
Monitored System → Exporter/Application → Prometheus → PromQL → Grafana → Dashboard → User
```

Prometheus collects and stores time-series metrics. Grafana queries Prometheus and visualizes those metrics.
