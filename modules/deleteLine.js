import Point from './Point.js'

function dist(x1,y1,x2,y2) { 
	x2-=x1; y2-=y1; 
	return Math.sqrt((x2*x2) + (y2*y2)); 
}

function clearCircle(context,x,y,radius) {
	context.save();
	context.beginPath();
	context.arc(x, y, radius, 0, 2*Math.PI, true);
	context.clip();
	context.clearRect(x-radius,y-radius,radius*2,radius*2);
	context.restore();
}

export default function deleteLine(ctx,x1,y1,x2,y2,thickness, dotradius) {
	let tmp, length;

    //also delete the points
    clearCircle(ctx, x1, y1, dotradius)
    clearCircle(ctx, x2, y2, dotradius)

	// swap coordinate pairs if x-coordinates are RTL to make them LTR
	if (x2 < x1) {
		tmp = x1; x1 = x2; x2 = tmp;
		tmp = y1; y1 = y2; y2 = tmp;
	}

	length = dist(x1,y1,x2,y2);

	ctx.save();
	ctx.translate(x1,y1);
	ctx.rotate(Math.atan2(y2-y1,x2-x1));
	ctx.clearRect(0,0,length,thickness);
	ctx.restore();
}