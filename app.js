import Cut from './modules/Cut.js'
import Point from './modules/Point.js';

class App {
    constructor() {
      this.canvas = document.createElement("canvas");
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");
  
      this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
  
      window.addEventListener("resize", this.resize.bind(this), false);
      this.resize();
      let point
      let cut = new Cut(this.canvas.width, this.canvas.height, "#2ECCFA")
      this.canvas.addEventListener('click', (e) => {
          point = new Point(e.clientX, e.clientY)
          cut.addPoint(this.ctx, point)
      })
      window.requestAnimationFrame(this.animate.bind(this));
    }
  
    resize() {
      this.stageWidth = document.body.clientWidth;
      this.stageHeight = document.body.clientHeight;
  
      this.canvas.width = this.stageWidth * this.pixelRatio;
      this.canvas.height = this.stageHeight * this.pixelRatio;
      this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }
  
    animate() {
      window.requestAnimationFrame(this.animate.bind(this));
      //this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    }
  }
  
  window.onload = () => {
    new App();
  };