///Arrow function

const aprendiendo = function () {
  console.log("Aprendiendo js");
};

//arrow function
// const aprendiendo2 = () => {
//   console.log("Aprendiendo js");
// };

//arrow function- se caracteriza por tener una sintaxis mas corta
const aprendiendo2 = () => console.log("Aprendiendo js");

//arrow function si  tiene 1 linea el return se da como implicito y se puede manejar asi

const aprendiendo3 = () => "Aprendiendo js";
const suma = () => 3 + 5;
const resta = (num1, num2) => num1 - num2;

console.log(aprendiendo3());
console.log(suma());
console.log(resta(56, 32));
