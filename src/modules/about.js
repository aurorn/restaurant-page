import woodhouseImagePath from '../assets/images/Woodhouse transparent.png';

function loadAbout() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');

  const woodhouseImg = document.createElement('img');
  woodhouseImg.src = woodhouseImagePath;
  woodhouseImg.classList.add('woodhouse-about-image');
  aboutContainer.appendChild(woodhouseImg);

  const textBox = document.createElement('div');
  textBox.classList.add('about-text-box');
  textBox.innerHTML = `
    <h2>About This Website</h2>
    <br>
    <p>This website was built as instructed by the Odin Project:</p>
    <br>
    <ul>
      <li><strong>npm init</strong>: Initialized the project and created a <code>package.json</code> file.</li>
      <li><strong>webpack</strong>: Bundled JavaScript modules and assets for efficient loading.</li>
      <li><strong>JavaScript</strong>: Dynamically added content to the HTML using modular JavaScript.</li>
      <li><strong>CSS</strong>: Styled the website with custom fonts, layouts, and animations.</li>
    </ul><br>
    <p>The website features tabbed browsing to navigate between the Home, Menu, and About sections. Each section is dynamically loaded using JavaScript modules.</p>
  `;
  aboutContainer.appendChild(textBox);

  content.appendChild(aboutContainer);
}

export default loadAbout;
