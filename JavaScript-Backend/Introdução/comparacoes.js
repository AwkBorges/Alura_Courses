// == comparação implícita

const numero = 5;
const texto = '5';

console.log(numero == texto) // true
console.log(numero ===  texto) // false

console.log(typeof numero)
console.log(typeof texto)

// == só compara o valor
// === compara o valor e o tipo de dado

// Boa prática -> ===

// conversão explicíta

Number()
String()