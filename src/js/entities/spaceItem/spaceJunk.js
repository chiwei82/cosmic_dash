class SpaceJunk extends SpaceItem {
    constructor(x, y) {
        super(x, y, 2, 15); // Faster, harder to dodge
        this.isCollect = false;
    }

    show() {
        push();
        fill(0, 100, 255);
        circle(this.x, this.y, this.size);
        pop();
    }

    Collect() {
        this.isCollect = true;
    }
}