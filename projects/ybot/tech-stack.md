# Y-BOT — Technology Stack

## Hardware
| Component | Technology |
|---|---|
| Main Computer | Raspberry Pi 4 (Ubuntu Linux) |
| Microcontroller | Arduino (motor control) |
| Depth Sensor | Microsoft Kinect (structured light, 3D point cloud) |
| Motor Driver | L298N H-Bridge (or equivalent) |
| Drive System | Differential drive (2 DC motors + encoders) |

## Software
| Component | Technology |
|---|---|
| OS | Ubuntu Linux (Raspberry Pi) |
| Robot Framework | ROS II (Robot Operating System) |
| SLAM | GMapping / Cartographer (ROS package) |
| Kinect Driver | libfreenect / OpenNI ROS adapter |
| Navigation | ROS Navigation Stack (move_base) |
| Visualization | RViz |
| Programming Languages | Python, C++ |
