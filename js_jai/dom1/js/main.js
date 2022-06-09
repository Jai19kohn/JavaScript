//JS E DOM
//Objeto document
console.log(document);

//Acessar informações
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

//alterar o título
document.title = 123
//criar um elemento <h1>
let heading = document.createElement('H1');
heading.innerHTML = 'Olá Mundo!';
document.body.appendChild(heading);
heading.style.borderBottom = 'solid 3px #000';