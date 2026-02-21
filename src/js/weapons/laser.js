class Laser extends Weapon {
    constructor(owner) {
        super(owner);
        this.color = '#281E5D';
        this.strokeWeight = 3;
        this.speed = 10;
        this.damage = 1;
    }

    fire() {
        this.projectiles.push({
            x: this.owner.x + this.owner.shipWidth / 2 + 20,
            y: this.owner.y,
            vx: this.speed
        });
    }

    update() {
        // Move projectiles and delete off-map
        this.projectiles = this.projectiles
            .filter(p => p.x < width)
            .map(p => ({ ...p, x: p.x + p.vx }));
    }

    show() {
        push();
        stroke(this.color);
        strokeWeight(this.strokeWeight);

        // Draw laser as a bunch of lines
        for (let p of this.projectiles) {
            line(p.x, p.y, p.x - 20, p.y);
        }

        pop();
    }
}