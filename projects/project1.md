---
layout: default
title: Project Title 1
---

## Gunfire Inc.


## Overview
A detailed description of the project, including its purpose, inspiration, and goals.

## Image Gallery

<div class="gallery">
    <div class="gallery-item">
        <img src="{{ site.baseurl }}/assets/images/project1.jpg" alt="Project 1" onclick="openLightbox(this)">
        <p>Image 1</p>
    </div>
    <div class="gallery-item">
        <img src="{{ site.baseurl }}/assets/images/project2.jpg" alt="Project 2" onclick="openLightbox(this)">
        <p>Image 2</p>
    </div>
    <div class="gallery-item">
        <img src="{{ site.baseurl }}/assets/images/project3.jpg" alt="Project 3" onclick="openLightbox(this)">
        <p>Image 3</p>
    </div>
</div>

<!-- Lightbox Modal -->
<div id="lightbox" class="lightbox" onclick="closeLightbox()">
    <span class="close">&times;</span>
    <img id="lightbox-img" class="lightbox-content">
</div>

---
## Gameplay flow

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