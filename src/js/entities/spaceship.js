class Spaceship {
    constructor(x, y) {
        // Aesthetics
        this.shipColor = color(255, 0, 0);

        // Dimensions
        this.shipWidth = 40;
        this.shipHeight = 30;

        // Location and Movement
        this.x = x;
        this.y = y;
        this.vy = 0; // vertical velocity (pixels per frame time)
        this.ay = 0; // vertical acceleration (pixels per frame time squared)
        this.thrust = 0.1; // delta acceleration per frame when key held
        this.damping = 0.98;

        // Behaviour
        this.weapon = new LaserGun(this);
    }

    getBoundingBox() {
        return {
            left: this.x - this.shipWidth / 2,
            right: this.x + this.shipWidth / 2,
            top: this.y - this.shipHeight / 2,
            bottom: this.y + this.shipHeight / 2,
        };
    }

    show() {
        push();
        fill(this.shipColor);
        triangle(
            this.x + this.shipWidth / 2, this.y,
            this.x - this.shipWidth / 2, this.y - this.shipHeight / 2,
            this.x - this.shipWidth / 2, this.y + this.shipHeight / 2
        )
        pop();
    }

    handleInput() {
        if (keyIsDown(UP_ARROW)) {
            this.ay = -this.thrust;
        }
        else if (keyIsDown(DOWN_ARROW)) {
            this.ay = this.thrust;
        }
        else {
            this.ay = 0;
        }
    }

    handleWalls() {
        if (this.y <= this.shipHeight / 2) {
            this.y = this.shipHeight / 2;
            this.vy = 0;
            this.ay = 0;
        }
        else if (this.y >= height - this.shipHeight / 2) {
            this.y = height - this.shipHeight / 2;
            this.vy = 0;
            this.ay = 0;
        }
    }

    updatePosition() {
        this.handleInput();
        this.vy += this.ay; // vf = vo + at, where t is frame duration and a is acceleration per frame
        this.vy *= this.damping;
        this.y += this.vy; // yf = y0 + vt, where t is frame duration
        this.handleWalls(); // Bound spaceship to screen
    }
}