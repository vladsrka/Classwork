"use strict";

let inputs = document.querySelectorAll('input');
let button = document.querySelector('button');
button.addEventListener('click', addError);

function addError() {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '' || inputs[i].value == null) {
            inputs[i].parentElement.classList.add('error');
        }
    }
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', removeError);
}

function removeError(event) {
    event.target.parentElement.classList.remove('error');
}
