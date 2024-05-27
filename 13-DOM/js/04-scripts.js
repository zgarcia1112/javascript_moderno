/***************************************QuerySelector***************************************/
// ocupa una sintaxis de tipo CSS
//hay multiples card en el documento pero nos retornar el primero que encuentra.
const card = document.querySelector(".card");

console.log(card);

//podemos tener selectores especificos como en css

const info = document.querySelector(".premium .info");
console.log(info);

//seleccionar el 2do card del hospedaje
const segundoCard = document.querySelector(
  "section.hospedaje .card:nth-child(2)"
);

console.log(segundoCard);

//seleccinar el formulario
//si hay 2 id selecciona el primero que encuentra
const formulario = document.querySelector("#formulario");

console.log(formulario);

//seleccionar elementos de HTML
const navegacion = document.querySelector("nav");
console.log(navegacion);
