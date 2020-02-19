const form = document.getElementById('form__id');
const firstName = document.getElementById('first__name');
const lastName = document.getElementById('last__name');
const email = document.getElementById('email');
const password = document.getElementById('password');

function checkRequired (inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
        error(input)
        } else {
        succes(input);
        }   
    });
}

function error(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}

function succes(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        succes(input);
    } else {
        error(input);
    };
}

form.addEventListener("submit", e => {
    e.preventDefault();
    checkRequired([first__name, last__name, email, password]);
    checkEmail(email);
});