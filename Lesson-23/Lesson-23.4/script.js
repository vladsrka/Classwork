"use strict";
function filterHotels() {
    const filters = document.querySelectorAll('.filters input[type="checkbox"]');
    const cards = document.querySelectorAll('.card');

    const selectedFilters = Array.from(filters).filter(filter => filter.checked).map(filter => filter.name);

    cards.forEach(card => {
        card.style.display = 'none';
        const classes = card.className.split(' ');
        if (selectedFilters.every(filter => classes.includes(filter))) {
            card.style.display = 'block';
        }
    });
}

const filters = document.querySelectorAll('.filters input[type="checkbox"]');
filters.forEach(filter => {
    filter.addEventListener('change', filterHotels);
});