function setup() {
    createCanvas(1200, 600);
    ship = new Spaceship(100, height / 2);
}

function draw() {
    background(220);
    ship.updatePosition();
    ship.show();
}
