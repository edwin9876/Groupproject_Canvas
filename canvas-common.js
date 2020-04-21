let canvasR = document.getElementById("canvasR");
let ctxR = canvasR.getContext('2d');
let canvasD = document.getElementById("canvasD");
let ctxD = canvasD.getContext('2d');
let dragging = false;
let mX, mY, origX, origY

$("#canvasD").mousedown(function (e) {
  [origX, origY] = [e.offsetX, e.offsetY];
  dragging = true;
  currentFunction.onMd([mX, mY], e);
})

$("#canvasD").mousemove(function (e) {
  [origX, origY] = [e.offsetX, e.offsetY];
  if (dragging) {
    currentFunction.onDrag([origX, origY], e);
  }
  currentFunction.onMm([mX, mY], e);
})
$("#canvasD").mouseleave(function (e) {
  [origX, origY] = [e.offsetX, e.offsetY];
  dragging = false;
  currentFunction.onMl([mX, mY], e);
})
$("#canvasD").mouseup(function (e) {
  [origX, origY] = [e.offsetX, e.offsetY];
  dragging = false;
  currentFunction.onMu([mX, mY], e);
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
