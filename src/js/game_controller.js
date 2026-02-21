class GameController {
    constructor(state) {
        this.state = state;
    }

    init() {
        // Initialize starting objects, like ship
        this.state.ship = new Spaceship(100, height / 2);
        this.state.ship.load();

        this.weapons = [
            new JunkVacuum(this.state.ship),
            new Laser(this.state.ship)
        ]
        this.currentWeaponIndex = 0;
        this.state.weapon = this.weapons[this.currentWeaponIndex];
    }

    update() {
        // Update all object positions
        // Check game ended
        // Spawn new objects
        // Check collisions
        if (this.state.gameOver) return;

        this.updateSpaceship();
        this.updateWeapon();
        this.updateSpaceItems();
    }

    handleKeyPressed() {
        if (key === 's') {
            this.handleWeaponSwitch();
        }
    }


    // --- ENTITY UPDATES ---
    updateSpaceship() {
        this.state.ship.updatePosition();
    }

    updateWeapon() {
        // If space bar is being pressed, update the position of weapon
        // Draw is handled in game_view.js
        if (keyIsPressed && key === ' ' && this.currentWeaponIndex === 1) {
            let x1 = width;
            for (let item of this.state.spaceItem) {
                if (this.checkCollisions(this.state.weapon, item)) {
                    x1 = itemBox.left;
                    break;
                }
            }
            this.state.weapon.updatePosition(x1);

        }
        else if (keyIsPressed && key === ' ' && this.currentWeaponIndex === 0) {
            this.state.weapon.updatePosition();
        }
        else {
            this.state.weapon.clear();
        }
    }

    handleWeaponSwitch() {
        this.state.weapon.clear();
        this.currentWeaponIndex = (this.currentWeaponIndex + 1) % this.weapons.length;
        this.state.weapon = this.weapons[this.currentWeaponIndex];
    }

    updateSpaceItems() {
        this.handleSpawning();
        for (let item of this.state.spaceItem) {
            item.updatePosition();
            this.checkCollisions(this.state.ship, item);
        }
        this.state.spaceItem = this.state.spaceItem.filter(d => d.x > -30 && d.isActive);
    }

    checkCollisions(object1, object2) {
        let object1Box = object1.getBoundingBox();
        let object2Box = object2.getBoundingBox();
        if (object2Box.left < object1Box.right &&
            object2Box.right > object1Box.left &&
            object2Box.top < object1Box.bottom &&
            object2Box.bottom > object1Box.top) {
            let index = this.state.spaceItem.indexOf(object2);
            this.state.spaceItem.splice(index, 1);
        }
    }

    // Helper

    handleSpawning() {
        this.state.spawnTimer++;
        if (this.state.spawnTimer >= this.state.spawnInterval) {
            this.state.spawnTimer = 0;
            this.spawnSpaceItem(false);
        }
    }

    spawnSpaceItem(isInitialSetup) {
        let x = isInitialSetup ? random(width / 2, width) : width + 50;
        let y = random(height);
        let type = Math.floor(random(2));

        let newSpaceItem;
        switch (type) {
            case 0:
                newSpaceItem = new SpaceHazard(x, y);
                break;
            case 1:
                newSpaceItem = new SpaceJunk(x, y);
                break;
            default:
                newSpaceItem = new SpaceHazard(x, y);
        }

        this.state.spaceItem.push(newSpaceItem);
    }
}