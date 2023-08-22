//buenas practicas para el uso de if
const autenticado = true;

if (autenticado) {
  console.log("usuario autenticado");
}

const puntaje = 500;

function revisarPuntaje() {
  if (puntaje > 400) {
    console.log("excelente");
    return;
  }

  if (puntaje > 300) {
    console.log("buen puntaje... feliciadaes");
    return;
  }
}

revisarPuntaje();
