const btnZero = document.querySelector('.btnZero');
const btnFirst = document.querySelector('#btnFirst');
const btnSecond = document.querySelector('#btnSecond');
const clicked = document.querySelector('.heading1');

btnZero.addEventListener('click', () => {
  if (clicked.classList.contains('clicked')) {
    clicked.classList.remove('clicked');
  } else {
    clicked.classList.add('clicked');
  }
});
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
  coloring(value.textContent);
});
btnReset.addEventListener('click', () => {
  value.textContent = 0;
  coloring(value.textContent);
});
btnIncrease.addEventListener('click', () => {
  let val = value.textContent;
  value.textContent = parseInt(val) + 1;
  coloring(value.textContent);
});

const coloring = (number) => {
  if (number > 0) {
    value.style.color = 'green';
  } else if (number == 0) {
    value.style.color = 'black';
  } else {
    value.style.color = 'red';
  }
};
