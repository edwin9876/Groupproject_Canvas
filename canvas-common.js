let canvasR = document.getElementById("canvasR");
let ctxR = canvasR.getContext('2d');
let canvasD = document.getElementById("canvasD");
let ctxD = canvasD.getContext('2d');
let dragging = false;

$("#canvasD").mousedown(function (e) {
  let mX = e.offSetX();
  let mY = e.offSetY();
  dragging = true;
  currentFunc.onMd([mX,mY],e);
})

$("#canvasD").mouseover(function (e) {
  let mX = e.offSetX();
  let mY = e.offSetY();
  if (dragging) {
    currentFunc.OnDrag([mX,mY],e);
  }
  currentFunc.onMm([mX,mY],e);
})
$("#canvasD").mouseleave(function (e) {
  let mX = e.offSetX();
  let mY = e.offSetY();
  dragging = false;
  currentFunc.onMl([mX,mY],e);
})
$("#canvasD").mouseup(function (e) {
  let mX = e.offSetX();
  let mY = e.offSetY();
  dragging = false;
  currentFunc.onMu([mX,mY],e);
})
$("#canvasD").mouseenter(function (e) {
  let mX = e.offSetX();
  let mY = e.offSetY();
  currentFunc.onMe([mX,mY],e);
})

class Paintfunc {
  contructor() { }
  onMd() { }
  OnDrag() { }
  onMm() { }
  onMu() { }
  onMl() { }
  onMe() { }
}