export function arrayGenerator(lines, columns) {
    const miArray = [];
    for (let i = 0; i < lines; i++) {
        const columnas = [];
        for (let j = 0; j < columns; j++) {
            const booleano = rndBool();
            columnas.push(booleano);
        }
        miArray.push(columnas);
    }
    return miArray;
}
function rndBool() {
    return Math.random() <= 0.5 ? false : true;
}
function contabilizador(arrayDatos) {
    const chunk = [];
    let contador = 0;
    for (const element of arrayDatos) {
        if (element) {
            contador++;
        }
        else {
            if (contador > 0) {
                chunk.push(contador);
                contador = 0;
            }
        }
    }
    if (contador > 0) {
        chunk.push(contador);
    }
    return chunk;
}
export function distribuidor(arrayGenerado) {
    const distribuidorArr = [];
    distribuidorArr.push(distribuidorLineas(arrayGenerado));
    distribuidorArr.push(distribuidorColumnas(arrayGenerado));
    return distribuidorArr;
}
function distribuidorLineas(arrayGenerado) {
    const numerosLineas = [];
    for (const element of arrayGenerado) {
        const linea = contabilizador(element);
        numerosLineas.push(linea);
    }
    return numerosLineas;
}
function distribuidorColumnas(arrayGenerado) {
    const numerosColumnas = [];
    for (let i = 0; i < arrayGenerado[0].length; i++) {
        const numeroColumna = [];
        for (let j = 0; j < arrayGenerado.length; j++) {
            const element = arrayGenerado[j][i];
            numeroColumna.push(element);
        }
        const columna = contabilizador(numeroColumna);
        numerosColumnas.push(columna);
    }
    return numerosColumnas;
}
export function isGameCompleted(gameArr, gameSolution) {
    if (gameArr.length !== gameSolution.length) {
        throw new Error('Numero filas distinto');
    }
    for (const row of gameArr) {
        for (const rowSolution of gameSolution) {
            if (row.length !== rowSolution.length) {
                throw new Error('Numero columnas distinto');
            }
        }
    }
    let isCompleted = true;
    loopExterno: for (let i = 0; i < gameArr.length; i++) {
        for (let j = 0; j < gameArr.length; j++) {
            const cell = gameArr[i][j];
            const cellSolution = gameSolution[i][j];
            if (cell !== cellSolution) {
                isCompleted = false;
                break loopExterno;
            }
        }
    }
    return isCompleted;
}
//# sourceMappingURL=index.js.map