# Wpical Introduction

Wpical is a tool built into WPILib used to calibrate AprilTag positions on FRC fields. It comes in handy when tags on a practice field are not placed exactly where they should be, which throws off your robot's localization. Rather than guessing or manually measuring, Wpical lets you record videos of your field and run an optimization to figure out where the tags actually are.

It does two main things:
- **Camera Calibration** — measures your camera's lens characteristics so distances and angles are calculated correctly
- **Field Calibration** — measures the real positions of AprilTags on your field and outputs a corrected field map

## Use Cases

Robot localization relies on two things being accurate: your camera model and your field map. If your camera has lens distortion that isn't accounted for, or if your AprilTags are even slightly off from where the field layout says they are, your pose estimates will drift. On a competition field this is usually fine, but on a practice field that was set up by hand, tag placement error is common and can noticeably hurt auto performance.

Wpical corrects for that by generating an updated field layout JSON that reflects where the tags actually are, which you can load into your robot code and coprocessors like PhotonVision or Limelight.

## Key Concepts

- **Camera Intrinsics**: The internal properties of a camera, like focal length and lens distortion. These are specific to each individual camera and need to be measured before field calibration can work accurately.
- **ChArUco Board**: A printed calibration target used during camera calibration. Wpical uses a 5x5 ArUco dictionary ChArUco board. You can generate one at [calib.io](https://calib.io).
- **Pinned Tag**: One tag whose position you treat as correct. Wpical measures all other tags relative to it.
- **Field Map JSON**: A WPILib file that stores the ID, position, and orientation of every AprilTag on the field. Wpical outputs an updated version of this after calibration.
- **`.fmap` File**: A companion file to the JSON used by coprocessors like PhotonVision and Limelight.
- **OpenCV vs MRcal**: The two calibration algorithms Wpical supports. MRcal is generally more accurate and is the recommended option for most teams.
