var certo, aux;
certo=0
function respostaCerta(){
    certo=certo+20;
}
function respostaErrada(){
    certo=certo;
}
function resultado(){
    console.log(certo);
    if(certo==0){
        document.getElementById("resultadof").innerHTML= "Você acertou 0%, tente novamente para melhorar sua pontuação. Boa sorte na próxima!"
        document.getElementById("resultadof").style.color= "red";
    }else{
        if(certo==20){
            document.getElementById("resultadof").innerHTML= "Você acertou 20%, tente novamente para melhorar sua pontuação. Boa sorte na próxima!"
            document.getElementById("resultadof").style.color= "red";
        }else{
            if(certo==40){
                document.getElementById("resultadof").innerHTML= "Você acertou 40%, tente novamente para melhorar sua pontuação. Boa sorte na próxima!"
                document.getElementById("resultadof").style.color= "yellow";
            }else{
                if(certo==60){
                    document.getElementById("resultadof").innerHTML= "Você acertou 60%, tente novamente para melhorar sua pontuação. Boa sorte na próxima!"
                    document.getElementById("resultadof").style.color= "yellow";
                }else{
                    if(certo==80){
                        document.getElementById("resultadof").innerHTML= "Você acertou 80%, muito bem! Você esta quase lá. Tente novamente para melhorar sua pontuação."
                        document.getElementById("resultadof").style.color= "orange";
                    }else{
                        if(certo==100){
                            document.getElementById("resultadof").innerHTML= "Parabéns! Você acertou 100%!!! Você é super fã mesmo. Obrigado por participar"
                            document.getElementById("resultadof").style.color= "green";
                        }
                    }
                }
            }
        }
    }
    certo=0
}