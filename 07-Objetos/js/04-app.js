const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};
//forma anterior de realizarlo
// const nombre = producto.nombre;
// console.log(nombre);

//ahora  se ocupa algo llamado desestruracion de un objeto
//que es lo que hace extrae la variable y crea la variable fuera del objeto en este caso producto

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Destructuring
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
