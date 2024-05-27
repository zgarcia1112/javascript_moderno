/***************************************spredOperator***************************************/

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

//spreed operator con arreglo de indices
const meses2 = [...meses, "Agosto"];
console.log(meses2);

const producto = { producto: "Disco duro", precio: 800 };
//producto no es un arreglo asi que no se puede ocupar los 3 puntos al inicio. ejemplo lo de abajo
const carrito2 = [...carrito, producto];
console.log(carrito2);
