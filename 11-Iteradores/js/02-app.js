///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////break y contine///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// // break  rompe la secuencia donde esta ubicado este
// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     console.log("este es el numero 5");
//     break;
//   }
//   console.log(`Numero: ${i}`);
// }

// console.log("\ncontinue ");

// //continue: en ese caso omite las lineas de abajo del continue pero continua con el for
// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     console.log("este es el numero 5");
//     continue;
//   }
//   console.log(`Numero: ${i}`);
// }

const carrito = [
  { nombre: "monitor de 27 plugadas", precio: 500 },
  { nombre: "Television", precio: 500 },
  { nombre: "tablet", precio: 600, descuento: true },
  { nombre: "teclado", precio: 300 },
  { nombre: "celular", precio: 700 },
  { nombre: "pantalla", precio: 750 },
  { nombre: "laptop", precio: 630 },
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    //recuerda que cuando solo ponemos la variable el if se encarga de validar si es true implicitamente
    console.log(`este producto ${carrito[i].nombre} cuenta con un descuento`);
    continue;
  }

  console.log(`este producto ${carrito[i].nombre} no tiene descuento`);
}
