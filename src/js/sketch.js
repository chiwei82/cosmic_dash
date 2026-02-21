let debrises = [];

function setup() {
    createCanvas(1200, 600);
    ship = new Spaceship(100, height / 2);

    for (let i = 0; i < 10; i++) {
        debrises.push(new Debris(random(width / 2, width), random(height)));
    }
}

function draw() {
    background(220);
    ship.updatePosition();
    ship.show();

    for (let i = 0; i < debrises.length; i++) {
        debrises[i].show();
    }
}
