/***************************************modificar texto o imagenes con JS ***************************************/

// const encabezado = document.querySelector(".contenido-hero h1").textContent; //forma de encadenamiento, en este ejemplo se accede al texto del elemento seleccionado de HTML
// console.log(encabezado);

// console.log(encabezado.innerText); // si en el CSS visibility:hidden; no lo va encontrar y no lo muestra
// console.log(encabezado.textContent);
// console.log(encabezado.innerHTML); // trae el HTML

document.querySelector(".contenido-hero h1").textContent = "Nuevo heading"; //cambia el contenido del elemento heading por "Nuevo heading"
console.log(document.querySelector(".contenido-hero h1"));

/***********************Imagen*****************************/

const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg";
