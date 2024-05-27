/***************************************traversig de DOM***************************************/

// const navegacion = document.querySelector(".navegacion");

// console.log(navegacion);
// console.log(navegacion.childNodes); //los espacios en blanco son considerados como elementos

// console.log(navegacion.children); // te muestra en un arreglo los diversos elementos de etiquetas
// console.log(navegacion.children[1]); // accedes al elemento 2 de los multiples elementos de la navegacion

const card = document.querySelector(".card");
// A esto se le conoce como traversing, poder navegar entre opciones de otra opcion abajo el ejemplo
//como en este ejemplo accedemos al contenido del texto
// console.log(card.children[1].children[1].textContent);

// card.children[1].children[1].textContent = "Nuevo heading"; //rescribimos su contenido

// console.log(card.children[0]);

// card.children[0].src = "img/hacer3.jpg";

/***********************Traversing del hijo al padre*****************************/
//mientras tengamos un padre se puede acceder lo mas atras posible

// console.log(card.parentNode); // forma poco recomendada de acceder desde hijo hacia el elemento padre

// console.log(card.parentElement.parentElement.parentElement); //:retorna el main

/*************************Traversind a elementos hijos ***************************/

// selecciona el siguiente elemento hermano
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

// selecciona el elemento anterior al hermano
const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard.previousElementSibling);
