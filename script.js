const container = document.querySelector('.container');
const input = document.querySelector('.number');
const resetBtn = document.querySelector('.resetBtn');
const randomBtn = document.querySelector('.randomBtn');
const shadingBtn = document.querySelector('.shadingBtn');
const backgroundBtn = document.querySelector('.backgroundBtn');
const backgroundColorChoice = document.querySelector('.backgroundColorChoice');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const createSquares = function (num) {
  for (let i = 0; i < num ** 2; i++) {
    let newSquare = document.createElement('div');
    newSquare.classList.add('empty');
    container.appendChild(newSquare);
  }

  container.style.gridTemplateColumns = `repeat(${num}, auto)`;

  const boxes = document.querySelectorAll('.empty');
  boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
      //Add only draw on Mouse Down
      // if (mouseDown) box.style.backgroundColor = 'black';
      box.style.backgroundColor = 'black';
    });
  });
};

createSquares(32);

resetBtn.addEventListener('click', () => {
  let number;
  if (input.value < 1) number = 32;
  if (number > 100) number = 100;
  console.log(number);
  container.innerHTML = '';
  createSquares(number);
  input.value = '';
});

const createSquaresRandom = function (num) {
  for (let i = 0; i < num ** 2; i++) {
    let newSquare = document.createElement('div');
    newSquare.classList.add('empty');
    container.appendChild(newSquare);
  }

  container.style.gridTemplateColumns = `repeat(${num}, auto)`;

  const boxes = document.querySelectorAll('.empty');
  boxes.forEach((box) => {
    const randomRed = Math.floor(Math.random() * 255 + 1);
    const randomBlue = Math.floor(Math.random() * 255 + 1);
    const randomGreen = Math.floor(Math.random() * 255 + 1);

    box.addEventListener('mouseenter', () => {
      box.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    });
  });
};

randomBtn.addEventListener('click', () => {
  let number = input.value;
  if (number > 100) number = 100;
  console.log(number);
  container.innerHTML = '';
  createSquaresRandom(number);
  input.value = '';
});

const createSquaresShading = function (num) {
  for (let i = 0; i < num ** 2; i++) {
    let newSquare = document.createElement('div');
    newSquare.classList.add('empty');
    container.appendChild(newSquare);
  }

  container.style.gridTemplateColumns = `repeat(${num}, auto)`;

  const boxes = document.querySelectorAll('.empty');
  boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
      if (box.classList.contains('empty')) {
        box.classList.add('color1');
        box.classList.remove('empty');
      } else if (box.classList.contains('color1')) {
        box.classList.remove('color1');
        box.classList.add('color2');
      } else if (box.classList.contains('color2')) {
        box.classList.remove('color2');
        box.classList.add('color3');
      } else if (box.classList.contains('color3')) {
        box.classList.remove('color3');
        box.classList.add('color4');
      } else if (box.classList.contains('color4')) {
        box.classList.remove('color4');
        box.classList.add('color5');
      } else if (box.classList.contains('color5')) {
        box.classList.remove('color5');
        box.classList.add('color6');
      } else if (box.classList.contains('color6')) {
        box.classList.remove('color6');
        box.classList.add('color7');
      } else if (box.classList.contains('color7')) {
        box.classList.remove('color7');
        box.classList.add('color8');
      } else if (box.classList.contains('color8')) {
        box.classList.remove('color8');
        box.classList.add('color9');
      } else if (box.classList.contains('color9')) {
        box.classList.remove('color9');
        box.classList.add('color10');
      } else if (box.classList.contains('color10')) {
        box.classList.remove('color10');
        box.classList.add('color11');
      } else {
        return;
      }
    });
  });
};

shadingBtn.addEventListener('click', () => {
  let number = input.value;
  if (number > 100) number = 100;
  container.innerHTML = '';
  createSquaresShading(number);
  input.value = '';
});

backgroundBtn.addEventListener('click', () => {
  const color = backgroundColorChoice.value;
  container.style.backgroundColor = `${color}`;
});
