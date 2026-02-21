// Base Weapon Class

class Weapon {
    constructor(owner) {
        this.owner = owner; // reference to the spaceship
        this.projectiles = [];
    }

    fire() {}

    update() {}

    show() {}
}