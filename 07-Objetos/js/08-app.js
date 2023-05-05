///////uso de freeze //////////////////////////////////

"use strict"; //habilita un uso estructo del lenguaje js

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//frezze jace que se comporte el objeto como una constante, no se puede eliminar propiedades, ni modificar ¿, ni añadir nuevas propiedades
Object.freeze(producto);

//salida: error porque el objeto producto esta congelado
producto.disponible = false; //error
producto.imagen = "imagen.jpg"; //error
delete producto.precio; //error

console.log(producto);
//como sabemos si un objeto esta congelado, para eso utilizamos este object metod = isfrozen retorna un true o false
console.log(Object.isFrozen(producto));
