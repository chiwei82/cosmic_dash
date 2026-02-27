# Cosmic Dash

Cosmic Dash — a space junk cleanup game made in under 24 hours for BrisHack 2026.

Overview
- Pilot a spaceship through a hazardous stretch of space.
- Dodge or destroy asteroids (space hazards) while collecting floating space junk to increase your score.
- If space junk drifts past you, points are penalized.
- Three asteroid hits ends the run.

Gameplay
- Destroying asteroids: +5 points (asteroids have health).
- Collecting space junk: +20 points.
- Space junk escaping off-screen: -10 points.
- Ship health depletes on asteroid collision; game ends when health reaches zero.

Controls
- Hold Space to activate your current weapon (fire/collect).
- Press `s` to switch between weapons.
- Move the ship using the UP/DOWN arrow keys.

Tech & Structure
- Built with JavaScript and p5.js
- UI components built with Three.js

How to Launch
- Visit https://chiwei82.github.io/cosmic_dash/, or
- Run locally (from repo root, Linux):
  - python3 -m http.server 8000
  - Open http://localhost:8000/docs

Development Notes
- Core systems implemented: spaceship, weapons (two types), spawning hazards/junk, collision handling, scoring, UI and game-over flow.
- Designed and prototyped during a one-day hack; emphasis on rapid iteration and playable mechanics.

Team & Hackathon Experience
- Built by a team of four at BrisHack 2026.
- The sprint improved our teamwork and version-control workflows under real constraints.
- Appreciated the networking, feedback, and learning opportunities the event provided.

Notes
- This repo contains the hackathon build; the project is a prototype and may contain rough edges intended for rapid demo and iteration.