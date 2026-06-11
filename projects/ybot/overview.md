# Y-BOT — Project Overview

## Problem Statement

Indoor autonomous navigation is a foundational challenge in robotics. To navigate autonomously, a robot must simultaneously build a map of its environment (mapping) and determine its position within that map (localization) — a problem known as SLAM (Simultaneous Localization and Mapping). Traditional solutions require expensive LiDAR sensors, but depth cameras like the Microsoft Kinect offer a lower-cost alternative. Research was needed to validate whether a Kinect-based SLAM implementation could achieve reliable mapping and navigation accuracy in a real indoor environment.

## Solution

Y-BOT is a custom-built autonomous mobile robot that demonstrates real-time SLAM-based mapping and navigation using a Microsoft Kinect depth camera integrated with ROS (Robot Operating System). The robot was designed, built, and programmed by Fariz as his undergraduate thesis project, culminating in a peer-reviewed journal publication.

**Key accomplishments:**
- Complete robot design and construction (mechanical + electronics)
- Integration of Kinect depth sensor with ROS for real-time 3D point cloud processing
- Implementation of SLAM algorithm for environment mapping and self-localization
- Demonstration of autonomous navigation in an indoor university environment
- Publication in JITET — Jurnal Informatika dan Teknik Elektro Terapan (Universitas Lampung indexed journal)

## Target Users

- Academic researchers in mobile robotics and autonomous systems
- Robotics engineering students at Universitas Hasanuddin and similar universities
- Potential commercialization: warehouse robotics, indoor mapping services

## Key Features

- Real-time SLAM-based environment mapping (2D occupancy grid)
- Self-localization using depth sensor point cloud data
- ROS II node architecture for sensor integration and navigation control
- Kinect-based depth perception (replaces expensive LiDAR)
- Mobile base with differential drive control (Arduino motor controller)
- Raspberry Pi as the main compute unit running ROS
