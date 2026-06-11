# Fire Fighting Robot — Hexapod Robot (STM32)

> A six-legged (hexapod) fire-fighting robot built for the KRSRI 2022 (Kontes Robot Seni Indonesia) competition, built on STM32 microcontroller with autonomous fire detection and suppression capabilities.

## Quick Facts

| Property | Value |
|---|---|
| **Year** | 2022 |
| **Type** | Autonomous Hexapod Robot / Embedded Systems |
| **Domain** | Robotics / Competition |
| **Status** | ✅ Competition Entry |
| **Context** | KRSRI 2022 National Robot Competition |
| **Role** | Embedded Systems Developer |

## Repository

- https://github.com/Frey210/KRSRI2022_Fire_fighting_robot_STM32

---

# Overview

## Problem Statement

The KRSRI (Kontes Robot Adiwiyata Indonesia / Kontes Robot Seni Indonesia) competition requires contestants to build robots that can autonomously navigate a prescribed environment, locate fire sources, and extinguish them. The challenge combines legged locomotion (hexapod gait algorithms), autonomous navigation, fire detection (UV/IR flame sensors), and fire suppression (fan/water pump actuation) — all on a single embedded platform.

## Solution

A hexapod robot (6-legged walking robot) powered by an STM32 microcontroller with:
- **Hexapod gait algorithm** — coordinated multi-leg stepping for stable locomotion on course terrain
- **Flame detection** — UV or IR flame sensors for fire source localization
- **Fire suppression** — fan or CO2 actuator for fire extinguishing
- **Autonomous navigation** — wall following / course navigation algorithm

## Architecture

```
[Flame Sensors (UV/IR)] → [STM32 MCU] → [Gait Algorithm] → [12× Servo Motors (6 legs × 2 joints)]
                                       → [Navigation Logic]
                                       → [Fire Suppression Actuator (Fan/Pump)]
```

## Tech Stack

| Component | Technology |
|---|---|
| Microcontroller | STM32 (ARM Cortex-M) |
| Language | C (STM32 HAL / bare metal) |
| Servo Control | PWM (12 servos) |
| Sensors | UV/IR flame sensor, ultrasonic (wall detection) |
| Actuator | DC fan / water pump |
| IDE | STM32CubeIDE |

## Contribution

**Embedded Systems Developer** — Responsible for STM32 firmware development:
- Hexapod gait algorithm implementation (tripod gait)
- PWM servo control for 12 servos
- Flame detection and fire suppression logic
- Navigation state machine for competition course

## Results

- Functional fire-fighting hexapod robot entered in KRSRI 2022 national competition
- Demonstrated advanced embedded systems skills: STM32 bare-metal C, multi-servo PWM, sensor fusion

## Links

- **Repository:** https://github.com/Frey210/KRSRI2022_Fire_fighting_robot_STM32
