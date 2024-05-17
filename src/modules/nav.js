export default function loadNav() {
    const header = document.querySelector('header');
    
    const nav = document.createElement('nav');
    
    const homeTab = document.createElement('p');
    homeTab.textContent = 'Home';
    homeTab.classList.add('navBtn');
  
    const menuTab = document.createElement('p');
    menuTab.textContent = 'Menu';
    menuTab.classList.add('navBtn');
  
    const aboutTab = document.createElement('p');
    aboutTab.textContent = 'About';
    aboutTab.classList.add('navBtn');
  
    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(aboutTab);
  
    header.appendChild(nav);
  }
  