# Bioassay Color Mapping — Architecture

## System Architecture

```
[Pond Water Sample]
        │
[TCS34725 RGB Sensor / Camera]
        │ (R, G, B values)
        ▼
[Python Processing Script]
  ├── Feature Extraction (R, G, B normalization)
  ├── KNN Classification (trained model)
  └── Result: Plankton Density Category
        │
[Output: Display / Serial / API]
```

## Components

- **Sensor:** TCS34725 RGB Color Sensor (I2C interface) + Camera module
- **Compute:** Raspberry Pi or PC (Python processing)
- **Algorithm:** scikit-learn KNN classifier
- **Image Processing:** OpenCV (camera-based color extraction)
- **Language:** Python

## Data Flow

1. Water sample placed in standardized container
2. TCS34725 reads RGB values; camera captures image
3. Python script extracts color features (normalized R, G, B ratios)
4. KNN classifier matches features to nearest training labels
5. Plankton density category output (Low / Medium / High / Dense)
