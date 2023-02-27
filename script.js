const container = document.querySelector('.container');
const input = document.querySelector('.number');
const resetBtn = document.querySelector('.resetBtn');

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
