# Command Based Programming Overview

Command Based Programming is a programming paradigm used in robotics to structure code in a way that separates the logic of the robot's behavior from the hardware control. This allows for easier debugging, testing, and maintenance of the code.
:::warning
The offical documentation for Command Based programming can be found [here](https://docs.wpilib.org/en/stable/docs/software/commandbased/index.html). Make sure to read through it to understand the basics of how it works and the conceptual understanding behind it.
:::

This documentation will only focus on how we use Command Based Programming **NOT** how it works.

## Command Based Programming Structure

:::note
Each layer of the project structure is designed to be modular and abstracted from others. By doing so, each file represents an abstract idea of the robot, and allows us to develop functionality into the correct locations in the robot structure.

:::

### Robot Structure

#### Robot Structure

```plaintext
- Robot
    - RobotContainer
        - Commands
            - Subsystems
                - IO Files
                    -  Vendor Dependency Drivers
                - Miscellaneous Sensors

```

#### Example of an Arm Subsystem

```plaintext
- Robot
    - RobotContainer
        - Commands
            - ArmSubsystem
                - ArmIOTalonFX
                    - SteelTalonFX
                        - TalonFX
                    - CanCoder
                - ArmIOSparkMax
                    - SimpleSparkMax
                        - SparkMax
                    - CanCoder

```

:::tip
Not all susystems will strictly follow this structure. Some may use an additional layer of abstraction such as a smaller component of a the larger subsystem. For example, a wrist may be a subcomponent of an arm, and therefore would be a sub-subsystem of the arm subsystem.
:::

#### Example of a further breakdown of a subsystem

```plaintext
- Robot
    - RobotContainer
        - Commands
            - SwerveDriveSubsystem
                - Module
                    - ModuleIOTalonFX
                        - SteelTalonFX
                            - TalonFX
                        - SteelTalonFX
                            - TalonFX
                        - CanCoder
                    - ModuleIOSparkMax
                        - SimpleSparkMax
                            - SparkMax
                        - SimpleSparkMax
                            - SparkMax
                        - CanCoder
                - Gyro
                    - GyroIOPigeon2
                        - Pigeon2

```

## What is an IO File?

An IO file is a file that contains the code to interface with a specific piece of hardware. This includes the code to read and write data to the hardware, as well as any necessary configuration or setup code.

An IO file is typically a class that implements an interface for the specific subsystem. For example, a `ModuleIOTalonFX` file would implement the `ModuleIO` interface, which in turn allows us to share methods between different configurations of hardware.

This allows us to create a hierarchy of classes that represent the different types of hardware we are using.

:::note
The IO file is the **only** place where we interact with the hardware. This allows us to easily swap out hardware without having to change the rest of the code.
:::
:::tip
IO files can also represent **simulated** hardware. This allows us to easily test the code without having to use the actual hardware. This is useful for testing and debugging the code before deploying it to the robot.
:::


### AdvantageKit IO

Advantage Kit uses IO files to not only represent different hardware configurations, but can also **log** the data from the hardware. This allows us to easily log data from the hardware and use it for analysis and debugging.

Check the [Advantage Kit Documentation](https://docs.advantagekit.org/getting-started/installation/existing-projects/) for more information on how to use IO files with Advantage Kit.