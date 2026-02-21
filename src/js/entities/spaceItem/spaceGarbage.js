class SpaceGarbage extends SpaceItem {
    constructor(x, y) {
        super(x, y, 2, 25); // Slightly slower speed
        this.points = 10; // Value when collected
    }

    show() {
        push();
        fill(0, 255, 0); // Green to indicate it's safe/collectible
        circle(this.x, this.y, this.size); // Different shape for visual clarity
        pop();
    }

    collect() {
        this.isActive = false;
        return this.points;
    }
}