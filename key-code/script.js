const buttonEl = document.querySelector('.btn');
const containerEl = document.querySelector('.container');
const containerBoxKey = document.querySelector('.container__box__content--key');
const containerBoxKeyCode = document.querySelector(
  '.container__box__content--keyCode'
);
const containerBoxCode = document.querySelector(
  '.container__box__content--code'
);

window.addEventListener('keypress', (e) => {
  buttonEl.classList.add('hidden');
  containerEl.classList.remove('hidden');

  containerBoxKey.innerText = e.key === ' ' ? 'Space' : e.key;
  containerBoxKeyCode.innerText = e.keyCode;
  containerBoxCode.innerText = e.code;
});
