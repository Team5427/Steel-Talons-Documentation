# Control Types

### Overview

The table below captures the **control variables** we might command (velocity, position, or an independent output) and the **commutation mode** each one needs.  
It is distilled from the white-board sketch photographed during our 2025 controls meeting.

| Commutation Mode | Velocity | Position | Independent |
| --------------------- | -------- | -------- | ----------- |
| **FOC optional** | • **Velocity Duty-Cycle**  • **Velocity Voltage** | • **Position Duty-Cycle** • **Position Voltage** | • **Voltage Out** |
| **FOC required** | • **Velocity Torque/Current** | • **Position Torque Current** | • **Torque Current (FOC)** |

### Term glossary

| Term | What it means | Typical use-case |
| ---- | ------------- | ---------------- |
| **Duty-Cycle** | Percent of the PWM period the H-bridge is on (open-loop). | Quick prototyping, drive-base “tank” control. |
| **Voltage** | Commanded motor voltage (often with feed-forward). | Velocity loops when battery sag matters. |
| **Torque/Current** | Direct phase-current command that maps to torque. | Precise torque on arms, shooters, or when using gearbox-less drives. |
| **FOC** (Field-Oriented Control) | Vector control that lets us command torque and flux independently. | Required whenever we close the loop on phase current. |

### Choosing a mode

1. **Start simple** – Duty-cycle or raw voltage is fine for early testing.  
2. **Add sensors** – Stepping up to velocity or position control means encoders; confirm signal quality ASAP.  
3. **Go FOC for torque** – The moment you need accurate torque (arm joints, constant-speed shooter wheels, etc.), enable FOC and close the loop on current.

:::tip
Mix-and-match modes as needed. For example, run velocity-FOC during autonomous, but fall back to duty-cycle if the encoder cable pops out mid-match.
:::
