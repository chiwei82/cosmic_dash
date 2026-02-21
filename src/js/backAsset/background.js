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
    
        ambientLight(100);
        directionalLight(53, 130, 212, 1, 0.8, -0.2);
        specularMaterial(60);
        shininess(2);
    
        push();
        translate(0, 600, -800);
    
        // rotating speed
        rotateY(frameCount * -0.0025);
    
        noStroke();
        texture(this.tex);
        sphere(this.radius, 48, 32);
    
        pop();
    }
  }