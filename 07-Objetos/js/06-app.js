//como aplicar Destructuring
const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      pais: "china",
    },
  },
};

//lo que hacemos es extraer nombre, informacion(objeto completo), fabicacion(objeto), pais(pais lo tenemos dentro de producto->informacion->fabricacion)}
//nos da un ejemplo claro de como acceder a cada capa del un objeto dentro de otros.
const {
  nombre,
  informacion,
  informacion: {
    fabricacion,
    fabricacion: { pais },
  },
} = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);
