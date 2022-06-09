const usuario = "Jaine"
const senha = 54321

for(tentativa = 0; tentativa < 3; tentativa ++ ) {
    var user = prompt("Coloque seu usuário!");
    var password = prompt("Coloque sua senha!");
    if (user == usuario && password == senha) {
        alert("Bem vindo ao site");
        break;
    } else {
        alert ("Usuário e/ou senha incorretos!");
    }
}

if (user != usuario || password != senha) {
    alert("Você foi bloqueado.");
}