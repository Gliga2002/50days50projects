const progressContainer = document.querySelector('.progress-container');
const circles = document.querySelectorAll('.circle');
const progressStepFull = document.querySelector('.progress-step--full');
const buttonsContainer = document.querySelector('.buttons');
const prevBtn = document.querySelector('.btn--prev');
const nextBtn = document.querySelector('.btn--next');

let currActive = 1;
let numOfCircles = circles.length;

function setProgress(e) {
  const clickedEl = e.target;
  if (
    !clickedEl.classList.contains('circle') &&
    !clickedEl.classList.contains('btn--next') &&
    !clickedEl.classList.contains('btn--prev')
  ) return;
    
  if (clickedEl.classList.contains('circle'))
   currActive = Number(clickedEl.textContent);

   if (clickedEl.classList.contains('btn--next')) updateNext();

   if (clickedEl.classList.contains('btn--prev')) updatePrev();

   setActiveCircle();

   setProgressStep();

   checkBtn();
}

function updateNext() {
  currActive++;

  if (currActive >= numOfCircles) {
    currActive = numOfCircles;
  }
}

function updatePrev() {
  currActive--;

  if (currActive <= 1) {
    currActive = 1;
  }
}

function setActiveCircle() {
  removePrevActiveCircle();

  for (let i = 1; i <= currActive; i++) {
    document.querySelector(`.circle--${i}`).classList.add('active');
  }
}

function removePrevActiveCircle() {
  circles.forEach((circle) => circle.classList.remove('active'));
}

function setProgressStep() {
  const calcWidth = ((currActive - 1) / (numOfCircles - 1)) * 100;
  progressStepFull.style.width = calcWidth + '%';
}

function checkBtn() {
  if (currActive === 1) disablePrevBtn();

  if (currActive === numOfCircles) disableNextBtn();

  if (currActive !== 1 && currActive !== numOfCircles) removeDisableAtr();
}

function disablePrevBtn() {
  prevBtn.setAttribute('disabled', '');
  nextBtn.removeAttribute('disabled');
}

function disableNextBtn() {
  nextBtn.setAttribute('disabled', '');
  prevBtn.removeAttribute('disabled');
}

function removeDisableAtr() {
  nextBtn.removeAttribute('disabled');
  prevBtn.removeAttribute('disabled');
}

progressContainer.addEventListener('click', setProgress);
