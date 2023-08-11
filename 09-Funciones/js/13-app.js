//arrow functions con metodos de propiedad
//tambien nos muestran un ejemplo de getters y setters en js

const reproductor = {
  cancion: "",
  //si tenemos 1 parametro se pueden omitir los parentesis
  reproducir: (id) =>
    console.log("Reproduciendo cancion ................" + id),

  pausar: () =>
    //sin embargo si no tiene parametros se tiene que colocar el parentesis
    console.log(
      "pausando................................................................"
    ),
  borrar: (id) => console.log("borrando cancion " + id),

  crearPlaylist: (ids) => ids,

  reproducioendoPlaylist: (ids) =>
    console.log("se esta reproduciendo la playlist " + ids),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
  },

  get obtenerCancion() {
    console.log(this.cancion);
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

//la sintaxis con los get y set es diferente a una funcion ojo con esto
reproductor.nuevaCancion = "lamento boliviano"; //asi se agrega en el caso de un get en un objeto
reproductor.obtenerCancion; // asi se manda a llamar

reproductor.borrar(30);
