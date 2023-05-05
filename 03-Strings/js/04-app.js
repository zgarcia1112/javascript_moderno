const producto = "              monitor 20 pulgadas             ";

console.log(producto);
console.log(producto.length); // resultado: 49, los espacios en blanco cuentan como caracteres

//se puede utilzar los metodos de forma separada
console.log(producto.trimStart()); //elimina los espacios en blanco del inicio del producto
console.log(producto.trimEnd()); //elimina los espacios en blanco del final del producto

// Pero tambien se pueden utilziar los metodos de forma encadenada
console.log(producto.trimStart().trimEnd() + " metodos en cadena");

console.log(producto.trim()); //Elimina el espacios al inicio y al final
