function generateRandomHexColor() {
  // Generate a random number between 0 and 16777215 (FFFFFF in decimal)
  let randomColor = Math.floor(Math.random()*16777215).toString(16);

  // Ensure the hex code is always 6 digits long by padding with leading zeros if necessary
  // This is a more robust way to handle cases where the random number results in a short hex string
  randomColor = randomColor.padStart(6, '0');

  return "#" + randomColor;
}

function mudaCor(){
    const paragrafo = document.getElementById('meuParagrafo');
    paragrafo.style.color = paragrafo.style.color === 'blue' ? 'black' : 'blue';

    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const div3 = document.getElementById('div3');

    div1.style.backgroundColor = generateRandomHexColor();
    div2.style.backgroundColor = generateRandomHexColor();
    div3.style.backgroundColor = generateRandomHexColor();
}