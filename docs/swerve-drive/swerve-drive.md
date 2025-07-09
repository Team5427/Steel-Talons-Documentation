#  Swerve Drive System Documentation

This document outlines the logic and structure of a **swerve drive** control system for a 2025 FRC (FIRST Robotics Competition) robot. A swerve drive system allows each wheel module to independently steer and drive, enabling holonomic motion in any direction.

---



##  System Overview

The swerve drive system takes joystick inputs (or autonomous commands), calculates the desired robot motion, and converts that into commands for four independently rotating drive modules.

Each module requires:
- A **steering angle**
- A **wheel speed**

---

##  Control Pipeline

The general flow of swerve control is:

1. **Joystick Input** → Chassis Speeds
2. **Chassis Speeds** → Module States (Angle + Speed)
3. **Optimize Module States**
4. **Apply Constraints & Generate Setpoints**
5. **Send Setpoints to Motor Controllers**

```mermaid
graph LR
    A[User Input] --> B[Chassis Speeds]
    B --> C[Module States]
    C --> D[Optimized Angles & Speeds]
    D --> E[Motor Setpoints]
