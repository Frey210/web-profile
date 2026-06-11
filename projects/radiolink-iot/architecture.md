# RadioLink IoT — Architecture, Tech Stack, Contribution, Results, Links

## Architecture

```
[Temp Sensor: DS18B20] → [MCU: Arduino/ESP32] → [Radio TX: LoRa/RF] ~~RF Link~~ [Radio RX] → [Dashboard / Logger]
```

## Tech Stack

| Component | Technology |
|---|---|
| MCU | Arduino / ESP32 |
| Sensor | DS18B20 temperature sensor |
| Communication | LoRa / RF 433MHz module |
| Language | C++ (Arduino) |
| Dashboard | Web-based (HTML/JS) or serial logger |

## Contribution

**Lead Developer** — Both TX node firmware, RX firmware, and monitoring dashboard.

## Results

- Functional wireless temperature monitoring system for aviation instrument cabinets
- Radio link range appropriate for runway-to-building instrument cabin distances
- Validates radio-based IoT approach for aviation sensor monitoring in remote locations

## Links

- **Repository:** https://github.com/Frey210/TempIoT_RadioLink
