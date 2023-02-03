// ### VAR, LET e CONST ###

//var -> funciona em qualquer parte do código.

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

//let
let forma = 'retângulo';    
let altura2 = 5;
let comprimento2 = 7;
let area;

if(forma === 'retângulo'){
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2;   
}
console.log(area);
//let area; -> não consegue acessar a variável área.

/*
Dentro do nosso programa temos vários blocos de código e esses blocos são definidos pelas chaves. Como é, por exemplo, o caso do if.
Não é interessante nós termos uma variável que consigamos mexer no valor dela dentro dos blocos. 
Não, pelo menos, com certo controle, já que o var é muito solto dentro do nosso programa e podemos acabar reutilizando o nome dessa variável em alguns outros locais, 
dentro de outros blocos de código. Por segurança, é bom mantermos como let.
A let é um pouco mais solta. Nós conseguimos fazer mais reatribuições, ela aceita que mudemos os valores, do que a terceira forma, 
o terceiro tipo de variável que existe no JavaScript, que é a const.
*/

//const

/*
A const é uma constante. Ou seja, uma vez que a colocamos no programa, não conseguimos alterá-la.
Para manter a nossa aplicação concisa. Ou seja, impedir que, durante a execução da aplicação,
alguém coloque uma linha que mude o valor de uma variável que estamos trabalhando em cima. 
Protegendo, assim, o fluxo de trabalho da nossa aplicação.
*/  

const forma2 = 'quadrado';
const altura3 = 5;
const comprimento3 = 7;
//const area; -> ERRO

/*
Nesse caso, nós poderíamos inicializar ela com algum valor, porém, não sabemos qual valor vai ser. 
Então, não seria uma boa prática. E, além disso, sabemos que vamos mexer no valor dela lá na frente, então, não pode ser uma constante. 
Se vamos alterar o valor dela não pode ser algo fixo, algo preso naquele valor que já inicializamos. Nesse caso, ela tem que ser um let.
*/

//const area = altura * comprimento; -> OK
//console.log(area);

if(forma2 === 'quadrado'){
    area = altura * comprimento
}else{
    area = (altura * comprimento) / 2;   
}
console.log(area);

// ### TRUTH e FALSE ###

const usuarioLogado = true;
const contaPaga = false;

// 0 -> false
// 1 -> true

console.log(0 == false);
console.log('' == false);
console.log(1 == true);

//null -> vazio ou nada;
//undefined -> não definida;

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = 'Aoba';

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull); // object


// ### CONVERSÃO ###

const num = 456;
const numeroString = '456';

console.log(num === numeroString); //false
console.log(num == numeroString); // true

/*

=== Considera o Tipo.
== Converte e Compara.
= Atribuí valor para a variável.

*/

//Number()
//String()
console.log(num + numeroString)
console.log(num + Number(numeroString))

let telefone = 12341234;
console.log("O telefone é " + String(telefone));

let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString())

let usuarioConectado = false;
console.log(String(usuarioConectado)); // string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado));

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "Gustavo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let userLogado = false;
console.log(Number(userLogado)); // false -> 0
userLogado = true;
console.log(Number(userLogado)); // true -> 1

// ### PALAVRAS RESERVADAS ###

/*
arguments as async 
await break case
catch class const
continue debugger default
delete do else
eval export extends
false finally for
from function get
if import in
instanceof let of
new null return
set static super
switch target this
throw true try
typeof var void
while with yield
enum implements interface
package private protected
public
*/