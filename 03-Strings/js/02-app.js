const producto = "monitor 20 pulgadas";

console.log(producto);

//conocer la cantidad de letras de la cadena de texto
console.log(producto.length); ///length se considera porpiedad es por eso que no utiliza parentesis

// //encontrar palabras dentro de string
// console.log(producto.indexOf("monitor")); ///devuelve 0 porque lo encuentra
// console.log(producto.indexOf("tablet")); //devuelve -1 porque no lo encuentra

//tambien funciona includes

console.log(producto.includes("tablet")); //devuelve false porque no lo encuentra
console.log(producto.includes("tablet")); //devuelve true porque no lo encuentra
