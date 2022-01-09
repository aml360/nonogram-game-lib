
export type NonoArray = boolean[][];

export function arrayGenerator(lines: number, columns: number) {
  const miArray = [];

  for (let i = 0; i < lines; i++) {
    const columnas = [];
    for (let j = 0; j < columns; j++) {
      const booleano = generarBoolean();
      columnas.push(booleano);
    }

    miArray.push(columnas);
  }

  return miArray;
}

export function generarBoolean() {
  if (Math.random() <= 0.5) {
    return false;
  } else {
    return true;
  }
}

export function contabilizador(arrayDatos: boolean[]):number[] {
  const chunk: number[] = [];
  let contador = 0;
  for (const element of arrayDatos) {
    if (element) {
      contador++;
    } else {
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

export function distribuidor(arrayGenerado: NonoArray) {
  const distribuidorArr = [];

  distribuidorArr.push(distribuidorLineas(arrayGenerado));

  distribuidorArr.push(distribuidorColumnas(arrayGenerado));

  return distribuidorArr;
}

export function distribuidorLineas(arrayGenerado: NonoArray) {
  const numerosLineas = [];
  for (const element of arrayGenerado) {
    const linea = contabilizador(element);
    numerosLineas.push(linea);
  }
  return numerosLineas;
}

export function distribuidorColumnas(arrayGenerado: NonoArray) {
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

export function isGameCompleted(gameArr: NonoArray, gameSolution: NonoArray) {
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

