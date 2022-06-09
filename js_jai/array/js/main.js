//array unidimensional 
 // criar array assim
const num1 = new Array(30, -1, 5, 3, 121);
//ou assim
const num2 = [-2, 40, 16, 111, 33, 64];

console.log(num1);
console.log(num2);

// acessando elementos do array
console.log(`primeiro elemento de num1: ${num1[0]}`);
console.log(`primeiro elemento de num2: ${num2[0]}`);

console.log(`terceiro elemento de num1: ${num1[2]}`);
console.log(`quinto elemento de num2: ${num2[5]}`);

//array bidimensional
console.clear();
const matrix = [
    ['Banana','Maçã', 'Pêra'],
    ['Laranja', true, 1],
    [null, 'uva', -350],
];

//acessando elementos do array
console.log(`Acessa a primeira linha: ${matrix[0]}`);
console.log(`Acessa o segundo elemento: ${matrix[0][1]}`);

// alterando um valor do array
console.clear();
let moedas = ['Real', 'Dólar', 'Coroa', 'Peso'];

console.log(`Antes: ${moedas}`);
moedas[2] = 'Yen';
console.log(`Depois: ${moedas}`)

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log('Antes:');
console.log(matrix1);

console.clear();
matrix1[0][2] = -10;
console.log('Depois:');
console.log(matrix1);

//Métodos em arrays
console.clear();
let numArray = [1, 2, 3, 4];
console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);

// join()
console.clear();
let teste1 = [0, 1, 2, 3, 4, 5];
let teste2 = teste1.join(' *** ');
console.log(teste2);
console.log(typeof teste2);

//tamanho dos arrays pag 
console.clear();
let array = [0, 1, 2, 3, 4];
console.log(array.length);

//remover e inserir elementos
// pop() remove o último elemento
console.clear();
const frutas1 = ['banana', 'laranja', 'maçã', 'manga'];
let x = frutas1.pop();

console.log(frutas1);
console.log(x);

//push() insere um elemento no final do array
console.clear();
const frutas2 = ['banana', 'laranja', 'maçã', 'manga'];
let y = frutas2.push('kiwi');

console.log(frutas2);
console.log(y);

/* shift() remove o elemento do inicio do array
unshift() insere um elemento no inicio do array */
console.clear();
const frutas3 = ['banana', 'manga', 'laranja'];
let z = frutas3.shift();
console.log(frutas3);
console.log(z);

let w = frutas3.unshift('kiwi');
console.log(frutas3);
console.log(w);

//delete apaga um elemento na posição desejada

delete frutas3[2];
console.log(frutas3);

