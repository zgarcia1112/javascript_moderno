const producto = "monitor 20 pulgadas";

// .replace para remplazar
console.log(producto);
console.log(producto.replace("pulgadas", '"'));
console.log(producto.replace("monitor", "Monitor Curvo"));

//.slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1)); //este no hace nada

///Alternativa a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1)); //este si realiza el corte de la cadena

// cortar solamente la E de emmanuel, esto se puede utiliza por ejemplo si inician secion y
// solo quieres mostar la inicial en vez de todo su nombre en la esquina
const usuario = "Emmanuel";

// Estos metodos muestra lo mismo pero ChartAt es mas corto en la sintaxis
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));
