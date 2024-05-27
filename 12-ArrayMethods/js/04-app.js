///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Filter///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// filter
let resultado;
resultado = carrito.filter((producto) => producto.precio > 400);
console.table(resultado);

resultado = carrito.filter((producto) => producto.precio < 600);
console.table(resultado);

resultado = carrito.filter((producto) => producto.nombre !== "Audifonos");
console.table(resultado);

resultado = carrito.filter((producto) => producto.nombre === "Audifonos");
console.table(resultado);
