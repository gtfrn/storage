document.addEventListener('DOMContentLoaded', () => {
    const units = document.querySelectorAll('.unit');

    units.forEach(unit => {
        unit.addEventListener('click', () => {
            const size = unit.getAttribute('data-size');
            const price = unit.getAttribute('data-price');
            unit.innerHTML = `<div class="info">${size} - ${price}</div>`;
        });
    });
});
