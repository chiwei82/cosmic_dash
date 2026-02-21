let debris_list = [];
let projectile_list = [];

function setup() {
    createCanvas(1200, 600, WEBGL);
    ship = new Spaceship(100, height / 2);

    bgEarth = new BackgroundEarth("assets/earth_texture.jpg", 600);
    bgEarth.load();

    for (let i = 0; i < 10; i++) {
        debris_list.push(new Debris(random(width / 2, width), random(height)));
    }
}

function draw() {
    background(220);
    bgEarth.show();
    resetMatrix();
    translate(-width / 2, -height / 2);
  
    ship.update(projectile_list);
    ship.show();

    for (let p of projectile_list) p.show();

    // TODO: Refactor debris spawn logic somewhere else
    if (frameCount % 20 === 0) {
        spawnDebris();
    }

    for (let i = 0; i < debris_list.length; i++) {
        debris_list[i].updatePosition();
        debris_list[i].show();

        if (debris_list[i].x < -30) {
            debris_list.splice(i, 1);
        }
    }

}

function spawnDebris() {
    let debris = new Debris((width + 50), random(height));
    debris_list.push(debris);
}

function keyPressed() {
    if (key === ' ') {
        ship.weapon.fire(projectile_list);
    }
}

function keyReleased() {
    if (key === ' ') {
        ship.weapon.stopFiring(projectile_list);
    }
}
