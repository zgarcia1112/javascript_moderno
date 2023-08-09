const carrito = [
  { nombre: "monitor de 27 plugadas", precio: 500 },
  { nombre: "Television", precio: 500 },
  { nombre: "tablet", precio: 600 },
  { nombre: "teclado", precio: 300 },
  { nombre: "celular", precio: 700 },
  { nombre: "pantalla", precio: 750 },
  { nombre: "laptop", precio: 630 },
];

// map = map y foreach son casi similares, solo que en map se puede crear un nuevo arreglo, como el ejemplo de abajo
//creamos "nuevoArreglo"  a base de carrito, se puede crear pore ejemplo un arreglo que solo contenga el nombre del producto

const nuevoArreglo = carrito.map(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

const nuevoArregloNombre = carrito.map(function (producto) {
  return `${producto.nombre} `;
});

const nuevoArreglo2 = carrito.forEach(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
console.table(nuevoArregloNombre);
