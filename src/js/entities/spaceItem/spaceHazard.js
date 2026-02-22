class SpaceHazard extends SpaceItem {
    constructor(x, y) {
        super(x, y, 1.5, 30);
        this.health = 2; // Requires multiple hits to destroy
        this.maxHealth = 2;
        this.color = color(211, 31, 10);
        this.img = null;
    }

    load() {
        loadImage(
          "assets/rock.gif",
          (img) => {
            this.img = img;
          },
          (err) => console.error("rock load fail:", err)
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
        this.colorVanish();
        if (this.health <= 0) {
            this.isActive = false;
        }
    }

    colorVanish() {
        let alpha = map(this.health, 0, this.maxHealth, 128, 255);
        this.color.setAlpha(alpha);
        fill(this.color);
    }
}