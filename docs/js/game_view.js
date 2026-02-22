class GameView {
    constructor(state) {
        this.state = state;
        this.background = new BackgroundEarth("assets/earth_texture.jpg", 400);
        this.background.load();
        this.galaxy = new Galaxy();
        this.ui = new UI();
        this.ui.load();
    }

    draw() {
        background(220);

        this.background.show();
        this.galaxy.show();
        resetMatrix();
        translate(-width / 2, -height / 2);

        this.state.ship.show();
        this.state.weapon.show();
        this.ui.show(this.state.score);
        this.ui.showHealth(this.state.ship.health);
        
        if (this.state.gameOver){
            this.ui.showGameOver();
        }

        for (let d of this.state.spaceItem) {
            d.show();
        }

    }
}