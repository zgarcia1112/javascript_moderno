///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////FindIndex///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// la funcion findIndex() retorna -1 si no encuentra coincidencias y si lo encuentra retorna el indice deseado

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// encontrar el indice de un mes en especifico con foreach y diciembre
meses.forEach((mes, i) => {
  if (mes === "Diciembre") {
    console.log(`Encontrado en el indice ${i}`);
  }
});

//Encontrar el indice  de tal mes con findindex

const indice = meses.findIndex((mes) => mes === "Abril");

console.log(indice);

//encontrar un indice en un arreglo de objetos

const indiceObj = carrito.findIndex(
  (producto) => producto.nombre === "Teclado"
);

console.log(indiceObj);
