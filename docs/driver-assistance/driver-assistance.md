#  Driver Assistance Systems (FRC)

This document outlines various types of **driver assistance systems** to improve efficiency, accuracy, and reliability in FRC gameplay. These include targeting, intake, and scoring aids based on onboard sensors and vision systems.

---

##  Targeting Assistance

### IMU (Inertial Measurement Unit – e.g., Gyroscope, Accelerometer)

**Advantages:**
- Very consistent
- Built-in
- Smooth data output

**Disadvantages:**
- Only provides angle (no position)
- Drift over time
- Relative angles only (not absolute)

---

### Geometry-Based Targeting

**Advantages:**
- Smooth operation
- Consistent results
- Built-in to many drive systems

**Disadvantages:**
- Susceptible to error:
  - Collisions
  - Wheel slip
  - Relative-only pose

---

##  Intake Assistance

### Specialized Poses

- Poses derived from **individual sensors**
- Supports **pose-to-pose** transitions for intake precision

---

##  Scoring Assistance

### Functions:
- **Pick & Place**
- **Auto-align to target**
- **Global Poses** (Field-relative positions)
- **Visual Servoing**
- **Angle Locking** and **Distance Locking**

---

##  Sensor Integration

### Pose Estimation:
- Fuses multiple sources for a **simulated robot pose**
- Uses **all available sensors** (IMU, encoders, vision, etc.)

---

##  Vision Systems

### AprilTag Vision

**Advantages:**
- Provides **absolute position** OR **relative pose**
- Accurate
- Smooth

**Disadvantages:**
- Often **finicky**
- Sensitive to:
  - Spin/rotation
  - Occlusion
- Poor processing on low power CPUs
- Requires **visual line of sight**
- Fragile setup (lighting, angles)

---

##  Summary of Tools

| Tool/Technique      | Type             | Pros                         | Cons                                |
|---------------------|------------------|-------------------------------|--------------------------------------|
| IMU (Gyro)          | Orientation      | Built-in, smooth              | Drift, no position                   |
| Geometry-Based      | Relative pose    | Smooth, consistent            | Relative-only, error-prone           |
| AprilTag Vision     | Vision           | Absolute pose, accurate       | Needs calibration, fragile setup     |
| Pose Estimation     | Sensor Fusion    | All-sensor support            | Complexity, configuration required   |

---

