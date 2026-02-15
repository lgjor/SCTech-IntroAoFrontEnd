const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add-task-button");

// Escuta o clique no botão
addTaskButton.addEventListener("click", addTask);

function addTask() {
    // Pegar o valor do input
    const taskText = taskInput.value;

    // Verificar se o campo não está vazio
    if (taskText.trim() !== "") {
        // Criar o novo elemento de lista
        const newLi = document.createElement("li");
        newLi.textContent = taskText;

        // Adicionar o <li> dentro do <ul>
        taskList.appendChild(newLi);

        // Limpar o campo de texto e focar nele novamente
        taskInput.value = "";
        taskInput.focus();
    } else {
        alert("Por favor, digite uma tarefa!");
    }
}