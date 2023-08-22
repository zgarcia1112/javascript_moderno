//Operador mayor que y menor que

const dinero = 500;
const totalApagar = 300;

// mayor que
if (dinero > totalApagar) {
  //retorna un true
  console.log("Si podemos pagar");
} else {
  console.log("fondos inecesarios");
}

// mayor que
if (dinero >= totalApagar) {
  /// retorna un true
  console.log("Si podemos pagar");
} else {
  console.log("fondos inecesarios");
}

const dinero2 = 300;
const pago = 300;

if (dinero2 <= dinero) {
  //retorna un true
  //menor que
  console.log("Fondos");
}

if (dinero2 < pago) {
  //retorna un false
  console.log("Fondos menor");
}
