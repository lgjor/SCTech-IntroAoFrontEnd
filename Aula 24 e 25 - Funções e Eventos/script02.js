function setBackgroundColor(color){
    document.body.style.backgroundColor = color;
}

document.getElementById('red').addEventListener('click', function(){setBackgroundColor('red')})

document.getElementById('blue').addEventListener('click', function(){setBackgroundColor('blue')})

document.getElementById('green').addEventListener('click', function(){setBackgroundColor('green')})

document.getElementById('inputBox').addEventListener('keypress', function(event){alert("A tecla pressionada foi: " + event.key)})