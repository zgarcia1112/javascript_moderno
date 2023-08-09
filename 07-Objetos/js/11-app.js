///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////uso de this en los objetos///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// se ocupa el this dentro del objeto porque se busca por ejemplo la variable nombre dentro del objeto producto.
// this es una palabra reservada y no podemos tener variables nombradas asi
const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de: ${this.precio} `
    );
  },
};

const producto2 = {
  nombre: "Tablet",
  precio: 3000,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de: ${this.precio} `
    );
  },
};
producto.mostrarInfo();
producto2.mostrarInfo();
