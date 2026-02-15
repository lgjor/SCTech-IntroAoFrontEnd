const cells = document.querySelectorAll('.cell');

let XTurn = true;

document.getElementById("restart-button").addEventListener("click", startGame);

function startGame(){
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', clickHandler, {once:true});    
    });
}

function clickHandler(event){
    event.target.textContent = XTurn ? 'X' : 'O';
    XTurn = !XTurn;
}

startGame();