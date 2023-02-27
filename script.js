const container = document.querySelector('.container');
const input = document.querySelector('.number');
const resetBtn = document.querySelector('.resetBtn');
const randomBtn = document.querySelector('.randomBtn');

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
  let number = input.value;
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
