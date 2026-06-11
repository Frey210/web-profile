# Ergoquipt — System Architecture

## High-Level Architecture

```
[Test Subject 1]              [Test Subject N]
       │                             │
[ESP32 Device: Reaction          [ESP32 Device: ...]
 Time + Tympanic Temp
 + Heart Rate]
       │ (Wi-Fi / REST / MQTT)       │
       ▼                             ▼
[Backend API Server: Node.js / FastAPI]
       │
[Database: PostgreSQL]
       │
       ├──▶ [Web Admin Dashboard]
       └──▶ [Mobile App (iOS / Android)]
```

## Component Breakdown

### 1. Embedded Measurement Unit (ESP32)
- **Controller:** ESP32
- **Sensors:**
  - Infrared tympanic thermometer module (MLX90614 or equiv) for ear temperature
  - PPG sensor or pulse oximeter module for heart rate (SpO2)
  - Reaction time button/trigger apparatus (physical button + microsecond timer)
- **Firmware:** C++ (Arduino Framework for ESP32)
- **Repositories:**
  - https://github.com/Frey210/Ergoquipt-TympanicHR (tympanic temp + HR)
  - https://github.com/Frey210/Ergoquipt (main reaction time firmware)

### 2. Backend API Server
- **Frameworks:** Node.js (Express) / FastAPI (Python)
- **Responsibilities:** Receive device measurements, persist to database, serve API for dashboard and mobile, manage test sessions, authentication
- **Live API Docs:** https://ergoquipt.inkubasistartupunhas.id/docs
- **Repository:** https://github.com/Frey210/Ergoquipt-Backend

### 3. Web Admin Dashboard
- **Framework:** React.js (or equivalent)
- **Features:** Test session management, live results, historical reports, user accounts
- **Live URL:** https://ergoquipt-admin.inkubasistartupunhas.id
- **Repository:** https://github.com/Frey210/ergoquipt-admin-web

### 4. Mobile Application
- **Platform:** Cross-platform (React Native or Flutter)
- **Features:** Start/stop tests, real-time readings on device, export results
- **Repository:** https://github.com/MTC-Hi-Tech-Centre/ergoquipt-mobile-app

### 5. Deployment Infrastructure
- Linux VPS, Docker + Docker Compose, Nginx reverse proxy, Cloudflare Tunnel

## Data Flow

```
1. Researcher starts a test session from web dashboard or mobile app
2. ESP32 device(s) assigned to test subjects begin measurement
3. Reaction time: device captures button press timestamp with microsecond precision → sends to API
4. Temperature: MLX90614 captures tympanic reading → sends to API
5. Heart rate: PPG sensor processes signal → computed HR reading sent to API
6. Backend stores all readings in database, associates with test session
7. Dashboard updates in real-time with live readings per subject
8. Researcher exports report at end of session
```
