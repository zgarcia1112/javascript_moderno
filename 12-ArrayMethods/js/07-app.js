/***************************************Concat***************************************/
//como unir 2 arreglos

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre", "octubre"];
const meses3 = ["noviembre", "diciembre"];

//contat
//se le puede concatenar solo 1 arreglo mas pero tambien 2, solo que se separa por comas
const resultado = meses.concat(meses2, meses3, "otro mes");

console.log(resultado);

/***********************spred operator -- otra forma de unir arreglos*****************************/

//si quieres agregar otro elemento al arreglo se realiza sin los 3 puntos
const resultado2 = [...meses, ...meses2, ...meses3, "otro mes"];
console.log(resultado2);
