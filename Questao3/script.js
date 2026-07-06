
var p = ``;

function mostrarNotas() {

    div.innerHTML = "";

    for (i = 0; i < localStorage.length; i++) {
        let nota = localStorage.key(i);
        let valor = localStorage.getItem(nota);

        div.innerHTML += valor;
    }

}

function nota(input) {
    return `<div class="blocoNota"><p class="nota">${input}</p><div class="blocoButtom"><button class="excluir"  onclick="excluirNota('${input}')">X</buttom><button class="editar" onclick="editar('${input}')">✏️</buttom></div></div>`;
}


const div = document.getElementById("div");

Buttom.addEventListener("click", () => {
    let input = document.getElementById("input").value;

    p = nota(input);

    let adicionar = localStorage.setItem(input, p);

    mostrarNotas();

})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let input = document.getElementById("input").value;

        p = nota(input);

        let adicionar = localStorage.setItem(input, p);

        mostrarNotas();
    }
});



function excluirNota(valor) {

    let nota = "";

    nota = localStorage.key(valor);

    localStorage.removeItem(valor);

    mostrarNotas();

}

function editar(chaveAntiga) {

    let novoTexto = prompt("Edite sua nota:", chaveAntiga);

    if (novoTexto === null || novoTexto.trim() === "") { };

    let novoP = nota(novoTexto);

    localStorage.removeItem(chaveAntiga);

    localStorage.setItem(novoTexto, novoP);

    mostrarNotas();
}


mostrarNotas();




