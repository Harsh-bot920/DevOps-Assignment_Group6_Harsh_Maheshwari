# Log Levels

Log levels express the severity or diagnostic purpose of a message. Exact names vary by framework, so teams should define a consistent policy.

| Level | Typical use |
|---|---|
| TRACE | Extremely detailed execution information |
| DEBUG | Diagnostic information useful during development or troubleshooting |
| INFO | Normal noteworthy application activity |
| WARN | Suspicious or potentially harmful condition that did not stop the operation |
| ERROR | An operation failed or could not complete normally |
| FATAL / CRITICAL | Severe failure requiring immediate attention in systems that support this level |

## Practical Policy

Production systems should avoid overwhelming log storage with debug/trace output unless there is a controlled reason to enable it. Error messages should be actionable; warnings should not be used as a substitute for errors.
