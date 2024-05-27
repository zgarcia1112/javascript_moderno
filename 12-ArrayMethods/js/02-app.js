<<<<<<< HEAD
/***************************************findIndex***************************************/
// si buscas mas de un elemeto en un arreglo, solo te retornara el indice del primer elemento buscado
=======
///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////FindIndex///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// la funcion findIndex() retorna -1 si no encuentra coincidencias y si lo encuentra retorna el indice deseado
>>>>>>> c531677dd39c80bb92d6be5a3f9765a46b5d226b

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

<<<<<<< HEAD
/***********************Forma manual de encontrar un indice, *****************************/

meses.forEach((mes, indice) => {
  if (mes === "Abril") {
    console.log("Abril tiene el indice ", indice);
  }
});

//encontrar el indice de abril

const indiceAbril = meses.findIndex((mes) => mes === "Abril"); //retorna indice de lo que se busca, si no lo encuentra retorna un -1

//si findIndex nos retorna un -1 no entra en la validacion
if (indiceAbril !== -1) {
  console.log("se busca abril con el metodo findIndex", indiceAbril);
}

//encontrar un indice en un arreglo de objetos

const indiceCarrito = carrito.findIndex((producto) => producto.precio === 500);

console.log(indiceCarrito);
=======
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
>>>>>>> c531677dd39c80bb92d6be5a3f9765a46b5d226b
