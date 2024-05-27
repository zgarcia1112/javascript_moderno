/***************************************Reduce***************************************/
// nos ayuda a sumar los precio de un producto por ejemplo
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

//sumas el total de un carrito de compras con un - forEach

let total = 0;

carrito.forEach((producto) => (total += producto.precio));
console.log(total);

//sumas el total de un carrito de compras con un - Reduce

carrito.reduce((total, producto) => (total = producto.precio), 0);
console.log(total);
