class GameState {
    constructor() {
        // Add ship, debris, projectiles, score, gameOver, etc.
        this.ship = null;
        this.spaceItem = [];
        this.projectiles = [];
        this.score = 0;
        this.spawnTimer = 0;
        this.spawnInterval = 50;
        this.gameOver = false;
    }
}