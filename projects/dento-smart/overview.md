# Dento Smart — Project Overview

## Problem Statement

Dental clinics operate complex electrical equipment (dental chairs, compressors, lighting, sterilization units) that must remain operational and properly maintained. Equipment failures during patient procedures are disruptive, costly, and in some cases create patient safety risks. Clinics lack real-time visibility into equipment status, power consumption, and usage patterns — making scheduled maintenance reactive rather than predictive.

## Solution

Dento Smart is an IoT monitoring platform that attaches embedded sensor modules to dental clinic equipment and provides real-time operational status, usage tracking, and alert notifications via a web dashboard and backend API.

**Key capabilities:**
- Real-time equipment operational status monitoring
- Power/electrical parameter monitoring (voltage, current, power consumption) [assumed for dental chair systems]
- Alert notifications when parameters exceed thresholds or equipment enters fault state
- Usage logging for predictive maintenance scheduling
- Web dashboard for clinic managers
- REST API for integration

## Target Users

- **Dental clinic owners and managers** — needing operational visibility across their equipment
- **Biomedical maintenance technicians** — requiring fault detection and maintenance scheduling tools
- **PT Media Teknologi Celebes clients** in the healthcare sector

## Key Features

- ESP32-based embedded monitoring module
- Real-time web dashboard
- REST API with OpenAPI documentation
- Alert/notification system
- Production deployment on Docker/Linux infrastructure
