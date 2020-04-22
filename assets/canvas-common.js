let canvasR = document.getElementById("canvasR");
let ctxR = canvasR.getContext('2d');
let canvasD = document.getElementById("canvasD");
let ctxD = canvasD.getContext('2d');
let dragging = false;
let origX, origY,mX,mY
ctxD.strokeStyle = 'black';
ctxD.lineJoin = 'round';
ctxD.lineCap = 'round';
ctxD.lineWidth = 10;
$("#canvasD").mousedown(function (e) {
  [origX, origY] = [e.offsetX, e.offsetY];
  dragging = true;
  currentFunction.onMd([mX, mY], e);
})

$("#canvasD").mousemove(function (e) {
  if (dragging) {
    currentFunction.onDrag([origX, origY],[mX,mY], e);
  }
  currentFunction.onMm([mX, mY], e);
})
$("#canvasD").mouseleave(function (e) {
  [origX, origY] = [e.offsetX, e.offsetY];
  dragging = false;
  currentFunction.onMl([mX, mY], e);
})
$("#canvasD").mouseup(function (e) {
  [mX, mY] = [e.offsetX, e.offsetY];
  dragging = false;
  currentFunction.onMu([origX, origY],[mX,mY], e);
})
$("#canvasD").mouseenter(function (e) {
  [origX, origY] = [e.offsetX, e.offsetY];
  currentFunction.onMe([mX, mY], e);
})

class PaintFunc {
  contructor() { }
  onMd() { }
  onDrag() { }
  onMm() { }
  onMu() { }
  onMl() { }
  onMe() { }
}
