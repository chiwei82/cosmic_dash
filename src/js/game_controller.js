class GameController {
    constructor(state) {
        this.state = state;
    }

    init() {
        // Initialize starting objects, like ship
        this.state.ship = new Spaceship(100, height / 2);
    }

    update() {
        // Update all object positions
        // Check game ended
        // Spawn new objects
        // Check collisions
        if (this.state.gameOver) return;
        this.state.ship.update(this.state.projectiles);
        // this.updateProjectiles();
        this.updateDebris();
        this.handleSpawning();
    }


    // --- ENTITY UPDATES ---
    // updateProjectiles() {
    //     for (let p of this.state.projectiles) {
    //         p.update();
    //     }
    //     this.state.projectiles = this.state.projectiles.filter(p => p.active);
    // }

    updateDebris() {
        for (let d of this.state.debris) {
            d.updatePosition();
        }
        this.state.debris = this.state.debris.filter(d => d.x > -30 && d.isActive);
    }

    handleSpawning() {
        this.state.spawnTimer++;
        if (this.state.spawnTimer >= this.state.spawnInterval) {
            this.state.spawnTimer = 0;
            this.spawnDebris(false);
        }
    }

    spawnDebris(isInitialSetup) {
        let x = isInitialSetup ? random(width / 2, width) : width + 50;
        let y = random(height);
        let size = random(15, 40);
        let type = Math.floor(random(2));

        let newDebris;
        switch (type) {
            case 0:
                newDebris = new SpaceHazard(x, y, size);
                break;
            case 1:
                newDebris = new SpaceJunk(x, y, size);
                break;
            default:
                newDebris = new SpaceHazard(x, y, size);
        }

        this.state.debris.push(newDebris);
    }


    // --- INPUT ---
    keyPressed(key) {
        if (key === ' ') {
            this.state.ship.weapon.fire(this.state.projectiles);
        }
    }

    keyReleased(key) {
        if (key === ' ') {
            this.state.ship.weapon.stopFiring(this.state.projectiles);
        }
    }
}