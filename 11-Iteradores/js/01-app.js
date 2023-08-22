// for (let i = 0; i < 20; i++) {
//   console.log("hola");
// }

// Pares e impares
// console.log("pares");
// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log(`el numero ${i} es par`);
//   } else {
//     console.log(`el numero ${i} es impar`);
//   }
// }

// // impares
// console.log("impares");
// for (let i = 0; i < 100; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// // pares
// console.log("pares");
// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log(`el numero ${i} es par`);
//   }
// }

const carrito = [
  { nombre: "monitor de 27 plugadas", precio: 500 },
  { nombre: "Television", precio: 500 },
  { nombre: "tablet", precio: 600 },
  { nombre: "teclado", precio: 300 },
  { nombre: "celular", precio: 700 },
  { nombre: "pantalla", precio: 750 },
  { nombre: "laptop", precio: 630 },
];

console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
  console.log(` ${carrito[i].nombre} ${carrito[i].precio} `);
}
