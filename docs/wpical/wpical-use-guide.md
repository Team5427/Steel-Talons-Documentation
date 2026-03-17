# How to Use Wpical

A step by step guide on how to use Wpical

## Step 1: Camera Calibration

The first step in using Wpical is calibrating your camera. In order to do this, a video capture is needed. It is best practice to get videos through a phone instead of your laptop camera. The videos will be used for both camera and field calibrations.


Open Wpical, go to the **Camera Calibration** tab, and use a video which shows the **5x5 ChArUco board** at different angles and distances (keep it close). Run the calibration. Wpical outputs a camera calibration JSON which you'll use in the next step.

(Pick **MRcal** over OpenCV if you can — it's more accurate and is what WPILib recommends.)

## Step 2: Field Calibration

Once your camera is calibrated, switch to the **Field Calibration** tab. You'll need:

- Your camera calibration JSON from Step 1
- The official WPILib field layout JSON for your game (find it in the [WPILib resources](https://github.com/wpilibsuite/allwpilib/tree/main/apriltag/src/main/native/resources/edu/wpi/first/apriltag))
- A video of your camera slowly panning across all the AprilTags on your practice field

Before running the optimization, **pin one tag** — this is the tag whose position you're treating as ground truth. Every other tag gets measured relative to it. Pick one that's solidly mounted and unlikely to have moved.

Load your video, set your pinned tag, and run the optimization. Wpical will output a corrected field layout JSON.

## Step 3: Using the Output

Once the final finished JSON is made, it can now be used in your robot code and applied in different applications such as PhotonVision, Limelight, and more.

Be sure to reference the official WPILib docs for any troubleshooting that may occur.