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

const btnDecrease = document.querySelector('.increase');
const btnReset = document.querySelector('.reset');
const btnIncrease = document.querySelector('.increase');
let value = document.querySelector('.value');
