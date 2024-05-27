/***************************************Seleccionar elementos por su id***************************************/
//si tienes 2 id duplicados getElementById te muestra el primero que encuentre

const formulario = document.getElementById("formulario");

console.log(formulario);

const noExiste = document.getElementById("no-existe"); //:como no encuentra el id retorna un null
console.log(noExiste);
