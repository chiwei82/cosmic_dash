class SpaceJunk extends SpaceItem {
    constructor(x, y) {
        super(x, y, 1.5, 15);
        this.health = 2; // Requires multiple hits to destroy
        this.maxHealth = 2;
        this.color = color(0, 100, 255);
    }

    show() {
        push();
        fill(this.color);
        circle(this.x, this.y, this.size);
        pop();
    }

    takeDamage() {
        this.health -= 0.1;
        this.speed += 0.2;
        if (this.health <= 0) {
            this.isActive = false;
        }
    }
}