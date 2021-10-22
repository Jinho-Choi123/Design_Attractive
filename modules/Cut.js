import Point from './Point.js'
import deleteLine from './deleteLine.js'
import drawLine from './drawLine.js'
import drawDot from './drawDot.js'
import drawFigure from './drawFigure.js'

export default class Cut {
    constructor(canvaswidth, canvasheight, color) {
        this.points = []
        this.color = color
        this.canvaswidth = canvaswidth
        this.canvasheight = canvasheight
    }

    addPoint = (ctx, point) => {
        //store point and draw point 
        this.points.push(point)
        drawDot(ctx, point, 3)
        
        //link the points
        if(this.points.length >= 2){

            drawLine(ctx, this.points[this.points.length - 1], this.points[this.points.length - 2], 1, 'black')

            if(this.points.length >= 3 && Point.getDist(this.points[this.points.length-1], this.points[0]) <= 10) {
                //이전에 stroke method을 사용했으므로, 이전 경로들을 전부 지운 뒤에 다시 그려야 한다.
                for (let i = 0 ; i < this.points.length - 1 ; i ++) {
                    deleteLine(ctx, this.points[i].x, this.points[i].y, this.points[i+1].x, this.points[i+1].y, 1)
                    console.log("delete line")
                }
                
                drawFigure(ctx, this.points.slice(0, -1), 'blue')

                this.points.splice(0, this.points.length)
            }
        }

    }
}