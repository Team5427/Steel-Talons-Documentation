# WPILib and Phoenix Framework Basics

This document provides an overview of the basics and fundamentals of WPILib simulation code and the Phoenix Framework, which are essential for developing and simulating FRC robot projects.

---

## Purpose of WPILib

WPILib is a library designed to assist teams in developing software for FRC robots. It provides a comprehensive set of tools and classes that simplify the process of programming robot behavior, including control systems, sensor integration, and simulation capabilities.

---

## Setting Up a Simulation Environment

To set up a simulation environment using WPILib, follow these steps:

1. **Install WPILib**: Ensure you have the latest version of WPILib installed in your development environment.
2. **Create a New Project**: Use the WPILib command line tools or the WPILib VSCode extension to create a new robot project.
3. **Configure Simulation**: In your project settings, enable simulation support. This may involve adding specific dependencies and configuring your build settings.
4. **Run the Simulation**: Use the simulation tools provided by WPILib to run your robot code in a simulated environment, allowing you to test and debug without physical hardware.

---

## Key Classes and Methods in WPILib for Simulation

- **SimulatedRobot**: The base class for creating a robot that can be simulated. It provides methods for initializing and periodic updates.
- **SimDevice**: A class that represents a simulated device, allowing you to create virtual sensors and actuators.
- **Command-Based Framework**: A structure that allows you to organize your robot code into commands and subsystems, making it easier to manage complex behaviors.

---

## Overview of the Phoenix Framework

The Phoenix Framework is a library developed by CTRE (Cross the Road Electronics) that provides advanced motor control and sensor integration for FRC robots. It is designed to work seamlessly with WPILib and offers features such as:

- **Motor Controllers**: Advanced control of brushless and brushed motors.
- **Sensor Integration**: Support for various sensors, including encoders and gyros, to enhance robot performance.
- **Simulation Support**: Tools to simulate the behavior of motor controllers and sensors in a virtual environment.

---

## Examples of Using WPILib and Phoenix Framework

### Example 1: Basic Robot Simulation

```java
public class Robot extends TimedRobot {
    @Override
    public void robotInit() {
        // Initialize components
    }

    @Override
    public void simulationInit() {
        // Set up simulation-specific components
    }

    @Override
    public void simulationPeriodic() {
        // Update simulation state
    }
}
```

### Example 2: Using a TalonSRX Motor Controller

```java
import com.ctre.phoenix.motorcontrol.can.TalonSRX;

public class Robot extends TimedRobot {
    TalonSRX motor = new TalonSRX(1); // Motor controller on CAN ID 1

    @Override
    public void teleopPeriodic() {
        motor.set(ControlMode.PercentOutput, 0.5); // Set motor speed
    }
}
```

---

## Conclusion

Understanding the basics of WPILib and the Phoenix Framework is crucial for developing effective FRC robot software. By leveraging the simulation capabilities, teams can test and refine their code before deploying it to physical robots, enhancing their overall performance in competitions.