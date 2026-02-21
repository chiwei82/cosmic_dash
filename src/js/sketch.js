let debrises = [];

function setup() {
    createCanvas(1200, 600, WEBGL);
    ship = new Spaceship(100, height / 2);

    bgEarth = new BackgroundEarth("assets/earth_texture.jpg", 600);
    bgEarth.load();

    for (let i = 0; i < 10; i++) {
        debrises.push(new Debris(random(width / 2, width), random(height)));
    }
}

function draw() {
    background(220);
    
    bgEarth.show();
    resetMatrix();
    translate(-width / 2, -height / 2);
    ship.updatePosition();
    ship.show();

    if (frameCount % 20 === 0) {
        spawnDebris();
    }

    for (let i = 0; i < debrises.length; i++) {
        console.log(debrises.length);
        debrises[i].updatePosition();
        debrises[i].show();

        if (debrises[i].x < -30) {
            debrises.splice(i, 1);
        }
    }

}

function spawnDebris() {
    let debris = new Debris((width + 50), random(height));
    debrises.push(debris);
}