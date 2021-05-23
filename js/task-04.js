const decrementEl = document.querySelector(`button[data-action="decrement"]`);
const incrementEl = document.querySelector(`button[data-action="increment"]`);
const valueEl = document.getElementById(`value`);
decrementEl.addEventListener('click', () => {
    valueEl.textContent -= 1;
});
incrementEl.addEventListener('click', () => {
    valueEl.textContent ++;
});
