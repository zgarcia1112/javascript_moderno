<<<<<<< HEAD
/***************************************filter***************************************/
//funcion de las mas utilizada
=======
///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Filter///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada

>>>>>>> c531677dd39c80bb92d6be5a3f9765a46b5d226b
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
<<<<<<< HEAD
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
=======
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
>>>>>>> c531677dd39c80bb92d6be5a3f9765a46b5d226b
