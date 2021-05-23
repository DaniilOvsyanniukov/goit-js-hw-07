const numberOfCategoriesEl = document.querySelectorAll(`.item`);
console.log(`В списке`, numberOfCategoriesEl.length, `категории`);
const namesOfCategoriesEl = numberOfCategoriesEl.forEach(name => {
    console.log(`Категория`,(name.firstElementChild).textContent,`, Количество элементов`, ((name.lastElementChild).children).length);
});
