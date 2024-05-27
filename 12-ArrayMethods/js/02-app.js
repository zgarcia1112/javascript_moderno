/***************************************findIndex***************************************/
// si buscas mas de un elemeto en un arreglo, solo te retornara el indice del primer elemento buscado

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

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
