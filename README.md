<<<<<<< HEAD
# DevOps Lifecycle: Monitoring Phase

## 📚 Introduction

**Monitoring** is one of the important phases of the DevOps lifecycle. It involves continuously observing applications, servers, infrastructure, and services after they are deployed.

The main purpose of monitoring is to understand whether the system is working correctly, identify problems quickly, and maintain good performance and availability.

---

## 🔄 Where Monitoring Fits in DevOps

The DevOps lifecycle can be represented as:

```text
Plan
  ↓
Code
  ↓
Build
  ↓
Test
  ↓
Release
  ↓
Deploy
  ↓
Operate
  ↓
Monitor
  ↓
Feedback
  ↓
Plan
```

Monitoring provides feedback that can be used to improve the next development and deployment cycle.

---

## 🎯 Objectives of Monitoring

The main objectives of DevOps monitoring are:

- Detect problems and failures quickly.
- Monitor application performance.
- Monitor server and infrastructure health.
- Identify performance bottlenecks.
- Reduce application downtime.
- Improve system reliability.
- Monitor resource utilization.
- Generate alerts when problems occur.
- Provide useful feedback to the development team.

---

## 🔍 What Do We Monitor?

### 1. Application Monitoring

We monitor the health and performance of applications.

Examples:

- Response time
- Request rate
- Error rate
- Application availability
- Number of active users

### 2. Server Monitoring

We monitor the physical or virtual servers running the application.

Important metrics include:

- CPU usage
- Memory usage
- Disk usage
- Network usage
- Server uptime

### 3. Database Monitoring

Database monitoring helps identify database-related problems.

Examples:

- Query performance
- Database connections
- Storage usage
- Query errors
- Response time

### 4. Network Monitoring

Network monitoring checks the communication between different systems.

Examples:

- Network traffic
- Latency
- Packet loss
- Bandwidth usage
- Connection failures

### 5. Log Monitoring

Logs contain information about what is happening inside an application or system.

Examples:

```text
Application started successfully
User login successful
Database connection failed
Server error
Payment request failed
```

Analyzing logs helps developers and administrators find the cause of problems.

---

## 📊 Important Monitoring Metrics

| Metric | Meaning |
|---|---|
| CPU Usage | Percentage of CPU being used |
| Memory Usage | Amount of RAM being used |
| Disk Usage | Amount of storage being used |
| Network Traffic | Amount of data transmitted |
| Response Time | Time taken to respond to a request |
| Error Rate | Percentage of failed requests |
| Uptime | How long a service remains available |
| Throughput | Amount of work handled by the system |

---

## 🚨 Alerts

Monitoring systems can automatically generate alerts when a problem occurs.

For example:

```text
CPU Usage = 90%
        ↓
Threshold = 80%
        ↓
Threshold exceeded
        ↓
Generate Alert
        ↓
DevOps Team investigates
```

Common alerts include:

- High CPU usage
- High memory usage
- Server down
- Application unavailable
- High error rate
- Database failure
- Disk space running low

---

## 🛠️ Popular Monitoring Tools

### Prometheus

Prometheus is an open-source monitoring and alerting tool.

It collects and stores metrics from applications and infrastructure.

### Grafana

Grafana is used to visualize monitoring data through dashboards, charts, and graphs.

### ELK Stack

The ELK Stack is commonly used for log management.

It consists of:

- Elasticsearch
- Logstash
- Kibana

### Nagios

Nagios is a monitoring system used to monitor servers, networks, and applications.

### Datadog

Datadog is a cloud-based monitoring and observability platform.

---

## 📈 Prometheus + Grafana

A common DevOps monitoring setup is:

```text
Application / Server
        ↓
     Metrics
        ↓
    Prometheus
        ↓
      Grafana
        ↓
   Dashboard
        ↓
    DevOps Team
```

**Prometheus** collects and stores metrics.

**Grafana** displays those metrics using dashboards and visualizations.

---

## 🧑‍💻 Example

Suppose a web application normally uses around **40% CPU**.

If CPU usage suddenly increases to **90%**, the monitoring system detects the increase.

```text
Normal CPU
40%
 ↓
Traffic increases
 ↓
CPU = 90%
 ↓
Monitoring detects problem
 ↓
Alert generated
 ↓
DevOps team investigates
 ↓
Problem resolved
```

This helps prevent the application from becoming unavailable.

---

## 🔁 Monitoring and Feedback

Monitoring is not only about finding failures.

It also provides feedback for improving the application.

For example:

```text
Monitoring
     ↓
Performance Data
     ↓
Analysis
     ↓
Identify Problem
     ↓
Development Team
     ↓
Code / Infrastructure Improvement
     ↓
New Deployment
     ↓
Monitoring Again
```

This creates a **continuous feedback loop** in DevOps.

---

## ✅ Advantages of Monitoring

- Early detection of failures
- Reduced downtime
- Improved application performance
- Better resource management
- Faster troubleshooting
- Improved reliability
- Better user experience
- Data-driven decision making

---

## 📝 Key Points to Remember

1. Monitoring means continuously observing systems and applications.
2. It is an important part of the DevOps lifecycle.
3. We monitor applications, servers, databases, networks, and logs.
4. Important metrics include CPU, memory, disk, network, response time, and error rate.
5. Alerts notify teams when predefined thresholds are exceeded.
6. Prometheus is commonly used for metrics collection.
7. Grafana is commonly used for visualization.
8. Monitoring provides feedback for continuous improvement.

---

## 🎓 Simple Definition

> **DevOps Monitoring is the continuous process of observing applications, infrastructure, and services to detect problems, measure performance, generate alerts, and provide feedback for continuous improvement.**
=======
# Member 05 — Logs & Resources

**Branch:** `feature/logs-resources`  
**Area:** Log monitoring, observability resources, diagrams, examples, and learning material

## Contribution Summary

This contribution expands the repository's log-monitoring material from a short outline into a reusable learning and reference section. It covers log types, severity levels, structured logging, collection, analysis, troubleshooting, security, retention, and practical examples. It also adds self-created architecture diagrams, a curated resource index, assignments, a presentation outline, and weekly activities.

## Scope Boundary

Member 05 documents logs and supporting resources. Prometheus implementation, Grafana dashboard implementation, alert-rule implementation, and final testing remain with their assigned team members.

## Folder Map

- `Notes/` — detailed technical notes and examples
- `Images/` — self-created diagrams plus screenshot guidance
- `ReferenceVideos/` — curated official learning resources
- `Assignments/` — practice questions and practical tasks
- `CheatSheet/` — quick log-monitoring reference
- `PPT/` — slides/content outline for the log-monitoring section
- `WeeklyTasks/` — four-week learning plan
- `35-commit-plan.md` — commit-to-file map for meaningful branch history

## Source Policy

External resources are linked to official project documentation or official project channels where practical. Project screenshots should only be added after the team actually runs the monitoring stack; this repository does not contain fabricated runtime screenshots.
>>>>>>> origin/virat
