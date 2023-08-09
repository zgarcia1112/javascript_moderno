/* 
eliminar elementos de 1 carrito 
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

const producto4 = {
  nombre: "celular 2",
  precio: 800,
};

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.push(producto4);

// console.table(carrito);

// //eliminar ultimo elemento de un arreglo
// carrito.pop();
// console.table(carrito);

// //eliminar el primer elemento de un arreglo
// carrito.shift();
// console.table(carrito);

carrito.splice(1, 2); //splice (indice en el cual empieza a eliminar, cantidad de elementos a elimiar)
console.table(carrito);
