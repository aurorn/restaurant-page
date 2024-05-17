export default function loadNav() {
    const header = document.querySelector('header');
    
    const nav = document.createElement('nav');
    
    const homeTab = document.createElement('p');
    homeTab.textContent = 'Home';
  
    const menuTab = document.createElement('p');
    menuTab.textContent = 'Menu';
  
    const aboutTab = document.createElement('p');
    aboutTab.textContent = 'About';
  
    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(aboutTab);
  
    header.appendChild(nav);
  }
  