function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    state = new GameState();
    state.load();
    controller = new GameController(state);
    view = new GameView(state);

    controller.init();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    controller.update();
    view.draw();
}

function keyPressed() {
    controller.handleKeyPressed();
}


