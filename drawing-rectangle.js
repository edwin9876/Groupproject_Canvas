class DrawRect extends PaintFunc{
    constructor(ctxR,ctxD){
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }
    onMd(coord,e) {

    }
   onDrag(coord,coord2,e) {
    [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]
    ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
    ctxD.beginPath();
    ctxD.rect(coord[0], coord[1], coord2[0] - coord[0], coord2[1] - coord[1]);
    ctxD.stroke();
    }
   onMm(coord,e) {


    }
   onMu(coord,e) {
       // this.ctxD.beginPath()
       // this.ctxD.moveTo(coord[0],coord[1])
       // this.ctxD.lineTo(e.offsetX, e.offsetY);
       // this.ctxD.stroke();
    }
   onMl(coord,e) {


    }
   onMe(coord,e) {


    }
}