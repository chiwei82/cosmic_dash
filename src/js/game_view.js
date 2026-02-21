class GameView {
    constructor(state) {
        this.state = state;
    }

    draw() {
        background(220);

        this.state.ship.show();

        for (let p of this.state.projectiles) {
            p.show();
        }

        for (let d of this.state.debris) {
            d.show();
        }
    }


    // drawHUD() { // Display HUD with score }
    // drawGameOver()
}