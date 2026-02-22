class UI {
    constructor() {
      this.font = null;
      this.heart = null;
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
      textSize(20);
      fill(255);
  
      if (this.font) {
        textFont(this.font);
      }
  
      text(`Score: ${state}`, 16, 16);
  
      pop();
    }

    showGameOver(){
        push();
        textAlign(CENTER, CENTER);
        textSize(60);
        fill(255);
        if (this.font) {
            textFont(this.font);
        }
        text(`GAME OVER`, 600, 300);
        pop();
    }

    showHealth(health){
        push();

        if (this.heart) {
          imageMode(CORNER);
    
          const size = 32;      // 每個 heart 大小
          const spacing = 8;    // 間距
    
          for (let i = 0; i < health; i++) {
            image(
              this.heart,
              16 + i * (size + spacing),  // x 位置
              40,                         // y 位置
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
  }