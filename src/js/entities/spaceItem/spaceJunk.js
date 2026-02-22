class SpaceJunk extends SpaceItem {
    constructor(x, y) {
        super(x, y, 1.5, 60);
        this.health = 2; // Requires multiple hits to destroy
        this.maxHealth = 2;
        this.color = color(0, 100, 255);
        this.img = null;
    }

    load() {
        loadImage(
          "assets/frag.png",
          (img) => {
            this.img = img;
          },
          (err) => console.error("frag.png load fail:", err)
        );
    }

    show() {
        push();
        fill(this.color);
        if (this.img != null){
            image(this.img, this.x, this.y, this.size, this.size);
        }else{
            circle(this.x, this.y, this.size);
        }
        pop();
    }

    takeDamage() {
        this.health -= 0.1;
        this.speed += 0.2;
        if (this.health <= 0) {
            this.isActive = false;
        }
    }
}