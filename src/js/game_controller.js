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
        this.weaponActive = false;
        this.state.weapon = this.weapons[this.currentWeaponIndex];
    }

    update() {
        // Update all object positions
        // Check game ended
        // Spawn new objects
        // Check collisions
        if (this.state.gameOver) return;

        if (this.state.ship.health <= 0) {
            this.state.gameOver = true;
            console.log('Game Over!');
            return;
        }

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
        if (keyIsPressed && key === ' ') {
            this.weaponActive = true;
            if (this.currentWeaponIndex === 1) {
                let x1 = width;
                for (let item of this.state.spaceItem) {
                    if (this.checkCollisions(this.state.weapon, item)) {
                        x1 = itemBox.left;
                        // break;
                    }
                }
                this.state.weapon.updatePosition(x1);

            }
            else if (this.currentWeaponIndex === 0) {
                for (let item of this.state.spaceItem) {
                    this.checkCollisions(this.state.weapon, item);
                }
                this.state.weapon.updatePosition();
            }
        }

        else {
            this.weaponActive = false;
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
            if (item instanceof SpaceHazard && item.health <= 0) {
                this.state.score += 5;
            }
            else if (item instanceof SpaceJunk && item.health <= 0) {
                this.state.score += 20;
            }
            // Penalize score if SpaceJunk escapes off screen
            else if (item instanceof SpaceJunk && item.x <= -30) {
                this.state.score -= 10;
            }
        }
        this.state.spaceItem = this.state.spaceItem.filter(d => d.x > -30 && d.isActive);
    }

    checkCollisions(object1, object2) {
        // object1 and object2 must have getBoundingBox() methods
        // getBoundingBox returns a dict with .left, .right, .top, .bottom attributes
        let object1Box = object1.getBoundingBox();
        let object2Box = object2.getBoundingBox();
        if (object2Box.left < object1Box.right &&
            object2Box.right > object1Box.left &&
            object2Box.top < object1Box.bottom &&
            object2Box.bottom > object1Box.top) {

            if (object1 instanceof Spaceship && object2 instanceof SpaceHazard && object2.isActive) {
                this.state.ship.health -= 1;
                object2.isActive = false;
                return;
            }

            if (!this.weaponActive) return true;

            if (object2 instanceof SpaceHazard && typeof object2.takeDamage === 'function' && this.currentWeaponIndex === 1) {
                object2.takeDamage(0.1);
            }

            if (object2 instanceof SpaceJunk && typeof object2.takeDamage === 'function' && this.currentWeaponIndex === 0) {
                object2.takeDamage(0.5);
            }


        }
    }

    // Helper

    handleSpawning() {
        this.state.spawnTimer++;
        if (this.state.spawnTimer >= this.state.spawnInterval) {
            this.state.spawnTimer = 0;
            this.spawnSpaceItem(false);
            console.log('Spawning');
        }
    }

    spawnSpaceItem(isInitialSetup) {
        let x = isInitialSetup ? random(width / 2, width) : width + 50;
        let y = random(height);
        let roll = random(1);

        let newSpaceItem;
        if (roll < 0.75) {
            newSpaceItem = new SpaceHazard(x, y, this.state.rockImg);
        } else {
            newSpaceItem = new SpaceJunk(x, y, this.state.fragImg);
        }

        this.state.spaceItem.push(newSpaceItem);
    }
}