# Y-BOT — System Architecture

## Robot Architecture

```
[Kinect Depth Camera]
        │ (USB — Point Cloud Data)
        ▼
[Raspberry Pi — Main Compute]
  ├── ROS II Node: Depth Image → Laser Scan Converter
  ├── ROS II Node: SLAM Algorithm (GMapping / Cartographer)
  │    ├── Output: Occupancy Grid Map
  │    └── Output: Robot Pose Estimate
  ├── ROS II Node: Navigation Stack
  │    ├── Input: Map + Pose + Goal
  │    └── Output: Velocity Commands
  └── ROS II Node: Motor Controller Interface
        │ (Serial / USB)
        ▼
[Arduino — Motor Driver]
        │
[DC Motors — Differential Drive Wheels]
```

## Component Breakdown

### 1. Mechanical Platform
- Differential drive mobile base (2 driven wheels + caster)
- Aluminum or 3D-printed chassis
- Kinect camera mount

### 2. Electronics
- **Main Computer:** Raspberry Pi 4 (Ubuntu + ROS II)
- **Microcontroller:** Arduino (motor driver bridge, encoder feedback)
- **Sensor:** Microsoft Kinect depth camera (structured light, 3D point cloud)
- **Motor Driver:** L298N or equivalent H-bridge

### 3. Software Stack (ROS II)
- **Kinect ROS Driver:** libfreenect / OpenNI ROS adapter for point cloud streaming
- **Depth to Laser Scan Converter:** depthimage_to_laserscan package
- **SLAM:** GMapping or Cartographer ROS package
- **Navigation:** ROS Navigation Stack (move_base, local/global planners)
- **Visualization:** RViz for real-time map and robot pose display

## Data Flow

```
1. Kinect captures depth frame (640×480 at 30fps)
2. ROS driver converts depth frame to point cloud (PointCloud2 topic)
3. depthimage_to_laserscan converts to 2D laser scan slice
4. SLAM node ingests laser scan + odometry → builds occupancy grid map + estimates pose
5. Navigation node receives goal → plans path → publishes velocity commands
6. Arduino receives velocity commands → drives DC motors
7. Encoders feedback to Raspberry Pi for odometry calculation
```

## Repository

- https://github.com/Frey210/Y-BOT_Kinect_SLAM
