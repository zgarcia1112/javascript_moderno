const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Comprobar si un valor existe en un arreglo--- formas de hacerlo
meses.forEach((mes) => {
  console.log("Enero" === mes ? true : "si se encuentra el mes de enero");
});

const resultado = meses.includes("Enero"); //Retorna un true si lo encuentra y un false si no lo encuentra
console.log(resultado);

//En un arreglo de objetos se utiliza .some///////////////////////////////////////////////////////////////

// forma de utilizarlo pero se peude simplificar
// const existe = carrito.some((producto) => {
//   return producto.nombre === "Celular";
// });

// forma simplificada, el return se toma como implicito
const existe = carrito.some((producto) => producto.nombre === "Celular");
console.log(existe);

///////////////////////////////////// En un arreglo tradicional con .some

const existe2 = meses.some((mes) => mes === "Febrero");
console.log(`${existe2} tradicional`);
