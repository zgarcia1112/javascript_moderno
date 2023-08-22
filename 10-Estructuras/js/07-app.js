//operador OR ||

const efectivo = 300;
const credito = 1000;
const disponible = true;
totaPagar = 600;

if (efectivo > totaPagar || credito > totaPagar || disponible > totaPagar) {
  // Esta sintaxis es muy comun utilizarla en la validacion de formularios
  console.log("si podemos pagar");
} else {
  console.log("fondos insuficientes");
}
