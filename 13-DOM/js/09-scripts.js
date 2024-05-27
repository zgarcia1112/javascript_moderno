/***************************************Eliminar elementos del DOM***************************************/

//elimina un elemento por si mismo
// const primerEnlace = document.querySelector("a");
// primerEnlace.remove();

// eliminar elemento desde el padre
const navegacion = document.querySelector(".navegacion");
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]); //eliminamos el tercer elemento de navegacion
