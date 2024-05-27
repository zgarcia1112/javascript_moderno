<<<<<<< HEAD
/***************************************Reduce***************************************/
// nos ayuda a sumar los precio de un producto por ejemplo
=======
///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Reduce///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

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

//sumas el total de un carrito de compras con un - forEach

let total = 0;

carrito.forEach((producto) => (total += producto.precio));
console.log(total);

//sumas el total de un carrito de compras con un - Reduce

carrito.reduce((total, producto) => (total = producto.precio), 0);
console.log(total);
=======
  { nombre: "Celular", precio: 700 },
];

//con un foreach -se suma el total de los precios del carrito
let total = 0;

carrito.forEach((producto) => (total += producto.precio));

console.log(total);

//lo mismo de arriba pero con reduce - solucion mas moderna

let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);
>>>>>>> c531677dd39c80bb92d6be5a3f9765a46b5d226b
