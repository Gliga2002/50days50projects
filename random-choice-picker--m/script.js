const textarea = document.querySelector('textarea');
const form = document.querySelector('form');
const choiceContainer = document.querySelector('.choice__container');


let inputData = '';

textarea.focus();

textarea.addEventListener('keyup', function (e) {
  if (e.key === ',') {
    inputData = '';
    return;
  }

  if (e.key === 'Enter') {
    const timerId = setInterval(() => {
      removePrevActiveChoiceBox();
      setActiveChoiceBox(randomNumber(0, choiceContainer.children.length));
    }, 50);

    setTimeout(() => {
      clearInterval(timerId);
    }, 3000);
    return;

  }

  if (e.key === 'Backspace') {
    if (!inputData) return;
    inputData = inputData.slice(0, -1);
    document.querySelector(`[id="${String(choiceContainer.children.length - 1)}"]`).innerText = inputData;
    return;
  }

  inputData += e.key;
  console.log(inputData);

  if (inputData.length === 1) renderChoiceBox(inputData)

  if (inputData.length !== 1) {
    console.log(document.querySelector(`[id="${String(choiceContainer.children.length - 1)}"]`))
    document.querySelector(`[id="${String(choiceContainer.children.length - 1)}"]`).innerText = inputData;
  }

})

function renderChoiceBox(value) {
  if (!value) return;
  const choiceBox = document.createElement('div');
  choiceBox.setAttribute('id', choiceContainer.children.length);
  choiceBox.innerText = value;
  choiceBox.classList.add('choice__box');
  choiceContainer.append(choiceBox);
}

// Function to generate random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function removePrevActiveChoiceBox() {
  const choiceContainerChildren = Array.from(choiceContainer.children);
  choiceContainerChildren.forEach((choiceBox) => choiceBox.classList.remove('active'))
}

function setActiveChoiceBox(dataId) {
  const choiceBox = document.querySelector(`[id="${String(dataId)}"]`);
  choiceBox.classList.add('active');

}




