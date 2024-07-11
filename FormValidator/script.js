const form = document.getElementById('registrationForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(nameValue === '') {
        setErrorFor(name, 'Name cannot be blank');
    } else {
        setSuccessFor(name);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (!isValidPassword(passwordValue)) {
        setErrorFor(password, 'Password must be at least 6 characters long and contain a number');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    small.style.visibility = 'visible';
}

function setSuccessFor(input) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.style.visibility = 'hidden';
}

function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
    return /^(?=.*[0-9]).{6,}$/.test(password);
}
