//////////////////////////////// use de seil //////

"use strict"; //habilita un uso estructo del lenguaje js

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};
//con el metodo seal no se pueden agregar propiedades ni eliminar, pero si puedes modificar
Object.seal(producto);

producto.disponible = false; //error
producto.imagen = "imagen.jpg"; //error
delete producto.precio; //error

console.log(producto);
