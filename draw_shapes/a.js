// let ctx = document.querySelector("#canvasR").getContext('2d');
// let paint = false
// $('#canvasR').mousedown(function (e) {
//     let mX = e.offsetX;
//     let mY = e.offsetY;
//     paint = true
 
// })
// $('#canvasR').mouseover(function (e) {
//     let mX = e.offsetX;
//     let mY = e.offsetY;
//     if(paint){
//         draw(mX,mY)
//     }
 
// })
// $('#canvasR').mouseup(function (e) {
//     paint =false;
 
// })
// $('#canvasR').mouseleave(function (e) {
//     paint=false;
 
// })

// function draw (x,y){
//     ctx.strokeStyle="red";
//     ctx.beginPath();
//     ctx.moveTo(0, 0);
//     ctx.lineTo(x, y);
//     ctx.stroke();
// }
const canvas = document.querySelector('#canvas');

	const ctx = canvas.getContext('2d');

	ctx.strokeStyle = 'black';
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.lineWidth = 10;

	let isDrawing = false;
	let lastX, lastY 

	function draw(e) {
		if(isDrawing){ 
        ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		[lastX, lastY] = [e.offsetX, e.offsetY];	
        }
	}

	canvas.addEventListener('mousedown', (e) => {
		isDrawing = true;
		[lastX, lastY] = [e.offsetX, e.offsetY];
	});
	canvas.addEventListener('mousemove', draw);	
	canvas.addEventListener('mouseup', () => isDrawing = false);
	canvas.addEventListener('mouseout', () => isDrawing = false);