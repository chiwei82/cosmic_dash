class BackgroundEarth {
    constructor(texturePath, radius) {
      this.texturePath = texturePath;
      this.radius = radius;
      this.tex = null;
      this.ready = false;
    }
  
    // p5.js 2.0：在 setup() 呼叫這個
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
  
    draw() {
      if (!this.ready) return;
  
      // 光源（讓材質有立體感）
      ambientLight(80);
      directionalLight(255, 255, 255, 0.4, 0.2, -1);
  
      push();
  
      // ✅ 把地球當「背景」：放在畫面更遠處 + 稍微往下
      // WEBGL 座標原點在中心，y 往下是正
      translate(0, 600, -800);
  
      // ✅ 持續旋轉
      rotateY(frameCount * 0.01);
  
      noStroke();
      texture(this.tex);
      sphere(this.radius, 48, 32);
  
      pop();
    }
  }