//operador mayor que y menor que

//en los if se ejecuta la primera condicion que de cumpla, en el ejemplo de abajo solo se ejecuta el if

const dinero = 1300;
const totalApagar = 500;
const tarjeta = true;

if (dinero >= totalApagar) {
  //mayor que
  console.log("si podemos pagar");
} else if (true) {
  //implicitamente valida si es true o false si es un valor booleano
  console.log("si puedo pagar porque tengo la tarjeta");
} else {
  console.log("fondos insuficientes ");
}

//en los if se ejecuta la primera condicion que de cumpla, en el ejemplo de abajo solo se ejecuta el else if

const dinero2 = 200;

if (dinero2 >= totalApagar) {
  //no se cumple
  //mayor que
  console.log("si podemos pagar");
} else if (true) {
  //este se ejecuta
  //implicitamente valida si es true o false si es un valor booleano
  console.log("si puedo pagar porque tengo la tarjeta");
} else {
  console.log("fondos insuficientes ");
}
