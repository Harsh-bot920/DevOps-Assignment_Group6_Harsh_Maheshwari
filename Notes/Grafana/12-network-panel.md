# Network Panel

Receive traffic:
```promql
rate(node_network_receive_bytes_total[5m])
```

Transmit traffic:
```promql
rate(node_network_transmit_bytes_total[5m])
```
