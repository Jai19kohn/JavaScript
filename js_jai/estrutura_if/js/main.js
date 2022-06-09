//Estrutura condicinoal simples
//igual duplo

const a = 10;
if(a == 10) {
    console.log('a é 10');
}

const b = '10';
if (b == 10) {
    console.log('b é 10');
}

//triplo igual - verifica o tipo
console.clear();
const c = 10;
if (c === 10) console.log('c é 10');

const d = '10';
if(d === 10) {
    console.log('d é 10');
}
console.log('estou fora do if que compara string');

// Estrutura condicional composta
console.clear();
const e = '10';
if(e === 10) consol.log('e é o numeral 10');
else {
    console.log(`Resultado da condição: ${e === 10}`);
    console.log('e não é o numeral 10');
}

//multiplas condições
console.clear();
const f = 4;
const g = 11;

if (f > 5 || g > 10) {
    console.log(`Condição é ${f > 5 || g > 10}`);
    console.log('f é maior do q 5 ou g é maior do q 10');
}
else {
    console.log('f não é maior do que 5 e g não é maior do q 10');
}
if (f > 5 && g > 10) console.log('f é maior do q 5 e g é maior do q 10');
else {
    console.log(`Condição é ${f > 5 && g > 10}`);
    console.log('f não é maior do q 5 ou g não é maior do q 10');
}


// desvios encadeados
console.clear();
const num = 10;

if (num % 2 == 0 && !isNaN(num)) console.log('Numero par!');
else if (num % 2 != 0 && !isNaN(num)) console.log('Número ímpar!');
else console.log('Não é um número!');

//operador ternário - exemplo 1
console.clear();
let resultado = 3 > 4 ? "Sim" : "Não";
console.log(resultado)
//ex-2
let result = Math.PI < 4 ? console.log('Sim') : console.log('Não'); 

// Switch
console.clear();
const h = 11;
const cor = h > 10 ? 'vermelha' : 'azul';
switch (cor) {
    case 'vermelha' :
        console.log('A cor é vermelha');
        break;
    case 'azul':
        console.log('A cor é azul');
        break;
    default:
        console.log('A cor não é vermelha ou azul');
        break;
}