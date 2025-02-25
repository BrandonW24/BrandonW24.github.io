---
layout: default
title: Project Title 5
---

## Neighbor Hood Night Ops
A cross-compatible VR and PC desktop Player Versus Player Tactical Shooter

## Overview

## Goals
The primary goal of this project was to create a fast-paced, engaging deathmatch game that combined the tight gunplay and competitive feel of games like *Counter-Strike* with unique mechanics and design elements tailored to our platform. I aimed to address the shortcomings of our previous deathmatch game, such as performance issues, lack of weapon variety, and level design flaws, while introducing new features that would enhance player engagement and enjoyment.
---

## Image Gallery

<div class="gallery">
    <div class="gallery-item">
        <img src="{{ site.baseurl }}/assets/images/NightOps_1.jpg" alt="Project 1" onclick="openLightbox(this)">
        <p></p>
    </div>
</div>


<!-- Lightbox Modal -->
<div id="lightbox" class="lightbox" onclick="closeLightbox()">
    <span class="close">&times;</span>
    <img id="lightbox-img" class="lightbox-content">
</div>


## Inspiration
The inspiration for this game came from my love of competitive shooters, particularly *Counter-Strike*. I wanted to capture the same sense of precision and tension but in a way that felt unique to our platform. Additionally, I drew inspiration from real-world architecture and floor plans during the level design phase, as my wife and I were house hunting at the time. The layouts of actual homes influenced the design of the in-game houses, making them feel more authentic and functional.

---


## Technologies Used
- Unity
- C#
- Blender

---

## Development Process

## Weapon Design
One of the key areas I wanted to improve was weapon variety and gunplay. In our original deathmatch game, the weapon LUA script was robust and allowed for a wide range of weapon types, but we didn’t fully explore its potential. For this project, I created **nine unique weapons**, each with distinct characteristics and handling. This ensured that players could experiment with different playstyles and find weapons that suited their preferences. The emphasis was on **accuracy and tight gunplay**, making every shot feel impactful and rewarding.

## Level Design
The initial concept for the game environment was a single large house. However, after creating a prototype with blocky stand-in graphics, I realized the design didn’t flow well. Playtesters tended to camp in one spot, waiting for others to pass by, which led to stagnant and unengaging gameplay. To address this, I reimagined the environment as a **neighborhood with multiple houses**, each serving as a spawn point. This created a **funnel effect**, naturally drawing players into conflict and encouraging movement.

Each house was designed to feel unique, helping players orient themselves quickly after spawning or respawning. I paid close attention to ensuring that the floorplans were logical and functional, drawing inspiration from real-world house layouts. My wife and I playtested extensively, iterating on furniture placement and scale to ensure the spaces felt realistic and flowed well for gameplay.

## Playtesting and Iteration
Playtesting was a critical part of the development process. Early on, it became clear that the single-house design didn’t work, so I pivoted to the neighborhood concept. My wife and I spent countless hours testing each house, both empty and furnished, to ensure the layouts were intuitive and the gameplay was dynamic. This iterative process helped me refine the level design and create an environment that was both visually interesting and fun to play in.

---

## Key Features
- **Nine Unique Weapons**: Each weapon feels distinct, offering players a variety of playstyles.
- **Neighborhood Map Design**: Multiple houses with unique layouts encourage exploration and dynamic gameplay.
- **Realistic Floorplans**: Inspired by real-world architecture, the houses are designed to feel authentic and functional.
- **Tight Gunplay**: Emphasis on accuracy and precision, creating a satisfying combat experience.

---

## My Role
- Gameplay Programmer
- Level Designer
---

## Challenges and Solutions

1. **Stagnant Gameplay in Single-House Design**:
   - *Challenge*: Players tended to camp in one spot, leading to slow and unengaging matches.
   - *Solution*: Redesigned the environment as a neighborhood with multiple houses, creating natural funnels for player movement and conflict.

2. **Weapon Variety**:
   - *Challenge*: The original game lacked weapon diversity, limiting player options.
   - *Solution*: Leveraged the robust LUA scripting system to create nine unique weapons, each with distinct characteristics.

3. **Level Layout and Scale**:
   - *Challenge*: Ensuring the houses felt unique and logically laid out while maintaining proper scale for gameplay.
   - *Solution*: Drew inspiration from real-world floor plans and conducted extensive playtesting with my wife to refine the layouts.

---

## Links
- [Play the Game](https://massiveloop.com/world/a8f4d345-b05d-4658-89d4-9a38cff21891){:target="_blank" rel="noopener noreferrer"}
- [View on GitHub](https://github.com/BrandonW24/NightOpsCodeBase){:target="_blank" rel="noopener noreferrer"}