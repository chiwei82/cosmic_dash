class BackgroundEarth {
    constructor(texturePath, radius) {
      this.texturePath = texturePath;
      this.radius = radius;
  
      // texture
      this.tex = null;
      this.readyTex = false;
  
      // trash model
      this.trashModel = null;
      this.readyTrash = false;

      // particles
      this.particles = [];
      this.particleCount = floor(random(500, 1000));
      this.particleMinR = radius * 1.15;
      this.particleMaxR = radius * 2.0;
    }
  
    load() {
      loadImage(
        this.texturePath,
        (img) => {
          this.tex = img;
          this.readyTex = true;
          this.tryInit();
        },
        (err) => console.error("earth texture load fail:", err)
      );
  
      loadModel(
        "assets/trash.obj",
        true,
        (m) => {
          this.trashModel = m;
          this.readyTrash = true;
          this.tryInit();
        },
        (err) => console.error("trash model load fail:", err)
      );
    }
  
    tryInit() {
      if (this.readyTex && this.readyTrash) {
        this.initParticles();
      }
    }
  
    initParticles() {
      this.particles.length = 0;
  
      for (let i = 0; i < this.particleCount; i++) {
        const dir = p5.Vector.random3D();
  
        const t = pow(random(), 0.7);
        const r = lerp(this.particleMinR, this.particleMaxR, t);
  
        const pos = dir.mult(r);
  
        this.particles.push({
          base: pos.copy(),
          size: random(0.08, 0.1),
          speed: random(0.001, 0.002),
          phase: random(TWO_PI),
          spin: p5.Vector.random3D().mult(random(0.005, 0.02)),
        });
      }
    }
  
    show() {
        
        if (!this.readyTex) return;
        
        // environment light
        ambientLight(200);
        directionalLight(53, 130, 212, 1, 0.8, -0.2);
    
        push();
        translate(0, height/2 + this.radius, -800);
    
        // earth rotation
        rotateY(frameCount * -0.0015);
    
        // ===== particles (trash) =====
        if (this.readyTrash) {
            noStroke();
            // material reflection
            specularMaterial(60);
            shininess(2);
    
            for (const p of this.particles) {
            push();
    
            // big rotation
            rotateY(frameCount * p.speed + p.phase);
            rotateX(frameCount * (p.speed * 0.7) + p.phase * 0.3);
    
            // small rotation
            translate(p.base.x, p.base.y, p.base.z);
    
            // self rotation
            rotateX(frameCount * p.spin.x);
            rotateY(frameCount * p.spin.y);
            rotateZ(frameCount * p.spin.z);
    
            // size
            scale(p.size);
    
            model(this.trashModel);
    
            pop();
            }
      }
  
      // ===== earth =====
      noStroke();
      texture(this.tex);
      sphere(this.radius, 48, 32);
  
      pop();
    }
  }