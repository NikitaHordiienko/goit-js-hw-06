const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsListEl = document.querySelector('#ingredients');

// const ingredientsItemsEl = ingredients.forEach(ingredient => {
//   let ingredientsItemEl = document.createElement('li');
//   ingredientsItemEl.classList.add('item');
//   ingredientsItemEl.textContent = ingredient;
//   ingredientsListEl.append(ingredientsItemEl);  
// })

const ingredientsItemsEl = ingredients.map((ingredient) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList.add("item");
  ingredientsItemEl.textContent = ingredient;  
  return ingredientsItemEl;
})

ingredientsListEl.append(...ingredientsItemsEl);