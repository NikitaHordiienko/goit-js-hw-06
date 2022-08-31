const listEl = document.querySelector('#categories');

const allCategoryListEl = listEl.children
console.log(`Number of categories: ${allCategoryListEl.length}`);

// ПЕРВАЯ КАТЕГОРИЯ

const firstCategoryEl = listEl.firstElementChild;

const firstCategoryTitleEl = firstCategoryEl.querySelector('h2');
console.log(`Category: ${firstCategoryTitleEl.textContent}`);

const firstCategoryItemsEl = firstCategoryEl.querySelectorAll('li')
console.log(`Elements: ${firstCategoryItemsEl.length}`)

// ВТОРАЯ КАТЕГОРИЯ

const secondCategoryEl = firstCategoryEl.nextElementSibling;

const secondCategoryTitleEl = secondCategoryEl.querySelector('h2');
console.log(`Category: ${secondCategoryTitleEl.textContent}`);

const secondCategoryItemsEl = secondCategoryEl.querySelectorAll('li')
console.log(`Elements: ${secondCategoryItemsEl.length}`)

// ТРЕТЬЯ КАТЕГОРИЯ

const lastCategoryEl = listEl.lastElementChild;

const lastCategoryTitleEl = lastCategoryEl.querySelector('h2');
console.log(`Category: ${lastCategoryTitleEl.textContent}`);

const lastCategoryItemsEl = lastCategoryEl.querySelectorAll('li')
console.log(`Elements: ${lastCategoryItemsEl.length}`)
