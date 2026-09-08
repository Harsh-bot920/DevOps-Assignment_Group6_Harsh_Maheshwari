# Common Log Patterns

## Repeated Failure

```text
ERROR database timeout
ERROR database timeout
ERROR database timeout
```

A repeated message suggests a systemic issue or retry loop. Check whether the frequency aligns with request volume.

## Startup Failure

```text
INFO  application starting
ERROR configuration file missing
FATAL service cannot initialize
```

The middle message is the more useful root-cause clue.

## Cascading Failure

```text
service-a ERROR dependency unavailable
service-b ERROR request to service-a failed
api     ERROR request returned 500
```

Investigate the earliest dependency failure rather than only the final 500 response.
