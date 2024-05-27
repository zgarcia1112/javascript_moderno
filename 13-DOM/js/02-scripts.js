/***************************************seleccionar elementos por su clase***************************************/

const header = document.getElementsByClassName("header");

console.log(header);

const hero = document.getElementsByClassName("hero");

console.log(hero);

/***********************si las clases existen mas de 1 vez*****************************/

const contendores = document.getElementsByClassName("contenedor"); //:retorna un arreglo con todos

console.log(contendores);

/***********************si una clase no existe*****************************/

noExiste = document.getElementsByClassName("no-existe"); //:retorna un arreglo vacio
console.log(noExiste);
