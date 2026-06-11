# Thermal Camera — Architecture, Tech Stack, Contribution, Results, Links

## Architecture

```
[Thermal IR Camera] → [Python / OpenCV Processing] → [Human Detection Algorithm] → [AC Control Signal]
```

## Tech Stack

| Component | Technology |
|---|---|
| Camera | Thermal IR camera (MLX90640 or USB thermal) |
| Language | Python |
| Vision | OpenCV |
| Detection | Thermal blob/hotspot analysis |
| Control | IR blaster / relay / Modbus |
| Compute | Raspberry Pi or PC |

## Contribution

**Lead Developer** — Designed and implemented the thermal detection pipeline and AC control integration.

## Results

- Demonstrated automated room occupancy detection using thermal imaging without privacy-invasive cameras
- Validated energy-saving AC control based on thermal presence data

## Links

- **Repository:** https://github.com/Frey210/termal_human_temperature
