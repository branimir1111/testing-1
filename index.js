const btn = document.querySelector('.btn');
const clicked = document.querySelector('.heading1');

btn.addEventListener('click', () => {
  if (clicked.classList.contains('clicked')) {
    clicked.classList.remove('clicked');
  } else {
    clicked.classList.add('clicked');
  }
});
