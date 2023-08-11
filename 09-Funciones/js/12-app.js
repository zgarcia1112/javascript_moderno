// MAP y ForEach con arrow function
//basicamente se simplifica con arrow function la forma de utilizar funciones cortas

const carrito = [
  { nombre: "monitor de 27 plugadas", precio: 500 },
  { nombre: "Television", precio: 500 },
  { nombre: "tablet", precio: 600 },
  { nombre: "teclado", precio: 300 },
  { nombre: "celular", precio: 700 },
  { nombre: "pantalla", precio: 750 },
  { nombre: "laptop", precio: 630 },
];

//en arrow function cuando se tiene 1 linea de codigo se toma como implicito el retur
const nuevoArreglo = carrito.map(
  (producto) => ` ${producto.nombre} - ${producto.precio}`
);

carrito.forEach((producto) =>
  console.log(` ${producto.nombre} -  ${producto.precio}`)
);

console.table(nuevoArreglo);
