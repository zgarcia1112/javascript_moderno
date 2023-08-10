/* 
Diferencia entre una funcion y un metodo para
*/

const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero1)); //esto es una funcion

console.log(numero2.toString()); // Esto es un metodo

function sumar() {
  console.log(2 + 4);
}

sumar();
