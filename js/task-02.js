const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");
const liArray = [];

for (const ingredient of ingredients) {
const liEl = document.createElement("li")
  liEl.textContent = ingredient;
  liEl.classList.toggle("item");
  liArray.push(liEl);
};

ulEl.append(...liArray);

// Не мій варіант, я по відео робила
  
// const ingredientsRef = document.querySelector('#ingredients');

// const itemsRef = ingredients.map((ingredient) => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');
//   return item;
// });

// ingredientsRef.append(...itemsRef);



