/***************************************filter***************************************/
//funcion de las mas utilizada
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

let resultado;
//seleccion de productos por rango de precios
resultado = carrito.filter((producto) => producto.precio > 400);
resultado = carrito.filter((producto) => producto.precio < 600);

//eliminar producto del carrito de compras
resultado = carrito.filter((producto) => producto.nombre !== "Audifonos");

//si solo queremos 1 producto del carrito
resultado = carrito.filter((producto) => producto.nombre === "Audifonos");

console.log(resultado);
