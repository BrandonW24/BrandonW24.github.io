---
layout: default
title: Controller to OSC

---

## Controller to OSC


## Overview

**CTRL 2 OSC (C2O)** is a lightweight, GUI-driven application designed to seamlessly bridge the gap between physical hardware and digital environments. Originally developed as a versatile solution for mapping physical simulation hardware to Massive Loop, C2O reads real-time data from USB steering wheels, Bluetooth gamepads, joysticks, and keyboards. It translates these inputs and broadcasts them over a local network using the Open Sound Control (OSC) protocol, ensuring low-latency communication without heavy middleware. The application also features **two-way OSC communication**, allowing remote software to send Force Feedback (FFB) commands back to dynamically adjust steering wheel resistance in real-time.

## Image Gallery

<div class="gallery">
    <div class="gallery-item">
        <img src="{{ site.baseurl }}/assets/images/C2O_1.png" alt="C2O Dashboard" onclick="openLightbox(this)">
        <p></p>
    </div>
    <div class="gallery-item">
        <img src="{{ site.baseurl }}/assets/images/C2O_2.png" alt="Axis Tuning Settings" onclick="openLightbox(this)">
        <p></p>
    </div>
</div>


<div id="lightbox" class="lightbox" onclick="closeLightbox()">
    <span class="close">&times;</span>
    <img id="lightbox-img" class="lightbox-content">
</div>

---
## Key Features

- **Multi-Device & Keyboard Support**: Capture inputs from multiple hardware devices simultaneously, or map global keyboard keystrokes directly to OSC outputs.
- **Two-Way OSC (Hardware FFB)**: Supports incoming OSC messages to control Centering Spring, Damper (Weight), and Static Friction on compatible steering wheels.
- **Advanced Axis Tuning**: Fine-tune controls on a per-axis basis with adjustable deadzones, sensitivity multipliers, non-linear curves, and Exponential Moving Average (EMA) smoothing.
- **Customizable OSC Routing**: Broadcast to a base OSC address or override the routing entirely with custom addresses on a per-axis, per-button, or per-key basis.
- **Smart Auto-Detection**: Automatically detects device types and labels buttons with their true hardware names (PlayStation, Xbox, Nintendo, and popular racing wheels).

---

## Development Highlights

- **High-Performance Polling Architecture**: Implemented multi-threading to dedicate a separate, high-speed loop purely for hardware polling and OSC broadcasting, keeping the UI fully responsive.
- **Dynamic UI Adaptation**: Built a modern, Azure TTK-themed interface with real-time visualizers that automatically adapt to the connected device. Buttons, axes, and keys dynamically glow upon activation.
- **Bandwidth Optimization**: Engineered the output stream to only broadcast values that have changed since the last frame, significantly reducing network load.
- **Input Profile Management**: Created a robust configuration system allowing users to save and load different device layouts, tuning parameters, and network configurations to a local JSON file.

---

## Technologies Used
- **Python (3.x)**: Primary application language.
- **pysdl2**: Handled underlying USB device polling, input event loops, and Force Feedback (haptics) drivers.
- **python-osc**: Formatted and transmitted/received UDP network packets.
- **sv_ttk (Tkinter)**: Rendered the modern GUI theme and dynamic previews.
- **keyboard & pystray**: Managed global key polling and background system tray operations.

## My Role
- Tools Programmer
- UI/UX Implementation

## Challenges and Solutions

1. **Ensuring Low-Latency Performance with a GUI**:
   - *Challenge*: Polling USB hardware at high speeds while rendering a dynamic GUI can cause thread blocking and latency.
   - *Solution*: Utilized multi-threading to isolate the high-speed input polling and OSC broadcasting loop from the main UI thread. Added an option to switch from a scrolling log to a static in-place dashboard to further reduce UI rendering overhead.

2. **Handling Hardware Fragmentation**:
   - *Challenge*: Different controllers and racing wheels output raw data in wildly different formats and scales.
   - *Solution*: Developed a smart auto-detection system that normalizes raw inputs and maps them to true hardware labels. Added an advanced axis tuning layer so users can manually apply deadzones and smoothing to erratic hardware.

3. **Implementing Real-Time Force Feedback**:
   - *Challenge*: Sending haptic feedback from a digital environment back to a physical wheel requires listening for commands without interrupting the outbound stream.
   - *Solution*: Set up a dedicated local listen port for incoming OSC messages to adjust the wheel's Spring, Damper, and Friction in real-time using `pysdl2`'s haptic drivers.

## Links
- [Massive Loop | OSC Vehicle Showcase](https://www.youtube.com/watch?v=9N-i8Vs3JMc)
- [View it on GitHub!.](https://github.com/BrandonW24/C2O-Controller-2-OSC-)