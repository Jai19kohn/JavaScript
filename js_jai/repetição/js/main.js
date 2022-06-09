//while
let contador = 1;

while(contador <= 10) {
    console.log(`Valor = ${contador}`);
    contador ++;
}

// while com decremento
console.clear();
let cont = 10;
while (cont >= 0) {
    console.log(`Valor = ${cont}`);
    cont --;
}

//do-while
console.clear();
let i = 0,
    text = '';
do {
    text += `O número é ${i}\n`;
    i++;
} while (i < 10);
console.log(text);

//for
console.clear();
for (let i = 0; i < 10; i ++) console.log(`Laço For número: ${i}`);

//laços de arrays
const frutas = ['apples', 'oranges', 'pears', 10, true];
console.clear();
for (let j = 0; j <frutas.length; j++) console.log(`Nome: ${frutas[j]} \n`);

//array de objeto e Laços
console.clear();
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentidt appt',
        isCompleted: false,
    },
];

//for overloop
for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}