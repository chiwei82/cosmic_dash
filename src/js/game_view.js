class GameView {
    constructor(state) {
        this.state = state;
        this.background = new BackgroundEarth("assets/earth_texture.jpg", 600);
        this.background.load();
        this.galaxy = new Galaxy();
    }

    draw() {
        background(220);

        this.state.ship.show();
        this.state.weapon.show();

        for (let d of this.state.spaceItem) {
            d.show();
        }

        this.background.show();
        this.galaxy.show();
    }
}