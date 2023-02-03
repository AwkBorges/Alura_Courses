
const soma = function(num1,num2) {return num1+num2}
console.log(soma(1,1));


// ARROW FUNCTION


function apresentar(nome){
    return `meu nome é ${nome}`;
}


const apresentarArrow = nome => `meu nome é ${nome}`;
const somaDois = (num1,num2) => num1 + num2;


const somaNumeroPequenos = (num1,num2) =>  {
    if (num1 > 10 || num2 > 10){
        return 'Somente números de 1 a 9';
    }else{
        return num1+num2;
    }
}