const form = document.getElementById('form__id');
const firstName = document.getElementById('first__name');
const lastName = document.getElementById('last__name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(e) {
    const firstNameID = document.getElementById('firstNameID');
    const lastNameID = document.getElementById('lastNameID');
    const emailID = document.getElementById('emailID');
    const passwordID = document.getElementById('passwordID');

    if (firstName.value === '')
        {   
            firstNameID.classList.add('error');
        } else{
            firstNameID.classList.remove('error');
        }

    if (lastName.value === '')
        {   
            lastNameID.classList.add('error');
        } else{
            lastNameID.classList.remove('error');
        }

    if (email.value === '')
        {   
            emailID.classList.add('error');
        } else if (!emailValid(email.value)){
            emailID.classList.add('error')
        } else {
            emailID.classList.remove('error');
        } 
    
    if (password.value === '')
        {   
            passwordID.classList.add('error');
        } else{
            passwordID.classList.remove('error');
    } 
}

function emailValid (email) {
    return /\S+@\S+\.\S+/.test(email)
}