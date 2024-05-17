export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const headline = document.createElement('h1');
    headline.textContent = 'Menu';
  
    const description = document.createElement('p');
    description.textContent = 'Lorem Ipsum';
  
    content.appendChild(headline);
    content.appendChild(description);
  }
  