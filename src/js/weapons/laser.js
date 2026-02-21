class Laser extends Weapon {
    constructor(owner) {
        super(owner);
        this.laserWidth = 3;
        this.color = '#fcb448';
        this.x0 = 0;
        this.x1 = 0;
        this.y; // y0 and y1 are the same => y
    }

    show() {
        push();
        stroke(this.color);
        strokeWeight(this.laserWidth);
        line(this.x0, this.y, this.x1, this.y);
        pop();
    }

    clear() {
        this.x0 = 0;
        this.x1 = 0;
        this.y = 0;
    }

    updatePosition() {
        this.x0 = this.owner.x + this.owner.shipWidth / 2;
        this.x1 = width;
        this.y = this.owner.y;
    }

    getBoundingBox() {
        return {
            left: this.x0,
            right: this.x1,
            top: this.y - this.laserWidth / 2,
            bottom: this.y + this.laserWidth / 2
        }
    }
}