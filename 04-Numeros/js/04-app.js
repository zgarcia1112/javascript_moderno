/// Orden de ejecucion de las operaciones

let resultado;

resultado = (20 + 30) * 20; //en este caso las operaciones de adentro del parentesis se ejecutan primero y despues la multiplicacione
resultado = 20 + 30 * 20; //por jerarquia de operaciones se ejecuta primero la multiplicacion y despues la suma

resultado = (20 + 20) * 1.16; //incluyendo el resultado

resultado = (20 + 20) * 0.16; //'porcentaje
console.log(resultado);
