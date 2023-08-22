//if con triple igual (===)

let puntaje2 = 1001;

if (puntaje2 === "1001") {
  //el triple igual toma valida que el tipo de dato sea el mismo
  console.log("es igual,");
} else {
  console.log("no es igual,  el triple igual valida el tipo de dato");
}

//// el doble igual no valida el tipo de dato como en este ejemplo
if (puntaje2 == "1001") {
  console.log("es el mismo se ocupo el doble = ");
} else {
  console.log("no es el mismo");
}
