# Ergoquipt — Fariz's Contribution

## Role
**Project Lead · Systems Architect · Embedded Engineer · Backend Engineer · Infrastructure Lead**

## Specific Contributions

### Product Strategy
- Conceived Ergoquipt as a commercialized evolution of the PKM-KC 2022 Smart Healing Aerochair concept
- Defined the product scope, target market (ergonomics research), and hardware-software system boundaries
- Wrote the PRD and technical specifications

### Embedded Systems Engineering
- Designed and built two distinct embedded measurement modules:
  1. **Ergoquipt-TympanicHR** — Tympanic temperature + heart rate measurement unit (MLX90614 + PPG sensor on ESP32)
  2. **Ergoquipt (Main)** — Reaction time measurement unit (physical button + microsecond timer on ESP32/Arduino)
- Wrote complete C++ firmware for both units
- Implemented Wi-Fi communication to the backend API for real-time data delivery

### Backend Engineering
- Designed and built the backend REST API handling test session management, measurement ingestion, authentication, and reporting
- Implemented OpenAPI documentation (live at ergoquipt.inkubasistartupunhas.id/docs)

### Web Dashboard
- Led development of the admin web panel for test management and result visualization

### Infrastructure
- Deployed all services on Docker/Linux production stack with Nginx + Cloudflare Tunnel
- Managed all environment configuration and server maintenance

### Team Coordination
- Directed the mobile app development team at MTC-Hi-Tech-Centre

## Standalone vs. Team Work

| Component | Fariz | Team |
|---|---|---|
| PRD / Architecture | ✅ | — |
| Embedded firmware | ✅ | — |
| Backend API | ✅ | Partial |
| Web admin | ✅ | MTC assist |
| Mobile app | — | MTC Hi-Tech |
| Infrastructure | ✅ | — |
