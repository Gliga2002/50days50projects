const imageContainer = document.querySelector('.container');

function expandCard(e) {
  const clickedEl = e.target.closest('.image');

  if (!clickedEl.classList.contains('image')) return;
  removeActivePanel();
  console.log(clickedEl);
  clickedEl.classList.add('active');
}

function removeActivePanel() {
  const panelArray = Array.from(imageContainer.children);
  panelArray.forEach((panel) => panel.classList.remove('active'));
}

imageContainer.addEventListener('click', expandCard);
