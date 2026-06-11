# Aquanotes — Fariz's Contribution

## Role

**Project Lead, Systems Architect, Lead Embedded Engineer, Backend Architect, Infrastructure Lead**

Fariz was the founder and primary technical driver of the Aquanotes project within PT Media Teknologi Celebes. He conceived the product, defined its architecture, and led all aspects of development through to production deployment.

## Specific Contributions

### Product Definition
- Identified the aquaculture water quality monitoring gap through market research and farmer interviews in Sulawesi
- Wrote the initial Product Requirement Document (PRD) defining sensor parameters, platform features, and target user personas
- Defined the system architecture and technology stack selection rationale

### Embedded Systems Engineering
- Designed the embedded sensor node based on the ESP32 microcontroller
- Selected, integrated, and calibrated water quality sensors: TDS, pH, dissolved oxygen, ammonia, temperature
- Wrote the complete C++ firmware for the sensor node (sensor reading, MQTT publish, error handling, sleep/wake cycles)
- Repository: https://github.com/Frey210/aquanotes-triangle

### Backend Engineering
- Architected and built the backend API server handling MQTT ingestion, data persistence, alert processing, and REST API serving
- Implemented the backend using Node.js (Express) and/or FastAPI (Python)
- Designed the database schema for multi-pond, multi-parameter time-series storage
- Built the OpenAPI documentation (live at aeraseaku.inkubasistartupunhas.id/docs)
- Repository: https://github.com/Frey210/Aquanotes-Backend

### Web Dashboard Engineering
- Built or directed the development of the admin web panel for pond monitoring, alert management, and user administration
- Repository: https://github.com/Frey210/Aquanotes-Web-Admin
- Live: https://aquanotes-web.inkubasistartupunhas.id

### Infrastructure & Deployment
- Set up and managed the complete Linux server stack: Ubuntu OS, Docker containers, Nginx reverse proxy, Cloudflare Tunnel
- Configured MQTT broker (Mosquitto) as a containerized service
- Managed all environment secrets, deployment pipelines, and server uptime

### Team Coordination
- Led and coordinated the mobile app development team (separate sub-team at MTC-Hi-Tech-Centre)
- Conducted code reviews and system integration testing

## What Was Built Independently vs. Delegated

| Component | Built By Fariz | Team-assisted |
|---|---|---|
| Embedded firmware | ✅ Yes | — |
| System architecture | ✅ Yes | — |
| PRD / documentation | ✅ Yes | — |
| Backend API | ✅ Yes | Partial |
| Web dashboard | Partial | MTC team |
| Mobile application | — | MTC Hi-Tech Centre |
| Server infrastructure | ✅ Yes | — |
