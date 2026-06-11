# Monitoring Platform — Architecture

## High-Level Architecture

```
[Production Server A] (Node Exporter) ──┐
[Production Server B] (CAdvisor)      ──┼──→ [Central Monitoring Server]
[IoT Edge Nodes] (Heartbeat)          ──┘           │ (Metrics Ingestion)
                                                    ▼
                                            [Prometheus (TSDB)]
                                                    │ (Data Query)
                                                    ▼
                                            [Grafana Dashboard]
                                                    │
                                            [Public / Private UI]
```

## Component Breakdown

### 1. Data Collection (Exporters)
- **Node Exporter:** Collects hardware and OS metrics from Linux servers.
- **CAdvisor:** Monitors resource usage and performance characteristics of running Docker containers.
- **Custom Heartbeat Service:** A lightweight service that receives "check-ins" from IoT devices.

### 2. Time-Series Database (Prometheus)
- Scrapes metrics from exporters at regular intervals.
- Stores historical data for trend analysis.
- Handles alert rule evaluation.

### 3. Visualization (Grafana)
- Provides customizable dashboards for different use cases (Service health vs. Resource usage).
- Serves as the engine for the public status page at https://dashboard.inkubasistartupunhas.id/.

### 4. Infrastructure
- Deployments on **Ubuntu/Debian Linux**.
- Entire stack managed via **Docker Compose**.
- Exposed securely via **Nginx Reverse Proxy** and **Cloudflare Tunnel**.
