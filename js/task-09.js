function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButtonEl = document.querySelector('.change-color');
const colorValueEl = document.querySelector('.color');
const backgroundColorEl = document.querySelector('body');

changeColorButtonEl.addEventListener('click', event => {
  let randomColor = getRandomHexColor();
  backgroundColorEl.style.backgroundColor = randomColor;
  colorValueEl.textContent = randomColor;
})

