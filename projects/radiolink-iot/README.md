# RadioLink IoT — Radio Link Based IoT System for Landing System Instrument Temperature Monitoring

> An IoT system using radio link communication (LoRa or RF modules) to monitor temperature of aviation landing system instruments (ILS, VOR, localizer equipment), built during Fariz's AirNav internship period.

## Quick Facts

| Property | Value |
|---|---|
| **Year** | 2022 |
| **Type** | IoT / Embedded / Radio Communication |
| **Domain** | Aviation / Air Navigation / IoT |
| **Status** | ✅ Prototype / Internship Project |
| **Context** | Inspired by AirNav Indonesia MATSC internship (Jan–Mar 2022) |
| **Role** | Lead Developer |

## Repository

- https://github.com/Frey210/TempIoT_RadioLink

---

# Overview

## Problem Statement

Aviation landing system instruments (ILS localizer, glide slope, VOR transmitters) are sensitive electronic equipment that must operate within defined temperature ranges for calibrated performance. These instrument installations are often in remote field locations (near runways) with limited wired connectivity. Monitoring their temperature in real-time without running cables back to the control center requires a wireless long-range communication solution.

## Solution

An IoT temperature monitoring system using radio link (LoRa or RF module) as the wireless communication layer between remote sensor nodes (at landing system equipment cabinets) and a monitoring dashboard. Sensor nodes read temperature, transmit wirelessly, and the central receiver logs and displays data.

## Architecture

```
[Temperature Sensor] → [Embedded Node] → [Radio TX (LoRa/RF)] ~~wireless~~ [Radio RX] → [Monitoring Dashboard]
```

## Tech Stack

| Component | Technology |
|---|---|
| Sensor | Temperature sensor (DS18B20 / NTC) |
| Communication | Radio Link (LoRa / RF 433MHz module) |
| MCU | Arduino / ESP32 |
| Language | C++ (Arduino) |
| Dashboard | Web-based monitoring display |

## Contribution

**Lead Developer** — Designed radio-based sensor node architecture, developed firmware for both transmitter and receiver nodes, built the monitoring interface.

## Significance

This project connects directly to the AirNav Indonesia internship experience — where Fariz developed a web-based server room temperature monitoring system (noted in CV). The RadioLink IoT system extends this to handle remote outdoor aviation equipment via wireless communication.

## Links

- **Repository:** https://github.com/Frey210/TempIoT_RadioLink
