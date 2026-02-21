class JunkVacuum extends Weapon {
    constructor(owner) {
        super(owner);
        this.color = '#1ff52d';
        this.strokeWidth = 5;
        this.height = 50;
        this.width = 25;
        this.x0 = 0;
        this.x1 = 0;
        this.y0 = 0;
        this.y1 = 0;
        this.y2 = 0;
    }

    show() {
        push();
        stroke(this.color);
        strokeWeight(this.strokeWidth);
        line(this.x0, this.y0, this.x1, this.y1);
        line(this.x0, this.y0, this.x1, this.y2);
        pop();
    }

    clear() {
        this.x0 = 0;
        this.x1 = 0;
        this.y0 = 0;
        this.y1 = 0;
        this.y2 = 0;
    }

    updatePosition() {
        this.x0 = this.owner.x + this.owner.shipWidth / 2;
        this.x1 = this.x0 + this.width;
        this.y0 = this.owner.y;
        this.y1 = this.y0 - this.height / 2;
        this.y2 = this.y0 + this.height / 2;
    }

    getBoundingBox() {
        return {
            left: this.x0,
            right: this.x1,
            top: this.y1,
            bottom: this.y2
        }
    }
}