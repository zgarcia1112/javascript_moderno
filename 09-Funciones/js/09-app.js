// Añadir funciones a un objeto

const reproductor = {
  reproducir: function (id) {
    // como es un objeto esto es una propiedad, pero como  tiene una funcion se conoce como metodos de propiedad
    console.log("Reproduciendo cancion ................" + id);
  },
  pausar: function () {
    console.log(
      "pausando................................................................"
    );
  },
  borrar: function (id) {
    console.log("borrando cancion " + id);
  },

  crearPlaylist: function (ids) {
    console.log("se creo la siguiente playlist " + ids);
    return ids;
  },
  reproducioendoPlaylist: function (ids) {
    console.log("se esta reproduciendo la playlist" + ids);
  },
};

reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.pausar();
const playlist = reproductor.crearPlaylist([
  4, 3, 4, 5, 6, 54, 444, 6, 5, 4, 4, 5, 4, 5, 7, 908, 6, 6, 4,
]);

reproductor.reproducioendoPlaylist(playlist);

//tambien se puede añadir funciones de propiedad pero fuera del objeto

// reproductor.borrar = function (id) {
//   console.log("borrando cancion " + id);
// };

reproductor.borrar(30);
