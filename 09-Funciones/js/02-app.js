/* 
JS se compila en 2 vueltas en la primera se compila funciones y se declaran variables.
en la segunda vuelta ya viene lo que es la ejecucion, es por eso que sumar(); si se ejecuta porque en la primera vuelta se compilo la funcion.
sin embargo en sumar 2 nos envia error porque como tal solo esta declarada const sumar2(); pero no esta definida como una funcion. 
*/

///DEclaracion de funcion (Function Declaration)

//este codigo si funciona
sumar();
function sumar() {
  console.log(2 + 4);
}

///este codigo no funciona
///Expresion de funcion (function Expresion)
sumar2();
const sumar2 = function () {
  console.log(3 + 5);
};
