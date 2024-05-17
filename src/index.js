import './styles.css';
import loadNav from './modules/nav';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadAbout from './modules/about';
import transitionImagePath1 from './assets/images/Archer Transition.png';
import transitionImagePath2 from './assets/images/Archer Transition 2.png';
import transitionImagePath3 from './assets/images/Archer Transition 3.png';
import transitionImagePath4 from './assets/images/Archer Transition 4.png';
import woodhouseImagePath from './assets/images/Woodhouse transparent.png'; 


const transitionImages = [
  transitionImagePath1,
  transitionImagePath2,
  transitionImagePath3,
  transitionImagePath4,
];

function getRandomTransitionImage() {
  const randomIndex = Math.floor(Math.random() * transitionImages.length);
  return transitionImages[randomIndex];
}

function createTransitionImage(callback) {
  const img = document.createElement('img');
  img.src = getRandomTransitionImage();
  img.classList.add('transition-image');
  document.body.appendChild(img);

  
  img.addEventListener('animationend', (event) => {
    if (event.animationName === 'fadeIn') {
      callback(); 
    }
  });

  
  img.addEventListener('animationend', (event) => {
    if (event.animationName === 'slideRight') {
      img.remove();
    }
  });
}

function addWoodhouseImage() {
  
  const woodhouseContainer = document.createElement('div');
  woodhouseContainer.classList.add('woodhouse-container');

  const woodhouseImg = document.createElement('img');
  woodhouseImg.src = woodhouseImagePath;
  woodhouseImg.classList.add('woodhouse-image');
  woodhouseContainer.appendChild(woodhouseImg);

  const speechBubble = document.createElement('div');
  speechBubble.classList.add('speech-bubble');
  speechBubble.innerText = "I shall fetch a rug!";
  woodhouseContainer.appendChild(speechBubble);

  const content = document.getElementById('content');
  content.appendChild(woodhouseContainer);
}

function initialize() {
  loadNav();

  const homeTab = document.querySelector('nav p:nth-child(1)');
  const menuTab = document.querySelector('nav p:nth-child(2)');
  const aboutTab = document.querySelector('nav p:nth-child(3)');

  homeTab.addEventListener('click', () => {
    createTransitionImage(() => {
      loadHome();
      addWoodhouseImage();
    });
  });

  menuTab.addEventListener('click', () => {
    createTransitionImage(() => {
      loadMenu();
    });
  });

  aboutTab.addEventListener('click', () => {
    createTransitionImage(() => {
      loadAbout();
      addWoodhouseImage();
    });
  });

  loadHome();
  addWoodhouseImage();

  const footer = document.createElement('footer');
  footer.innerHTML = '<p>Built by Aurorn</p>';
  document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', initialize);
