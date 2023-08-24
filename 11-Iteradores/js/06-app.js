///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////ForEach///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// el forEach esta diseñado para recorrer arreglos

const pendientes = [
  "tarea",
  "Comer",
  "proyecto",
  "estudiar javascript",
  "ser exclavo de sigma",
];

//arrow function de 1 linea

// pendientes.forEach((pendiente) =>
//   //el for each es un arrowfunction
//   console.log(pendiente)
// );

pendientes.forEach((pendiente, index) => {
  //el for each es un arrowfunction
  console.log(` ${pendiente} : ${index}`);
});

const carrito = [
  { nombre: "monitor de 27 plugadas", precio: 500 },
  { nombre: "Television", precio: 500 },
  { nombre: "tablet", precio: 600 },
  { nombre: "teclado", precio: 300 },
  { nombre: "celular", precio: 700 },
  { nombre: "pantalla", precio: 750 },
  { nombre: "laptop", precio: 630 },
];

//for each no crea un arreglo nuevo
carrito.forEach((producto) =>
  console.log(` ${producto.nombre} : ${producto.precio}`)
);

// map crea un arreglo nuevo
const nuevoArreglo = carrito.map(
  (producto) => ` ${producto.nombre} ${producto.precio}`
);

console.table(nuevoArreglo);
