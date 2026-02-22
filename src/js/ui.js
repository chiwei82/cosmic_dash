class UI {
    constructor() {
      this.font = null;
    }
  
    load() {
      loadFont(
        "assets/Roboto_Condensed-Bold.ttf",
        (font) => {
          this.font = font;
        },
        (err) => console.error("font load fail:", err)
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
  }