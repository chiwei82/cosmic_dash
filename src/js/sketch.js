function setup() {
    createCanvas(1200, 600);

    state = new GameState();
    controller = new GameController(state);
    view = new GameView(state);

    controller.init();
}

function draw() {
    controller.update();
    view.draw();
    galaxy = new Galaxy();
    
    for (let i = 0; i < 10; i++) {
        debrises.push(new Debris(random(width / 2, width), random(height)));
    }
}

function draw() {
    background(220);

    // use shader to draw the galaxy
    galaxy.show();

    // render 3D layer
    bgEarth.show();

    // re-render: 2D layer
    resetMatrix();
    translate(-width / 2, -height / 2);
    ship.updatePosition();
    ship.show();

    if (frameCount % 20 === 0) {
        spawnDebris();
    }

    for (let i = 0; i < debrises.length; i++) {
        // console.log(debrises.length);
        debrises[i].updatePosition();
        debrises[i].show();

        if (debrises[i].x < -30) {
            debrises.splice(i, 1);
        }
    }

}

function keyPressed() {
    controller.keyPressed(key);
}

function keyReleased() {
    controller.keyReleased(key);
}
