# Thermal Camera — AC Temperature Control System

> A computer vision application using a thermal IR camera to detect human presence and automatically control air conditioning temperature for energy efficiency and comfort optimization.

## Quick Facts

| Property | Value |
|---|---|
| **Year** | 2023 |
| **Type** | Computer Vision / Embedded System |
| **Domain** | Building Automation / Energy Efficiency |
| **Status** | ✅ Prototype Complete |
| **Role** | Lead Developer |

## Repository

- https://github.com/Frey210/termal_human_temperature

---

# Overview

## Problem Statement

Air conditioning systems in rooms operate on fixed schedules regardless of whether people are present or not. This wastes significant energy. A smarter system should detect human presence using temperature imaging and automatically adjust AC settings to optimize comfort when humans are present and reduce energy consumption when rooms are empty.

## Solution

A thermal camera-based computer vision system that detects human body heat signatures in a room using infrared imaging and OpenCV processing. Based on detected human presence and room thermal distribution, the system automatically adjusts air conditioning setpoints.

## Architecture

```
[Thermal / IR Camera]
        │ (USB/I2C)
        ▼
[Raspberry Pi / PC — Python + OpenCV]
  ├── Human Detection: Thermal hotspot detection
  ├── Temperature Distribution Analysis
  └── AC Control Signal Output
        │
[AC Control Unit / IR Blaster / Modbus]
        │
[Air Conditioner]
```

## Tech Stack

| Component | Technology |
|---|---|
| Camera | Thermal IR camera (MLX90640 or USB thermal cam) |
| Processing | Python, OpenCV |
| Human Detection | Thermal blob detection algorithm |
| AC Control | IR blaster or relay module |
| Compute | Raspberry Pi or PC |

## Contribution

**Lead Developer** — Designed and implemented the entire thermal detection + AC control pipeline.

## Repository

- https://github.com/Frey210/termal_human_temperature
