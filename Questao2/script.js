
var horas;
var minutos;
var segundos;

var pausado = false;

var dataAtual = new Date();

var Intervalo;

var tempoPausado = 0;


function conometro(){
Intervalo = setInterval(()=>{  
    
let data = new Date();

let crono = document.getElementById("crono");

let dataConometro = new Date(data - dataAtual + tempoPausado);

 horas = String(dataConometro.getUTCHours()).padStart(2,'0');
 minutos = String(dataConometro.getUTCMinutes()).padStart(2,'0');
 segundos = String(dataConometro.getUTCSeconds()).padStart(2,'0');

crono.innerHTML = ` ${horas} : ${ minutos} : ${segundos}`;
}, 500);

}




function zerarContador() {

   let p = `<p>${horas} : ${ minutos} : ${segundos}</p>`;

   let div =  document.getElementById("paradas");

   div.innerHTML += p;

   dataAtual = new Date(); 

   tempoPausado = 0 ;

}

function pausarTimer() {
    if (!pausado) {
        clearInterval(Intervalo); 
        tempoPausado += new Date() - dataAtual; 
        pausado = true;
    } else {
        dataAtual = new Date();
        conometro();
        pausado = false;
    }
}

document.addEventListener('keydown', (event) => {
    // Verifica se a tecla pressionada foi o Enter
    if (event.key === 'Enter') {
        zerarContador();
    }
});


conometro();






