/***************************************cambiando el CSS con Js***************************************/

const encabezado = document.querySelector("h1");

console.log(encabezado.style); //:enlista todos los cambias relacionado a css se puede cambiar.

// encabezado.style.backgroundColor = "red"; // cambiar el backgraund de h1 a rojo

// encabezado.style.fontFamily = "Arial";

// encabezado.style.textTransform = "uppercase";

const card = document.querySelector(".card");
// card.classList.add("nueva-clase");// se puede agregar solo 1 clase
card.classList.add("nueva-clase", "segunda-clase"); // se puede agregar tambien varias clases.
card.classList.remove("card"); // se ocupa para elimiar clases
console.log(card.classList);
