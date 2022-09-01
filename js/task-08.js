const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    // if (event.currentTarget.email.value === '' || event.currentTarget.password.value === '') {
    //     return alert('All fields must be filled out')
    // }

    const { email, password } = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        return alert('All fields must be filled out')
    };

    const formDataEl = {
        email: email.value,
        password: password.value,
    };

    console.log(formDataEl);
    event.currentTarget.reset();
}