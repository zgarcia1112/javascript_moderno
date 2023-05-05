const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//revisar si 2 numeros son iguales

console.log(numero1 == numero3);
console.log(numero1 == numero2); // resultado= true, el operador (==) no es estricto en el tipo de dato, aqui vemos un ejemplo claro

//comparador estricto = al comparar verifica que tenga el mismo contenido y que el tipo de dato sea el mismo

console.log(numero1 === numero2); ///  : false
console.log(numero1 === parseInt(numero2)); ///: true, se parsea a entero
console.log(typeof numero1); //number
console.log(typeof numero2); //string

//Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); // true
console.log(numero1 != numero2); //false
console.log(numero1 != parseInt(numero2)); // false
