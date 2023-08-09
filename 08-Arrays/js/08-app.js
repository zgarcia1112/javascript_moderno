// Explicacion
// https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/learn/lecture/21849038#overview

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Destructuring con objetos :

const { nombre } = producto;
console.log(nombre);

//DEstructuring con arreglos : se realiza esto ya que en los arreglos esta mas ligado a la posicion y no al nombre como es el caso de los objetos (Como el ejemplo de arriba   )
const numeros = [10, 20, 30, 40, 50];

// const [primero] = numeros;
//  const [primero, segundo, tercero] = numeros; // al obtener los valores se referencia por la posicion (indice) del arreglo y no el nombre

// const [, , tercero] = numeros; //  de esta forma se puede obtener solo el tercer valor excluyendo los primero

// console.log(primero);
// console.log(tercero);

const [primero, segundo, ...tercero] = numeros; //tambien se puede obtener por medio arreglo: por ejemplo tercero

console.table(tercero);
