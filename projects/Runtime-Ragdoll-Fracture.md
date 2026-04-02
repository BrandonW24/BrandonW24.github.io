---
layout: default
title: Runtime Ragdoll & Procedural Fracturing
---

## Runtime Ragdoll, Procedural Mesh Fracturing & Softbody Damage Systems
This project introduces a highly complex, real-time physics and destruction engine designed for a synchronized multiplayer environment. It consists of three seamlessly integrated systems: a dynamic avatar cloner that auto-generates anatomically correct ragdolls from any humanoid SkinnedMeshRenderer, a procedural mesh slicing engine capable of volumetric CSG carving, and a performant softbody deformation system for vehicles and dynamic props.

---



<div class="video-carousel">
    <button class="carousel-arrow left-arrow" onclick="prevVideo()">&#9665;</button>
    <div class="video-container">
        <iframe id="video-frame" src="https://www.youtube.com/embed/DRTKVYvbR9w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p id="video-caption" style="font-weight: bold;">Runtime Ragdoll Overview</p>
    </div>
    <button class="carousel-arrow right-arrow" onclick="nextVideo()">&#9655;</button>
    <div class="carousel-dots">
        <span class="dot active" onclick="setVideo(0)"></span>
        <span class="dot" onclick="setVideo(1)"></span>
        <span class="dot" onclick="setVideo(2)"></span>
    </div>
</div>

## Technical Breakdown

### **1. Dynamic Avatar Cloning & Ragdoll Generation**
Creating ragdolls at runtime from arbitrary player avatars requires precise mathematical mapping rather than pre-authored prefabs. 
- **Algorithmic Joint Mapping:** The system iterates through the `HumanBodyBones` enum, dynamically extracting transforms. It calculates world-distance between parent and child bones to automatically size, scale, and orient `CapsuleColliders` (e.g., determining whether a bone requires an X, Y, or Z directional alignment).
- **Anatomical Physics Constraints:** `CharacterJoints` are instantiated programmatically. I mapped specific `SoftJointLimit` parameters (low twist, high twist, swing limits) based on bone types to prevent unnatural bending (e.g., locking knee and elbow axes while allowing spherical rotation at the shoulders and hips).
- **Custom VR Grab Physics:** Standard VR grabbing of heavy, multi-jointed rigidbodies often results in rubber-banding or extreme physics jitter. I engineered a `RagdollGrabHelper` that spawns a `ConfigurableJoint` at the grab point. By applying extreme mass scaling (100x) to the connected body and temporarily spiking the angular/linear drag on the grabbed bone, the system acts as a shock absorber, allowing smooth, weight-simulated dragging without breaking the solver.

### **2. Real-Time Procedural Mesh Slicing (Planar)**
When a high-velocity impact is detected, the fracture system slices the mesh dynamically without relying on pre-fractured assets.
- **Asynchronous Processing:** Slicing complex meshes blocks the main thread. I built a `fractureQueue` processed via coroutines. The `MiniSlicer` tracks execution time per frame (`MAX_TIME_PER_FRAME_MS`), yielding execution back to the engine if it exceeds the budget, maintaining a smooth framerate.
- **Triangle Intersection Math:** The algorithm evaluates every vertex against an intersection `Plane`. If a triangle spans the plane, the system calculates the exact intersection points using linear interpolation (`Vector3.Lerp`) along the edges, splitting the triangle into three new sub-triangles while perfectly interpolating their UVs and Normals.
- **Dynamic Hole Capping:** After a slice, the mesh is left hollow. I implemented an edge-loop tracing algorithm that finds all open boundary edges, connects them into a closed loop, calculates the centroid, and generates a fanned triangle cap facing the cut plane's negative normal.

### **3. Volumetric Carving (CSG & BSP Trees)**
Beyond planar slicing, the system supports taking physical "bites" or chunks out of meshes.
- **Binary Space Partitioning (BSP):** The CSG (Constructive Solid Geometry) engine converts Unity meshes into a tree of nodes and polygons. 
- **Boolean Subtraction:** By mathematically inverting the target mesh, clipping it against the cutter mesh, and rebuilding the polygons, the system performs true boolean subtraction at runtime. 
- **Crumble Logic:** A dedicated routine can be triggered to systematically identify the largest piece of a mesh and repeatedly apply randomized slicing planes until a target piece-count is reached, simulating complete structural collapse.

### **4. Real-Time Softbody Deformation (Vehicle Damage)**
To simulate localized metal crumpling and denting upon impact, I engineered a highly optimized vertex-displacement system.
- **Adjacency Graph Caching:** On initialization, the system parses the mesh's triangle arrays to build a `VertexNeighbors` map (an adjacency list). This prevents the need to run expensive vertex-proximity searches during active gameplay.
- **Localized Deformation Math:** Upon collision, the system transforms impact velocities into local space and iterates over nearby vertices. It applies a squared falloff formula based on the vertex's distance from the impact epicenter, smoothly displacing the geometry while hard-clamping to a `maxPossibleDepth` to prevent inside-out geometry.
- **Laplacian Smoothing (Anti-Spiking):** Displacing vertices directly often creates jagged, unrealistic spikes. Utilizing the cached adjacency graph, the system runs a smoothing iteration over the affected area, interpolating deformed vertices toward the average position of their immediate neighbors to maintain natural, crumpled curves.
- **Asynchronous Batch Updating:** Rebuilding a `MeshCollider` and recalculating normals is incredibly taxing on the CPU. Instead of updating the mesh immediately on every physics tick, the collision script flags the part as "dirty." A background coroutine processes all dirty meshes at a fixed 10Hz interval, drastically reducing overhead while maintaining visual fidelity.

### **5. Integration & Network Synchronization**
- **Collision Relays & Proxies:** Modular objects like cars and ragdolls use `CollisionProxy` and `FractureCollisionRelay` components on their child colliders. This allows complex, multi-part hierarchies to listen for discrete impacts and route the data (point, normal, velocity) back to a centralized manager script for synchronized processing.
- **Mesh Data Extraction:** The system can successfully bake and extract static mesh data from actively animating `SkinnedMeshRenderers` right at the moment of impact to ensure the fractured pieces perfectly match the avatar's pose.

---

## Technologies Used
- **Unity (C#):** Core engine, physics solver, and mesh generation API.
- **CSG Algorithms:** Custom implementations of boolean mesh operations using BSP.
- **Asynchronous Programming:** Coroutine-based time-slicing and batch processing for heavy topology calculations.

## My Role
- Physics & Systems Engineer

<script>     const videos = [         { src: "https://www.youtube.com/embed/DRTKVYvbR9w", caption: "Runtime Ragdoll Overview" },         { src: "https://www.youtube.com/embed/iqv8YVANCNg?si=yGqixcs8vqKHBs-O", caption: "Softbody Vehicle Damage" },         { src: "https://www.youtube.com/embed/qMM47nZQPXQ?si=S9XCplKsN6yyuARC", caption: "Procedural Mesh Fracturing" }     ];      let currentVidIndex = 0;     const iframe = document.getElementById("video-frame");     const caption = document.getElementById("video-caption");     const dots = document.querySelectorAll(".carousel-dots .dot");      function updateCarousel(index) {         currentVidIndex = index;         iframe.src = videos[currentVidIndex].src;         caption.innerText = videos[currentVidIndex].caption;                  dots.forEach(dot => dot.classList.remove("active"));         if(dots[currentVidIndex]) {             dots[currentVidIndex].classList.add("active");         }     }      function prevVideo() {         let newIndex = (currentVidIndex === 0) ? videos.length - 1 : currentVidIndex - 1;         updateCarousel(newIndex);     }      function nextVideo() {         let newIndex = (currentVidIndex === videos.length - 1) ? 0 : currentVidIndex + 1;         updateCarousel(newIndex);     }      function setVideo(index) {         updateCarousel(index);     } </script>