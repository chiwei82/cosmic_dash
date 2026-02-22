class UI {
    constructor() {
      this.font = null;
      this.heart = null;
      this.scoreTextSize = 36;
    }
  
    load() {
      loadFont(
        "assets/Roboto_Condensed-Bold.ttf",
        (font) => {
          this.font = font;
        },
        (err) => console.error("font load fail:", err)
      );

      loadImage("assets/heart.png", 
        (img) => {
          this.heart = img;
        },
        (err) => console.error("heart load fail:", err)
      );
    }
  
    show(state) {
        push();
    
        textAlign(LEFT, TOP);
        textSize(this.scoreTextSize);
        fill(255);
    
        if (this.font) {
            textFont(this.font);
        }
    
        text(`Score: ${state}`, 16, 16);
    
        pop();
    }

    showGameOver(){
        this.dimScene();
        push();
        textAlign(CENTER, CENTER);
        textSize(this.scoreTextSize * 5);
        fill(255);
        if (this.font) {
            textFont(this.font);
        }
        text(`GAME OVER`, width / 2, height / 2);
        pop();
    }

    showHealth(health){
        push();

        if (this.heart) {
          imageMode(CORNER);
    
          const size = 52;      // 每個 heart 大小
          const spacing = 8;    // 間距
    
          for (let i = 0; i < health; i++) {
            image(
              this.heart,
              16 + i * (size + spacing),  // x 位置
              this.scoreTextSize + 16,    // y 位置
              size,
              size
            );
          }
        } else {
          // 如果圖片還沒載入，用 fallback
          fill(255);
          text(`Health: ${health}`, 16, 40);
        }
    
        pop();
    }

    // helper
    dimScene(){
        push();
        resetMatrix();
        noStroke();
        fill(0, 180);
        rectMode(CENTER);
        rect(0, 0, width, height);
        pop();
    }
  }