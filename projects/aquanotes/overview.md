# Aquanotes — Project Overview

## Problem Statement

Traditional shrimp aquaculture in Indonesia suffers from poor water quality visibility. Farmers monitor key water parameters manually, often infrequently, which means dangerous conditions (ammonia spikes, oxygen depletion, pH swings) go undetected until shrimp mortality occurs. This results in massive economic losses for small-scale and commercial shrimp farmers. The problem is especially acute in Eastern Indonesia (Sulawesi, Maluku) where technical resources are scarce but aquaculture is economically critical.

## Solution

Aquanotes is an end-to-end IoT aquaculture monitoring platform built by PT Media Teknologi Celebes (Aerasea). It continuously monitors water quality parameters in shrimp ponds using a network of embedded sensor nodes, transmits data to a cloud backend via MQTT/Wi-Fi, and presents real-time readings to farmers and managers via a web dashboard and mobile application.

The platform gives farm operators continuous, real-time visibility into:
- Water temperature
- TDS (Total Dissolved Solids / salinity proxy)
- Dissolved oxygen (DO)
- pH level
- Ammonia concentration
- Environmental (ambient) parameters

When any parameter crosses a defined threshold, the system triggers automatic alerts — allowing rapid intervention before fish/shrimp mortality occurs.

## Target Users

- **Shrimp and fish aquaculture farmers** (commercial and semi-commercial) in Sulawesi and Eastern Indonesia
- **Farm managers and supervisors** monitoring multiple ponds remotely
- **Export companies** with vertical integration into shrimp farming who need compliance-ready data logging
- **Research institutions** studying shrimp pond ecology and water quality dynamics

## Key Features

- Multi-parameter water quality sensing (temperature, TDS, DO, pH, ammonia)
- Real-time data dashboard (web-based, responsive) with live charts and alerts
- Mobile application (iOS and Android) for on-the-go monitoring
- MQTT-based sensor-to-cloud data pipeline (low-latency, low-bandwidth)
- Configurable alert thresholds per parameter per pond
- Historical data logging and trend visualization
- Multi-pond support within a single account
- REST API backend (with OpenAPI documentation at `aeraseaku.inkubasistartupunhas.id/docs`)
- Deployed to production — live at `aquanotes-web.inkubasistartupunhas.id`

## Project Status

**Production — Active** (2023 – Present)
Deployed and used by real clients in the aquaculture sector. Continuously maintained and expanded by PT Media Teknologi Celebes.
