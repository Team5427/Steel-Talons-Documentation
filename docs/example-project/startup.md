#  Example Project (WPILib)

This document goes over the fundamental of creating a project in Java in WPILib. Every screenshot in this document is done in **2026 WPILib**. Any changes will be added in gray note boxes

:::note
Look for these note boxes if using WPILib 2027 or later.
:::

---

##  Creating the project

### Project Initialization

To get started, open the **[SteelTalonsLibrary on Github](https://github.com/Team5427/SteelTalonsLibrary)*** and follow these simple steps.
1. Click on the **WPILib Logo** in the top right of **Visual Studio Code**
![Logo](/img/Logo.png)
2. Search and click `>WPILib: Create a new project`
![Create](/img/Create.png)

#### Project Settings Details

3. Select `template` as a **project type**
4. Select `java` as the **programming language**
5. Select `Command Robot Skeleton (Advanced)` as a **project base.**
:::tip
You may see an option for `Command Robot` in the selection menu. Please note that it is essentially the same as `Command Robot Skeleton (Advanced)` but with unnecessary, extraneous code. Hence, we will not be using that in this example.
:::
6. Select or create a folder for all of your robotics projects
7. Name your project whatever you want
8. Make sure `Create a new folder?` is checked; This ensures that all of your files will be neatly organized in a new folder for this project
9. Enter a **team number**
10. Check the `Enable Desktop Support` box.

This is what your page should look like:
![Create](/img/Config.png)

Congratulations! You have successfully generated a new project!

:::danger Notice
Visual Studio Code will run the the task `gradlew build` immediately uppon generation. Please **DO NOT** close Visual Studio Code, shut down your device, or cancel the process until you see a green `BUILD SUCCESSFUL` appear in the terminal.
:::

### Vendor Configuration

Now that you have initialized your project base, it is time to install the required **vendor dependencies** for this project. You will need to do this every time you create a project.

1. Click the **WPILib Logo** on the toolbar on the left side of the **Visual Studio Code** interface
2. For each of the following vendor dependencies, click the **blue `Install`** button to its right:
    - AdvantageKit
    - ChoreoLib
    - CTRE-Phoenix **(v6)**
      :::caution
      Ignore the other variants of CTRE-Phoenix. Those are either outdated or unnecessary for this skeleton.
      :::
    - maplesim
    - PathplannerLib
    - photonlib
    - REVLib

You should see something like this:
![Vendors](/img/AllVendors.png)

:::tip
In order to fully maximize the provided and installed features in WPILib, make sure that you have the following installed:
- [NI FRC Game Tools](https://www.ni.com/en/support/downloads/drivers/download.frc-game-tools.html)
- [Rev Hardware Client](https://docs.revrobotics.com/rev-hardware-client/gs/install)
- [Phoenix Tuner X](https://apps.microsoft.com/detail/9nvv4pwdw27z?hl=en-US&gl=US)
- [Pathplanner](https://apps.microsoft.com/detail/9nqbkb5dw909?hl=en-US&gl=US)
- [Choreo](https://github.com/SleipnirGroup/Choreo/releases)
:::

Congratulations! You have finished setting up a WPILib project for Visual Studio Code with all of the vendor dependencies!

---

