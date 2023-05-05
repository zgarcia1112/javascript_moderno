//objeto dentro de otros objetos
//los objetos en js pueden ser complejos

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

console.log(producto.informacion.medidas);

console.log(producto.informacion.fabricacion.pais);

console.log(producto);
