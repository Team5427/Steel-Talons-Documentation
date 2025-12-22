---
title: Lookup Tables (LUTs)
sidebar_position: 3
---

# Lookup Tables (LUTs)

## Overview

Lookup Tables (LUTs) are **precomputed mappings** from sensor inputs to control outputs.  
In FRC, they are commonly used when the system behavior is **nonlinear but repeatable**, and when closed-form physics models are impractical or unnecessary.

The table below summarizes **what we map**, **how the lookup is evaluated**, and **where each pattern is most effective**.

| LUT Type | Input | Output | Typical Usage |
| -------- | ----- | ------ | ------------- |
| **Direct LUT** | Discrete key | Predefined value | Mode switches, presets |
| **Interpolated LUT** | Continuous sensor value | Smoothed output | Shooters, arms |
| **Multi-Dimensional LUT** | 2+ sensor inputs | Control command | Vision-based systems |
| **Adaptive LUT** | Sensor + context | Adjusted output | Compensation over time |

---

## Common FRC LUT Mappings

| Mapping | Input → Output | Example Subsystem |
| ------ | -------------- | ----------------- |
| Distance → RPM | Vision range → flywheel speed | Shooter |
| Angle → Feedforward | Arm angle → gravity torque | Arm / elevator |
| Velocity → Voltage | Desired speed → volts | Drivetrain |
| Voltage → Scale | Battery V → output factor | Brownout handling |
| Pose → Command | Robot pose → path params | Autonomous |

---

## Term Glossary

| Term | Meaning | Typical Use |
| ---- | ------- | ----------- |
| **Lookup Table (LUT)** | Predefined input-output mapping | Replace complex math |
| **Keyframe** | Known, tested data point | Shooter tuning |
| **Interpolation** | Estimating values between points | Smooth control |
| **Feedforward** | Open-loop compensation term | Gravity, inertia |
| **Characterization** | Empirical system measurement | Model generation |

---

## Choosing a LUT Strategy

1. **Measure first** — collect real robot data before coding  
2. **Prefer sparse tables** — fewer clean points beat noisy density  
3. **Interpolate linearly** — higher-order methods rarely help  
4. **Clamp inputs** — define behavior outside table bounds  
5. **Log results** — LUT accuracy depends on data quality  

---

## Example Implementations (TypeScript)

### 1D Interpolated LUT

```ts
export interface LUTPoint {
  x: number;
  y: number;
}

export function interpolateLUT(
  table: LUTPoint[],
  input: number
): number {
  if (input <= table[0].x) return table[0].y;
  if (input >= table[table.length - 1].x)
    return table[table.length - 1].y;

  for (let i = 0; i < table.length - 1; i++) {
    const p1 = table[i];
    const p2 = table[i + 1];

    if (input >= p1.x && input <= p2.x) {
      const t = (input - p1.x) / (p2.x - p1.x);
      return p1.y + t * (p2.y - p1.y);
    }
  }

  return table[table.length - 1].y;
}
