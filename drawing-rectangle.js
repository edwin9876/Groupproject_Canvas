class DrawRect extends PaintFunc{
    constructor(ctxR,ctxD){
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }
    onMd(coord,e) {

    }
   onDrag(coord,e) {
       this.ctxD.beginPath()
       this.ctxD.moveTo(coord[0],coord[1])
       this.ctxD.lineTo(e.offsetX, e.offsetY);
       this.ctxD.stroke();
       [origX, origY] = [e.offsetX, e.offsetY];	
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