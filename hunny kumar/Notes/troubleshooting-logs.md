# Log-Based Troubleshooting

## Step-by-Step Method

### 1. Define the symptom
Record the visible failure and the time window.

### 2. Find the earliest useful event
Search slightly before the reported failure to find the initiating event.

### 3. Identify dependencies
Check databases, queues, external APIs, storage, and network components involved in the operation.

### 4. Correlate
Use request IDs, trace IDs, host names, service names, deployment versions, and timestamps where available.

### 5. Validate
Compare the log evidence with metrics and recent configuration/deployment changes.

### 6. Recover and verify
After a fix, confirm that new logs are healthy and the original symptom no longer reproduces.

## Example

```text
HTTP 500
   ↓
Application ERROR
   ↓
DB connection timeout
   ↓
Database unavailable
   ↓
Recover dependency
   ↓
Verify successful requests
```
