const boolean1 = true;

const boolean2 = false;

const boolean3 = "true"; //declaracion de variable primitiva

console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean1);

console.log(boolean1 == boolean3); //false
console.log(boolean1 === boolean3); //false

//creacion de un boolean pero como objeto

const boolean4 = new Boolean(true); //boolean4 es un objeto no una variable primitiva de tipo booleano

console.log(typeof boolean4); // object
