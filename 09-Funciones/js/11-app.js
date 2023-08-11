const aprendiendo = function (tecnologia, tecnologia2) {
  console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
};

aprendiendo("python", "js");

// Arrow function con argumentos
const aprendiendo2 = (tecnologia, tecnologia2 = "lenguaje") =>
  `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2("Javascript", "python"));
