/////// Metodos de parseo de numero y otros utiles

const numero1 = 20;
const numero2 = "20";
const numero3 = "uno";
const numero4 = 20.3;

console.log(numero1);
console.log(Number.parseInt(numero1)); //retorna 1 numero entero, si por ejemplo teneos 2.3 lo redondea
console.log(Number.parseFloat(numero2)); // retorna 1 numero float
console.log(Number.parseInt(numero3)); //retorna un NaN ya que la cadena no tiene numero solo letras

//revisar si un numero es entero o no
console.log(Number.isInteger(numero1)); //retorna un true porque el numero es un entero
console.log(Number.isInteger(numero3)); //retorna un false porque el numero no es un entero
