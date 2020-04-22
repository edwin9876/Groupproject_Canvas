class DrawTriangle extends PaintFunc {
    constructor(ctxR, ctxD) {
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }
    onMd(coord, e) {

    }
    onDrag(coord, coord2, e) {
        [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]
        ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
        ctxD.beginPath();
        ctxD.moveTo(coord[0],coord[1]);
        ctxD.lineTo(coord2[0],coord2[1]);
        ctxD.lineTo((coord[0]-(coord2[0]-coord[0])),coord2[1]);
        ctxD.lineTo(coord[0],coord[1]);
        ctxD.stroke();
    }
    onMm(coord, e) {


    }
    onMu(coord,coord2, e) {
        ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
        ctxR.beginPath();
        ctxR.moveTo(coord[0],coord[1]);
        ctxR.lineTo(coord2[0],coord2[1]);
        ctxR.lineTo((coord[0]-(coord2[0]-coord[0])),coord2[1]);
        ctxR.lineTo(coord[0],coord[1]);
        ctxR.stroke();
    }
    onMl(coord, e) {


    }
    onMe(coord, e) {


    }


}