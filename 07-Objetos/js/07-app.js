const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//una variable  const no puede ser reasignada
//sin embargo una un objeto nombrado const puede ser modificado como por ejemplo borrar propiedades o cambiar el valor de una propiedad

producto.disponible = false;

delete producto.precio;

console.log(producto);
