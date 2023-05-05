const producto = "monitor 20 pulgadas";

// .repeat ta va a permitir repetir una cadena de texto

const texto = " En promocion".repeat(2); //cuando no le pasamos un numero entero lo que hace es redondearlo por ejemplo si tiene 2.4 lo repite 2 veces

console.log(texto);
console.log(`$produto $texto !!!`);

//split, dividir un string

//divide el string en 1 arreglo, de espacio en espacio.
// seria: el metodo empieza a crear 1 variable (espacio 0 del arreglo) hasta que encuetre 1 espacio, lo encuentra y comienza nuevamente (ahora seria la variable en el espacio 1 del arreglo) y lo cierra hasta que encuentre 1 espacio, etc.
const actividad = "Estoy Aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

//divide el string en 1 arreglo, la coma seria el separador
const hobbies =
  "leer, caminar, escuchar musica, escribir, aprender a programar";
console.log(hobbies.split(","));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split("#"));
