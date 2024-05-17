import './styles.css';
import loadNav from './modules/nav';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadAbout from './modules/about';
import transitionImagePath from './assets/images/Archer Transition.png';
import woodhouseImagePath from './assets/images/Woodhouse transparent.png'; // Import the image

function createTransitionImage(callback) {
  const img = document.createElement('img');
  img.src = transitionImagePath;
  img.classList.add('transition-image');
  document.body.appendChild(img);

  img.addEventListener('animationend', (event) => {
    if (event.animationName === 'slideRight') {
      img.remove();
      callback();
    }
  });
}

function initialize() {
  loadNav();

  const homeTab = document.querySelector('nav p:nth-child(1)');
  const menuTab = document.querySelector('nav p:nth-child(2)');
  const aboutTab = document.querySelector('nav p:nth-child(3)');

  homeTab.addEventListener('click', () => {
    createTransitionImage(loadHome);
  });

  menuTab.addEventListener('click', () => {
    createTransitionImage(loadMenu);
  });

  aboutTab.addEventListener('click', () => {
    createTransitionImage(loadAbout);
  });

  // Load home content by default
  loadHome();

  // Add the Woodhouse image to the bottom center of the page
  const woodhouseImg = document.createElement('img');
  woodhouseImg.src = woodhouseImagePath;
  woodhouseImg.classList.add('woodhouse-image');
  document.body.appendChild(woodhouseImg);
}

document.addEventListener('DOMContentLoaded', initialize);
