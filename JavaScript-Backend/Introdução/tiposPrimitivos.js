//Number
const meuNumero  = 3;
const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;
console.log(operacaoMatematica);

//Ponto Flutuante
const pontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const operacaoFlutuante = primeiroNumero/pontoFlutuante;
console.log(operacaoFlutuante);

//NaN -> Not a Number

const nome = "Borges";
console.log(nome*meuNumero);

//String

const texto1 = "Olá, tudo bom?";
const texto2 = 'Olá, tudo bom?';
const stringNumeros = '777';

const citacao = 'Gustavo disse "oi!"';
const data = "Hoje de manhã";
console.log(citacao + data);


const cidade = "belo horizonte";
const input = "Belo Horizonte";
console.log(cidade === input);

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";
const inputMinusculo = input2.toLowerCase();
console.log(cidade2 === inputMinusculo)

const senha = "minhaSenha123"
console.log(senha.length)


//Boolean

const firstNumber = 5;
const secondNumber = 10;
let cadastroAtivado = true;
console.log(firstNumber === secondNumber);

const firstText = 'JavaScript';
const secondText = 'Python';
console.log(firstText === secondText);

//

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

/*

camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. 
Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.

*/

// Null

let nInput = null;
let nInput2;

console.log(nInput); // null
console.log(nInput2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

/*

No cotidiano é comum considerar undefined como uma ausência de valor “inesperada” (causada por um bug ou erro no código) 
e null como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada. 
Por exemplo, um campo em uma tabela de um banco de dados que esteja sem dados ou 
uma informação solicitada que não seja obrigatória e não tenha sido preenchida pelo usuário pode ter valor null.

*/