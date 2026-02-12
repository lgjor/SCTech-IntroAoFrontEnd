const carros = ["Uno", "Gol", "Celta", "Palio", "Onix", "HB20", "Sandero", "Ka", "Up!", "Mobi"];

var dados;
var i;

const conteudo = document.getElementById("conteudo");

function criaSecao(titulo, dadosF) {
    let secao = document.createElement("div");
    secao.innerHTML = `<h2>${titulo}</h2>` + dadosF;
    conteudo.appendChild(secao);
}

function limpaDados() {
    dados = "";
    i = 0;
}

limpaDados();

while (i < carros.length) {
    dados += `<p>${carros[i]}</p>`;
    i++;
}

criaSecao("Loop while", dados);

limpaDados();

do{
    dados += `<p>${carros[i]}</p>`;
    i++;
} while (i < carros.length);

criaSecao("Loop do-while", dados);

limpaDados()

for (i = 0; i < carros.length; i++) {
    dados += `<p>${carros[i]}</p>`;
}

criaSecao("Loop for", dados);

limpaDados();

for (let carro of carros) {
    dados += `<p>${carro}</p>`;
}

criaSecao("Loop for-of", dados);

limpaDados();

carros.forEach(carro => {
    dados += `<p>${carro}</p>`;
});

criaSecao("Loop forEach", dados);

limpaDados();

let carro1 = {marca: "Fiat", modelo: "Uno", ano: 2010};
let carro2 = {marca: "Volkswagen", modelo: "Gol", ano: 2015};
let carro3 = {marca: "Chevrolet", modelo: "Celta", ano: 2012};

let carros2 = [];

carros2.push(carro1);
carros2.push(carro2);
carros2.push(carro3);

for (let carro of carros2) {
    dados += `<p>${carro.marca} ${carro.modelo} ${carro.ano}</p>`;
}

criaSecao("Loop for-of com objetos", dados);