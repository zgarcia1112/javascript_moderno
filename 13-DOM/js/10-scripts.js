/***************************************Generando Html desde JS***************************************/

const enlace = document.createElement("a");

//agregandole el texto
enlace.textContent = "Nuevo Enlace";

//anadiendo propiedades
enlace.href = "/nuevo-enlace";
enlace.target = "_blank";
enlace.setAttribute("data-enlace", "nuevo-enlace"); //agrega el cualquien atributo que requieras
enlace.classList.add("alguna-clase");
// enlace.onclick = miFuncion; //agregar una funcion por si realizan click en el elemento
console.log(enlace);

//seleccionamos la navegacion
const navegacion = document.querySelector(".navegacion");

//agregamos el enlace en el elemento padre navegacion
// navegacion.appendChild(enlace);//forma de agregarlo al final del los elementos hijos

//otra foma de agregar el enlace a un elemeto padre

// console.log(navegacion.children[0].textContent);

navegacion.insertBefore(enlace, navegacion.children[1]);

// //experimento mio jeje
// for (var i = 0; i < navegacion.children.length; i++) {
//   if (navegacion.children[i].textContent === "Vender") {
//     navegacion.insertBefore(enlace, navegacion.children[i]);
//   }
// }

// function miFuncion() {
//   alert("diste-click");
// }

/***********************Crear un Card de forma dinamica*****************************/

const parrafo1 = document.createElement("P");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("P");
parrafo2.textContent = "Concierto de rockssss";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("P");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

//crear div con la clase de info
const info = document.createElement("DIV");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// crear la imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";
imagen.alt = "texto alternativo";

//crear el card
const card = document.createElement("div");
card.classList.add("card");

//asignar la imagen
card.appendChild(imagen);

//asignar info
card.appendChild(info);

//insertar en el HTML
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card);

console.log(info);

//crear la imagen
