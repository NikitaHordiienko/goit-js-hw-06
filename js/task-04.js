const decrementButton = document.querySelector('#counter button[data-action="decrement"]');
const incrementButton = document.querySelector('#counter button[data-action="increment"]');
let value = document.querySelector('#value');
let counterValue = 0;

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});