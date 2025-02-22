---
layout: default
title: Project Title 1
---

## Gunfire Inc.

<div class="project">
<img src="{{ site.baseurl }}/assets/images/project1.jpg" alt="Project 1">
            <p>Project Title 1</p>
</div>

## Overview
A detailed description of the project, including its purpose, inspiration, and goals.

---
## Gameplay Flow Chart

<div class="mermaid">
graph TD
    A[Start Game] --> B[Enter Mission/Area]
    B --> C[Engage Enemies]
    C --> D{Kill Enemies?}
    D -- Yes --> E[Gain EXP & Loot]
    D -- No --> F[Retry or Exit Mission]
    E --> G{Level Up?}
    G -- Yes --> H[Allocate Skill Points]
    G -- No --> I[Check Loot & Perks]
    H --> I
    I --> J{Equip New Gear?}
    J -- Yes --> K[Upgrade Character]
    J -- No --> L[Proceed to Next Mission]
    K --> L
    L --> B
</div>

---
## Explanation of the Flow Chart

The player begins the game by selecting and entering a mission, where they engage and fight enemies. To progress, the player must defeat all enemies; if successful, they gain EXP and random loot, but if not, they can retry the mission or exit. Earning enough EXP allows the player to level up and allocate skill points to upgrade abilities or stats. If not leveling up, the player checks their loot and any available perks. They then decide whether to equip new gear to upgrade their character or proceed directly to the next mission. This loop repeats, creating a cycle of combat, progression, and customization.

## Features
- Dynamic Enemy AI
- Comic Book Style Graphics Shader
- Randomly Generated Guns and Loot
- Meaningful Progression Systems

## Technologies Used
- Unity
- C#
- Blender

## My Role
- Gameplay Programmer
- Level Designer

## Challenges & Solutions
Describe any challenges you faced during development and how you overcame them.

## Links
- [Play the Game](https://www.example.com)
- [View on GitHub](https://github.com/yourusername/project1)