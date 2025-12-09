---
layout: default
title: Driving_Range
---

## Driving Range
A mutliplatform golf driving range game where players can hangout together, participate in games or just practice their drive!

## Overview

This was a fun project that I wanted to make that would test my foundational knowledge of Unity based physics. With that base, I wanted to see if I could create a golf driving system that felt both good and fun to play and be in. I opted to have a more simplistic environment to help players load into the game world quicker and help overall performance. Initially, for calculating physics and hit timings, I was using the Unity collision system. This turned out to become a bit inaccurate when attempting to accurately gauge when the player will hit the ball, with how much force, and how far the ball should go in reaction to the player's club head.

To solve this, I decided to run a custom sphere physics cast between the club head and the club's assigned ball. With this, I was able to more accurately tell when the player hits the ball, and with how much force should be applied to the ball.

---




## Brief  Video Demonstration 
<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/1_7LM1rJalM?si=0qcPucDYjRJeA9Ou" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


---

## Features
- Intuitive VR & PC Desktop Control Scheme
- A fun spin on the normal driving range experience
- 14 bays
- Left and right handed clubs
- Individual and localized golf ball cameras to view your superb shot
- Customizable golf club sizes
- Customizable golf ball speed scaler
- Customizable golf ball colors
- Custom synchronized physics interactions
- Multiplayer synchronization

## Technologies Used
- Unity
- C#
- Blender
- Massive Loop SDK

## My Role
- Gameplay Programmer
- Level Designer
- 3d modeler

## Links
- [Play the Game](https://massiveloop.com/world/bef7df03-9694-4250-b87b-896205d9d5c7){:target="_blank" rel="noopener noreferrer"}
- [View on GitHub](https://gitfront.io/r/BrandonW24/bR6R7Q4emNvo/Brandons-MassiveLoop-CSharp-Scripts/){:target="_blank" rel="noopener noreferrer"}