class Meteorite extends SpaceItem {
    constructor(x, y) {
        super(x, y, 2, 10); // Fastest
        this.health = 2; // Requires multiple hits to destroy
    }

    show() {
        push();
        fill(211, 31, 10);
        circle(this.x, this.y, this.size);
        pop();
    }

    takeDamage() {
        this.health -= 1;
        if (this.health <= 0) {
            this.isActive = false;
        }
    }
}