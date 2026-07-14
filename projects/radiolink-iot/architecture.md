# RadioLink IoT — Architecture

RadioLink IoT uses a transmitter/receiver pattern for remote temperature monitoring. A sensor node reads cabinet temperature, sends telemetry through LoRa or RF modules, and a receiver forwards the data to a lightweight dashboard or logger.

```
[Temp Sensor: DS18B20] → [MCU: Arduino/ESP32] → [Radio TX: LoRa/RF] ~~RF Link~~ [Radio RX] → [Dashboard / Logger]
```
