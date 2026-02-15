let campoNumero = document.getElementById("numeroDoPedido");
let campoResultado = document.getElementById("sabor");

campoNumero.addEventListener('input', function() {
    let resultado = saborDoPedido(campoNumero.value);
    campoResultado.innerHTML = resultado;
});

function saborDoPedido(campoNumero) {
    switch (parseInt(campoNumero)) {
        case 1:
            return "Pizza de calabresa";
        case 2:
            return "Pizza de quatro queijos";
        case 3:
            return "Pizza de frango com catupiry";
        case 4:
            return "Pizza de brigadeiro";
        default: 
            return "Número do pedido inválido";
    }
}


campoResultado.innerHTML = saborDoPedido(parseInt(campoNumero));

function pedidoConfirmado() {
    let valor = parseInt(campoNumero.value); 

    if (valor >= 1 && valor <= 4) { 
        alert("Pedido confirmado: " + saborDoPedido(valor));
    } else {
        alert("Número do pedido inválido!");
    }
}