const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

function updateName() {
  const name = nameInput.value.trim();

  if (name) {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
}

nameInput.addEventListener('input', updateName);

updateName();
