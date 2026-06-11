# Aquanotes — Technology Stack

## Embedded / Firmware
| Component | Technology |
|---|---|
| Microcontroller | ESP32 (Espressif) |
| Firmware Language | C++ (Arduino Framework) |
| IDE | Arduino IDE / PlatformIO |
| Communication Protocol | MQTT over Wi-Fi (TCP/IP) |
| Sensors | DS18B20 (temp), Analog TDS, pH Electrode, DO Sensor, Ammonia Probe |
| Sensor Libraries | OneWire, DallasTemperature, MQTT PubSubClient |

## Backend
| Component | Technology |
|---|---|
| Backend Framework | Node.js (Express) / FastAPI (Python) |
| MQTT Broker | Mosquitto (Eclipse) |
| Database | PostgreSQL or MongoDB (time-series readings) |
| API Documentation | Swagger / OpenAPI (auto-generated via FastAPI) |
| Authentication | JWT (JSON Web Tokens) |

## Frontend / Web Dashboard
| Component | Technology |
|---|---|
| Framework | React.js / Next.js |
| Charting | Chart.js / Recharts |
| Styling | CSS / Tailwind CSS |

## Mobile Application
| Component | Technology |
|---|---|
| Framework | React Native / Flutter |
| Platforms | Android, iOS |

## Infrastructure
| Component | Technology |
|---|---|
| OS | Ubuntu / Debian Linux |
| Containerization | Docker, Docker Compose |
| Web Server | Nginx (reverse proxy) |
| Remote Access | Cloudflare Tunnel |
| CI/CD | GitHub (manual or webhook-based) |

## Version Control
- GitHub Organization: MTC-Hi-Tech-Centre (company repos) + Frey210 (personal/lead repos)
