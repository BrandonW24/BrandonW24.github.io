---
layout: default
title: Fruit Dojo
---

## Fruit Dojo
**The fruit dojo** is a multiplayer hack and slash VR game where players collaborate to survive waves of fruits and vegetables that are being thrown at them. Be careful of the bombs! The game supports **cross-platform play**, allowing users in **VR**, and **desktop** mode to slash fruits in half together in real-time.

## Overview
## Gameplay Trailer  
<div class="video-container">
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/FB5wD8z3NSU" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

**Purpose, Inspiration, and Goals**
---

**Inspiration**

**Fruit Dojo** was born from a love of fast-paced, physics-driven VR experiences like *Beat Saber* and *Fruit Ninja*, combined with the chaotic fun of multiplayer collaboration. I wanted to create a game where players could step into a vibrant dojo, wield virtual blades, and slice through waves of flying fruits with friends. Regardless of whether they were playing in VR or on desktop. The addition of bombs and special fruits (like explosive bomb-fruit or multiplier-boosting pumpkins) added a layer of strategy, ensuring the game felt fresh with every session.

**Purpose**

The goal was to bridge the gap between VR and traditional gaming by designing a **cross-platform** experience that emphasized teamwork, precision, and fun absurdity. By supporting both VR and desktop players, I aimed to make the game accessible to a wider audience while preserving the visceral satisfaction of slicing a watermelon in half with a virtual katana. The dynamic difficulty system and unlockable weapons were added to reward skill and keep players engaged long-term. I felt that our metaverse at Massive Loop needed a game like this. 

**Goals**

1. **Immersion**: Make every slash feel impactful with haptic feedback, realistic fruit physics, and synchronized multiplayer actions.
2. **Accessibility**: Ensure non-VR players could enjoy the game with intuitive mouse/swipe controls and screen-shake effects.
3. **Replayability**: Use randomized fruit waves, leaderboards, and "ghost" replays to foster competition and community.
4. **Performance**: Optimize for VR’s demanding hardware requirements with GPU instancing and object pooling.

At its core, **Fruit Dojo** is about having fun cutting fruit in half with or without friends. Where players can laugh at mistimed swings, cheer for last second saves, and chase high scores together.




---
## Key Features

- **Cross-Platform Multiplayer**: Seamless gameplay across VR, desktop platforms.
- **Interactive Fruit Cutting Mechanics**: Chop, slice, slash. Each action is synchronized across clients!
- **Dynamic Scoring System**: Each fruit will grant the player a certain amount of points, as well as a minor accumulating multiplier for consecutive hits. Pumpkins apply a 2x multiplier on top of the player's current multiplier.
- **Customizable Difficulty**: As the player's get deeper into the waves, the speed of the fruit gets faster dynamically depending on how well the players are doing.



---

## Technologies Used
- **Unity**: Game engine for development.
- **C#**: Primary scripting language.
- **Photon Unity Networking (PUN)**: Multiplayer synchronization.
- **ML-SDK**: Integration for VR platforms (e.g., Oculus, SteamVR).


## My Role
- Gameplay Programmer
- Game Designer
- Environment

## Challenges and Solutions

1. **Accurate Fruit Physics & Cutting Detection**

   - **Challenge**: Ensuring fruits react realistically when sliced and detecting precise cuts.

   - **Solution**:

     - Used **Unity’s PhysX** with **mesh slicing** to dynamically split fruits.

     - Implemented **trajectory-based cutting detection** (comparing blade angle, speed, and contact points) for satisfying cuts.

       

2. **Performance Optimization for VR**

   - **Challenge**: Maintaining high FPS in VR with multiple sliced fruit pieces.

   - **Solution**:

     - Implemented **object pooling** for fruit halves to reduce instantiation overhead.

     - Used **GPU instancing** for rendering duplicate fruit models efficiently.

       

3. **Engaging Progression System**

   * **Challenge**: Preventing repetitive gameplay after prolonged play.

   * **Solution**:

     - Added **unlockable blades** (e.g., katana, lightsaber) with unique effects.

     - Introduced **special fruits** (explosive, time-slowing, or multi-slice fruits) in later levels.

       

   4**. Multiplayer Leaderboards & Ghosts**

   - **Challenge**: Encouraging competition without real-time multiplayer complexity.
   - **Solution**:
     - Implemented **asynchronous cloud data** (recording top players’ fruit-slashing patterns).

   

   5**. Accessibility for Non-VR Players**

   - **Challenge**: Making the game enjoyable for desktop users without VR immersion.
   - **Solution**:
     - Designed **mouse/swipe-based controls** with adjustable sensitivity.
     - Added **camera shake & hit-stop effects** to enhance feedback.

   

## Links
- [Play the Game]((https://massiveloop.com/world/bc84790d-b4ce-472c-8eb0-fc911ca4db87)){:target="_blank" rel="noopener noreferrer"}
- [View on GitHub](https://gitfront.io/r/BrandonW24/iXvRRiq2iycM/Momo-Space-Diner-Code-Repo/){:target="_blank" rel="noopener noreferrer"}