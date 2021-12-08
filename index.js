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
