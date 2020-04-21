const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

let dragging = false;
ctx.strokeStyle = "black"
let originX, originY, mouseX, mouseY;

function draw(x,y) {
    if (dragging) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath();
        ctx.moveTo(origX, origY + (y - origY) / 2)
        ctx.bezierCurveTo(origX, origY, x, origY, x, origY + (y - origY) / 2);
        ctx.bezierCurveTo(x, y, origX, y, origX, origY + (y - origY) / 2);
        ctx.closePath()
        ctx.stroke()
    }
}


canvas.addEventListener('mousedown', (e) => {
    dragging = true;
    [origX, origY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', (e) => {
    [mouseX, mouseY] = [e.offsetX, e.offsetY]
    draw(mouseX,mouseY)
})
canvas.addEventListener('mouseup', () => dragging = false);
canvas.addEventListener('mouseout', () => dragging = false);