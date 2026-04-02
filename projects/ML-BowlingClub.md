---
layout: default
title: Massive Loop Bowling Club
---

## Massive Loop Bowling Club
**ML Bowling Club** is a fully synchronized multiplayer VR and Desktop bowling game. Built from the ground up for the Massive Loop platform, it features a custom master-client authoritative network architecture, complex game state management, and highly refined cross-platform physics.

## Gameplay Showcase
<div class="video-container">
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/-7k-90HuPZ8" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

---

## 🛠️ Technical Breakdown

While a bowling game might seem straightforward, keeping physics, animations, and game states perfectly synchronized across multiple VR and Desktop clients requires rigorous network engineering and physics manipulation.

### **1. Advanced VR Throw Mechanics & Velocity Smoothing**
Raw VR controller data is often jittery, which can result in unpredictable ball throws. To solve this, I engineered a custom throw-detection algorithm:
- **Circular Velocity Buffer:** The ball tracks positional and rotational deltas over a fixed buffer of recent frames. 
- **Exponential Smoothing:** When the player releases the ball, the system calculates a weighted average of the buffer, heavily favoring the most recent frames. This filters out micro-jitters from the hardware.
- **Natural Throw Direction:** The system calculates a blend between the hand's "palm forward" and "palm up" vectors, applying quaternion math to determine if the player is throwing underhand or overhand, and dynamically scales the release force.
- **Angular Velocity Mapping:** The system converts hand rotation deltas into radians-per-second, applying a filtered spin multiplier to the ball's Rigidbody to simulate natural hook and curve.

### **2. Deterministic Networked Physics**
Allowing Unity's default transform synchronization to handle a fast-moving bowling ball results in visual lag and desynchronization between clients. 
- **Impulse Replication:** Instead of syncing positions every frame, the thrower's client calculates the final physics impulse and broadcasts that vector array via an event token (`EVENT_ID_Throw`). 
- **Client-Side Simulation:** Receiving clients apply that exact impulse to the ball locally. Because mass and friction are uniform, the physics engine deterministically resolves the exact same trajectory and pin collisions for everyone in the lobby simultaneously.

### **3. Master-Client Authoritative Game State**
Managing turn orders, scores, and frames for multiple drop-in/drop-out players requires a strict source of truth.
- **Centralized Logic:** The `BowlingGameManager` acts as the master client. It securely tracks player frames (1-10), calculates strike/spare bonus logic, and broadcasts the UI payload to all clients.
- **Late-Joiner Serialization:** If a new player joins mid-game, their client is blind to the current game state. I built a system where the master client concatenates the entire game state (current players, frames, score arrays, and binary pin states) into an efficient string payload. It broadcasts this to the late-joiner, allowing their client to instantly reconstruct the live game environment.

### **4. Dynamic UI & Interactive Components**
- **Custom Color Chooser:** Built a dynamic, radial UI system using coroutines to handle smooth interpolation. Buttons automatically position themselves in a perfect circle using trigonometric offsets, featuring smooth scale-and-pulse animations when interacted with. 
- **Cross-Platform Inputs:** The game detects if a user is in VR or Desktop mode. Desktop users utilize an integrated charge-and-release mechanic with a trajectory projection `LineRenderer` to simulate throw arcs.

---

## Technologies Used
- **Unity (C#):** Core engine and scripting.
- **ML-SDK:** Network event tokens, player property management, and cross-platform grabbing mechanics (`MLGrab`).
- **Blender:** Custom Modeling some assets.

## My Role
- Lead Gameplay & Systems Programmer
- Network Engineer
- UX/UI Scripter

## Links
- [Play the Game](https://massiveloop.com/world/1806817a-e386-430f-a350-eab9c24b04f7){:target="_blank" rel="noopener noreferrer"}
- [View on GitHub](https://gitfront.io/r/BrandonW24/iXvRRiq2iycM/Momo-Space-Diner-Code-Repo/){:target="_blank" rel="noopener noreferrer"}