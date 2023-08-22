///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////While///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

let i = 0; //inicializar el while

// //ejerciocio de fizz y buzz
// while (i < 100) {
//   //condicion
//   if (i % 3 === 0 && i % 5 === 0) {
//     //tambien se puede ocupar esta condicion i % 15 === 0
//     console.log(`  ${i} FIZZBUZZ`);
//   } else if (i % 3 === 0) {
//     console.log(`  ${i} fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`  ${i} buzz`);
//   }

//   i++; //incremento
// }

let j = 0;

while (j < 100) {
  if (j % 2 === 0) {
    console.log(`${j} es par`);
  } else {
    console.log(`${j} es impar`);
  }

  j++;
}
