//operador ternario
// partes de un operador ternario
// condicion ? true: si se cumple has esto ":" false: no se cumple has esto.
//en la condicion podemos agregar or y and si se requiriera

const autenticado = true;
const puedePagar = true;

console.log(
  autenticado && puedePagar ? "Si esta autenticado" : "no esta autenticado"
);

// operador ternario anidad

console.log(
  autenticado
    ? puedePagar
      ? "si esta autenticado y puede pagar"
      : "no esta autenticado y no peude pagar"
    : "no no esta autenticado"
);
