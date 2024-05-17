export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Master Sterlings Restaurant';
  
    const description = document.createElement('p');
    description.textContent = 'I will try my best to accommodate you';
  
    content.appendChild(headline);
    content.appendChild(description);
  }
  