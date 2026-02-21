class GameView {
    constructor(state) {
        this.state = state;
    }

    draw() {
        background(220);

        this.state.ship.show();
        this.state.weapon.show();

        for (let d of this.state.spaceItem) {
            d.show();
        }
    }
}