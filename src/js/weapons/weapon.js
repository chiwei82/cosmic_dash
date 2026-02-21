// Base Weapon Class

class Weapon {
    constructor(owner) {
        this.owner = owner; // reference to the spaceship
    }

    fire(projectile_list) {}

    stopFiring(projectile_list) {}

    update(projectile_list) {}
}