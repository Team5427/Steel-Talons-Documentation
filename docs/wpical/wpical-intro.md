# Wpical Introduction

Wpical is a tool built into WPILib used to calibrate AprilTag positions on FRC fields. It's used in practice fields, as they usually aren't completely accurate, which Wpical solves through calibration that creates a JSON that accurately has the Apriltag info for use.

It does two main things:
- **Camera Calibration** — measures your camera's lens characteristics so distances and angles are calculated correctly
- **Field Calibration** — measures the real positions of AprilTags on your field and outputs a corrected field map

## Use Cases

Because practice fields are set up manually, they are prone to errors, and without proper calibration this can lead to bad auton and pose estimates.

Wpical corrects for that by generating an updated field layout JSON that reflects where the tags actually are, which you can load into your robot code and coprocessors like PhotonVision or Limelight.

## Key Concepts

- **Camera Intrinsics**: The properties of a camera such as focal length and distortion. Each camera has different intrinsics which explains why calibration is needed
- **ChArUco Board**: A 5x5 checkerboard that is used during calibration. You can generate one at [calib.io](https://calib.io).
- **Pinned Tag**: One tag whose position you treat as correct. Wpical measures all other tags relative to it.
- **Field Map JSON**: A file that stores the ID, position, and orientation of every AprilTag on the field. (Final product from calibrating)
- **`.fmap` File**: Another file from calibration that is used by systems like PhotonVision and Limelight.
- **OpenCV vs MRcal**: The two calibration algorithms Wpical supports. MRcal is generally more accurate and is the recommended option for most teams.
