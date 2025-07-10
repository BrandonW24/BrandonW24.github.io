---
layout: default
title: Massive Loop Bowling Club
---

## Massive Loop Bowling Club
**ML Bowling Club** is a multiplayer VR bowling game where players compete in a virtual bowling alley, complete with realistic physics, team-based gameplay, and synchronized multiplayer mechanics. The game supports **cross-platform play**, allowing users in **VR** and **desktop** modes to bowl together in real-time.

## Overview
## Gameplay Trailer  
<div class="video-container">
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/K8aAykz_R2Y" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>



### **Environment & Gameplay**  

The game features a fully-realized virtual bowling alley with:  

- Physics-based bowling ball mechanics with realistic rolling, bouncing, and pin collisions  
- A complete set of 10 pins that detect knockovers with precision  
- Visual trajectory prediction for aiming throws  
- Team-based play with customizable ball colors and materials  
- Dynamic score tracking with leaderboards  

### **Key Gameplay Mechanics**  

- **VR Throwing**: Natural throwing mechanics with velocity tracking and angle compensation  
- **Desktop Charging**: Power meter for precise desktop throws  
- **Ball Customization**: Resize the ball with two-handed grabs and choose from 12 team colors  
- **Pin Physics**: Advanced knockover detection using multiple thresholds (angle, velocity, position)  
- **Turn Management**: Automated player rotation with frame tracking (up to 10 frames per player)  




---
## Key Features

* **Cross-Platform Multiplayer**: Seamless gameplay across VR and desktop platforms

- **Physics-Based Bowling**: Realistic ball and pin physics with proper mass and forces
- **Dynamic Scoring System**: Automatic pin detection and score tracking with frame-by-frame progression
- **Visual Feedback**: 
  - Trajectory prediction line
  - Power meter for charged throws  
  - Team-colored ball trails
  - Pin knockover sound effects
- **Ball Customization**:
  - Real-time resizing (two-handed grab to scale)
  - 12 team color options with matching materials
- **Game Management**:
  - Automatic pin resetting
  - Ball return functionality
  - Player turn queue system

---

## Technologies Used
* **Unity**: Game engine for development

- **C#**: Primary scripting language
- **ML-SDK**: VR platform integration and networking
- **PhysX Physics**: Realistic collision and physics simulation


## My Role
- Gameplay Programmer
- Game Designer
- Environment

## Challenges and Solutions

1. **Realistic Bowling Physics**  

   - *Challenge*: Making the ball behave like a real bowling ball with proper mass, friction, and hook potential  

   - *Solution*: Fine-tuned Rigidbody properties and implemented velocity buffering for accurate throw detection  

2. **Precise Pin Detection**  

   - *Challenge*: Reliably detecting when pins are knocked over without false positives  

   - *Solution*: Multi-threshold system checking angle, velocity, position change, and time-based cooldowns  

3. **Multiplayer Synchronization**  

   - *Challenge*: Keeping all clients in sync with ball positions, pin states, and scores  

   - *Solution*: Networked events for all major actions (throws, resets, scoring) with master client authority  

4. **Cross-Platform Controls**  

   - *Challenge*: Creating intuitive controls for both VR (motion) and desktop (mouse/keyboard)  

   - *Solution*: 
     - VR: Natural throwing with velocity tracking  
       - Desktop: Charge-and-release mechanics with trajectory preview  

5. **Dynamic Game State Management**  

   - *Challenge*: Managing player turns, frames, and scores across multiple players  

   - *Solution*: Queue-based turn system with frame tracking and network-synced scoreboards  

## Links
- [Play the Game]((https://massiveloop.com/world/1806817a-e386-430f-a350-eab9c24b04f7)){:target="_blank" rel="noopener noreferrer"}
- [View on GitHub](https://gitfront.io/r/BrandonW24/iXvRRiq2iycM/Momo-Space-Diner-Code-Repo/){:target="_blank" rel="noopener noreferrer"}