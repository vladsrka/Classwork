"use strict";

const AllButtons = document.querySelectorAll('li');
const AllText = document.querySelectorAll('.tab');

for (let i = 0; i < AllButtons.length; i++) {
    AllButtons[i].addEventListener('click', activeButtons);
}

function activeButtons(event) {
    console.log(event.target.dataset.id);

    const currentButtons = event.target.dataset.id;
    for (let i = 0; i < AllButtons.length; i++) {
        AllButtons[i].classList.remove('active');
    }
    AllButtons[currentButtons - 1].classList.add('active');

    for (let i = 0; i < AllText.length; i++) {
        AllText[i].classList.remove('active');
    }
    AllText[currentButtons - 1].classList.add('active');
}


