const inputValueEl = document.querySelector('#name-input');
const outputValueEl = document.querySelector('#name-output');

inputValueEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    outputValueEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        outputValueEl.textContent = 'Anonymous'
    }
}