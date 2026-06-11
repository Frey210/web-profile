# Fire Fighting Robot — Architecture

## System Block Diagram

```
[UV/IR Flame Sensors] ──┐
[Ultrasonic Sensors]  ──┼──→ [STM32 MCU]
[IR Wall Sensors]     ──┘           │
                                    ├── Gait Control → 12× Servo PWM
                                    ├── Navigation State Machine
                                    └── Suppression → Fan / Pump
```

## Components

- **MCU:** STM32 (ARM Cortex-M3/M4)
- **Servos:** 12× servo motors (2 per leg × 6 legs) for hexapod gait
- **Sensors:** UV/IR flame sensors, ultrasonic distance sensors
- **Actuators:** DC cooling fan or water pump for fire suppression
- **Power:** LiPo battery with regulation
