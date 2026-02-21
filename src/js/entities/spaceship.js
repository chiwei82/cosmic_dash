class Spaceship {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vy = 0; // vertical velocity (pixels per frame time)
        this.ay = 0; // vertical acceleration (pixels per frame time squared)
        this.thrust = 0.5; // Acceleration per frame when key held
    }

    handleInput() {
        if (keyIsDown(UP_ARROW)) {
            this.ay = this.thrust;
        }
        else if (keyIsDown(DOWN_ARROW)) {
            this.ay = -this.thrust;
        }
        else {
            this.ay = 0;
        }
    }

    updatePosition() {
        this.handleInput();
        this.vy += ay // vf = vo + at, where t is frame duration and a is acceleration per frame
        this.y += this.vy; // yf = y0 + vt, where t is frame duration
        this.y = constrain(this.y, 0, height); // Bound spaceship to screen
    }

    show() {
        push();
        fill(255, 0, 200);
        triangle(
            this.x + 20, this.y,
            this.x - 20, this.y - 15,
            this.x - 20, this.y + 15
        )
        pop();
    }
}