// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);


const redText = document.createElement('p');
redText.classList.add('content');
redText.textContent = "Hey I'm red!";
redText.style.cssText = "color: red;"
container.appendChild(redText);

const blueText = document.createElement('h3');
blueText.classList.add('content');
blueText.textContent = "I'm blue h3!";
blueText.style.cssText = "color: blue;"
container.appendChild(blueText);

const box = document.createElement('div');
box.classList.add('content');
box.style.backgroundColor = "pink"; 
box.style.border = "2px solid black";
container.appendChild(box);


const innerContent = document.createElement('h1');
innerContent.classList.add('content');
innerContent.textContent = "I'm in a div";
box.appendChild(innerContent);


const moreContent = document.createElement('p');
moreContent.classList.add('content');
moreContent.textContent = "ME TOO!";
box.appendChild(moreContent);


