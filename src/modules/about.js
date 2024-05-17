export default function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const headline = document.createElement('h1');
    headline.textContent = 'About Us';
  
    const description = document.createElement('p');
    description.textContent = 'Woodhouse Specials';
  
    content.appendChild(headline);
    content.appendChild(description);
  }
  