// Variáveis

const notaDeCorte = 7;
function verificaAprovacao() {
    let nota = document.getElementById('nota').value;
    
    if ( nota >= notaDeCorte ){
        document.getElementById('resultado').innerHTML = 'Aluno(a) aprovado(a)';
        alert('Parabéns, aluno(a) aprovado(a)!');
    }
    else {
        document.getElementById('resultado').innerHTML = 'Aluno(a) reprovado(a)';
        alert('Infelizmente, aluno(a) foi reprovado(a).');
    }

    nota>= notaDeCorte ? document.getElementById('resultado').innerHTML = 'Aluno(a) aprovado(a)' : document.getElementById('resultado').innerHTML = 'Aluno(a) reprovado(a)';
}

function verificaAprovacaoTernario() {
    let nota = document.getElementById('nota').value;

    nota>= notaDeCorte ? document.getElementById('resultado').innerHTML = 'Aluno(a) aprovado(a)' : document.getElementById('resultado').innerHTML = 'Aluno(a) reprovado(a)';
}

function calcularDesconto(){
    let preco = document.getElementById('preco').value;
    console.log("preço: " + preco);
    let percentualDeDesconto = document.getElementById('desconto').value;
    console.log("desconto: " + percentualDeDesconto);
    let valorDesconto = preco * (percentualDeDesconto / 100);
    console.log(valorDesconto);
    let precoFinal = preco - valorDesconto;
    console.log(precoFinal);
    document.getElementById('valorDesconto').innerHTML = `O valor do desconto é: R$ ${valorDesconto.toFixed(2)}`;
    document.getElementById('precoFinal').innerHTML = `O preço final com desconto é: R$ ${precoFinal.toFixed(2)}`;
}