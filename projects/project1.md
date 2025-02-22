---
layout: default
title: Project Title 1
---

## Gunfire Inc.


## Overview
My goal with the creation and development of this game is to scratch an itch of mine that a lot of other games can't quite reach! I love looter shooters, its one of my favorite genres.

---

## Image Gallery

<div class="gallery">
    <div class="gallery-item">
        <img src="{{ site.baseurl }}/assets/images/project1.png" alt="Project 1" onclick="openLightbox(this)">
        <p></p>
    </div>
    <div class="gallery-item">
        <img src="{{ site.baseurl }}/assets/images/project1_2.jpg" alt="Project 2" onclick="openLightbox(this)">
        <p></p>
    </div>
    <div class="gallery-item">
        <img src="{{ site.baseurl }}/assets/images/project1_3.jpg" alt="Project 3" onclick="openLightbox(this)">
        <p></p>
    </div>
    <div class="gallery-item">
        <img src="{{ site.baseurl }}/assets/images/project1_4.jpg" alt="Action" onclick="openLightbox(this)">
        <p></p>
    </div>
    <div class="gallery-item">
        <img src="{{ site.baseurl }}/assets/images/project1_5.jpg" alt="Project 3" onclick="openLightbox(this)">
        <p></p>
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

## Development Log Video Series

<div class="video-gallery">
    <div class="video-gallery-item" onclick="openLightbox('https://www.youtube.com/embed/3-vVpFSisxE')">
        <img src="https://img.youtube.com/vi/3-vVpFSisxE/hqdefault.jpg" alt="Video Thumbnail">
        <p>From Feb. 19th, 2025</p>
    </div>
    <div class="video-gallery-item" onclick="openLightbox('https://www.youtube.com/embed/Hgjjfns1nXw')">
        <img src="https://img.youtube.com/vi/Hgjjfns1nXw/hqdefault.jpg" alt="Video Thumbnail">
        <p>From Feb. 7, 2025</p>
    </div>
    <div class="video-gallery-item" onclick="openLightbox('https://www.youtube.com/embed/dnzlw88Q8FI')">
        <img src="https://img.youtube.com/vi/dnzlw88Q8FI/hqdefault.jpg" alt="Video Thumbnail">
        <p>From Dec. 31, 2024</p>
    </div>
</div>

<!-- Lightbox Video Modal -->
<div id="lightbox" class="lightbox" onclick="closeLightbox()">
    <span class="close" onclick="closeLightbox()">&times;</span>
    <iframe id="lightbox-video" class="lightbox-content" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


## Links
- [Play the Game](https://www.example.com)
- [View on GitHub](https://github.com/yourusername/project1)