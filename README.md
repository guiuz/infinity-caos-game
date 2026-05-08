🔲 [SYSTEM.LOG] Infinity Chaos // v0.9

"Welcome to the Grid. The arena is active. The AIs are hunting. Survive."

Infinity Chaos is a relentless top-down arcade experience. Natively developed in HTML5 Canvas and pure JavaScript, this project pushes the player into a cyberpunk procedural world where constant movement is the only way to escape elimination.

⚡ SYSTEM PROTOCOLS (Features)

🌍 Dynamic Biome Generation: The arena (4000x4000) reconfigures itself into tactical combat zones: Open Arenas, Reflection Mazes, Minefields, and Dead Zones.

💥 Pulse Mutation [CRITICAL]: Every 50s, an anomaly sweeps across the arena. Anything not behind cover is vaporized. The environment undergoes instant mutation.

⏳ Neural Overdrive (Adrenaline Mode): Time slows down when danger detection is imminent. Use this window to execute perfect evasive maneuvers.

🏆 Global Sync: Direct integration with Firebase (Firestore) servers for real-time score tracking. The Top 10 dictates who dominates the network.

🕹️ OPERATOR INTERFACE (How to Play)

Your mission is to assimilate Data Targets (Roses) as quickly as possible to scale the Combo multiplier while avoiding annihilation.

[NAVIGATION CONTROLS]

🖥️ Desktop: The avatar follows the cursor vector. [LEFT CLICK] to activate the Dash.

📱 Mobile: Touch interface (left joystick) + dedicated Dash button.

[SUPPORT FILES - POWERUPS]

🟢 Aegis (Shield): Blocks the next instance of fatal damage.

🔵 Overclock (Speed): Amplifies mobility and intensifies the photon trail.

🟠 Singularity (Bomb): Eradicates low-class threats in a large radius.

⚠️ THREAT REGISTER (Enemy AIs)

The system adapts to your efficiency. Higher-level threats are injected into the arena according to your Score.

[TYPE: CHASER] 🔴 Normal: Basic vector-based pursuit entity.

[TYPE: ARTILLERY] 🟡 Sniper: Immobile. Fires high-speed energy beams. Warning: Projectiles ricochet off blue surfaces.

[TYPE: VOID] 👻 Phantom: Purple anomaly. Ignores geometric collisions. Spectral pursuit.

[TYPE: SABOTEUR] 💣 Mine Layer: Evades player approach and leaves trails of volatile explosives with a timer.

[TYPE: PRECOGNITIVE] 🎯 Hunter AI: Calculates future vectors. Intercepts your trajectory instead of following you.

[TYPE: ZEALOT] 🚀 Kamikaze: Flashes pink/white. Overloads the engine and charges at extreme speeds. Detonates on impact.

👑 APEX ENTITIES (Bosses)

Massive incursion warning every 100 points:

[THE ARCHITECT] (Cyan): Matrix manipulator. Forces inert obstacles to move and builds containment barriers around the target.

[SNIPER GOD] (Red): Fires fan-shaped bursts (3 lasers) that bounce across the map. Uses quantum translocation (teleportation) after each attack.

⚙️ DATA ARCHITECTURE (Tech Stack)

No external graphical frameworks were used. Built for maximum "bare-metal" performance:

Rendering Engine: HTML5 <canvas> with custom procedural particle routines.

Core Logic: Vanilla JavaScript (OBB collision physics, Vector AI, Animation Loop).

Soundscape: Real-time audio synthesis via Web Audio API (Zero external audio assets).

Backend: Firebase v11 (Anonymous Auth + secure Firestore rules for the Leaderboard).

🔌 STARTING SEQUENCE (Local Setup)

The project is "Plug & Play".

Clone or download the files.

Run the square.html file in a modern browser (Chrome/Edge/Firefox recommended).

Connect and try to master the Grid.

"End of Transmission." // Developed with lots of Adrenaline and Coffee. Report bugs on our Discord.
