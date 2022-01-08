function arrayGenerator(lines, columns) {
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

function generarBoolean() {
  if (Math.random() <= 0.5) {
    return false;
  } else {
    return true;
  }
}

function contabilizador(arrayDatos) {
  const chunk = [];
  let contador = 0;
  for (let i = 0; i < arrayDatos.length; i++) {
    const element = arrayDatos[i];
    if (element == true) {
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

function distribuidor(arrayGenerado) {
  const distribuidor = [];

  distribuidor.push(distribuidorLineas(arrayGenerado));

  distribuidor.push(distribuidorColumnas(arrayGenerado));

  return distribuidor;
}

function distribuidorLineas(arrayGenerado) {
  const numerosLineas = [];

  for (let i = 0; i < arrayGenerado.length; i++) {
    const linea = contabilizador(arrayGenerado[i]);
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

const array = arrayGenerator(5, 5);

console.log(array);

console.log(contabilizador([true, false, true, false, true]));

console.log(distribuidor(array));
