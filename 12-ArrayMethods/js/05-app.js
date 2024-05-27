/***************************************find***************************************/
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

//  con un foreach
let resultado;
carrito.forEach((producto, index) => {
  if (producto.nombre === "Tablet") {
    resultado = carrito[index]; // se hace 1 nuevo objeto que contiene { nombre: "Tablet", precio: 200 } porque se le asigno lo que tenia el arreglo de carrito en la posicion que se encuentra tablet
  }
});

console.log(resultado); //:{ nombre: "Tablet", precio: 200 }

//lo mismo de arriba pero con find, este solo te trae el primero elemento que coincida con la condicion
const resultado2 = carrito.find((producto) => producto.nombre === "Tablet");
console.log(resultado2); //::{ nombre: "Tablet", precio: 200 }
