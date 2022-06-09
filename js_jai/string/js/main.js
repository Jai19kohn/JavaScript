//juntar strings
let valor01 = 100;
const valor02 = 5;
console.log('a multiplicação de ' + valor01 + ' por ' + valor02 + ' é ' + valor01 * valor02 );
console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`); //mais usado por conter menos aspas

//métodos de strings
console.clear();
const string01 = 'Instituto da Oportubidade Social';

//acessar 1 caracter
console.log(string01.charAt(0));
console.log(string01[0]);
//acessando 10ªcaracter
console.log(string01.charAt(10));
console.log(string01[10]);
//tamanho da string em caracter
console.log(string01.length);
// deixa tudo maiúsculo
console.log(string01.toUpperCase());
//deixa tudo minúsculo
console.log(string01.toLowerCase());

//substring corta a string de acordo com os índices indicados nos parentes
console.log(string01.substring(1,3));
console.log(string01.substring(13));

//split divide a string em substrings
console.clear();

const str1 = 'A raposa é um animal esperto';

//divide em palavras ' '
const palavras = str1.split(' ');
console.log(palavras[3]);

//divide em caracteres ''
const chars = str1.split('');
console.log(chars[7]);

//substituir string
let Newstr1 = str1.replace('raposa', 'coruja');
console.log(Newstr1); 

//  Métodos de busca em strings
console.clear();
let frase = 'Sou um aluno do IOS e o IOS é muito bom!';
console.log(frase.indexOf('IOS'));
console.log(frase.lastIndexOf('IOS'));

console.log(frase.search('IOS'));

console.log(frase.startsWith('S'));
console.log(frase.startsWith('a'));

console.log(frase.endsWith('bom!'));
console.log(frase.endsWith('x'));
