# Bioassay Color Mapping — Plankton Density Detection

> A computer vision system for detecting plankton density in aquaculture water samples using RGB color analysis with a TCS34725 sensor and camera-based KNN classification.

## Quick Facts

| Property | Value |
|---|---|
| **Year** | 2023 |
| **Type** | Computer Vision / Embedded System |
| **Domain** | Aquaculture / Biosensing |
| **Status** | ✅ Research/Prototype Complete |
| **Role** | Lead Developer |

## Technology Stack

`Python` `OpenCV` `KNN Algorithm` `TCS34725 RGB Sensor` `Arduino / Raspberry Pi` `scikit-learn`

## Repository

- https://github.com/Frey210/Bioassay_Color_Mapping

---

# Overview

## Problem Statement

Plankton density in shrimp and fish ponds is a key water quality indicator — plankton produces oxygen and serves as a natural food source. Traditional plankton measurement requires laboratory filtering and microscopy, which is expensive, time-consuming, and inaccessible for most small-scale Indonesian aquaculture farmers.

## Solution

A bioassay-based color mapping system that correlates the RGB color signature of a pond water sample (captured via TCS34725 sensor or camera) with plankton density, using a pre-trained KNN (K-Nearest Neighbor) classifier. Farmers can measure plankton density by placing water in a standardized container and checking the color reading — no laboratory equipment needed.

## Architecture

```
[Water Sample (Pond Water)]
        │
[TCS34725 RGB Sensor + Camera]
        │ (R, G, B values)
        ▼
[Python Script: Feature Extraction]
        │
[Trained KNN Classifier]
        │
[Plankton Density Classification Output]
        │
[Display / Alert Interface]
```

## Contribution

- Designed the bioassay color reference methodology (training dataset collection)
- Developed Python/OpenCV image processing pipeline
- Trained and validated the KNN classifier for density classification
- Integrated TCS34725 sensor with microcontroller for portable deployment

## Results

- Demonstrated reliable plankton density classification from RGB color data
- Provides a low-cost, field-deployable alternative to laboratory plankton counting
- Directly complements Aquanotes water quality monitoring platform

## Links

- **Repository:** https://github.com/Frey210/Bioassay_Color_Mapping
