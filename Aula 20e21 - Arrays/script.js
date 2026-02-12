const carros = ["Gol", "Uno", "Palio", "Celta", "Onix"];

const conteudo = document.getElementById("conteudo");

let dados = "";
let i=0;
while(i < carros.length) {
    dados += `<p>${carros[i]}</p>`;
    i++;
}

const secao = document.createElement("div");
secao.innerHTML = "<h2>Loop While</h2>" + dados;
conteudo.appendChild(secao);

