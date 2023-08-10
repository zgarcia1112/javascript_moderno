///Ejemplo de multiples funciones que se pasan valores

function sumar(a, b) {
  return a + b;
}

let resultado = sumar(4, 6);

console.log(resultado);

///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Ejemplo mas avanzado///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return total * 1.16;
}

total = agregarCarrito(300);
total = agregarCarrito(200);
total = agregarCarrito(200);
total = agregarCarrito(300);

console.log("Total: " + total);

const totalPagar = calcularImpuesto(total);

console.log(totalPagar);
