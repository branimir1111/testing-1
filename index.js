const btnFirst = document.querySelector('#btnFirst');
const btnSecond = document.querySelector('#btnSecond');
const clicked = document.querySelector('.heading1');

btnFirst.addEventListener('click', () => {
  if (clicked.classList.contains('clicked')) {
    clicked.classList.remove('clicked');
  } else {
    clicked.classList.add('clicked');
  }
});

btnSecond.addEventListener('click', () => {
  if (clicked.classList.contains('clicked')) {
    clicked.classList.remove('clicked');
  } else {
    clicked.classList.add('clicked');
  }
});

const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');
const btnIncrease = document.querySelector('.increase');
let value = document.querySelector('.value');

btnDecrease.addEventListener('click', () => {
  let val = value.textContent;
  value.textContent = val - 1;
});
btnReset.addEventListener('click', () => {
  value.textContent = 0;
});
btnIncrease.addEventListener('click', () => {
  let val = value.textContent;
  console.log(val);
  value.textContent = val + 1;
});
