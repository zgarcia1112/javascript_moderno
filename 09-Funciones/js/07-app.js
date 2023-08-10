// Comunicacion de funciones entre si

iniciarApp();

function iniciarApp() {
  console.log("iniciando app .....");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda funcion");
  usuarioAutenticado("pablo");
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando usuario... espere ... ");
  console.log(` Usuario autentucado: ${usuario} `);
}
