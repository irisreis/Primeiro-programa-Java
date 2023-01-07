var aux;
function verificarVazio1(){
    aux=0;
    aux=document.getElementById("vazio1").value;
    if(aux.length==0){
        document.getElementById("vazio1").style.backgroundColor="red";
        document.getElementById("info").style.color="red";
        document.getElementById("info").innerHTML="Campo vazio";
    }else{
        document.getElementById("vazio1").style.backgroundColor="white";
        document.getElementById("info").innerHTML="";
    }
}
function verificarVazio2(){
    aux=0;
    aux=document.getElementById("vazio2").value;
    if(aux.length==0){
        document.getElementById("vazio2").style.backgroundColor="red";
        document.getElementById("info").style.color="red";
        document.getElementById("info").innerHTML="Campo vazio";
    }else{
        document.getElementById("vazio2").style.backgroundColor="white";
        document.getElementById("info").innerHTML="";
    }
}