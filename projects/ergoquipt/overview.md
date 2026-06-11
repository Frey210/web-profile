# Ergoquipt — Project Overview

## Problem Statement

Workplace ergonomics research requires objective, quantifiable measurements of human physiological responses to workload and fatigue. Traditional methods involve cumbersome laboratory equipment, high costs, and significant logistical barriers — making it impractical to conduct large-scale ergonomic studies in real-world operational settings (factories, offices, ATC towers). There is a need for a portable, multi-subject, real-time measurement system that is accessible for research teams in Indonesian university and industrial contexts.

This need was first identified through the **PKM-KC 2022 Smart Healing Aerochair** project, which studied ATC officer stress and fatigue — the experience of which directly inspired the commercial Ergoquipt product.

## Solution

Ergoquipt is a portable, multi-device ergonomic measurement system that combines:
- **Embedded sensor units** (ESP32/Arduino-based) measuring reaction time, tympanic temperature, and heart rate
- **Millisecond-precision reaction time testing** across multiple subjects simultaneously
- **Real-time web admin panel** for test management, live results, and historical data
- **Mobile application** for on-device test control and result viewing
- **REST API backend** for data aggregation, authentication, and research data export

The system enables researchers to collect reliable physiological and cognitive performance data in any environment — from a lab table to an ATC control room.

## Target Users

- **Ergonomics researchers** at Universitas Hasanuddin and other Indonesian universities
- **Occupational health practitioners** measuring worker fatigue and cognitive load
- **Industrial health and safety (HSE) departments** conducting workforce ergonomic assessments
- **PT Media Teknologi Celebes** internal R&D and client delivery for ergonomic consulting projects

## Key Features

- Multi-subject, multi-device simultaneous reaction time measurement
- Tympanic (infrared ear canal) temperature measurement for thermal stress monitoring
- Heart rate measurement via PPG or similar embedded sensor
- Millisecond-level timing precision
- Real-time web dashboard with live readings and test management
- Mobile app for portable test control
- REST API with OpenAPI documentation
- Docker-based production deployment on Linux servers
