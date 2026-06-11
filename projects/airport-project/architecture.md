# Airport Project — Architecture

## Systems Integration Model

```
[Prime Contractor → Subcontractors]
          │ (Install, configure, test systems)
          ▼
[PT Angkasa Pura I — Project Owner]
    └── [Electronic QA Officer: Fariz Achmad Faizal]
          │ (Supervise, inspect, witness, approve)
          ├── Data Network Infrastructure (Cisco)
          ├── PLC/SCADA — Baggage Handling System (Allen-Bradley)
          ├── Fire Alarm System (Notifier / Honeywell)
          ├── Public Address System (TOA, Bosch)
          └── X-Ray HBS — Hold Baggage Screening (Leidos)
```

## System Architecture Notes

### Data Network (Cisco)
- Structured cabling (CAT6A/Fiber) from terminal equipment to distribution frames
- Core/distribution/access switch hierarchy
- VLANs for segregating operations, security, passenger, and management traffic
- Access points for airport Wi-Fi coverage

### Baggage Handling System (PLC/SCADA)
- Allen-Bradley PLCs controlling conveyor sections, sorters, diverters
- SCADA HMI displaying live baggage flow and fault status
- BHS integrated with check-in counters and arrival hall reclaim belts

### Fire Alarm (Notifier)
- Loop-based addressable fire detection (smoke detectors, heat detectors, manual call points)
- Notifier FACPs (Fire Alarm Control Panels) in each fire zone
- Integration with PA system for automated evacuation announcements

### Public Address (TOA / Bosch)
- Zoned amplification covering terminals, gates, concourses, parking
- Integration with FAS for emergency override
- Centralized sound management console

### X-Ray HBS (Leidos)
- Multi-view X-ray inspection of checked baggage
- Automated threat detection algorithms
- Integration with BHS for automated suspect bag diversion

## QA Process

1. **Document Review** — Review contractor submittals (shop drawings, programs, test plans)
2. **Witness Testing** — Attend and sign off on all key commissioning tests
3. **Inspection** — Physical inspection of installation quality
4. **Non-conformance Management** — Record and track deficiencies to closure
5. **Acceptance** — Sign formal acceptance certificates on completion
