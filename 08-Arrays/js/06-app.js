/* 
Metodos de los arreglos 
*/

const carrito = []; //declarar arreglo vacio

//DEfinir un producto
const producto = {
  nombre: "monitor de 32 pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "celular ",
  precio: 800,
};

const producto3 = {
  nombre: "teclado",
  precio: 100,
};

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2]; //lo agrega al despues de producto
resultado = [producto3, ...resultado]; //lo  agrega antes de producto, producto2

console.table(resultado);
