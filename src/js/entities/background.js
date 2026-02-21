class BackgroundEarth {
    constructor(texturePath, radius) {
      this.texturePath = texturePath;
      this.radius = radius;
      this.tex = null;
      this.ready = false;
    }
    
    load() {
      loadImage(
        this.texturePath,
        (img) => {
          this.tex = img;
          this.ready = true;
        },
        (err) => console.error("earth texture load fail:", err)
      );
    }
  
    show() {
      if (!this.ready) return;
  
      ambientLight(80);
      directionalLight(255, 255, 255, 0.4, 0.2, -1);

      push();
      
      translate(0, 600, -800);
      rotateY(frameCount * -0.005);
      noStroke();
      texture(this.tex);
      sphere(this.radius, 48, 32);
  
      pop();
    }
  }