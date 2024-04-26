"use strict";

let inputs = document.querySelectorAll('input');
let button = document.querySelector('button');
let header = document.querySelector('h1')

button.addEventListener('click', addError);

function addError() {
    let error = 0;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '' || inputs[i].value == null) {
            inputs[i].parentElement.classList.add('error');
            error += 1;
        }
    }
    if (error == 0) {
        header.innerHTML = `Добро пожаловать ${inputs[0].value} ${inputs[1].value}`.toUpperCase();
        inputs.value = '';
    }
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', removeError);
}

function removeError(event) {
    event.target.parentElement.classList.remove('error');
}