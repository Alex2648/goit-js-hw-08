const images = [
  {
    url: '<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: '<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: '<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('ul.gallery');

// Створення HTML-коду галереї
const galleryHtml = images.reduce((html, image) => {
  return html + `<li><img src="${image.url}" alt="${image.alt}" /></li>`;
}, '');

// Додавання галереї в DOM за одну операцію
galleryList.insertAdjacentHTML('beforeend', galleryHtml);

// Додавання CSS-класів для оформлення
galleryList.classList.add('gallery');
galleryList.querySelectorAll('li').forEach(item => item.classList.add('gallery-item'));
