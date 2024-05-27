/**************************************operadir and &&***************************************/

let usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
  //si alguna es false pasa a los else if y checa cual se cuple
  console.log("puede puedes comprar");
} else if (!usuario && !puedePagar) {
  console.log("no has iniciado sesion y no tienes fondos ");
} else if (!usuario) {
  console.log("Inicia sesion");
} else if (!puedePagar) {
  console.log("fondos insuficientes");
} else {
  console.log("no  no puedes comprars");
}
