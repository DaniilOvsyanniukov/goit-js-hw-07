const inputEl = document.getElementById(`font-size-control`);
const spanEl = document.getElementById(`text`);
inputEl.addEventListener(`input`, something);
function something(event) {
    spanEl.style.fontSize = `${event.currentTarget.value}pt`
}