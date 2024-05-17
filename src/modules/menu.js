export default function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const container = document.createElement('div');
  container.classList.add('menu');

  const headline = document.createElement('h1');
  headline.textContent = 'Woodhouse Specials';
  headline.classList.add('headline');

  const description = document.createElement('p');
  description.textContent = '';
  description.classList.add('description');

  container.appendChild(headline);
  container.appendChild(description);
  content.appendChild(container);
}
