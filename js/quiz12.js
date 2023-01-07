var certo, errado, aux;
certo=0
function respostaCerta(){
    certo=certo+12.5;
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
        if(certo==12.5){
            document.getElementById("resultadof").innerHTML= "Você acertou 12,5%, tente novamente para melhorar sua pontuação. Boa sorte na próxima!"
            document.getElementById("resultadof").style.color= "red";
        }else{
            if(certo==25){
                document.getElementById("resultadof").innerHTML= "Você acertou 25%, tente novamente para melhorar sua pontuação. Boa sorte na próxima!"
                document.getElementById("resultadof").style.color= "yellow";
            }else{
                if(certo==37.5){
                    document.getElementById("resultadof").innerHTML= "Você acertou 37,5%, tente novamente para melhorar sua pontuação. Boa sorte na próxima!"
                    document.getElementById("resultadof").style.color= "yellow";
                }else{
                    if(certo==50){
                        document.getElementById("resultadof").innerHTML= "Você acertou 50%!!! Está indo muito bem mesmo. tente novamente!!."
                        document.getElementById("resultadof").style.color= "orange";
                    }else{
                        if(certo==62.5){
                            document.getElementById("resultadof").innerHTML= "Você acertou 62,5%!!! Muito bom. tente novamente!!"
                            document.getElementById("resultadof").style.color= "orange";
                        }else{
                            if(certo==75){
                                document.getElementById("resultadof").innerHTML= "Você acertou 75%!!! Falta pouco. tente novamente!!"
                                document.getElementById("resultadof").style.color= "blue";
                            }else{
                                if(certo==87.5){
                                    document.getElementById("resultadof").innerHTML= "Você acertou 87,5%!!! Falta pouco. tente novamente!!"
                                    document.getElementById("resultadof").style.color= "blue";
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
            }
        }
    }
    certo=0
}