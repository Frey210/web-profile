# Thermal Camera — Architecture

The prototype uses a privacy-respecting thermal sensing pipeline. A thermal camera feeds temperature frames into a Python/OpenCV process, the detection logic identifies human-like heat signatures, and the control layer sends an AC command through an IR blaster, relay, or building-control interface.

```
[Thermal IR Camera] → [Python / OpenCV Processing] → [Human Detection Algorithm] → [AC Control Signal]
```
