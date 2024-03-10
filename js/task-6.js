const controlsDiv = document.getElementById('controls');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesDiv.innerHTML = '';

  let currentWidth = 30;
  let currentHeight = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${currentWidth}px`;
    box.style.height = `${currentHeight}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesDiv.appendChild(box);

    currentWidth += 10;
    currentHeight += 10;
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = parseInt(controlsDiv.querySelector('input').value);

  if (!amount || amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);
