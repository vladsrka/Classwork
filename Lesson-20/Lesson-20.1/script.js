"use strict";

// document.querySelector('div').onclick = function () {
//     document.querySelector('div').classList.toggle('active')
// }

const allBlocks = document.querySelectorAll('div');

for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].addEventListener('click', activeBlock);
}

function activeBlock(event) {
    console.log(event.target.parentElement.dataset.id);

    const currentBlock = event.target.parentElement.dataset.id;
    for (let i = 0; i < allBlocks.length; i++) {
        allBlocks[i].classList.remove('active');
    }
    allBlocks[currentBlock - 1].classList.add('active');
}

document.addEventListener('click', outsideDocument);

function outsideDocument(event) {
    for (let i = 0; i < allBlocks.length; i++) {
        if (event.target === allBlocks[i] || allBlocks[i].contains(event.target)) {
            continue;
        }
        allBlocks[i].classList.remove('active');
    }
}