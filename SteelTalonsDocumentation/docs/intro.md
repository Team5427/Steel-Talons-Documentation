---
sidebar_position: 1
---

# Steel Talons Documentation Overview

## Getting Started

:::danger
The documentation assumes you already know how to code in Java. If you do not, many of the code examples will not be understandable. However, you can still learn some higher level concepts.

:::

:::warning 
Make sure to read the **[Robotics Theory](./theory.md)** documentation page to learn the basics of Robotics.
:::

Before diving into the code, it's essential to understand the foundational concepts of robotics. Learning the theory behind robotics will give you the context needed to effectively work with the code.



### What you'll need

- Windows 10 or above (Windows 11 recommended):
  - Windows 11 is the recommended operating system for FRC development. While it is possible to use Linux or MacOS, the setup process is more complex and may not be fully supported.

- [WPILib](https://github.com/wpilibsuite/allwpilib/releases/tag/v2025.3.2) version 2025.3.2 or above:
  - When installing WPILib, you are recommended to follow all the recommended instructions in the wizard. This will install all the necessary dependencies and tools needed to run, debug, and test code.
- [FRC Game Tools](https://www.ni.com/en/support/downloads/drivers/download.frc-game-tools.html) version 2025 or above:
  - This is a set of tools that will help you with the FRC game, and is nessesary to run Driver Station and other RoboRio specific tooling.

## Generate a new FRC project

Generate a new FRC Project using the **Command Library**.
You can do this by running the following command in WPILib's Command Pallette:

```keymap
> WPILib: Create a new FRC Project
> Command Base - Template
> Java Robot
```

## Vendor Libraries (Dependcies)

Vendor Libraries are libraries that are not part of the WPILib library, but are used in your project. These libraries can be added to your project using the **Vendor Dependency tab** in the sidebar.

Add the following libraries to your project:

- CTRE Phoenix 6
- REVLib
- AdvantageKit
- Maple Sim
- PathPlannerLib
- Choreo
- URCL (Unofficial REV Compatible Logger)
- PhotonLib
- WPILib New-Commands

:::danger Advantage Kit Code Changes


Advantage Kit requires significant code changes to compile properly.
Ensure that you review and adapt your codebase accordingly before integration. Make sure to check the [Advantage Kit Documentation](https://docs.advantagekit.org/getting-started/installation/existing-projects/) for more information.

:::

## Build your project

Run the Build command in the Command Pallette:

```keymap
> WPILib: Build Robot Code
```

## Deploy your project

Run the Deploy command in the Command Pallette:

```keymap
> WPILib: Deploy Robot Code
```

## Simulate your project

Run the Simulate command in the Command Pallette:

```keymap
> WPILib: Simulate Robot Code
```

## Debug your project

Run the Debug command in the Command Pallette:

```keymap
> WPILib: Debug Robot Code
```

## Test your project

Run the Test command in the Command Pallette:

```keymap
> WPILib: Test Robot Code
```
