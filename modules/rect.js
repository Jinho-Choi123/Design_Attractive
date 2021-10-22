export default class Rect {
    constructor(x, y, w, h, color) {
        this.x = x
        this.y = y
        this.w = w 
        this.h = h 
        this.color = color
    }

    drawObject(ctx) {
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
    
    moveObject(ctx) {
        ctx.clearRect(this.x, this.y, this.w, this.h)
        ctx.fillRect(this.x ++, this.y, this.w, this.h)
    }
}