export default function drawLine(ctx, point1, point2, thickness, color) {
    let path = new Path2D()
    path.moveTo(point1.x, point1.y)
    path.lineTo(point2.x, point2.y)
    path.closePath()
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = color 
    ctx.lineWidth = thickness
    ctx.lineCap = "square"
    ctx.stroke(path)
    ctx.restore()
}