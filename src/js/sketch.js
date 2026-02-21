function setup() {
    createCanvas(1200, 600, WEBGL);

    state = new GameState();
    controller = new GameController(state);
    view = new GameView(state);

    controller.init();
}

function draw() {
    controller.update();
    view.draw();
}

function keyPressed() {
    controller.handleKeyPressed();
}


