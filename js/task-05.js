const inputEl = document.getElementById(`name-input`);
const spanEl = document.getElementById(`name-output`);
inputEl.addEventListener(`input`, changeOutput);
function changeOutput(event) {
    if (event.currentTarget.value === `` || event.currentTarget.value.trim() === ``)
    { spanEl.textContent = `незнакомец` }
    else {
        spanEl.textContent = event.currentTarget.value
    };
};

