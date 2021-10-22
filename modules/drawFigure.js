export default function drawFigure(ctx, points, color) {
    let figure = new Path2D()
    //points are list of points
    if(points.length < 3) throw "Figure must have 3 or more points"
    figure.moveTo(points[0].x, points[0].y)
    for(let i = 1 ; i < points.length ; i ++) {
        figure.lineTo(points[i].x, points[i].y)
    }
    figure.lineTo(points[0].x, points[0].y)
    figure.closePath()
    ctx.save()
    ctx.fillStyle = color
    ctx.fill(figure)
    ctx.restore()
}