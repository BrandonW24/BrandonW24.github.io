---
layout: default
title: Project Title 1
---

## Gunfire Inc.


## Overview
My goal with the creation and development of this game is to scratch an itch of mine that a lot of other games can't quite reach. I love looter shooters, its one of my favorite genres!
I set out wanting to create a game that evokes the essence of Borderlands 1, and borrow a few concepts from Diablo 2 in how the player's stats and loot rolls operate. I wanted to make something that had its own visual identity that was also separate from my prior projects that often reach for a more realistic looks.
Prior to this game, I had worked fairly extensively on other PvE projects for Massive Loop. Those projects were The Cursed Graveyard, Impiety, and Skul'Ras. Each time I began a new fresh project
I found that I would often learn and improve so much more than iterating directly ontop of an ongoing project. I do often return to my older projects to fix any ongoing bugs or integrate a new fun idea to keep things fresh!

A goal of mine here is to learn more extensively how to craft gameplay systems that can be interlaced with multiplayer functionality. Where my previous PvE projects did have some minor elements of multiplayer capabilities, an explicit goal for this project was to create it in such a way with mutliplayer in mind. I found that if I started a project without multiplayer in mind, it is often hard to convert solid singleplayer functionality to work with multiple clients in the picture.

It is indeed quite a challenge to keep each and every data point synchronized between individual clients but I believe, with this game in particular, that I have designed a system that is more
than capable of sustaining upwards of 6 co-op players against AI opponents.

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
- Completely Synchronized Multiplayer Functionality
- Dynamic Enemy AI
- Comic Book Style Graphics Shader
- Randomly Generated Guns and Loot
- Meaningful Progression Player Driven Systems

## Technologies Used
- Unity
- C#
- Blender
- Massive Loop SDK
- Visual Studio

## My Role
- Solo Developer 
- Programmer
- System Designer
- Level Designer

## Challenges & Solutions
A large challenge on the onset of this game was tackling how to face multiplayer functionality. In my prior games, The Cursed Graveyard, Impiety, and Skul'Ras-- those were programmed in LUA, and had very specific methods that would enable developers to easily create multiplayer functionality. Unlike the previous PvE projects I have worked on, I chose to write this one in C#.
Since then we at Massive Loop have integrated a new shiny C# compiler that enables so much more creativity and dynamic code from developers. Setting up networking multiplayer structure is quite a bit different from how it is done in LUA. Switching from developing in LUA to C# was a bit of a challenge in its own right, but they are similar enough and I always love to re-learn programming languages. 

## Development Log Video Series

<div class="video-gallery">
    <div class="video-gallery-item">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3-vVpFSisxE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>From Feb. 19th, 2025</p>
    </div>
    <div class="video-gallery-item">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Hgjjfns1nXw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>From Feb. 7, 2025</p>
    </div>
    <div class="video-gallery-item">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dnzlw88Q8FI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>From Dec. 31, 2024</p>
    </div>
</div>


## Links
- [Play the Game](https://massiveloop.com/world/efbed9c0-c0c8-4ecf-b722-6a3f0a2e1d4e){:target="_blank" rel="noopener noreferrer"}
- [View on GitHub](https://github.com/BrandonW24/Brandons_MassiveLoop_CSharp_Scripts){:target="_blank" rel="noopener noreferrer"}