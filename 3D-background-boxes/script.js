const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');
const ROWNUMBER = 4;
const COLUMNNUMBER = 4;

btn.addEventListener('click', () => { boxesContainer.classList.toggle('big') });

function createBoxes() {
  for (let i = 0; i < ROWNUMBER; i++) {
    for (let j = 0; j < COLUMNNUMBER; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();
