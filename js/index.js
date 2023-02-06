const chessboard = document.getElementById('chessboard');
let selectedPiece = null;
let coordenadas = [0, 1, 2, 3, 4, 5, 6, 7,
                    16, 17, 18, 19, 20, 21, 22, 23,
                    32, 33, 34, 35, 36, 37, 38, 39,
                    48, 49, 50, 51, 52, 53, 54, 55,
                    64, 65, 66, 67, 68, 69, 70, 71,
                    80, 81, 82, 83, 84, 85, 86, 87,
                    96, 97, 98, 99, 100, 101, 102, 103,
                    112, 113, 114, 115, 116, 117, 118, 119];


function moverPieza(casillaActual, movimiento) {
    return casillaActual+movimiento
}

function legalMove(posibles, todas) {
    return posibles.filter(element => todas.includes(element));
  }

function calcularCasillaActual(pieza){
    let celda = pieza.parentNode;
    let id = celda.id;
    return id;
}

chessboard.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('Knight')) {
        selectedPiece = target;
        let casillaActual = calcularCasillaActual(selectedPiece);
        let movimientos = [-33, -31, -18, -14, 14, 18, 31, 33];
        let casillaPosibles = [moverPieza(parseFloat(casillaActual), parseFloat(movimientos[0])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[1])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[2])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[3])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[4])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[5])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[6])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[7]))];
        movelegales= legalMove(casillaPosibles, coordenadas);

    } else if (target.classList.contains('square') && selectedPiece &&  movelegales.includes(parseFloat(target.id)) ){
        target.appendChild(selectedPiece);
        selectedPiece = null;
        
    }
});



chessboard.addEventListener('click', (event) => {
    const target = event.target;
    let logicaPeon = [ 96, 97, 98, 99, 100, 101, 102, 103];
    if (target.classList.contains('w') && target.classList.contains('Pawn')) {
        selectedPiece = target;
        let casillaActual = calcularCasillaActual(selectedPiece);
        if (logicaPeon.includes(parseFloat(casillaActual))){
            let movimientos=[-16,-32,];
            let casillaPosibles = [moverPieza(parseFloat(casillaActual), parseFloat(movimientos[0])),
            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[1]))];
        movelegales= legalMove(casillaPosibles, coordenadas);}
        else {
            let movimientos = [-16];
            let casillaPosibles = [moverPieza(parseFloat(casillaActual), parseFloat(movimientos[0]))];
            movelegales= legalMove(casillaPosibles, coordenadas);}
    } else if (target.classList.contains('square') && selectedPiece &&  movelegales.includes(parseFloat(target.id)) ){
        target.appendChild(selectedPiece);
        selectedPiece = null;
        
    }
});

chessboard.addEventListener('click', (event) => {
    const target = event.target;
    let logicaPeon = [ 16, 17, 18, 19, 20, 21, 22, 23];
    if (target.classList.contains('b') && target.classList.contains('Pawn')) {
        selectedPiece = target;
        let casillaActual = calcularCasillaActual(selectedPiece);
        if (logicaPeon.includes(parseFloat(casillaActual))){
            let movimientos=[16,32,];
            let casillaPosibles = [moverPieza(parseFloat(casillaActual), parseFloat(movimientos[0])),
            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[1]))];
        movelegales= legalMove(casillaPosibles, coordenadas);}
        else {
            let movimientos = [16];
            let casillaPosibles = [moverPieza(parseFloat(casillaActual), parseFloat(movimientos[0]))];
            movelegales= legalMove(casillaPosibles, coordenadas);}
    } else if (target.classList.contains('square') && selectedPiece &&  movelegales.includes(parseFloat(target.id)) ){
        target.appendChild(selectedPiece);
        selectedPiece = null;
        
    }
});

chessboard.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('Bishop')) {
        selectedPiece = target;
        let casillaActual = calcularCasillaActual(selectedPiece);
        let movimientos = [-119, -105, -102, -90, -85, -75, -68, -60, -51, -45, -34, -30, -17, -15, 119, 105, 102, 90, 85, 75, 68, 60, 51, 45, 34, 30, 17, 15];
        let casillaPosibles = [moverPieza(parseFloat(casillaActual), parseFloat(movimientos[0])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[1])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[2])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[3])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[4])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[5])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[6])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[7])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[8])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[9])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[10])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[11])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[12])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[13])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[14])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[15])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[16])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[17])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[18])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[19])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[20])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[21])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[22])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[23])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[24])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[25])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[26])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[27])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[28]))];
        movelegales= legalMove(casillaPosibles, coordenadas);

    } else if (target.classList.contains('square') && selectedPiece &&  movelegales.includes(parseFloat(target.id)) ){
        target.appendChild(selectedPiece);
        selectedPiece = null;
        
    }
});

chessboard.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('Rook')) {
        selectedPiece = target;
        let casillaActual = calcularCasillaActual(selectedPiece);
        let movimientos = [-112, -96, -80, -64, -48, -32, -16, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 16, 32, 48, 64, 80, 96, 112];
        let casillaPosibles = [moverPieza(parseFloat(casillaActual), parseFloat(movimientos[0])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[1])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[2])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[3])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[4])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[5])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[6])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[7])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[8])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[9])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[10])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[11])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[12])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[13])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[14])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[15])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[16])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[17])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[18])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[19])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[20])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[21])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[22])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[23])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[24])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[25])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[26])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[27])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[28]))];
        movelegales= legalMove(casillaPosibles, coordenadas);

    } else if (target.classList.contains('square') && selectedPiece &&  movelegales.includes(parseFloat(target.id)) ){
        target.appendChild(selectedPiece);
        selectedPiece = null;
        
    }
});

chessboard.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('Queen')) {
        selectedPiece = target;
        let casillaActual = calcularCasillaActual(selectedPiece);
        let movimientos = [-119, -105, -102, -90, -85, -75, -68, -60, -51, -45, -34, -30, -17, -15, 
                            119, 105, 102, 90, 85, 75, 68, 60, 51, 45, 34, 30, 17, 15,
                            -112, -96, -80, -64, -48, -32, -16, -7, -6, -5, -4, -3, -2, -1, 1, 2, 
                            3, 4, 5, 6, 7, 16, 32, 48, 64, 80, 96, 112];
        let casillaPosibles = [moverPieza(parseFloat(casillaActual), parseFloat(movimientos[0])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[1])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[2])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[3])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[4])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[5])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[6])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[7])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[8])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[9])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[10])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[11])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[12])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[13])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[14])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[15])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[16])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[17])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[18])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[19])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[20])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[21])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[22])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[23])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[24])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[25])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[26])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[27])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[28])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[29])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[30])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[31])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[32])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[33])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[34])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[35])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[36])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[37])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[38])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[39])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[40])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[41])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[42])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[43])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[44])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[45])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[46])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[47])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[48])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[49])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[50])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[51])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[52])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[53])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[54])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[55]))];
        movelegales= legalMove(casillaPosibles, coordenadas);

    } else if (target.classList.contains('square') && selectedPiece &&  movelegales.includes(parseFloat(target.id)) ){
        target.appendChild(selectedPiece);
        selectedPiece = null;
        
    }
});

chessboard.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('King')) {
        selectedPiece = target;
        let casillaActual = calcularCasillaActual(selectedPiece);
        let movimientos = [-17, -16, -15, -1, 1, 15, 16, 17];
        let casillaPosibles = [moverPieza(parseFloat(casillaActual), parseFloat(movimientos[0])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[1])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[2])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[3])),
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[4])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[5])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[6])), 
                            moverPieza(parseFloat(casillaActual), parseFloat(movimientos[7]))];
        movelegales= legalMove(casillaPosibles, coordenadas);

    } else if (target.classList.contains('square') && selectedPiece &&  movelegales.includes(parseFloat(target.id)) ){
        target.appendChild(selectedPiece);
        selectedPiece = null;
        
    }
});


