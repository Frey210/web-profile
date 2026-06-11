# Bioassay Color Mapping — Project Overview

## Problem Statement

Plankton density in shrimp and fish ponds is a critical water quality indicator in aquaculture. Traditional methods require laboratory microscopy and filtering — expensive, slow, and impractical on remote Indonesian farms. A low-cost, field-deployable measurement method is needed to give farmers actionable plankton density information.

## Solution

A bioassay color mapping system that uses the RGB color characteristics of a pond water sample to classify plankton density using a trained KNN (K-Nearest Neighbor) machine learning classifier. Water color is captured using a TCS34725 RGB color sensor (or camera) and compared against a trained reference dataset to output a density category (low / medium / high).

## Target Users

- Aquaculture farmers in Sulawesi and Eastern Indonesia
- Aquaculture research stations
- PT Media Teknologi Celebes (as a supplementary tool to the Aquanotes platform)

## Key Features

- RGB-based plankton density classification using TCS34725 sensor
- Camera-based color image analysis using OpenCV
- KNN classification with trained reference dataset
- Low-cost, portable implementation (deployable on Raspberry Pi or similar)

## Repository

- https://github.com/Frey210/Bioassay_Color_Mapping
