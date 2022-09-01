function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const enteredNumberEl = document.querySelector('input');
const createButtonEl = document.querySelector('button[data-create]');
const destroyButtonEl = document.querySelector('button[data-destroy]');
const createdBoxesEl = document.querySelector('#boxes');

const createBoxes = amount => {
  let boxesArray = [];
  // let baseBoxSize = 30; 
  for (let i = 0; i < amount; i += 1) {
    const createdDivEl = document.createElement('div');
    createdDivEl.style.width = `${(i * 10) + 30}px`;
    createdDivEl.style.height = `${(i * 10) + 30}px`;
    createdDivEl.style.backgroundColor = getRandomHexColor();
    createdDivEl.style.marginBottom = '10px';
    boxesArray.push(createdDivEl);
    console.log(boxesArray);
  };
  return boxesArray;
};

createButtonEl.addEventListener('click', () => {
  let addedBoxes = createBoxes(enteredNumberEl.value);
  createdBoxesEl.append(...addedBoxes);
});

const destroyBoxes = () => boxes.innerHTML = '';

destroyButtonEl.addEventListener('click', () => destroyBoxes());