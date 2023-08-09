/* 
Metodos de los arreglos - forma imperativas


*/

// const meses = ["enero", "febrero", "marzo"];

// //agregar al final del arreglo
// meses.push("abril");
// meses.push("mayo");

// console.table(meses);

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

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.table(carrito);
