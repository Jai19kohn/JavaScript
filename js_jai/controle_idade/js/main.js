function ageCheck() {
let anoAtual = 2022;

var aniversario = Number(document.getElementById("ano").value);
var idade = anoAtual - aniversario;

if (idade >= 18) {
    alert('teste!');
 window.location.href = "https://www.google.com"


} else {
    alert('Você não tem 18 anos!');
}


}