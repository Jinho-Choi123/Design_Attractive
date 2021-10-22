export default function drawDot (ctx, point, r) {
    let dot = new Path2D()
    dot.arc(point.x, point.y, r, 0, 2*Math.PI)
    dot.closePath()
    ctx.save()
    ctx.fillStyle = "black"
    ctx.fill(dot)
    ctx.restore()
}