---
layout: default
title: Project Title 1
---

## Gunfire Inc.

<div class="project">
![Project Screenshot]({{ site.baseurl }}/assets/images/project1.jpg)
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

    subgraph Loot & Perks
        E --> M[Randomized Loot Drop]
        M --> N{Perks Available?}
        N -- Yes --> O[Choose Randomized Perk]
        N -- No --> P[Keep Loot]
        O --> P
        P --> I
    end

    subgraph Leveling Up
        G --> Q[Increase Player Level]
        Q --> R[Unlock New Skills/Abilities]
        R --> H
    end
</div>

---
## Explanation of the Flow Chart

Start Game: The player begins the game and selects a mission or area to enter.

Enter Mission/Area: The player loads into the mission or game area.

Engage Enemies: The player encounters and fights enemies.

Kill Enemies?: The player must defeat enemies to progress.

Yes: The player gains EXP and loot.

No: The player can retry the mission or exit.

Gain EXP & Loot: The player earns experience points (EXP) and random loot from defeated enemies.

Level Up?: The game checks if the player has enough EXP to level up.

Yes: The player levels up and can allocate skill points.

No: The player proceeds to check loot and perks.

Allocate Skill Points: The player spends skill points to upgrade abilities or stats.

Check Loot & Perks: The player reviews the loot and any available perks.

Equip New Gear?: The player decides whether to equip new gear.

Yes: The player upgrades their character with new gear.

No: The player proceeds to the next mission.

Proceed to Next Mission: The player moves on to the next mission or area, repeating the loop.

Loot & Perks Subgraph
Randomized Loot Drop: Enemies drop random loot, which may include weapons, armor, or other items.

Perks Available?: The game checks if any randomized perks are available.

Yes: The player chooses a perk from a random selection.

No: The player keeps the loot without selecting a perk.

Choose Randomized Perk: The player selects a perk that enhances their abilities or stats.

Keep Loot: The player retains the loot and proceeds to check their inventory.

Leveling Up Subgraph
Increase Player Level: The player's level increases, unlocking new skills or abilities.

Unlock New Skills/Abilities: The player gains access to new skills or abilities that can be upgraded with skill points.

Allocate Skill Points: The player spends skill points to enhance their character.

This flow chart represents a typical gameplay loop for a Looter Shooter RPG FPS game, emphasizing progression through combat, loot acquisition, and character customization.

## Features
- Feature 1
- Feature 2
- Feature 3

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