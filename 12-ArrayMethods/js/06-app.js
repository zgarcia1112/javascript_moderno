/***************************************every***************************************/
//esta funcion nos retorna un true solo si todos los elementos de un arreglo complen con una condicion

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

let resultado = carrito.every((producto) => producto.precio < 1000);
console.log(resultado); //: true
