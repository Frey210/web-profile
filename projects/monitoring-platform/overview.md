# Monitoring Platform — Project Overview

## Problem Statement

As PT Media Teknologi Celebes (MTC) grew its portfolio of IoT products (Aquanotes, Ergoquipt, Dento Smart), it became increasingly difficult to manage the uptime and performance of multiple production servers and distributed IoT devices. Without a centralized monitoring system, the team was reactive to outages—relying on manual checks or client reports to identify downtime. A unified observability platform was needed to ensure high availability for all MTC services.

## Solution

A centralized infrastructure monitoring platform that aggregates metrics from production servers, database containers, and IoT edge devices into a single visual dashboard. The system utilizes industry-standard tools (Prometheus & Grafana) to provide both internal technical metrics and a public status page for stakeholders.

## Target Users

- **MTC Engineering Team** — For performance tuning and debugging.
- **MTC Operations / CTO (Fariz)** — For infrastructure capacity planning and uptime monitoring.
- **Clients / Stakeholders** — Via the public status dashboard for transparency on service availability.

## Key Features

- **Server Health Monitoring:** In-depth metrics for CPU, memory, storage, and throughput.
- **Docker Visibility:** Real-time status of all containerized services (Aquanotes API, Ergoquipt Backend, etc.).
- **IoT Heartbeat:** Tracking the connectivity pulse of field-deployed ESP32 and sensor nodes.
- **Alerting System:** Notifications via Discord/Telegram when services go offline or resources are exhausted.
- **Public Status Page:** Unified view of service health at dashboard.inkubasistartupunhas.id.
