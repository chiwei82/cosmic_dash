class LaserProjectile {
    constructor(x, y, weight) {
        this.x0 = x;
        this.y0 = y
        this.y1 = y;
        this.x1 = width;
        this.active = true;
        this.weight = weight;
        this.color = '#281E5D'
    }

    updateOrigin(x0, y0) {
        this.x0 = x0;
        this.y0 = y0;
    }

    updateEnd(x1, y1) {
        this.x1 = x1;
        this.y1 = y1;
    }

    show() {
        push();
        stroke(this.color);
        strokeWeight(this.weight);
        line(this.x0, this.y0, this.x1, this.y1);
        pop();
    }
}