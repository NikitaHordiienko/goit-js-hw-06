const inputValueEl = document.querySelector('#validation-input');
const neededValueEl = Number(inputValueEl.getAttribute('data-length'))

inputValueEl.addEventListener('blur', event => {
    if (event.currentTarget.value.length === neededValueEl) {
        inputValueEl.classList.remove('invalid');
        inputValueEl.classList.add('valid');
    } else if (event.currentTarget.value === '') {
        inputValueEl.classList.remove('invalid');
        inputValueEl.classList.remove('valid');
    } else {
        inputValueEl.classList.add('invalid');
        inputValueEl.classList.remove('valid');
    }
});