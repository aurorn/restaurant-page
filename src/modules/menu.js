import foodImagePath1 from '../assets/images/Eggs woodhouse.png';
import foodImagePath2 from '../assets/images/Eggs woodhouse.png';
import foodImagePath3 from '../assets/images/Eggs woodhouse.png';
import drinkImagePath1 from '../assets/images/Glengoolie blue.png';
import drinkImagePath2 from '../assets/images/Hurricane.png';
import drinkImagePath3 from '../assets/images/Hurricane.png';
import woodhouseImagePath from '../assets/images/Woodhouse transparent.png';

function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const foodColumn = document.createElement('div');
  foodColumn.classList.add('menu-column');

  const drinkColumn = document.createElement('div');
  drinkColumn.classList.add('menu-column');

  const foodImages = [foodImagePath1, foodImagePath2, foodImagePath3];
  foodImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    foodColumn.appendChild(img);
  });

  const drinkImages = [drinkImagePath1, drinkImagePath2, drinkImagePath3];
  drinkImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    drinkColumn.appendChild(img);
  });

  const woodhouseContainer = document.createElement('div');
  woodhouseContainer.classList.add('woodhouse-container');

  const woodhouseImg = document.createElement('img');
  woodhouseImg.src = woodhouseImagePath;
  woodhouseImg.classList.add('woodhouse-image');
  woodhouseContainer.appendChild(woodhouseImg);

  menuContainer.appendChild(foodColumn);
  menuContainer.appendChild(woodhouseContainer);
  menuContainer.appendChild(drinkColumn);
  content.appendChild(menuContainer);
}

export default loadMenu;
