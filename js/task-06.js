// const inputEl = document.getElementById('validation-input');
// inputEl.addEventListener('focus', removeBorder);
// inputEl.addEventListener('blur', checkLength);


// function removeBorder(event) {
//     inputEl.classList.value = ``;
// }

// function checkLength(event) {
//     if (inputEl.value.length  == inputEl.getAttribute(`data-length`)) 
//     { inputEl.classList.add('valid') }
//     else {inputEl.classList.add('invalid')}
// }

const InputValidationEl = document.getElementById('validation-input');

//=========Blur=============

function onInputBlur (event){
    if (event.currentTarget.value.length == InputValidationEl.getAttribute('data-length')){
         InputValidationEl.classList.add('valid');
        
    } else {
        InputValidationEl.classList.add('invalid');
    }
    
}
InputValidationEl.addEventListener('blur', onInputBlur);

//=========Input===========
function onInputEl (){
    InputValidationEl.classList.remove('valid', 'invalid');
}
InputValidationEl.addEventListener('input', onInputEl);