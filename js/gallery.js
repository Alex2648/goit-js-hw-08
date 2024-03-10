const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

// 1. Порахувати й вивести в консоль кількість категорій
console.log(`Кількість категорій: ${categoryItems.length}`);

// 2. Для кожної категорії вивести текст заголовка та кількість елементів
for (const categoryItem of categoryItems) {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const categoryItemsCount = categoryItem.querySelectorAll('li').length;

  console.log(`Категорія: ${categoryTitle}, Кількість елементів: ${categoryItemsCount}`);
}
