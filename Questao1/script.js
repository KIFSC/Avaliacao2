
var equacao = "";

function insert(valores){
    document.getElementById("input_tela").innerHTML += valores;
    equacao += valores;
    console.log(equacao);

    if(valores == "C"){
           document.getElementById("input_tela").innerHTML = "";
           equacao = "";
    }
   
}

function conta(){
   console.log(equacao);
   equacao = eval(equacao);
   document.getElementById("input_tela").innerHTML = equacao;
}


