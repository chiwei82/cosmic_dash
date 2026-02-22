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
        this.rockImg = null;
        this.fragImg = null;
    }

    load() {
        loadImage(
            "assets/rock.gif",
            (img) => {
                this.rockImg = img;
            },
            (err) => console.error("rock load fail:", err)
        );

        loadImage(
            "assets/frag.png",
            (img) => {
              this.fragImg = img;
            },
            (err) => console.error("frag.png load fail:", err)
        );
    }
}