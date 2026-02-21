class Debris {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // updatePosition() {

    // }

    show() {
        push();
        fill(211, 31, 10);
        circle(
            this.x,
            this.y,
            20
        );
        pop();
    }
}