"use strict";

const Link = document.querySelector('span.link');

Link.onclick = function () {
    const list = document.querySelector('.list');
    list.classList.toggle('active');

    if (list.classList.contains('active')) {
        Link.innerHTML = 'свернуть';
    } else {
        Link.innerHTML = 'развернуть';
    }
}

