function efetuarOperacao(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operador = document.getElementById("operador").value;
    let resultado;
    switch(operador){
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 === 0){
                resultado = "Divisão por zero é inválida!";
            }
            else {
               resultado = numero1 / numero2;
            }
            break;
        default:
            resultado = "Operador inválido!";
            return;
    }
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    console.log("Resultado: " + resultado);
}