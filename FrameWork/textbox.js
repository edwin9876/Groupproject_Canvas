
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

ctx.strokeStyle = 'black'
let dragging = false;
let origX, origY, mouseX, mouseY

function draw(e) {
    if (dragging) {
        [mouseX, mouseY] = [e.offsetX, e.offsetY]
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.setLineDash([5, 15]);
        ctx.beginPath();
        ctx.rect(origX, origY, mouseX - origX, mouseY - origY);
        ctx.stroke();
}
    // else{
    //     let inputBox = document.createElement("INPUT");
    //     type.append(canvas)
    // }
}


canvas.addEventListener('mousedown', (e) => {
    dragging = true;
    [origX, origY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove',
    draw
)
canvas.addEventListener('mouseup', () =>
    dragging = false
    
);
canvas.addEventListener('mouseout', () => dragging = false);