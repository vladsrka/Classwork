"use strict";

let offSet = 0;

let sliderLine = document.querySelector('.slider-line');

let nextButton = document.querySelector('.slider-next');

let prevButton = document.querySelector('.slider-prev');

nextButton.onclick = function () {
    offSet += 225;
    if (offSet > 900) {
        offSet = 0;
    }
    sliderLine.style.left = -offSet + 'px'
}

prevButton.onclick = function () {
    offSet -= 225;
    if (offSet < 0) {
        offSet = 900;
    }
    sliderLine.style.left = -offSet + 'px'
}