# Dento Smart — System Architecture

## High-Level Architecture

```
[Dental Equipment]
        │
[ESP32 Monitoring Module + Sensors]
        │ (Wi-Fi / MQTT or HTTP)
        ▼
[Backend API: Node.js / FastAPI]
        │
[Database: PostgreSQL]
        │
        ├──▶ [Web Dashboard]
        └──▶ [Alert / Notification System]
```

## Component Breakdown

### 1. Embedded Module (ESP32)
- Firmware repository: https://github.com/Frey210/Dento-smart-frimware
- Monitors equipment electrical/operational parameters
- Communicates to backend via Wi-Fi

### 2. Backend API
- Node.js / FastAPI
- Data ingestion, storage, alert processing, REST API serving
- Repository: https://github.com/Frey210/Dento-smart-backend
- API Docs: https://dento-backend.inkubasistartupunhas.id/docs

### 3. Web Dashboard
- React.js web application
- Real-time monitoring UI for clinic managers
- Repository: https://github.com/Frey210/Dento-smart-web
- Live: http://dento-smart.inkubasistartupunhas.id

### 4. Infrastructure
- Linux VPS, Docker, Nginx, Cloudflare Tunnel

> *Note: Specific sensor types and detailed firmware architecture are inferred from project pattern. Verify with actual firmware repository for exact implementation details.*
