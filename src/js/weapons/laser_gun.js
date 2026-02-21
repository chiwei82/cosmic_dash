class LaserGun extends Weapon {
    constructor(owner) {
        super(owner);
        this.laserWidth = 3;
    }

    fire(projectile_list) {
        projectile_list.push(new LaserProjectile(
            this.owner.x + this.owner.shipWidth / 2,
            this.owner.y,
            this.laserWidth
        ));
    }

    stopFiring(projectile_list) {
        // remove this weapon's projectile from the list
        for (let i = projectile_list.length - 1; i >= 0; i--) {
            if (projectile_list[i] instanceof LaserProjectile) {
                projectile_list.splice(i, 1);
            }
        }
    }

    update(projectile_list) {
        for (let p of projectile_list) {
            if (p instanceof LaserProjectile) {
                p.updateOrigin(this.owner.x + this.owner.shipWidth / 2, this.owner.y);
                p.updateEnd(width, this.owner.y);
            }
        }
    }
}