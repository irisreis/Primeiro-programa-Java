var aux;
function verificarN() {
    aux = document.getElementById("nome").value;
    aux2 = document.getElementById("nome").value;
    var resultado;
    for (i = 0; i < aux2.length; i++) {
        switch (aux2.charAt(i)) {
            case ".":
            case ",":
            case "*":
            case "'":
            case ";":
            case ":":
            case "|":
            case "?":
            case "+":
            case "-":
            case "_":
            case ")":
            case "(":
            case "*":
            case "*":
            case "&":
            case "%":
            case "$":
            case "#":
            case "@":
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                resultado = false;
                break;
            default: resultado = true;
        }
    }
    if (aux.length == 0 || resultado == false) {
        document.getElementById("nome").style.backgroundColor = "red";
        document.getElementById("info1").style.color = "red";
        document.getElementById("info1").innerHTML = "Nome inválido.";
    } else {
        document.getElementById("nome").style.backgroundColor = "green";
        document.getElementById("info1").innerHTML = "";

    }
}
function verificarC() {
    aux = document.getElementById("cpf").value;
    aux2 = document.getElementById("cpf").value;
    var resultado, resultado2;
    for (i = 0; i < aux2.length; i++) {
        switch (aux2.charAt(i)) {
            case ".":
            case ",":
            case "*":
            case "'":
            case ";":
            case ":":
            case "|":
            case "?":
            case "+":
            case "-":
            case "_":
            case ")":
            case "(":
            case "*":
            case "*":
            case "&":
            case "%":
            case "$":
            case "#":
            case "@":
                resultado = false;
                break;
            default: resultado = true;
        }
    }
    for (i = 0; i < aux2.length; i++) {
        switch (aux2.charAt(i)) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                resultado2 = true;
                break;
            default: resultado2 = false;
        }
    }
    if (aux.length == 0 || resultado == false || resultado2 == false) {
        document.getElementById("cpf").style.backgroundColor = "red";
        document.getElementById("info1").style.color = "red";
        document.getElementById("info1").innerHTML = "Cpf inválido.";
    } else {
        document.getElementById("cpf").style.backgroundColor = "green";
        document.getElementById("info1").innerHTML = "";

    }
}
function verificarT() {
    aux = document.getElementById("tel").value;
    aux2 = document.getElementById("tel").value;
    var resultado, resultado2;
    for (i = 0; i < aux2.length; i++) {
        switch (aux2.charAt(i)) {
            case ".":
            case ",":
            case "*":
            case "'":
            case ";":
            case ":":
            case "|":
            case "?":
            case "+":
            case "-":
            case "_":
            case ")":
            case "(":
            case "*":
            case "*":
            case "&":
            case "%":
            case "$":
            case "#":
            case "@":
                resultado = false;
                break;
            default: resultado = true;
        }
    }
    for (i = 0; i < aux2.length; i++) {
        switch (aux2.charAt(i)) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                resultado2 = true;
                break;
            default: resultado2 = false;
        }
    }
    if (aux.length == 0 || aux.length != 11 || resultado == false || resultado2 == false) {
        document.getElementById("tel").style.backgroundColor = "red";
        document.getElementById("info1").style.color = "red";
        document.getElementById("info1").innerHTML = "Telefone inválido.";
    } else {
        document.getElementById("tel").style.backgroundColor = "green";
        document.getElementById("info1").innerHTML = "";

    }
}
function verificarE() {
    aux = document.getElementById("email").value;
    aux2 = document.getElementById("email").value;
    var resultado, resultado2;
    for (i = 0; i < aux2.length; i++) {
        switch (aux2.charAt(i)) {
            //caracteres invalidos no email
            case ",":
            case "*":
            case "'":
            case ";":
            case ":":
            case "|":
            case "?":
            case "+":
            case "-":
            case "_":
            case ")":
            case "(":
            case "*":
            case "*":
            case "&":
            case "%":
            case "$":
            case "#":
                resultado = false;
                break;
            default: resultado = true;
        }
    }
    resultado2 = 0;
    var resultado3;
    for (i = 0; i < aux2.length; i++) {
        switch (aux2.charAt(i)) {
            case "@":
            case ".":
            case "c":
            case "o":
            case "m":
                //botei .com separado pq ele ve 1 indice por vez e nao reconhece o .com como uma coisa so kkkkk
                resultado2++;
                break;
            default: resultado2 = resultado2;
        }
    }
    if (resultado2 == 5) {
        resultado3 = true;
    } else {
        resultado3 = false;
    }
    if (aux.length == 0 || resultado == false || resultado3 == false) {
        document.getElementById("email").style.backgroundColor = "red";
        document.getElementById("info1").style.color = "red";
        document.getElementById("info1").innerHTML = "Email inválido.";
    } else {
        document.getElementById("email").style.backgroundColor = "green";
        document.getElementById("info1").innerHTML = "";

    }
}
function verificarCid() {
    aux = document.getElementById("cidade").value;
    aux2 = document.getElementById("cidade").value;
    var resultado;
    for (i = 0; i < aux2.length; i++) {
        switch (aux2.charAt(i)) {
            case ".":
            case ",":
            case "*":
            case "'":
            case ";":
            case ":":
            case "|":
            case "?":
            case "+":
            case "-":
            case "_":
            case ")":
            case "(":
            case "*":
            case "*":
            case "&":
            case "%":
            case "$":
            case "#":
            case "@":
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                resultado = false;
                break;
            default: resultado = true;
        }
    }
    if (aux.length == 0 || resultado == false) {
        document.getElementById("cidade").style.backgroundColor = "red";
        document.getElementById("info1").style.color = "red";
        document.getElementById("info1").innerHTML = "Cidade inválida.";
    } else {
        document.getElementById("cidade").style.backgroundColor = "green";
        document.getElementById("info1").innerHTML = "";

    }
}
function verificarCep() {
    aux = document.getElementById("tel").value;
    aux2 = document.getElementById("tel").value;
    var resultado, resultado2;
    for (i = 0; i < aux2.length; i++) {
        switch (aux2.charAt(i)) {
            case ".":
            case ",":
            case "*":
            case "'":
            case ";":
            case ":":
            case "|":
            case "?":
            case "+":
            case "-":
            case "_":
            case ")":
            case "(":
            case "*":
            case "*":
            case "&":
            case "%":
            case "$":
            case "#":
            case "@":
                resultado = false;
                break;
            default: resultado = true;
        }
    }
    for (i = 0; i < aux2.length; i++) {
        aux = document.getElementById("cep").value;
        aux2 = document.getElementById("cep").value;
        switch (aux2.charAt(i)) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                resultado2 = true;
                break;
            default: resultado2 = false;
        }
    }
    if (aux.length == 0 || aux.length != 8 || resultado == false || resultado2 == false) {
        document.getElementById("cep").style.backgroundColor = "red";
        document.getElementById("info1").style.color = "red";
        document.getElementById("info1").innerHTML = "CEP inválido.";
    } else {
        document.getElementById("cep").style.backgroundColor = "green";
        document.getElementById("info1").innerHTML = "";

    }
}
function verificarSenha(){
    aux = document.getElementById("senha").value;
    if(aux.length==0||aux.length>12){
        document.getElementById("senha").style.backgroundColor = "red";
    }else{
        document.getElementById("senha").style.backgroundColor = "green";
        document.getElementById("info1").innerHTML = "";

    }
}
function verificarSenha2(){
    aux = document.getElementById("senha").value;
    aux2 = document.getElementById("senha2").value;
    if(aux.length==0||aux!=aux2){
        document.getElementById("senha2").style.backgroundColor = "red";
        document.getElementById("info1").style.color = "red";
        document.getElementById("info1").innerHTML = "As senhas não são iguais.";
    }else{
        document.getElementById("senha2").style.backgroundColor = "green";
        document.getElementById("info1").innerHTML = "";
    }
}