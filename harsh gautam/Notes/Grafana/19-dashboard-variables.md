# Dashboard Variables

Variables allow users to change dashboard scope without editing every panel query.

Useful variables: instance, job, service and environment.

Example:
```promql
up{instance=~"$instance"}
```
