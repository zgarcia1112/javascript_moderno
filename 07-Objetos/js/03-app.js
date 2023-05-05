const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//agragar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

console.log(producto);
//eliminar 1 propiedad

delete producto.disponible;

console.log(producto);
