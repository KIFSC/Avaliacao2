
var equacao = "";

const operadores = ["+","-","/","*"]

function insert(valores){

    if(valores == "C"){
           document.getElementById("input_tela").innerHTML = "";
           equacao = "";
           return;
    }

    const ultimoCaractere = equacao.slice(-1);

    if ( operadores.includes(valores) == true && operadores.includes(ultimoCaractere) == true && valores == ultimoCaractere ) {
       alert("Você não pode digitar dois operadores seguidos!");
       document.getElementById("input_tela").innerHTML = "";
       equacao = "";
       return;
    }

    document.getElementById("input_tela").innerHTML += valores;
    equacao += valores;

    if(operadores.includes(equacao.charAt(0)) == true){
       alert("Digite uma equação valida");
       document.getElementById("input_tela").innerHTML = "";
       equacao = "";
       return;
    }
   
}

function conta(){
   let valor = equacao;

   if(valor == ""){
   alert("Informe um valor");
   }else{
   let valorCalculado = eval(valor);
   document.getElementById("input_tela").innerHTML = valorCalculado;
   }
   
}




