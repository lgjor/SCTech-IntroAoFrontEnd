function saudar(){

    const hora = parseInt(document.getElementById("hora").value,10);
    const nome = document.getElementById("nome");
    const mensagem = document.getElementById("mensagem");

    saudacaoPersonalizada(nome,hora);
    
}

function saudacaoPersonalizada(nome, hora){

    if (hora >= 20){
        mensagem.innerHTML = `Olá, ${nome.value}! Boa noite!`;
    }
    else if (hora >= 14){
        mensagem.innerHTML = `Olá, ${nome.value}! Boa tarde!`;
    }
    else {
        mensagem.innerHTML = `Olá, ${nome.value}! Bom dia!`;
    }
}