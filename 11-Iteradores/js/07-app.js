///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////For con of///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// For of itera sobre arreglos
const pendientes = ["tarea", "comer", "proyecto", "Estudiar javascript"];

const carrito = [
  { nombre: "monitor de 27 plugadas", precio: 500 },
  { nombre: "Television", precio: 500 },
  { nombre: "tablet", precio: 600 },
  { nombre: "teclado", precio: 300 },
  { nombre: "celular", precio: 700 },
  { nombre: "pantalla", precio: 750 },
  { nombre: "laptop", precio: 630 },
];

for (let pendiente of pendientes) {
  console.log(pendiente);
}

for (let producto of carrito) {
  //   console.log(producto);
  for (let contProducto in producto) {
    console.log(`${producto[contProducto]}`);
  }
}
