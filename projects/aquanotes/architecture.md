# Aquanotes — System Architecture

## High-Level Architecture

```
[Shrimp Pond]
     │
[Sensor Node: ESP32 + Sensors]
     │ (Wi-Fi / MQTT)
     ▼
[MQTT Broker / Message Queue]
     │
[Backend Server: Node.js / FastAPI]
     │
[Database: PostgreSQL / MongoDB]
     │
     ├──▶ [Web Dashboard — admin.aquanotes]
     └──▶ [Mobile App — Android / iOS]
```

## Component Breakdown

### 1. Sensor Node (Edge / Embedded)
- **Controller:** ESP32 (Wi-Fi enabled microcontroller)
- **Sensors:**
  - Temperature probe (DS18B20 or NTC thermistor)
  - TDS sensor (analog, capacitive)
  - Dissolved oxygen sensor (electrochemical or optical)
  - pH electrode + signal conditioning board
  - Ammonia sensor
- **Communication:** MQTT over Wi-Fi to cloud broker
- **Power:** 5V DC (solar + battery for outdoor deployment — *assumed*)
- **Firmware:** C++ (Arduino framework for ESP32)
- **Repository:** https://github.com/Frey210/aquanotes-triangle

### 2. MQTT Broker
- Hosted on Linux server (Ubuntu / Debian)
- Handles real-time publish/subscribe from all sensor nodes
- Containerized via Docker

### 3. Backend API Server
- **Framework:** Node.js / FastAPI (Python)
- **Responsibilities:**
  - Subscribe to MQTT topics and persist sensor readings to database
  - Serve REST API endpoints for web dashboard and mobile app
  - Process alert thresholds, generate notifications
  - Handle authentication and per-user authorization
- **Documentation:** OpenAPI/Swagger at `aeraseaku.inkubasistartupunhas.id/docs`
- **Repository:** https://github.com/Frey210/Aquanotes-Backend

### 4. Database
- Relational or time-series database for sensor readings
- Stores: pond configuration, user accounts, historical readings, alert rules

### 5. Web Dashboard (Admin Panel)
- **Framework:** React.js or Next.js (based on MTC's web stack)
- **Features:** Real-time charts, pond management, alert configuration, user management
- **Live URL:** https://aquanotes-web.inkubasistartupunhas.id
- **Repository:** https://github.com/Frey210/Aquanotes-Web-Admin

### 6. Mobile Application
- **Platform:** React Native or Flutter (cross-platform)
- **Features:** Real-time readings, alerting, historical charts
- **Repository:** https://github.com/MTC-Hi-Tech-Centre/aquanotes-mobile-app

### 7. Deployment Infrastructure
- **Host:** Linux VPS (Ubuntu/Debian)
- **Containerization:** Docker + Docker Compose
- **Web Server / Reverse Proxy:** Nginx
- **Remote Access:** Cloudflare Tunnel (no open ports exposed)
- **Domain:** inkubasistartupunhas.id (shared startup domain)

## Data Flow

```
1. ESP32 sensor node reads water parameters every N seconds
2. ESP32 publishes JSON payload to MQTT topic: aquanotes/{pond_id}/data
3. Backend MQTT subscriber receives message
4. Backend validates, transforms, and persists reading to database
5. Backend checks reading against alert thresholds; generates notifications if rules triggered
6. Web dashboard polls REST API (or receives WebSocket push) for latest readings
7. Mobile app polls REST API for latest readings and alert status
8. User views real-time charts and receives push notifications
```

## Security Considerations

- MQTT connections use TLS (or channeled via Cloudflare Tunnel)
- Backend API uses JWT authentication
- Per-user, per-pond authorization (farmers only see their ponds)
- Sensitive configuration (DB credentials, MQTT secrets) via environment variables only
