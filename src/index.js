import './styles.css';
import loadNav from './modules/nav';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadAbout from './modules/about';
import transitionImagePath from './assets/images/Archer Transition.png';

function createTransitionImage(callback) {
  const img = document.createElement('img');
  img.src = transitionImagePath; 
  img.classList.add('transition-image');
  document.body.appendChild(img);

  
  img.addEventListener('animationend', (event) => {
    if (event.animationName === 'fadeIn') {
      callback(); 
    } else if (event.animationName === 'slideRight') {
      img.remove();
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

  
  loadHome();
}

document.addEventListener('DOMContentLoaded', initialize);
