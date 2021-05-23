const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const parentEl = document.getElementById(`ingredients`)
const ingredientsEl = ingredients.map(ingredient => {
  const newLiEl = document.createElement(`li`);
  newLiEl.textContent = `${ingredient}`;
  return newLiEl;

})
parentEl.append(...ingredientsEl);
