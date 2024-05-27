/***************************************Switch case***************************************/

const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
    console.log("pagaste con efectivo");
    break;
  case "cheque":
    console.log("pagaste con un cheque");
    break;
  case "tarjeta":
    console.log("pagaste con tarjeta ");
    break;

  default:
    console.log("aun no has seleccionado un metodo de pago");
    break;
}
