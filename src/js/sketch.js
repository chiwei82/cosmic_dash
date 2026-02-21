let debris_list = [];
let projectile_list = [];

function setup() {
    // createCanvas(1200, 600, WEBGL);
    // ship = new Spaceship(100, height / 2);

    // bgEarth = new BackgroundEarth("assets/earth_texture.jpg", 600);
    // bgEarth.load();

    // for (let i = 0; i < 10; i++) {
    //     debris_list.push(new SpaceItem(random(width / 2, width), random(height)));
    //     spawnSpaceItem(true); // Initial spawn spread across the screen
    // }
    createCanvas(1200, 600);

    state = new GameState();
    controller = new GameController(state);
    view = new GameView(state);

    controller.init();
}

function draw() {
    controller.update();
    view.draw();

    // background(220);
    // bgEarth.show();
    // resetMatrix();
    // translate(-width / 2, -height / 2);

    // ship.update(projectile_list);
    // ship.show();

    // for (let p of projectile_list) p.show();

    // // TODO: Refactor debris spawn logic somewhere else
    // if (frameCount % 20 === 0) {
    //     spawnSpaceItem(false);
    // }

    // // Iterate backwards when removing items from an array to prevent index shifting bugs
    // for (let i = debris_list.length - 1; i >= 0; i--) {
    //     let currentDebris = debris_list[i];

    //     currentDebris.updatePosition();
    //     currentDebris.show();

    //     // Remove if it goes off-screen or if it was destroyed/collected (isActive is false)
    //     if (currentDebris.x < -30 || !currentDebris.isActive) {
    //         debris_list.splice(i, 1);
    //     }
    // }

}

function keyPressed() {
    controller.keyPressed(key);
    // if (key === ' ') {
    //     ship.weapon.fire(projectile_list);
    // }
}

function keyReleased() {
    controller.keyReleased(key);
    // if (key === ' ') {
    //     ship.weapon.stopFiring(projectile_list);
    // }
}
// function spawnSpaceItem(isInitialSetup = false) {
//     let x = isInitialSetup ? random(width / 2, width) : width + 50;
//     let y = random(height);

//     let size = random(15, 40);

//     // Generates a random integer between 0 and 2
//     let type = Math.floor(random(2));
//     let newDebris;

//     switch (type) {
//         case 0:
//             newDebris = new SpaceHazard(x, y, size);
//             break;
//         case 1:
//             newDebris = new SpaceJunk(x, y, size);
//             break;
//         default:
//             newDebris = new SpaceHazard(x, y,); // Safe fallback
//     }

//     debris_list.push(newDebris);
// }
