import foodImagePath1 from '../assets/images/Eggs woodhouse.png';
import foodImagePath2 from '../assets/images/Eggs woodhouse.png';
import foodImagePath3 from '../assets/images/Eggs woodhouse.png';
import drinkImagePath1 from '../assets/images/Glengoolie blue.png';
import drinkImagePath2 from '../assets/images/Hurricane.png';
import drinkImagePath3 from '../assets/images/Hurricane.png';
import woodhouseImagePath from '../assets/images/Woodhouse transparent.png';

function createMenuItem(src, description) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = description;
  img.addEventListener('click', () => {
    const speechBubble = document.querySelector('.speech-bubble');
    speechBubble.innerText = description;
    speechBubble.style.display = 'block';
  });
  return img;
}

function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const foodColumn = document.createElement('div');
  foodColumn.classList.add('menu-column');

  const drinkColumn = document.createElement('div');
  drinkColumn.classList.add('menu-column');

  const foodItems = [
    { src: foodImagePath1, description: 'Delicious Eggs prepared by Woodhouse' },
    { src: foodImagePath2, description: 'Scrambled Eggs with a touch of parsley' },
    { src: foodImagePath3, description: 'Eggs Benedict with hollandaise sauce' },
  ];

  foodItems.forEach(item => {
    const img = createMenuItem(item.src, item.description);
    foodColumn.appendChild(img);
  });

  const drinkItems = [
    { src: drinkImagePath1, description: 'Glengoolie Blue - Aged 25 years' },
    { src: drinkImagePath2, description: 'Hurricane Cocktail - A tropical delight' },
    { src: drinkImagePath3, description: 'Hurricane Cocktail - Another one for good measure' },
  ];

  drinkItems.forEach(item => {
    const img = createMenuItem(item.src, item.description);
    drinkColumn.appendChild(img);
  });

  const woodhouseContainer = document.createElement('div');
  woodhouseContainer.classList.add('woodhouse-container');

  const woodhouseImg = document.createElement('img');
  woodhouseImg.src = woodhouseImagePath;
  woodhouseImg.classList.add('woodhouse-image');
  woodhouseContainer.appendChild(woodhouseImg);

  const speechBubble = document.createElement('div');
  speechBubble.classList.add('speech-bubble');
  speechBubble.innerText = "Click a menu item to learn more!";
  woodhouseContainer.appendChild(speechBubble);

  menuContainer.appendChild(foodColumn);
  menuContainer.appendChild(woodhouseContainer); 
  menuContainer.appendChild(drinkColumn);
  content.appendChild(menuContainer);
}

export default loadMenu;
