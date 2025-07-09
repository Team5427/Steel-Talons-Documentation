
# Intake Assistance

### Overview
## Why we need it

During **ground-intake** we waste precious seconds nudging the robot into position.  
A lightweight vision loop can:

* highlight the game piece for the driver (**DriverCam overlay**), and  
* auto-align the chassis so the intake “just works.”

## High-level features

- **DriverCam** – regular forward-facing camera view.  
- **Object Detection** – finds the game piece in real time.  
- **Intake Assistance** – commands the drivetrain to keep the target centered and at the correct distance.

## Vision pipeline

```text
┌──────────────┐    color / contour filter / object detection  ┌──────────────┐
│  raw frame   │ ─────────────────────────────────────────────▶│   bounding   │
└──────────────┘                                               │    box +     │
                                                               │  centroid    │
                                                               └─────┬────────┘
                                                                     │
                                       ┌ t = velocity (fwd / back)   │ Ex = horizontal error
                                       │                             ▼
                                       │                       ┌──────────────┐
                                       └──────────────────────▶│     PID      │
                                                               └─────┬────────┘
                                                                     │
                                                   ▼
                                                         ω<sub>z</sub> = turn rate
