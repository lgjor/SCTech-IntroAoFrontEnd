function mostrarSaudacao() {
    const idioma = document.getElementById("idioma").value;
    let saudacao;
    switch (idioma) {
        case "portugues":
            saudacao = "Olá!";
            break;
        case "ingles":
            saudacao = "Hello!";
            break;
        case "espanhol":
            saudacao = "¡Hola!";
            break;
        case "frances":
            saudacao = "Bonjour!";
            break;
        case "alemao":
            saudacao = "Guten Tag!";
            break;
        default:
            saudacao = "Idioma não reconhecido.";
    }
    document.getElementById("saudacao").innerText = saudacao;
}