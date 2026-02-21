class Satellite extends SpaceItem {
    constructor(x, y) {
        super(x, y, 2, 15); // Faster, harder to dodge
        this.damage = 20;
    }

    show() {
        push();
        fill(0, 100, 255);
        circle(this.x, this.y, this.size);
        pop();
    }

    collide() {
        this.isActive = false;
        return this.damage;
    }
}