const fontSizeRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeRangeEl.addEventListener('change', event => {
    // event.currentTarget.value
    // console.log(event.currentTarget.value);

    textEl.style.fontSize = `${event.target.value}px`;
    
    console.log(textEl.style.fontSize);
})

