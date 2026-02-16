function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Preencha todos os campos!');
        return false; // Impede o envio do formulário
    }

    if (name.length < 3 || name.length > 50) {
        alert('O nome deve ter entre 3 e 50 caracteres!');
        return false;
    }

    if (email.length < 5 || email.length > 50) {
        alert('O email deve ter entre 5 e 50 caracteres!');
        return false;
    }

    const emailPattern = /^([^a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+)\\.([a-zA-Z]{2,6})$/;

    if (!emailPattern.test(email)) {
        alert('Digite um email válido!');
        return false;
    }

    return true; // Permite o envio do formulário
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
    else{
        alert('Formulário validado com sucesso!');
    }
});